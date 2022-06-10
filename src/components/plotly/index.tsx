import React from "react";
import Plot from 'react-plotly.js';
import { xData, xRangeData, yData, yRangeData } from "../../shared/data";

const PlotlyCharts: React.FC = () => {

  return (
    <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: 'scatter',
            mode: 'lines',
            line: {color: '#17BECF'},
            name: 'Canal gauche',
            showlegend: true
          },
          {
            x: xRangeData,
            y: yRangeData,
            fill: "tozerox", 
            fillcolor: "rgba(0,100,80,0.2)", 
            line: {color: "transparent"}, 
            name: "Fair", 
            showlegend: false, 
            type: "scatter"
          }
        ]}
        layout={
          {
            width: 800,
            height: 500,
            title: 'Evolution du taux de charge',
            yaxis: {
              range: [0, 80],
            }
          }
        }
      />
  )
}

export default PlotlyCharts;
