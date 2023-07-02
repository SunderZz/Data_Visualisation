import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import jsonData from "./countries-table.json";

const MyChart = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    var populationData = [];

    for (var i = 0; i < jsonData.length; i++) {
      var countryData = jsonData[i];
      var population = [
        countryData.pop1980,
        countryData.pop2000,
        countryData.pop2010,
        countryData.pop2022,
        countryData.pop2023,
        countryData.pop2030,
        countryData.pop2050,
      ];

      populationData.push({
        name: countryData.country,
        data: population,
      });
    }

    var options = {
      title: {
        text: "Population Forecast by Country",
      },
      xAxis: {
        categories: ["1980", "2000", "2010", "2022", "2023", "2030", "2050"],
      },
      yAxis: {
        title: {
          text: "Population",
        },
      },
      series: [populationData[0]],
    };

    setChartOptions(options);
    setSelectedCountry(populationData[0].name);
  }, []);

  function handleCountryChange(event) {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);

    var options = {
      ...chartOptions,
      series: [
        {
          ...chartOptions.series[0],
          name: selectedCountry, 
          data: getPopulationData(selectedCountry),
        },
      ],
    };

    setChartOptions(options);
  }

  function getPopulationData(country) {
    var countryData = jsonData.find((item) => item.country === country);
    return [
      countryData.pop1980,
      countryData.pop2000,
      countryData.pop2010,
      countryData.pop2022,
      countryData.pop2023,
      countryData.pop2030,
      countryData.pop2050,
    ];
  }

  return (
    <div>
      <div>
        <select value={selectedCountry} onChange={handleCountryChange}>
          {jsonData.map((item) => (
            <option key={item.country} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>
      </div>
      <div id="container"></div>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
};

export default MyChart;
