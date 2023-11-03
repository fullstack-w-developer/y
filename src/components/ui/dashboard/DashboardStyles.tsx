import styled from '@emotion/styled';
export const Wrapper = styled.div`
  .dashbaord_container {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    width: 90%;
    margin-block: 2.5rem;
    margin: auto;
    margin-bottom: 3rem;
  }
  .dashbaord_container .lineChart {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
  }
  .dashbaord_container .chartInHour2 {
    grid-column: span 2 / span 2;
    grid-column-start: 4;
    grid-row: span 3 / span 3;
  }
  .dashbaord_container .chartVertical {
    grid-row-start: 4;
    grid-row: span 3 / span 3;
    grid-column-start: 3;
    grid-column: span 3 / span 3;
  }
  .dashbaord_container .filter_dashboard {
    grid-row-start: 4 !important;
    grid-row: span 5 / span 3;
    grid-column-start: 1 !important;
    grid-column: span 2 / span 2;
  }
  @media (min-width: 1440px) {
    .dashbaord_container {
      width: 1440px;
    }
  }
  @media (max-width: 992px) {
    .dashbaord_container {
      display: flex;
      flex-direction: column;
    }
  }
`;
