import React from "react";

const Loading = () => {
  return (
    <div class="bg-white rounded w-96 mx-auto rounded-2xl shadow-lg my-20">
      <div class="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse"></div>
      <div class="h- p-3">
        <div class="grid grid-cols-3 gap-4 mt-2">
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
          <div class=" h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="..."></div>
          <div class="col-span-2 ..."></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
