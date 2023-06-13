
import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const LineChart = props => {
	const {
		data,
		colors: {
			backgroundColor = 'white',
			lineColor = '#2962FF',
			textColor = 'black',
			areaTopColor = '#2962FF',
			areaBottomColor = 'rgba(41, 98, 255, 0.28)',
		} = {},
	} = props;

	const chartContainerRef = useRef();

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid, color: backgroundColor },
					textColor,
				},
        timeScale: {
          // borderColor: "rgba(197, 203, 206, 0.8)",
          timeVisible: true,
          secondsVisible: true,
          // fixRightEdge: true,
          // fixLeftEdge: true,
        },
				width: chartContainerRef.current.clientWidth,
				height: window.innerHeight / 2,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addAreaSeries({ 
        lineColor, 
        topColor: areaTopColor, 
        bottomColor: areaBottomColor, 
        title: "CPU Usage"
      });
			newSeries.setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};



// export function LineChart(props) {
// 	return (
// 		<ChartComponent {...props} data={initialData}></ChartComponent>
// 	);
// }

export default LineChart