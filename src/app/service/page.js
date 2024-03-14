  
  import React from "react";
  import Button from "../components/Button/Button";
  import Image from "next/image";
  import Navbar from "../components/home/Navbar";
  import Footer from "../components/home/Footer";
import { CalculationWithGraph } from "../components/Calculation/CalculationWithGraph";

  const Services = () => {
    const card = [
      {
        img: "/images/free_card.png",
        rank: "Bacic",
        dis: "This option is perfect if you have no experience in online banking but would like to have a card for all kinds of payments in selected currencies.",
        price: "FREE",
        width: "650px",
        alignItems: "center",
      },
      {
        img: "/images/free_card_2.png",
        rank: "Standard",
        dis: "This option is perfect if you have no experience in online banking but would like to have a card for all kinds of payments in selected currencies.",
        price: "899₹/mo",
        backgroundColor: "#1E90FF",
      },
      {
        img: "/images/free_card_3.png",
        rank: "Premium",
        dis: "This option is perfect if you have no experience in online banking but would like to have a card for all kinds of payments in selected currencies.",
        price: "499₹/mo",
        width: "650px",
      },
    ];

    const Use_card = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80"
            width="80"
            viewBox="0 0 576 512"
          >
            <path
              fill="#fff"
              d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"
            />
          </svg>
        ),
        title: "Online Registration",
        dis: "Everything starts with free online registration. Only basic data is needed - name, surname, age etc.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80"
            width="80"
            viewBox="0 0 576 512"
          >
            <path
              fill="#fff"
              d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"
            />
          </svg>
        ),
        title: "Filling Out a Form",
        dis: "After the basic registration, you will need to fill out a form to help us determine your financial goals.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80"
            width="80"
            viewBox="0 0 448 512"
          >
            <path
              fill="#fff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
        ),
        title: "Signing an Agreement",
        dis: "This stage concludes the procedure of opening an account at Bank Progress to start using your card.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80"
            width="80"
            viewBox="0 0 576 512"
            className=" "
          >
            <path
              fill="#fff"
              d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
            />
          </svg>
        ),
        title: "Using Your Card",
        dis: "You can use your card to purchase the products you need or to open a secure deposit with lots of benefits.",
      },
    ];

    const faqs = [
      {
        question: "What is the currency amount for the Blue Card?",
        answer:
          "The minimum amount that can be loaded on the card is $100 or equivalent amount in other currency. The maximum amount would be as per Bank Progress guidelines applicable from time to time. You can learn more about it by contacting our consultants using the form on our website or by calling us directly.",
      },
      {
        question: "What steps do I take if my card gets lost?",
        answer:
          "If you lose your card please immediately contact our customer support center so that we could issue a new one as fast as possible.",
      },
      {
        question: "Do I have to maintain any minimum balance?",
        answer:
          "It depends on the card you choose. For example, if you pick an Orange Card, you get a special waiver on the minimum balance requirement.",
      },
      {
        question: "What security features does the mobile banking have?",
        answer:
          "Mobile browser-based banking is very similar to PC based internet banking. The respective mobile handset browser replaces a PC browser to access the banking services. Some of the important security measures in place are 128 bit SSL from VeriSign, https:// based access etc.",
      },
      {
        question: "What kind of browser do I need for online banking?",
        answer:
          "Our Banking System supports all browsers. Some of the most popular ones are Chrome, Opera, Firefox, and Safari. If you are using Internet Explorer make sure the version of your browser is 9.0 or higher.",
      },
      {
        question: "Can I make online payments to foreign recipients?",
        answer:
          "Yes, you can! Our bank does not limit any payments to a certain country so whether you are using our online banking system or an app for your device, you can safely transfer any amount of money or purchase services and products.",
      },
    ];

    return (
      <>
        <div className="bg-[#3d4454] p-4 sticky top-0 z-[9999]" >
          <Navbar />
        </div>
        <section>
          <h2 className="text-center text-5xl py-8 font-bold">Services</h2>
          <div className="py-5">
            <CalculationWithGraph />
          </div>
          <div className="container m-auto">
            <div className="grid md:grid-cols-3 pt-8  items-center p-5 md:p-0 ">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-white shadow-lg  rounded-lg flex flex-col justify-center items-center gap-8"
                  style={{
                    backgroundColor: item.backgroundColor,
                    height: item.width,
                    alignItems: item.alignItems,
                  }}
                >
                  <Image
                    src={item.img}
                    alt="Card"
                    className="mb-2"
                    width={300}
                    height={400}
                  />
                  <h1 className="font-bold text-3xl">{item.rank}</h1>

                  <p className="w-[75%]">{item.dis}</p>
                  <p className=" text-3xl">{item.price}</p>
                  <Button />
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto py-10">
            <div className="grid md:grid-cols-4  gap-4">
              {Use_card.map((step, index) => (
                <div
                  key={index}
                  className="p-4 rounded-md flex justify-center flex-col items-center"
                >
                  <div className=" flex justify-center p-2">
                    <div className=" bg-[#1E90FF] rounded-full p-5 ">
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="font-bold text-xl mb-2">{step.title}</h2>
                  <p className="text-center">{step.dis}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container m-auto py-10">
            <h2 className="text-center text-4xl pb-10 font-bold">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-3 gap-3 p-5 md:p-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 p-5 border border-[#1E90FF] rounded-3xl "
                >
                  <h3 className="text-2xl">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  };

  export default Services;
