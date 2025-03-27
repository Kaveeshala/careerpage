import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, MapPin, Clock5 } from "lucide-react";

const CareerCard = ({ id, title, shortDescription, jobType, location }) => {
  return (
    <div key={id} className="flex flex-col gap-2">
      <Separator className="w-[2]" />
      <div className="flex justify-between items-center">
        <Link href={`/pages/careers/${id}`} className="text-[32px] font-semibold">
          {title}
        </Link>
        <div className="flex flex-cols gap-2 items-center cursor-pointer">
          <p className="font-bold text-[29px]">Apply</p>
          <ArrowUpRight className="text-black w-[29px] h-[29px]" />
        </div>
      </div>
      <p className="text-black">{shortDescription}</p>
      <div className="flex gap-4 mt-2">
        <span className="flex items-center gap-2 border border-black rounded-full px-3 py-1 text-sm font-medium">
          <Clock5 className="w-4 h-4" /> {jobType}
        </span>
        <span className="flex items-center gap-2 border border-black rounded-full px-3 py-1 text-sm font-medium">
          <MapPin className="w-4 h-4" /> {location}
        </span>
      </div>
    </div>
  );
};

export default CareerCard;
