// Définition du composant AuthLayout
// Il prend en paramètre un objet contenant une propriété "children" de type ReactNode
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // Le composant retourne une div qui centre ses enfants à la fois horizontalement et verticalement
  // La div occupe toute la hauteur disponible
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

// Exportation du composant AuthLayout comme exportation par défaut du module
export default AuthLayout;
