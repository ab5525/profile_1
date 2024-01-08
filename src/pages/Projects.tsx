import React from "react";
import Card from "../components/card";

export default function Projects() {
  return (
    <div>
      <div className="text-center p-10 outline">
        <h1 className="text-indigo-800 text-5xl py-1">Selected Projects</h1>
      </div>
      <div className="text-center mt-10 p-10 outline">
        <h1 className="text-indigo-800 text-5xl py-1">Hold Projects Here</h1>
        <Card />
      </div>
    </div>
  );
}
