'use client';
import { Area } from '@ant-design/plots';
import { dataLineChart, toFarsiNumber } from '@/utils/data';
import { Wrapper } from './AreaChartStyles';
dataLineChart;
const AreaChart = () => {
  const config = {
    data: dataLineChart,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    color: ['#36ACE9', '#F6416C', '#414141'],
    yAxis: {
      label: {
        formatter: (v: string) => `${toFarsiNumber(v)} میلیون`,
      },
      grid: {
        line: {
          style: {
            stroke: '#ececec',
            lineDash: [20, 36],
           

          },
        
          
        },
      },
      line: {
        
        style: {
          stroke: '#ececec',
          
          
        },
      },
    },
    xAxis: {
      nice: true,
      label: {
        formatter: (v: string) => `${toFarsiNumber(v)}`,
      },
    },
   
  };

  return (
    <Wrapper>
      <div className="lineChart">
        <Area {...config} />
      </div>
    </Wrapper>
  );
};
export default AreaChart;
