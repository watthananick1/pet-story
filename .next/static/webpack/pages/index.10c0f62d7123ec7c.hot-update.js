"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/postList.tsx":
/*!*********************************!*\
  !*** ./components/postList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst postList = (param)=>{\n    let { children  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__.db, \"User\");\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(collectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"f_name\", \"desc\"));\n        const data = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(q, (querySnapshot)=>{\n            setPost(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n        });\n        return data;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(postList, \"VAK5tdJEk0cqnRsmbvM4YDyoQLs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (postList);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDUDtBQUNtQztBQUM1RSxNQUFNUSxXQUFXLFNBQWlEO1FBQWhELEVBQUVDLFNBQVEsRUFBaUM7O0lBQzNELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDQyxnREFBU0EsQ0FBQyxJQUFJO1FBQ1osTUFBTVUsZ0JBQWdCUiw4REFBVUEsQ0FBQ0QsbURBQUVBLEVBQUU7UUFDckMsTUFBTVUsSUFBSU4seURBQUtBLENBQUNLLGVBQWVOLDJEQUFPQSxDQUFDLFVBQVU7UUFFakQsTUFBTVEsT0FBT1QsOERBQVVBLENBQUNRLEdBQUcsQ0FBQ0UsZ0JBQWlCO1lBQzNDSixRQUFRSSxjQUFjQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsTUFBUTtvQkFBQyxHQUFHQSxJQUFJSixJQUFJLEVBQUU7b0JBQUVLLElBQUlELElBQUlDLEVBQUU7Z0JBQUE7UUFDbkU7UUFDQSxPQUFPTDtJQUNULEdBQUcsRUFBRTtJQUNMLHFCQUNBO2tCQUNFLDRFQUFDTTs7Ozs7O0FBS0w7R0FsQk1aO0FBb0JOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdExpc3QudHN4PzZjOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2RifSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBvblNuYXBzaG90LCBvcmRlckJ5LCBxdWVyeSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5jb25zdCBwb3N0TGlzdCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBjb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJVc2VyXCIpO1xuICAgIGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uUmVmLCBvcmRlckJ5KFwiZl9uYW1lXCIsIFwiZGVzY1wiKSk7XG4gICAgXG4gICAgY29uc3QgZGF0YSA9IG9uU25hcHNob3QocSwgKHF1ZXJ5U25hcHNob3QpID0+e1xuICAgICAgc2V0UG9zdChxdWVyeVNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiAoey4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWR9KSkpXG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgPD5cbiAgICA8ZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RMaXN0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJvcmRlckJ5IiwicXVlcnkiLCJwb3N0TGlzdCIsImNoaWxkcmVuIiwicG9zdCIsInNldFBvc3QiLCJjb2xsZWN0aW9uUmVmIiwicSIsImRhdGEiLCJxdWVyeVNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postList.tsx\n"));

/***/ })

});