'use client';
import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';
import { Wrapper } from './NewStyles';
import Image from 'next/image';
import Question_Image from '@/assets/images/question.svg';
const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    width: 600,
    height: 350,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontSize: [7, 62],
    },
    shape: 'rectangle',
    random: () => 0.5,
  };

  return (
    <Wrapper>
      <div className={'new-sort'}>
        <Image src={Question_Image} alt="" />
        <div>
          <select className={'select'}>
            <option>سورژه های داغ</option>
          </select>
        </div>
      </div>
      {/* @ts-ignore */}
      <WordCloud {...config} />
    </Wrapper>
  );
};

export default News;
