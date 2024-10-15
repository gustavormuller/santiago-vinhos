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
          color="#FFF" 
          size={32} 
        />
        <X 
          className={`absolute top-0 left-0 transition-all duration-300 ${
            isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`} 
          color="#FFF" 
          size={32} 
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Início</DropdownMenuItem>
        <DropdownMenuItem>Sobre</DropdownMenuItem>
        <DropdownMenuItem>Rótulos</DropdownMenuItem>
        <DropdownMenuItem>Contato</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleMenu;