import React from 'react'

const FeatureSection = ({ feature }) => {
  return (
    <section className={`min-h-[100vh] h-full featureSection flex self-stretch flex-grow relative odd:flex-row-reverse justify-center items-center ${feature.color} md:bg-none tablet:bg-blend-multiply snap-start`} style={{ background: `url(${feature.image}) ${feature.colorCode}`, }}
    >

      <div className="flex justify-center items-center w-full flex-grow flex-shrink-0 basis-1/2 md:max-w-[50%]">
        <div className="flex flex-col justify-start items-start flex-grow gap-8 w-full px-8">
          <div
            className="flex flex-col justify-start items-start self-stretch  relative gap-6"
          >
            <svg
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-12 h-12 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M4.5 28C4.5 14.7452 15.2452 4 28.5 4C41.7548 4 52.5 14.7452 52.5 28C52.5 41.2548 41.7548 52 28.5 52C15.2452 52 4.5 41.2548 4.5 28Z"
                fill="#F4EBFF"
              ></path>
              <path
                d="M29.5 18L19.5 30H28.5L27.5 38L37.5 26H28.5L29.5 18Z"
                stroke="#7F56D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M28.5 48C17.4543 48 8.5 39.0457 8.5 28H0.5C0.5 43.464 13.036 56 28.5 56V48ZM48.5 28C48.5 39.0457 39.5457 48 28.5 48V56C43.964 56 56.5 43.464 56.5 28H48.5ZM28.5 8C39.5457 8 48.5 16.9543 48.5 28H56.5C56.5 12.536 43.964 0 28.5 0V8ZM28.5 0C13.036 0 0.5 12.536 0.5 28H8.5C8.5 16.9543 17.4543 8 28.5 8V0Z"
                fill="#F9F5FF"
              ></path>
            </svg>
            <div
              className="flex flex-col justify-start items-start self-stretch  relative gap-4"
            >
              <p
                className="self-stretch text-3xl font-semibold text-left text-white"
              >
                {feature.title}
              </p>
              <p
                className="self-stretch text-lg text-left text-[#f2f2f2]"
              >
                {feature.description}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start self-stretch  gap-5 pl-4"
          >

            {feature.points.map(point => {
              return (<div
                className="flex justify-start items-start self-stretch  relative gap-3"
              >
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" flex-shrink-0 w-7 h-7 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M0.5 14C0.5 6.26801 6.76801 0 14.5 0C22.232 0 28.5 6.26801 28.5 14C28.5 21.732 22.232 28 14.5 28C6.76801 28 0.5 21.732 0.5 14Z"
                    fill="#F4EBFF"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.4458 8.62169L12.0925 16.6834L9.87583 14.315C9.4675 13.93 8.82583 13.9067 8.35916 14.2334C7.90416 14.5717 7.77583 15.1667 8.05583 15.645L10.6808 19.915C10.9375 20.3117 11.3808 20.5567 11.8825 20.5567C12.3608 20.5567 12.8158 20.3117 13.0725 19.915C13.4925 19.3667 21.5075 9.81169 21.5075 9.81169C22.5575 8.73836 21.2858 7.79336 20.4458 8.61002V8.62169Z"
                    fill="#9E77ED"
                  ></path>
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative">
                  <p
                    className="self-stretch text-lg text-left text-[#f2f2f2]"
                  >
                    {point}
                  </p>
                </div>
              </div>)
            })}

          </div>
        </div>
      </div>
      <div
        className="hidden md:block relative bg-cover bg-no-repeat bg-center w-full h-full featuredImage flex-grow flex-shrink-0 basis-1/2  md:max-w-[50%]" style={{ backgroundImage: `url(${feature.image})` }}></div>
    </section>
  )
}

export default FeatureSection