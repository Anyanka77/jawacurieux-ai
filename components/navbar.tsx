// Utilisation du mode client
"use client";

// Importation des bibliothèques et composants nécessaires
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

// Initialisation de la police Poppins avec le poids "600" et le sous-ensemble "latin"
const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

// Définition du composant Navbar
export const Navbar = () => {
  // Retourne une barre de navigation avec un bouton d'amélioration, un bouton de basculement de mode et un bouton utilisateur
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        {/* Affichage de la barre latérale mobile */}
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            {/* Titre de la barre de navigation */}
            jawacurieux.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {/* Bouton pour passer à une version premium */}
        <Button variant="premium" size="sm">
          Upgrade
          {/* Icône pour le bouton d'amélioration */}
          <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>

        {/* Bouton pour basculer entre les modes clair et sombre */}
        <ModeToggle />

        {/* Bouton pour gérer le compte utilisateur */}
        <UserButton />
      </div>
    </div>
  );
};
