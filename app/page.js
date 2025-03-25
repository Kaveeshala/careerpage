"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight,MapPin, Clock5 } from "lucide-react";

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
  frontendDeveloper: {
    shortDescription: "We are looking for a Frontend Developer to build dynamic and engaging user interfaces.",
    jobType: "Remote",
    location: "Full-Time",
  },
  softwareDeveloper: {
    shortDescription: "We are looking for a Software Developer.",
    jobType: "Full-Time",
    location: "Remote",
  },
  backendDeveloper: {
    shortDescription: "Join us as a Backend Developer to build scalable and efficient backend applications.",
    jobType: "Full-Time",
    location: "Physical",
  },
  uiuxDesigner: {
    shortDescription: "Seeking a UI/UX Designer to craft seamless and visually appealing experiences.",
    jobType: "Part-Time",
    location: "Remote",
  },
  designer: {
    shortDescription: "We’re looking for a mid-level Product Designer to join our team.",
    jobType: "Full-Time",
    location: "Remote",
  },
};

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState("View all");

  const categories = Object.keys(categoryMapping);

  const filteredCareers = careers.filter((career) =>
    categoryMapping[selectedCategory].includes(career.id)
  );

  return (
    <div className="mx-auto max-w-7xl mt-20">
      <span className="rounded-full bg-white text-black border border-black px-4 py-1">
        We are hiring!
      </span>

      <div className="flex flex-col w-full max-w-[600px] text-left mt-4">
        <h1 className="font-semibold text-[52px]">Be part of our mission</h1>
        <p className="text-[16px] text-justify leading-tight">
          We're looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
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

          return (
            <div key={career.id} className="flex flex-col gap-2">
              <Separator className="w-[2]"/>
              <div className="flex justify-between items-center">
                <Link href={`/pages/careers/${career.id}`} className="text-[32px] font-semibold">
                  {career.title}
                </Link>
                <div className="flex flex-cols gap-2 items-center cursor-pointer">
                  <p className="font-bold text-[29px]">Apply</p>
                  <ArrowUpRight className="text-black w-[29px] h-[29px]" />
                </div>
              </div>

              <p className="text-black">{shortDescription}</p>

              <div className="flex gap-4 mt-2">
                <span className="flex items-center gap-2 border border-black rounded-full px-3 py-1 text-sm font-medium">
                <Clock5 className="w-4 h-4"/>
                  {jobType}
                </span>
                <span className="flex items-center gap-2 border border-black rounded-full px-3 py-1 text-sm font-medium">
                <MapPin className="w-4 h-4" />
                  {location}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Separator className=" mt-8 mb-16" />
    </div>
  );
}
