"use client";
import React, { useState } from "react";
import { ApplyNowButton } from "../Button/ApplyNowButton";
import Contect_us from "../Contect/Contect_us";
import Footer from "../home/Footer";
import Swal from 'sweetalert2';
import Navbar from "../home/Navbar";

const HomeLoan = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    residentType: "Resident Indian",
    preferredOffice: "",
    promoCode: "",
    propertyLocation: "",
    requestType: "",
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
   
    Swal.fire({
        icon: 'success',
        title: 'Form Submitted Successfully!',
        text: 'Over Bank Contect You Soon',
        confirmButtonText: 'OK',
      });
  
      // Clear the form fields after successful submission
      setFormState({
        name: "",
        email: "",
        residentType: "Resident Indian",
        preferredOffice: "",
        promoCode: "",
        propertyLocation: "",
        requestType: "",
        captcha: "",
      });
    };



  return (
    <>
    
      <section>
        <div className="bg-[url('/images/homeloan.jpg')] bg-cover h-full w-full bg-no-repeat bg-center bg-fixed">
         <div className="bg-transparent p-5">
      <Navbar />
      </div> <div className="container m-auto">
            <div className="flex flex-col justify-center items-center   h-svh">
              <div className="max-w-md  m-5 p-5 gap-2 flex flex-col  bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Home Loan Application Form
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="residentType">Resident Type:</label>
                    <select
                      name="residentType"
                      id="residentType"
                      value={formState.residentType}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="Resident Indian">Resident Indian</option>
                      <option value="Non-Resident Indian">
                        Non-Resident Indian
                      </option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="preferredOffice">Preferred Office:</label>
                    <input
                      type="text"
                      name="preferredOffice"
                      id="preferredOffice"
                      value={formState.preferredOffice}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="propertyLocation">Property Location:</label>
                    <input
                      type="text"
                      name="propertyLocation"
                      id="propertyLocation"
                      value={formState.propertyLocation}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <ApplyNowButton />
                </form>
              </div>
            </div>
          </div>
          <div className="p-10 py-5 bg-white">
            <Contect_us />
          </div>
        </div>
      <Footer />
      </section>
    </>
  );
};

export default HomeLoan;
