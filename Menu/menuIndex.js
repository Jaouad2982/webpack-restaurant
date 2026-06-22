import pizzaImage from "../src/images/pizzaImage.avif";
import burger from "../src/images/burger.avif";
import pasta from "../src/images/pasta.avif";
import salad from "../src/images/salad.avif";
import sushi from "../src/images/sushi.avif";
import steak from "../src/images/steak.avif";
import tacos from "../src/images/tacos.avif";
import icecream from "../src/images/icecream.avif";

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

function createMenuDiv() {
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
}

function foodMenu() {
  return [
    { name: "Pizza", price: "$8.99", image: pizzaImage },
    { name: "Burger", price: "$5.99", image: burger },
    { name: "Pasta", price: "$7.49", image: pasta },
    { name: "Salad", price: "$4.99", image: salad },
    { name: "Sushi", price: "$12.99", image: sushi },
    { name: "Steak", price: "$15.99", image: steak },
    { name: "Tacos", price: "$6.49", image: tacos },
    { name: "Ice Cream", price: "$3.99", image: icecream },
  ];
}

export { createMenuDiv, foodMenu };

//  button.addEventListener("click", function () {
//     bookArray = bookArray.filter((id) => id !== this.dataset.id);
//     divBlock.remove();
//   });
//   buttonRead.addEventListener("click", function () {
//     console.log("button read clicked");
//     if (p5.textContent === "read:true") {
//       p5.textContent = "read:false";
//     } else if (p5.textContent === "read:false") {
//       p5.textContent = "read:true";
//     }
//   });
