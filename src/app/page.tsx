import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleMenu from "@/components/ui/ToggleMenu";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="flex px-5 items-center justify-between bg-[#bb2343]">
        <Image
          src="/logo-square.png"
          alt="Logo da Santiago Vinhos"
          width={90}
          height={90}
        />
        <ToggleMenu />
      </nav>
    </main>
  );
}
