import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="flex justify-between px-20 py-4 items-center bg-gray-900 text-white">
        <h1 class="text-xl font-bold ">
          <a href="home">Siciliamia</a>
        </h1>
        <div class="flex items-center">
          <ul class="flex items-center space-x-6">
            <li class="font-semibold mx-10">Home</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
