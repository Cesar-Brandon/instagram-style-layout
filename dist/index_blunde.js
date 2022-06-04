/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background-color: #f3f3f3;\\n  font-family: \\\"Montserrat\\\";\\n}\\nbody.dark {\\n  background-color: #141414;\\n}\\nbody.dark a {\\n  color: #fff;\\n}\\nbody.dark p {\\n  color: lightgray;\\n}\\nbody.dark strong {\\n  color: #fff;\\n}\\nbody.dark h1 {\\n  color: #fff;\\n}\\nbody.dark header {\\n  background-color: #000;\\n}\\nbody.dark header #icon-vercel {\\n  filter: invert(100%);\\n}\\nbody.dark header i {\\n  color: #fff;\\n}\\nbody.dark header .search input {\\n  background-color: #2b2b2b;\\n  color: #fff;\\n}\\nbody.dark header .icon-user ul {\\n  background-color: #000;\\n  box-shadow: none;\\n  border: 1px #4b4b4b solid;\\n}\\nbody.dark header .icon-user ul li i,\\nbody.dark header .icon-user ul li a {\\n  color: #fff;\\n}\\nbody.dark header .icon-user ul li:hover {\\n  background-color: #2b2b2b;\\n}\\nbody.dark header .icon-user ul .li-sign-off {\\n  border-top: 1px #2b2b2b solid;\\n}\\nbody.dark .profile-user .profile-info button {\\n  border: 1px #4b4b4b solid;\\n}\\nbody.dark .options {\\n  border-top: 1px #4b4b4b solid;\\n}\\nbody.dark .options a:active {\\n  color: #fff;\\n}\\n\\nheader {\\n  width: 100%;\\n  height: 3rem;\\n  top: 0;\\n  background-color: #fff;\\n  display: grid;\\n  align-items: center;\\n  justify-items: center;\\n  position: fixed;\\n  z-index: 3;\\n}\\nheader nav {\\n  width: 70%;\\n  display: grid;\\n}\\nheader nav ul {\\n  display: grid;\\n  grid-template-columns: 1fr minmax(5rem, 65rem) 1fr 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  gap: 1.5rem;\\n  align-items: center;\\n  justify-items: center;\\n}\\nheader nav li {\\n  list-style: none;\\n}\\nheader nav img {\\n  width: 2rem;\\n  height: 2rem;\\n  border-radius: 50%;\\n}\\nheader nav i {\\n  font-size: 25px;\\n  cursor: pointer;\\n}\\nheader nav .li-search {\\n  width: 100%;\\n}\\nheader nav .search input {\\n  width: 98%;\\n  height: 2rem;\\n  background-color: #ebebeb;\\n  border: none;\\n  border-radius: 50px;\\n  outline: none;\\n  cursor: text;\\n  padding-left: 15px;\\n  font-size: 15px;\\n  font-weight: 600;\\n}\\nheader nav .icon-user {\\n  cursor: pointer;\\n}\\nheader nav .icon-user ul {\\n  position: absolute;\\n  width: 12rem;\\n  height: 13rem;\\n  top: 3rem;\\n  right: 18rem;\\n  background-color: #fff;\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: 1px 1px 5px 1px lightgray;\\n  border-radius: 10px;\\n  transition: 0.2s;\\n  gap: 0rem;\\n  visibility: hidden;\\n}\\nheader nav .icon-user ul li {\\n  box-sizing: content-box;\\n  width: 94%;\\n  height: 100%;\\n  padding-left: 1rem;\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n}\\nheader nav .icon-user ul li i {\\n  font-size: 20px;\\n  color: #141414;\\n}\\nheader nav .icon-user ul li a {\\n  font-size: 15px;\\n  color: #000;\\n  text-decoration: none;\\n}\\nheader nav .icon-user ul li:hover {\\n  background-color: lightgray;\\n}\\nheader nav .icon-user ul .li-sign-off {\\n  border-top: 1px lightgray solid;\\n}\\nheader nav .icon-user:hover > ul {\\n  visibility: visible;\\n  top: 3.2rem;\\n}\\n\\n.profile-user {\\n  width: 70%;\\n  min-height: 20rem;\\n  max-height: 80rem;\\n  margin: 0 auto;\\n  margin-top: 2.5rem;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(10rem, 30rem));\\n  grid-template-rows: auto;\\n}\\n.profile-user .profile-picture {\\n  margin: 2rem auto;\\n  height: 10rem;\\n  width: 10rem;\\n}\\n.profile-user .profile-picture img {\\n  border-radius: 50%;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  overflow: hidden;\\n}\\n.profile-user .profile-info {\\n  margin-top: 3rem;\\n}\\n.profile-user .profile-info .profile-name {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.profile-user .profile-info .profile-name h1 {\\n  font-size: 30px;\\n  font-weight: 400;\\n}\\n.profile-user .profile-info .profile-name button {\\n  border-radius: 5px;\\n  width: 10rem;\\n  height: 2rem;\\n  border: none;\\n  background-color: #000;\\n  color: #fff;\\n  margin: 0 0 2rem 4rem;\\n}\\n.profile-user .profile-info .profile-statistics {\\n  display: flex;\\n  gap: 2rem;\\n  margin-bottom: 2rem;\\n}\\n.profile-user .profile-info .profile-description {\\n  margin-bottom: 2rem;\\n}\\n\\n.options {\\n  max-width: 70%;\\n  height: 3rem;\\n  margin: 0 auto;\\n  border-top: 2px lightgray solid;\\n}\\n.options ul {\\n  margin-top: 0.8rem;\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n.options ul li {\\n  list-style: none;\\n}\\n.options ul a {\\n  text-decoration: none;\\n  color: grey;\\n  transition: 0.2s;\\n}\\n.options ul a:active {\\n  font-weight: 600;\\n  color: #000;\\n}\\n\\n.section-galery {\\n  width: 70%;\\n  height: auto;\\n  margin: 0 auto;\\n}\\n.section-galery div {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(10rem, 20rem));\\n  grid-template-rows: auto;\\n  gap: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n#figure-views {\\n  width: 20rem;\\n  height: 20rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n#figure-views img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  cursor: pointer;\\n  transition: 0.2s;\\n}\\n#figure-views img:hover {\\n  filter: brightness(70%);\\n}\\n#figure-views video {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  cursor: pointer;\\n  transition: 0.2s;\\n}\\n#figure-views video:hover {\\n  filter: brightness(70%);\\n}\\n#figure-views .container-statistics {\\n  cursor: pointer;\\n  position: absolute;\\n  width: 10%;\\n  height: 2rem;\\n  display: flex;\\n  align-items: center;\\n  opacity: 0;\\n  visibility: hidden;\\n}\\n#figure-views .container-statistics .liked,\\n#figure-views .container-statistics .comments {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n#figure-views .container-statistics i {\\n  font-size: 16px;\\n  color: #fff;\\n}\\n#figure-views .container-statistics p {\\n  font-size: 16px;\\n  color: #fff;\\n  font-weight: 600;\\n}\\n#figure-views:hover > .container-statistics {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n\\n#card-label {\\n  position: absolute;\\n  left: 40%;\\n  width: 70%;\\n  height: 30rem;\\n  display: grid;\\n  align-items: center;\\n  justify-content: center;\\n  margin: 0 auto;\\n}\\n#card-label .container {\\n  width: 25rem;\\n  height: 10rem;\\n  border: 2px grey dashed;\\n  border-radius: 10px;\\n  display: grid;\\n  align-items: center;\\n  justify-items: center;\\n}\\n#card-label .container p {\\n  position: absolute;\\n  margin: 0 auto;\\n  color: grey;\\n  font-weight: 600;\\n}\\n\\n#open-page-image {\\n  display: none;\\n}\\n\\n#page-show-image {\\n  z-index: 4;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  visibility: hidden;\\n}\\n#page-show-image .box-image {\\n  max-width: 80rem;\\n  max-height: 55rem;\\n  background-color: #fff;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  border-radius: 20px;\\n  overflow: hidden;\\n  margin: 1rem;\\n}\\n#page-show-image .box-image .image {\\n  display: flex;\\n  overflow: hidden;\\n  margin: 0;\\n}\\n#page-show-image .box-image .image div {\\n  display: flex;\\n  margin: 0;\\n}\\n#page-show-image .box-image .image #big-image {\\n  margin: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n#page-show-image .box-image .description {\\n  display: flex;\\n}\\n#page-show-image .box-image .description p {\\n  width: 100%;\\n}\\n#page-show-image .exit-page-image i {\\n  position: absolute;\\n  top: 2rem;\\n  right: 2rem;\\n  font-size: 30px;\\n  color: #fff;\\n  cursor: pointer;\\n}\\n\\n#open-page-image:checked ~ #page-show-image {\\n  visibility: visible;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Brandon/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Brandon/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Brandon/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/views/labels.html":
/*!*******************************!*\
  !*** ./src/views/labels.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div id=\\\"card-label\\\">\\r\\n  <div class=\\\"container\\\">\\r\\n    <p>No tags at the moment...</p>\\r\\n  </div>\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://Brandon/./src/views/labels.html?");

/***/ }),

