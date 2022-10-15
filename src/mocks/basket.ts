export const mock = {
  header: {
    title: "Detalhe da cesta",
  },
  details: {
    name: "Cesta de Verduras",
    farmLogo: require("../assets/logo.png"),
    farmName: "Jenny Jack Farm",
    description:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    price: "R$ 40,00",
    buttonText: "Comprar",
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: require("../assets/vegies/tomate.png"),
      },
      {
        name: "Brócolis",
        image: require("../assets/vegies/brocolis.png"),
      },
      {
        name: "Batata",
        image: require("../assets/vegies/batata.png"),
      },
      {
        name: "Pepino",
        image: require("../assets/vegies/pepino.png"),
      },
      {
        name: "Abóbora",
        image: require("../assets/vegies/abobora.png"),
      },
    ],
  },
};
