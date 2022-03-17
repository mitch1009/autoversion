/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 288:
/***/ ((module) => {

module.exports = eval("require")("../package.json");


/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const pv = __nccwpck_require__(288)
const { exec } = __nccwpck_require__(81);

const node_version=pv.version
const numbers = pv.version.split(".")
let {
    first, second, last
} = {
    first: parseInt(numbers[0]),
    second: parseInt(numbers[1]),
    last: parseInt(numbers[2])
}



if (last <9) {
    last+=1
}else if (last >=9){
    last=0
    run_second()

}

function run_second() {
    if (second<9) {
        second+=1
    }else if(second >=9) {
        second=0
        first+=1
    }
}

const newVersion=first+"."+second+"."+last


async function writeVersion() {
    await exec(`sed -i "s/${node_version}/${newVersion}/g" package.json`, ((error, stdout, stderr) => {
        if(error) console.log(`stdout:${error}`)
        if(stderr) console.log(`stderr: ${stderr}`)
        console.log("increased version", newVersion)
    }))
}

writeVersion().then(r => console.log(r))

})();

module.exports = __webpack_exports__;
/******/ })()
;