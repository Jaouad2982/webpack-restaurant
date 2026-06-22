exports.createAboutDiv = function () {
  console.log("about");
  const divAbout = document.createElement("div");
  const paragraph = document.createElement("p");
  const headerTitle = document.createElement("h4");
  headerTitle.textContent = "About";
  paragraph.textContent =
    "paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam voluptatum quas numquam perspiciatis sequi facere fuga, nihil dignissimos! Incidunt.";
  divAbout.append(headerTitle);
  divAbout.append(paragraph);
  return divAbout;
};
