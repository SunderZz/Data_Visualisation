import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import jsonData from "./countries-table.json";

const MyChart1 = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const sortedData = jsonData.sort((a, b) => b.area - a.area);

    const categories = sortedData
      .slice(0, 50)
      .map((country) => country.country);
    const areas = sortedData.slice(0, 50).map((country) => country.area);

    const options = {
      chart: {
        type: "bar",
        scrollablePlotArea: {
          minWidth: 400,
          scrollPositionX: 1,
        },
      },
      title: {
        text: "Land area of countries",
      },
      xAxis: {
        categories: categories,
        title: {
          text: "Pays",
        },
      },
      yAxis: {
        title: {
          text: "Superficie (km²)",
        },
      },
      series: [
        {
          name: "Superficie",
          data: areas,
        },
      ],
    };

    setChartOptions(options);
  }, []);

  return (
    <div>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
};

export default MyChart1;
