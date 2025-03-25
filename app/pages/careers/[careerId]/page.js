"use client"
import { useParams } from "next/navigation";
import careerDetails from "../../../data";
import { Separator }  from "@/components/ui/separator";
import { ArrowUpRight, MapPin, Clock5 } from "lucide-react";

export default function CareerDetailPage() {
    const { careerId } = useParams();
    const career = careerDetails[careerId];

    if (!career){
        return <h1>Career not found</h1>
    }

  return (
    <div className="mx-auto max-w-7xl mt-20">
     
        <div className="flex justify-between items-center text-end">
        <h1 className="text-[52px] font-semibold">{career.title}</h1>

        <div className="flex flex-cols gap-2 items-center">
        <p className="font-bold text-[29px]">Apply</p>
        <ArrowUpRight className="text-black w-[29px] h-[29px]" />
        </div>
        
        </div>

      <div className="flex flex-col w-full max-w-[700px] text-left">
      <p className="mt-2">{career.description}</p>
      </div>

      <div className="flex gap-4 mt-6">
          <span className="flex items-center gap-2 border border-black rounded-full px-4 py-1 text-[16px] bg-black text-white">
          <Clock5 className="w-4 h-4"/>
          {career.jobType}
          </span>

          <span className="flex items-center gap-2 border border-black rounded-full px-4 py-1 text-[16px] bg-black text-white">
          <MapPin className="w-4 h-4" />
          {career.location}
          </span>
      </div>

      

      <Separator className="mt-6"/>
      
      <h1 className="text-[32px] mt-8">Salary</h1>
      <p className="text-gray-500 font-semibold text-[32px] mt-4">{career.salary}</p>
      <h2 className="font-semibold text-[32px] mt-20">Responsibilities</h2>
      <ul className="list-disc ml-6 mt-8 text-gray-500 text-[20px]">
        {career.responsibilities.map((responsibility, index) => ( 
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
   
      <h2 className="font-semibold text-[32px] mt-20">Requirements & Qualifications</h2>
      <h3 className="font-semibold text-[24px] text-gray-500 mt-10">Essential Skills & Experience</h3>
      <ul className="list-disc ml-6 mt-8 text-gray-500 text-[20px]">{career.requirements.essentialSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}</ul>
      <h3 className="font-semibold text-[24px] text-gray-500 mt-10">Preferred Qualifications</h3>
      <ul className="list-disc ml-6 mt-8 text-gray-500 text-[20px]">
        {career.requirements.preferredQualifications.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>
      <h2 className="font-semibold text-[32px] mt-20">Company Culture & Benefits</h2>
      <h3 className="font-semibold text-[24px] text-gray-500 mt-10">Perks & Benefits </h3>
      <ul className="list-disc ml-6 mt-8 text-gray-500 text-[20px]">
        {career.culture.perksandBenefits.map((perk, index) => (
          <li key={index}>{perk}</li>
        ))}
      </ul>

      <Separator className="mt-8"/>
      <div className="flex flex-col w-full max-w-[700px] text-left leading-tight mb-10">
      <p className="text-[24px] mt-8">Click "Apply Now" to join our team <br/> 
      and shape amazing user experiences!</p>
      </div>

    </div>
  )
}
