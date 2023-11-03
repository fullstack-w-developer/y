import Telegram_Icon from '@/assets/images/Telegram.png';
import Twitter_Icon from '@/assets/images/Twitter.png';
import Instagram_Icon from '@/assets/images/instagram.png';
export function toFarsiNumber(n: string | number) {
  if (n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
  }
}

export const socialLineChart = [
  {
    icon: Twitter_Icon,
    name: 'بازدید از توییتر',
    upload: '200K',
    download: '11K',
  },
  {
    icon: Telegram_Icon,
    name: 'بازدید از تلگرام',
    upload: '200K',
    download: '11K',
  },
  {
    icon: Instagram_Icon,
    name: 'بازدید از اینستاگرام',
    upload: '200K',
    download: '11K',
  },
];


export   const dataLineChart = [
    {
      country: 'سال',
      date: 1965,
      value: 1390.5,
    },
    {
      country: 'سال',
      date: 1966,
      value: 1469.5,
    },
    {
      country: 'سال',
      date: 1967,
      value: 1521.7,
    },
    {
      country: 'سال',
      date: 1968,
      value: 1615.9,
    },
    {
      country: 'سال',
      date: 1969,
      value: 1703.7,
    },
    {
      country: 'سال',
      date: 1970,
      value: 1767.8,
    },
    {
      country: 'سال',
      date: 1971,
      value: 1806.2,
    },
    {
      country: 'سال',
      date: 1972,
      value: 1903.5,
    },
    {
      country: 'سال',
      date: 1973,
      value: 1986.6,
    },
    {
      country: 'سال',
      date: 1974,
      value: 1952,
    },
    {
      country: 'سال',
      date: 1975,
      value: 1910.4,
    },
    {
      country: 'سال',
      date: 1976,
      value: 2015.8,
    },
    {
      country: 'سال',
      date: 1977,
      value: 2074.7,
    },
    {
      country: 'سال',
      date: 1978,
      value: 2092.7,
    },
    {
      country: 'سال',
      date: 1979,
      value: 2123.8,
    },
    {
      country: 'سال',
      date: 1980,
      value: 2068.3,
    },
    {
      country: 'سال',
      date: 1981,
      value: 2018,
    },
    {
      country: 'سال',
      date: 1982,
      value: 1951.5,
    },
    {
      country: 'سال',
      date: 1983,
      value: 1941.1,
    },
    {
      country: 'سال',
      date: 1984,
      value: 2046.2,
    },
    {
      country: 'سال',
      date: 1985,
      value: 2053.1,
    },
    {
      country: 'سال',
      date: 1986,
      value: 2060.7,
    },
    {
      country: 'سال',
      date: 1987,
      value: 2130.8,
    },
    {
      country: 'سال',
      date: 1988,
      value: 2223.5,
    },
    {
      country: 'سال',
      date: 1989,
      value: 2275.9,
    },
    {
      country: 'سال',
      date: 1990,
      value: 2280.7,
    },
    {
      country: 'سال',
      date: 1991,
      value: 2282,
    },
    {
      country: 'سال',
      date: 1992,
      value: 2319.7,
    },
    {
      country: 'سال',
      date: 1993,
      value: 2366.6,
    },
    {
      country: 'سال',
      date: 1994,
      value: 2420.2,
    },
    {
      country: 'سال',
      date: 1995,
      value: 2466.9,
    },
    {
      country: 'سال',
      date: 1996,
      value: 2547.4,
    },
    {
      country: 'سال',
      date: 1997,
      value: 2569,
    },
    {
      country: 'سال',
      date: 1998,
      value: 2585.2,
    },
    {
      country: 'سال',
      date: 1999,
      value: 2633.8,
    },
    {
      country: 'سال',
      date: 2000,
      value: 2699.4,
    },
    {
      country: 'سال',
      date: 2001,
      value: 2640.1,
    },
    {
      country: 'سال',
      date: 2002,
      value: 2687.7,
    },
    {
      country: 'سال',
      date: 2003,
      value: 2700.7,
    },
    {
      country: 'سال',
      date: 2004,
      value: 2759.4,
    },
    {
      country: 'سال',
      date: 2005,
      value: 2775.6,
    },
    {
      country: 'سال',
      date: 2006,
      value: 2761.9,
    },
    {
      country: 'سال',
      date: 2007,
      value: 2809.5,
    },
    {
      country: 'سال',
      date: 2008,
      value: 2759.4,
    },
    {
      country: 'سال',
      date: 2009,
      value: 2632.5,
    },
    {
      country: 'سال',
      date: 2010,
      value: 2720.7,
    },
    {
      country: 'سال',
      date: 2011,
      value: 2722.9,
    },
    {
      country: 'سال',
      date: 2012,
      value: 2665.1,
    },
    {
      country: 'سال',
      date: 2013,
      value: 2738.3,
    },
    {
      country: 'سال',
      date: 2014,
      value: 2766.8,
    },
    {
      country: 'سال',
      date: 2015,
      value: 2739.7,
    },
    {
      country: 'سال',
      date: 2016,
      value: 2761.9,
    },
    {
      country: 'سال',
      date: 2017,
      value: 2772.8,
    },
    {
      country: 'ماه',
      date: 1965,
      value: 109.2,
    },
    {
      country: 'ماه',
      date: 1966,
      value: 115.7,
    },
    {
      country: 'ماه',
      date: 1967,
      value: 120.5,
    },
    {
      country: 'ماه',
      date: 1968,
      value: 128,
    },
    {
      country: 'ماه',
      date: 1969,
      value: 134.4,
    },
    {
      country: 'ماه',
      date: 1970,
      value: 142.2,
    },
    {
      country: 'ماه',
      date: 1971,
      value: 157.5,
    },
    {
      country: 'ماه',
      date: 1972,
      value: 169.5,
    },
    {
      country: 'ماه',
      date: 1973,
      value: 186.3,
    },
    {
      country: 'ماه',
      date: 1974,
      value: 195.5,
    },
    {
      country: 'ماه',
      date: 1975,
      value: 198,
    },
    {
      country: 'ماه',
      date: 1976,
      value: 211.7,
    },
    {
      country: 'ماه',
      date: 1977,
      value: 223.8,
    },
    {
      country: 'ماه',
      date: 1978,
      value: 236.5,
    },
    {
      country: 'ماه',
      date: 1979,
      value: 251.8,
    },
    {
      country: 'ماه',
      date: 1980,
      value: 262.9,
    },
    {
      country: 'ماه',
      date: 1981,
      value: 262.7,
    },
    {
      country: 'ماه',
      date: 1982,
      value: 265.9,
    },
    {
      country: 'ماه',
      date: 1983,
      value: 268.3,
    },
    {
      country: 'ماه',
      date: 1984,
      value: 278.3,
    },
    {
      country: 'ماه',
      date: 1985,
      value: 285.2,
    },
    {
      country: 'ماه',
      date: 1986,
      value: 304.2,
    },
    {
      country: 'ماه',
      date: 1987,
      value: 315.4,
    },
    {
      country: 'ماه',
      date: 1988,
      value: 324.6,
    },
    {
      country: 'ماه',
      date: 1989,
      value: 329.9,
    },
    {
      country: 'ماه',
      date: 1990,
      value: 331.1,
    },
    {
      country: 'ماه',
      date: 1991,
      value: 339.7,
    },
    {
      country: 'ماه',
      date: 1992,
      value: 355.8,
    },
    {
      country: 'ماه',
      date: 1993,
      value: 368.8,
    },
    {
      country: 'ماه',
      date: 1994,
      value: 390.9,
    },
    {
      country: 'ماه',
      date: 1995,
      value: 408.3,
    },
    {
      country: 'ماه',
      date: 1996,
      value: 425.8,
    },
    {
      country: 'ماه',
      date: 1997,
      value: 448.2,
    },
    {
      country: 'ماه',
      date: 1998,
      value: 465.5,
    },
    {
      country: 'ماه',
      date: 1999,
      value: 463.7,
    },
    {
      country: 'ماه',
      date: 2000,
      value: 476.1,
    },
    {
      country: 'ماه',
      date: 2001,
      value: 477.7,
    },
    {
      country: 'ماه',
      date: 2002,
      value: 483.5,
    },
    {
      country: 'ماه',
      date: 2003,
      value: 489.3,
    },
    {
      country: 'ماه',
      date: 2004,
      value: 515.5,
    },
    {
      country: 'ماه',
      date: 2005,
      value: 533.6,
    },
    {
      country: 'ماه',
      date: 2006,
      value: 564,
    },
    {
      country: 'ماه',
      date: 2007,
      value: 587,
    },
    {
      country: 'ماه',
      date: 2008,
      value: 605.8,
    },
    {
      country: 'ماه',
      date: 2009,
      value: 596.8,
    },
    {
      country: 'ماه',
      date: 2010,
      value: 632.5,
    },
    {
      country: 'ماه',
      date: 2011,
      value: 658.9,
    },
    {
      country: 'ماه',
      date: 2012,
      value: 676.5,
    },
    {
      country: 'ماه',
      date: 2013,
      value: 692,
    },
    {
      country: 'ماه',
      date: 2014,
      value: 697.7,
    },
    {
      country: 'ماه',
      date: 2015,
      value: 701.1,
    },
    {
      country: 'ماه',
      date: 2016,
      value: 696.8,
    },
    {
      country: 'ماه',
      date: 2017,
      value: 700.6,
    },
    {
      country: 'هفته',
      date: 1965,
      value: 1058.1,
    },
    {
      country: 'هفته',
      date: 1966,
      value: 1089.7,
    },
    {
      country: 'هفته',
      date: 1967,
      value: 1121.7,
    },
    {
      country: 'هفته',
      date: 1968,
      value: 1196.6,
    },
    {
      country: 'هفته',
      date: 1969,
      value: 1285.5,
    },
    {
      country: 'هفته',
      date: 1970,
      value: 1369,
    },
    {
      country: 'هفته',
      date: 1971,
      value: 1406.2,
    },
    {
      country: 'هفته',
      date: 1972,
      value: 1472.7,
    },
    {
      country: 'هفته',
      date: 1973,
      value: 1558,
    },
    {
      country: 'هفته',
      date: 1974,
      value: 1535.5,
    },
    {
      country: 'هفته',
      date: 1975,
      value: 1519.3,
    },
    {
      country: 'هفته',
      date: 1976,
      value: 1606.9,
    },
    {
      country: 'هفته',
      date: 1977,
      value: 1632.4,
    },
    {
      country: 'هفته',
      date: 1978,
      value: 1687.5,
    },
    {
      country: 'هفته',
      date: 1979,
      value: 1749.6,
    },
    {
      country: 'هفته',
      date: 1980,
      value: 1706.4,
    },
    {
      country: 'هفته',
      date: 1981,
      value: 1661.4,
    },
    {
      country: 'هفته',
      date: 1982,
      value: 1630.2,
    },
    {
      country: 'هفته',
      date: 1983,
      value: 1645.2,
    },
    {
      country: 'هفته',
      date: 1984,
      value: 1686.9,
    },
    {
      country: 'هفته',
      date: 1985,
      value: 1779.4,
    },
    {
      country: 'هفته',
      date: 1986,
      value: 1811.3,
    },
    {
      country: 'هفته',
      date: 1987,
      value: 1849.7,
    },
    {
      country: 'هفته',
      date: 1988,
      value: 1870,
    },
    {
      country: 'هفته',
      date: 1989,
      value: 1875,
    },
    {
      country: 'هفته',
      date: 1990,
      value: 1853.3,
    },
    {
      country: 'هفته',
      date: 1991,
      value: 1844.6,
    },
    {
      country: 'هفته',
      date: 1992,
      value: 1814.1,
    },
    {
      country: 'هفته',
      date: 1993,
      value: 1805.3,
    },
    {
      country: 'هفته',
      date: 1994,
      value: 1791.3,
    },
    {
      country: 'هفته',
      date: 1995,
      value: 1836.2,
    },
    {
      country: 'هفته',
      date: 1996,
      value: 1896.1,
    },
    {
      country: 'هفته',
      date: 1997,
      value: 1896.4,
    },
    {
      country: 'هفته',
      date: 1998,
      value: 1918.8,
    },
    {
      country: 'هفته',
      date: 1999,
      value: 1907.7,
    },
    {
      country: 'هفته',
      date: 2000,
      value: 1932.1,
    },
    {
      country: 'هفته',
      date: 2001,
      value: 1959.2,
    },
    {
      country: 'هفته',
      date: 2002,
      value: 1954.8,
    },
    {
      country: 'هفته',
      date: 2003,
      value: 1991.6,
    },
    {
      country: 'هفته',
      date: 2004,
      value: 2025.4,
    },
    {
      country: 'هفته',
      date: 2005,
      value: 2037.4,
    },
    {
      country: 'هفته',
      date: 2006,
      value: 2056.4,
    },
    {
      country: 'هفته',
      date: 2007,
      value: 2041.7,
    },
    {
      country: 'هفته',
      date: 2008,
      value: 2038.5,
    },
    {
      country: 'هفته',
      date: 2009,
      value: 1932.1,
    },
    {
      country: 'هفته',
      date: 2010,
      value: 2001.1,
    },
    {
      country: 'هفته',
      date: 2011,
      value: 1949.1,
    },
    {
      country: 'هفته',
      date: 2012,
      value: 1944.3,
    },
    {
      country: 'هفته',
      date: 2013,
      value: 1934,
    },
    {
      country: 'هفته',
      date: 2014,
      value: 1871.2,
    },
    {
      country: 'هفته',
      date: 2015,
      value: 1908.7,
    },
    {
      country: 'هفته',
      date: 2016,
      value: 1934.6,
    },
    {
      country: 'هفته',
      date: 2017,
      value: 1969.5,
    },
    {
      country: 'روز',
      date: 2017,
      value: 1969.5,
    },
  ];


