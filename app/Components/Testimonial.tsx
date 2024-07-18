import React from "react";

function Testimonial() {
  return (
    <div>
      <div className="text-gray-600  " id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 py-8">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800  md:text-4xl">
              We have some fans.
            </h2>
          </div>

          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white   shadow-2xl shadow-gray-600/10 ">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/images/man.png"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">
                    Daniella Doe
                  </h6>
                  <p className="text-sm text-gray-500 ">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8">
                Now, I can control my home electrical equipments with simple
                voice commands or from my smartphone. The automated lighting
                adjusts to the time of day, creating the ideal ambiance and
                saving energy.
              </p>
            </div> */}

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white   shadow-2xl shadow-gray-600/10 ">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/images/woman.png"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">
                    Varsha
                  </h6>
                </div>
              </div>
              <p className="mt-8">
                {" "}
                GRIVAS Technologies transformed my home effortlessly. From the
                initial consultation to installation, their team was
                professional and patient, customizing everything to fit my
                lifestyle perfectly.
              </p>
            </div>

            {/* <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white   shadow-2xl shadow-gray-600/10 ">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/images/woman.png"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">
                    Yanick Doe
                  </h6>
                  <p className="text-sm text-gray-500 ">Developer</p>
                </div>
              </div>
              <p className="mt-8">
                The installation process was smooth, and the support team has
                been outstanding, always ready to help with any questions. I
                feel secure and in control, thanks to their reliable service.
              </p>
            </div> */}

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white   shadow-2xl shadow-gray-600/10 ">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/images/man.png"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">
                  Vamsi
                  </h6>
                </div>
              </div>
              <p className="mt-8">
                Choosing GRIVAS Technologies was the best decision for my home.
                Their expertise and dedication to customer satisfaction are
                unparalleled. I highly recommend them for anyone looking to
                upgrade their home with smart technology.
              </p>
            </div>

            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white   shadow-2xl shadow-gray-600/10 ">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/images/man.png"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">
                    Valli
                  </h6>
                </div>
              </div>
              <p className="mt-8">
                {" "}
                Thank you GRIVAS Technologies for making my home smarter, safer,
                and more convenient!
              </p>
            </div>

            {/* <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white   shadow-2xl shadow-gray-600/10 ">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/images/woman.png"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">
                    Yanndy Doe
                  </h6>
                  <p className="text-sm text-gray-500 ">Mobile dev</p>
                </div>
              </div>
              <p className="mt-8">
                Choosing GRIVAS Technologies for our smart home needs was the
                best decision we made. Their expertise in smart home automation,
                combined with the sleek designs of their products, has truly
                enhanced our daily lives. From effortless control of our
                lighting to the convenience of secure door locks, GRIVAS has
                exceeded our expectations in every way.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
