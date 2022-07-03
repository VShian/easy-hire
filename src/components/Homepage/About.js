import React from "react";

const About = () => {
	// const stats = [{
	//   label: 'Companies have access to student leaderboard',
	//   value: '50+',
	//   description: 'We’ve helped build over 400 amazing projects.'
	// },
	// {
	//   label: 'Companies have access to student leaderboard',
	//   value: '50+',
	//   description: 'We’ve helped build over 400 amazing projects.'
	// },
	// {
	//   label: 'Companies have access to student leaderboard',
	//   value: '50+',
	//   description: 'We’ve helped build over 400 amazing projects.'
	// },
	// {
	//   label: 'Companies have access to student leaderboard',
	//   value: '50+',
	//   description: 'We’ve helped build over 400 amazing projects.'
	// }]
	return (
		<section className="min-h-[100vh] snap-start">
			<div class="flex flex-col justify-center items-center gap-14 py-16 bg-[#4f4f4f] h-full">
				<div class="flex flex-col justify-start items-center  gap-16 py-24 bg-[#4f4f4f]">
					<div class="flex flex-col justify-start items-start  max-w-[1280px] relative gap-3 px-8">
						<p class=" text-base font-semibold text-left text-[#7d84c8]">
							About us
						</p>
						<div class="flex justify-start items-start self-stretch flex-wrap gap-16">
							<div class="flex flex-col justify-start items-start  relative gap-10">
								<p class="self-stretch text-5xl font-semibold text-left text-white">
									We do things differently...
								</p>
							</div>
							<div class="flex flex-col justify-start items-start flex-grow relative pt-3">
								<p class="self-stretch  w-96 text-xl text-left text-[#f2f2f2]">
									Learn more about the company and stats.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-start items-center  max-w-[1440px] overflow-hidden gap-16 pb-24 bg-[#4f4f4f]">
					<div class="flex flex-col justify-start items-start gap-16 px-8">
						<div class="flex justify-start items-start self-stretch  gap-8 flex-wrap">
							<div class="flex flex-col justify-start items-start gap-5">
								<div class="flex flex-col justify-start items-start self-stretch  relative gap-3">
									<p class="self-stretch  w-[280px] text-6xl font-semibold text-left text-[#7d84c8]">
										300+
									</p>
									<div class="flex flex-col justify-start items-start self-stretch  relative gap-2">
										<p class="self-stretch  w-[280px] text-lg font-medium text-left text-white">
											videos of learning
										</p>
										<p class="self-stretch  w-[280px] text-base text-left text-[#f2f2f2]">
											Across all topics by experts.
										</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col justify-start items-start gap-5">
								<div class="flex flex-col justify-start items-start self-stretch  relative gap-3">
									<p class="self-stretch  w-[280px] text-6xl font-semibold text-left text-[#7d84c8]">
										150+
									</p>
									<div class="flex flex-col justify-start items-start self-stretch  relative gap-2">
										<p class="self-stretch  w-[280px] text-lg font-medium text-left text-white">
											Hours of learning
										</p>
										<p class="self-stretch  w-[280px] text-base text-left text-[#f2f2f2]">
											Across all specific topics company wise
										</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col justify-start items-start gap-5">
								<div class="flex flex-col justify-start items-start self-stretch  relative gap-3">
									<p class="self-stretch  w-[280px] text-6xl font-semibold text-left text-[#7d84c8]">
										1500+
									</p>
									<div class="flex flex-col justify-start items-start self-stretch  relative gap-2">
										<p class="self-stretch  w-[280px] text-lg font-medium text-left text-white">
											Example questions
										</p>
										<p class="self-stretch  w-[280px] text-base text-left text-[#f2f2f2]">
											Explained in both generic way and shortcut method.
										</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col justify-start items-start gap-5">
								<div class="flex flex-col justify-start items-start self-stretch  relative gap-3">
									<p class="self-stretch  w-[280px] text-6xl font-semibold text-left text-[#7d84c8]">
										30000+
									</p>
									<div class="flex flex-col justify-start items-start self-stretch  relative gap-2">
										<p class="self-stretch  w-[280px] text-lg font-medium text-left text-white">
											Test questions
										</p>
										<p class="self-stretch  w-[280px] text-base text-left text-[#f2f2f2]">
											Our data base is built on top of real data.
										</p>
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

export default About;
