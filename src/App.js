import './App.css';
import PlotlyCharts from './components/plotly';
import HighchartsCharts from './components/highcharts';
import VegaLiteCharts from './components/vegalite';
import { TabView, TabPanel } from 'primereact/tabview';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="App">
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header="Plotly.js">
            <PlotlyCharts/>
          </TabPanel>
          <TabPanel header="Highcharts">
            <HighchartsCharts/>
          </TabPanel>
          <TabPanel header="Vega-lite">
            <VegaLiteCharts/>
          </TabPanel>
      </TabView>
    </div>
  );
}

export default App;
