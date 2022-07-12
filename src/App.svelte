<script>
	import "./App.scss";
	import Btn from "./components/Btn/Btn.svelte";
	import TraderBtn from "./components/TraderBtn/TraderBtn.svelte";

	import json from "./input.json";

	// Рандомные 4 ключа для json
	const randomKey = [];

	const getRandom = (max) => {
			return Math.floor(Math.random() * (max + 1));
		},
		pushRandomNumber = (max, keyList) => {
			// если max будет меньше чем итераций то будет ошибочка(
			const randomNumber = getRandom(max);

			const isRepeat = keyList.every((item) => {
				return randomNumber !== item;
			});

			if (isRepeat) {
				keyList.push(randomNumber);
			} else {
				pushRandomNumber(max, keyList);
			}
		};

	for (let index = 0; index < 4; index++) {
		pushRandomNumber(json.length, randomKey);
	}

	console.log(randomKey);

	//
	const traderList = [];

	const btn = {
		index: 1,
		monthlyProfit: -233.23,
		name: "Crystal Williams",
		img: "https://flagcdn.com/h40/in.png",
		isActive: false,
	};
</script>

<main class="app">
	<h1 class="app__title">Copy the best masters</h1>
	<ul class="app__trader-list">
		<li class="app__trader-list__item">
			<TraderBtn {...btn} className="app__trader-list__btn" />
		</li>
	</ul>
</main>