export const dataChartCokumn = [
  {
    date: '1',
    value: 700,
    type: 'black',
    category: 'A',
  },
  {
    date: '1',
    value: 400,
    type: 'red',
  },
  {
    date: '1',
    value: 400,
    type: 'blue',
  },
  {
    date: '2',
    value: 700,
    type: 'black',
  },
  {
    date: '2',
    value: 400,
    type: 'red',
  },
  {
    date: '2',
    value: 400,
    type: 'blue',
  },
  {
    date: '3',
    value: 700,
    type: 'black',
  },
  {
    date: '3',
    value: 400,
    type: 'red',
  },
  {
    date: '3',
    value: 400,
    type: 'blue',
  },
  {
    date: '4',
    value: 700,
    type: 'black',
  },
  {
    date: '4',
    value: 400,
    type: 'red',
  },
  {
    date: '4',
    value: 400,
    type: 'blue',
  },
  {
    date: '5',
    value: 700,
    type: 'black',
  },
  {
    date: '5',
    value: 500,
    type: 'red',
  },
  {
    date: '5',
    value: 400,
    type: 'blue',
  },
  {
    date: '6',
    value: 700,
    type: 'black',
  },
  {
    date: '6',
    value: 600,
    type: 'red',
  },
  {
    date: '6',
    value: 400,
    type: 'blue',
  },
  {
    date: '7',
    value: 700,
    type: 'black',
  },
  {
    date: '7',
    value: 600,
    type: 'red',
  },
  {
    date: '7',
    value: 400,
    type: 'blue',
  },
  {
    date: '8',
    value: 700,
    type: 'black',
  },
  {
    date: '8',
    value: 600,
    type: 'red',
  },
  {
    date: '8',
    value: 400,
    type: 'blue',
  },
  {
    date: '9',
    value: 700,
    type: 'black',
  },
  {
    date: '9',
    value: 600,
    type: 'red',
  },
  {
    date: '10',
    value: 400,
    type: 'blue',
  },
  {
    date: '10',
    value: 345,
    type: 'black',
  },
  {
    date: '10',
    value: 545,
    type: 'red',
  },
  {
    date: '11',
    value: 123,
    type: 'blue',
  },
  {
    date: '11',
    value: 98,
    type: 'black',
  },
  {
    date: '11',
    value: 345,
    type: 'red',
  },
  {
    date: '11',
    value: 511,
    type: 'blue',
  },
  {
    date: '12',
    value: 700,
    type: 'black',
  },
  {
    date: '12',
    value: 600,
    type: 'red',
  },
  {
    date: '12',
    value: 400,
    type: 'blue',
  },
  {
    date: '13',
    value: 700,
    type: 'black',
  },
  {
    date: '13',
    value: 600,
    type: 'red',
  },
  {
    date: '13',
    value: 400,
    type: 'blue',
  },
];

export const usersSelects = [
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
  {
    rate: 1,
    username: 'arash',
    method: 'extended    ',
  },
];


