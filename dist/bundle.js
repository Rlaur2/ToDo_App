/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Environment Bold.woff */ "./src/fonts/Environment Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\n}\n\n:root {\n    --background: rgb(87, 0, 0);\n    --hovered-background: rgb(41, 2, 2);\n}\n\n@font-face {\n    font-family: Environment;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    background-color: bisque;\n    display: grid;\n    grid-template-areas: \n    'header header'\n    'menu main';\n}\n\nheader {\n    background-color: var(--background);\n    min-height: 6rem;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: Environment;\n    font-size: 2rem;\n    grid-area: header;\n}\n\n.left-side-header {\n    display: flex;\n    flex: 1;\n    padding-left: 2rem;\n}\n\n.open-menu-button {\n    display: flex;\n    padding: .5rem;\n}\n\n.app-name {\n    margin-left: 2rem;\n    font-family: Environment;\n}\n\n.project-title-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}\n\n.project-title-button {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    padding: .5rem;\n} \n\n.new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .5rem;\n}\n\n.open-menu-button:hover, \n.project-title-button:hover, \n.new-task-button:hover, \n.edit-project:hover, \n.arrow:hover,\n.new-project-button:hover,\n.sorting-method:hover,\n.sorting-reverse:hover,\n.date-created:hover,\n.priority:hover,\n.due-date:hover,\n.project-main-details:hover,\n.actual-priority:hover,\n.completion-status,\n.task-button,\n.clear-complete,\n.edit-name-submit,\n.low,\n.medium,\n.high,\n.finish-button,\n.edit,\n.delete,\n.yes,\n.no\n {\n    cursor: pointer;\n}\n\n.title {\n    font-family: Environment;\n    font-size: 2.5rem;\n    padding-right: .5rem;\n}\n\n.new-task-button-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task {\n    font-family: Environment;\n    padding-left: .5rem;\n}\n\n.menu {\n    width: 20vw;\n    height: calc(100vh - 6rem);\n    border-top: 1px bisque solid;\n    background-color: var(--background);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    transition: transform 200ms ease-out  50ms;\n    grid-area: menu;\n}\n\n\n.menu-open {\n    transform: translateX(-100%);\n}\n\n.new-project-container {\n    margin-top: 1.5rem;\n    font-family: Environment;\n    font-size: 1.2rem;\n    color: white;\n}\n\n.new-project-button {\n    display: flex;\n    align-items: center;\n}\n\n.project-area {\n    font-size: 1.6rem;\n    color: white;\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    margin-top: 1rem;\n}\n\n.project-container {\n    display: flex;\n    flex: 1;\n    padding: .2rem;\n    margin-top: 1rem;\n}\n\n.arrow {\n    margin-left: auto;\n    margin-right: 1rem;\n    transition: transform 150ms ease-out 50ms;\n}\n\n.arrow:hover {\n    transform: rotate(90deg);\n}\n\n.expanded-tasks {\n    display: flex;\n    flex-flow: column;\n    padding: .4rem 1.3rem;\n    font-size: 1.2rem;\n    background-color: var(--hovered-background);\n}\n\n.tasks {\n    margin-top: .3rem;\n    margin-left: .8rem;\n}\n\n.main-project-area {\n    grid-area: main;\n    width: 70vw;\n}\n\n.sorting-container {\n    display: flex;\n    margin: 1rem;\n    gap: 10px;\n    justify-content: center;\n    position: relative;\n}\n\n.sorting-method {\n    color: rgb(67, 67, 167);\n}\n\n.drop-down-sort {\n    width: 110px;\n    border: var(--background) 2px solid;\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n    justify-content: center;\n    margin-left: 32.5vw;\n    margin-top: -1rem;\n    position: absolute; \n    transform: scaleY(1);\n    transform-origin: top;\n    transition: transform 150ms ease-out 50ms;\n    background-color: bisque;\n    z-index: 10;\n    /* drop-down menu looking good */\n    display: none;   \n}\n\n/* transition looking good\n.drop-down-sort:hover {\n    transform: scaleY(0);\n    transform-origin: top;\n} */\n\n.date-created, .priority, .due-date {\n    padding: .1rem .4rem;\n}\n\n.date-created:hover,\n.priority:hover,\n.due-date:hover {\n    background-color: rgb(211, 180, 142);\n}\n\n.project-details {\n    display: flex;\n    flex-flow: column;\n    border: 3px var(--background) solid;\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 3px -1px;\n    margin-bottom: 2rem;\n}\n\n.project-main-details {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\n.priority-detail {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.actual-priority {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n}\n\n.low-priority {\n    background-color: green;\n}\n\n.medium-priority {\n    background-color: goldenrod;\n}\n\n.high-priority {\n    background-color: red;\n}\n\n.completion-status, .yes, .no {\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n}\n\n.incomplete, .no {\n    background-color: rgb(250, 99, 99);\n}\n\n.complete, .yes {\n    background-color: rgb(47, 201, 47);\n}\n\n.expanded-details {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    margin-top: .8rem;\n    border-top: 2px var(--background) solid;\n    transition: transform 150ms ease-out 50ms;\n    transform-origin: top;\n}\n\n/* idea for expand animation\n.expanded-details:hover {   \n    transform: scaleY(0);\n} */\n\n.task-and-button {\n    display: flex;\n    justify-content: space-between;\n    margin-top: .6rem;\n}\n\n.task-title {\n    margin-top: .4rem;\n    font-weight: 900;\n    font-size: 1.2rem;\n}\n\n.clear-complete {\n    color: rgb(67, 67, 167);\n    text-decoration: underline;\n    margin-bottom: 2rem;\n    width: fit-content;\n}\n\n.complete-tasks .task-title-detail, .complete-tasks .due-date-detail {\n    color: rgb(92, 91, 91);\n}\n\n.complete-tasks .task-title-detail {\n    text-decoration: line-through;\n}\n\n/* the pop-up modal for the name edit looking ok*/\n.edit-project-name {\n    \n}\n\n.transparent-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(60, 60, 60, .3);\n}\n\n.edit-name, .confirm-close {\n    display: flex;\n    gap: 8px;\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-end;\n    background-color: bisque;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    width: fit-content;\n    padding: 1rem 3rem 1rem 3rem;\n    position: absolute;\n    left: 40%;\n    top: 40%;\n}\n\n.edit-name label {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n.edit-name input {\n    font-family: Environment;\n    font-size: 2rem;\n    border-radius: 10px;\n    padding: .4rem;\n}\n\n\n.edit-name-submit {\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n/* take out the default border shadow or w/e next time you get\nthe chance */\n\n\n\n.task-input-form {\n    position: absolute;\n    left: 38%;\n    top: 35%;\n    background-color: bisque;\n    width: fit-content;\n    display: grid;\n    grid-template-areas: \n    'task-header due-date'\n    'task-title date-picker'\n    'task-description priority'\n    'task-description finish';\n    padding: 1.5rem;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    gap: 1.3rem;\n}\n\n.task-header {\n    grid-area: task-header;\n    font-family: Environment;\n    font-size: 1.6rem;\n}\n\n.due-date-title {\n    grid-area: due-date;\n    font-size: 1.6rem;\n}\n\n.task-title-input {\n    grid-area: task-title;\n}\n\n.task-title-input input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.due-date-picker {\n    grid-area: date-picker;\n}\n\n.due-date-picker input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.task-description-input {\n    grid-area: task-description;\n}\n\n.task-description-input textarea {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.priority-picker {\n    grid-area: priority;\n    display: flex;\n    gap: 10px;\n    font-size: 1.3rem;\n    align-items: center;\n}\n\n.low, .medium, .high {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.low {\n    background-color: green;\n}\n\n.medium {\n    background-color: goldenrod;\n}\n\n.high {\n    background-color: red;\n}\n\n.active {\n    outline: 2px solid black;\n}\n\n.finish-button {\n    font-size: 1.3rem;\n    grid-area: finish;\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    width: fit-content;\n    height: fit-content;\n    box-shadow: 2px 2px 7px -2px;\n    font-weight: bold;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.task-button img {\n    position: relative;\n}\n\n.pop-up-menu {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    position: absolute;\n    display: none;\n}\n\n\n.edit, .delete {\n    border: var(--background) 3px solid;\n    background-color: bisque;\n    padding: .3rem .6rem;\n    display: flex;\n    justify-content: center;\n    font-size: 1rem;\n    color: black;\n}\n\n.confirm-close-container {\n    display: none;\n}\n\n.confirm-close > div {\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.confirm-close {\n    top: 45%;\n    left: 45%;\n    \n}\n\n.confirm-buttons {\n    display: flex;\n    gap: 35px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\n}\n\n:root {\n    --background: rgb(87, 0, 0);\n    --hovered-background: rgb(41, 2, 2);\n}\n\n@font-face {\n    font-family: Environment;\n    src: url(./fonts/Environment\\ Bold.woff);\n}\n\nbody {\n    background-color: bisque;\n    display: grid;\n    grid-template-areas: \n    'header header'\n    'menu main';\n}\n\nheader {\n    background-color: var(--background);\n    min-height: 6rem;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: Environment;\n    font-size: 2rem;\n    grid-area: header;\n}\n\n.left-side-header {\n    display: flex;\n    flex: 1;\n    padding-left: 2rem;\n}\n\n.open-menu-button {\n    display: flex;\n    padding: .5rem;\n}\n\n.app-name {\n    margin-left: 2rem;\n    font-family: Environment;\n}\n\n.project-title-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}\n\n.project-title-button {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    padding: .5rem;\n} \n\n.new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .5rem;\n}\n\n.open-menu-button:hover, \n.project-title-button:hover, \n.new-task-button:hover, \n.edit-project:hover, \n.arrow:hover,\n.new-project-button:hover,\n.sorting-method:hover,\n.sorting-reverse:hover,\n.date-created:hover,\n.priority:hover,\n.due-date:hover,\n.project-main-details:hover,\n.actual-priority:hover,\n.completion-status,\n.task-button,\n.clear-complete,\n.edit-name-submit,\n.low,\n.medium,\n.high,\n.finish-button,\n.edit,\n.delete,\n.yes,\n.no\n {\n    cursor: pointer;\n}\n\n.title {\n    font-family: Environment;\n    font-size: 2.5rem;\n    padding-right: .5rem;\n}\n\n.new-task-button-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task {\n    font-family: Environment;\n    padding-left: .5rem;\n}\n\n.menu {\n    width: 20vw;\n    height: calc(100vh - 6rem);\n    border-top: 1px bisque solid;\n    background-color: var(--background);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    transition: transform 200ms ease-out  50ms;\n    grid-area: menu;\n}\n\n\n.menu-open {\n    transform: translateX(-100%);\n}\n\n.new-project-container {\n    margin-top: 1.5rem;\n    font-family: Environment;\n    font-size: 1.2rem;\n    color: white;\n}\n\n.new-project-button {\n    display: flex;\n    align-items: center;\n}\n\n.project-area {\n    font-size: 1.6rem;\n    color: white;\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    margin-top: 1rem;\n}\n\n.project-container {\n    display: flex;\n    flex: 1;\n    padding: .2rem;\n    margin-top: 1rem;\n}\n\n.arrow {\n    margin-left: auto;\n    margin-right: 1rem;\n    transition: transform 150ms ease-out 50ms;\n}\n\n.arrow:hover {\n    transform: rotate(90deg);\n}\n\n.expanded-tasks {\n    display: flex;\n    flex-flow: column;\n    padding: .4rem 1.3rem;\n    font-size: 1.2rem;\n    background-color: var(--hovered-background);\n}\n\n.tasks {\n    margin-top: .3rem;\n    margin-left: .8rem;\n}\n\n.main-project-area {\n    grid-area: main;\n    width: 70vw;\n}\n\n.sorting-container {\n    display: flex;\n    margin: 1rem;\n    gap: 10px;\n    justify-content: center;\n    position: relative;\n}\n\n.sorting-method {\n    color: rgb(67, 67, 167);\n}\n\n.drop-down-sort {\n    width: 110px;\n    border: var(--background) 2px solid;\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n    justify-content: center;\n    margin-left: 32.5vw;\n    margin-top: -1rem;\n    position: absolute; \n    transform: scaleY(1);\n    transform-origin: top;\n    transition: transform 150ms ease-out 50ms;\n    background-color: bisque;\n    z-index: 10;\n    /* drop-down menu looking good */\n    display: none;   \n}\n\n/* transition looking good\n.drop-down-sort:hover {\n    transform: scaleY(0);\n    transform-origin: top;\n} */\n\n.date-created, .priority, .due-date {\n    padding: .1rem .4rem;\n}\n\n.date-created:hover,\n.priority:hover,\n.due-date:hover {\n    background-color: rgb(211, 180, 142);\n}\n\n.project-details {\n    display: flex;\n    flex-flow: column;\n    border: 3px var(--background) solid;\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 3px -1px;\n    margin-bottom: 2rem;\n}\n\n.project-main-details {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\n.priority-detail {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.actual-priority {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n}\n\n.low-priority {\n    background-color: green;\n}\n\n.medium-priority {\n    background-color: goldenrod;\n}\n\n.high-priority {\n    background-color: red;\n}\n\n.completion-status, .yes, .no {\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n}\n\n.incomplete, .no {\n    background-color: rgb(250, 99, 99);\n}\n\n.complete, .yes {\n    background-color: rgb(47, 201, 47);\n}\n\n.expanded-details {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    margin-top: .8rem;\n    border-top: 2px var(--background) solid;\n    transition: transform 150ms ease-out 50ms;\n    transform-origin: top;\n}\n\n/* idea for expand animation\n.expanded-details:hover {   \n    transform: scaleY(0);\n} */\n\n.task-and-button {\n    display: flex;\n    justify-content: space-between;\n    margin-top: .6rem;\n}\n\n.task-title {\n    margin-top: .4rem;\n    font-weight: 900;\n    font-size: 1.2rem;\n}\n\n.clear-complete {\n    color: rgb(67, 67, 167);\n    text-decoration: underline;\n    margin-bottom: 2rem;\n    width: fit-content;\n}\n\n.complete-tasks .task-title-detail, .complete-tasks .due-date-detail {\n    color: rgb(92, 91, 91);\n}\n\n.complete-tasks .task-title-detail {\n    text-decoration: line-through;\n}\n\n/* the pop-up modal for the name edit looking ok*/\n.edit-project-name {\n    \n}\n\n.transparent-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(60, 60, 60, .3);\n}\n\n.edit-name, .confirm-close {\n    display: flex;\n    gap: 8px;\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-end;\n    background-color: bisque;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    width: fit-content;\n    padding: 1rem 3rem 1rem 3rem;\n    position: absolute;\n    left: 40%;\n    top: 40%;\n}\n\n.edit-name label {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n.edit-name input {\n    font-family: Environment;\n    font-size: 2rem;\n    border-radius: 10px;\n    padding: .4rem;\n}\n\n\n.edit-name-submit {\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n/* take out the default border shadow or w/e next time you get\nthe chance */\n\n\n\n.task-input-form {\n    position: absolute;\n    left: 38%;\n    top: 35%;\n    background-color: bisque;\n    width: fit-content;\n    display: grid;\n    grid-template-areas: \n    'task-header due-date'\n    'task-title date-picker'\n    'task-description priority'\n    'task-description finish';\n    padding: 1.5rem;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    gap: 1.3rem;\n}\n\n.task-header {\n    grid-area: task-header;\n    font-family: Environment;\n    font-size: 1.6rem;\n}\n\n.due-date-title {\n    grid-area: due-date;\n    font-size: 1.6rem;\n}\n\n.task-title-input {\n    grid-area: task-title;\n}\n\n.task-title-input input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.due-date-picker {\n    grid-area: date-picker;\n}\n\n.due-date-picker input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.task-description-input {\n    grid-area: task-description;\n}\n\n.task-description-input textarea {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.priority-picker {\n    grid-area: priority;\n    display: flex;\n    gap: 10px;\n    font-size: 1.3rem;\n    align-items: center;\n}\n\n.low, .medium, .high {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.low {\n    background-color: green;\n}\n\n.medium {\n    background-color: goldenrod;\n}\n\n.high {\n    background-color: red;\n}\n\n.active {\n    outline: 2px solid black;\n}\n\n.finish-button {\n    font-size: 1.3rem;\n    grid-area: finish;\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    width: fit-content;\n    height: fit-content;\n    box-shadow: 2px 2px 7px -2px;\n    font-weight: bold;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.task-button img {\n    position: relative;\n}\n\n.pop-up-menu {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    position: absolute;\n    display: none;\n}\n\n\n.edit, .delete {\n    border: var(--background) 3px solid;\n    background-color: bisque;\n    padding: .3rem .6rem;\n    display: flex;\n    justify-content: center;\n    font-size: 1rem;\n    color: black;\n}\n\n.confirm-close-container {\n    display: none;\n}\n\n.confirm-close > div {\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.confirm-close {\n    top: 45%;\n    left: 45%;\n    \n}\n\n.confirm-buttons {\n    display: flex;\n    gap: 35px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domManip.js":
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domManip": () => (/* binding */ domManip),
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
const project = { tasks: [] };
project.name = 'Default Project';
const domManip = (() => {
    //code for side menu opening
    const menuToggle = (() => {
        const openMenuButton = document.querySelector('.open-menu-button');
        const menu = document.querySelector('.menu');
        openMenuButton.addEventListener('click', () => {
            menu.classList.toggle('menu-open');
        });
    })();
    //code to set/change name of project
    const editProjectName = (() => {
        const projectTitleButton = document.querySelector('.project-title-button');
        projectTitleButton.addEventListener('click', () => {
            //code to append form to page
            const title = document.querySelector('.title');
            const popUps = document.querySelector('.pop-ups');
            const editNameModal = document.createElement('div');
            editNameModal.classList.toggle('edit-project-name');
            const transparentBG = document.createElement('div');
            transparentBG.classList.toggle('transparent-background');
            const editName = document.createElement('div');
            editName.classList.toggle('edit-name');
            editName.innerHTML = `<label for="project-name">Edit Project Name</label>`;
            const projectName = document.createElement('input');
            projectName.type = 'text';
            projectName.id = 'project-name';
            projectName.placeholder = project.name;
            const editNameSubmit = document.createElement('div');
            editNameSubmit.classList.toggle('edit-name-submit');
            editNameSubmit.textContent = 'Submit';
            editName.appendChild(projectName);
            editName.appendChild(editNameSubmit);
            transparentBG.appendChild(editName);
            editNameModal.appendChild(transparentBG);
            popUps.appendChild(editNameModal);
            //code to cancel form if hitting escape or clicking away
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    popUps.removeChild(editNameModal);
                }
            },{once:true});
            transparentBG.addEventListener('click', (e) => {
                if (e.target !== transparentBG) {
                    return;
                } else popUps.removeChild(editNameModal);
            });
            //code that ties name value to a variable that will be exported
            editNameSubmit.addEventListener('click', () => {
                if (!projectName.value) {
                    popUps.removeChild(editNameModal);
                } else {
                    project.name = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                }
            });
            projectName.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (!projectName.value) {
                        popUps.removeChild(editNameModal);
                    } else { 
                    project.name = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                    };
                }
            });
        })
    })();
    //code to add new tasks to current project
    const addNewTask = (() => {
       //code to append form to page
        const newTaskButton = document.querySelector('.new-task-button');
        newTaskButton.addEventListener('click', () => {
            const popUps = document.querySelector('.pop-ups');
            const taskInputDetails = document.createElement('div');
            taskInputDetails.classList.toggle('task-input-details');
            const transparentBG = document.createElement('div');
            transparentBG.classList.toggle('transparent-background');
            const taskInputForm = document.createElement('div');
            taskInputForm.classList.toggle('task-input-form');
            const taskHeader = document.createElement('div');
            taskHeader.classList.toggle('task-header');
            taskHeader.textContent = 'New Task';
            const dueDateTitle = document.createElement('label');
            dueDateTitle.classList.toggle('due-date-title');
            dueDateTitle.for = 'date';
            dueDateTitle.textContent = 'Due Date:';
            const taskTitleInput = document.createElement('div');
            taskTitleInput.classList.toggle('task-title-input');
            const innerTaskTitleInput = document.createElement('input');
            innerTaskTitleInput.type = 'text';
            innerTaskTitleInput.placeholder = 'Title';
            taskTitleInput.appendChild(innerTaskTitleInput);
            const dueDatePicker = document.createElement('div');
            dueDatePicker.classList.toggle('due-date-picker');
            const innerDueDatePicker = document.createElement('input');
            innerDueDatePicker.type = 'date';
            innerDueDatePicker.name = 'date';
            innerDueDatePicker.id = 'date';
            dueDatePicker.appendChild(innerDueDatePicker);
            const taskDescriptionInput = document.createElement('div');
            taskDescriptionInput.classList.toggle('task-description-input');
            const innerTaskDescriptionInput = document.createElement('textarea');
            innerTaskDescriptionInput.name = 'task-description';
            innerTaskDescriptionInput.id = 'task-description';
            innerTaskDescriptionInput.cols = '21';
            innerTaskDescriptionInput.rows = '6';
            innerTaskDescriptionInput.placeholder = 'Description';
            taskDescriptionInput.appendChild(innerTaskDescriptionInput);
            const priorityPicker = document.createElement('div');
            priorityPicker.classList.toggle('priority-picker');
            const priority = document.createElement('div');
            priority.textContent = 'Priority:';
            const low = document.createElement('div');
            low.id = 'low';
            low.classList.toggle('low');
            low.classList.toggle('circle');
            low.classList.toggle('active');
            const medium = document.createElement('div');
            medium.id = 'medium';
            medium.classList.toggle('medium');
            medium.classList.toggle('circle');
            const high = document.createElement('div');
            high.id = 'high';
            high.classList.toggle('high');
            high.classList.toggle('circle');
            priorityPicker.appendChild(priority);
            priorityPicker.appendChild(low);
            priorityPicker.appendChild(medium);
            priorityPicker.appendChild(high);
            const finishButton = document.createElement('div');
            finishButton.classList.toggle('finish-button');
            finishButton.textContent = 'Finish';
            taskInputForm.appendChild(taskHeader);
            taskInputForm.appendChild(dueDateTitle);
            taskInputForm.appendChild(taskTitleInput);
            taskInputForm.appendChild(dueDatePicker);
            taskInputForm.appendChild(taskDescriptionInput);
            taskInputForm.appendChild(priorityPicker);
            taskInputForm.appendChild(finishButton);
            transparentBG.appendChild(taskInputForm);
            taskInputDetails.appendChild(transparentBG);
            popUps.appendChild(taskInputDetails);
            //code to change priority
            const priorityChanger = (() => {
                const changer = (e) => {
                    const circles = document.querySelectorAll('.circle');
                    if (e.target.classList.contains('active')) {
                        return;
                    } else {
                        for (let circle of circles) {
                            if (circle === e.target) {
                                circle.classList.add('active');
                            } else circle.classList.remove('active');
                        }
                    }
                }
                low.addEventListener('click',changer);
                medium.addEventListener('click',changer);
                high.addEventListener('click',changer);
            })();
            //code to include the values from the form into a usable form
            finishButton.addEventListener('click', () => {
                if (!innerTaskTitleInput.value || !innerDueDatePicker.value) {
                    alert('Please enter a title and due date');
                    return;
                };
                const taskTitle = innerTaskTitleInput.value;
                const dueDate = innerDueDatePicker.value;
                const taskDescription = innerTaskDescriptionInput.value;
                let priorityChosen = '';
                const circles = document.querySelectorAll('.circle');
                for (let circle of circles) {
                    if (circle.classList.contains('active')) {
                        priorityChosen = circle.id;
                    }
                };
                const input = {taskTitle, dueDate, taskDescription, priorityChosen}
                project.tasks.push(input);
                popUps.removeChild(taskInputDetails);
            });
            

            //code to escape form with escape or or clicking away
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    popUps.removeChild(taskInputDetails);
                }
            },{once:true});

            transparentBG.addEventListener('click', (e) => {
                if (e.target !== transparentBG) {
                    return;
                } else popUps.removeChild(taskInputDetails);
            });
        })
    })();
})();


 

