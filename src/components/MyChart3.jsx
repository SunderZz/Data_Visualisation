import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import jsonData from "./countries-table.json";

const MyChart3 = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const countries = jsonData.map((item) => item.country);
    const uniqueCountries = [...new Set(countries)];

    const options = {
      chart: {
        type: "column",
      },
      title: {
        text: "Comparison of population density and land area by country",
      },
      xAxis: {
        categories: uniqueCountries,
      },
      yAxis: [
        {
          title: {
            text: "Densité",
          },
        },
        {
          title: {
            text: "Superficie",
          },
          opposite: true,
        },
      ],
      series: [
        {
          name: "Densité",
          data: [],
          yAxis: 0,
        },
        {
          name: "Superficie",
          data: [],
          yAxis: 1,
        },
      ],
    };

    setChartOptions(options);

    function updateChart(selectedCountry) {
      const filteredData = jsonData.filter(
        (item) => item.country === selectedCountry
      );

      const densityData = filteredData.map((item) => item.density);
      const areaData = filteredData.map((item) => item.landAreaKm);

      options.xAxis.categories = [selectedCountry];

      options.series[0].data = densityData;
      options.series[1].data = areaData;

      setChartOptions({ ...options });
    }

    const previousDropdown = document.getElementById("countryDropdown");
    if (previousDropdown) {
      previousDropdown.remove();
    }

    const container = document.getElementById("container_4");
    const newDropdown = document.createElement("select");
    newDropdown.id = "countryDropdown";
    uniqueCountries.forEach((country) => {
      const option = document.createElement("option");
      option.text = country;
      newDropdown.appendChild(option);
    });
    container.appendChild(newDropdown);
    newDropdown.addEventListener("change", (event) => {
      const selectedCountry = event.target.value;
      updateChart(selectedCountry);
    });
  }, []);

  return (
    <div>
      <div id="container_4">
        {chartOptions && (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export default MyChart3;
