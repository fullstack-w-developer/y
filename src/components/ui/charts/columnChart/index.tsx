import React from 'react';
import { Column } from '@ant-design/plots';
import { dataChartCokumn, toFarsiNumber } from '@/utils/data';
import { Wrapper } from './ColumnChartStyles';

const ColumnChart = () => {

  var config = {
    data: dataChartCokumn,
    isStack: true,
    autoFit: true,
    appendPadding: [27, 7, 50, 0],
    color: ['#36ACE9', '#E44674', '#414141'],
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    label: {
      style:{
        fontSize:[8]
      },
      position: 'middle',
      // 'top', 'bottom', 'middle'
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
      
      ],
    },
    legend: false,
    columnWidthRatio: 0.3, 
    columnStyle: {
      radius: [10, 10, 10, 10],
    },
    yAxis: {
      label: {
        formatter: (text: string) => {
          return "";
        },
      },
      line: false,
      grid: {
        line: false,
      },
    },
    tooltip: {
      showTitle: false,
      formatter: (datum: any) => {
        return {
          name: `l`,
          value: `kkkk`,
        };
      },
    },
  };
  return <Wrapper>
    {/* @ts-ignore */}
    <Column {...config} />
  </Wrapper>
};


export default ColumnChart