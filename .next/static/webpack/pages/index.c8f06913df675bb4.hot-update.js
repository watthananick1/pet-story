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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, \"User\", \"user\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"user\", \"==\"));\nfunction PostList() {\n    _s();\n    const [dataList, setDataList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(q, (querySnapshot)=>{\n            const data = [];\n            querySnapshot.forEach((doc)=>{\n                data.push(doc.data());\n                console.log(doc);\n            });\n            setDataList(data);\n            console.log(data);\n        });\n        return ()=>{\n            unsubscribe();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Post List\"\n            }, void 0, false, {\n                fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            dataList.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                data.f_name,\n                                \" \",\n                                data.l_name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: data.uid\n                        }, void 0, false, {\n                            fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(PostList, \"Q8xkRfrPPyoly26OmJCucpuPJ7I=\");\n_c = PostList;\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZ0M7QUFDeEM7QUFFM0MsTUFBTVEsSUFBSUoseURBQUtBLENBQUNELDhEQUFVQSxDQUFDSSxtREFBRUEsRUFBRSxRQUFRLFNBQVNGLHlEQUFLQSxDQUFDLFFBQVE7QUFFL0MsU0FBU0ksV0FBVzs7SUFDakMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNVyxjQUFjTiw4REFBVUEsQ0FBQ0UsR0FBRyxDQUFDSyxnQkFBa0I7WUFDbkQsTUFBTUMsT0FBTyxFQUFFO1lBQ2ZELGNBQWNFLE9BQU8sQ0FBQyxDQUFDQyxNQUFRO2dCQUM3QkYsS0FBS0csSUFBSSxDQUFDRCxJQUFJRixJQUFJO2dCQUNsQkksUUFBUUMsR0FBRyxDQUFDSDtZQUNkO1lBQ0FMLFlBQVlHO1lBQ1pJLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDZDtRQUVBLE9BQU8sSUFBTTtZQUNYRjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIWCxTQUFTWSxHQUFHLENBQUMsQ0FBQ1IsTUFBS1Msa0JBQ2xCLDhEQUFDSDs7c0NBQ0MsOERBQUNJOztnQ0FBSVYsS0FBS1csTUFBTTtnQ0FBQztnQ0FBRVgsS0FBS1ksTUFBTTs7Ozs7OztzQ0FDOUIsOERBQUNDO3NDQUFHYixLQUFLYyxHQUFHOzs7Ozs7O21CQUZKTDs7Ozs7Ozs7Ozs7QUFPbEIsQ0FBQztHQTlCdUJkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdExpc3QudHN4PzZjOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvY3MsIG9uU25hcHNob3QgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZS9jbGllbnRBcHAnO1xuXG5jb25zdCBxID0gcXVlcnkoY29sbGVjdGlvbihkYiwgJ1VzZXInLCAndXNlcicpLCB3aGVyZShcInVzZXJcIiwgXCI9PVwiLCApKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdExpc3QoKSB7XG4gIGNvbnN0IFtkYXRhTGlzdCwgc2V0RGF0YUxpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KHEsIChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gW107XG4gICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICBkYXRhLnB1c2goZG9jLmRhdGEoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvYyk7XG4gICAgICB9KTtcbiAgICAgIHNldERhdGFMaXN0KGRhdGEpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlBvc3QgTGlzdDwvaDE+XG4gICAgICB7ZGF0YUxpc3QubWFwKChkYXRhLGkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgIDxoMj57ZGF0YS5mX25hbWV9IHtkYXRhLmxfbmFtZX08L2gyPlxuICAgICAgICAgIDxwPntkYXRhLnVpZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwib25TbmFwc2hvdCIsImRiIiwicSIsIlBvc3RMaXN0IiwiZGF0YUxpc3QiLCJzZXREYXRhTGlzdCIsInVuc3Vic2NyaWJlIiwicXVlcnlTbmFwc2hvdCIsImRhdGEiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsIm1hcCIsImkiLCJoMiIsImZfbmFtZSIsImxfbmFtZSIsInAiLCJ1aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/postList.tsx\n"));

/***/ })

});