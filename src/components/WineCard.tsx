import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { CarouselItem } from "./ui/carousel";

interface WineCardProps {
  name: string;
  type: string;
  country: string;
  flag: string;
  image: string;
}

export default function WineCard({
  name,
  type,
  country,
  flag,
  image,
}: WineCardProps) {
  return (
    <CarouselItem>
      <div className="flex h-full w-full relative">
        <Image
          src={image}
          alt={`Vinho ${name}`}
          width={200}
          height={100}
          className="absolute -left-11 z-20"
        />
        <div className="bg-[#F5EBDA] p-5 flex self-center w-full pl-[108px] relative z-0 rounded-md">
          <div className="flex flex-col items-start">
            <span className="text-[#482817] text-lg font-bold">{name}</span>
            <span className="text-[#774023]">{type}</span>
            <div className="flex items-center pt-12">
              <span className="pr-1.5 text-[#774023]">{country}</span>
              <Image
                src={flag}
                alt={`Bandeira de ${country}`}
                width={24}
                height={24}
              />
            </div>
          </div>
          <Link href="/">
            <ShoppingCart
              size={32}
              className="ml-auto absolute bottom-5 right-5"
              color="#774023"
            />
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
}
