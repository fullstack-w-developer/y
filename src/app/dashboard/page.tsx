'use client';
import ChartInHour2 from '@/components/ui/charts/lineChart';
import DoughuntChart from '@/components/ui/charts/doughuntChart';
import LineChart from '@/components/ui/charts/areaChart';
import ChartVertical from '@/components/ui/charts/columnChart';
import Filter from '@/components/ui/filter/Filter';
import News from '@/components/ui/charts/news/news';
import { Wrapper } from '@/components/ui/dashboard/DashboardStyles';

const Page = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-5 grid-rows-11 gap-10 w-[90%] mx-auto">
        <div className="col-span-3 row-span-3">
        <LineChart />
        </div>
        <div className="col-span-2 row-span-3 col-start-4">
        <ChartInHour2 />
        </div>
        <div className="col-span-2 row-span-5 row-start-4">
        <Filter />
        </div>
        <div className="col-span-3 row-span-3 col-start-3 row-start-4">
        <ChartVertical />
        </div>
        <div className="col-span-3 row-span-5 col-start-3 row-start-7">
        <News />
        </div>
        <div className="col-span-2 row-span-3 row-start-9">
        <DoughuntChart />
        </div>
      </div>

      {/* <div className={'dashbaord_container '}>
        <div className={'lineChart'}>
          <LineChart />
        </div>
        <div className="chartInHour2 ">
          <ChartInHour2 />
        </div>
        <div className="chartVertical">
          <ChartVertical />
        </div>
        <div className="col-span-2 row-span-5 col-start-1 row-start-4 filter_dashboard">
          <Filter />
        </div>
        <div className="col-span-3 row-span-4 col-start-3 row-start-7">
          <News />
        </div>
        <div className="col-span-2 row-span-2 row-start-9">
          <DoughuntChart />
        </div>
      </div> */}
    </Wrapper>
  );
};

export default Page;
