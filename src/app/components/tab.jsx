"use client";
import { useState } from "react";

export const Tab = (props) => {
  const { data } = props;
  const [activeTab, setActiveTab] = useState(data[0].id);

  const ActiveComponent = data.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <div className="flex space-x-4 bg-gray-800 rounded-lg p-2 mb-4">
        {data.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 rounded-lg font-semibold ${
              activeTab === tab.id
                ? "bg-black text-white border-b-2 border-neon-blue"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.id}
          </button>
        ))}
      </div>

      <div className="py-10">
        {ActiveComponent ? (
          ActiveComponent
        ) : (
          <p className="text-gray-400">No content available</p>
        )}
      </div>
    </div>
  );
};
