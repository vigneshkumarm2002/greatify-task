import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const total = 20000;
  const consumed = 3000;
  const remaining = total - consumed;

  const data = {
    labels: ["Consumed", "Remaining"],
    datasets: [
      {
        data: [consumed, remaining],
        backgroundColor: [
          "#00DC46",
          "#00373A", // Consumed color
          // Remaining color
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = " 30px Poppins"; // Font for "52"
      ctx.fillStyle = "#00373A";
      ctx.textAlign = "center";
      ctx.fillText(
        56, // Draw "52" first
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 5
      );

      // Change font for "consumed"
      ctx.font = " 14px Poppins"; // Font for "consumed"
      ctx.fillStyle = "#00373A"; // Color for "consumed"

      ctx.fillText(
        "consumed", // Draw "consumed" on the next line
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y + 25 // Adjust the y-coordinate for the next line
      );

      ctx.restore();
    },
  };

  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
};

export default DoughnutChart;
