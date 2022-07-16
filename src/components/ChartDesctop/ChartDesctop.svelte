<script>
	import { Chart, AreaSeries } from "svelte-lightweight-charts";

	export let data = [],
		width = 800,
		height = 280,
		className = "";

	const options = {
			width: width,
			height: height,
			timeScale: {
				barSpacing: 19,
			},
		},
		theme = {
			chart: {
				layout: {
					fontFamily: "Roboto",
					backgroundColor: "#FFFFFF",
					lineColor: "#DDE0E9",
					textColor: "#81818D",
				},
				watermark: {
					color: "rgba(0, 0, 0, 0)",
				},
				grid: {
					vertLines: {
						visible: false,
					},
					horzLines: {
						visible: false,
					},
				},
			},
			series: {
				topColor: "rgba(0, 0, 0, 0)",
				bottomColor: "rgba(0, 0, 0, 0)",
				lineColor: "#8A24F3",
			},
		};

	let observer;
	let handleContainerReference = (element) => {
		if (observer) {
			observer.disconnect();
		}
		if (!element) {
			return;
		}
		observer = new ResizeObserver(([entry]) => {
			options.width = entry.contentRect.width;
		});
		observer.observe(element);
	};
</script>

<Chart {...options} {...theme.chart} container={{ class: className, ref: handleContainerReference }}>
	<AreaSeries {data} reactive={true} {...theme.series} />
</Chart>
