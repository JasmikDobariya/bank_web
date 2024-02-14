import Image from "next/image";
import Link from "next/link";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import Button from "./components/Button/Button";
import SliderImage from "./components/home/Slider";
import MainSlider from "./components/home/MainSlide";
import Helping from "./components/home/Helping";
import Footer from "./components/home/Footer";
import Work_Us from "./components/home/Work_Us";

export default function Home() {
  const homepage_card = [
    {
      icon: <CreditCardRoundedIcon fontSize="large" />,
      title: "More than 23 754 Issued Cards",
      dis: "Our bank is an acknowledged leader in credit card distribution. We issue more than 5000 cards every year.",
      backgroundColor: "#1b81e5",
    },
    {
      icon: <PriceCheckOutlinedIcon fontSize="large" />,
      title: "Up to 30% Cashback",
      dis: "We offer an amazing amount of cashback for payments made with one of our credit cards - Blue, Green, or Orange",
      backgroundColor: "#1873cc",
    },
    {
      icon: <CreditScoreOutlinedIcon fontSize="large" />,
      title: "Up to 25% for Deposits",
      dis: "Bank Progress offers various deposits in all international currencies with interest rate up to 25% for all regular clients.",
      backgroundColor: "#1565b2",
    },
    {
      icon: "The Best Choice 2018",
      title: "Reliable and Secure Credit Cards and Deposits for You",
      dis: <Button />,
      backgroundColor: "#125699",
    },
  ];

  const homepage_phone = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="80"
          viewBox="0 0 512 512"
          className="hover:#fff"
        >
          <path
            fill="#fff "
            d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
          />
        </svg>
      ),
      title: "Various Locations",
      dis: "We have offices in many countries including the USA and the UK.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="80"
          viewBox="0 0 384 512"
        >
          <path
            fill="#fff"
            d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"
          />
        </svg>
      ),
      title: "Mobile Banking Apps",
      dis: "Get instant access to your account on any device using our banking apps.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="80"
          viewBox="0 0 512 512"
        >
          <path
            fill="#fff"
            d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
          />
        </svg>
      ),
      title: "24/7 Support",
      dis: "Our Support team is always ready to help you solve any banking issues.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="80"
          viewBox="0 0 640 512"
        >
          <path
            fill="#fff"
            d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
          />
        </svg>
      ),
      title: "Family & Friends Programs",
      dis: "Our Bank has special programs with benefits for family members.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="80"
          viewBox="0 0 320 512"
        >
          <path
            fill="#fff"
            d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
          />
        </svg>
      ),
      title: "Personal Profile",
      dis: "Register your free personal profile online to begin using our services.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="80"
          width="80"
          viewBox="0 0 640 512"
        >
          <path
            fill="#fff"
            d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
      ),
      title: "Easy Account Setup",
      dis: "Registered clients can edit the banking account settings in 2 clicks.",
    },
  ];

  return (
    <>
      <MainSlider />

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {homepage_card.map((card, index) => (
            <div
              key={index}
              className=" p-6  shadow-md flex flex-col "
              style={{ backgroundColor: card.backgroundColor }}
            >
              <div className=" text-white mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-white pb-2">
                {card.title}
              </h3>
              <div className="text-white text-[15px] ">{card.dis}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="container m-auto px-20">
          <div className="py-20">
            <div className=" flex flex-col justify-center items-center pb-10">
              <div className="w-[75%] text-center">
                <h1 className="text-4xl pb-5">A Few Words About Our Bank</h1>
                <span className="text-[16px]">
                  Bank Progress was founded in 1999 to introduce the new level
                  of financial services worldwide. We are still dedicated to the
                  success of our clients, both individual and corporate.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-1 ">
                <Image
                  src="/images/homepageabout.jpg"
                  height={300}
                  width={600}
                  alt="asd"
                  className="w-[600px] h-[300px] rounded-lg"
                />
              </div>
              <div className="flex items-center leading-[30px]">
                <p>
                  At Bank Progress, we are guided by a common purpose to help
                  make financial lives better by connecting clients and
                  communities to the resource they need to be successful. We are
                  driving growth – helping to create jobs, develop communities,
                  foster economic mobility and address society’s biggest
                  challenges – while managing risk and providing a return to our
                  clients and our shareholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1e1c4f]">
        <div className="container m-auto px-20 text-white">
          <div className="py-20 ">
            <div className=" flex flex-col justify-center items-center pb-10">
              <div className="w-[75%] text-center">
                <h1 className="text-4xl pb-5">The Best Banking Choice</h1>
                <span className="text-[16px]">
                  Since our foundation, we have been #1 banking institution for
                  lots of individual and corporate customers, both in the USA
                  and internationally. We provide our clients with a number of
                  benefits.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 ">
              <div className="flex items-center leading-[30px] col-2">
                <div className="flex flex-col gap-2">
                  {homepage_phone.slice(0, 3).map((phone, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-5 p-5 hover:shadow-lg hover:rounded-lg hover:bg-[#5063a0] hover:text-white "
                    >
                      <div className="flex-col w-[70%]">
                        <h2 className="text-xl font-semibold">{phone.title}</h2>
                        <span className="font-medium">{phone.dis}</span>
                      </div>
                      <div className="flex items-center">{phone.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-1 flex justify-center ">
                <Image
                  src="/images/homepagemobile.jpg"
                  height={500}
                  width={500}
                  alt="asd"
                  className="w-auto h-[500px] rounded-lg"
                />
              </div>
              <div className="flex items-center leading-[30px] col-2">
                <div className="flex flex-col gap-2">
                  {homepage_phone.slice(3, 6).map((phone, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-5 p-5 hover:shadow-lg hover:rounded-lg hover:bg-[#5063a0] hover:text-white "
                    >
                      <div className="flex items-center">{phone.icon}</div>
                      <div className="flex-col">
                        <h2 className="text-xl font-semibold">{phone.title}</h2>
                        <span className="font-medium">{phone.dis}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SliderImage />
      <Work_Us />
      <Helping />
      <Footer />
    </>
  );
}
