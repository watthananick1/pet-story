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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Context/Authcontext.tsx":
/*!*********************************!*\
  !*** ./Context/Authcontext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.app);\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\nconst AuthContextProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: null,\n        uid: null\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n            if (user) {\n                setUser({\n                    email: user.email,\n                    uid: user.uid\n                });\n            } else {\n                setUser({\n                    email: null,\n                    uid: null\n                });\n            }\n        });\n        setLoading(false);\n        return ()=>unsubscribe();\n    }, []);\n    const signUp = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);\n    };\n    const logIn = (email, password)=>{\n        console.log(1);\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);\n    };\n    const logInGoogle = (provider)=>{\n        console.log(2);\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(auth, provider);\n    };\n    const logOut = async ()=>{\n        setUser({\n            email: null,\n            uid: null\n        });\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            signUp,\n            logIn,\n            logInGoogle,\n            logOut\n        },\n        children: loading ? null : children\n    }, void 0, false, {\n        fileName: \"/Users/watthananick/pet-story/Context/Authcontext.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L0F1dGhjb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFNaEQ7QUFDWTtBQUcxQyxNQUFNWSxPQUFPRixzREFBT0EsQ0FBQ0Msb0RBQUdBO0FBTXhCLE1BQU1FLDRCQUFjWixvREFBYUEsQ0FBQyxDQUFDO0FBRTVCLE1BQU1hLFVBQVUsSUFBTVosaURBQVVBLENBQU1XLGFBQWE7QUFFbkQsTUFBTUUsc0JBQXNCLENBQUMsRUFBRUMsU0FBUSxFQUFpQyxHQUFLO0lBQ2xGLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBVztRQUFFZSxPQUFPLElBQUk7UUFBRUMsS0FBSyxJQUFJO0lBQUM7SUFDcEUsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBVSxJQUFJO0lBRXBERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTW9CLGNBQWNsQixpRUFBa0JBLENBQUNPLE1BQUssQ0FBQ0ssT0FBUztZQUNwRCxJQUFJQSxNQUFNO2dCQUNSQyxRQUFRO29CQUNOQyxPQUFPRixLQUFLRSxLQUFLO29CQUNqQkMsS0FBS0gsS0FBS0csR0FBRztnQkFDZjtZQUNGLE9BQU87Z0JBQ0xGLFFBQVE7b0JBQUVDLE9BQU8sSUFBSTtvQkFBRUMsS0FBSyxJQUFJO2dCQUFDO1lBQ25DLENBQUM7UUFDSDtRQUNBRSxXQUFXLEtBQUs7UUFFaEIsT0FBTyxJQUFNQztJQUNmLEdBQUcsRUFBRTtJQUVMLE1BQU1DLFNBQVMsQ0FBQ0wsT0FBZU0sV0FBcUI7UUFDbEQsT0FBT25CLDZFQUE4QkEsQ0FBQ00sTUFBTU8sT0FBT007SUFDckQ7SUFFQSxNQUFNQyxRQUFRLENBQUNQLE9BQWVNLFdBQXFCO1FBQ2pERSxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPckIseUVBQTBCQSxDQUFDSyxNQUFNTyxPQUFPTTtJQUNqRDtJQUVBLE1BQU1JLGNBQWMsQ0FBQ0MsV0FBaUI7UUFDcENILFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9wQiw4REFBZUEsQ0FBQ0ksTUFBTWtCO0lBQy9CO0lBRUEsTUFBTUMsU0FBUyxVQUFZO1FBQ3pCYixRQUFRO1lBQUVDLE9BQU8sSUFBSTtZQUFFQyxLQUFLLElBQUk7UUFBQztRQUNqQyxNQUFNWCxzREFBT0EsQ0FBQ0c7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0MsWUFBWW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEI7WUFBTU87WUFBUUU7WUFBT0c7WUFBYUU7UUFBTztrQkFDckVWLFVBQVUsSUFBSSxHQUFHTCxRQUFROzs7Ozs7QUFHaEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BldC1zdG9yeS8uL0NvbnRleHQvQXV0aGNvbnRleHQudHN4P2Q2NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7b25BdXRoU3RhdGVDaGFuZ2VkLFxuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG5zaWduSW5XaXRoUG9wdXAsXG5zaWduT3V0LCBcbmdldEF1dGh9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge2FwcH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudEFwcFwiO1xuXG5cbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5pbnRlcmZhY2UgVXNlclR5cGUge1xuICBlbWFpbDogc3RyaW5nIHwgbnVsbDtcbiAgdWlkOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQ8YW55PihBdXRoQ29udGV4dCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclR5cGU+KHsgZW1haWw6IG51bGwsIHVpZDogbnVsbCB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICB1aWQ6IHVzZXIudWlkLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXIoeyBlbWFpbDogbnVsbCwgdWlkOiBudWxsIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaWduVXAgPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiAgfTtcblxuICBjb25zdCBsb2dJbiA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coMSk7XG4gICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG4gIH07XG4gIFxuICBjb25zdCBsb2dJbkdvb2dsZSA9IChwcm92aWRlcjphbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZygyKTtcbiAgICByZXR1cm4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKTtcbiAgfTtcblxuICBjb25zdCBsb2dPdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0VXNlcih7IGVtYWlsOiBudWxsLCB1aWQ6IG51bGwgfSk7XG4gICAgYXdhaXQgc2lnbk91dChhdXRoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzaWduVXAsIGxvZ0luLCBsb2dJbkdvb2dsZSwgbG9nT3V0IH19PlxuICAgICAge2xvYWRpbmcgPyBudWxsIDogY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbk91dCIsImdldEF1dGgiLCJhcHAiLCJhdXRoIiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoIiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJlbWFpbCIsInVpZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5zdWJzY3JpYmUiLCJzaWduVXAiLCJwYXNzd29yZCIsImxvZ0luIiwiY29uc29sZSIsImxvZyIsImxvZ0luR29vZ2xlIiwicHJvdmlkZXIiLCJsb2dPdXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/Authcontext.tsx\n");

/***/ }),

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_Authcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/Authcontext */ \"./Context/Authcontext.tsx\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ \"react-bootstrap/Nav\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Offcanvas */ \"react-bootstrap/Offcanvas\");\n/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Context_Authcontext__WEBPACK_IMPORTED_MODULE_2__]);\n_Context_Authcontext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst navbarPage = ({ children  })=>{\n    const { user , logOut  } = (0,_Context_Authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const menuItems = [\n    //   {\n    //     id: 1,\n    //     name: \"Home\",\n    //     link: \"/\",\n    //   },\n    //   {\n    //     id: 2,\n    //     name: \"Login\",\n    //     link: \"/login\",\n    //   },\n    //   {\n    //     id: 3,\n    //     name: \"Sign Up\",\n    //     link: \"/signup\",\n    //   },\n    // ];\n    const handleLogout = async ()=>{\n        try {\n            await logOut();\n            router.push(\"/login\");\n        } catch (error) {\n            console.log(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !user.uid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default()), {\n                    bg: \"light\",\n                    expand: \"md\",\n                    className: \"mb-3\",\n                    fixed: \"top\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        fluid: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default().Brand), {\n                                className: \"Brand\",\n                                href: \"/\",\n                                children: \"Pet story\"\n                            }, void 0, false, {\n                                fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default().Toggle), {\n                                \"aria-controls\": `offcanvasNavbar-expand-md`\n                            }, void 0, false, {\n                                fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default().Offcanvas), {\n                                id: `offcanvasNavbar-expand-md`,\n                                \"aria-labelledby\": `offcanvasNavbarLabel-expand-md`,\n                                placement: \"end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_8___default().Header), {\n                                        closeButton: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_8___default().Title), {\n                                            id: `offcanvasNavbarLabel-expand-md`,\n                                            children: \"Offcanvas\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_8___default().Body), {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            className: \"justify-content-end flex-grow-1 pe-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                    className: \"d-flex center\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default().Control), {\n                                                            type: \"search\",\n                                                            placeholder: \"Search\",\n                                                            className: \"me-2\",\n                                                            \"aria-label\": \"Search\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 23\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                            variant: \"outline-success\",\n                                                            children: \"Search\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default().Link), {\n                                                    href: \"/\",\n                                                    children: \"Home\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default().Link), {\n                                                    onClick: handleLogout,\n                                                    children: \"Logout\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/watthananick/pet-story/components/navbar.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false),\n            children\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNTO0FBQ0w7QUFDTTtBQUNWO0FBQ0Y7QUFDTTtBQUNNO0FBRWxELE1BQU1RLGFBQWEsQ0FBQyxFQUFFQyxTQUFRLEVBQWlDLEdBQUs7SUFDbEUsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRSxHQUFHViw2REFBT0E7SUFDaEMsTUFBTVcsU0FBU1osc0RBQVNBO0lBRXhCLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxLQUFLO0lBRUwsTUFBTWEsZUFBZSxVQUFZO1FBQy9CLElBQUk7WUFDRixNQUFNRjtZQUNOQyxPQUFPRSxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQVk7WUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsT0FBTztRQUMzQjtJQUNGO0lBQ0EscUJBQ0U7O1lBQ0csQ0FBQ1IsS0FBS1MsR0FBRyxpQkFDViw4SkFFRTswQkFDRSw0RUFBQ2IsK0RBQU1BO29CQUFDYyxJQUFHO29CQUFRQyxRQUFPO29CQUFLQyxXQUFVO29CQUFPQyxPQUFNOzhCQUNwRCw0RUFBQ3BCLGtFQUFTQTt3QkFBQ3FCLEtBQUs7OzBDQUNkLDhEQUFDbEIscUVBQVk7Z0NBQUNnQixXQUFVO2dDQUFRSSxNQUFLOzBDQUFJOzs7Ozs7MENBR3pDLDhEQUFDcEIsc0VBQWE7Z0NBQUNzQixpQkFBZSxDQUFDLHlCQUF5QixDQUFDOzs7Ozs7MENBQ3pELDhEQUFDdEIseUVBQWdCO2dDQUNmdUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDO2dDQUMvQkMsbUJBQWlCLENBQUMsOEJBQThCLENBQUM7Z0NBQ2pEQyxXQUFVOztrREFFViw4REFBQ3hCLHlFQUFnQjt3Q0FBQzBCLFdBQVc7a0RBQzNCLDRFQUFDMUIsd0VBQWU7NENBQUNzQixJQUFJLENBQUMsOEJBQThCLENBQUM7c0RBQUU7Ozs7Ozs7Ozs7O2tEQUl6RCw4REFBQ3RCLHVFQUFjO2tEQUNiLDRFQUFDRiw0REFBR0E7NENBQUNpQixXQUFVOzs4REFDYiw4REFBQ2xCLDZEQUFJQTtvREFBQ2tCLFdBQVU7O3NFQUNkLDhEQUFDbEIscUVBQVk7NERBQ1hpQyxNQUFLOzREQUNMQyxhQUFZOzREQUNaaEIsV0FBVTs0REFDVmlCLGNBQVc7Ozs7OztzRUFFYiw4REFBQ3JDLCtEQUFNQTs0REFBQ3NDLFNBQVE7c0VBQWtCOzs7Ozs7Ozs7Ozs7OERBRXBDLDhEQUFDbkMsaUVBQVE7b0RBQUNxQixNQUFLOzhEQUFJOzs7Ozs7OERBQ25CLDhEQUFDckIsaUVBQVE7b0RBQUNxQyxTQUFTN0I7OERBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBTzlDO1lBQ0FKOzs7QUFHUDtBQUVBLGlFQUFlRCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGV0LXN0b3J5Ly4vY29tcG9uZW50cy9uYXZiYXIudHN4PzdmMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL0NvbnRleHQvQXV0aGNvbnRleHRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xuaW1wb3J0IE9mZmNhbnZhcyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL09mZmNhbnZhc1wiO1xuXG5jb25zdCBuYXZiYXJQYWdlID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgeyB1c2VyLCBsb2dPdXQgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgbWVudUl0ZW1zID0gW1xuICAvLyAgIHtcbiAgLy8gICAgIGlkOiAxLFxuICAvLyAgICAgbmFtZTogXCJIb21lXCIsXG4gIC8vICAgICBsaW5rOiBcIi9cIixcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGlkOiAyLFxuICAvLyAgICAgbmFtZTogXCJMb2dpblwiLFxuICAvLyAgICAgbGluazogXCIvbG9naW5cIixcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGlkOiAzLFxuICAvLyAgICAgbmFtZTogXCJTaWduIFVwXCIsXG4gIC8vICAgICBsaW5rOiBcIi9zaWdudXBcIixcbiAgLy8gICB9LFxuICAvLyBdO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbG9nT3V0KCk7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshdXNlci51aWQgPyAoXG4gICAgICA8PjwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBleHBhbmQ9XCJtZFwiIGNsYXNzTmFtZT1cIm1iLTNcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBjbGFzc05hbWU9XCJCcmFuZFwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgUGV0IHN0b3J5XG4gICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPXtgb2ZmY2FudmFzTmF2YmFyLWV4cGFuZC1tZGB9IC8+XG4gICAgICAgICAgICAgIDxOYXZiYXIuT2ZmY2FudmFzXG4gICAgICAgICAgICAgICAgaWQ9e2BvZmZjYW52YXNOYXZiYXItZXhwYW5kLW1kYH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2BvZmZjYW52YXNOYXZiYXJMYWJlbC1leHBhbmQtbWRgfVxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImVuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8T2ZmY2FudmFzLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxPZmZjYW52YXMuVGl0bGUgaWQ9e2BvZmZjYW52YXNOYXZiYXJMYWJlbC1leHBhbmQtbWRgfT5cbiAgICAgICAgICAgICAgICAgICAgT2ZmY2FudmFzXG4gICAgICAgICAgICAgICAgICA8L09mZmNhbnZhcy5UaXRsZT5cbiAgICAgICAgICAgICAgICA8L09mZmNhbnZhcy5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE9mZmNhbnZhcy5Cb2R5PlxuICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtZW5kIGZsZXgtZ3Jvdy0xIHBlLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4IGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiPlNlYXJjaDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgPC9PZmZjYW52YXMuQm9keT5cbiAgICAgICAgICAgICAgPC9OYXZiYXIuT2ZmY2FudmFzPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhclBhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlQXV0aCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJOYXYiLCJOYXZiYXIiLCJPZmZjYW52YXMiLCJuYXZiYXJQYWdlIiwiY2hpbGRyZW4iLCJ1c2VyIiwibG9nT3V0Iiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ1aWQiLCJiZyIsImV4cGFuZCIsImNsYXNzTmFtZSIsImZpeGVkIiwiZmx1aWQiLCJCcmFuZCIsImhyZWYiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiaWQiLCJhcmlhLWxhYmVsbGVkYnkiLCJwbGFjZW1lbnQiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwidmFyaWFudCIsIkxpbmsiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.tsx\n");

