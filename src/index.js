import imagerestaurant from "./images/imagerestaurant.avif";
import menuIndex from "../Menu/menuIndex";
import { createMenuDiv } from "../Menu/menuIndex";
import { createHomeDiv } from "../home/homeIndex";
import { createAboutDiv } from "../About/aboutIndex";
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
  });

  btnAbout.addEventListener("click", () => {
    loadView(createAboutDiv());
    console.log("about");
  });

  btnMenu.addEventListener("click", () => {
    loadView(createMenuDiv());
    console.log("menu");
  });
});
