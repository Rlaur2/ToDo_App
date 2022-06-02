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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\n}\n\n:root {\n    --background: rgb(87, 0, 0);\n    --hovered-background: rgb(41, 2, 2);\n}\n\n@font-face {\n    font-family: Environment;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    background-color: bisque;\n    display: grid;\n    grid-template-areas: \n    'header header'\n    'menu main';\n}\n\nheader {\n    background-color: var(--background);\n    min-height: 6rem;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: Environment;\n    font-size: 2rem;\n    grid-area: header;\n}\n\n.left-side-header {\n    display: flex;\n    flex: 1;\n    padding-left: 2rem;\n}\n\n.open-menu-button {\n    display: flex;\n    padding: .5rem;\n}\n\n.app-name {\n    margin-left: 2rem;\n    font-family: Environment;\n}\n\n.project-title-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}\n\n.project-title-button {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    padding: .5rem;\n} \n\n.new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .5rem;\n}\n\n.open-menu-button:hover, \n.project-title-button:hover, \n.new-task-button:hover, \n.edit-project:hover, \n.arrow:hover,\n.new-project-button:hover,\n.sorting-method:hover,\n.sorting-reverse:hover,\n.date-created:hover,\n.priority:hover,\n.due-date:hover,\n.project-main-details:hover,\n.actual-priority:hover,\n.completion-status,\n.task-button,\n.clear-complete,\n.edit-name-submit,\n.low,\n.medium,\n.high,\n.finish-button,\n.edit,\n.delete,\n.yes,\n.no\n {\n    cursor: pointer;\n}\n\n.title {\n    font-family: Environment;\n    font-size: 2.5rem;\n    padding-right: .5rem;\n}\n\n.new-task-button-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task {\n    font-family: Environment;\n    padding-left: .5rem;\n}\n\n.menu {\n    width: 20vw;\n    height: calc(100vh - 6rem);\n    border-top: 1px bisque solid;\n    background-color: var(--background);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    transition: transform 200ms ease-out  50ms;\n    grid-area: menu;\n}\n\n\n.menu-open {\n    transform: translateX(-100%);\n}\n\n.new-project-container {\n    margin-top: 1.5rem;\n    font-family: Environment;\n    font-size: 1.2rem;\n    color: white;\n}\n\n.new-project-button {\n    display: flex;\n    align-items: center;\n}\n\n.project-area {\n    font-size: 1.6rem;\n    color: white;\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    margin-top: 1rem;\n}\n\n.project-container {\n    display: flex;\n    flex: 1;\n    padding: .2rem;\n    margin-top: 1rem;\n}\n\n.arrow {\n    margin-left: auto;\n    margin-right: 1rem;\n    transition: transform 150ms ease-out 50ms;\n}\n\n.arrow:hover {\n    transform: rotate(90deg);\n}\n\n.expanded-tasks {\n    display: flex;\n    flex-flow: column;\n    padding: .4rem 1.3rem;\n    font-size: 1.2rem;\n    background-color: var(--hovered-background);\n}\n\n.tasks {\n    margin-top: .3rem;\n    margin-left: .8rem;\n}\n\n.main-project-area {\n    grid-area: main;\n    width: 70vw;\n}\n\n.sorting-container {\n    display: flex;\n    margin: 1rem;\n    gap: 10px;\n    justify-content: center;\n    position: relative;\n}\n\n.sorting-method {\n    color: rgb(67, 67, 167);\n}\n\n.drop-down-sort {\n    width: 110px;\n    border: var(--background) 2px solid;\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n    justify-content: center;\n    margin-left: 32.5vw;\n    margin-top: -1rem;\n    position: absolute; \n    transform: scaleY(1);\n    transform-origin: top;\n    transition: transform 150ms ease-out 50ms;\n    background-color: bisque;\n    z-index: 10;\n    /* drop-down menu looking good */\n    display: none;   \n}\n\n/* transition looking good\n.drop-down-sort:hover {\n    transform: scaleY(0);\n    transform-origin: top;\n} */\n\n.date-created, .priority, .due-date {\n    padding: .1rem .4rem;\n}\n\n.date-created:hover,\n.priority:hover,\n.due-date:hover {\n    background-color: rgb(211, 180, 142);\n}\n\n.project-details {\n    display: flex;\n    flex-flow: column;\n    border: 3px var(--background) solid;\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 3px -1px;\n    margin-bottom: 2rem;\n}\n\n.project-main-details {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\n.priority-detail {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.actual-priority {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n}\n\n.low-priority {\n    background-color: green;\n}\n\n.medium-priority {\n    background-color: goldenrod;\n}\n\n.high-priority {\n    background-color: red;\n}\n\n.completion-status, .yes, .no {\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n}\n\n.incomplete, .no {\n    background-color: rgb(250, 99, 99);\n}\n\n.complete, .yes {\n    background-color: rgb(47, 201, 47);\n}\n\n.expanded-details {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    margin-top: .8rem;\n    border-top: 2px var(--background) solid;\n    transition: transform 150ms ease-out 50ms;\n    transform-origin: top;\n}\n\n/* idea for expand animation\n.expanded-details:hover {   \n    transform: scaleY(0);\n} */\n\n.task-and-button {\n    display: flex;\n    justify-content: space-between;\n    margin-top: .6rem;\n}\n\n.task-title {\n    margin-top: .4rem;\n    font-weight: 900;\n    font-size: 1.2rem;\n}\n\n.clear-complete {\n    color: rgb(67, 67, 167);\n    text-decoration: underline;\n    margin-bottom: 2rem;\n    width: fit-content;\n}\n\n.complete-tasks .task-title-detail, .complete-tasks .due-date-detail {\n    color: rgb(92, 91, 91);\n}\n\n.complete-tasks .task-title-detail {\n    text-decoration: line-through;\n}\n\n/* the pop-up modal for the name edit looking ok*/\n.edit-project-name {\n    \n}\n\n.transparent-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(60, 60, 60, .3);\n}\n\n.edit-name, .confirm-close {\n    display: flex;\n    gap: 8px;\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-end;\n    background-color: bisque;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    width: fit-content;\n    padding: 1rem 3rem 1rem 3rem;\n    position: absolute;\n    left: 40%;\n    top: 40%;\n}\n\n.edit-name label {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n.edit-name input {\n    font-family: Environment;\n    font-size: 2rem;\n    border-radius: 10px;\n    padding: .4rem;\n}\n\n\n.edit-name-submit {\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n/* take out the default border shadow or w/e next time you get\nthe chance */\n\n.task-input-details {\n    display: none;\n}\n\n.task-input-form {\n    position: absolute;\n    left: 38%;\n    top: 35%;\n    background-color: bisque;\n    width: fit-content;\n    display: grid;\n    grid-template-areas: \n    'task-header due-date'\n    'task-title date-picker'\n    'task-description priority'\n    'task-description finish';\n    padding: 1.5rem;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    gap: 1.3rem;\n}\n\n.task-header {\n    grid-area: task-header;\n    font-family: Environment;\n    font-size: 1.6rem;\n}\n\n.due-date-title {\n    grid-area: due-date;\n    font-size: 1.6rem;\n}\n\n.task-title-input {\n    grid-area: task-title;\n}\n\n.task-title-input input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.due-date-picker {\n    grid-area: date-picker;\n}\n\n.due-date-picker input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.task-description-input {\n    grid-area: task-description;\n}\n\n.task-description-input textarea {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.priority-picker {\n    grid-area: priority;\n    display: flex;\n    gap: 10px;\n    font-size: 1.3rem;\n    align-items: center;\n}\n\n.low, .medium, .high {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.low {\n    background-color: green;\n}\n\n.medium {\n    background-color: goldenrod;\n}\n\n.high {\n    background-color: red;\n}\n\n.priority-chosen {\n    outline: 2px solid black;\n}\n\n.finish-button {\n    font-size: 1.3rem;\n    grid-area: finish;\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    width: fit-content;\n    height: fit-content;\n    box-shadow: 2px 2px 7px -2px;\n    font-weight: bold;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.task-button img {\n    position: relative;\n}\n\n.pop-up-menu {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    position: absolute;\n    display: none;\n}\n\n\n.edit, .delete {\n    border: var(--background) 3px solid;\n    background-color: bisque;\n    padding: .3rem .6rem;\n    display: flex;\n    justify-content: center;\n    font-size: 1rem;\n    color: black;\n}\n\n.confirm-close-container {\n    display: none;\n}\n\n.confirm-close > div {\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.confirm-close {\n    top: 45%;\n    left: 45%;\n    \n}\n\n.confirm-buttons {\n    display: flex;\n    gap: 35px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\n}\n\n:root {\n    --background: rgb(87, 0, 0);\n    --hovered-background: rgb(41, 2, 2);\n}\n\n@font-face {\n    font-family: Environment;\n    src: url(./fonts/Environment\\ Bold.woff);\n}\n\nbody {\n    background-color: bisque;\n    display: grid;\n    grid-template-areas: \n    'header header'\n    'menu main';\n}\n\nheader {\n    background-color: var(--background);\n    min-height: 6rem;\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: Environment;\n    font-size: 2rem;\n    grid-area: header;\n}\n\n.left-side-header {\n    display: flex;\n    flex: 1;\n    padding-left: 2rem;\n}\n\n.open-menu-button {\n    display: flex;\n    padding: .5rem;\n}\n\n.app-name {\n    margin-left: 2rem;\n    font-family: Environment;\n}\n\n.project-title-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}\n\n.project-title-button {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    padding: .5rem;\n} \n\n.new-task-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: .5rem;\n}\n\n.open-menu-button:hover, \n.project-title-button:hover, \n.new-task-button:hover, \n.edit-project:hover, \n.arrow:hover,\n.new-project-button:hover,\n.sorting-method:hover,\n.sorting-reverse:hover,\n.date-created:hover,\n.priority:hover,\n.due-date:hover,\n.project-main-details:hover,\n.actual-priority:hover,\n.completion-status,\n.task-button,\n.clear-complete,\n.edit-name-submit,\n.low,\n.medium,\n.high,\n.finish-button,\n.edit,\n.delete,\n.yes,\n.no\n {\n    cursor: pointer;\n}\n\n.title {\n    font-family: Environment;\n    font-size: 2.5rem;\n    padding-right: .5rem;\n}\n\n.new-task-button-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.task {\n    font-family: Environment;\n    padding-left: .5rem;\n}\n\n.menu {\n    width: 20vw;\n    height: calc(100vh - 6rem);\n    border-top: 1px bisque solid;\n    background-color: var(--background);\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    transition: transform 200ms ease-out  50ms;\n    grid-area: menu;\n}\n\n\n.menu-open {\n    transform: translateX(-100%);\n}\n\n.new-project-container {\n    margin-top: 1.5rem;\n    font-family: Environment;\n    font-size: 1.2rem;\n    color: white;\n}\n\n.new-project-button {\n    display: flex;\n    align-items: center;\n}\n\n.project-area {\n    font-size: 1.6rem;\n    color: white;\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    margin-top: 1rem;\n}\n\n.project-container {\n    display: flex;\n    flex: 1;\n    padding: .2rem;\n    margin-top: 1rem;\n}\n\n.arrow {\n    margin-left: auto;\n    margin-right: 1rem;\n    transition: transform 150ms ease-out 50ms;\n}\n\n.arrow:hover {\n    transform: rotate(90deg);\n}\n\n.expanded-tasks {\n    display: flex;\n    flex-flow: column;\n    padding: .4rem 1.3rem;\n    font-size: 1.2rem;\n    background-color: var(--hovered-background);\n}\n\n.tasks {\n    margin-top: .3rem;\n    margin-left: .8rem;\n}\n\n.main-project-area {\n    grid-area: main;\n    width: 70vw;\n}\n\n.sorting-container {\n    display: flex;\n    margin: 1rem;\n    gap: 10px;\n    justify-content: center;\n    position: relative;\n}\n\n.sorting-method {\n    color: rgb(67, 67, 167);\n}\n\n.drop-down-sort {\n    width: 110px;\n    border: var(--background) 2px solid;\n    display: flex;\n    flex-flow: column;\n    gap: 5px;\n    justify-content: center;\n    margin-left: 32.5vw;\n    margin-top: -1rem;\n    position: absolute; \n    transform: scaleY(1);\n    transform-origin: top;\n    transition: transform 150ms ease-out 50ms;\n    background-color: bisque;\n    z-index: 10;\n    /* drop-down menu looking good */\n    display: none;   \n}\n\n/* transition looking good\n.drop-down-sort:hover {\n    transform: scaleY(0);\n    transform-origin: top;\n} */\n\n.date-created, .priority, .due-date {\n    padding: .1rem .4rem;\n}\n\n.date-created:hover,\n.priority:hover,\n.due-date:hover {\n    background-color: rgb(211, 180, 142);\n}\n\n.project-details {\n    display: flex;\n    flex-flow: column;\n    border: 3px var(--background) solid;\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 3px -1px;\n    margin-bottom: 2rem;\n}\n\n.project-main-details {\n    display: flex;\n    flex: 1;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.5rem;\n}\n\n.priority-detail {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.actual-priority {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n}\n\n.low-priority {\n    background-color: green;\n}\n\n.medium-priority {\n    background-color: goldenrod;\n}\n\n.high-priority {\n    background-color: red;\n}\n\n.completion-status, .yes, .no {\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n}\n\n.incomplete, .no {\n    background-color: rgb(250, 99, 99);\n}\n\n.complete, .yes {\n    background-color: rgb(47, 201, 47);\n}\n\n.expanded-details {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    margin-top: .8rem;\n    border-top: 2px var(--background) solid;\n    transition: transform 150ms ease-out 50ms;\n    transform-origin: top;\n}\n\n/* idea for expand animation\n.expanded-details:hover {   \n    transform: scaleY(0);\n} */\n\n.task-and-button {\n    display: flex;\n    justify-content: space-between;\n    margin-top: .6rem;\n}\n\n.task-title {\n    margin-top: .4rem;\n    font-weight: 900;\n    font-size: 1.2rem;\n}\n\n.clear-complete {\n    color: rgb(67, 67, 167);\n    text-decoration: underline;\n    margin-bottom: 2rem;\n    width: fit-content;\n}\n\n.complete-tasks .task-title-detail, .complete-tasks .due-date-detail {\n    color: rgb(92, 91, 91);\n}\n\n.complete-tasks .task-title-detail {\n    text-decoration: line-through;\n}\n\n/* the pop-up modal for the name edit looking ok*/\n.edit-project-name {\n    \n}\n\n.transparent-background {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(60, 60, 60, .3);\n}\n\n.edit-name, .confirm-close {\n    display: flex;\n    gap: 8px;\n    flex-flow: column;\n    align-items: center;\n    justify-content: flex-end;\n    background-color: bisque;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    width: fit-content;\n    padding: 1rem 3rem 1rem 3rem;\n    position: absolute;\n    left: 40%;\n    top: 40%;\n}\n\n.edit-name label {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n.edit-name input {\n    font-family: Environment;\n    font-size: 2rem;\n    border-radius: 10px;\n    padding: .4rem;\n}\n\n\n.edit-name-submit {\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    box-shadow: 2px 2px 7px -2px;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n/* take out the default border shadow or w/e next time you get\nthe chance */\n\n.task-input-details {\n    display: none;\n}\n\n.task-input-form {\n    position: absolute;\n    left: 38%;\n    top: 35%;\n    background-color: bisque;\n    width: fit-content;\n    display: grid;\n    grid-template-areas: \n    'task-header due-date'\n    'task-title date-picker'\n    'task-description priority'\n    'task-description finish';\n    padding: 1.5rem;\n    border: var(--background) 4px solid;\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px -2px;\n    gap: 1.3rem;\n}\n\n.task-header {\n    grid-area: task-header;\n    font-family: Environment;\n    font-size: 1.6rem;\n}\n\n.due-date-title {\n    grid-area: due-date;\n    font-size: 1.6rem;\n}\n\n.task-title-input {\n    grid-area: task-title;\n}\n\n.task-title-input input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.due-date-picker {\n    grid-area: date-picker;\n}\n\n.due-date-picker input {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.task-description-input {\n    grid-area: task-description;\n}\n\n.task-description-input textarea {\n    font-size: 1.3rem;\n    padding: .4rem;\n    border-radius: 10px;\n}\n\n.priority-picker {\n    grid-area: priority;\n    display: flex;\n    gap: 10px;\n    font-size: 1.3rem;\n    align-items: center;\n}\n\n.low, .medium, .high {\n    height: 20px;\n    width: 20px;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.low {\n    background-color: green;\n}\n\n.medium {\n    background-color: goldenrod;\n}\n\n.high {\n    background-color: red;\n}\n\n.priority-chosen {\n    outline: 2px solid black;\n}\n\n.finish-button {\n    font-size: 1.3rem;\n    grid-area: finish;\n    background-color: rgb(47, 201, 47);\n    padding: .6rem;\n    border-radius: 10px;\n    width: fit-content;\n    height: fit-content;\n    box-shadow: 2px 2px 7px -2px;\n    font-weight: bold;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.task-button img {\n    position: relative;\n}\n\n.pop-up-menu {\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n    position: absolute;\n    display: none;\n}\n\n\n.edit, .delete {\n    border: var(--background) 3px solid;\n    background-color: bisque;\n    padding: .3rem .6rem;\n    display: flex;\n    justify-content: center;\n    font-size: 1rem;\n    color: black;\n}\n\n.confirm-close-container {\n    display: none;\n}\n\n.confirm-close > div {\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.confirm-close {\n    top: 45%;\n    left: 45%;\n    \n}\n\n.confirm-buttons {\n    display: flex;\n    gap: 35px;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "domManip": () => (/* binding */ domManip)
/* harmony export */ });
const domManip = (() => {
    //code for side menu opening
    const menuToggle = (() => {
        const openMenuButton = document.querySelector('.open-menu-button');
        const menu = document.querySelector('.menu');
        openMenuButton.addEventListener('click', () => {
            menu.classList.toggle('menu-open');
        });
    })();
    const editProjectName = (() => {
        const projectTitleButton = document.querySelector('.project-title-button');
        let nameOfProject = '';
        projectTitleButton.addEventListener('click', () => {
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
            projectName.placeholder = nameOfProject;
            const editNameSubmit = document.createElement('div');
            editNameSubmit.classList.toggle('edit-name-submit');
            editNameSubmit.textContent = 'Submit';
            editName.appendChild(projectName);
            editName.appendChild(editNameSubmit);
            transparentBG.appendChild(editName);
            editNameModal.appendChild(transparentBG);
            popUps.appendChild(editNameModal);
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
            editNameSubmit.addEventListener('click', () => {
                if (!projectName.value) {
                    popUps.removeChild(editNameModal);
                } else {
                    nameOfProject = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                }
            });
            projectName.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (!projectName.value) {
                        popUps.removeChild(editNameModal);
                    } else { 
                    nameOfProject = projectName.value;
                    title.textContent = projectName.value;
                    popUps.removeChild(editNameModal);
                    };
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFFBQVEsT0FBTyxX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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUI7O0FBRXRDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0Vudmlyb25tZW50IEJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDg3LCAwLCAwKTtcXG4gICAgLS1ob3ZlcmVkLWJhY2tncm91bmQ6IHJnYig0MSwgMiwgMik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbWVudSBtYWluJztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIG1pbi1oZWlnaHQ6IDZyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5sZWZ0LXNpZGUtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4ub3Blbi1tZW51LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uYXBwLW5hbWUge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59IFxcblxcbi5uZXctdGFzay1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5vcGVuLW1lbnUtYnV0dG9uOmhvdmVyLCBcXG4ucHJvamVjdC10aXRsZS1idXR0b246aG92ZXIsIFxcbi5uZXctdGFzay1idXR0b246aG92ZXIsIFxcbi5lZGl0LXByb2plY3Q6aG92ZXIsIFxcbi5hcnJvdzpob3ZlcixcXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyLFxcbi5zb3J0aW5nLW1ldGhvZDpob3ZlcixcXG4uc29ydGluZy1yZXZlcnNlOmhvdmVyLFxcbi5kYXRlLWNyZWF0ZWQ6aG92ZXIsXFxuLnByaW9yaXR5OmhvdmVyLFxcbi5kdWUtZGF0ZTpob3ZlcixcXG4ucHJvamVjdC1tYWluLWRldGFpbHM6aG92ZXIsXFxuLmFjdHVhbC1wcmlvcml0eTpob3ZlcixcXG4uY29tcGxldGlvbi1zdGF0dXMsXFxuLnRhc2stYnV0dG9uLFxcbi5jbGVhci1jb21wbGV0ZSxcXG4uZWRpdC1uYW1lLXN1Ym1pdCxcXG4ubG93LFxcbi5tZWRpdW0sXFxuLmhpZ2gsXFxuLmZpbmlzaC1idXR0b24sXFxuLmVkaXQsXFxuLmRlbGV0ZSxcXG4ueWVzLFxcbi5ub1xcbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XFxufVxcblxcbi5uZXctdGFzay1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2cmVtKTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGJpc3F1ZSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1vdXQgIDUwbXM7XFxuICAgIGdyaWQtYXJlYTogbWVudTtcXG59XFxuXFxuXFxuLm1lbnUtb3BlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWFyZWEge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IC4ycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQgNTBtcztcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZXhwYW5kZWQtdGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgcGFkZGluZzogLjRyZW0gMS4zcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXJlZC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgbWFyZ2luLXRvcDogLjNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAuOHJlbTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1hcmVhIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICB3aWR0aDogNzB2dztcXG59XFxuXFxuLnNvcnRpbmctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zb3J0aW5nLW1ldGhvZCB7XFxuICAgIGNvbG9yOiByZ2IoNjcsIDY3LCAxNjcpO1xcbn1cXG5cXG4uZHJvcC1kb3duLXNvcnQge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGJvcmRlcjogdmFyKC0tYmFja2dyb3VuZCkgMnB4IHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMzIuNXZ3O1xcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0IDUwbXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIC8qIGRyb3AtZG93biBtZW51IGxvb2tpbmcgZ29vZCAqL1xcbiAgICBkaXNwbGF5OiBub25lOyAgIFxcbn1cXG5cXG4vKiB0cmFuc2l0aW9uIGxvb2tpbmcgZ29vZFxcbi5kcm9wLWRvd24tc29ydDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufSAqL1xcblxcbi5kYXRlLWNyZWF0ZWQsIC5wcmlvcml0eSwgLmR1ZS1kYXRlIHtcXG4gICAgcGFkZGluZzogLjFyZW0gLjRyZW07XFxufVxcblxcbi5kYXRlLWNyZWF0ZWQ6aG92ZXIsXFxuLnByaW9yaXR5OmhvdmVyLFxcbi5kdWUtZGF0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDE4MCwgMTQyKTtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBib3JkZXI6IDNweCB2YXIoLS1iYWNrZ3JvdW5kKSBzb2xpZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggLTFweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbWFpbi1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWRldGFpbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4uYWN0dWFsLXByaW9yaXR5IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbXBsZXRpb24tc3RhdHVzLCAueWVzLCAubm8ge1xcbiAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggLTJweDtcXG59XFxuXFxuLmluY29tcGxldGUsIC5ubyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDk5LCA5OSk7XFxufVxcblxcbi5jb21wbGV0ZSwgLnllcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjAxLCA0Nyk7XFxufVxcblxcbi5leHBhbmRlZC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogLjhyZW07XFxuICAgIGJvcmRlci10b3A6IDJweCB2YXIoLS1iYWNrZ3JvdW5kKSBzb2xpZDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0IDUwbXM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59XFxuXFxuLyogaWRlYSBmb3IgZXhwYW5kIGFuaW1hdGlvblxcbi5leHBhbmRlZC1kZXRhaWxzOmhvdmVyIHsgICBcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxufSAqL1xcblxcbi50YXNrLWFuZC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IC42cmVtO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IC40cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNsZWFyLWNvbXBsZXRlIHtcXG4gICAgY29sb3I6IHJnYig2NywgNjcsIDE2Nyk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jb21wbGV0ZS10YXNrcyAudGFzay10aXRsZS1kZXRhaWwsIC5jb21wbGV0ZS10YXNrcyAuZHVlLWRhdGUtZGV0YWlsIHtcXG4gICAgY29sb3I6IHJnYig5MiwgOTEsIDkxKTtcXG59XFxuXFxuLmNvbXBsZXRlLXRhc2tzIC50YXNrLXRpdGxlLWRldGFpbCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiB0aGUgcG9wLXVwIG1vZGFsIGZvciB0aGUgbmFtZSBlZGl0IGxvb2tpbmcgb2sqL1xcbi5lZGl0LXByb2plY3QtbmFtZSB7XFxuICAgIFxcbn1cXG5cXG4udHJhbnNwYXJlbnQtYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC4zKTtcXG59XFxuXFxuLmVkaXQtbmFtZSwgLmNvbmZpcm0tY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgYm9yZGVyOiB2YXIoLS1iYWNrZ3JvdW5kKSA0cHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAtMnB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDNyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IDQwJTtcXG59XFxuXFxuLmVkaXQtbmFtZSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVkaXQtbmFtZSBpbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG59XFxuXFxuXFxuLmVkaXQtbmFtZS1zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDIwMSwgNDcpO1xcbiAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggLTJweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiB0YWtlIG91dCB0aGUgZGVmYXVsdCBib3JkZXIgc2hhZG93IG9yIHcvZSBuZXh0IHRpbWUgeW91IGdldFxcbnRoZSBjaGFuY2UgKi9cXG5cXG4udGFzay1pbnB1dC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2staW5wdXQtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzglO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAndGFzay1oZWFkZXIgZHVlLWRhdGUnXFxuICAgICd0YXNrLXRpdGxlIGRhdGUtcGlja2VyJ1xcbiAgICAndGFzay1kZXNjcmlwdGlvbiBwcmlvcml0eSdcXG4gICAgJ3Rhc2stZGVzY3JpcHRpb24gZmluaXNoJztcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQpIDRweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IC0ycHg7XFxuICAgIGdhcDogMS4zcmVtO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IHRhc2staGVhZGVyO1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uZHVlLWRhdGUtdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IGR1ZS1kYXRlO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnRhc2stdGl0bGUtaW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHRhc2stdGl0bGU7XFxufVxcblxcbi50YXNrLXRpdGxlLWlucHV0IGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyIHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlLXBpY2tlcjtcXG59XFxuXFxuLmR1ZS1kYXRlLXBpY2tlciBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAuNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICBncmlkLWFyZWE6IHRhc2stZGVzY3JpcHRpb247XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uLWlucHV0IHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktcGlja2VyIHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvdywgLm1lZGl1bSwgLmhpZ2gge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJpb3JpdHktY2hvc2VuIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZmluaXNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBncmlkLWFyZWE6IGZpbmlzaDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyMDEsIDQ3KTtcXG4gICAgcGFkZGluZzogLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA3cHggLTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi50YXNrLWJ1dHRvbiBpbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wb3AtdXAtbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLmVkaXQsIC5kZWxldGUge1xcbiAgICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQpIDNweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29uZmlybS1jbG9zZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29uZmlybS1jbG9zZSA+IGRpdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmNvbmZpcm0tY2xvc2Uge1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgbGVmdDogNDUlO1xcbiAgICBcXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2I7O2VBRVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxPQUFPO0lB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QUNyQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTOztBQUViOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQ6IHJnYig4NywgMCwgMCk7XFxuICAgIC0taG92ZXJlZC1iYWNrZ3JvdW5kOiByZ2IoNDEsIDIsIDIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL0Vudmlyb25tZW50XFxcXCBCb2xkLndvZmYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdtZW51IG1haW4nO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgbWluLWhlaWdodDogNnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmxlZnQtc2lkZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5vcGVuLW1lbnUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5hcHAtbmFtZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbn0gXFxuXFxuLm5ldy10YXNrLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLm9wZW4tbWVudS1idXR0b246aG92ZXIsIFxcbi5wcm9qZWN0LXRpdGxlLWJ1dHRvbjpob3ZlciwgXFxuLm5ldy10YXNrLWJ1dHRvbjpob3ZlciwgXFxuLmVkaXQtcHJvamVjdDpob3ZlciwgXFxuLmFycm93OmhvdmVyLFxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIsXFxuLnNvcnRpbmctbWV0aG9kOmhvdmVyLFxcbi5zb3J0aW5nLXJldmVyc2U6aG92ZXIsXFxuLmRhdGUtY3JlYXRlZDpob3ZlcixcXG4ucHJpb3JpdHk6aG92ZXIsXFxuLmR1ZS1kYXRlOmhvdmVyLFxcbi5wcm9qZWN0LW1haW4tZGV0YWlsczpob3ZlcixcXG4uYWN0dWFsLXByaW9yaXR5OmhvdmVyLFxcbi5jb21wbGV0aW9uLXN0YXR1cyxcXG4udGFzay1idXR0b24sXFxuLmNsZWFyLWNvbXBsZXRlLFxcbi5lZGl0LW5hbWUtc3VibWl0LFxcbi5sb3csXFxuLm1lZGl1bSxcXG4uaGlnaCxcXG4uZmluaXNoLWJ1dHRvbixcXG4uZWRpdCxcXG4uZGVsZXRlLFxcbi55ZXMsXFxuLm5vXFxuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LWZhbWlseTogRW52aXJvbm1lbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xcbiAgICBib3JkZXItdG9wOiAxcHggYmlzcXVlIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dCAgNTBtcztcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbn1cXG5cXG5cXG4ubWVudS1vcGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogLjJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5hcnJvdyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dCA1MG1zO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5leHBhbmRlZC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAuNHJlbSAxLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3ZlcmVkLWJhY2tncm91bmQpO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBtYXJnaW4tdG9wOiAuM3JlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IC44cmVtO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWFyZWEge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHdpZHRoOiA3MHZ3O1xcbn1cXG5cXG4uc29ydGluZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNvcnRpbmctbWV0aG9kIHtcXG4gICAgY29sb3I6IHJnYig2NywgNjcsIDE2Nyk7XFxufVxcblxcbi5kcm9wLWRvd24tc29ydCB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgYm9yZGVyOiB2YXIoLS1iYWNrZ3JvdW5kKSAycHggc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMi41dnc7XFxuICAgIG1hcmdpbi10b3A6IC0xcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQgNTBtcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgLyogZHJvcC1kb3duIG1lbnUgbG9va2luZyBnb29kICovXFxuICAgIGRpc3BsYXk6IG5vbmU7ICAgXFxufVxcblxcbi8qIHRyYW5zaXRpb24gbG9va2luZyBnb29kXFxuLmRyb3AtZG93bi1zb3J0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59ICovXFxuXFxuLmRhdGUtY3JlYXRlZCwgLnByaW9yaXR5LCAuZHVlLWRhdGUge1xcbiAgICBwYWRkaW5nOiAuMXJlbSAuNHJlbTtcXG59XFxuXFxuLmRhdGUtY3JlYXRlZDpob3ZlcixcXG4ucHJpb3JpdHk6aG92ZXIsXFxuLmR1ZS1kYXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMTgwLCAxNDIpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGJvcmRlcjogM3B4IHZhcigtLWJhY2tncm91bmQpIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAtMXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1tYWluLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktZGV0YWlsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5hY3R1YWwtcHJpb3JpdHkge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29tcGxldGlvbi1zdGF0dXMsIC55ZXMsIC5ubyB7XFxuICAgIHBhZGRpbmc6IC42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCAtMnB4O1xcbn1cXG5cXG4uaW5jb21wbGV0ZSwgLm5vIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgOTksIDk5KTtcXG59XFxuXFxuLmNvbXBsZXRlLCAueWVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAyMDEsIDQ3KTtcXG59XFxuXFxuLmV4cGFuZGVkLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAuOHJlbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHZhcigtLWJhY2tncm91bmQpIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQgNTBtcztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4vKiBpZGVhIGZvciBleHBhbmQgYW5pbWF0aW9uXFxuLmV4cGFuZGVkLWRldGFpbHM6aG92ZXIgeyAgIFxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG59ICovXFxuXFxuLnRhc2stYW5kLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogLjZyZW07XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY2xlYXItY29tcGxldGUge1xcbiAgICBjb2xvcjogcmdiKDY3LCA2NywgMTY3KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmNvbXBsZXRlLXRhc2tzIC50YXNrLXRpdGxlLWRldGFpbCwgLmNvbXBsZXRlLXRhc2tzIC5kdWUtZGF0ZS1kZXRhaWwge1xcbiAgICBjb2xvcjogcmdiKDkyLCA5MSwgOTEpO1xcbn1cXG5cXG4uY29tcGxldGUtdGFza3MgLnRhc2stdGl0bGUtZGV0YWlsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi8qIHRoZSBwb3AtdXAgbW9kYWwgZm9yIHRoZSBuYW1lIGVkaXQgbG9va2luZyBvayovXFxuLmVkaXQtcHJvamVjdC1uYW1lIHtcXG4gICAgXFxufVxcblxcbi50cmFuc3BhcmVudC1iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjMpO1xcbn1cXG5cXG4uZWRpdC1uYW1lLCAuY29uZmlybS1jbG9zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBib3JkZXI6IHZhcigtLWJhY2tncm91bmQpIDRweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IC0ycHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gM3JlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogNDAlO1xcbn1cXG5cXG4uZWRpdC1uYW1lIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZWRpdC1uYW1lIGlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6IEVudmlyb25tZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbn1cXG5cXG5cXG4uZWRpdC1uYW1lLXN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMjAxLCA0Nyk7XFxuICAgIHBhZGRpbmc6IC42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCAtMnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIHRha2Ugb3V0IHRoZSBkZWZhdWx0IGJvcmRlciBzaGFkb3cgb3Igdy9lIG5leHQgdGltZSB5b3UgZ2V0XFxudGhlIGNoYW5jZSAqL1xcblxcbi50YXNrLWlucHV0LWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1pbnB1dC1mb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzOCU7XFxuICAgIHRvcDogMzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICd0YXNrLWhlYWRlciBkdWUtZGF0ZSdcXG4gICAgJ3Rhc2stdGl0bGUgZGF0ZS1waWNrZXInXFxuICAgICd0YXNrLWRlc2NyaXB0aW9uIHByaW9yaXR5J1xcbiAgICAndGFzay1kZXNjcmlwdGlvbiBmaW5pc2gnO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlcjogdmFyKC0tYmFja2dyb3VuZCkgNHB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggLTJweDtcXG4gICAgZ2FwOiAxLjNyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogdGFzay1oZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBFbnZpcm9ubWVudDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5kdWUtZGF0ZS10aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogZHVlLWRhdGU7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4udGFzay10aXRsZS1pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogdGFzay10aXRsZTtcXG59XFxuXFxuLnRhc2stdGl0bGUtaW5wdXQgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kdWUtZGF0ZS1waWNrZXIge1xcbiAgICBncmlkLWFyZWE6IGRhdGUtcGlja2VyO1xcbn1cXG5cXG4uZHVlLWRhdGUtcGlja2VyIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IC40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogdGFzay1kZXNjcmlwdGlvbjtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24taW5wdXQgdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZzogLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1waWNrZXIge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG93LCAubWVkaXVtLCAuaGlnaCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wcmlvcml0eS1jaG9zZW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5maW5pc2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGdyaWQtYXJlYTogZmluaXNoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDIwMSwgNDcpO1xcbiAgICBwYWRkaW5nOiAuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCAtMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnRhc2stYnV0dG9uIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcC11cC1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4uZWRpdCwgLmRlbGV0ZSB7XFxuICAgIGJvcmRlcjogdmFyKC0tYmFja2dyb3VuZCkgM3B4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC42cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb25maXJtLWNsb3NlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb25maXJtLWNsb3NlID4gZGl2IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY29uZmlybS1jbG9zZSB7XFxuICAgIHRvcDogNDUlO1xcbiAgICBsZWZ0OiA0NSU7XFxuICAgIFxcbn1cXG5cXG4uY29uZmlybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZG9tTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vY29kZSBmb3Igc2lkZSBtZW51IG9wZW5pbmdcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3Blbk1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tZW51LWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICAgICAgb3Blbk1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlLWJ1dHRvbicpO1xuICAgICAgICBsZXQgbmFtZU9mUHJvamVjdCA9ICcnO1xuICAgICAgICBwcm9qZWN0VGl0bGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgICAgICAgICAgY29uc3QgcG9wVXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXROYW1lTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXROYW1lTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdC1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRyYW5zcGFyZW50QkcuY2xhc3NMaXN0LnRvZ2dsZSgndHJhbnNwYXJlbnQtYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgY29uc3QgZWRpdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXROYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQtbmFtZScpO1xuICAgICAgICAgICAgZWRpdE5hbWUuaW5uZXJIVE1MID0gYDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIj5FZGl0IFByb2plY3QgTmFtZTwvbGFiZWw+YDtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pZCA9ICdwcm9qZWN0LW5hbWUnO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBuYW1lT2ZQcm9qZWN0O1xuICAgICAgICAgICAgY29uc3QgZWRpdE5hbWVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXROYW1lU3VibWl0LmNsYXNzTGlzdC50b2dnbGUoJ2VkaXQtbmFtZS1zdWJtaXQnKTtcbiAgICAgICAgICAgIGVkaXROYW1lU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgICAgICBlZGl0TmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBlZGl0TmFtZS5hcHBlbmRDaGlsZChlZGl0TmFtZVN1Ym1pdCk7XG4gICAgICAgICAgICB0cmFuc3BhcmVudEJHLmFwcGVuZENoaWxkKGVkaXROYW1lKTtcbiAgICAgICAgICAgIGVkaXROYW1lTW9kYWwuYXBwZW5kQ2hpbGQodHJhbnNwYXJlbnRCRyk7XG4gICAgICAgICAgICBwb3BVcHMuYXBwZW5kQ2hpbGQoZWRpdE5hbWVNb2RhbCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcFVwcy5yZW1vdmVDaGlsZChlZGl0TmFtZU1vZGFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LHtvbmNlOnRydWV9KTtcbiAgICAgICAgICAgIHRyYW5zcGFyZW50QkcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdHJhbnNwYXJlbnRCRykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHBvcFVwcy5yZW1vdmVDaGlsZChlZGl0TmFtZU1vZGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWRpdE5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9qZWN0TmFtZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2hpbGQoZWRpdE5hbWVNb2RhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZU9mUHJvamVjdCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2hpbGQoZWRpdE5hbWVNb2RhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9qZWN0TmFtZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wVXBzLnJlbW92ZUNoaWxkKGVkaXROYW1lTW9kYWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICAgICAgbmFtZU9mUHJvamVjdCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2hpbGQoZWRpdE5hbWVNb2RhbCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRvbU1hbmlwIH0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZG9tTWFuaXAgfSBmcm9tICcuL2RvbU1hbmlwJztcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9