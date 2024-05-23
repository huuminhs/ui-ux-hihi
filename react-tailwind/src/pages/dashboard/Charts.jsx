import React from "react";
import dynamic from "next/dynamic";

// @material-tailwind/react
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

// charts import
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// deepmerge
import merge from "deepmerge";

function AreaChart({ height = 350, series, colors, options }) {
  const chartOptions = React.useMemo(
    () => ({
      colors,
      ...merge(
        {
          chart: {
            height: height,
            type: "area",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          markers: {
            size: 0,
            strokeWidth: 0,
            strokeColors: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: true,
            borderColor: "#EEEEEE",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          tooltip: {
            theme: "light",
          },
          yaxis: {
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#757575",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
        },
        options ? options : {}
      ),
    }),
    [height, colors, options]
  );

  return (
    <Chart type="area" height={height} series={series} options={chartOptions} />
  );
}

export function Charts() {
  return (
    <section className="md:m-10 my-4">
      <Card>
        <CardBody className="!p-2">
          <div className="flex gap-2 flex-wrap justify-between px-4 !mt-4 ">
            <Typography variant="h3" color="blue-gray">
              December 11-29
            </Typography>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-[#c0bfbf] rounded-full"></span>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  Company KPI
                </Typography>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-[#6f65e8] rounded-full"></span>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  University KPI
                </Typography>
              </div>
            </div>
          </div>
          {/** chart */}
          <AreaChart
            colors={["#C0BFBF", "#6f65e8"]}
            options={{
              xaxis: {
                categories: [
                  "Day 0",
                  "Day 5",
                  "Day 10",
                  "Day 15",
                  "Day 20",
                  "Day 25",
                  "Today"
                ],
              },
              yaxis: {
                min: 0,  // Set the minimum y-axis value to 0
                max: 100,  // Set the maximum y-axis value to 100
                tickAmount: 5,  // Set the number of ticks on the y-axis to 6
            },
            }}
            series={[
              {
                name: "Company KPI",
                data: [
                  0, 20, 18, 35, 50, 68, 80,,
                ],
              },
              {
                name: "University KPI",
                data: [
                  20, 16, 15, 26, 60, 79, 90,
                ],
              },
            ]}
          />
        </CardBody>
        {/* <CardFooter className="flex gap-6 flex-wrap items-center justify-between">
        </CardFooter> */}
      </Card>
    </section>
  );
}

export default Charts;