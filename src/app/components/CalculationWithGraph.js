"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

export function CalculationWithGraph() {
  const [value1, setValue1] = useState(50000);
  const [value2, setValue2] = useState(10.65);
  const [value3, setValue3] = useState(12);
  const [emi, setEmi] = useState("");
  const [chartData, setChartData] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    calculateEmi();
  }, [value1, value2, value3]);

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(parseFloat(event.target.value).toFixed(1));
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const calculateEmi = async () => {
    const principal = value1;
    const rateOfInterest = value2 / 12 / 100; // Monthly interest rate
    const tenureInMonths = value3;

    const emi =
      (principal *
        rateOfInterest *
        Math.pow(1 + rateOfInterest, tenureInMonths)) /
      (Math.pow(1 + rateOfInterest, tenureInMonths) - 1);

    setEmi(emi.toFixed(2));

    const totalAmount = emi * tenureInMonths;
    const totalInterest = (totalAmount - principal).toFixed(0);

    const seriesData = [principal, totalInterest].map(Number);

    setChartData((prevChartData) => ({
      ...prevChartData,
      series: seriesData,
      options: {
        labels: ["Principal Amount", "Interest Amount"],
        chart: {
          type: "pie",
        },
      },
    }));

    console.log("Chart data:", chartData);
    console.log("principal", principal);
  };

  return (
    <section>
      <div className="container m-auto">
        <div className="grid grid-cols-3 border w-full h-full ">
          <div className="border flex flex-col w-full">
            <div className="m-5 p-5 border-2 border-gray-700 flex flex-col">
              <div className="flex justify-between pb-1">
                <h1>Loan Amount(₹)</h1>
                <div className="border rounded-lg h-8 w-28 flex justify-center items-center text-center">
                  <span>{value1}</span>
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="50000"
                  max="4000000"
                  value={value1}
                  step={1000}
                  onChange={handleChange1}
                  className="w-full"
                />
                <div className="flex justify-between pb-6">
                  <h1>50K</h1>
                  <div className="">40L</div>
                </div>
              </div>
              <div className="flex justify-between">
                <h1>Interest Rate (p.a)</h1>
                <div className="border rounded-lg h-8 w-28 flex justify-center items-center text-center">
                  <span>{`${value2}%`}</span>
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="10.65"
                  max="22.0"
                  value={value2}
                  onChange={handleChange2}
                  step="0.01"
                  className="w-full"
                />
                <div className="flex justify-between pb-6">
                  <h1>10.65</h1>
                  <div className="">22%</div>
                </div>
              </div>
              <div className="flex justify-between">
                <h1>Tenure (months)</h1>
                <div className="border rounded-lg h-8 w-28 flex justify-center items-center text-center">
                  {value3}
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="12"
                  max="84"
                  value={value3}
                  onChange={handleChange3}
                  className="w-full"
                />
                <div className="flex justify-between">
                  <h1>12</h1>
                  <div className="">84</div>
                </div>
              </div>
              <div className="flex justify-between">
                <h1>EMI</h1>
                <div className="border rounded-lg h-8 w-28 flex justify-center items-center text-center">
                  ₹{emi}
                </div>
              </div>
              <div className=" flex justify-center items-center p-5 -z-50">
                <ReactApexChart
                  key={value3} // Add key prop to force re-render when value3 changes
                  options={chartData?.options}
                  series={chartData?.series?.map((data) => Number(data))}
                  type="pie"
                  width="350"
                />
              </div>
            </div>
          </div>
          <div>2</div>

          <div>1</div>
        </div>
      </div>
    </section>
  );
}