/***/ "./src/views/publications.html":
/*!*************************************!*\
  !*** ./src/views/publications.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/0bf250c6b7d3d9e38aae15730a099ea5.jpg */ \"./src/storage/publications/0bf250c6b7d3d9e38aae15730a099ea5.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/02.jpg */ \"./src/storage/publications/02.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/03.jpg */ \"./src/storage/publications/03.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/04.jpg */ \"./src/storage/publications/04.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/05.jpg */ \"./src/storage/publications/05.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/06.jpg */ \"./src/storage/publications/06.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/07.jpg */ \"./src/storage/publications/07.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/08.jpg */ \"./src/storage/publications/08.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/publications/09.jpg */ \"./src/storage/publications/09.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar code = \"<input type=\\\"checkbox\\\" id=\\\"open-page-image\\\" />\\r\\n\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img\\r\\n    id=\\\"card-show-image\\\"\\r\\n    src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\r\\n    alt=\\\"\\\"\\r\\n  />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n<label for=\\\"open-page-image\\\" id=\\\"figure-views\\\">\\r\\n  <img id=\\\"card-show-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</label>\\r\\n\\r\\n<div id=\\\"page-show-image\\\">\\r\\n  <div class=\\\"box-image\\\">\\r\\n    <div class=\\\"image\\\" id=\\\"show-big-image\\\"></div>\\r\\n    <div class=\\\"description\\\">\\r\\n      <p>\\r\\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,\\r\\n        voluptatibus rem totam, dolore obcaecati aut nulla sint alias sed nam\\r\\n        cum quidem facilis consequatur, ullam quaerat. Totam ipsa impedit\\r\\n        exercitationem?\\r\\n      </p>\\r\\n    </div>\\r\\n  </div>\\r\\n  <label for=\\\"open-page-image\\\" class=\\\"exit-page-image\\\">\\r\\n    <i class=\\\"fa-solid fa-xmark\\\"></i>\\r\\n  </label>\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://Brandon/./src/views/publications.html?");

