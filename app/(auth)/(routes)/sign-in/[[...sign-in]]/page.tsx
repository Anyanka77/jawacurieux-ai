// Importation du composant SignIn de la bibliothèque Clerk pour l'authentification
import { SignIn } from "@clerk/nextjs";

// Définition du composant Page
export default function Page() {
  // Retourne le composant SignIn pour permettre à l'utilisateur de se connecter
  return <SignIn />;
}
