// const foodMenu = [
//   { name: "Pizza", price: "$8.99", img: pizzaImg },
//   { name: "Burger", price: "$5.99", img: burgerImg },
//   { name: "Pasta", price: "$7.49", img: pastaImg },
//   { name: "Salad", price: "$4.99", img: saladImg },
//   { name: "Sushi", price: "$12.99", img: sushiImg },
//   { name: "Steak", price: "$15.99", img: steakImg },
//   { name: "Tacos", price: "$6.49", img: tacosImg },
//   { name: "Ice Cream", price: "$3.99", img: icecreamImg },
// ];

const foodMenu = [
  { name: "Pizza", price: "$8.99" },
  { name: "Burger", price: "$5.99" },
  { name: "Pasta", price: "$7.49" },
  { name: "Salad", price: "$4.99" },
  { name: "Sushi", price: "$12.99" },
  { name: "Steak", price: "$15.99" },
  { name: "Tacos", price: "$6.49" },
  { name: "Ice Cream", price: "$3.99" },
];

exports.createMenuDiv = function () {
  console.log("menu");
  const divMenu = document.createElement("div");
  const paragraph = document.createElement("p");
  const headerTitle = document.createElement("h4");
  headerTitle.textContent = "Menu";
  paragraph.textContent =
    "paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam voluptatum quas numquam perspiciatis sequi facere fuga, nihil dignissimos! Incidunt.";
  divMenu.append(headerTitle);
  divMenu.append(paragraph);
  return divMenu;
};