/***/ }),

/***/ "./src/fonts/Environment Bold.woff":
/*!*****************************************!*\
  !*** ./src/fonts/Environment Bold.woff ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4efc987692b802e2a5a9.woff";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");





const Projects = () => {
    
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFFBQVEsT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlB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Q0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUNEOzs7QUFHckM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvRW52aXJvbm1lbnQgQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoODcsIDAsIDApO1xcbiAgICAtLWhvdmVyZWQtYmFja2dyb3VuZDogcmdiKDQxLCAyLCAyKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdtZW51IG1haW4nO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgbWluLWhlaWdodDogNnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmxlZnQtc2lkZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5vcGVuLW1lbnUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5hcHAtbmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn0gXFxuXFxuLm5ldy10YXNrLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLm9wZW4tbWVudS1idXR0b246aG92ZXIsIFxcbi5wcm9qZWN0LXRpdGxlLWJ1dHRvbjpob3ZlciwgXFxuLm5ldy10YXNrLWJ1dHRvbjpob3ZlciwgXFxuLmVkaXQtcHJvamVjdDpob3ZlciwgXFxuLmFycm93OmhvdmVyLFxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIsXFxuLnNvcnRpbmctbWV0aG9kOmhvdmVyLFxcbi5zb3J0aW5nLXJldmVyc2U6aG92ZXIsXFxuLmRhdGUtY3JlYXRlZDpob3ZlcixcXG4ucHJpb3JpdHk6aG92ZXIsXFxuLmR1ZS1kYXRlOmhvdmVyLFxcbi5wcm9qZWN0LW1haW4tZGV0YWlsczpob3ZlcixcXG4uYWN0dWFsLXByaW9yaXR5OmhvdmVyLFxcbi5jb21wbGV0aW9uLXN0YXR1cyxcXG4udGFzay1idXR0b24sXFxuLmNsZWFyLWNvbXBsZXRlLFxcbi5lZGl0LW5hbWUtc3VibWl0LFxcbi5sb3csXFxuLm1lZGl1bSxcXG4uaGlnaCxcXG4uZmluaXNoLWJ1dHRvbixcXG4uZWRpdCxcXG4uZGVsZXRlLFxcbi55ZXMsXFxuLm5vXFxuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xcbiAgICBib3JkZXItdG9wOiAxcHggYmlzcXVlIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dCAgNTBtcztcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbn1cXG5cXG5cXG4ubWVudS1vcGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogLjJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dCA1MG1zO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5leHBhbmRlZC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAuNHJlbSAxLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3ZlcmVkLWJhY2tncm91bmQpO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IC44cmVtO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWFyZWEge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHdpZHRoOiA3MHZ3O1xcbn1cXG5cXG4uc29ydGluZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNvcnRpbmctbWV0aG9kIHtcXG4gICAgY29sb3I6IHJnYig2NywgNjcsIDE2Nyk7XFxufVxcblxcbi5kcm9wLWRvd24tc29ydCB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgYm9yZGVyOiB2YXIoLS1iYWNrZ3JvdW5kKSAycHggc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMi41dnc7XFxuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQgNTBtcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgLyogZHJvcC1kb3duIG1lbnUgbG9va2luZyBnb29kICovXFxuICAgIGRpc3BsYXk6IG5vbmU7ICAgXFxufVxcblxcbi8qIHRyYW5zaXRpb24gbG9va2luZyBnb29kXFxuLmRyb3AtZG93bi1zb3J0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59ICovXFxuXFxuLmRhdGUtY3JlYXRlZCwgLnByaW9yaXR5LCAuZHVlLWRhdGUge1xcbiAgICBwYWRkaW5nOiAuMXJlbSAuNHJlbTtcXG59XFxuXFxuLmRhdGUtY3JlYXRlZDpob3ZlcixcXG4ucHJpb3JpdHk6aG92ZXIsXFxuLmR1ZS1kYXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMTgwLCAxNDIpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGJvcmRlcjogM3B4IHZhcigtLWJhY2tncm91bmQpIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1tYWluLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktZGV0YWlsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5hY3R1YWwtcHJpb3JpdHkge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29tcGxldGlvbi1zdGF0dXMsIC55ZXMsIC5ubyB7XFxuICAgIHBhZGRpbmc6IC42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCAtMnB4O1xcbn1cXG5cXG4uaW5jb21wbGV0ZSwgLm5vIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgOTksIDk5KTtcXG59XFxuXFxuLmNvbXBsZXRlLCAueWVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyMDEsIDQ3KTtcXG59XFxuXFxuLmV4cGFuZGVkLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAuOHJlbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHZhcigtLWJhY2tncm91bmQpIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQgNTBtcztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4vKiBpZGVhIGZvciBleHBhbmQgYW5pbWF0aW9uXFxuLmV4cGFuZGVkLWRldGFpbHM6aG92ZXIgeyAgIFxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG59ICovXFxuXFxuLnRhc2stYW5kLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogLjZyZW07XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGUge1xcbiAgICBjb2xvcjogcmdiKDY3LCA2NywgMTY3KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNvbXBsZXRlLXRhc2tzIC50YXNrLXRpdGxlLWRldGFpbCwgLmNvbXBsZXRlLXRhc2tzIC5kdWUtZGF0ZS1kZXRhaWwge1xcbiAgICBjb2xvcjogcmdiKDkyLCA5MSwgOTEpO1xcbn1cXG5cXG4uY29tcGxldGUtdGFza3MgLnRhc2stdGl0bGUtZGV0YWlsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi8qIHRoZSBwb3AtdXAgbW9kYWwgZm9yIHRoZSBuYW1lIGVkaXQgbG9va2luZyBvayovXFxuLmVkaXQtcHJvamVjdC1uYW1lIHtcXG4gICAgXFxufVxcblxcbi50cmFuc3BhcmVudC1iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjMpO1xcbn1cXG5cXG4uZWRpdC1uYW1lLCAuY29uZmlybS1jbG9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQpIDRweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IC0ycHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gM3JlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogNDAlO1xcbn1cXG5cXG4uZWRpdC1uYW1lIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZWRpdC1uYW1lIGlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbn1cXG5cXG5cXG4uZWRpdC1uYW1lLXN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjAxLCA0Nyk7XFxuICAgIHBhZGRpbmc6IC42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCAtMnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIHRha2Ugb3V0IHRoZSBkZWZhdWx0IGJvcmRlciBzaGFkb3cgb3Igdy9lIG5leHQgdGltZSB5b3UgZ2V0XFxudGhlIGNoYW5jZSAqL1xcblxcblxcblxcbi50YXNrLWlucHV0LWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDM4JTtcXG4gICAgdG9wOiAzNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ3Rhc2staGVhZGVyIGR1ZS1kYXRlJ1xcbiAgICAndGFzay10aXRsZSBkYXRlLXBpY2tlcidcXG4gICAgJ3Rhc2stZGVzY3JpcHRpb24gcHJpb3JpdHknXFxuICAgICd0YXNrLWRlc2NyaXB0aW9uIGZpbmlzaCc7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiB2YXIoLS1iYWNrZ3JvdW5kKSA0cHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAtMnB4O1xcbiAgICBnYXA6IDEuM3JlbTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiB0YXNrLWhlYWRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmR1ZS1kYXRlLXRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiBkdWUtZGF0ZTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi50YXNrLXRpdGxlLWlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiB0YXNrLXRpdGxlO1xcbn1cXG5cXG4udGFzay10aXRsZS1pbnB1dCBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlciB7XFxuICAgIGdyaWQtYXJlYTogZGF0ZS1waWNrZXI7XFxufVxcblxcbi5kdWUtZGF0ZS1waWNrZXIgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiB0YXNrLWRlc2NyaXB0aW9uO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbi1pbnB1dCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByaW9yaXR5LXBpY2tlciB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb3csIC5tZWRpdW0sIC5oaWdoIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZpbmlzaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZ3JpZC1hcmVhOiBmaW5pc2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjAxLCA0Nyk7XFxuICAgIHBhZGRpbmc6IC42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IC0ycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGFzay1idXR0b24gaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucG9wLXVwLW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi5lZGl0LCAuZGVsZXRlIHtcXG4gICAgYm9yZGVyOiB2YXIoLS1iYWNrZ3JvdW5kKSAzcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgcGFkZGluZzogLjNyZW0gLjZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNvbmZpcm0tY2xvc2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbmZpcm0tY2xvc2UgPiBkaXYge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jb25maXJtLWNsb3NlIHtcXG4gICAgdG9wOiA0NSU7XFxuICAgIGxlZnQ6IDQ1JTtcXG4gICAgXFxufVxcblxcbi5jb25maXJtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDM1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiOztlQUVXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFF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QW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDg3LCAwLCAwKTtcXG4gICAgLS1ob3ZlcmVkLWJhY2tncm91bmQ6IHJnYig0MSwgMiwgMik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvRW52aXJvbm1lbnRcXFxcIEJvbGQud29mZik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ21lbnUgbWFpbic7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBtaW4taGVpZ2h0OiA2cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4ubGVmdC1zaWRlLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLm9wZW4tbWVudS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLmFwcC1uYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufSBcXG5cXG4ubmV3LXRhc2stYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4ub3Blbi1tZW51LWJ1dHRvbjpob3ZlciwgXFxuLnByb2plY3QtdGl0bGUtYnV0dG9uOmhvdmVyLCBcXG4ubmV3LXRhc2stYnV0dG9uOmhvdmVyLCBcXG4uZWRpdC1wcm9qZWN0OmhvdmVyLCBcXG4uYXJyb3c6aG92ZXIsXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcXG4uc29ydGluZy1tZXRob2Q6aG92ZXIsXFxuLnNvcnRpbmctcmV2ZXJzZTpob3ZlcixcXG4uZGF0ZS1jcmVhdGVkOmhvdmVyLFxcbi5wcmlvcml0eTpob3ZlcixcXG4uZHVlLWRhdGU6aG92ZXIsXFxuLnByb2plY3QtbWFpbi1kZXRhaWxzOmhvdmVyLFxcbi5hY3R1YWwtcHJpb3JpdHk6aG92ZXIsXFxuLmNvbXBsZXRpb24tc3RhdHVzLFxcbi50YXNrLWJ1dHRvbixcXG4uY2xlYXItY29tcGxldGUsXFxuLmVkaXQtbmFtZS1zdWJtaXQsXFxuLmxvdyxcXG4ubWVkaXVtLFxcbi5oaWdoLFxcbi5maW5pc2gtYnV0dG9uLFxcbi5lZGl0LFxcbi5kZWxldGUsXFxuLnllcyxcXG4ubm9cXG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcbn1cXG5cXG4ubmV3LXRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuLm1lbnUge1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNnJlbSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBiaXNxdWUgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0ICA1MG1zO1xcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxufVxcblxcblxcbi5tZW51LW9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1hcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0IDUwbXM7XFxufVxcblxcbi5hcnJvdzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmV4cGFuZGVkLXRhc2tzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IC40cmVtIDEuM3JlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyZWQtYmFja2dyb3VuZCk7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbi10b3A6IC4zcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLjhyZW07XFxufVxcblxcbi5tYWluLXByb2plY3QtYXJlYSB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgd2lkdGg6IDcwdnc7XFxufVxcblxcbi5zb3J0aW5nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc29ydGluZy1tZXRob2Qge1xcbiAgICBjb2xvcjogcmdiKDY3LCA2NywgMTY3KTtcXG59XFxuXFxuLmRyb3AtZG93bi1zb3J0IHtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQpIDJweCBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDMyLjV2dztcXG4gICAgbWFyZ2luLXRvcDogLTFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dCA1MG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICAvKiBkcm9wLWRvd24gbWVudSBsb29raW5nIGdvb2QgKi9cXG4gICAgZGlzcGxheTogbm9uZTsgICBcXG59XFxuXFxuLyogdHJhbnNpdGlvbiBsb29raW5nIGdvb2RcXG4uZHJvcC1kb3duLXNvcnQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn0gKi9cXG5cXG4uZGF0ZS1jcmVhdGVkLCAucHJpb3JpdHksIC5kdWUtZGF0ZSB7XFxuICAgIHBhZGRpbmc6IC4xcmVtIC40cmVtO1xcbn1cXG5cXG4uZGF0ZS1jcmVhdGVkOmhvdmVyLFxcbi5wcmlvcml0eTpob3ZlcixcXG4uZHVlLWRhdGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAxODAsIDE0Mik7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAzcHggdmFyKC0tYmFja2dyb3VuZCkgc29saWQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IC0xcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LW1haW4tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wcmlvcml0eS1kZXRhaWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLmFjdHVhbC1wcmlvcml0eSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb21wbGV0aW9uLXN0YXR1cywgLnllcywgLm5vIHtcXG4gICAgcGFkZGluZzogLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IC0ycHg7XFxufVxcblxcbi5pbmNvbXBsZXRlLCAubm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA5OSwgOTkpO1xcbn1cXG5cXG4uY29tcGxldGUsIC55ZXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDIwMSwgNDcpO1xcbn1cXG5cXG4uZXhwYW5kZWQtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IC44cmVtO1xcbiAgICBib3JkZXItdG9wOiAycHggdmFyKC0tYmFja2dyb3VuZCkgc29saWQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dCA1MG1zO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi8qIGlkZWEgZm9yIGV4cGFuZCBhbmltYXRpb25cXG4uZXhwYW5kZWQtZGV0YWlsczpob3ZlciB7ICAgXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbn0gKi9cXG5cXG4udGFzay1hbmQtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAuNnJlbTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jbGVhci1jb21wbGV0ZSB7XFxuICAgIGNvbG9yOiByZ2IoNjcsIDY3LCAxNjcpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY29tcGxldGUtdGFza3MgLnRhc2stdGl0bGUtZGV0YWlsLCAuY29tcGxldGUtdGFza3MgLmR1ZS1kYXRlLWRldGFpbCB7XFxuICAgIGNvbG9yOiByZ2IoOTIsIDkxLCA5MSk7XFxufVxcblxcbi5jb21wbGV0ZS10YXNrcyAudGFzay10aXRsZS1kZXRhaWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLyogdGhlIHBvcC11cCBtb2RhbCBmb3IgdGhlIG5hbWUgZWRpdCBsb29raW5nIG9rKi9cXG4uZWRpdC1wcm9qZWN0LW5hbWUge1xcbiAgICBcXG59XFxuXFxuLnRyYW5zcGFyZW50LWJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuMyk7XFxufVxcblxcbi5lZGl0LW5hbWUsIC5jb25maXJtLWNsb3NlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGJvcmRlcjogdmFyKC0tYmFja2dyb3VuZCkgNHB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggLTJweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW0gMXJlbSAzcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdG9wOiA0MCU7XFxufVxcblxcbi5lZGl0LW5hbWUgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lZGl0LW5hbWUgaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogLjRyZW07XFxufVxcblxcblxcbi5lZGl0LW5hbWUtc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyMDEsIDQ3KTtcXG4gICAgcGFkZGluZzogLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IC0ycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogdGFrZSBvdXQgdGhlIGRlZmF1bHQgYm9yZGVyIHNoYWRvdyBvciB3L2UgbmV4dCB0aW1lIHlvdSBnZXRcXG50aGUgY2hhbmNlICovXFxuXFxuXFxuXFxuLnRhc2staW5wdXQtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzglO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAndGFzay1oZWFkZXIgZHVlLWRhdGUnXFxuICAgICd0YXNrLXRpdGxlIGRhdGUtcGlja2VyJ1xcbiAgICAndGFzay1kZXNjcmlwdGlvbiBwcmlvcml0eSdcXG4gICAgJ3Rhc2stZGVzY3JpcHRpb24gZmluaXNoJztcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQpIDRweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IC0ycHg7XFxuICAgIGdhcDogMS4zcmVtO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IHRhc2staGVhZGVyO1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uZHVlLWRhdGUtdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IGR1ZS1kYXRlO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnRhc2stdGl0bGUtaW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHRhc2stdGl0bGU7XFxufVxcblxcbi50YXNrLXRpdGxlLWlucHV0IGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyIHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlLXBpY2tlcjtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlciBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHRhc2stZGVzY3JpcHRpb247XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLWlucHV0IHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktcGlja2VyIHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvdywgLm1lZGl1bSwgLmhpZ2gge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZmluaXNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBncmlkLWFyZWE6IGZpbmlzaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyMDEsIDQ3KTtcXG4gICAgcGFkZGluZzogLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggLTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrLWJ1dHRvbiBpbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wb3AtdXAtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLmVkaXQsIC5kZWxldGUge1xcbiAgICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQpIDNweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29uZmlybS1jbG9zZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29uZmlybS1jbG9zZSA+IGRpdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmNvbmZpcm0tY2xvc2Uge1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgbGVmdDogNDUlO1xcbiAgICBcXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHByb2plY3QgPSB7IHRhc2tzOiBbXSB9O1xucHJvamVjdC5uYW1lID0gJ0RlZmF1bHQgUHJvamVjdCc7XG5jb25zdCBkb21NYW5pcCA9ICgoKSA9PiB7XG4gICAgLy9jb2RlIGZvciBzaWRlIG1lbnUgb3BlbmluZ1xuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcGVuTWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1lbnUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICAgICAgICBvcGVuTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gICAgLy9jb2RlIHRvIHNldC9jaGFuZ2UgbmFtZSBvZiBwcm9qZWN0XG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RUaXRsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vY29kZSB0byBhcHBlbmQgZm9ybSB0byBwYWdlXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgICAgICAgICAgY29uc3QgcG9wVXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXROYW1lTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXROYW1lTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdC1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRyYW5zcGFyZW50QkcuY2xhc3NMaXN0LnRvZ2dsZSgndHJhbnNwYXJlbnQtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXROYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQtbmFtZScpO1xuICAgICAgICAgICAgZWRpdE5hbWUuaW5uZXJIVE1MID0gYDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIj5FZGl0IFByb2plY3QgTmFtZTwvbGFiZWw+YDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pZCA9ICdwcm9qZWN0LW5hbWUnO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBlZGl0TmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWRpdE5hbWVTdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdC1uYW1lLXN1Ym1pdCcpO1xuICAgICAgICAgICAgZWRpdE5hbWVTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgICAgIGVkaXROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGVkaXROYW1lLmFwcGVuZENoaWxkKGVkaXROYW1lU3VibWl0KTtcbiAgICAgICAgICAgIHRyYW5zcGFyZW50QkcuYXBwZW5kQ2hpbGQoZWRpdE5hbWUpO1xuICAgICAgICAgICAgZWRpdE5hbWVNb2RhbC5hcHBlbmRDaGlsZCh0cmFuc3BhcmVudEJHKTtcbiAgICAgICAgICAgIHBvcFVwcy5hcHBlbmRDaGlsZChlZGl0TmFtZU1vZGFsKTtcbiAgICAgICAgICAgIC8vY29kZSB0byBjYW5jZWwgZm9ybSBpZiBoaXR0aW5nIGVzY2FwZSBvciBjbGlja2luZyBhd2F5XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcFVwcy5yZW1vdmVDaGlsZChlZGl0TmFtZU1vZGFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LHtvbmNlOnRydWV9KTtcbiAgICAgICAgICAgIHRyYW5zcGFyZW50QkcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdHJhbnNwYXJlbnRCRykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHBvcFVwcy5yZW1vdmVDaGlsZChlZGl0TmFtZU1vZGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9jb2RlIHRoYXQgdGllcyBuYW1lIHZhbHVlIHRvIGEgdmFyaWFibGUgdGhhdCB3aWxsIGJlIGV4cG9ydGVkXG4gICAgICAgICAgICBlZGl0TmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXByb2plY3ROYW1lLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcFVwcy5yZW1vdmVDaGlsZChlZGl0TmFtZU1vZGFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9wVXBzLnJlbW92ZUNoaWxkKGVkaXROYW1lTW9kYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJvamVjdE5hbWUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcFVwcy5yZW1vdmVDaGlsZChlZGl0TmFtZU1vZGFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubmFtZSA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2hpbGQoZWRpdE5hbWVNb2RhbCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcbiAgICAvL2NvZGUgdG8gYWRkIG5ldyB0YXNrcyB0byBjdXJyZW50IHByb2plY3RcbiAgICBjb25zdCBhZGROZXdUYXNrID0gKCgpID0+IHtcbiAgICAgICAvL2NvZGUgdG8gYXBwZW5kIGZvcm0gdG8gcGFnZVxuICAgICAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWJ1dHRvbicpO1xuICAgICAgICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9wVXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbnB1dERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tJbnB1dERldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbnB1dC1kZXRhaWxzJyk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc3BhcmVudEJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0cmFuc3BhcmVudEJHLmNsYXNzTGlzdC50b2dnbGUoJ3RyYW5zcGFyZW50LWJhY2tncm91bmQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tJbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1pbnB1dC1mb3JtJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2staGVhZGVyJyk7XG4gICAgICAgICAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkdWVEYXRlVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnZHVlLWRhdGUtdGl0bGUnKTtcbiAgICAgICAgICAgIGR1ZURhdGVUaXRsZS5mb3IgPSAnZGF0ZSc7XG4gICAgICAgICAgICBkdWVEYXRlVGl0bGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrVGl0bGVJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLXRpdGxlLWlucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBpbm5lclRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlubmVyVGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGlubmVyVGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xuICAgICAgICAgICAgdGFza1RpdGxlSW5wdXQuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrVGl0bGVJbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkdWVEYXRlUGlja2VyLmNsYXNzTGlzdC50b2dnbGUoJ2R1ZS1kYXRlLXBpY2tlcicpO1xuICAgICAgICAgICAgY29uc3QgaW5uZXJEdWVEYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlubmVyRHVlRGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgaW5uZXJEdWVEYXRlUGlja2VyLm5hbWUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBpbm5lckR1ZURhdGVQaWNrZXIuaWQgPSAnZGF0ZSc7XG4gICAgICAgICAgICBkdWVEYXRlUGlja2VyLmFwcGVuZENoaWxkKGlubmVyRHVlRGF0ZVBpY2tlcik7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICAgICAgY29uc3QgaW5uZXJUYXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBpbm5lclRhc2tEZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAndGFzay1kZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBpbm5lclRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgaW5uZXJUYXNrRGVzY3JpcHRpb25JbnB1dC5jb2xzID0gJzIxJztcbiAgICAgICAgICAgIGlubmVyVGFza0Rlc2NyaXB0aW9uSW5wdXQucm93cyA9ICc2JztcbiAgICAgICAgICAgIGlubmVyVGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrRGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJpb3JpdHlQaWNrZXIuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHktcGlja2VyJyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG93LmlkID0gJ2xvdyc7XG4gICAgICAgICAgICBsb3cuY2xhc3NMaXN0LnRvZ2dsZSgnbG93Jyk7XG4gICAgICAgICAgICBsb3cuY2xhc3NMaXN0LnRvZ2dsZSgnY2lyY2xlJyk7XG4gICAgICAgICAgICBsb3cuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lZGl1bS5pZCA9ICdtZWRpdW0nO1xuICAgICAgICAgICAgbWVkaXVtLmNsYXNzTGlzdC50b2dnbGUoJ21lZGl1bScpO1xuICAgICAgICAgICAgbWVkaXVtLmNsYXNzTGlzdC50b2dnbGUoJ2NpcmNsZScpO1xuICAgICAgICAgICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGlnaC5pZCA9ICdoaWdoJztcbiAgICAgICAgICAgIGhpZ2guY2xhc3NMaXN0LnRvZ2dsZSgnaGlnaCcpO1xuICAgICAgICAgICAgaGlnaC5jbGFzc0xpc3QudG9nZ2xlKCdjaXJjbGUnKTtcbiAgICAgICAgICAgIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgICAgIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKGxvdyk7XG4gICAgICAgICAgICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChtZWRpdW0pO1xuICAgICAgICAgICAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZpbmlzaEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2gtYnV0dG9uJyk7XG4gICAgICAgICAgICBmaW5pc2hCdXR0b24udGV4dENvbnRlbnQgPSAnRmluaXNoJztcbiAgICAgICAgICAgIHRhc2tJbnB1dEZvcm0uYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG4gICAgICAgICAgICB0YXNrSW5wdXRGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVUaXRsZSk7XG4gICAgICAgICAgICB0YXNrSW5wdXRGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcbiAgICAgICAgICAgIHRhc2tJbnB1dEZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZVBpY2tlcik7XG4gICAgICAgICAgICB0YXNrSW5wdXRGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgICAgIHRhc2tJbnB1dEZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlQaWNrZXIpO1xuICAgICAgICAgICAgdGFza0lucHV0Rm9ybS5hcHBlbmRDaGlsZChmaW5pc2hCdXR0b24pO1xuICAgICAgICAgICAgdHJhbnNwYXJlbnRCRy5hcHBlbmRDaGlsZCh0YXNrSW5wdXRGb3JtKTtcbiAgICAgICAgICAgIHRhc2tJbnB1dERldGFpbHMuYXBwZW5kQ2hpbGQodHJhbnNwYXJlbnRCRyk7XG4gICAgICAgICAgICBwb3BVcHMuYXBwZW5kQ2hpbGQodGFza0lucHV0RGV0YWlscyk7XG4gICAgICAgICAgICAvL2NvZGUgdG8gY2hhbmdlIHByaW9yaXR5XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUNoYW5nZXIgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpcmNsZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2lyY2xlIG9mIGNpcmNsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2lyY2xlID09PSBlLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNoYW5nZXIpO1xuICAgICAgICAgICAgICAgIG1lZGl1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY2hhbmdlcik7XG4gICAgICAgICAgICAgICAgaGlnaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY2hhbmdlcik7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgLy9jb2RlIHRvIGluY2x1ZGUgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtIGludG8gYSB1c2FibGUgZm9ybVxuICAgICAgICAgICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaW5uZXJUYXNrVGl0bGVJbnB1dC52YWx1ZSB8fCAhaW5uZXJEdWVEYXRlUGlja2VyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBhbmQgZHVlIGRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gaW5uZXJUYXNrVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gaW5uZXJEdWVEYXRlUGlja2VyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGlubmVyVGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5Q2hvc2VuID0gJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaXJjbGUnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaXJjbGUgb2YgY2lyY2xlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5Q2hvc2VuID0gY2lyY2xlLmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHt0YXNrVGl0bGUsIGR1ZURhdGUsIHRhc2tEZXNjcmlwdGlvbiwgcHJpb3JpdHlDaG9zZW59XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKGlucHV0KTtcbiAgICAgICAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2hpbGQodGFza0lucHV0RGV0YWlscyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvL2NvZGUgdG8gZXNjYXBlIGZvcm0gd2l0aCBlc2NhcGUgb3Igb3IgY2xpY2tpbmcgYXdheVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2hpbGQodGFza0lucHV0RGV0YWlscyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSx7b25jZTp0cnVlfSk7XG5cbiAgICAgICAgICAgIHRyYW5zcGFyZW50QkcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdHJhbnNwYXJlbnRCRykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHBvcFVwcy5yZW1vdmVDaGlsZCh0YXNrSW5wdXREZXRhaWxzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG59KSgpO1xuXG5leHBvcnQgeyBkb21NYW5pcCB9O1xuZXhwb3J0IHsgcHJvamVjdCB9OyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBkb21NYW5pcCB9IGZyb20gJy4vZG9tTWFuaXAnO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4vZG9tTWFuaXAnO1xuXG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICAgIFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==