<script>
	import Btn from "../components/Btn/Btn.svelte";

	let count = 0;
	const increment = () => {
		count += 1;
	};
</script>

<Btn text={count} onClick={increment} />

<button on:click={increment}>
	Clicks: {count}
</button>
