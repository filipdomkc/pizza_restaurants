"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", process.env.TOKEN, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json(\"Succesfull\");\n        } else {\n            res.status(400).json(\"Wrong Credentials!\");\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBRTVCLE1BQU1DLFVBQVUsQ0FBQ0MsS0FBS0MsTUFBUTtJQUM1QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdKLElBQUlLLElBQUk7UUFDdkMsSUFDRUYsYUFBYUcsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLElBQ3ZDSixhQUFhRSxRQUFRQyxHQUFHLENBQUNFLGNBQWMsRUFDdkM7WUFDQVIsSUFBSVMsU0FBUyxDQUNYLGNBQ0FaLHVEQUFnQixDQUFDLFNBQVNRLFFBQVFDLEdBQUcsQ0FBQ0ssS0FBSyxFQUFFO2dCQUMzQ0MsUUFBUSxLQUFLO2dCQUNiQyxVQUFVO2dCQUNWQyxNQUFNO1lBQ1I7WUFFRmQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN2QixPQUFPO1lBQ0xoQixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0FBQ0g7QUFFQSxpRUFBZWxCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHVzZXJuYW1lID09PSBwcm9jZXNzLmVudi5BRE1JTl9VU0VSTkFNRSAmJlxyXG4gICAgICBwYXNzd29yZCA9PT0gcHJvY2Vzcy5lbnYuQURNSU5fUEFTU1dPUkRcclxuICAgICkge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiLFxyXG4gICAgICAgIGNvb2tpZS5zZXJpYWxpemUoXCJ0b2tlblwiLCBwcm9jZXNzLmVudi5UT0tFTiwge1xyXG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxyXG4gICAgICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXHJcbiAgICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIlN1Y2Nlc2Z1bGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihcIldyb25nIENyZWRlbnRpYWxzIVwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJjb29raWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fVVNFUk5BTUUiLCJBRE1JTl9QQVNTV09SRCIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsIlRPS0VOIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();