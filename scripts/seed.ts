const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Musiciens" },
        { name: "Peintres" },
        { name: "Hommes politiques" },
        { name: "Ecrivains" },
        { name: "Philosophes" },
        { name: "Scientifiques" },
        { name: "Autres" },
      ],
    });
  } catch (error) {
    console.error(
      "Erreur lors de l'initialisation des catégories par défaut",
      error
    );
  } finally {
    await db.$disconnect();
  }
}

main();
