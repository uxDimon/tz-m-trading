<script>
	import { Chart, AreaSeries } from "svelte-lightweight-charts";

	export let data = [],
		width = 280,
		height = 100,
		className = "";

	const options = {
			width: width,
			height: height,

			timeScale: {
				barSpacing: 7,
				visible: false,
			},
			rightPriceScale: {
				visible: false,
			},
			crosshair: {
				vertLine: {
					visible: false,
					labelVisible: false,
				},
				horzLine: {
					visible: false,
					labelVisible: false,
				},
			},
		},
		theme = {
			chart: {
				layout: {
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
				crosshairMarkerVisible: false,
				lastValueVisible: false,
				priceLineVisible: false,
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
	<AreaSeries {data} {...theme.series} />
</Chart>