/***/ }),

/***/ "./src/views/saved.html":
/*!******************************!*\
  !*** ./src/views/saved.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/saved/01.jpg */ \"./src/storage/saved/01.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/saved/02.jpg */ \"./src/storage/saved/02.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/saved/03.jpg */ \"./src/storage/saved/03.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<figure id=\\\"figure-views\\\">\\r\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</figure>\\r\\n<figure id=\\\"figure-views\\\">\\r\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</figure>\\r\\n<figure id=\\\"figure-views\\\">\\r\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" />\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>30,8k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>243</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</figure>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://Brandon/./src/views/saved.html?");

/***/ }),

/***/ "./src/views/videos.html":
/*!*******************************!*\
  !*** ./src/views/videos.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../storage/videos/8199e0798584ba4be2d90d086597e8e5.mp4 */ \"./src/storage/videos/8199e0798584ba4be2d90d086597e8e5.mp4\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<figure id=\\\"figure-views\\\">\\r\\n  <video\\r\\n    src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\r\\n    autoplay\\r\\n    preload\\r\\n    loop\\r\\n    muted\\r\\n  ></video>\\r\\n  <div class=\\\"container-statistics\\\">\\r\\n    <div class=\\\"liked\\\">\\r\\n      <i class=\\\"fa-solid fa-fire\\\"></i>\\r\\n      <p>33.4k</p>\\r\\n    </div>\\r\\n    <div class=\\\"comments\\\">\\r\\n      <i class=\\\"fa-solid fa-comment\\\"></i>\\r\\n      <p>120</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</figure>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://Brandon/./src/views/videos.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://Brandon/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Brandon/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Brandon/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Brandon/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Brandon/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Brandon/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Brandon/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Brandon/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pages\": () => (/* binding */ pages)\n/* harmony export */ });\n/* harmony import */ var _controllers_plublications_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/plublications.controller */ \"./src/controllers/plublications.controller.js\");\n/* harmony import */ var _controllers_videos_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/videos.controller */ \"./src/controllers/videos.controller.js\");\n/* harmony import */ var _controllers_saved_controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/saved.controllers */ \"./src/controllers/saved.controllers.js\");\n/* harmony import */ var _controllers_labels_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/labels.controller */ \"./src/controllers/labels.controller.js\");\n\r\n\r\n\r\n\r\n\r\nconst pages = {\r\n  publications: _controllers_plublications_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  videos: _controllers_videos_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  saved: _controllers_saved_controllers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  labels: _controllers_labels_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://Brandon/./src/controllers/index.js?");

