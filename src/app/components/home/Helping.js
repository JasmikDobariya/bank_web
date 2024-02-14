import Link from "next/link";

const Helping = () => {
  return (
    <section>
      <div className="container m-auto">
        <div className="py-10 ">
          <div className="grid grid-cols-3 gap-4">
            <div className=" border-2 gap-4 border-[#1e1c4f]  rounded-3xl flex justify-center items-center flex-col">
              <div className=" bg-[#1e1c4f] w-[120px] h-[120px] p-5 rounded-full flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="150"
                  width="150"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160V480c0 17.7 14.3 32 32 32s32-14.3 32-32V178.6L256 68.9 448 178.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-11.5-6.2-22.1-16.1-27.8l-224-128zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-8 280V400h16v88c0 13.3 10.7 24 24 24s24-10.7 24-24V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H246.2c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Personal Loan</h3>
              </div>
              <div>
                <Link href="/service" className="text-[15px]">
                  Know More
                </Link>
              </div>
            </div>
            <div className="border-2 gap-4 border-[#1e1c4f]  rounded-3xl flex justify-center items-center flex-col">
              <div className=" bg-[#1e1c4f] w-[120px] h-[120px] p-5 rounded-full flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="150"
                  width="150"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="#fff"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Home Loan</h3>
              </div>
              <div>
                <Link href="/service" className="text-[15px]">
                  Know More
                </Link>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" border-2 border-[#1e1c4f]  rounded-3xl p-2 flex justify-center items-center gap-2">
                <div className=" bg-[#1e1c4f] w-[100px] h-[100px] p-5 rounded-full flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="80"
                    width="80"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fff"
                      d="M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160V480c0 17.7 14.3 32 32 32s32-14.3 32-32V178.6L256 68.9 448 178.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-11.5-6.2-22.1-16.1-27.8l-224-128zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-8 280V400h16v88c0 13.3 10.7 24 24 24s24-10.7 24-24V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H246.2c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5V488c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Personal Loan EMI Calculator
                    </h3>
                  </div>
                  <div>
                    <Link href="/service" className="text-[15px]">
                      Calculate Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-2 border-[#1e1c4f]  rounded-3xl p-2 flex justify-center items-center gap-2">
                <div className=" bg-[#1e1c4f] w-[100px] h-[100px] p-5 rounded-full flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="80"
                    width="80"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="#fff"
                      d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Home Loan EMI Calculator
                    </h3>
                  </div>
                  <div className="">
                    <Link href="/service" className="text-[15px] ">
                      Calculate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-5">
            <div className=" border-2 gap-4 border-[#1e1c4f]  rounded-3xl flex justify-center items-center flex-col">
              <div className=" bg-[#1e1c4f] w-[120px] h-[120px] p-5 rounded-full flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="150"
                  width="150"
                  viewBox="0 0 576 512"
                  className=" "
                >
                  <path
                    fill="#fff"
                    d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Credit Card</h3>
              </div>
              <div>
                <Link href="/service" className="text-[15px]">
                  Know More
                </Link>
              </div>
            </div>
            <div className="border-2 gap-4 border-[#1e1c4f]  rounded-3xl flex justify-center items-center flex-col">
              <div className=" bg-[#1e1c4f] w-[120px] h-[120px] p-5 rounded-full flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    fill="#fff"
                    d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Digital Saving Account
                </h3>
              </div>
              <div>
                <Link href="/service" className="text-[15px]">
                  Know More
                </Link>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" border-2 border-[#1e1c4f]  rounded-3xl p-2 flex justify-center items-center gap-2">
                <div className=" bg-[#1e1c4f] w-[100px] h-[100px] p-5 rounded-full flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="80"
                    width="80"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="#fff"
                      d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96h11.5c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H512c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H256v32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24H68c-11 0-20 9-20 20s9 20 20 20H99.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2H384zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Personal Loan EMI Calculator
                    </h3>
                  </div>
                  <div>
                    <Link href="/service" className="text-[15px]">
                      Calculate Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-2 border-[#1e1c4f]  rounded-3xl p-2 flex justify-center items-center gap-2">
                <div className=" bg-[#1e1c4f] w-[100px] h-[100px] p-5 rounded-full flex justify-center items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 512">
                    <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Home Loan EMI Calculator
                    </h3>
                  </div>
                  <div className="">
                    <Link href="/service" className="text-[15px] ">
                      Calculate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Helping;
