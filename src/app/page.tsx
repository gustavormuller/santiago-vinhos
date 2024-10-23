import ToggleMenu from "@/components/ui/ToggleMenu";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <nav className="flex px-5 lg:px-12 py-[5px] items-center justify-between bg-[#bb2343]">
        <Image
          src="/logo-cut.png"
          alt="Logo da Santiago Vinhos"
          width={90}
          height={70}
          className="lg:w-[100px]"
        />
        <div className="flex items-center lg:hidden">
          <ToggleMenu />
        </div>
        <div className="hidden lg:flex items-center text-[#F9DEE5] text-lg font-poppins">
          <a href="#" className="mr-10 relative group">
            <span>Início</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#" className="mr-10 relative group">
            <span>Sobre</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#" className="mr-10 relative group">
            <span>Rótulos</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#" className="relative group">
            <span>Contato</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F9DEE5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </nav>
      {/* <Image src="/wine-pouring.png" width={300} height={300} alt="Garrafa de vinho" className="ml-auto mt-32" /> */}
      <section className="flex flex-col bg-[#f7eaee] py-10 font-libre">
        <div className="flex flex-row">
          <div className="px-3 pb-5 relative z-10">
            <h1 className="text-[50px] leading-[48px] font-medium text-[#bb2343] w-[230px] font-eb">
              Experimente a essência dos{" "}
              <span className="font-bold">vinhos chilenos</span>
            </h1>
            <p className="mt-8 mb-4 text-[#bb2343] font-libre">
              Descubra os melhores <br /> vinhos importados <br /> diretamente
              das <br /> vinícolas chilenas, <br /> selecionados por <br /> um
              sommelier <br /> com mais de 20 <br /> anos de experiência.
            </p>
          </div>
          <Image
            src="/wine-hero.png"
            alt="Logo da Santiago Vinhos"
            className="hero-img w-[220px] mt-16 absolute right-0 z-0"
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
    </main>
  );
}