export const visitProcess = [
  [
    {
      "year": "1850",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1850",
      "value": 54,
      "category": "Solid fuel"
    },
    {
      "year": "1850",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1850",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1850",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1851",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1851",
      "value": 54,
      "category": "Solid fuel"
    },
    {
      "year": "1851",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1851",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1851",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1852",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1852",
      "value": 57,
      "category": "Solid fuel"
    },
    {
      "year": "1852",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1852",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1852",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1853",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1853",
      "value": 59,
      "category": "Solid fuel"
    },
    {
      "year": "1853",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1853",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1853",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1854",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1854",
      "value": 69,
      "category": "Solid fuel"
    },
    {
      "year": "1854",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1854",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1854",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1855",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1855",
      "value": 71,
      "category": "Solid fuel"
    },
    {
      "year": "1855",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1855",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1855",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1856",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1856",
      "value": 76,
      "category": "Solid fuel"
    },
    {
      "year": "1856",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1856",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1856",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1857",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1857",
      "value": 77,
      "category": "Solid fuel"
    },
    {
      "year": "1857",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1857",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1857",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1858",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1858",
      "value": 78,
      "category": "Solid fuel"
    },
    {
      "year": "1858",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1858",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1858",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1859",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1859",
      "value": 83,
      "category": "Solid fuel"
    },
    {
      "year": "1859",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1859",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1859",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1860",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1860",
      "value": 91,
      "category": "Solid fuel"
    },
    {
      "year": "1860",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1860",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1860",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1861",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1861",
      "value": 95,
      "category": "Solid fuel"
    },
    {
      "year": "1861",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1861",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1861",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1862",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1862",
      "value": 96,
      "category": "Solid fuel"
    },
    {
      "year": "1862",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1862",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1862",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1863",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1863",
      "value": 103,
      "category": "Solid fuel"
    },
    {
      "year": "1863",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1863",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1863",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1864",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1864",
      "value": 112,
      "category": "Solid fuel"
    },
    {
      "year": "1864",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1864",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1864",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1865",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1865",
      "value": 119,
      "category": "Solid fuel"
    },
    {
      "year": "1865",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1865",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1865",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1866",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1866",
      "value": 122,
      "category": "Solid fuel"
    },
    {
      "year": "1866",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1866",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1866",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1867",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1867",
      "value": 130,
      "category": "Solid fuel"
    },
    {
      "year": "1867",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1867",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1867",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1868",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1868",
      "value": 134,
      "category": "Solid fuel"
    },
    {
      "year": "1868",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1868",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1868",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1869",
      "value": 0,
      "category": "Liquid fuel"
    },
    {
      "year": "1869",
      "value": 142,
      "category": "Solid fuel"
    },
    {
      "year": "1869",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1869",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1869",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1870",
      "value": 1,
      "category": "Liquid fuel"
    },
    {
      "year": "1870",
      "value": 146,
      "category": "Solid fuel"
    },
    {
      "year": "1870",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1870",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1870",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1871",
      "value": 1,
      "category": "Liquid fuel"
    },
    {
      "year": "1871",
      "value": 156,
      "category": "Solid fuel"
    },
    {
      "year": "1871",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1871",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1871",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1872",
      "value": 1,
      "category": "Liquid fuel"
    },
    {
      "year": "1872",
      "value": 173,
      "category": "Solid fuel"
    },
    {
      "year": "1872",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1872",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1872",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1873",
      "value": 1,
      "category": "Liquid fuel"
    },
    {
      "year": "1873",
      "value": 183,
      "category": "Solid fuel"
    },
    {
      "year": "1873",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1873",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1873",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1874",
      "value": 1,
      "category": "Liquid fuel"
    },
    {
      "year": "1874",
      "value": 173,
      "category": "Solid fuel"
    },
    {
      "year": "1874",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1874",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1874",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1875",
      "value": 1,
      "category": "Liquid fuel"
    },
    {
      "year": "1875",
      "value": 187,
      "category": "Solid fuel"
    },
    {
      "year": "1875",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1875",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1875",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1876",
      "value": 1,
      "category": "Liquid fuel"
    },
    {
      "year": "1876",
      "value": 190,
      "category": "Solid fuel"
    },
    {
      "year": "1876",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1876",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1876",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1877",
      "value": 2,
      "category": "Liquid fuel"
    },
    {
      "year": "1877",
      "value": 192,
      "category": "Solid fuel"
    },
    {
      "year": "1877",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1877",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1877",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1878",
      "value": 2,
      "category": "Liquid fuel"
    },
    {
      "year": "1878",
      "value": 194,
      "category": "Solid fuel"
    },
    {
      "year": "1878",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1878",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1878",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1879",
      "value": 3,
      "category": "Liquid fuel"
    },
    {
      "year": "1879",
      "value": 207,
      "category": "Solid fuel"
    },
    {
      "year": "1879",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1879",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1879",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1880",
      "value": 3,
      "category": "Liquid fuel"
    },
    {
      "year": "1880",
      "value": 233,
      "category": "Solid fuel"
    },
    {
      "year": "1880",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1880",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1880",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1881",
      "value": 4,
      "category": "Liquid fuel"
    },
    {
      "year": "1881",
      "value": 239,
      "category": "Solid fuel"
    },
    {
      "year": "1881",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1881",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1881",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1882",
      "value": 4,
      "category": "Liquid fuel"
    },
    {
      "year": "1882",
      "value": 252,
      "category": "Solid fuel"
    },
    {
      "year": "1882",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1882",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1882",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1883",
      "value": 3,
      "category": "Liquid fuel"
    },
    {
      "year": "1883",
      "value": 269,
      "category": "Solid fuel"
    },
    {
      "year": "1883",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1883",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1883",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1884",
      "value": 4,
      "category": "Liquid fuel"
    },
    {
      "year": "1884",
      "value": 271,
      "category": "Solid fuel"
    },
    {
      "year": "1884",
      "value": 0,
      "category": "Gas fuel"
    },
    {
      "year": "1884",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1884",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1885",
      "value": 4,
      "category": "Liquid fuel"
    },
    {
      "year": "1885",
      "value": 273,
      "category": "Solid fuel"
    },
    {
      "year": "1885",
      "value": 1,
      "category": "Gas fuel"
    },
    {
      "year": "1885",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1885",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1886",
      "value": 5,
      "category": "Liquid fuel"
    },
    {
      "year": "1886",
      "value": 275,
      "category": "Solid fuel"
    },
    {
      "year": "1886",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1886",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1886",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1887",
      "value": 5,
      "category": "Liquid fuel"
    },
    {
      "year": "1887",
      "value": 287,
      "category": "Solid fuel"
    },
    {
      "year": "1887",
      "value": 3,
      "category": "Gas fuel"
    },
    {
      "year": "1887",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1887",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1888",
      "value": 5,
      "category": "Liquid fuel"
    },
    {
      "year": "1888",
      "value": 317,
      "category": "Solid fuel"
    },
    {
      "year": "1888",
      "value": 5,
      "category": "Gas fuel"
    },
    {
      "year": "1888",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1888",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1889",
      "value": 6,
      "category": "Liquid fuel"
    },
    {
      "year": "1889",
      "value": 318,
      "category": "Solid fuel"
    },
    {
      "year": "1889",
      "value": 3,
      "category": "Gas fuel"
    },
    {
      "year": "1889",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1889",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1890",
      "value": 8,
      "category": "Liquid fuel"
    },
    {
      "year": "1890",
      "value": 345,
      "category": "Solid fuel"
    },
    {
      "year": "1890",
      "value": 3,
      "category": "Gas fuel"
    },
    {
      "year": "1890",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1890",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1891",
      "value": 9,
      "category": "Liquid fuel"
    },
    {
      "year": "1891",
      "value": 360,
      "category": "Solid fuel"
    },
    {
      "year": "1891",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1891",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1891",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1892",
      "value": 9,
      "category": "Liquid fuel"
    },
    {
      "year": "1892",
      "value": 363,
      "category": "Solid fuel"
    },
    {
      "year": "1892",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1892",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1892",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1893",
      "value": 10,
      "category": "Liquid fuel"
    },
    {
      "year": "1893",
      "value": 358,
      "category": "Solid fuel"
    },
    {
      "year": "1893",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1893",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1893",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1894",
      "value": 9,
      "category": "Liquid fuel"
    },
    {
      "year": "1894",
      "value": 372,
      "category": "Solid fuel"
    },
    {
      "year": "1894",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1894",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1894",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1895",
      "value": 11,
      "category": "Liquid fuel"
    },
    {
      "year": "1895",
      "value": 393,
      "category": "Solid fuel"
    },
    {
      "year": "1895",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1895",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1895",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1896",
      "value": 12,
      "category": "Liquid fuel"
    },
    {
      "year": "1896",
      "value": 405,
      "category": "Solid fuel"
    },
    {
      "year": "1896",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1896",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1896",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1897",
      "value": 13,
      "category": "Liquid fuel"
    },
    {
      "year": "1897",
      "value": 425,
      "category": "Solid fuel"
    },
    {
      "year": "1897",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1897",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1897",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1898",
      "value": 13,
      "category": "Liquid fuel"
    },
    {
      "year": "1898",
      "value": 449,
      "category": "Solid fuel"
    },
    {
      "year": "1898",
      "value": 2,
      "category": "Gas fuel"
    },
    {
      "year": "1898",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1898",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1899",
      "value": 14,
      "category": "Liquid fuel"
    },
    {
      "year": "1899",
      "value": 491,
      "category": "Solid fuel"
    },
    {
      "year": "1899",
      "value": 3,
      "category": "Gas fuel"
    },
    {
      "year": "1899",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1899",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1900",
      "value": 16,
      "category": "Liquid fuel"
    },
    {
      "year": "1900",
      "value": 515,
      "category": "Solid fuel"
    },
    {
      "year": "1900",
      "value": 3,
      "category": "Gas fuel"
    },
    {
      "year": "1900",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1900",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1901",
      "value": 18,
      "category": "Liquid fuel"
    },
    {
      "year": "1901",
      "value": 531,
      "category": "Solid fuel"
    },
    {
      "year": "1901",
      "value": 4,
      "category": "Gas fuel"
    },
    {
      "year": "1901",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1901",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1902",
      "value": 19,
      "category": "Liquid fuel"
    },
    {
      "year": "1902",
      "value": 543,
      "category": "Solid fuel"
    },
    {
      "year": "1902",
      "value": 4,
      "category": "Gas fuel"
    },
    {
      "year": "1902",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1902",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1903",
      "value": 20,
      "category": "Liquid fuel"
    },
    {
      "year": "1903",
      "value": 593,
      "category": "Solid fuel"
    },
    {
      "year": "1903",
      "value": 4,
      "category": "Gas fuel"
    },
    {
      "year": "1903",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1903",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1904",
      "value": 23,
      "category": "Liquid fuel"
    },
    {
      "year": "1904",
      "value": 597,
      "category": "Solid fuel"
    },
    {
      "year": "1904",
      "value": 4,
      "category": "Gas fuel"
    },
    {
      "year": "1904",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1904",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1905",
      "value": 23,
      "category": "Liquid fuel"
    },
    {
      "year": "1905",
      "value": 636,
      "category": "Solid fuel"
    },
    {
      "year": "1905",
      "value": 5,
      "category": "Gas fuel"
    },
    {
      "year": "1905",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1905",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1906",
      "value": 23,
      "category": "Liquid fuel"
    },
    {
      "year": "1906",
      "value": 680,
      "category": "Solid fuel"
    },
    {
      "year": "1906",
      "value": 5,
      "category": "Gas fuel"
    },
    {
      "year": "1906",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1906",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1907",
      "value": 28,
      "category": "Liquid fuel"
    },
    {
      "year": "1907",
      "value": 750,
      "category": "Solid fuel"
    },
    {
      "year": "1907",
      "value": 5,
      "category": "Gas fuel"
    },
    {
      "year": "1907",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1907",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1908",
      "value": 30,
      "category": "Liquid fuel"
    },
    {
      "year": "1908",
      "value": 714,
      "category": "Solid fuel"
    },
    {
      "year": "1908",
      "value": 5,
      "category": "Gas fuel"
    },
    {
      "year": "1908",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1908",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1909",
      "value": 32,
      "category": "Liquid fuel"
    },
    {
      "year": "1909",
      "value": 747,
      "category": "Solid fuel"
    },
    {
      "year": "1909",
      "value": 6,
      "category": "Gas fuel"
    },
    {
      "year": "1909",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1909",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1910",
      "value": 34,
      "category": "Liquid fuel"
    },
    {
      "year": "1910",
      "value": 778,
      "category": "Solid fuel"
    },
    {
      "year": "1910",
      "value": 7,
      "category": "Gas fuel"
    },
    {
      "year": "1910",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1910",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1911",
      "value": 36,
      "category": "Liquid fuel"
    },
    {
      "year": "1911",
      "value": 792,
      "category": "Solid fuel"
    },
    {
      "year": "1911",
      "value": 7,
      "category": "Gas fuel"
    },
    {
      "year": "1911",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1911",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1912",
      "value": 37,
      "category": "Liquid fuel"
    },
    {
      "year": "1912",
      "value": 834,
      "category": "Solid fuel"
    },
    {
      "year": "1912",
      "value": 8,
      "category": "Gas fuel"
    },
    {
      "year": "1912",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1912",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1913",
      "value": 41,
      "category": "Liquid fuel"
    },
    {
      "year": "1913",
      "value": 895,
      "category": "Solid fuel"
    },
    {
      "year": "1913",
      "value": 8,
      "category": "Gas fuel"
    },
    {
      "year": "1913",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1913",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1914",
      "value": 42,
      "category": "Liquid fuel"
    },
    {
      "year": "1914",
      "value": 800,
      "category": "Solid fuel"
    },
    {
      "year": "1914",
      "value": 8,
      "category": "Gas fuel"
    },
    {
      "year": "1914",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1914",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1915",
      "value": 45,
      "category": "Liquid fuel"
    },
    {
      "year": "1915",
      "value": 784,
      "category": "Solid fuel"
    },
    {
      "year": "1915",
      "value": 9,
      "category": "Gas fuel"
    },
    {
      "year": "1915",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1915",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1916",
      "value": 48,
      "category": "Liquid fuel"
    },
    {
      "year": "1916",
      "value": 842,
      "category": "Solid fuel"
    },
    {
      "year": "1916",
      "value": 10,
      "category": "Gas fuel"
    },
    {
      "year": "1916",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1916",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1917",
      "value": 54,
      "category": "Liquid fuel"
    },
    {
      "year": "1917",
      "value": 891,
      "category": "Solid fuel"
    },
    {
      "year": "1917",
      "value": 11,
      "category": "Gas fuel"
    },
    {
      "year": "1917",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1917",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1918",
      "value": 53,
      "category": "Liquid fuel"
    },
    {
      "year": "1918",
      "value": 873,
      "category": "Solid fuel"
    },
    {
      "year": "1918",
      "value": 10,
      "category": "Gas fuel"
    },
    {
      "year": "1918",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1918",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1919",
      "value": 61,
      "category": "Liquid fuel"
    },
    {
      "year": "1919",
      "value": 735,
      "category": "Solid fuel"
    },
    {
      "year": "1919",
      "value": 10,
      "category": "Gas fuel"
    },
    {
      "year": "1919",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1919",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1920",
      "value": 78,
      "category": "Liquid fuel"
    },
    {
      "year": "1920",
      "value": 843,
      "category": "Solid fuel"
    },
    {
      "year": "1920",
      "value": 11,
      "category": "Gas fuel"
    },
    {
      "year": "1920",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1920",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1921",
      "value": 84,
      "category": "Liquid fuel"
    },
    {
      "year": "1921",
      "value": 709,
      "category": "Solid fuel"
    },
    {
      "year": "1921",
      "value": 10,
      "category": "Gas fuel"
    },
    {
      "year": "1921",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1921",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1922",
      "value": 94,
      "category": "Liquid fuel"
    },
    {
      "year": "1922",
      "value": 740,
      "category": "Solid fuel"
    },
    {
      "year": "1922",
      "value": 11,
      "category": "Gas fuel"
    },
    {
      "year": "1922",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1922",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1923",
      "value": 111,
      "category": "Liquid fuel"
    },
    {
      "year": "1923",
      "value": 845,
      "category": "Solid fuel"
    },
    {
      "year": "1923",
      "value": 14,
      "category": "Gas fuel"
    },
    {
      "year": "1923",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1923",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1924",
      "value": 110,
      "category": "Liquid fuel"
    },
    {
      "year": "1924",
      "value": 836,
      "category": "Solid fuel"
    },
    {
      "year": "1924",
      "value": 16,
      "category": "Gas fuel"
    },
    {
      "year": "1924",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1924",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1925",
      "value": 116,
      "category": "Liquid fuel"
    },
    {
      "year": "1925",
      "value": 842,
      "category": "Solid fuel"
    },
    {
      "year": "1925",
      "value": 17,
      "category": "Gas fuel"
    },
    {
      "year": "1925",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1925",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1926",
      "value": 119,
      "category": "Liquid fuel"
    },
    {
      "year": "1926",
      "value": 846,
      "category": "Solid fuel"
    },
    {
      "year": "1926",
      "value": 19,
      "category": "Gas fuel"
    },
    {
      "year": "1926",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1926",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1927",
      "value": 136,
      "category": "Liquid fuel"
    },
    {
      "year": "1927",
      "value": 905,
      "category": "Solid fuel"
    },
    {
      "year": "1927",
      "value": 21,
      "category": "Gas fuel"
    },
    {
      "year": "1927",
      "value": 0,
      "category": "Cement production"
    },
    {
      "year": "1927",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1928",
      "value": 143,
      "category": "Liquid fuel"
    },
    {
      "year": "1928",
      "value": 890,
      "category": "Solid fuel"
    },
    {
      "year": "1928",
      "value": 23,
      "category": "Gas fuel"
    },
    {
      "year": "1928",
      "value": 10,
      "category": "Cement production"
    },
    {
      "year": "1928",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1929",
      "value": 160,
      "category": "Liquid fuel"
    },
    {
      "year": "1929",
      "value": 947,
      "category": "Solid fuel"
    },
    {
      "year": "1929",
      "value": 28,
      "category": "Gas fuel"
    },
    {
      "year": "1929",
      "value": 10,
      "category": "Cement production"
    },
    {
      "year": "1929",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1930",
      "value": 152,
      "category": "Liquid fuel"
    },
    {
      "year": "1930",
      "value": 862,
      "category": "Solid fuel"
    },
    {
      "year": "1930",
      "value": 28,
      "category": "Gas fuel"
    },
    {
      "year": "1930",
      "value": 10,
      "category": "Cement production"
    },
    {
      "year": "1930",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1931",
      "value": 147,
      "category": "Liquid fuel"
    },
    {
      "year": "1931",
      "value": 759,
      "category": "Solid fuel"
    },
    {
      "year": "1931",
      "value": 25,
      "category": "Gas fuel"
    },
    {
      "year": "1931",
      "value": 8,
      "category": "Cement production"
    },
    {
      "year": "1931",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1932",
      "value": 141,
      "category": "Liquid fuel"
    },
    {
      "year": "1932",
      "value": 675,
      "category": "Solid fuel"
    },
    {
      "year": "1932",
      "value": 24,
      "category": "Gas fuel"
    },
    {
      "year": "1932",
      "value": 7,
      "category": "Cement production"
    },
    {
      "year": "1932",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1933",
      "value": 154,
      "category": "Liquid fuel"
    },
    {
      "year": "1933",
      "value": 708,
      "category": "Solid fuel"
    },
    {
      "year": "1933",
      "value": 25,
      "category": "Gas fuel"
    },
    {
      "year": "1933",
      "value": 7,
      "category": "Cement production"
    },
    {
      "year": "1933",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1934",
      "value": 162,
      "category": "Liquid fuel"
    },
    {
      "year": "1934",
      "value": 775,
      "category": "Solid fuel"
    },
    {
      "year": "1934",
      "value": 28,
      "category": "Gas fuel"
    },
    {
      "year": "1934",
      "value": 8,
      "category": "Cement production"
    },
    {
      "year": "1934",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1935",
      "value": 176,
      "category": "Liquid fuel"
    },
    {
      "year": "1935",
      "value": 811,
      "category": "Solid fuel"
    },
    {
      "year": "1935",
      "value": 30,
      "category": "Gas fuel"
    },
    {
      "year": "1935",
      "value": 9,
      "category": "Cement production"
    },
    {
      "year": "1935",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1936",
      "value": 192,
      "category": "Liquid fuel"
    },
    {
      "year": "1936",
      "value": 893,
      "category": "Solid fuel"
    },
    {
      "year": "1936",
      "value": 34,
      "category": "Gas fuel"
    },
    {
      "year": "1936",
      "value": 11,
      "category": "Cement production"
    },
    {
      "year": "1936",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1937",
      "value": 219,
      "category": "Liquid fuel"
    },
    {
      "year": "1937",
      "value": 941,
      "category": "Solid fuel"
    },
    {
      "year": "1937",
      "value": 38,
      "category": "Gas fuel"
    },
    {
      "year": "1937",
      "value": 11,
      "category": "Cement production"
    },
    {
      "year": "1937",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1938",
      "value": 214,
      "category": "Liquid fuel"
    },
    {
      "year": "1938",
      "value": 880,
      "category": "Solid fuel"
    },
    {
      "year": "1938",
      "value": 37,
      "category": "Gas fuel"
    },
    {
      "year": "1938",
      "value": 12,
      "category": "Cement production"
    },
    {
      "year": "1938",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1939",
      "value": 222,
      "category": "Liquid fuel"
    },
    {
      "year": "1939",
      "value": 918,
      "category": "Solid fuel"
    },
    {
      "year": "1939",
      "value": 38,
      "category": "Gas fuel"
    },
    {
      "year": "1939",
      "value": 13,
      "category": "Cement production"
    },
    {
      "year": "1939",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1940",
      "value": 229,
      "category": "Liquid fuel"
    },
    {
      "year": "1940",
      "value": 1017,
      "category": "Solid fuel"
    },
    {
      "year": "1940",
      "value": 42,
      "category": "Gas fuel"
    },
    {
      "year": "1940",
      "value": 11,
      "category": "Cement production"
    },
    {
      "year": "1940",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1941",
      "value": 236,
      "category": "Liquid fuel"
    },
    {
      "year": "1941",
      "value": 1043,
      "category": "Solid fuel"
    },
    {
      "year": "1941",
      "value": 42,
      "category": "Gas fuel"
    },
    {
      "year": "1941",
      "value": 12,
      "category": "Cement production"
    },
    {
      "year": "1941",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1942",
      "value": 222,
      "category": "Liquid fuel"
    },
    {
      "year": "1942",
      "value": 1063,
      "category": "Solid fuel"
    },
    {
      "year": "1942",
      "value": 45,
      "category": "Gas fuel"
    },
    {
      "year": "1942",
      "value": 11,
      "category": "Cement production"
    },
    {
      "year": "1942",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1943",
      "value": 239,
      "category": "Liquid fuel"
    },
    {
      "year": "1943",
      "value": 1092,
      "category": "Solid fuel"
    },
    {
      "year": "1943",
      "value": 50,
      "category": "Gas fuel"
    },
    {
      "year": "1943",
      "value": 10,
      "category": "Cement production"
    },
    {
      "year": "1943",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1944",
      "value": 275,
      "category": "Liquid fuel"
    },
    {
      "year": "1944",
      "value": 1047,
      "category": "Solid fuel"
    },
    {
      "year": "1944",
      "value": 54,
      "category": "Gas fuel"
    },
    {
      "year": "1944",
      "value": 7,
      "category": "Cement production"
    },
    {
      "year": "1944",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1945",
      "value": 275,
      "category": "Liquid fuel"
    },
    {
      "year": "1945",
      "value": 820,
      "category": "Solid fuel"
    },
    {
      "year": "1945",
      "value": 59,
      "category": "Gas fuel"
    },
    {
      "year": "1945",
      "value": 7,
      "category": "Cement production"
    },
    {
      "year": "1945",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1946",
      "value": 292,
      "category": "Liquid fuel"
    },
    {
      "year": "1946",
      "value": 875,
      "category": "Solid fuel"
    },
    {
      "year": "1946",
      "value": 61,
      "category": "Gas fuel"
    },
    {
      "year": "1946",
      "value": 10,
      "category": "Cement production"
    },
    {
      "year": "1946",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1947",
      "value": 322,
      "category": "Liquid fuel"
    },
    {
      "year": "1947",
      "value": 992,
      "category": "Solid fuel"
    },
    {
      "year": "1947",
      "value": 67,
      "category": "Gas fuel"
    },
    {
      "year": "1947",
      "value": 12,
      "category": "Cement production"
    },
    {
      "year": "1947",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1948",
      "value": 364,
      "category": "Liquid fuel"
    },
    {
      "year": "1948",
      "value": 1015,
      "category": "Solid fuel"
    },
    {
      "year": "1948",
      "value": 76,
      "category": "Gas fuel"
    },
    {
      "year": "1948",
      "value": 14,
      "category": "Cement production"
    },
    {
      "year": "1948",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1949",
      "value": 362,
      "category": "Liquid fuel"
    },
    {
      "year": "1949",
      "value": 960,
      "category": "Solid fuel"
    },
    {
      "year": "1949",
      "value": 81,
      "category": "Gas fuel"
    },
    {
      "year": "1949",
      "value": 16,
      "category": "Cement production"
    },
    {
      "year": "1949",
      "value": 0,
      "category": "Gas flarinl"
    },
    {
      "year": "1950",
      "value": 423,
      "category": "Liquid fuel"
    },
    {
      "year": "1950",
      "value": 1070,
      "category": "Solid fuel"
    },
    {
      "year": "1950",
      "value": 97,
      "category": "Gas fuel"
    },
    {
      "year": "1950",
      "value": 18,
      "category": "Cement production"
    },
    {
      "year": "1950",
      "value": 23,
      "category": "Gas flarinl"
    },
    {
      "year": "1951",
      "value": 479,
      "category": "Liquid fuel"
    },
    {
      "year": "1951",
      "value": 1129,
      "category": "Solid fuel"
    },
    {
      "year": "1951",
      "value": 115,
      "category": "Gas fuel"
    },
    {
      "year": "1951",
      "value": 20,
      "category": "Cement production"
    },
    {
      "year": "1951",
      "value": 24,
      "category": "Gas flarinl"
    },
    {
      "year": "1952",
      "value": 504,
      "category": "Liquid fuel"
    },
    {
      "year": "1952",
      "value": 1119,
      "category": "Solid fuel"
    },
    {
      "year": "1952",
      "value": 124,
      "category": "Gas fuel"
    },
    {
      "year": "1952",
      "value": 22,
      "category": "Cement production"
    },
    {
      "year": "1952",
      "value": 26,
      "category": "Gas flarinl"
    },
    {
      "year": "1953",
      "value": 533,
      "category": "Liquid fuel"
    },
    {
      "year": "1953",
      "value": 1125,
      "category": "Solid fuel"
    },
    {
      "year": "1953",
      "value": 131,
      "category": "Gas fuel"
    },
    {
      "year": "1953",
      "value": 24,
      "category": "Cement production"
    },
    {
      "year": "1953",
      "value": 27,
      "category": "Gas flarinl"
    },
    {
      "year": "1954",
      "value": 557,
      "category": "Liquid fuel"
    },
    {
      "year": "1954",
      "value": 1116,
      "category": "Solid fuel"
    },
    {
      "year": "1954",
      "value": 138,
      "category": "Gas fuel"
    },
    {
      "year": "1954",
      "value": 27,
      "category": "Cement production"
    },
    {
      "year": "1954",
      "value": 27,
      "category": "Gas flarinl"
    },
    {
      "year": "1955",
      "value": 625,
      "category": "Liquid fuel"
    },
    {
      "year": "1955",
      "value": 1208,
      "category": "Solid fuel"
    },
    {
      "year": "1955",
      "value": 150,
      "category": "Gas fuel"
    },
    {
      "year": "1955",
      "value": 30,
      "category": "Cement production"
    },
    {
      "year": "1955",
      "value": 31,
      "category": "Gas flarinl"
    },
    {
      "year": "1956",
      "value": 679,
      "category": "Liquid fuel"
    },
    {
      "year": "1956",
      "value": 1273,
      "category": "Solid fuel"
    },
    {
      "year": "1956",
      "value": 161,
      "category": "Gas fuel"
    },
    {
      "year": "1956",
      "value": 32,
      "category": "Cement production"
    },
    {
      "year": "1956",
      "value": 32,
      "category": "Gas flarinl"
    },
    {
      "year": "1957",
      "value": 714,
      "category": "Liquid fuel"
    },
    {
      "year": "1957",
      "value": 1309,
      "category": "Solid fuel"
    },
    {
      "year": "1957",
      "value": 178,
      "category": "Gas fuel"
    },
    {
      "year": "1957",
      "value": 34,
      "category": "Cement production"
    },
    {
      "year": "1957",
      "value": 35,
      "category": "Gas flarinl"
    },
    {
      "year": "1958",
      "value": 731,
      "category": "Liquid fuel"
    },
    {
      "year": "1958",
      "value": 1336,
      "category": "Solid fuel"
    },
    {
      "year": "1958",
      "value": 192,
      "category": "Gas fuel"
    },
    {
      "year": "1958",
      "value": 36,
      "category": "Cement production"
    },
    {
      "year": "1958",
      "value": 35,
      "category": "Gas flarinl"
    },
    {
      "year": "1959",
      "value": 789,
      "category": "Liquid fuel"
    },
    {
      "year": "1959",
      "value": 1382,
      "category": "Solid fuel"
    },
    {
      "year": "1959",
      "value": 206,
      "category": "Gas fuel"
    },
    {
      "year": "1959",
      "value": 40,
      "category": "Cement production"
    },
    {
      "year": "1959",
      "value": 36,
      "category": "Gas flarinl"
    },
    {
      "year": "1960",
      "value": 849,
      "category": "Liquid fuel"
    },
    {
      "year": "1960",
      "value": 1410,
      "category": "Solid fuel"
    },
    {
      "year": "1960",
      "value": 227,
      "category": "Gas fuel"
    },
    {
      "year": "1960",
      "value": 43,
      "category": "Cement production"
    },
    {
      "year": "1960",
      "value": 39,
      "category": "Gas flarinl"
    },
    {
      "year": "1961",
      "value": 904,
      "category": "Liquid fuel"
    },
    {
      "year": "1961",
      "value": 1349,
      "category": "Solid fuel"
    },
    {
      "year": "1961",
      "value": 240,
      "category": "Gas fuel"
    },
    {
      "year": "1961",
      "value": 45,
      "category": "Cement production"
    },
    {
      "year": "1961",
      "value": 42,
      "category": "Gas flarinl"
    },
    {
      "year": "1962",
      "value": 980,
      "category": "Liquid fuel"
    },
    {
      "year": "1962",
      "value": 1351,
      "category": "Solid fuel"
    },
    {
      "year": "1962",
      "value": 263,
      "category": "Gas fuel"
    },
    {
      "year": "1962",
      "value": 49,
      "category": "Cement production"
    },
    {
      "year": "1962",
      "value": 44,
      "category": "Gas flarinl"
    },
    {
      "year": "1963",
      "value": 1052,
      "category": "Liquid fuel"
    },
    {
      "year": "1963",
      "value": 1396,
      "category": "Solid fuel"
    },
    {
      "year": "1963",
      "value": 286,
      "category": "Gas fuel"
    },
    {
      "year": "1963",
      "value": 51,
      "category": "Cement production"
    },
    {
      "year": "1963",
      "value": 47,
      "category": "Gas flarinl"
    },
    {
      "year": "1964",
      "value": 1137,
      "category": "Liquid fuel"
    },
    {
      "year": "1964",
      "value": 1435,
      "category": "Solid fuel"
    },
    {
      "year": "1964",
      "value": 316,
      "category": "Gas fuel"
    },
    {
      "year": "1964",
      "value": 57,
      "category": "Cement production"
    },
    {
      "year": "1964",
      "value": 51,
      "category": "Gas flarinl"
    },
    {
      "year": "1965",
      "value": 1219,
      "category": "Liquid fuel"
    },
    {
      "year": "1965",
      "value": 1460,
      "category": "Solid fuel"
    },
    {
      "year": "1965",
      "value": 337,
      "category": "Gas fuel"
    },
    {
      "year": "1965",
      "value": 59,
      "category": "Cement production"
    },
    {
      "year": "1965",
      "value": 55,
      "category": "Gas flarinl"
    },
    {
      "year": "1966",
      "value": 1323,
      "category": "Liquid fuel"
    },
    {
      "year": "1966",
      "value": 1478,
      "category": "Solid fuel"
    },
    {
      "year": "1966",
      "value": 364,
      "category": "Gas fuel"
    },
    {
      "year": "1966",
      "value": 63,
      "category": "Cement production"
    },
    {
      "year": "1966",
      "value": 60,
      "category": "Gas flarinl"
    },
    {
      "year": "1967",
      "value": 1423,
      "category": "Liquid fuel"
    },
    {
      "year": "1967",
      "value": 1448,
      "category": "Solid fuel"
    },
    {
      "year": "1967",
      "value": 392,
      "category": "Gas fuel"
    },
    {
      "year": "1967",
      "value": 65,
      "category": "Cement production"
    },
    {
      "year": "1967",
      "value": 66,
      "category": "Gas flarinl"
    },
    {
      "year": "1968",
      "value": 1551,
      "category": "Liquid fuel"
    },
    {
      "year": "1968",
      "value": 1448,
      "category": "Solid fuel"
    },
    {
      "year": "1968",
      "value": 424,
      "category": "Gas fuel"
    },
    {
      "year": "1968",
      "value": 70,
      "category": "Cement production"
    },
    {
      "year": "1968",
      "value": 73,
      "category": "Gas flarinl"
    },
    {
      "year": "1969",
      "value": 1673,
      "category": "Liquid fuel"
    },
    {
      "year": "1969",
      "value": 1486,
      "category": "Solid fuel"
    },
    {
      "year": "1969",
      "value": 467,
      "category": "Gas fuel"
    },
    {
      "year": "1969",
      "value": 74,
      "category": "Cement production"
    },
    {
      "year": "1969",
      "value": 80,
      "category": "Gas flarinl"
    },
    {
      "year": "1970",
      "value": 1839,
      "category": "Liquid fuel"
    },
    {
      "year": "1970",
      "value": 1556,
      "category": "Solid fuel"
    },
    {
      "year": "1970",
      "value": 493,
      "category": "Gas fuel"
    },
    {
      "year": "1970",
      "value": 78,
      "category": "Cement production"
    },
    {
      "year": "1970",
      "value": 87,
      "category": "Gas flarinl"
    },
    {
      "year": "1971",
      "value": 1947,
      "category": "Liquid fuel"
    },
    {
      "year": "1971",
      "value": 1559,
      "category": "Solid fuel"
    },
    {
      "year": "1971",
      "value": 530,
      "category": "Gas fuel"
    },
    {
      "year": "1971",
      "value": 84,
      "category": "Cement production"
    },
    {
      "year": "1971",
      "value": 88,
      "category": "Gas flarinl"
    },
    {
      "year": "1972",
      "value": 2057,
      "category": "Liquid fuel"
    },
    {
      "year": "1972",
      "value": 1576,
      "category": "Solid fuel"
    },
    {
      "year": "1972",
      "value": 560,
      "category": "Gas fuel"
    },
    {
      "year": "1972",
      "value": 89,
      "category": "Cement production"
    },
    {
      "year": "1972",
      "value": 95,
      "category": "Gas flarinl"
    },
    {
      "year": "1973",
      "value": 2241,
      "category": "Liquid fuel"
    },
    {
      "year": "1973",
      "value": 1581,
      "category": "Solid fuel"
    },
    {
      "year": "1973",
      "value": 588,
      "category": "Gas fuel"
    },
    {
      "year": "1973",
      "value": 95,
      "category": "Cement production"
    },
    {
      "year": "1973",
      "value": 110,
      "category": "Gas flarinl"
    },
    {
      "year": "1974",
      "value": 2245,
      "category": "Liquid fuel"
    },
    {
      "year": "1974",
      "value": 1579,
      "category": "Solid fuel"
    },
    {
      "year": "1974",
      "value": 597,
      "category": "Gas fuel"
    },
    {
      "year": "1974",
      "value": 96,
      "category": "Cement production"
    },
    {
      "year": "1974",
      "value": 107,
      "category": "Gas flarinl"
    },
    {
      "year": "1975",
      "value": 2132,
      "category": "Liquid fuel"
    },
    {
      "year": "1975",
      "value": 1673,
      "category": "Solid fuel"
    },
    {
      "year": "1975",
      "value": 604,
      "category": "Gas fuel"
    },
    {
      "year": "1975",
      "value": 95,
      "category": "Cement production"
    },
    {
      "year": "1975",
      "value": 92,
      "category": "Gas flarinl"
    },
    {
      "year": "1976",
      "value": 2314,
      "category": "Liquid fuel"
    },
    {
      "year": "1976",
      "value": 1710,
      "category": "Solid fuel"
    },
    {
      "year": "1976",
      "value": 630,
      "category": "Gas fuel"
    },
    {
      "year": "1976",
      "value": 103,
      "category": "Cement production"
    },
    {
      "year": "1976",
      "value": 108,
      "category": "Gas flarinl"
    },
    {
      "year": "1977",
      "value": 2398,
      "category": "Liquid fuel"
    },
    {
      "year": "1977",
      "value": 1756,
      "category": "Solid fuel"
    },
    {
      "year": "1977",
      "value": 650,
      "category": "Gas fuel"
    },
    {
      "year": "1977",
      "value": 108,
      "category": "Cement production"
    },
    {
      "year": "1977",
      "value": 104,
      "category": "Gas flarinl"
    },
    {
      "year": "1978",
      "value": 2392,
      "category": "Liquid fuel"
    },
    {
      "year": "1978",
      "value": 1780,
      "category": "Solid fuel"
    },
    {
      "year": "1978",
      "value": 680,
      "category": "Gas fuel"
    },
    {
      "year": "1978",
      "value": 116,
      "category": "Cement production"
    },
    {
      "year": "1978",
      "value": 106,
      "category": "Gas flarinl"
    },
    {
      "year": "1979",
      "value": 2544,
      "category": "Liquid fuel"
    },
    {
      "year": "1979",
      "value": 1875,
      "category": "Solid fuel"
    },
    {
      "year": "1979",
      "value": 721,
      "category": "Gas fuel"
    },
    {
      "year": "1979",
      "value": 119,
      "category": "Cement production"
    },
    {
      "year": "1979",
      "value": 98,
      "category": "Gas flarinl"
    },
    {
      "year": "1980",
      "value": 2422,
      "category": "Liquid fuel"
    },
    {
      "year": "1980",
      "value": 1935,
      "category": "Solid fuel"
    },
    {
      "year": "1980",
      "value": 737,
      "category": "Gas fuel"
    },
    {
      "year": "1980",
      "value": 120,
      "category": "Cement production"
    },
    {
      "year": "1980",
      "value": 86,
      "category": "Gas flarinl"
    },
    {
      "year": "1981",
      "value": 2289,
      "category": "Liquid fuel"
    },
    {
      "year": "1981",
      "value": 1908,
      "category": "Solid fuel"
    },
    {
      "year": "1981",
      "value": 755,
      "category": "Gas fuel"
    },
    {
      "year": "1981",
      "value": 121,
      "category": "Cement production"
    },
    {
      "year": "1981",
      "value": 65,
      "category": "Gas flarinl"
    },
    {
      "year": "1982",
      "value": 2196,
      "category": "Liquid fuel"
    },
    {
      "year": "1982",
      "value": 1976,
      "category": "Solid fuel"
    },
    {
      "year": "1982",
      "value": 738,
      "category": "Gas fuel"
    },
    {
      "year": "1982",
      "value": 121,
      "category": "Cement production"
    },
    {
      "year": "1982",
      "value": 64,
      "category": "Gas flarinl"
    },
    {
      "year": "1983",
      "value": 2176,
      "category": "Liquid fuel"
    },
    {
      "year": "1983",
      "value": 1977,
      "category": "Solid fuel"
    },
    {
      "year": "1983",
      "value": 739,
      "category": "Gas fuel"
    },
    {
      "year": "1983",
      "value": 125,
      "category": "Cement production"
    },
    {
      "year": "1983",
      "value": 58,
      "category": "Gas flarinl"
    },
    {
      "year": "1984",
      "value": 2199,
      "category": "Liquid fuel"
    },
    {
      "year": "1984",
      "value": 2074,
      "category": "Solid fuel"
    },
    {
      "year": "1984",
      "value": 807,
      "category": "Gas fuel"
    },
    {
      "year": "1984",
      "value": 128,
      "category": "Cement production"
    },
    {
      "year": "1984",
      "value": 51,
      "category": "Gas flarinl"
    },
    {
      "year": "1985",
      "value": 2186,
      "category": "Liquid fuel"
    },
    {
      "year": "1985",
      "value": 2216,
      "category": "Solid fuel"
    },
    {
      "year": "1985",
      "value": 835,
      "category": "Gas fuel"
    },
    {
      "year": "1985",
      "value": 131,
      "category": "Cement production"
    },
    {
      "year": "1985",
      "value": 49,
      "category": "Gas flarinl"
    },
    {
      "year": "1986",
      "value": 2293,
      "category": "Liquid fuel"
    },
    {
      "year": "1986",
      "value": 2277,
      "category": "Solid fuel"
    },
    {
      "year": "1986",
      "value": 830,
      "category": "Gas fuel"
    },
    {
      "year": "1986",
      "value": 137,
      "category": "Cement production"
    },
    {
      "year": "1986",
      "value": 46,
      "category": "Gas flarinl"
    },
    {
      "year": "1987",
      "value": 2306,
      "category": "Liquid fuel"
    },
    {
      "year": "1987",
      "value": 2339,
      "category": "Solid fuel"
    },
    {
      "year": "1987",
      "value": 892,
      "category": "Gas fuel"
    },
    {
      "year": "1987",
      "value": 143,
      "category": "Cement production"
    },
    {
      "year": "1987",
      "value": 44,
      "category": "Gas flarinl"
    },
    {
      "year": "1988",
      "value": 2412,
      "category": "Liquid fuel"
    },
    {
      "year": "1988",
      "value": 2387,
      "category": "Solid fuel"
    },
    {
      "year": "1988",
      "value": 935,
      "category": "Gas fuel"
    },
    {
      "year": "1988",
      "value": 152,
      "category": "Cement production"
    },
    {
      "year": "1988",
      "value": 50,
      "category": "Gas flarinl"
    },
    {
      "year": "1989",
      "value": 2459,
      "category": "Liquid fuel"
    },
    {
      "year": "1989",
      "value": 2428,
      "category": "Solid fuel"
    },
    {
      "year": "1989",
      "value": 982,
      "category": "Gas fuel"
    },
    {
      "year": "1989",
      "value": 156,
      "category": "Cement production"
    },
    {
      "year": "1989",
      "value": 41,
      "category": "Gas flarinl"
    },
    {
      "year": "1990",
      "value": 2492,
      "category": "Liquid fuel"
    },
    {
      "year": "1990",
      "value": 2359,
      "category": "Solid fuel"
    },
    {
      "year": "1990",
      "value": 1026,
      "category": "Gas fuel"
    },
    {
      "year": "1990",
      "value": 157,
      "category": "Cement production"
    },
    {
      "year": "1990",
      "value": 40,
      "category": "Gas flarinl"
    },
    {
      "year": "1991",
      "value": 2601,
      "category": "Liquid fuel"
    },
    {
      "year": "1991",
      "value": 2284,
      "category": "Solid fuel"
    },
    {
      "year": "1991",
      "value": 1051,
      "category": "Gas fuel"
    },
    {
      "year": "1991",
      "value": 161,
      "category": "Cement production"
    },
    {
      "year": "1991",
      "value": 45,
      "category": "Gas flarinl"
    },
    {
      "year": "1992",
      "value": 2499,
      "category": "Liquid fuel"
    },
    {
      "year": "1992",
      "value": 2290,
      "category": "Solid fuel"
    },
    {
      "year": "1992",
      "value": 1085,
      "category": "Gas fuel"
    },
    {
      "year": "1992",
      "value": 167,
      "category": "Cement production"
    },
    {
      "year": "1992",
      "value": 36,
      "category": "Gas flarinl"
    },
    {
      "year": "1993",
      "value": 2515,
      "category": "Liquid fuel"
    },
    {
      "year": "1993",
      "value": 2225,
      "category": "Solid fuel"
    },
    {
      "year": "1993",
      "value": 1117,
      "category": "Gas fuel"
    },
    {
      "year": "1993",
      "value": 176,
      "category": "Cement production"
    },
    {
      "year": "1993",
      "value": 37,
      "category": "Gas flarinl"
    },
    {
      "year": "1994",
      "value": 2539,
      "category": "Liquid fuel"
    },
    {
      "year": "1994",
      "value": 2278,
      "category": "Solid fuel"
    },
    {
      "year": "1994",
      "value": 1133,
      "category": "Gas fuel"
    },
    {
      "year": "1994",
      "value": 186,
      "category": "Cement production"
    },
    {
      "year": "1994",
      "value": 39,
      "category": "Gas flarinl"
    },
    {
      "year": "1995",
      "value": 2560,
      "category": "Liquid fuel"
    },
    {
      "year": "1995",
      "value": 2359,
      "category": "Solid fuel"
    },
    {
      "year": "1995",
      "value": 1151,
      "category": "Gas fuel"
    },
    {
      "year": "1995",
      "value": 197,
      "category": "Cement production"
    },
    {
      "year": "1995",
      "value": 39,
      "category": "Gas flarinl"
    },
    {
      "year": "1996",
      "value": 2626,
      "category": "Liquid fuel"
    },
    {
      "year": "1996",
      "value": 2382,
      "category": "Solid fuel"
    },
    {
      "year": "1996",
      "value": 1198,
      "category": "Gas fuel"
    },
    {
      "year": "1996",
      "value": 203,
      "category": "Cement production"
    },
    {
      "year": "1996",
      "value": 40,
      "category": "Gas flarinl"
    },
    {
      "year": "1997",
      "value": 2701,
      "category": "Liquid fuel"
    },
    {
      "year": "1997",
      "value": 2409,
      "category": "Solid fuel"
    },
    {
      "year": "1997",
      "value": 1197,
      "category": "Gas fuel"
    },
    {
      "year": "1997",
      "value": 209,
      "category": "Cement production"
    },
    {
      "year": "1997",
      "value": 40,
      "category": "Gas flarinl"
    },
    {
      "year": "1998",
      "value": 2763,
      "category": "Liquid fuel"
    },
    {
      "year": "1998",
      "value": 2343,
      "category": "Solid fuel"
    },
    {
      "year": "1998",
      "value": 1224,
      "category": "Gas fuel"
    },
    {
      "year": "1998",
      "value": 209,
      "category": "Cement production"
    },
    {
      "year": "1998",
      "value": 36,
      "category": "Gas flarinl"
    },
    {
      "year": "1999",
      "value": 2741,
      "category": "Liquid fuel"
    },
    {
      "year": "1999",
      "value": 2310,
      "category": "Solid fuel"
    },
    {
      "year": "1999",
      "value": 1258,
      "category": "Gas fuel"
    },
    {
      "year": "1999",
      "value": 217,
      "category": "Cement production"
    },
    {
      "year": "1999",
      "value": 35,
      "category": "Gas flarinl"
    },
    {
      "year": "2000",
      "value": 2845,
      "category": "Liquid fuel"
    },
    {
      "year": "2000",
      "value": 2327,
      "category": "Solid fuel"
    },
    {
      "year": "2000",
      "value": 1289,
      "category": "Gas fuel"
    },
    {
      "year": "2000",
      "value": 226,
      "category": "Cement production"
    },
    {
      "year": "2000",
      "value": 46,
      "category": "Gas flarinl"
    },
    {
      "year": "2001",
      "value": 2848,
      "category": "Liquid fuel"
    },
    {
      "year": "2001",
      "value": 2445,
      "category": "Solid fuel"
    },
    {
      "year": "2001",
      "value": 1316,
      "category": "Gas fuel"
    },
    {
      "year": "2001",
      "value": 237,
      "category": "Cement production"
    },
    {
      "year": "2001",
      "value": 47,
      "category": "Gas flarinl"
    },
    {
      "year": "2002",
      "value": 2832,
      "category": "Liquid fuel"
    },
    {
      "year": "2002",
      "value": 2518,
      "category": "Solid fuel"
    },
    {
      "year": "2002",
      "value": 1342,
      "category": "Gas fuel"
    },
    {
      "year": "2002",
      "value": 252,
      "category": "Cement production"
    },
    {
      "year": "2002",
      "value": 49,
      "category": "Gas flarinl"
    },
    {
      "year": "2003",
      "value": 2958,
      "category": "Liquid fuel"
    },
    {
      "year": "2003",
      "value": 2695,
      "category": "Solid fuel"
    },
    {
      "year": "2003",
      "value": 1397,
      "category": "Gas fuel"
    },
    {
      "year": "2003",
      "value": 276,
      "category": "Cement production"
    },
    {
      "year": "2003",
      "value": 48,
      "category": "Gas flarinl"
    },
    {
      "year": "2004",
      "value": 3043,
      "category": "Liquid fuel"
    },
    {
      "year": "2004",
      "value": 2906,
      "category": "Solid fuel"
    },
    {
      "year": "2004",
      "value": 1443,
      "category": "Gas fuel"
    },
    {
      "year": "2004",
      "value": 298,
      "category": "Cement production"
    },
    {
      "year": "2004",
      "value": 54,
      "category": "Gas flarinl"
    },
    {
      "year": "2005",
      "value": 3068,
      "category": "Liquid fuel"
    },
    {
      "year": "2005",
      "value": 3108,
      "category": "Solid fuel"
    },
    {
      "year": "2005",
      "value": 1485,
      "category": "Gas fuel"
    },
    {
      "year": "2005",
      "value": 320,
      "category": "Cement production"
    },
    {
      "year": "2005",
      "value": 60,
      "category": "Gas flarinl"
    },
    {
      "year": "2006",
      "value": 3091,
      "category": "Liquid fuel"
    },
    {
      "year": "2006",
      "value": 3293,
      "category": "Solid fuel"
    },
    {
      "year": "2006",
      "value": 1534,
      "category": "Gas fuel"
    },
    {
      "year": "2006",
      "value": 356,
      "category": "Cement production"
    },
    {
      "year": "2006",
      "value": 62,
      "category": "Gas flarinl"
    },
    {
      "year": "2007",
      "value": 3071,
      "category": "Liquid fuel"
    },
    {
      "year": "2007",
      "value": 3422,
      "category": "Solid fuel"
    },
    {
      "year": "2007",
      "value": 1562,
      "category": "Gas fuel"
    },
    {
      "year": "2007",
      "value": 382,
      "category": "Cement production"
    },
    {
      "year": "2007",
      "value": 66,
      "category": "Gas flarinl"
    },
    {
      "year": "2008",
      "value": 3103,
      "category": "Liquid fuel"
    },
    {
      "year": "2008",
      "value": 3587,
      "category": "Solid fuel"
    },
    {
      "year": "2008",
      "value": 1630,
      "category": "Gas fuel"
    },
    {
      "year": "2008",
      "value": 388,
      "category": "Cement production"
    },
    {
      "year": "2008",
      "value": 69,
      "category": "Gas flarinl"
    },
    {
      "year": "2009",
      "value": 3042,
      "category": "Liquid fuel"
    },
    {
      "year": "2009",
      "value": 3590,
      "category": "Solid fuel"
    },
    {
      "year": "2009",
      "value": 1584,
      "category": "Gas fuel"
    },
    {
      "year": "2009",
      "value": 415,
      "category": "Cement production"
    },
    {
      "year": "2009",
      "value": 66,
      "category": "Gas flarinl"
    },
    {
      "year": "2010",
      "value": 3107,
      "category": "Liquid fuel"
    },
    {
      "year": "2010",
      "value": 3812,
      "category": "Solid fuel"
    },
    {
      "year": "2010",
      "value": 1696,
      "category": "Gas fuel"
    },
    {
      "year": "2010",
      "value": 446,
      "category": "Cement production"
    },
    {
      "year": "2010",
      "value": 67,
      "category": "Gas flarinl"
    },
    {
      "year": "2011",
      "value": 3134,
      "category": "Liquid fuel"
    },
    {
      "year": "2011",
      "value": 4055,
      "category": "Solid fuel"
    },
    {
      "year": "2011",
      "value": 1756,
      "category": "Gas fuel"
    },
    {
      "year": "2011",
      "value": 494,
      "category": "Cement production"
    },
    {
      "year": "2011",
      "value": 64,
      "category": "Gas flarinl"
    },
    {
      "year": "2012",
      "value": 3200,
      "category": "Liquid fuel"
    },
    {
      "year": "2012",
      "value": 4106,
      "category": "Solid fuel"
    },
    {
      "year": "2012",
      "value": 1783,
      "category": "Gas fuel"
    },
    {
      "year": "2012",
      "value": 519,
      "category": "Cement production"
    },
    {
      "year": "2012",
      "value": 65,
      "category": "Gas flarinl"
    },
    {
      "year": "2013",
      "value": 3220,
      "category": "Liquid fuel"
    },
    {
      "year": "2013",
      "value": 4126,
      "category": "Solid fuel"
    },
    {
      "year": "2013",
      "value": 1806,
      "category": "Gas fuel"
    },
    {
      "year": "2013",
      "value": 554,
      "category": "Cement production"
    },
    {
      "year": "2013",
      "value": 68,
      "category": "Gas flarinl"
    },
    {
      "year": "2014",
      "value": 3280,
      "category": "Liquid fuel"
    },
    {
      "year": "2014",
      "value": 4117,
      "category": "Solid fuel"
    },
    {
      "year": "2014",
      "value": 1823,
      "category": "Gas fuel"
    },
    {
      "year": "2014",
      "value": 568,
      "category": "Cement production"
    },
    {
      "year": "2014",
      "value": 68,
      "category": "Gas flarinl"
    }
  ]
 ]



