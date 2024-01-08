"use client";

// Importation des icônes et des utilitaires nécessaires
import { Home, Plus, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

// Définition du composant Sidebar
export const Sidebar = () => {
  // Utilisation des hooks pour obtenir le chemin d'accès actuel et le routeur
  const pathname = usePathname();
  const router = useRouter();

  // Définition des routes pour la barre latérale
  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Accueil",
      pro: false,
    },
    {
      icon: Plus,
      href: "/companion/new",
      label: "Créer",
      pro: true,
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Paramètres",
      pro: false,
    },
  ];

  // Fonction pour naviguer vers une URL spécifique
  const onNavigate = (url: string, pro: boolean) => {
    // TODO: Vérifier si l'utilisateur est un utilisateur Pro

    // Navigation vers l'URL spécifiée
    return router.push(url);
  };

  // Retourne la barre latérale avec les routes définies
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {/* Boucle sur les routes et création d'un élément pour chaque route */}
          {routes.map((route) => (
            <div
              // Lorsqu'on clique sur l'élément, on navigue vers l'URL de la route
              onClick={() => onNavigate(route.href, route.pro)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                {/* Affichage de l'icône de la route */}
                <route.icon className="h-5 w-5" />
                {/* Affichage du label de la route */}
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