/***/ }),

/***/ "./src/controllers/labels.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/labels.controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_labels_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/labels.html */ \"./src/views/labels.html\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const divElement = document.createElement(\"div\");\r\n  divElement.innerHTML = _views_labels_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://Brandon/./src/controllers/labels.controller.js?");

/***/ }),

/***/ "./src/controllers/plublications.controller.js":
/*!*****************************************************!*\
  !*** ./src/controllers/plublications.controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_publications_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/publications.html */ \"./src/views/publications.html\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const divElement = document.createElement(\"div\");\r\n  divElement.innerHTML = _views_publications_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n  const figure = divElement.querySelector(\"#figure-views\");\r\n  const cardImage = divElement.querySelector(\"#card-show-image\");\r\n\r\n  const boxImage = divElement.querySelector(\"#show-big-image\");\r\n  let imageDivElement = document.createElement(\"div\");\r\n\r\n  figure.addEventListener(\"click\", () => {\r\n    const bigImage = `\r\n\t\t<img id=\"big-image\" src=\"${cardImage.src}\" alt=\"\" />\r\n\t\t\t\t\t`;\r\n    imageDivElement.innerHTML = bigImage;\r\n    boxImage.appendChild(imageDivElement);\r\n  });\r\n\r\n  return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://Brandon/./src/controllers/plublications.controller.js?");

/***/ }),

/***/ "./src/controllers/saved.controllers.js":
/*!**********************************************!*\
  !*** ./src/controllers/saved.controllers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_saved_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/saved.html */ \"./src/views/saved.html\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const divElement = document.createElement(\"div\");\r\n  divElement.innerHTML = _views_saved_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://Brandon/./src/controllers/saved.controllers.js?");

/***/ }),

/***/ "./src/controllers/videos.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/videos.controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _views_videos_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/videos.html */ \"./src/views/videos.html\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const divElement = document.createElement(\"div\");\r\n  divElement.innerHTML = _views_videos_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  return divElement;\r\n});\r\n\n\n//# sourceURL=webpack://Brandon/./src/controllers/videos.controller.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _routes_index_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/index.routes */ \"./src/routes/index.routes.js\");\n\r\n\r\n\r\n(0,_routes_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash);\r\nwindow.addEventListener(\"hashchange\", () => {\r\n  (0,_routes_index_routes__WEBPACK_IMPORTED_MODULE_1__.router)(window.location.hash);\r\n});\r\n\r\n//darkmode\r\n\r\nconst dark = document.querySelector(\"#icon-dark\");\r\nconst body = document.querySelector(\"body\");\r\n\r\nload();\r\n\r\ndark.addEventListener(\"click\", (e) => {\r\n  body.classList.toggle(\"dark\");\r\n  store(body.classList.contains(\"dark\"));\r\n});\r\n\r\nfunction load() {\r\n  const darkmode = localStorage.getItem(\"dark\");\r\n  if (!darkmode) {\r\n    store(\"false\");\r\n  } else if (darkmode == \"true\") {\r\n    body.classList.add(\"dark\");\r\n  }\r\n}\r\n\r\nfunction store(value) {\r\n  localStorage.setItem(\"dark\", value);\r\n}\r\n\n\n//# sourceURL=webpack://Brandon/./src/main.js?");