/***/ }),

/***/ "./firebase/clientApp.ts":
/*!*******************************!*\
  !*** ./firebase/clientApp.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCFUBWxesLk-BX8KwwQfaI8Gs3cUCcBVWA\",\n    authDomain: \"pet-story-f51e3.firebaseapp.com\",\n    projectId: \"pet-story-f51e3\",\n    storageBucket: \"pet-story-f51e3.appspot.com\",\n    messagingSenderId: \"576128138584\",\n    appId: \"1:576128138584:web:c52f7384461830b1eeb92d\"\n};\nconst app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n //export const auth = getAuth(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jbGllbnRBcHAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFHYjtBQUNGO0FBQ3NCO0FBRWxELE1BQU1FLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZSCxpQ0FBNEM7SUFDeERLLFdBQVdMLGlCQUEyQztJQUN0RE8sZUFBZVAsNkJBQStDO0lBQzlEUyxtQkFBbUJULGNBQW9EO0lBQ3ZFVyxPQUFPWCwyQ0FBdUM7QUFDaEQ7QUFFQSxNQUFNYSxNQUFNakIseUVBQXNCLENBQUNFO0FBQ25DLE1BQU1pQixLQUFLbEIsZ0VBQVlBLENBQUNnQjtBQUNQLENBQ2pCLG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BldC1zdG9yeS8uL2ZpcmViYXNlL2NsaWVudEFwcC50cz8yNTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9hdXRoXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxufTtcblxuY29uc3QgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuZXhwb3J0IHthcHAgLGRifTtcbi8vZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG4iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/clientApp.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.tsx\");\n/* harmony import */ var _Context_Authcontext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/Authcontext */ \"./Context/Authcontext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_navbar__WEBPACK_IMPORTED_MODULE_4__, _Context_Authcontext__WEBPACK_IMPORTED_MODULE_5__]);\n([_components_navbar__WEBPACK_IMPORTED_MODULE_4__, _Context_Authcontext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n// type ComponentWithpageLayout = AppProps & {\n//   Component: AppProps['Component'] & {\n//     PageLayout?: React.ComponentType\n//   }\n// }\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_Authcontext__WEBPACK_IMPORTED_MODULE_5__.AuthContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/watthananick/pet-story/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/watthananick/pet-story/pages/_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/watthananick/pet-story/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDYTtBQUNmO0FBRWdCO0FBQ21CO0FBRTdELDhDQUE4QztBQUM5Qyx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBQ3ZDLE1BQU07QUFDTixJQUFJO0FBRUosU0FBU0csTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCxxRUFBbUJBO2tCQUNsQiw0RUFBQ0QsMERBQU1BO3NCQUNMLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXQtc3RvcnkvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vQ29udGV4dC9BdXRoY29udGV4dFwiO1xuXG4vLyB0eXBlIENvbXBvbmVudFdpdGhwYWdlTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4vLyAgIENvbXBvbmVudDogQXBwUHJvcHNbJ0NvbXBvbmVudCddICYge1xuLy8gICAgIFBhZ2VMYXlvdXQ/OiBSZWFjdC5Db21wb25lbnRUeXBlXG4vLyAgIH1cbi8vIH1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPE5hdmJhcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9OYXZiYXI+XG4gICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-bootstrap/Offcanvas":
/*!********************************************!*\
  !*** external "react-bootstrap/Offcanvas" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Offcanvas");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();