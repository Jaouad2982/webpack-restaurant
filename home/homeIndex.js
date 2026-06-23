import imagerestaurant from "../src/images/imagerestaurant.avif";
function createHomeDiv() {
  console.log("home");
  const buttonHome = document.createElement("button");
  // const divBlockHeader = document.createElement("div");
  // divBlockHeader.classList.add("divBlockHeader");
  const divHome = document.createElement("div");
  divHome.classList.add("divHomeClass");
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraphStyle");
  const headerTitle = document.createElement("h4");
  headerTitle.classList.add("titleStyle");
  const image = document.createElement("img");
  headerTitle.textContent = "Home";
  paragraph.textContent =
    "paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam voluptatum quas numquam perspiciatis sequi facere fuga, nihil dignissimos! Incidunt.";
  image.src = imagerestaurant;
  buttonHome.textContent = "Click to Order";
  buttonHome.classList.add("buttonHome");
  divHome.append(paragraph);
  divHome.append(image);
  divHome.append(headerTitle);
  divHome.append(buttonHome);
  return divHome;
}

export { createHomeDiv };
