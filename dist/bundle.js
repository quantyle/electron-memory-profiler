/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/electron.js":
/*!****************************!*\
  !*** ./public/electron.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const electron = __webpack_require__(/*! electron */ \"electron\");\nconst { app, BrowserWindow } = electron;\nconst path = __webpack_require__(/*! path */ \"path\");\nconst isDev = __webpack_require__(/*! electron-is-dev */ \"electron-is-dev\");\n\nlet mainWindow = null;\napp.on('ready', createWindow);\napp.on('window-all-closed', function () {\n  if (process.platform !== 'darwin') {\n    app.quit()\n  }\n});\napp.on('activate', function () {\n  if (mainWindow === null) {\n    createWindow()\n  }\n});\nfunction createWindow() {\n  mainWindow = new BrowserWindow({\n    width: 1024,\n    height: 1024,\n    title: \"Electron Memory Profiler\"\n  });\n  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);\n  mainWindow.on('closed', function () {\n    mainWindow = null\n  })\n  mainWindow.on('page-title-updated', function (e) {\n    e.preventDefault()\n  });\n}\n\n//# sourceURL=webpack://electron-memory-profiler/./public/electron.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "electron-is-dev":
/*!**********************************!*\
  !*** external "electron-is-dev" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron-is-dev");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/electron.js");
/******/ 	
/******/ })()
;