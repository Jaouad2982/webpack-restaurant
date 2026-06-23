import imagerestaurant from "./images/imagerestaurant.avif";
import { foodMenu, createMenuDiv } from "../Menu/menuIndex";
import { createAboutDiv } from "../About/aboutIndex";
import { createHomeDiv } from "../home/homeIndex.js";
import "./style.css";
console.log("webpack");
const headerTitle = document.createElement("h4");
const paragraph = document.createElement("p");
const img = document.createElement("img");
const contentDiv = document.getElementById("content");

headerTitle.textContent = "Restaurant";
paragraph.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam voluptatum quas numquam perspiciatis sequi facere fuga, nihil dignissimos! Incidunt.";
img.src = imagerestaurant;
img.alt = "restaurant";
img.style.backgroundPosition = "center";
img.style.backgroundSize = "cover";
img.style.width = "100%";

contentDiv.append(headerTitle);
contentDiv.append(img);
contentDiv.append(paragraph);
// document.body.appendChild(img);

// contentDiv.append(homeDivContent);

// let aboutDivContent = createAboutDiv();
// contentDiv.append(aboutDivContent);

// const btnHome = document.getElementById("homeBtn");
// const btnMenu = document.getElementById("menuBtn");
// const btnAbout = document.getElementById("aboutBtn");

// btnHome.addEventListener("click", function (e) {
//   let homeDivContent = createHomeDiv();
//   contentDiv.innerHTML = homeDivContent;
// });

// btnMenu.addEventListener("click", function () {
//   let menuDivContent = createMenuDiv();
//   console.log(menuDivContent);
//   contentDiv.innerHTML = menuDivContent;
// });

// btnAbout.addEventListener("click", function () {
//   let aboutDivContent = createAboutDiv();
//   console.log(aboutDivContent);
//   contentDiv.innerHTML = aboutDivContent;
//   console.log("about");
// });

function loadView(viewElement) {
  const contentDiv = document.getElementById("content");
  contentDiv.classList.add("contentDiv");
  contentDiv.innerHTML = ""; // clear old content
  contentDiv.appendChild(viewElement);
}

document.addEventListener("DOMContentLoaded", () => {
  const btnHome = document.getElementById("homeBtn");
  const contentDiv = document.getElementById("content");
  const btnAbout = document.getElementById("aboutBtn");
  const btnMenu = document.getElementById("menuBtn");
  btnHome.addEventListener("click", () => {
    loadView(createHomeDiv());
    console.log("home");
    console.log("div menu creation ", createMenuDiv());
  });

  btnAbout.addEventListener("click", () => {
    loadView(createAboutDiv());
    console.log("about");
  });

  let menuFood = foodMenu();
  let menuDiv = createMenuDiv();

  console.log(menuFood);
  btnMenu.addEventListener("click", () => {
    const headerBtn = document.querySelector(".header-btn");
    headerBtn.style.backgroundColor = "white";
    headerBtn.style.border = "1px solid red";
    loadView(createMenuDiv());
    menuFood.forEach((elem) => {
      const imageDiv = document.createElement("div");
      const titlePriceDiv = document.createElement("div");
      titlePriceDiv.classList.add("titlePriceDiv");
      imageDiv.classList.add("imageDiv");
      const title = document.createElement("h4");
      title.classList.add("title");
      const spanPrice = document.createElement("span");
      const imgBlock = document.createElement("img");
      title.textContent = `${elem.name}`;
      spanPrice.textContent = `${elem.price}`;
      imgBlock.src = `${elem.image}`;
      console.log(`${elem.image}`);
      titlePriceDiv.append(title);
      titlePriceDiv.append(spanPrice);
      // imageDiv.append(titlePriceDiv);
      imageDiv.append(imgBlock);
      contentDiv.append(titlePriceDiv);
      contentDiv.append(imageDiv);
      // contentDiv.append(title);
      // contentDiv.append(spanPrice);
      // contentDiv.append(imgBlock);
    });
    console.log(menuFood);
    console.log("menu");
  });
});
