exports.createHomeDiv = function () {
  console.log("home");
  const divHome = document.createElement("div");
  const paragraph = document.createElement("p");
  const headerTitle = document.createElement("h4");
  headerTitle.textContent = "Home";
  paragraph.textContent =
    "paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam voluptatum quas numquam perspiciatis sequi facere fuga, nihil dignissimos! Incidunt.";
  divHome.append(headerTitle);
  divHome.append(paragraph);
  return divHome;
};
