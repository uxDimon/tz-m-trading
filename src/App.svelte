<script>
	// import logo from "./assets/svelte.png";
	import Counter from "./lib/Counter.svelte";
	import Btn from "./components/Btn/Btn.svelte";
	import TraderBtn from "./components/TraderBtn/TraderBtn.svelte";

	const btn = {
		index: 1,
		monthlyProfit: 233.23,
		name: "Crystal Williams",
		img: "https://flagcdn.com/h40/in.png",
		isActive: true,
	};
</script>

<main>
	<!-- <img src={logo} alt="Svelte Logo" /> -->

	<Counter />
	<TraderBtn {...btn} />
</main>
