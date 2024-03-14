import Image from "next/image";
import {
  CircularProgressCashBack,
  CircularProgressGuarantee,
  ProgressBar,
  ProgressBarOnline,
} from "../components/home/CircularProgress";
import Helping from "../components/home/Helping";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const About = () => {
  return (
    <section>
      <div className="bg-[#3d4454] p-4 sticky top-0">
        <Navbar />
      </div>
        <div className="text-5xl font-bold text-center py-10 bg-[url('/images/About-Us.jpg')] bg-cover bg-center ">
          <h1>About Us</h1>
        </div>
      <div className="container m-auto">
        <div className="py-10">
          <div className=" flex flex-col justify-center items-center pb-10">
            <div className="md:w-[75%] w-[95%] text-center">
              <h1 className="text-3xl pb-5">About Our Bank</h1>
              <span className="text-[16px] ">
                Bank Progress was founded in 1999 to introduce the new level of
                financial services worldwide. We are still dedicated to the
                success of our clients, both individual and corporate.
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-10">
            <div className="col-1 ">
              <Image
                src="/images/about_image.jpg"
                height={300}
                width={600}
                alt="asd"
                className="w-[600px] h-[300px] rounded-lg p-5 md:p-0"
              />
            </div>
            <div className="flex flex-col items-center leading-[30px] gap-3 p-5 md:p-0">
              <p>
                At Bank Progress, we are guided by a common purpose to help make
                financial lives better by connecting clients and communities to
                the resource they need to be successful. We are driving growth –
                helping to create jobs, develop communities, foster economic
                mobility and address society’s biggest challenges – while
                managing risk and providing a return to our clients and our
                shareholders.
              </p>
              <div className="w-full">
                <ProgressBar />
                <div className="pt-5">
                <ProgressBarOnline />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 py-5 border bg-[#1e1c4f] rounded-xl m-8 ">
          <div className="  flex justify-center md:pb-0 pb-10 ">
            <p className="w-[85%] md:text-xl text-lg text-center text-white">
              At Bank Progress, we aim to provide top quality banking services
              to a greater number of individual and corporate customers than any
              other bank in the USA or abroad. Our clients value data privacy
              and security of their banking accounts 24/7.
            </p>
          </div>
          <div className="flex  justify-evenly items-center gap-5">
            <div>
              <CircularProgressCashBack />
              <h1 className="text-white pt-4 text-center">CashBack</h1>
            </div>
            <div>
              <CircularProgressGuarantee />
              <h1 className="text-white pt-4 text-center">Guarantee</h1>
            </div>
          </div>
        </div>
        <Helping />
      </div>
      <Footer />
    </section>
  );
};

export default About;
