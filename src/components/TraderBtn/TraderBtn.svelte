<script>
	import "./TraderBtn.scss";

	export let index = 0,
		name = "Name unknown",
		monthlyProfit = null,
		img = null,
		isActive = false,
		onClick = () => {
			return false;
		};

	let profitClassName = "";

	if (monthlyProfit === null) {
		profitClassName = "_grey";
		monthlyProfit = "Profit unknown";
	} else if (+monthlyProfit < 0) {
		monthlyProfit = "- " + Math.abs(monthlyProfit) + "%";
		profitClassName = "_read";
	} else {
		monthlyProfit = "+ " + monthlyProfit + "%";
	}

	if (isActive) profitClassName + " _active";
</script>

<button class="trader-btn" title={name} on:click={onClick}>
	<img src={img} alt={name} class="trader-btn__img" />
	<div class="trader-btn__wrap">
		<span class="trader-btn__name">{index + ". " + name}</span>
		<span class="trader-btn__monthly-profit {profitClassName}">{monthlyProfit}</span>
	</div>
</button>
