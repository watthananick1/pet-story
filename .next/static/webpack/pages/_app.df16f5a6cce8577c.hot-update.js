"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Context/Authcontext.tsx":
/*!*********************************!*\
  !*** ./Context/Authcontext.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": function() { return /* binding */ AuthContextProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(firebase);\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\n_s(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst AuthContextProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: null,\n        uid: null\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n            if (user) {\n                setUser({\n                    email: user.email,\n                    uid: user.uid\n                });\n            } else {\n                setUser({\n                    email: null,\n                    uid: null\n                });\n            }\n        });\n        setLoading(false);\n        return ()=>unsubscribe();\n    }, []);\n    const signUp = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);\n    };\n    const logIn = (email, password)=>{\n        console.log(1);\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);\n    };\n    const logInGoogle = (provider)=>{\n        console.log(2);\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(auth, provider);\n    };\n    const logOut = async ()=>{\n        setUser({\n            email: null,\n            uid: null\n        });\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signUp,\n            logIn,\n            logInGoogle,\n            logOut\n        },\n        children: loading ? null : children\n    }, void 0, false, {\n        fileName: \"/Users/watthananick/pet-story/Context/Authcontext.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AuthContextProvider, \"Lwq9yDOWd3l2teqcfPuYMSJElzw=\");\n_c = AuthContextProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L0F1dGhjb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThFO0FBTWhEO0FBQ1M7QUFHdkMsTUFBTVcsT0FBT0Qsc0RBQU9BLENBQUNFO0FBTXJCLE1BQU1DLDRCQUFjWixvREFBYUEsQ0FBQyxDQUFDO0FBRTVCLE1BQU1hLFVBQVUsSUFBTVo7O0lBQUFBLE9BQUFBLGlEQUFVQSxDQUFNVztBQUFXLEVBQUU7R0FBN0NDO0FBRU4sTUFBTUMsc0JBQXNCLFNBQWlEO1FBQWhELEVBQUVDLFNBQVEsRUFBaUM7O0lBQzdFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBVztRQUFFZSxPQUFPLElBQUk7UUFBRUMsS0FBSyxJQUFJO0lBQUM7SUFDcEUsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBVSxJQUFJO0lBRXBERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTW9CLGNBQWNsQixpRUFBa0JBLENBQUNNLE1BQUssQ0FBQ00sT0FBUztZQUNwRCxJQUFJQSxNQUFNO2dCQUNSQyxRQUFRO29CQUNOQyxPQUFPRixLQUFLRSxLQUFLO29CQUNqQkMsS0FBS0gsS0FBS0csR0FBRztnQkFDZjtZQUNGLE9BQU87Z0JBQ0xGLFFBQVE7b0JBQUVDLE9BQU8sSUFBSTtvQkFBRUMsS0FBSyxJQUFJO2dCQUFDO1lBQ25DLENBQUM7UUFDSDtRQUNBRSxXQUFXLEtBQUs7UUFFaEIsT0FBTyxJQUFNQztJQUNmLEdBQUcsRUFBRTtJQUVMLE1BQU1DLFNBQVMsQ0FBQ0wsT0FBZU0sV0FBcUI7UUFDbEQsT0FBT25CLDZFQUE4QkEsQ0FBQ0ssTUFBTVEsT0FBT007SUFDckQ7SUFFQSxNQUFNQyxRQUFRLENBQUNQLE9BQWVNLFdBQXFCO1FBQ2pERSxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPckIseUVBQTBCQSxDQUFDSSxNQUFNUSxPQUFPTTtJQUNqRDtJQUVBLE1BQU1JLGNBQWMsQ0FBQ0MsV0FBaUI7UUFDcENILFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9wQiw4REFBZUEsQ0FBQ0csTUFBTW1CO0lBQy9CO0lBRUEsTUFBTUMsU0FBUyxVQUFZO1FBQ3pCYixRQUFRO1lBQUVDLE9BQU8sSUFBSTtZQUFFQyxLQUFLLElBQUk7UUFBQztRQUNqQyxNQUFNWCxzREFBT0EsQ0FBQ0U7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0UsWUFBWW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEI7WUFBTU87WUFBUUU7WUFBT0c7WUFBYUU7UUFBTztrQkFDckVWLFVBQVUsSUFBSSxHQUFHTCxRQUFROzs7Ozs7QUFHaEMsRUFBRTtJQTVDV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29udGV4dC9BdXRoY29udGV4dC50c3g/ZDY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtvbkF1dGhTdGF0ZUNoYW5nZWQsXG5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbnNpZ25JbldpdGhQb3B1cCxcbnNpZ25PdXQsIFxuZ2V0QXV0aH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi4vZmlyZWJhc2UvY2xpZW50QXBwXCI7XG5cblxuY29uc3QgYXV0aCA9IGdldEF1dGgoZmlyZWJhc2UpO1xuaW50ZXJmYWNlIFVzZXJUeXBlIHtcbiAgZW1haWw6IHN0cmluZyB8IG51bGw7XG4gIHVpZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0PGFueT4oQXV0aENvbnRleHQpO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJUeXBlPih7IGVtYWlsOiBudWxsLCB1aWQ6IG51bGwgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyKHsgZW1haWw6IG51bGwsIHVpZDogbnVsbCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2lnblVwID0gKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG4gIH07XG5cbiAgY29uc3QgbG9nSW4gPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKDEpO1xuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xuICB9O1xuICBcbiAgY29uc3QgbG9nSW5Hb29nbGUgPSAocHJvdmlkZXI6YW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coMik7XG4gICAgcmV0dXJuIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcik7XG4gIH07XG5cbiAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFVzZXIoeyBlbWFpbDogbnVsbCwgdWlkOiBudWxsIH0pO1xuICAgIGF3YWl0IHNpZ25PdXQoYXV0aCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2lnblVwLCBsb2dJbiwgbG9nSW5Hb29nbGUsIGxvZ091dCB9fT5cbiAgICAgIHtsb2FkaW5nID8gbnVsbCA6IGNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJnZXRBdXRoIiwiYXV0aCIsImZpcmViYXNlIiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoIiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJlbWFpbCIsInVpZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5zdWJzY3JpYmUiLCJzaWduVXAiLCJwYXNzd29yZCIsImxvZ0luIiwiY29uc29sZSIsImxvZyIsImxvZ0luR29vZ2xlIiwicHJvdmlkZXIiLCJsb2dPdXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/Authcontext.tsx\n"));

/***/ })

});