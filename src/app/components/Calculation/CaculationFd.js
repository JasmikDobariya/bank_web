import React, { useState } from "react";

const CaculationFd = () => {
  const [FdAmount, setFdAmount] = useState(15000);
  const [FdMonths, setFdMonths] = useState(12);
  const [interestRate, setInterestRate] = useState(7.4);
  const [totalInterest, setTotalInterest] = useState(0);
  const [customerType, setCustomerType] = useState("Normal");

  const handleChangeFdAmount = (event) => {
    setFdAmount(event.target.value);
    calculateInterest(event.target.value, FdMonths);
  };

  const handleChangeFdMonth = (event) => {
    setFdMonths(event.target.value);
    updateInterestRate(event.target.value, customerType); // Pass both months and customerType
    calculateInterest(FdAmount, event.target.value);
  };

  const handleCustomerTypeChange = (event) => {
    setCustomerType(event.target.value);
    calculateInterest(FdAmount, FdMonths);
  };

  const handleInterestFrequencyChange = (event) => {
    const frequency = event.target.value;
    switch (frequency) {
      case "At maturity":
        setInterestRate(customerType === "Senior Citizen" ? 7.65 : 7.65);
        break;
      case "Monthly":
        setInterestRate(customerType === "Senior Citizen" ? 7.39 : 7.16);
        break;
      case "Quarterly":
        setInterestRate(customerType === "Senior Citizen" ? 7.44 : 7.2);
        break;
      case "Half Year":
        setInterestRate(customerType === "Senior Citizen" ? 7.51 : 7.27);
        break;
      case "Annually":
        setInterestRate(customerType === "Senior Citizen" ? 7.65 : 7.4);
        break;
      default:
        setInterestRate(7.4);
        break;
    }
    calculateInterest(FdAmount, FdMonths);
  };

  const updateInterestRate = (months, customerType) => {
    console.log("customerType , months", customerType, months);
    if (customerType === "Senior Citizen") {
      if (months >= 12 && months < 15) {
        setInterestRate(7.65);
      } else if (months >= 15 && months < 23) {
        setInterestRate(7.75);
      } else if (months == 24) {
        setInterestRate(7.80);
      } else if (months >= 25 && months < 36) {
        setInterestRate(7.60);
      } else if (months >= 36 && months <= 60) {
        setInterestRate(8.30);
      }
    } else {
      if (months >= 12 && months < 15) {
        setInterestRate(7.4);
      } else if (months >= 15 && months < 23) {
        setInterestRate(7.5);
      } else if (months == 24) {
        setInterestRate(7.55);
      } else if (months >= 25 && months < 36) {
        setInterestRate(7.35);
      } else if (months >= 36 && months <= 60) {
        setInterestRate(8.05);
      }
    }
    calculateInterest(FdAmount, months);
  };

  const calculateInterest = (amount, months) => {
    const annualInterest = amount * (interestRate / 100);
    const totalInterest = annualInterest * (months / 12);
    setTotalInterest(totalInterest);
  };

  const oneYearLaterDate = new Date();
  oneYearLaterDate.setFullYear(oneYearLaterDate.getFullYear() + 1);

  const totalPayout = (totalInterest + parseInt(FdAmount)).toFixed(0);

  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 ">
          <div className="p-5  mt-5 ">
            <div className="border-2 border-blue-500 rounded-xl p-5">
              <div className="text-[21px] text-blue-500 font-bold">
                <h1 className="text-center">FD Calculator</h1>
              </div>
              <div className="flex gap-5 py-5 justify-between">
                <span className="font-medium text-[18px] flex items-center">Type Of Customer</span>
                <div className="flex gap-1">
                  <select
                    name="customerType"
                    id="customerType"
                    className="w-full border-b-2 border-black text-semibold p-2"
                    onChange={handleCustomerTypeChange}
                    value={customerType}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Senior Citizen">Senior Citizen</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-[18px]">Deposit Amount (₹)</span>
                    <span>
                      <input
                        type="text"
                        value={FdAmount}
                        className="w-24 h-8 border-b-2 border-black p-1 text-center "
                        onChange={handleChangeFdAmount}
                      />
                    </span>
                  </div>
                  <input
                    type="range"
                    min={15000}
                    max={50000000}
                    value={FdAmount}
                    onChange={handleChangeFdAmount}
                  />
                  <div className="flex justify-between">
                    <span>₹ 5000</span>
                    <span>₹ 50000000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[18px]">Deposit Tenure (months)</span>
                    <span>
                      <input
                        type="text"
                        value={FdMonths}
                        className="w-24 h-8 border-b-2 border-black p-1 text-center "
                        onChange={handleChangeFdMonth}
                      />
                    </span>
                  </div>

                  <input
                    type="range"
                    min={12}
                    max={60}
                    step={1}
                    onChange={handleChangeFdMonth}
                    value={FdMonths}
                  />
                  <div className="flex justify-between">
                    <span>12</span>
                    <span>60</span>
                  </div>
                </div>
                <div>
                  <div className=" py-5 ">
                    <span className="pb-3 font-medium text-[18px]">Interest Amount Frequency</span>
                    <select
                      name="interestFrequency"
                      id="interestFrequency"
                      className="w-full border-b-2 border-black text-semibold p-2"
                      onChange={handleInterestFrequencyChange}
                    >
                      <option value="At maturity">At maturity</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Half Year">Half Year</option>
                      <option value="Annually">Annually</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5  mt-5 flex  items-center ">
            <div className="  bg-blue-400 rounded-xl w-full shadow-md shadow-black">
              <div className="flex gap-2 text-center justify-center items-center p-5  ">
                <span className="text-[18px] font-medium">
                  Annualised Rate Of Interest
                </span>
                <span className="text-4xl text-white font-bold">
                  {interestRate.toFixed(2)}%
                </span>
              </div>
              <hr />
              <div className="p-5 ">
                <div className="grid grid-cols-2 gap-16 text-center p-5 ">
                  <div className=" flex-col flex ">
                    <span className="text-[18px] text-white font-semibold">
                      {totalInterest.toFixed(0)} ₹
                    </span>
                    <span>Total Interest:</span>
                  </div>
                  <div className=" flex-col flex ">
                    <span className="text-[18px] text-white font-semibold">
                      {oneYearLaterDate.toDateString()}
                    </span>
                    <span>Maturity Months</span>
                  </div>
                  <div className=" flex-col flex ">
                    <span className="text-[18px] text-white font-semibold">
                      {totalPayout} ₹
                    </span>
                    <span>Total Payout</span>
                  </div>
                </div>
              </div>
              <div className="text-center m-5">
                <button className="border w-full bg-blue-500 hover:bg-white hover:text-blue-500 rounded-xl text-white text-[16px] font-semibold px-5 py-2 ">
                  Open FD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaculationFd;
