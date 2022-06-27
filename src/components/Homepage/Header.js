import React from 'react'

const Header = () => {
  return (
    <section className='header min-h-[100vh] snap-start'>
      <div
        className="flex justify-center items-center max-w-[1440px] relative gap-8 px-8 flex-col-reverse md:flex-row"
      >
        <div className="flex flex-col justify-start items-start flex-grow gap-12">
          <div
            className="flex flex-col justify-start items-start self-stretch  relative gap-6"
          >
            <p
              className="self-stretch text-5xl font-semibold text-left text-[#333]"
            >
              Learn from the best and get that dream job.
            </p>
            <p className=" text-xl text-left text-[#333]">
              Online courses from the best instructors
            </p>
          </div>
          <div className="flex justify-start items-start  gap-4">
            <div
              className="flex flex-col justify-start items-start self-stretch"
            >
              <div
                className="flex flex-col justify-start items-start self-stretch  relative gap-2"
              >
                <div
                  className="flex justify-start items-start self-stretch  gap-1.5"
                >
                  <div
                    className="flex justify-start items-center self-stretch  overflow-hidden gap-2 pl-4 pr-3.5 py-3 rounded-lg bg-white border border-[#d0d5dd]"
                    style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
                  >
                    <div className="flex justify-start items-center flex-grow relative gap-2">
                      <input type="email" className="flex-grow text-base text-left text-[#828282]" placeholder=' Enter your email' />
                    </div>
                  </div>
                  <div className="flex justify-start items-start  rounded-lg">
                    <div
                      className="flex justify-center items-center  relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#7f56d9] border border-[#7f56d9]"
                      style={{ boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)' }}
                    >
                      <p className=" text-base font-medium text-left text-white">
                        Get started
                      </p>
                    </div>
                  </div>
                </div>
                <p className="self-stretch text-sm text-left text-[#333]">
                  We care about your data in our privacy policy
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className='block flex-grow flex-shrink'>
          <img src="/header.png" alt="" />

        </div>
      </div>
    </section>
  )
}

export default Header