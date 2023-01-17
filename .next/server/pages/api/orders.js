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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    customer: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    address: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    total: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: Number,\n        default: 0\n    },\n    method: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FDckM7SUFDRUcsVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVLElBQUk7UUFDZEMsV0FBVztJQUNiO0lBQ0FDLFNBQVM7UUFDUEosTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RDLFdBQVc7SUFDYjtJQUNBRSxPQUFPO1FBQ0xMLE1BQU1NO1FBQ05KLFVBQVUsSUFBSTtJQUNoQjtJQUNBSyxRQUFRO1FBQ05QLE1BQU1NO1FBQ05FLFNBQVM7SUFDWDtJQUNBQyxRQUFRO1FBQ05ULE1BQU1NO1FBQ05KLFVBQVMsSUFBSTtJQUNmO0FBQ0YsR0FDQTtJQUFFUSxZQUFZLElBQUk7QUFBQztBQUdyQixpRUFBZWQsOERBQXFCLElBQUlBLHFEQUFjLENBQUMsU0FBU0MsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9tb2RlbHMvT3JkZXIuanM/ZWIyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgY3VzdG9tZXI6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWF4bGVuZ3RoOiA2MCxcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1heGxlbmd0aDogMjAwLFxyXG4gICAgfSxcclxuICAgIHRvdGFsOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMCxcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsIE9yZGVyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJPcmRlclNjaGVtYSIsIlNjaGVtYSIsImN1c3RvbWVyIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwiYWRkcmVzcyIsInRvdGFsIiwiTnVtYmVyIiwic3RhdHVzIiwiZGVmYXVsdCIsIm1ldGhvZCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJPcmRlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/mongo */ \"(api)/./util/mongo.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Order */ \"(api)/./models/Order.js\");\n\n\nconst handler = async (req, res)=>{\n    const { method  } = req;\n    await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(orders);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(order);\n        } catch (err1) {\n            res.status(500).json(err1);\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUNGO0FBRTFDLE1BQU1FLFVBQVUsT0FBT0MsS0FBS0MsTUFBUTtJQUNsQyxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRjtJQUVuQixNQUFNSCx1REFBU0E7SUFFZixJQUFJSyxXQUFXLE9BQU87UUFDcEIsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTUwsMERBQVU7WUFDL0JHLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1FBQ3ZCLEVBQUUsT0FBT0ksS0FBSztZQUNaTixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQztRQUN2QjtJQUNGLENBQUM7SUFDRCxJQUFJTCxXQUFXLFFBQVE7UUFDckIsSUFBSTtZQUNGLE1BQU1NLFFBQVEsTUFBTVYsNERBQVksQ0FBQ0UsSUFBSVUsSUFBSTtZQUN6Q1QsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7UUFDdkIsRUFBRSxPQUFPRCxNQUFLO1lBQ1pOLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO1FBQ3ZCO0lBQ0YsQ0FBQztBQUNIO0FBRUEsaUVBQWVSLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vcGFnZXMvYXBpL29yZGVycy9pbmRleC5qcz9jNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29cIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvT3JkZXJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG5cclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgT3JkZXIuZmluZCgpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvcmRlciA9IGF3YWl0IE9yZGVyLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG9yZGVyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIk9yZGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm9yZGVycyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwib3JkZXIiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/index.js\n");

/***/ }),

/***/ "(api)/./util/mongo.js":
/*!***********************!*\
  !*** ./util/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGO_URL;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\r\n * Global is used here to maintain a cached connection across hot reloads\r\n * in development. This prevents connections growing exponentially\r\n * during API Route usage.\r\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7QUFFekMsSUFBSSxDQUFDSCxhQUFhO0lBQ2hCLE1BQU0sSUFBSUksTUFDUix3RUFDRDtBQUNILENBQUM7QUFFRDtBQU9BLElBQUksQ0FBQ0MsUUFBUTtJQUNYQSxTQUFTQyxPQUFPUCxRQUFRLEdBQUc7UUFBRVEsTUFBTSxJQUFJO1FBQUVDLFNBQVMsSUFBSTtJQUFDO0FBQ3pELENBQUM7QUFFRCxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTs7O0lBSWpCLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEM7O1FBR0ZOLE9BQU9HLE9BQU8sR0FBR1Q7WUFDZixPQUFPQTtRQUNUO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRk0sT0FBT0UsSUFBSSxHQUFHLE1BQU1GO0lBQ3RCLEVBQUU7O1FBRUE7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxlQUFlSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi91dGlsL21vbmdvLmpzP2MwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT19VUkxcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKVxyXG59XHJcblxyXG4vKipcclxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xyXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcclxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cclxuICovXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2VcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gbW9uZ29vc2VcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbFxyXG4gICAgdGhyb3cgZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./util/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();