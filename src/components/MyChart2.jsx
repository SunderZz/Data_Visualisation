import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import jsonData from "./countries-table.json";

const MyChart2 = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const totalWorldPercentage = jsonData.reduce(
      (sum, country) => sum + country.worldPercentage,
      0
    );

    const pieData = jsonData.map((country) => ({
      name: country.country,
      y: (country.worldPercentage / totalWorldPercentage) * 100,
    }));

    const options = {
      chart: {
        type: "pie",
      },
      title: {
        text: "Percentage of the world population analyzed",
      },
      plotOptions: {
        pie: {
          size: "100%",
        },
      },
      series: [
        {
          name: "World Percentage",
          data: pieData,
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

export default MyChart2;
