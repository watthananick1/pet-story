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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, \"User\"));\nfunction PostList() {\n    _s();\n    const [dataList, setDataList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(q, (querySnapshot)=>{\n            const data = [];\n            querySnapshot.forEach((doc)=>{\n                data.push(doc.data());\n                console.log(doc);\n            });\n            setDataList(data);\n            console.log(data);\n        });\n        return ()=>{\n            unsubscribe();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Post List\"\n            }, void 0, false, {\n                fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            dataList.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                data.f_name,\n                                \" \",\n                                data.l_name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: data.uid\n                        }, void 0, false, {\n                            fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        data.user.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: ite\n                            }, void 0, false, {\n                                fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watthananick/pet-story/components/postList.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(PostList, \"Q8xkRfrPPyoly26OmJCucpuPJ7I=\");\n_c = PostList;\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZ0M7QUFDeEM7QUFFM0MsTUFBTU8sSUFBSUgseURBQUtBLENBQUNELDhEQUFVQSxDQUFDRyxtREFBRUEsRUFBRTtBQUVoQixTQUFTRSxXQUFXOztJQUNqQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1VLGNBQWNOLDhEQUFVQSxDQUFDRSxHQUFHLENBQUNLLGdCQUFrQjtZQUNuRCxNQUFNQyxPQUFPLEVBQUU7WUFDZkQsY0FBY0UsT0FBTyxDQUFDLENBQUNDLE1BQVE7Z0JBQzdCRixLQUFLRyxJQUFJLENBQUNELElBQUlGLElBQUk7Z0JBQ2xCSSxRQUFRQyxHQUFHLENBQUNIO1lBQ2Q7WUFDQUwsWUFBWUc7WUFDWkksUUFBUUMsR0FBRyxDQUFDTDtRQUNkO1FBRUEsT0FBTyxJQUFNO1lBQ1hGO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hYLFNBQVNZLEdBQUcsQ0FBQyxDQUFDUixNQUFLUyxrQkFDbEIsOERBQUNIOztzQ0FDQyw4REFBQ0k7O2dDQUFJVixLQUFLVyxNQUFNO2dDQUFDO2dDQUFFWCxLQUFLWSxNQUFNOzs7Ozs7O3NDQUM5Qiw4REFBQ0M7c0NBQUdiLEtBQUtjLEdBQUc7Ozs7Ozt3QkFDWGQsS0FBS2UsSUFBSSxDQUFDUCxHQUFHLENBQUMsQ0FBQ1EscUJBQ2QsOERBQUNIOzBDQUNFSTs7Ozs7OzttQkFMR1I7Ozs7Ozs7Ozs7O0FBWWxCLENBQUM7R0FuQ3VCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3RMaXN0LnRzeD82YzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2NzLCBvblNuYXBzaG90IH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50QXBwJztcblxuY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdVc2VyJykpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TGlzdCgpIHtcbiAgY29uc3QgW2RhdGFMaXN0LCBzZXREYXRhTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uU25hcHNob3QocSwgKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgIGRhdGEucHVzaChkb2MuZGF0YSgpKTtcbiAgICAgICAgY29uc29sZS5sb2coZG9jKTtcbiAgICAgIH0pO1xuICAgICAgc2V0RGF0YUxpc3QoZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UG9zdCBMaXN0PC9oMT5cbiAgICAgIHtkYXRhTGlzdC5tYXAoKGRhdGEsaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPGgyPntkYXRhLmZfbmFtZX0ge2RhdGEubF9uYW1lfTwvaDI+XG4gICAgICAgICAgPHA+e2RhdGEudWlkfTwvcD5cbiAgICAgICAgICB7ZGF0YS51c2VyLm1hcCgoaXRlbSk9PihcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7aXRlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJvblNuYXBzaG90IiwiZGIiLCJxIiwiUG9zdExpc3QiLCJkYXRhTGlzdCIsInNldERhdGFMaXN0IiwidW5zdWJzY3JpYmUiLCJxdWVyeVNuYXBzaG90IiwiZGF0YSIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwibWFwIiwiaSIsImgyIiwiZl9uYW1lIiwibF9uYW1lIiwicCIsInVpZCIsInVzZXIiLCJpdGVtIiwiaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postList.tsx\n"));

/***/ })

});