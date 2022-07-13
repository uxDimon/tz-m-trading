<script>
	import "./Btn.scss";

	export let className = null;
</script>

<button class="btn {className}" on:click>
	<slot>¯\_(ツ)_/¯</slot>
</button>
