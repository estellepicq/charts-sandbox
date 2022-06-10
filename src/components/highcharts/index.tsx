import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { averages, ranges } from "../../shared/data";
import highchartsMore from 'highcharts/highcharts-more';
highchartsMore(Highcharts);

const HighchartsCharts: React.FC = () => {
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Evolution du taux de charge'
    },
    xAxis: {
      type: 'datetime',
  },

  yAxis: {
      title: {
          text: null
      }
  },

  tooltip: {
      crosshairs: true,
      shared: true,
  },

  series: [{
      name: 'Canal gauche',
      data: averages,
      zIndex: 1,
      marker: {
          fillColor: 'white',
          lineWidth: 2,
          // lineColor: Highcharts.getOptions().colors[0]
      }
  }, {
      name: 'Range',
      data: ranges,
      type: 'arearange',
      lineWidth: 0,
      linkedTo: ':previous',
      // color: Highcharts.getOptions().colors[0],
      fillOpacity: 0.3,
      zIndex: 0,
      marker: {
          enabled: false
      }
  }]
  };

  return (
    <div>
     <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HighchartsCharts;