/***/ }),

/***/ "./src/routes/index.routes.js":
/*!************************************!*\
  !*** ./src/routes/index.routes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/index */ \"./src/controllers/index.js\");\n\r\n\r\nlet content = document.getElementById(\"root\");\r\n\r\nconst router = (route) => {\r\n  content.innerHTML = \"\";\r\n  switch (route) {\r\n    case \"#/publications\": {\r\n      return content.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.publications());\r\n    }\r\n    case \"#/videos\": {\r\n      return content.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.videos());\r\n    }\r\n    case \"#/saved\": {\r\n      return content.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.saved());\r\n    }\r\n    case \"#/labels\": {\r\n      return content.appendChild(_controllers_index__WEBPACK_IMPORTED_MODULE_0__.pages.labels());\r\n    }\r\n    default:\r\n      return console.log(\"404\");\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://Brandon/./src/routes/index.routes.js?");

/***/ }),

/***/ "./src/storage/publications/02.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/02.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2965bfd50cdaeb250c7f.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/02.jpg?");

/***/ }),

/***/ "./src/storage/publications/03.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/03.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2a883c53540fa80c3f8.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/03.jpg?");

/***/ }),

/***/ "./src/storage/publications/04.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/04.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3dd9c3aed0f788ffba33.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/04.jpg?");

/***/ }),

/***/ "./src/storage/publications/05.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/05.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4150115c751707d45478.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/05.jpg?");

/***/ }),

/***/ "./src/storage/publications/06.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/06.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26a65331fb19fb246a23.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/06.jpg?");

/***/ }),

/***/ "./src/storage/publications/07.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/07.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfd7d03bde538a9a7e37.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/07.jpg?");

/***/ }),

/***/ "./src/storage/publications/08.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/08.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"570f1bc49a60e7652b7c.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/08.jpg?");

/***/ }),

/***/ "./src/storage/publications/09.jpg":
/*!*****************************************!*\
  !*** ./src/storage/publications/09.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04c022f51c0a8068d5cc.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/09.jpg?");

/***/ }),

/***/ "./src/storage/publications/0bf250c6b7d3d9e38aae15730a099ea5.jpg":
/*!***********************************************************************!*\
  !*** ./src/storage/publications/0bf250c6b7d3d9e38aae15730a099ea5.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c37bc91dd3d93a2b88d.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/publications/0bf250c6b7d3d9e38aae15730a099ea5.jpg?");

/***/ }),

/***/ "./src/storage/saved/01.jpg":
/*!**********************************!*\
  !*** ./src/storage/saved/01.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"296f810dab236cf60423.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/saved/01.jpg?");

/***/ }),

/***/ "./src/storage/saved/02.jpg":
/*!**********************************!*\
  !*** ./src/storage/saved/02.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7ce6f7d3a3c8c5586ab.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/saved/02.jpg?");

/***/ }),

/***/ "./src/storage/saved/03.jpg":
/*!**********************************!*\
  !*** ./src/storage/saved/03.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c40ee14feae929132404.jpg\";\n\n//# sourceURL=webpack://Brandon/./src/storage/saved/03.jpg?");

/***/ }),

/***/ "./src/storage/videos/8199e0798584ba4be2d90d086597e8e5.mp4":
/*!*****************************************************************!*\
  !*** ./src/storage/videos/8199e0798584ba4be2d90d086597e8e5.mp4 ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd8d0f632abbbdb49464.mp4\";\n\n//# sourceURL=webpack://Brandon/./src/storage/videos/8199e0798584ba4be2d90d086597e8e5.mp4?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;