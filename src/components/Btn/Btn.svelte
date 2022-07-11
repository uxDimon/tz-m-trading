<script>
	import "./Btn.scss";

	export let text = "¯\\_(ツ)_/¯",
		onClick = () => {
			return false;
		};
</script>

<button class="btn" on:click={onClick}>
	{text}
</button>
