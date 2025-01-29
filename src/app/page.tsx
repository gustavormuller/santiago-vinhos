import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WineCard from "@/components/WineCard";
import { wines } from "@/data/wines";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        className="flex flex-col bg-[#fff9ee] pb-14 pt-24 font-libre"
        id="inicio"
      >
        <div className="flex flex-row">
          <div className="px-3 pb-2 relative z-10">
            <h1 className="text-[42px] leading-[41px] font-medium text-[#bb2343] w-[300px] font-ibarra">
              Desfrute dos melhores{" "}
              <span className="font-black">Vinhos Importados</span>
              <br /> no conforto
              <br /> da sua casa
            </h1>
            <p className="mt-8 mb-6 text-[#774023] font-libre w-[50%]">
              Explore uma seleção <br /> exclusiva de vinhos <br /> importados,
              cuidadosamente escolhidos e entregues diretamente na sua porta em
              toda a Grande Vitória.
            </p>
          </div>
          <Image
            src="/wine-hero.png"
            alt="Logo da Santiago Vinhos"
            className="hero-img w-[215px] mt-24 absolute right-0 z-0"
            width={500}
            height={1080}
          />
        </div>
        <Link
          href="#rotulos"
          className="text-lg text-[#bb2343] text-center mx-3 w-fit px-4 py-1 border-[#bb2343] border-y-[1.2px] flex items-center gap-1"
        >
          Nossos rótulos <ArrowRight color="#bb2343" size={18} />
        </Link>
      </section>

      <section
        className="px-3 py-4 bg-[#fff9ee] font-libre flex flex-col items-center"
        id="rotulos"
      >
        <div>
          <h4 className="text-lg text-[#774023]">
            Cada garrafa, uma história.
          </h4>
          <h2 className="font-ibarra text-[40px] text-[#bb2343] font-bold">
            Nossos Rótulos
          </h2>
          <p className="text-wrap text-justify text-[#774023]">
            Explore um catálogo de vinhos importados a partir de R$ 49,90, com opções de vinhos tintos, vinhos brancos e espumantes.
          </p>
        </div>

        <Carousel className="pt-5 px-1 flex flex-col w-full">
          <CarouselContent className="h-[260px]">
            {wines.map((wine, index) => (
              <WineCard key={index} {...wine} />
            ))}
          </CarouselContent>
          <div className="self-center">
            <CarouselPrevious className="relative mt-8 bg-[#F5EBDA] text-[#774023] border-[#774023] hover:bg-[#e7dac4] hover:text-[#774023] focus-visible:ring-[#F5EBDA]" />
            <CarouselNext className="relative mt-8 bg-[#F5EBDA] text-[#774023] border-[#774023] hover:bg-[#e7dac4] hover:text-[#774023] focus-visible:ring-[#F5EBDA]" />
          </div>
        </Carousel>

        <Link
          href="#"
          className="text-base text-[#774023] text-center w-fit flex items-center gap-1 self-end"
        >
          Ver catálogo completo <ArrowRight color="#774023" size={16} />
        </Link>
      </section>

      <section className="px-3 py-4 bg-[#fff9ee]" id="historia">
        <div>
          <h2 className="font-ibarra text-[40px] text-[#bb2343] font-bold">
            Nossa história
          </h2>
          <p className="font-libre text-[#774023]">
            Boris Acevedo, nascido no Chile, construiu sua carreira trabalhando
            em renomados restaurantes, sempre movido pela paixão por vinhos. Com
            mais de 20 anos de experiência como sommelier, ele se especializou
            em vinhos orgânicos, biodinâmicos e naturais. Hoje, à frente da
            Santiago Vinhos, Boris compartilha sua expertise trazendo ao Brasil
            uma curadoria exclusiva dos melhores rótulos, conectando tradição,
            sustentabilidade e qualidade em cada garrafa.
          </p>
        </div>
      </section>
    </main>
  );
}
