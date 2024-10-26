import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section
        className="flex flex-col bg-[#fff9ee] pb-14 pt-24 font-libre"
        id="inicio"
      >
        <div className="flex flex-row">
          <div className="px-3 pb-5 relative z-10">
            <h1 className="text-[42px] leading-[41px] font-medium text-[#bb2343] w-[300px] font-ibarra">
              Desfrute dos melhores{" "}
              <span className="font-black">Vinhos Importados</span>
              <br /> no conforto
              <br />
              da sua casa
            </h1>
            <p className="mt-8 mb-6 text-[#774023] font-libre">
              Explore uma seleção <br /> exclusiva de vinhos <br /> importados,
              cuida-
              <br />
              dosamente escolhi-
              <br />
              dos e entregues
              <br /> diretamente na
              <br /> sua porta em toda a<br /> Grande Vitória.
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
      {/* <section className="px-3 py-4">
        <div>
          <div className="flex items-end">
            <span className="font-ibarra text-[50px] leading-[100%]">01.</span>
            <div className="font-libre border-b-[1px] border-b-[#bb2343] ml-2">
              <h3 className="text-lg">História</h3>
              <p className="text-sm">Quem somos</p>
            </div>
          </div>
          <div className="flex items-end ml-24 my-5">
            <span className="font-ibarra text-[50px] leading-[100%]">02.</span>
            <div className="font-libre border-b-[1px] border-b-[#bb2343] ml-2">
              <h3 className="text-lg">Rótulos</h3>
              <p className="text-sm">Os melhores vinhos</p>
            </div>
          </div>
          <div className="flex items-end ml-48">
            <span className="font-ibarra text-[50px] leading-[100%]">03.</span>
            <div className="font-libre border-b-[1px] border-b-[#bb2343] ml-2">
              <h3 className="text-lg">Contato</h3>
              <p className="text-sm">Fale conosco</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="px-3 py-6 bg-[#fff9ee]" id="historia">
        <div>
          <h2 className="font-ibarra text-[36px] text-[#bb2343] font-bold">
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
      <section
        className="px-3 py-6 bg-[#fff9ee] font-libre flex flex-col items-center"
        id="rotulos"
      >
        <div>
          <h4 className="text-lg text-[#774023]">
            Cada garrafa, uma história.
          </h4>
          <h2 className="font-ibarra text-[36px] text-[#bb2343] font-bold">
            Nossos Rótulos
          </h2>
          <p className="text-wrap text-justify text-[#774023]">
            Explore um catálogo de vinhos importados de vinícolas renomadas pelo
            mundo, com rótulos que vão dos orgânicos e biodinâmicos aos
            naturais.
          </p>
        </div>
        <Carousel className="w-full overflow-hidden flex items-center justify-center">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/almaviva.png"
                alt="Vinho Almaviva 2021"
                width={200}
                height={100}
                className="absolute -left-7"
              />
              <div className="bg-[#F5EBDA] p-5 flex">
                <div className="w-[120px]"></div>
                <span>Almaviva 2021</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <Image
                  src="/almaviva.png"
                  alt="Vinho Almaviva 2021"
                  width={200}
                  height={100}
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <Image
                  src="/almaviva.png"
                  alt="Vinho Almaviva 2021"
                  width={200}
                  height={100}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
