import ToggleMenu from "@/components/ui/ToggleMenu";
import Image from "next/image";

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
    </main>
  );
}
