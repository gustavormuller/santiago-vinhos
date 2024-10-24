"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="relative w-8 h-8">
        <Menu
          className={`absolute top-0 left-0 transition-all duration-300 ${
            isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          }`}
          color="#F9DEE5"
          size={32}
        />
        <X
          className={`absolute top-0 left-0 transition-all duration-300 ${
            isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
          color="#F9DEE5"
          size={32}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#bb2343] text-[#F9DEE5] pr-4 pl-2 pt-2 pb-3 border-[#ebcad1] border-2 mr-1">
        <DropdownMenuItem className="text-[22px] font-eb">
          Início
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[22px] font-eb">
          História
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[22px] font-eb">
          Rótulos
        </DropdownMenuItem>
        <DropdownMenuItem className="text-[22px] font-eb">
          Contato
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleMenu;
