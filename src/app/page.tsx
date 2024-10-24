import Navbar from "@/components/Navbar";
import ToggleMenu from "@/components/ui/ToggleMenu";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="flex flex-col bg-[#f7eaee] pb-14 pt-24 font-libre">
        <div className="flex flex-row">
          <div className="px-3 pb-5 relative z-10">
            <h1 className="text-[56px] leading-[53px] font-medium text-[#bb2343] w-[250px] font-eb">
              Experimente a essência dos{" "}
              <span className="font-bold">vinhos chilenos</span>
            </h1>
            <p className="mt-10 mb-6 text-[#bb2343] font-libre">
              Descubra os melhores <br /> vinhos importados <br /> diretamente
              das <br /> vinícolas chilenas, <br /> selecionados por <br /> um
              sommelier <br /> com mais de 20 <br /> anos de experiência.
            </p>
          </div>
          <Image
            src="/wine-hero.png"
            alt="Logo da Santiago Vinhos"
            className="hero-img w-[220px] mt-24 absolute right-0 z-0"
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
            <span className="font-eb text-[50px] leading-[100%]">01.</span>
            <div className="font-libre border-b-[1px] border-b-[#bb2343] ml-2">
              <h3 className="text-lg">História</h3>
              <p className="text-sm">Quem somos</p>
            </div>
          </div>
          <div className="flex items-end ml-24 my-5">
            <span className="font-eb text-[50px] leading-[100%]">02.</span>
            <div className="font-libre border-b-[1px] border-b-[#bb2343] ml-2">
              <h3 className="text-lg">Rótulos</h3>
              <p className="text-sm">Os melhores vinhos</p>
            </div>
          </div>
          <div className="flex items-end ml-48">
            <span className="font-eb text-[50px] leading-[100%]">03.</span>
            <div className="font-libre border-b-[1px] border-b-[#bb2343] ml-2">
              <h3 className="text-lg">Contato</h3>
              <p className="text-sm">Fale conosco</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="px-3 py-6">
        <div>
          <h2 className="font-eb text-5xl">Nossa história</h2>
          <p className="font-libre">Boris Acevedo, nascido no Chile, construiu sua carreira trabalhando em renomados restaurantes, sempre movido pela paixão por vinhos. Com mais de 20 anos de experiência como sommelier, ele se especializou em vinhos orgânicos, biodinâmicos e naturais. Hoje, à frente da Santiago Vinhos, Boris compartilha sua expertise trazendo ao Brasil uma curadoria exclusiva dos melhores rótulos, conectando tradição, sustentabilidade e qualidade em cada garrafa.</p>
        </div>
      </section>
    </main>
  );
}
