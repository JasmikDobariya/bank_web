"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function CircularProgressCashBack() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = 50; // Target percentage
    const duration = 1500; // Duration in milliseconds

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration);
      const value = Math.floor(progress * targetPercentage);
      setPercentage(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      setPercentage(0); // Reset percentage when component unmounts
    };
  }, []);

  return (
    <div
      style={{
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={2}
        styles={buildStyles({
          textColor: "#3e98c7",
          pathTransition: "none",
        })}
      />
    </div>
  );
}

export function CircularProgressGuarantee() {
  const [GuaranteePercentage, setGuaranteePercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = 100; // Target percentage
    const duration = 1500; // Duration in milliseconds

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration);
      const value = Math.floor(progress * targetPercentage);
      setGuaranteePercentage(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      setGuaranteePercentage(0); // Reset percentage when component unmounts
    };
  }, []);

  return (
    <div
      style={{
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgressbar
        value={GuaranteePercentage}
        text={`${GuaranteePercentage}%`}
        strokeWidth={2}
        styles={buildStyles({
          textColor: "#3e98c7",
          pathTransition: "none",
        })}
      />
    </div>
  );
}

export function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(75);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className=" font-bold text-sm text-center w-full flex justify-between p-2">
        <h1>Financial Consulting</h1>
        <div>{`${percentage}%`}</div>
      </div>
      <div className="w-full bg-gray-200  overflow-hidden">
        <div
          className="bg-[#1e1c4f] h-1"
          style={{
            width: `${percentage}%`,
            transition: "width 1s ease-in-out", // Animation for width change
          }}
        ></div>
      </div>
    </div>
  );
}

export function ProgressBarOnline () {
    const [percentage, setPercentage] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setPercentage(50);
      }, 100); // Change the time interval as needed
  
      return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures the effect runs only once
  
    return (
      <div className="">
        <div className=" font-bold text-sm text-center w-full flex justify-between p-2">
          <h1>Online Reporting</h1>
          <div>{`${percentage}%`}</div>
        </div>
        <div className="w-full bg-gray-200  overflow-hidden">
          <div
            className="bg-[#1e1c4f] h-1"
            style={{
              width: `${percentage}%`,
              transition: "width 1s ease-in-out", // Animation for width change
            }}
          ></div>
        </div>
      </div>
    );
  }
