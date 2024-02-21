import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./BarChart.css"

interface chartData{
  date: string;
  signUps: number
}

const SignUpsChart: React.FC = () => {
  useEffect(() => {
    const data: chartData[] = [
      {
        date: "2023-12-27",
        signUps: 2,
      },
      {
        date: "2023-12-26",
        signUps: 5,
      },
      {
        date: "2023-12-25",
        signUps: 9,
      },
      {
        date: "2023-12-24",
        signUps: 4,
      },
      {
        date: "2023-12-23",
        signUps: 2,
      },
      {
        date: "2023-12-22",
        signUps: 7,
      },
      {
        date: "2023-12-21",
        signUps: 3,
      },
      {
        date: "2023-12-20",
        signUps: 12,
      },
      {
        date: "2023-12-19",
        signUps: 9,
      },
      {
        date: "2023-12-18",
        signUps: 7,
      },
      {
        date: "2023-12-17",
        signUps: 2,
      },
      {
        date: "2023-12-16",
        signUps: 3,
      },
      {
        date: "2023-12-15",
        signUps: 3,
      },
      {
        date: "2023-12-14",
        signUps: 5,
      },
      {
        date: "2023-12-13",
        signUps: 8,
      },
      {
        date: "2023-12-12",
        signUps: 13,
      },
      {
        date: "2023-12-11",
        signUps: 7,
      },
      {
        date: "2023-12-10",
        signUps: 2,
      },
      {
        date: "2023-12-09",
        signUps: 5,
      },
      {
        date: "2023-12-08",
        signUps: 3,
      },
    ];

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
  }, []);

  return <canvas id="signUpsChart"></canvas>;
};

export default SignUpsChart;
