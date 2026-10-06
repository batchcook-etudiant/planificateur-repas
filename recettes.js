// Quantités et coûts par portion (prix estimés, à ajuster)
// contient : "viande", "porc" ou "poisson" (vide = végétarien)
const RECETTES = [
  {
    nom: "Chili sin carne",
    contient: [],
    cout: 1.2,
    tempsMin: 40,
    ingredients: [
      { nom: "Haricots rouges (boîte)", qte: 0.25, unite: "boîte", rayon: "Épicerie" },
      { nom: "Maïs (boîte)", qte: 0.25, unite: "boîte", rayon: "Épicerie" },
      { nom: "Tomates concassées", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Pâtes au thon et à la tomate",
    contient: ["poisson"],
    cout: 1.5,
    tempsMin: 25,
    ingredients: [
      { nom: "Pâtes", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Thon (boîte)", qte: 0.5, unite: "boîte", rayon: "Épicerie" },
      { nom: "Tomates concassées", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Poulet au curry et riz",
    contient: ["viande"],
    cout: 2.2,
    tempsMin: 35,
    ingredients: [
      { nom: "Blanc de poulet", qte: 120, unite: "g", rayon: "Boucherie" },
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Curry en poudre", qte: 1, unite: "c. à café", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Lentilles et saucisses",
    contient: ["viande", "porc"],
    cout: 1.8,
    tempsMin: 40,
    ingredients: [
      { nom: "Lentilles vertes", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Saucisse de porc", qte: 1, unite: "pièce", rayon: "Boucherie" },
      { nom: "Carotte", qte: 1, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Soupe de lentilles corail",
    contient: [],
    cout: 0.9,
    tempsMin: 30,
    ingredients: [
      { nom: "Lentilles corail", qte: 70, unite: "g", rayon: "Épicerie" },
      { nom: "Carotte", qte: 1, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Curry en poudre", qte: 0.5, unite: "c. à café", rayon: "Épicerie" }
    ]
  },
    {
    nom: "Tortilla de pommes de terre",
    contient: [],
    cout: 1.0,
    tempsMin: 30,
    ingredients: [
      { nom: "Œufs", qte: 2, unite: "pièce", rayon: "Crèmerie" },
      { nom: "Pommes de terre", qte: 200, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Riz cantonais",
    contient: ["porc"],
    cout: 1.4,
    tempsMin: 25,
    ingredients: [
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Œufs", qte: 1, unite: "pièce", rayon: "Crèmerie" },
      { nom: "Petits pois surgelés", qte: 50, unite: "g", rayon: "Surgelés" },
      { nom: "Jambon", qte: 1, unite: "tranche", rayon: "Boucherie" }
    ]
  },
  {
    nom: "Gratin de pâtes au fromage",
    contient: [],
    cout: 1.3,
    tempsMin: 35,
    ingredients: [
      { nom: "Pâtes", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Crème fraîche", qte: 50, unite: "g", rayon: "Crèmerie" },
      { nom: "Fromage râpé", qte: 30, unite: "g", rayon: "Crèmerie" }
    ]
  },
  {
    nom: "Curry de pois chiches",
    contient: [],
    cout: 1.1,
    tempsMin: 30,
    ingredients: [
      { nom: "Pois chiches (boîte)", qte: 0.25, unite: "boîte", rayon: "Épicerie" },
      { nom: "Tomates concassées", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Curry en poudre", qte: 1, unite: "c. à café", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Dal de lentilles corail et riz",
    contient: [],
    cout: 1.0,
    tempsMin: 30,
    ingredients: [
      { nom: "Lentilles corail", qte: 70, unite: "g", rayon: "Épicerie" },
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Curry en poudre", qte: 1, unite: "c. à café", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Spaghetti bolognaise",
    contient: ["viande"],
    cout: 1.9,
    tempsMin: 35,
    ingredients: [
      { nom: "Pâtes", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Viande hachée", qte: 100, unite: "g", rayon: "Boucherie" },
      { nom: "Tomates concassées", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Poêlée de pommes de terre et saucisses",
    contient: ["viande", "porc"],
    cout: 1.7,
    tempsMin: 35,
    ingredients: [
      { nom: "Pommes de terre", qte: 200, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Saucisse de porc", qte: 1, unite: "pièce", rayon: "Boucherie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Quiche aux courgettes",
    contient: [],
    cout: 1.3,
    tempsMin: 50,
    ingredients: [
      { nom: "Pâte brisée", qte: 0.25, unite: "pièce", rayon: "Crèmerie" },
      { nom: "Œufs", qte: 1, unite: "pièce", rayon: "Crèmerie" },
      { nom: "Crème fraîche", qte: 40, unite: "g", rayon: "Crèmerie" },
      { nom: "Courgette", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Salade de riz au thon",
    contient: ["poisson"],
    cout: 1.4,
    tempsMin: 25,
    ingredients: [
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Thon (boîte)", qte: 0.5, unite: "boîte", rayon: "Épicerie" },
      { nom: "Maïs (boîte)", qte: 0.25, unite: "boîte", rayon: "Épicerie" },
      { nom: "Tomates", qte: 1, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Chili con carne",
    contient: ["viande"],
    cout: 2.0,
    tempsMin: 45,
    ingredients: [
      { nom: "Viande hachée", qte: 100, unite: "g", rayon: "Boucherie" },
      { nom: "Haricots rouges (boîte)", qte: 0.25, unite: "boîte", rayon: "Épicerie" },
      { nom: "Tomates concassées", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Pâtes pesto et courgettes",
    contient: [],
    cout: 1.3,
    tempsMin: 20,
    ingredients: [
      { nom: "Pâtes", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Pesto", qte: 1, unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Courgette", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Cuisse de poulet rôtie et pommes de terre",
    contient: ["viande"],
    cout: 2.0,
    tempsMin: 50,
    ingredients: [
      { nom: "Cuisse de poulet", qte: 1, unite: "pièce", rayon: "Boucherie" },
      { nom: "Pommes de terre", qte: 200, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Carotte", qte: 1, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Ratatouille et riz",
    contient: [],
    cout: 1.2,
    tempsMin: 45,
    ingredients: [
      { nom: "Courgette", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Aubergine", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Tomates concassées", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" }
    ]
  },
    {
    nom: "Omelette aux champignons",
    contient: [],
    cout: 1.1,
    tempsMin: 15,
    ingredients: [
      { nom: "Œufs", qte: 2, unite: "pièce", rayon: "Crèmerie" },
      { nom: "Champignons", qte: 100, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Pommes de terre", qte: 100, unite: "g", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Soupe de légumes",
    contient: [],
    cout: 0.8,
    tempsMin: 35,
    ingredients: [
      { nom: "Pommes de terre", qte: 150, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Carotte", qte: 1, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Poireau", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Taboulé de semoule",
    contient: [],
    cout: 0.9,
    tempsMin: 20,
    ingredients: [
      { nom: "Semoule", qte: 70, unite: "g", rayon: "Épicerie" },
      { nom: "Tomates", qte: 1, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Concombre", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Pâtes carbonara",
    contient: ["viande", "porc"],
    cout: 1.6,
    tempsMin: 20,
    ingredients: [
      { nom: "Pâtes", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Lardons", qte: 50, unite: "g", rayon: "Boucherie" },
      { nom: "Crème fraîche", qte: 40, unite: "g", rayon: "Crèmerie" },
      { nom: "Œufs", qte: 0.5, unite: "pièce", rayon: "Crèmerie" }
    ]
  },
  {
    nom: "Haricots blancs à la tomate",
    contient: [],
    cout: 1.0,
    tempsMin: 25,
    ingredients: [
      { nom: "Haricots blancs (boîte)", qte: 0.25, unite: "boîte", rayon: "Épicerie" },
      { nom: "Tomates concassées", qte: 100, unite: "g", rayon: "Épicerie" },
      { nom: "Riz", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Wraps au poulet",
    contient: ["viande"],
    cout: 2.1,
    tempsMin: 20,
    ingredients: [
      { nom: "Tortillas (wraps)", qte: 2, unite: "pièce", rayon: "Épicerie" },
      { nom: "Blanc de poulet", qte: 100, unite: "g", rayon: "Boucherie" },
      { nom: "Salade verte", qte: 0.25, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Tomates", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Gratin dauphinois",
    contient: [],
    cout: 1.2,
    tempsMin: 60,
    ingredients: [
      { nom: "Pommes de terre", qte: 250, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Crème fraîche", qte: 60, unite: "g", rayon: "Crèmerie" },
      { nom: "Fromage râpé", qte: 20, unite: "g", rayon: "Crèmerie" }
    ]
  },
  {
    nom: "Couscous de légumes et pois chiches",
    contient: [],
    cout: 1.3,
    tempsMin: 40,
    ingredients: [
      { nom: "Semoule", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Pois chiches (boîte)", qte: 0.25, unite: "boîte", rayon: "Épicerie" },
      { nom: "Carotte", qte: 1, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Courgette", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Poisson pané et purée",
    contient: ["poisson"],
    cout: 2.0,
    tempsMin: 30,
    ingredients: [
      { nom: "Poisson pané surgelé", qte: 2, unite: "pièce", rayon: "Surgelés" },
      { nom: "Pommes de terre", qte: 200, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Petits pois surgelés", qte: 50, unite: "g", rayon: "Surgelés" }
    ]
  },
  {
    nom: "Hachis parmentier",
    contient: ["viande"],
    cout: 2.0,
    tempsMin: 60,
    ingredients: [
      { nom: "Viande hachée", qte: 100, unite: "g", rayon: "Boucherie" },
      { nom: "Pommes de terre", qte: 200, unite: "g", rayon: "Fruits et légumes" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Fromage râpé", qte: 20, unite: "g", rayon: "Crèmerie" }
    ]
  },
  {
    nom: "Shakshuka",
    contient: [],
    cout: 1.3,
    tempsMin: 30,
    ingredients: [
      { nom: "Œufs", qte: 2, unite: "pièce", rayon: "Crèmerie" },
      { nom: "Tomates concassées", qte: 150, unite: "g", rayon: "Épicerie" },
      { nom: "Poivron", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Oignon", qte: 0.5, unite: "pièce", rayon: "Fruits et légumes" }
    ]
  },
  {
    nom: "Nouilles sautées aux œufs et légumes",
    contient: [],
    cout: 1.2,
    tempsMin: 20,
    ingredients: [
      { nom: "Nouilles", qte: 80, unite: "g", rayon: "Épicerie" },
      { nom: "Œufs", qte: 1, unite: "pièce", rayon: "Crèmerie" },
      { nom: "Carotte", qte: 1, unite: "pièce", rayon: "Fruits et légumes" },
      { nom: "Petits pois surgelés", qte: 50, unite: "g", rayon: "Surgelés" }
    ]
  }
];