/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js"() /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    {
      eval(
        '{console.log("webpack");\r\nconst headerTitle = document.createElement("h4");\r\nconst paragraph = document.createElement("p");\r\nconst image = document.createElement("img");\r\nconst contentDiv = document.getElementById("content");\r\n\r\nheaderTitle.textContent = "Restaurant";\r\nparagraph.textContent =\r\n  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam voluptatum quas numquam perspiciatis sequi facere fuga, nihil dignissimos! Incidunt.";\r\nimage.src = "../src/images/imagerestaurant.avif";\r\n\r\ncontentDiv.append(headerTitle);\r\ncontentDiv.append(image);\r\ncontentDiv.append(paragraph);\r\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/index.js?\n}',
      );

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/index.js"]();
  /******/
  /******/
})();
