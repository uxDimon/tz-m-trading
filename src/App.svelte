<script>
	import "./App.scss";
	import { traderList } from "./stores.js";

	import Btn from "./components/Btn/Btn.svelte";
	import TraderBtn from "./components/TraderBtn/TraderBtn.svelte";

	// Список трейдеров
	let traderListValue = [];

	const unsubscribe = traderList.subscribe((value) => {
		traderListValue = value;
	});

	console.log(traderListValue);

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

	// Copy Now
	const copyNow = () => {
		console.info(activeTrader);
	};
</script>

<div class="block app">
	<div class="block__wrap app__wrap">
		<h1 class="app__title">Copy the best masters</h1>
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
					<Btn on:click={copyNow} className="app__info__btn">Copy Now</Btn>
				</div>
			</div>
		</div>
	</div>
</div>
