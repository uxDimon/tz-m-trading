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
				borderColor: "#DDE0E9",
			},
			rightPriceScale: {
				borderColor: "#DDE0E9",
			},
		},
		theme = {
			chart: {
				layout: {
					fontFamily: "Roboto, sans-serif",
					fontSize: 16,
					textColor: "#D9D9D9",
					backgroundColor: "#FFFFFF",
					lineColor: "#DDE0E9",
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
