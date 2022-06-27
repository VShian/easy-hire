import React from 'react'

const Contact = () => {
  return (
    <section className='min-h-[100vh] snap-start'><div
      className="flex flex-col justify-center items-center w-full h-full gap-16 pt-16 pb-24 bg-[#7d84c8]"
    >
      <div className="flex justify-center items-center flex-grow max-w-[1280px] flex-wrap relative gap-16 px-8">
        <div className="flex flex-col justify-center items-center self-stretch flex-grow">
          <div
            className="flex flex-col justify-start items-start w-full max-w-[480px] gap-12"
          >
            <div
              className="flex flex-col justify-start items-start self-stretch  relative gap-5"
            >
              <p
                className=" w-full max-w-[448px] text-4xl font-semibold text-left text-white"
              >
                Contact us
              </p>
              <p className=" w-full max-w-[448px] text-xl text-left text-[#f2f2f2]">
                Our friendly team would love to hear from you.
              </p>
            </div>
            <div
              className="flex flex-col justify-start items-start self-stretch  gap-8"
            >
              <div
                className="flex flex-col justify-start items-start self-stretch  gap-6"
              >
                <div
                  className="flex justify-start items-start self-stretch flex-wrap"
                >
                  <div className="flex flex-col justify-start items-start flex-grow md:basis-1/2 flex-grow flex-shrink-0 md:max-w-1/2 pr-4">
                    <div
                      className="flex flex-col justify-start items-start self-stretch  gap-1.5"
                    >
                      <div
                        className="flex flex-col justify-start items-start self-stretch  relative gap-1.5"
                      >
                        <label
                          className=" text-sm font-medium text-left text-[#e0e0e0]"
                        >
                          First name
                        </label>
                        <div
                          className="flex justify-start items-center self-stretch  overflow-hidden gap-2 px-4 py-3 rounded-lg bg-white border border-[#d0d5dd]"
                          style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                        >
                          <div className="flex justify-start items-center flex-grow relative gap-2">
                            <input className="flex-grow max-w-48 w-full text-base text-left text-[#4f4f4f]" placeholder="First name" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow md:basis-1/2 flex-grow flex-shrink-0 md:max-w-1/2">
                    <div
                      className="flex flex-col justify-start items-start self-stretch  gap-1.5"
                    >
                      <div
                        className="flex flex-col justify-start items-start self-stretch  relative gap-1.5"
                      >
                        <label
                          className=" text-sm font-medium text-left text-[#e0e0e0]"
                        >
                          Last name
                        </label>
                        <div
                          className="flex justify-start items-center self-stretch  overflow-hidden gap-2 px-4 py-3 rounded-lg bg-white border border-[#d0d5dd]"
                          style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                        >
                          <div className="flex justify-start items-center flex-grow relative gap-2">
                            <input className="flex-grow max-w-48 w-full text-base text-left text-[#4f4f4f]" placeholder="Last name" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-start items-start self-stretch "
                >
                  <div
                    className="flex flex-col justify-start items-start self-stretch  gap-1.5"
                  >
                    <div
                      className="flex flex-col justify-start items-start self-stretch  relative gap-1.5"
                    >
                      <p className=" text-sm font-medium text-left text-[#e0e0e0]">
                        Email
                      </p>
                      <div
                        className="flex justify-start items-center self-stretch  overflow-hidden gap-2 px-4 py-3 rounded-lg bg-white border border-[#d0d5dd]"
                        style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                      >
                        <div className="flex justify-start items-center flex-grow relative gap-2">
                          <input className="flex-grow w-full max-w-[448px] text-base text-left text-[#4f4f4f]" placeholder='you@company.com' />


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-start items-start self-stretch "
                >
                  <div
                    className="flex flex-col justify-start items-start self-stretch  gap-1.5"
                  >
                    <div
                      className="flex flex-col justify-start items-start self-stretch  relative gap-1.5"
                    >
                      <label className=" text-sm font-medium text-left text-[#e0e0e0]">
                        Phone number
                      </label>
                      <div
                        className="flex justify-start items-start self-stretch  overflow-hidden rounded-lg bg-white border border-[#d0d5dd]"
                        style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                      >
                        <div
                          className="flex justify-between items-center self-stretch  relative overflow-hidden pl-4 pr-3 py-3"
                        >
                          <p className=" text-base text-left text-[#4f4f4f]">IN</p>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" w-5 h-5 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="#4F4F4F"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex justify-start items-center flex-grow relative gap-2 pr-4 py-3">
                          <input className="flex-grow w-[395px] text-base text-left text-[#4f4f4f]" type="tel" placeholder="+91 (987) 000-0000" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-start items-start self-stretch h-[74px]"
                >
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1.5">
                    <div
                      className="flex flex-col justify-start items-start self-stretch relative gap-1.5"
                    >
                      <label className=" text-sm font-medium text-left text-[#e0e0e0]">
                        Message
                      </label>
                      <textarea
                        className="flex justify-start items-center self-stretch w-[480px] h-12 overflow-hidden gap-2 px-3.5 py-2.5 rounded-lg bg-white border border-[#d0d5dd]"
                        style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-start items-center self-stretch  relative gap-3"
                >
                  <div className="flex justify-center items-center  relative">
                    <input type="checkbox"
                      className=" w-5 h-5 relative overflow-hidden rounded-md bg-white border border-[#d0d5dd]"
                    />
                  </div>
                  <label className="flex-grow w-full max-w-[448px] text-base text-left">
                    <span className="flex-grow w-full max-w-[448px] text-base text-left text-[#f2f2f2]"
                    >You agree to our friendly privacy policy</span
                    ><span className="flex-grow w-full max-w-[448px] text-base text-left text-[#667085]">.</span>
                  </label>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start self-stretch  gap-4"
              >
                <div
                  className="flex justify-start items-start self-stretch  rounded-lg"
                >
                  <button
                    className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 px-5 py-3 rounded-lg border border-white"
                    style={{ filter: "drop-shadow(0px 1px 2px rgba(16,24,40,0.05))" }}
                  >
                    <span className=" text-base font-medium text-left text-white">
                      Send message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex-grow w-[576px] h-[720px] relative contactImage bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: "url(/contact.png)" }}></div>
      </div>
    </div></section>
  )
}

export default Contact