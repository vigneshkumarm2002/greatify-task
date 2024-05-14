import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const LineChart = ({ data, color, gradientStart, gradientStop }) => {
  const universityData = {
    labels: data?.xaxis,
    datasets: [
      {
        label: "University Data",
        data: data?.plots,
        fill: true,
        backgroundColor: (context) => {
          if (gradientStart && gradientStop) {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 250);
            gradient.addColorStop(0, gradientStart);
            gradient.addColorStop(1, gradientStop);
            return gradient;
          }
        },
        borderColor: color,
        tension: 0,
        pointRadius: 6,
        borderWidth: 2,
        pointBackgroundColor: color,
        pointBorderColor: "#ffffff",
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: false,
        grid: {
          display: false, // Hide vertical gridlines
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            family: "Poppins",
            weight: 400,
            size: 14,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 10,
        grid: {
          display: true,
          color: "rgba(239, 239, 240, 0.8)",
        },
        border: {
          display: false,
          dash: [12, 6],
        },
        ticks: {
          stepSize: 1,
          min: 0,
          max: 10,
          font: {
            family: "Poppins",
            weight: 400,
            size: 14,
          },
          padding: 5,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.parsed.y;
            return `Total: ${value}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 2,
        borderWidth: 2,
      },
    },
  };

  const mediaQuery = window.matchMedia("(max-width: 500px)");
  if (mediaQuery.matches) {
    chartOptions.scales.x.ticks.font.size = 10;
    chartOptions.scales.y.ticks.font.size = 10;
    chartOptions.elements.line.borderWidth = 2;
  }

  return data && <Line data={universityData} options={chartOptions} />;
};

export default LineChart;
