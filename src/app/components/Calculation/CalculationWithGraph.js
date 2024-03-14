"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CaculationFd from "./CaculationFd";
import { ApplyNowButton } from "../Button/ApplyNowButton";
import Link from "next/link";

export function CalculationWithGraph() {
  
  // ***************************************** personal Loan ********************************\\

  const [valuePersonalLoan, setValuePersonalLoan] = useState(50000);
  const [valueInterestPersonalLoan, setValueInterestPersonalLoan] =
    useState(10.65);
  const [valueMonthsPersonalLoan, setValueMonthsPersonalLoan] = useState(12);
  const [EmiPersonalLoan, setEmiPersonalLoan] = useState("");
  const [ChartDataPersonalLoan, setChartDataPersonalLoan] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    calculateEmiPersonalLoan();
  }, [valuePersonalLoan, valueInterestPersonalLoan, valueMonthsPersonalLoan]);

  const handleChange1 = (event) => {
    setValuePersonalLoan(event.target.value);
  };

  const handleChange2 = (event) => {
    setValueInterestPersonalLoan(parseFloat(event.target.value).toFixed(1));
  };

  const handleChange3 = (event) => {
    setValueMonthsPersonalLoan(event.target.value);
  };

  const calculateEmiPersonalLoan = async () => {
    const principal = valuePersonalLoan;
    const rateOfInterest = valueInterestPersonalLoan / 12 / 100; // Monthly interest rate
    const tenureInMonths = valueMonthsPersonalLoan;

    const EmiPersonalLoan =
      (principal *
        rateOfInterest *
        Math.pow(1 + rateOfInterest, tenureInMonths)) /
      (Math.pow(1 + rateOfInterest, tenureInMonths) - 1);

    setEmiPersonalLoan(EmiPersonalLoan.toFixed(0));

    const totalAmount = EmiPersonalLoan * tenureInMonths;
    const totalInterest = (totalAmount - principal).toFixed(0);

    const seriesData = [principal, totalInterest].map(Number);

    setChartDataPersonalLoan((prevChartDataPersonalLoan) => ({
      ...prevChartDataPersonalLoan,
      series: seriesData,
      options: {
        labels: ["Principal Amount ", "Interest Amount "],
        chart: {
          type: "pie",
        },
      },
    }));
  };

  // ***************************************** End Personal Loan ********************************\\

  // ***************************************** Home Loan ********************************\\

  const [valueHomeLoan, setValueHomeLoan] = useState(300000);
  const [valueInterestHomeLoan, setValueInterestHomeLoan] = useState(10.65);
  const [valueYearsHomeLoan, setValueYearsHomeLoan] = useState(1); // Tenure in years
  const [EmiHomeLoan, setEmiHomeLoan] = useState("");
  const [ChartDataHomeLoan, setChartDataHomeLoan] = useState({
    series: [],
    options: {},
  });

  // useEffect hook to recalculate EMI whenever inputs change
  useEffect(() => {
    calculateEmiHomeLoan();
  }, [valueHomeLoan, valueInterestHomeLoan, valueYearsHomeLoan]);

  // Handler functions for home loan input changes
  const handleChangeHomeLoanAmount = (event) => {
    setValueHomeLoan(event.target.value);
  };

  const handleChangeHomeLoanInterest = (event) => {
    setValueInterestHomeLoan(parseFloat(event.target.value).toFixed(1));
  };

  const handleChangeYears = (event) => {
    setValueYearsHomeLoan(event.target.value);
  };

  // Function to calculate home loan EMI
  const calculateEmiHomeLoan = () => {
    const principalHomeLoan = valueHomeLoan;
    const HomeLoanrateOfInterest = valueInterestHomeLoan / 12 / 100; // Monthly interest rate
    const HomeLoantenureInMonths = valueYearsHomeLoan * 12; // Convert years to months

    const EmiHomeLoan =
      (principalHomeLoan *
        HomeLoanrateOfInterest *
        Math.pow(1 + HomeLoanrateOfInterest, HomeLoantenureInMonths)) /
      (Math.pow(1 + HomeLoanrateOfInterest, HomeLoantenureInMonths) - 1);

    setEmiHomeLoan(EmiHomeLoan.toFixed(0));

    const totalAmountHomeLoan = EmiHomeLoan * HomeLoantenureInMonths;
    const totalInterestHomeLoan = (
      totalAmountHomeLoan - principalHomeLoan
    ).toFixed(0);

    const seriesDataHomeLoan = [principalHomeLoan, totalInterestHomeLoan].map(
      Number
    );

    setChartDataHomeLoan((prevChartDataHomeLoan) => ({
      ...prevChartDataHomeLoan,
      series: seriesDataHomeLoan,
      options: {
        labels: ["Principal Amount ", "Interest Amount "],
        chart: {
          type: "pie",
        },
      },
    }));
  };
  // ***************************************** End Home Loan ********************************\\

  // ***************************************** Credit Card EMI ********************************\\

  const [valueCreditCardAmount, setValueCreditCardAmount] = useState(2500);
  const [tenure, setTenure] = useState(6);

  const handleChangeCreditCardAmount = (event) => {
    setValueCreditCardAmount(event.target.value);
  };

  const handleTenureChange = (event) => {
    setTenure(event.target.value);
  };

  const proccecingFees = parseInt(295);

  // Calculate EMI
  const calculateEMI = () => {
    const principal = parseFloat(valueCreditCardAmount);
    let rateOfInterest = 0;

    switch (parseInt(tenure)) {
      case 24:
        rateOfInterest = 0.96;
        break;
      case 18:
        rateOfInterest = 1.26;
        break;
      case 12:
        rateOfInterest = 1.85;
        break;
      case 9:
        rateOfInterest = 2.45;
        break;
      case 6:
        rateOfInterest = 3.65;
        break;
      default:
        rateOfInterest = 3.65;
        break;
    }

    const months = parseInt(tenure);

    const monthlyInterestRatio = rateOfInterest / 100 / 12;
    const EMI =
      (principal * monthlyInterestRatio) /
      (1 - Math.pow(1 + monthlyInterestRatio, -months));
    return EMI.toFixed(2);
  };

  // Calculate Total Interest
  const calculateTotalInterest = () => {
    const principal = parseFloat(valueCreditCardAmount);

    const months = parseInt(tenure);

    const totalInterest = calculateEMI() * months - principal;
    return totalInterest.toFixed(2);
  };

  const months = parseInt(tenure);

  const totalIntrestOnCreditCard = parseInt(
    calculateTotalInterest() * months
  ).toFixed(0);

  const GstOnInterest = parseInt(
    (calculateTotalInterest() * months * 18) / 100
  ).toFixed(0);

  const interest = (
    calculateTotalInterest() * months +
    parseInt(GstOnInterest) +
    parseInt(proccecingFees)
  ).toFixed(0);

  const totalCreditCardBill =
    parseInt(interest) + parseInt(valueCreditCardAmount);

  const chartOptions = {
    labels: ["Interest", "GST on Interest", "Processing Fees", "Loan Amount"],
    colors: ["#FF4560", "#00E396", "#FEB019", "#008FFB"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = [
    parseInt(totalIntrestOnCreditCard),
    parseInt(GstOnInterest),
    parseInt(proccecingFees),
    parseInt(valueCreditCardAmount),
  ];


  return (
    <section>
      <div className="container m-auto">
        <div className="grid md:grid-cols-3  ">
          <div className=" flex flex-col md:w-full">
            <div className="m-5 p-5 border-2 rounded-xl border-blue-500 flex flex-col ">
              <h1 className="text-center pb-5 font-bold text-[20px] text-blue-500">
                Personal Loan Calculator
              </h1>
              <div className="flex justify-between pb-1">
                <h1 className="font-medium text-[18px]">Loan Amount(₹)</h1>
                <div className="    flex justify-center items-center text-center">
                  {/* <span>{valuePersonalLoan}</span> */}
                  <input
                    type="text"
                    value={`${valuePersonalLoan} ₹`}
                    className="w-28 font-medium b border rounded-lg h-8 text-center"
                  />
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="50000"
                  max="4000000"
                  value={valuePersonalLoan}
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
                <h1 className="font-medium text-[18px]">Interest Rate (p.a)</h1>
                <div className="border rounded-lg h-8 md:w-28 flex justify-center items-center text-center">
                  {/* <span>{`${valueInterestPersonalLoan}%`}</span> */}
                  <input
                    type="text"
                    value={`${valueInterestPersonalLoan} %`}
                    className="w-28 font-medium b border rounded-lg h-8 text-center"
                  />
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="10.65"
                  max="22.0"
                  value={valueInterestPersonalLoan}
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
                <h1 className="font-medium text-[18px]">Tenure (months)</h1>
                <div className="border rounded-lg h-8 w-28 flex justify-center items-center text-center">
                  {/* {valueMonthsPersonalLoan} */}
                  <input
                    type="text"
                    value={`${valueMonthsPersonalLoan}`}
                    className="w-28 b font-medium border rounded-lg h-8 text-center"
                  />
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="12"
                  max="84"
                  value={valueMonthsPersonalLoan}
                  onChange={handleChange3}
                  className="w-full"
                />
                <div className="flex justify-between">
                  <h1>12</h1>
                  <div className="">84 Months</div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col py-5">
                <h1 className="text-[20px] font-bold py-2">
                  Equated Monthly Instalment(EMI)
                </h1>
                <div className=" rounded-lg bg-blue-500 text-[20px] font-semibold h-8 w-full text-white flex justify-center items-center text-center">
                  ₹{EmiPersonalLoan}
                </div>
              </div>
              <div className="flex justify-center items-center py-5 ">
                <ReactApexChart
                  key={valueMonthsPersonalLoan} // Add key prop to force re-render when valueMonthsPersonalLoan changes
                  options={ChartDataPersonalLoan?.options}
                  series={ChartDataPersonalLoan?.series?.map((data) =>
                    Number(data)
                  )}
                  type="pie"
                  width="330"
                />
              </div>
              <Link href="/loan">
              <ApplyNowButton />
            </Link>
            </div>
          </div>
          <div className=" flex flex-col w-full">
            <div className="m-5 p-5 border-2 rounded-xl border-blue-500 flex flex-col ">
              <h1 className="text-center pb-5 font-bold text-[20px] text-blue-500">
                Home Loan Calculator
              </h1>
              <div className="flex justify-between pb-1">
                <h1 className="font-medium text-[18px]">Loan Amount(₹)</h1>
                <div className="    flex justify-center items-center text-center">
                  
                  <input
                    type="text"
                    value={`${valueHomeLoan} ₹`}
                    className="w-28 font-medium b border rounded-lg h-8 text-center"
                  />
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="300000"
                  max="50000000"
                  value={valueHomeLoan}
                  step={1000}
                  onChange={handleChangeHomeLoanAmount}
                  className="w-full"
                />
                <div className="flex justify-between pb-6">
                  <h1>30L</h1>
                  <div className="">5Cr</div>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="font-medium text-[18px]">Interest Rate (p.a)</h1>
                <div className="border rounded-lg h-8 w-28 flex justify-center items-center text-center">
                 
                  <input
                    type="text"
                    value={`${valueInterestHomeLoan} %`}
                    className="w-28 font-medium b border rounded-lg h-8 text-center"
                  />
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="6.50"
                  max="11.0"
                  value={valueInterestHomeLoan}
                  onChange={handleChangeHomeLoanInterest}
                  step="0.01"
                  className="w-full"
                />
                <div className="flex justify-between pb-6">
                  <h1>6.5%</h1>
                  <div className="">11%</div>
                </div>
              </div>
              <div className="flex justify-between">
                <h1 className="font-medium text-[18px]">Tenure (years)</h1>
                <div className="border rounded-lg h-8 w-28 flex justify-center items-center text-center">
                 
                  <input
                    type="text"
                    value={`${valueYearsHomeLoan}`}
                    className="w-28 b font-medium border rounded-lg h-8 text-center"
                  />
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={valueYearsHomeLoan}
                  onChange={handleChangeYears}
                  className="w-full"
                />
                <div className="flex justify-between">
                  <h1>1</h1>
                  <div className="">30</div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col py-5">
                <h1 className="text-[20px] font-bold py-2">
                  Equated Monthly Instalment(EMI)
                </h1>
                <div className=" rounded-lg bg-blue-500 text-[20px] font-semibold h-8 w-full text-white flex justify-center items-center text-center">
                  ₹{EmiHomeLoan}
                </div>
              </div>
              <div className="flex justify-center items-center py-5 ">
                <ReactApexChart
                  key={valueYearsHomeLoan} 
                  options={ChartDataHomeLoan?.options}
                  series={ChartDataHomeLoan?.series?.map((data) =>
                    Number(data)
                  )}
                  type="pie"
                  width="330"
                />
              </div>
              <Link href="/">
              <ApplyNowButton />
            </Link>
            </div>
          </div>

          <div className="m-5 p-5 border-2 rounded-xl border-blue-500 flex flex-col ">
            <h1 className="text-center pb-5 font-bold text-[20px] text-blue-500">
              Credit Card EMI Calculator
            </h1>
            <div className="flex flex-col pb-1 gap-2">
              <h1 className="text-[18px] font-semibold">Loan Amount (₹)</h1>
              <div className="flex justify-center items-center text-center w-full">
                <h1 className="font-medium text-[18px] border-2 border-r-0 border-solid border-blue-500 rounded-l-xl h-10 w-10 justify-center flex items-center">
                  ₹
                </h1>
                <input
                  type="text"
                  value={valueCreditCardAmount}
                  min={2500}
                  max={2500000}
                  onChange={handleChangeCreditCardAmount}
                  className="border-2 border-solid rounded-e-xl border-blue-500 h-10 w-full p-2 focus:border-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-3 pb-5">
              <h1 className="text-[18px] font-semibold">Tenure (months)</h1>
              <div className="flex justify-center items-center text-center w-full">
                <h1 className="font-medium text-[18px] border-2 border-r-0 border-solid border-blue-500 rounded-l-xl h-10 w-10 justify-center flex items-center">
                  <CalendarMonthIcon />
                </h1>
                <select
                  value={tenure}
                  onChange={handleTenureChange}
                  className="border-2 border-solid rounded-e-xl border-blue-500 h-10 w-full p-2 focus:border-blue-500"
                >
                  <option value="6">6</option>
                  <option value="9">9</option>
                  <option value="12">12</option>
                  <option value="18">18</option>
                  <option value="24">24</option>
                </select>
              </div>
            </div>
            <div className="py-1 flex flex-col justify-between border gap-1  p-5">
              <h1 className="flex justify-between text-[18px] font-semibold">
                <span> Interest </span>
                {totalIntrestOnCreditCard}₹
              </h1>
              <h1 className="flex justify-between text-[18px] font-semibold">
                <span> GST on Interest </span>
                {GstOnInterest}₹
              </h1>
              <h1 className="flex justify-between text-[18px] font-semibold">
                <span>Processing Fees</span> {proccecingFees}₹
              </h1>
              <hr />
              <h1 className="flex justify-between text-[18px] font-semibold text-blue-500">
                <span>Extra Payable </span> {interest}₹
              </h1>
              <h1 className="flex justify-between text-[18px] font-semibold">
                <span>Loan Amount </span> {valueCreditCardAmount}₹
              </h1>
              <hr />
              <h1 className="flex justify-between text-[19px] font-bold text-blue-500">
                <span>Total Payable </span> {totalCreditCardBill}₹
              </h1>
            </div>
            <div className="flex justify-center items-center pt-10 pb-5 ">
              <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="pie"
                width="330"
              />
            </div>
            <Link href="/">
              <ApplyNowButton />
            </Link>
          </div>
        </div>
        <CaculationFd />
      </div>
    </section>
  );
}
