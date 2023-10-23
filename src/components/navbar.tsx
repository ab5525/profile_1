import React from "react";

interface NavProps {
  name: string;
  page1: string;
  page2: string;
}
//h-7 py-10 mb-12 flex

export default function Navbar({
  name = "placeholder",
  page1 = "placeholder",
  page2 = "placeholder",
}: NavProps) {
  return (
    <nav className=" text-white justify-between border-solid bg-white border-gray-200 dark:bg-gray-900 mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a>
          <h1 className="text-xl">{name}</h1>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/projects">{page1}</a>
            </li>
            <li>
              <a href="/contact">{page2}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
