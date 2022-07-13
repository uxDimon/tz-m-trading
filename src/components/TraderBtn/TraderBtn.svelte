<script>
	import "./TraderBtn.scss";

	export let index = 0,
		options = {
			flag: null,
			monthly_profit: null,
			name: "Name unknown",
			isActive: false,
		},
		className = null;

	let profitClassName = "",
		monthlyProfit = options.monthly_profit;

	if (monthlyProfit === null) {
		profitClassName = "_grey";
		monthlyProfit = "Profit unknown";
	} else if (+monthlyProfit < 0) {
		monthlyProfit = "- " + Math.abs(monthlyProfit) + "%";
		profitClassName = "_read";
	} else {
		monthlyProfit = "+ " + monthlyProfit + "%";
	}
</script>

<button class="trader-btn {className}" class:_active={options.isActive} title={options.name} on:click>
	<img src={options.flag} alt={options.name} class="trader-btn__img" />
	<div class="trader-btn__wrap">
		<span class="trader-btn__name">{index + ". " + options.name}</span>
		<span class="trader-btn__monthly-profit {profitClassName}">{monthlyProfit}</span>
	</div>
</button>
