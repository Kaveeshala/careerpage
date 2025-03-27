"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CareerCard from "./CareerCard";

const careers = [
  { id: "designer", title: "Product Designer" },
  { id: "softwareDeveloper", title: "Software Developer" },
  { id: "frontendDeveloper", title: "Frontend Developer" },
  { id: "backendDeveloper", title: "Backend Developer" },
  { id: "uiuxDesigner", title: "UI/UX Designer" },
];

const categoryMapping = {
  "View all": ["frontendDeveloper", "backendDeveloper", "uiuxDesigner", "designer", "softwareDeveloper"],
  "Development": ["frontendDeveloper", "backendDeveloper", "softwareDeveloper"],
  "Design": ["uiuxDesigner", "designer", "softwareDeveloper"],
  "Marketing": ["designer"],
  "Customer Service": ["uiuxDesigner", "frontendDeveloper"],
  "Operations": ["designer", "frontendDeveloper"],
  "Finance": ["designer", "frontendDeveloper", "backendDeveloper"],
  "Management": ["designer"],
};

const jobInfo = {
  frontendDeveloper: { shortDescription: "We are looking for a Frontend Developer.", jobType: "Remote", location: "Full-Time" },
  softwareDeveloper: { shortDescription: "We are looking for a Software Developer.", jobType: "Full-Time", location: "Remote" },
  backendDeveloper: { shortDescription: "Join us as a Backend Developer.", jobType: "Full-Time", location: "Physical" },
  uiuxDesigner: { shortDescription: "Seeking a UI/UX Designer.", jobType: "Part-Time", location: "Remote" },
  designer: { shortDescription: "We’re looking for a Product Designer.", jobType: "Full-Time", location: "Remote" },
};


export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("View all");

    const categories = Object.keys(categoryMapping);
  
    const filteredCareers = careers.filter((career) =>
      categoryMapping[selectedCategory].includes(career.id)
    );
  
    
  return (
    <div className="mx-auto max-w-7xl mt-20">
      <span className="rounded-full bg-white text-black border border-black px-4 py-1">We are hiring!</span>
      <div className="flex flex-col w-full max-w-[600px] text-left mt-4">
        <h1 className="font-semibold text-[52px]">Be part of our mission</h1>
        <p className="text-[16px] text-justify leading-tight">
          We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mt-14">
        {categories.map((category) => (
          <Button
            key={category}
            className={`bg-white border border-black text-black rounded-full px-4 py-2 hover:text-white transition-all duration-300 shadow-none cursor-pointer ${
              selectedCategory === category ? "bg-black text-white text-[16px]" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Career Listings */}
      <div className="mt-10 grid grid-cols-1 gap-6">
        {filteredCareers.map((career) => {
          const { shortDescription, jobType, location } = jobInfo[career.id] || {};
          
          return <CareerCard key={career.id} id={career.id} title={career.title} shortDescription={shortDescription} jobType={jobType} location={location} />;
        })}
      </div>
      <Separator className="mt-8 mb-16" />
    </div>
  )
}
