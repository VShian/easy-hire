import React from "react";

const Mission = () => {
	return (
		<section className="min-h-[100vh] h-full snap-start">
			<div class="bg-purple h-full flex justify-center items-center">
				<div class="flex flex-col justify-start items-center gap-16 py-24 bg-purple">
					<div class="flex flex-col justify-start items-center gap-8 px-8 max-w-[1280px]">
						<div class="flex flex-col justify-start items-center self-stretch  gap-12">
							<div class="flex flex-col justify-start items-center   relative gap-6">
								<div class="flex flex-col justify-start items-start self-stretch  relative gap-3">
									<p class="self-stretch   text-base font-semibold text-center text-white">
										Why us
									</p>
									<p class="self-stretch   text-5xl font-semibold text-center text-[#f2f2f2]">
										Our mission is to personalize experience for every type of
										learners.
									</p>
								</div>
								<p class=" text-xl text-center text-[#f2f2f2]">
									Our products are interconnected to give a seamless
									personalized learning experience for all learners. The
									learning app has the contents prepared by best teachers which
									helps grow the interview skills required by candidates and the
									test platform gives personalized experience for every type of
									learners based on the scores they obtain and the placement
									portal strives to make their dream job just not a dream.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;
