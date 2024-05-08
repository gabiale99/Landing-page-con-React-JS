import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Trusted By Greatest Companies
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img
          src="https://mohamadfaizal.com/wp-content/uploads/2017/05/logo-google-404px-grey.png"
          alt="logo google"
          className="w-40"
        />
        <img src="airbnb.png" alt="logo google" className="w-40" />
        <img
          src="https://mohamadfaizal.com/wp-content/uploads/2017/05/logo-google-404px-grey.png"
          alt="logo google"
          className="w-40"
        />
        <img
          src="https://www.finleydesign.co.uk/wp-content/uploads/2019/08/shopify-gray.png"
          alt="logo google"
          className="w-40"
        />
        <img src="amazon.png" alt="logo google" className="w-40" />
      </div>
    </div>
  );
};

export default Clients;
