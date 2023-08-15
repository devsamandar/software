import React from "react";

function Footer() {
  return (
    <footer className="pt-10 pb-6" id="footer">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl/tight font-medium my-5">
            Be the first to know!
          </h2>
          <p className="text-gray-500">
            We'll inform you about new updates, features, but no spam, we
            promise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 my-10">
            <div className="flex items-center">
              <input
                type="text"
                id="email-input"
                name="email-input"
                placeholder="Your email"
                className="w-full text-sm rounded border-gray-200 focus:border-gray-400 focus:ring-0 bg-transparent py-2 px-4"
              />
            </div>
            <a
              href="#"
              className="py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className="border-b" />
      <div className="container">
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-7">
            © Prompt. All rights reserved. Crafted by{" "}
            <a
              href="#"
              className="text-gray-800 hover:text-primary transition-all"
            >
              Coderthemes
            </a>
          </p>
          <a href="index.html">
            <img src="assets/images/logo-dark.png" className="h-8 mx-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
