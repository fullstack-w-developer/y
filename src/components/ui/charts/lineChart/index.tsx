'use client';
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { dataLineChart_, toFarsiNumber } from '@/utils/data';
import { Question_Icon } from '@/components/icons';
import Social from '../Social';
import { Wrapper } from './LineChartStyles';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data: dataLineChart_,
     
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    xAxis: {
      nice: true,
      label: {
        autoRotate: false,
        offset: 13,
        style: {
          fill: '#555555',
          fontSize: 12,
        },
        formatter: (name: string) => `${toFarsiNumber(name)}`,
      },
      line: {
        style: {
          stroke: '#ececec',
        },
      },
      grid: {
        line: {
          style: {
            stroke: '#ececec',
          },
        },
      },
    },
    yAxis: {
      label: {
        autoRotate: false,
        offset: 8,
        style: {
          fill: '#555555',
          fontSize: 12,
        },
        formatter: (v: string) => `${toFarsiNumber(v)}`,
      },
      grid: {
        line: {
          style: {
            stroke: '#ececec',
            lineDash: [0],
          },
        },
      },
    },
    // label
    label: {
      layout: [
        {
          type: 'hide-overlap',
        },
      ],
      // 隐藏重叠label
      style: {
        textAlign: 'right',
      },
      formatter: (item: any) => ``,
    },
    // point
    point: {
      size: 5,
      style: {
        lineWidth: 1,
        fillOpacity: 1,
      },
      shape: (item: any) => {
        return 'circle';
      },
    },
    color: ['#36ACE9', '#E44674',"#414141"],
    legend: false,
  };

  return (
    <Wrapper>
      <div className={'container_title'}>
        <Question_Icon />
        <h1>روند بازدید در ساعات شبانه روز</h1>
      </div>

      {/* @ts-ignore */}
      <Line {...config} height={250} />
      <Social />
    </Wrapper>
  );
};
export default Page;
