<script>
	import "swiper/css/bundle";
	import "./App.scss";
	import { Pagination } from "swiper";
	import { Swiper, SwiperSlide } from "swiper/svelte";

	import { traderList } from "./stores.js";

	import Btn from "./components/Btn/Btn.svelte";
	import TraderBtn from "./components/TraderBtn/TraderBtn.svelte";
	import ChartDesctop from "./components/ChartDesctop/ChartDesctop.svelte";
	import ChartMobail from "./components/ChartMobail/ChartMobail.svelte";

	// Список трейдеров
	let traderListValue = [];

	const unsubscribe = traderList.subscribe((value) => {
		traderListValue = value;
	});

	// Переключение трейдеров
	let activeIndex = 0;
	$: activeTrader = traderListValue[activeIndex];

	const traderChoose = (index = 0) => {
		for (const item of traderListValue) {
			if (item.isActive) {
				item.isActive = false;
				break;
			}
		}
		traderListValue[index].isActive = true;
		activeIndex = index;
	};

	traderChoose();

	let clientWidth = window.innerWidth;
	window.addEventListener("resize", () => {
		clientWidth = window.innerWidth;
	});
</script>

<div class="block app">
	<div class="block__wrap app__wrap">
		<h1 class="app__title">Copy the best masters</h1>

		{#if clientWidth > 768}
			<div class="app__body">
				<ul class="app__trader-list">
					{#each traderListValue as item, index ("trader_" + index)}
						<li class="app__trader-list__item">
							<TraderBtn
								on:click={() => traderChoose(index)}
								options={item}
								index={index + 1}
								className="app__trader-list__btn"
							/>
						</li>
					{/each}
				</ul>

				<div class="app__info">
					<div class="app__info__head">
						<div class="app__info__numbers">
							<span class="app__info__numbers__name">Monthly profit</span>
							<span class="app__info__numbers__vaslue">{activeTrader.monthly_profit} %</span>
						</div>
						<div class="app__info__numbers">
							<span class="app__info__numbers__name">Total profit</span>
							<span class="app__info__numbers__vaslue">{activeTrader.total_profit} %</span>
						</div>
						<div class="app__info__numbers">
							<span class="app__info__numbers__name">In management</span>
							<span class="app__info__numbers__vaslue">{activeTrader.capital} USD</span>
						</div>
						<Btn on:click={() => console.info(activeTrader)} className="app__info__btn">Copy Now</Btn>
					</div>

					<ChartDesctop data={activeTrader.chart} className="app__info__chart" />
				</div>
			</div>
		{:else}
			<Swiper
				class="app__slider"
				initialSlide={activeIndex}
				spaceBetween={20}
				modules={[Pagination]}
				pagination={{ clickable: true }}
				on:slideChange={(e) => traderChoose(e.detail[0].realIndex)}
			>
				{#each traderListValue as item, index ("trader_" + index)}
					<SwiperSlide class="app__slider__slide">
						<div class="app__slider__wrap">
							<TraderBtn options={item} index={index + 1} className="app__slider__btn" />

							<div class="app__slider__numbers">
								<div class="app__info__numbers">
									<span class="app__info__numbers__name">Monthly profit</span>
									<span class="app__info__numbers__vaslue">{item.monthly_profit} %</span>
								</div>
								<div class="app__info__numbers">
									<span class="app__info__numbers__name">Total profit</span>
									<span class="app__info__numbers__vaslue">{item.total_profit} %</span>
								</div>
							</div>

							<ChartMobail data={item.chart} className="app__slider__chart" />

							<Btn on:click={() => console.info(item)} className="app__slider__btn">Copy Now</Btn>
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
		{/if}
	</div>
</div>
