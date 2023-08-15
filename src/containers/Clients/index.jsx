import React from "react";

function Clients() {
  return (
    <section className="py-16" id="clients">
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-center">
          <div>
            <p className="text-base font-medium">
              Join 10,000+ other companies who are using Prompt
            </p>
            <div className="flex flex-wrap md:flex-nowrap gap-10 mt-7">
              <div>
                <img src="assets/images/brands/amazon.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/google.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/paypal.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/spotify.svg" className="w-28" />
              </div>
              <div>
                <img src="assets/images/brands/shopify.svg" className="w-28" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex xl:justify-end items-center mt-7">
              <div className="flex items-center">
                <p className="text-base font-medium">Score 9.5 out of 10 on</p>
                <img src="assets/images/brands/mr.svg" className="w-12 h-8" />
              </div>
            </div>
            <div className="flex xl:justify-end gap-3 mt-7">
              <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                <i className="fa-regular fa-star text-lg" />
              </div>
              <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                <i className="fa-regular fa-star text-lg" />
              </div>
              <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                <i className="fa-regular fa-star text-lg" />
              </div>
              <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                <i className="fa-regular fa-star text-lg" />
              </div>
              <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                <i className="fa-regular fa-star text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