export const dataLineChart_ = [
  {
    "date": "2018/8/1",
    "type": "download",
    "value": 4623
  },
  {
    "date": "2018/8/1",
    "type": "register",
    "value": 2208
  },
  {
    "date": "2018/8/1",
    "type": "bill",
    "value": 182
  },
  {
    "date": "2018/8/2",
    "type": "download",
    "value": 6145
  },
  {
    "date": "2018/8/2",
    "type": "register",
    "value": 2016
  },
  {
    "date": "2018/8/2",
    "type": "bill",
    "value": 257
  },
  {
    "date": "2018/8/3",
    "type": "download",
    "value": 508
  },
  {
    "date": "2018/8/3",
    "type": "register",
    "value": 2916
  },
  {
    "date": "2018/8/3",
    "type": "bill",
    "value": 289
  },
  {
    "date": "2018/8/4",
    "type": "download",
    "value": 6268
  },
  {
    "date": "2018/8/4",
    "type": "register",
    "value": 4512
  },
  {
    "date": "2018/8/4",
    "type": "bill",
    "value": 428
  },
  {
    "date": "2018/8/5",
    "type": "download",
    "value": 6411
  },
  {
    "date": "2018/8/5",
    "type": "register",
    "value": 8281
  },
  {
    "date": "2018/8/5",
    "type": "bill",
    "value": 619
  },
  {
    "date": "2018/8/6",
    "type": "download",
    "value": 1890
  },
  {
    "date": "2018/8/6",
    "type": "register",
    "value": 2008
  },
  {
    "date": "2018/8/6",
    "type": "bill",
    "value": 87
  },
  {
    "date": "2018/8/7",
    "type": "download",
    "value": 4251
  },
  {
    "date": "2018/8/7",
    "type": "register",
    "value": 1963
  },
  {
    "date": "2018/8/7",
    "type": "bill",
    "value": 706
  },
  {
    "date": "2018/8/8",
    "type": "download",
    "value": 2978
  },
  {
    "date": "2018/8/8",
    "type": "register",
    "value": 2367
  },
  {
    "date": "2018/8/8",
    "type": "bill",
    "value": 387
  },
  {
    "date": "2018/8/9",
    "type": "download",
    "value": 3880
  },
  {
    "date": "2018/8/9",
    "type": "register",
    "value": 2956
  },
  {
    "date": "2018/8/9",
    "type": "bill",
    "value": 488
  },
  {
    "date": "2018/8/10",
    "type": "download",
    "value": 3606
  },
  {
    "date": "2018/8/10",
    "type": "register",
    "value": 678
  },
  {
    "date": "2018/8/10",
    "type": "bill",
    "value": 507
  },
  {
    "date": "2018/8/11",
    "type": "download",
    "value": 4311
  },
  {
    "date": "2018/8/11",
    "type": "register",
    "value": 3188
  },
  {
    "date": "2018/8/11",
    "type": "bill",
    "value": 548
  },
  {
    "date": "2018/8/12",
    "type": "download",
    "value": 4116
  },
  {
    "date": "2018/8/12",
    "type": "register",
    "value": 3491
  },
  {
    "date": "2018/8/12",
    "type": "bill",
    "value": 456
  },
  {
    "date": "2018/8/13",
    "type": "download",
    "value": 6419
  },
  {
    "date": "2018/8/13",
    "type": "register",
    "value": 2852
  },
  {
    "date": "2018/8/13",
    "type": "bill",
    "value": 689
  },
  {
    "date": "2018/8/14",
    "type": "download",
    "value": 1643
  },
  {
    "date": "2018/8/14",
    "type": "register",
    "value": 4788
  },
  {
    "date": "2018/8/14",
    "type": "bill",
    "value": 280
  },
  {
    "date": "2018/8/15",
    "type": "download",
    "value": 445
  },
  {
    "date": "2018/8/15",
    "type": "register",
    "value": 4319
  },
  {
    "date": "2018/8/15",
    "type": "bill",
    "value": 176
  }
]