import React, { useEffect } from "react";
import useBarChart from "../hooks/useBarChart";
import Chart from "chart.js/auto";
import "./BarChart.css";

const SignUpsChart: React.FC = () => {
  const data = useBarChart();
  useEffect(() => {
    const dates = data.map((item) => item.date).reverse();
    const signUps = data.map((item) => item.signUps).reverse();

    const ctx = document.getElementById(
      "signUpsChart"
    ) as HTMLCanvasElement | null;
    if (ctx) {
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Signups Per Day",
              backgroundColor: "#f03e3e",
              borderColor: "#f03e3e",
              borderWidth: 1,
              borderRadius: 10,
              data: signUps,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.contentRect.width < 600) {
            chart.options.maintainAspectRatio = true;
            chart.options.aspectRatio = 1;
          } else {
            chart.options.maintainAspectRatio = false;
          }
          chart.update();
        });
      });

      resizeObserver.observe(
        document.querySelector("#signUpsChart") as HTMLElement
      );

      return () => {
        chart.destroy();
        resizeObserver.disconnect();
      };
    }
  }, [data]);

  return <canvas id="signUpsChart"></canvas>;
};

export default SignUpsChart;
