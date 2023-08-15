import React from "react";
import FeatureCard from "../../components/FeatureCard";
import smartAutoData from "../../data/smartAuto.data";
import autoSyncData from "../../data/autoSync.data";
import Title from "../../components/Title";

function Features() {
  return (
    <section className="py-16 sm:py-24" id="features">
      <div className="container">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-duration={600}
            >
              <Title
                title="Free Cloud Account!"
                page="Smart auto deployment"
                text={`Prompts automatically deploys your changes on the cloud`}
                isCenter={false}
                titleStyle="bg-red-500/10 text-red-600"
              />
              <div className="flex flex-col gap-4 mt-10">
                {smartAutoData.map((item, index) => (
                  <FeatureCard item={item} key={index} />
                ))}
              </div>
            </div>
            <div
              className="order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration={700}
            >
              <img src="assets/images/features/desktop1.gif" />
            </div>
          </div>
        </div>
        <div className="py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div>
              <img
                src="assets/images/hero/desktop.png"
                data-aos="fade-right"
                data-aos-duration={600}
              />
            </div>
            <div data-aos="fade-left" data-aos-duration={700}>
              <Title
                title="Auto Sync"
                page="AutoSync deployment"
                text={`Prompts automatically sync your scheduled sync configuration`}
                isCenter={false}
                titleStyle="bg-red-500/10 text-red-600"
              />
              <div className="flex flex-col gap-4 mt-10">
                {autoSyncData.map((item, index) => (
                  <FeatureCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-duration={700}>
        <div className="bg-yellow-50 p-12">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-base mb-10">Prompt works on Every Device</h4>
              <div className="flex flex-wrap gap-10">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto text-black"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path
                        d="M6,8 L6,16 L18,16 L18,8 L6,8 Z M20,16 L21.381966,16 C21.7607381,16 22.1070012,16.2140024 22.2763932,16.5527864 L22.5,17 C22.6706654,17.3413307 22.5323138,17.7563856 22.190983,17.927051 C22.0950363,17.9750244 21.9892377,18 21.881966,18 L2.11803399,18 C1.73641461,18 1.42705098,17.6906364 1.42705098,17.309017 C1.42705098,17.2017453 1.45202663,17.0959467 1.5,17 L1.7236068,16.5527864 C1.89299881,16.2140024 2.23926193,16 2.61803399,16 L4,16 L4,8 C4,6.8954305 4.8954305,6 6,6 L18,6 C19.1045695,6 20,6.8954305 20,8 L20,16 Z"
                        id="Combined-Shape"
                        fill="currentColor"
                      />
                      <polygon
                        id="Combined-Shape"
                        fill="currentColor"
                        opacity="0.3"
                        points="6 8 6 16 18 16 18 8"
                      />
                    </g>
                  </svg>
                  <h6>Windows</h6>
                </div>
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto text-black"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path
                        d="M5,6 L19,6 C19.5522847,6 20,6.44771525 20,7 L20,17 L4,17 L4,7 C4,6.44771525 4.44771525,6 5,6 Z"
                        id="Combined-Shape"
                        fill="currentColor"
                      />
                      <rect
                        id="Rectangle"
                        fill="currentColor"
                        opacity="0.3"
                        x={1}
                        y={18}
                        width={22}
                        height={1}
                        rx="0.5"
                      />
                    </g>
                  </svg>
                  <h6>Mac</h6>
                </div>
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto text-black"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <rect
                        id="Rectangle-7-Copy"
                        fill="currentColor"
                        x={2}
                        y={5}
                        width={19}
                        height={4}
                        rx={1}
                      />
                      <rect
                        id="Rectangle-7-Copy-4"
                        fill="currentColor"
                        opacity="0.3"
                        x={2}
                        y={11}
                        width={19}
                        height={10}
                        rx={1}
                      />
                    </g>
                  </svg>
                  <h6>Browser</h6>
                </div>
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto text-black"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path
                        d="M7.5,4 L7.5,19 L16.5,19 L16.5,4 L7.5,4 Z M7.71428571,2 L16.2857143,2 C17.2324881,2 18,2.8954305 18,4 L18,20 C18,21.1045695 17.2324881,22 16.2857143,22 L7.71428571,22 C6.76751186,22 6,21.1045695 6,20 L6,4 C6,2.8954305 6.76751186,2 7.71428571,2 Z"
                        id="Combined-Shape"
                        fill="currentColor"
                      />
                      <polygon
                        id="Combined-Shape"
                        fill="currentColor"
                        opacity="0.3"
                        points="7.5 4 7.5 19 16.5 19 16.5 4"
                      />
                    </g>
                  </svg>
                  <h6>Mobile</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex mt-14">
                <a
                  href="#"
                  className="py-2 px-4 rounded border border-primary bg-primary text-white hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
                >
                  {" "}
                  Get Propmt for Free{" "}
                  <i className="fa-solid fa-arrow-right ms-2" />
                </a>
              </div>
              <div className="mt-2">
                <p className="inline-flex text-xs">
                  Looking for other platforms?{" "}
                  <a href="#" className="hover:text-primary">
                    {" "}
                    Click Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
