import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import jsonData from "./countries-table.json";

const MyChart4 = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const slicedData = jsonData.slice(0, 100);

    const countries = slicedData.map((item) => item.country);
    const uniqueCountries = Array.from(new Set(countries));

    const options = {
      chart: {
        type: "scatter",
      },
      title: {
        text: " Growth rate by country",
      },
      xAxis: {
        title: {
          text: "Pays",
        },
        categories: uniqueCountries,
      },
      yAxis: {
        title: {
          text: "Taux de croissance",
        },
      },
      plotOptions: {
        scatter: {
          marker: {
            symbol: "circle",
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: "rgb(100,100,100)",
              },
            },
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      },
      series: [
        {
          name: "Taux de croissance",
          data: slicedData.map((item) => ({
            x: uniqueCountries.indexOf(item.country),
            y: item.growthRate,
            name: item.country,
          })),
        },
      ],
    };

    setChartOptions(options);
  }, []);

  function handleCountryChange(event) {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);

    const updatedData = chartOptions.series[0].data.map((item) => ({
      ...item,
      color: item.name === selectedCountry ? "red" : null,
    }));

    const updatedOptions = {
      ...chartOptions,
      series: [
        {
          ...chartOptions.series[0],
          data: updatedData,
        },
      ],
    };

    setChartOptions(updatedOptions);
  }

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Sélectionner un pays</option>
        {jsonData.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>
      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
};

export default MyChart4;
