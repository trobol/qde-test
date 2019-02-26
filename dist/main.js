/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../qdengine/GameElement/index.js":
/*!****************************************!*\
  !*** ../qdengine/GameElement/index.js ***!
  \****************************************/
/*! exports provided: GameElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameElement\", function() { return GameElement; });\n/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vectors */ \"../qdengine/vectors/index.js\");\n/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphics */ \"../qdengine/graphics/index.js\");\n\r\n\r\nfunction GameElement({shader, position = Object(_vectors__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(0,0), rotation = Object(_vectors__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(0,0), scale = Object(_vectors__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(1,1), velocity = _vectors__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"]}) {\r\n\tif (!new.target) \r\n\t\treturn new GameElement();\r\n\tthis.shader = shader;\r\n\tthis.position = position;\r\n\tthis.rotation = rotation;\r\n\tthis.scale = scale;\r\n\tthis.velocity = velocity;\r\n\tlet program = shader;\r\n\tvar resolutionUniformLocation = _graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].getUniformLocation(program, \"u_resolution\");\r\n\t_graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].useProgram(program);\r\n\t_graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].uniform2f(resolutionUniformLocation, _graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].canvas.width, _graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].canvas.height);\r\n\t_graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].bindBuffer(_graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].ARRAY_BUFFER, _graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].positionBuffer);\r\n\tvar positionAttributeLocation = _graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].getAttribLocation(program, \"a_position\");\r\n\t_graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].enableVertexAttribArray(positionAttributeLocation);\r\n\t\r\n\t// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)\r\n\tvar size = 2;          // 2 components per iteration\r\n\tvar type = _graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].FLOAT;   // the data is 32bit floats\r\n\tvar normalize = false; // don't normalize the data\r\n\tvar stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position\r\n\tvar offset = 0;        // start at the beginning of the buffer\r\n\t_graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);\r\n\tthis._preUpdate = null;\r\n\tthis._update = null;\r\n\tthis._postUpdate = null;\r\n}\r\nGameElement.prototype = {\r\n\tdraw() {\r\n\t\tvar positions = [\r\n\t\t\tthis.position.x-0.5*this.scale.x, this.position.y+0.5*this.scale.y, //-0.5, 0.5\r\n\t\t\tthis.position.x-0.5*this.scale.x, this.position.y-0.5*this.scale.y, //-0.5, -0.5\r\n\t\t\tthis.position.x+0.5*this.scale.x, this.position.y-0.5*this.scale.y, //0.5, -0.5\r\n\t\t\tthis.position.x-0.5*this.scale.x, this.position.y+0.5*this.scale.y, //-0.5, 0.5\r\n\t\t\tthis.position.x+0.5*this.scale.x, this.position.y+0.5*this.scale.y, // 0.5, 0.5\r\n\t\t\tthis.position.x+0.5*this.scale.x, this.position.y-0.5*this.scale.y // 0.5, -0.5\r\n\t\t];\r\n\t\t_graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].vertexBuffer = _graphics__WEBPACK_IMPORTED_MODULE_1__[\"gl\"].vertexBuffer.concat(positions);\r\n\t},\r\n\tpreUpdate(f) {\r\n\t\tthis._preUpdate = f;\r\n\t},\r\n\tupdate(f) {\r\n\t\tthis._update = f;\r\n\t},\r\n\tpostUpdate(f) {\r\n\t\tthis._postUpdate = f;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///../qdengine/GameElement/index.js?");

/***/ }),

/***/ "../qdengine/graphics/camera.js":
/*!**************************************!*\
  !*** ../qdengine/graphics/camera.js ***!
  \**************************************/
/*! exports provided: camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camera\", function() { return camera; });\nfunction camera() {\r\n\t\r\n}\r\ncamera.prototype = {\r\n\tmain: new camera()\r\n}\n\n//# sourceURL=webpack:///../qdengine/graphics/camera.js?");

/***/ }),

/***/ "../qdengine/graphics/gl.js":
/*!**********************************!*\
  !*** ../qdengine/graphics/gl.js ***!
  \**********************************/
/*! exports provided: gl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gl\", function() { return gl; });\nlet gl = {\r\n\tinit(s) {\r\n\t\tlet canvas = s;\r\n\t\tgl = Object.assign(canvas.getContext(\"webgl\"), gl);\r\n\t\tgl.resize();\r\n\t\tgl.clearColor(0,0,0,0);\r\n\t\tgl.clear(gl.COLOR_BUFFER_BIT);\r\n\t\tgl.positionBuffer = gl.createBuffer();\r\n\t\tgl.texcoordBuffer = gl.createBuffer();\r\n\t},\r\n\tresize() {\r\n\t\t//make the canvas size the same size it is in pixels\r\n\t\tgl.canvas.width = Math.floor(gl.canvas.clientWidth  * window.devicePixelRatio);\r\n\t\tgl.canvas.height = Math.floor(gl.canvas.clientHeight * window.devicePixelRatio);\r\n\t\t//gl.canvas.width -= gl.canvas.width % 2 == 0 ? 0 : 1;\r\n\t\t//gl.canvas.height -= gl.canvas.height % 2 == 0 ? 0 : 1;\r\n\t\tgl.viewport(0, 0, gl.canvas.width, gl.canvas.height);\r\n\t},\r\n\tbuildShader(type, source) {\r\n\t\tlet shader = gl.createShader(type);\r\n\t\t\r\n\t\tgl.shaderSource(shader, source);\r\n\t\tgl.compileShader(shader);\r\n\t\tvar success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\r\n\t\tif (success) {\r\n\t\t\treturn shader;\r\n\t\t}\r\n\t\r\n\t\tconsole.log(gl.getShaderInfoLog(shader));\r\n\t\tgl.deleteShader(shader);\r\n\t},\r\n\tbuildProgram(vertexShader, fragmentShader) {\r\n\r\n\t\tvertexShader = gl.buildShader(gl.VERTEX_SHADER, vertexShader);\r\n\t\tfragmentShader = gl.buildShader(gl.FRAGMENT_SHADER, fragmentShader);\r\n\t\tvar program = gl.createProgram();\r\n\t\tgl.attachShader(program, vertexShader);\r\n\t\tgl.attachShader(program, fragmentShader);\r\n\t\tgl.linkProgram(program);\r\n\t\tvar success = gl.getProgramParameter(program, gl.LINK_STATUS);\r\n\t\tif (success) {\r\n\t\t  return program;\r\n\t\t}\r\n\t   \r\n\t\tconsole.log(gl.getProgramInfoLog(program));\r\n\t\tgl.deleteProgram(program);\r\n\t},\r\n\tvertexBuffer:[]\r\n};\n\n//# sourceURL=webpack:///../qdengine/graphics/gl.js?");

/***/ }),

/***/ "../qdengine/graphics/index.js":
/*!*************************************!*\
  !*** ../qdengine/graphics/index.js ***!
  \*************************************/
/*! exports provided: gl, viewport, texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl.js */ \"../qdengine/graphics/gl.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gl\", function() { return _gl_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"]; });\n\n/* harmony import */ var _viewport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport.js */ \"../qdengine/graphics/viewport.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"viewport\", function() { return _viewport_js__WEBPACK_IMPORTED_MODULE_1__[\"viewport\"]; });\n\n/* harmony import */ var _texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texture.js */ \"../qdengine/graphics/texture.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"texture\", function() { return _texture_js__WEBPACK_IMPORTED_MODULE_2__[\"texture\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///../qdengine/graphics/index.js?");

/***/ }),

/***/ "../qdengine/graphics/texture.js":
/*!***************************************!*\
  !*** ../qdengine/graphics/texture.js ***!
  \***************************************/
/*! exports provided: texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"texture\", function() { return texture; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"../qdengine/graphics/index.js\");\n\r\nfunction texture(tex) {\r\n\t\r\n\tif(tex instanceof WebGLTexture) {\r\n\t\t\r\n\t}\r\n\tlet t = {\r\n\t\tbind:true,\r\n\t\tlevel:0,\r\n\t\tinternalFormat:_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].RGBA,\r\n\t\tborder:0,\r\n\t\tformat:_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].RGBA,\r\n\t\ttype:_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_BYTE,\r\n\t\tdata:null,\r\n\t\theight,\r\n\t\twidth,\r\n\t\ttexP\r\n\t};\r\n\tObject.assign(t, tex);\r\n\tt = Object.assign(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].createTexture(), t);\r\n\tlet e = (s) => {throw new Error(`Texture: ${s}`)};\r\n\tvar {\r\n\t\theight = e('height not defined.'),\r\n\t\twidth = e('width not defined'),\r\n\t\ttexP\r\n\t} = t;\r\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindTexture(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, t);\r\n\t\r\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texImage2D(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, t.level, t.internalFormat,\r\n\t\twidth, height, t.border,\r\n\t\tt.format, t.type, t.data);\r\n\t\tconsole.log(height, width);\r\n\t\tif(texP) {\r\n\t\t\tif(texP.length) {\r\n\t\t\t\tfor(let tp of texP) {\r\n\t\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texParameteri(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, tp[0], tp[1]);\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texParameteri(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, texP[0], texP[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn t;\r\n\t}\r\n\t\r\n\tWebGLTexture.prototype.resize = function({width = this.width, height = this.height}) {\r\n\t\t\t\t\t\t\t\tconsole.log(height, width);\r\n\r\n\t\t\t\t\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindTexture(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, this);\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texImage2D(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, this.level, this.internalFormat,\r\n\t\t\t\t\t\t\t\t\twidth, height, this.border,\r\n\t\t\t\t\t\t\t\t\tthis.format, this.type, this.data);\r\n\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\n\n//# sourceURL=webpack:///../qdengine/graphics/texture.js?");

/***/ }),

/***/ "../qdengine/graphics/viewport.js":
/*!****************************************!*\
  !*** ../qdengine/graphics/viewport.js ***!
  \****************************************/
/*! exports provided: viewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewport\", function() { return viewport; });\nlet viewport =  {\r\n\tonload() {\r\n\r\n\t},\r\n\twidth:0,\r\n\theight:0\r\n}\n\n//# sourceURL=webpack:///../qdengine/graphics/viewport.js?");

/***/ }),

/***/ "../qdengine/index.js":
/*!****************************!*\
  !*** ../qdengine/index.js ***!
  \****************************/
/*! exports provided: gl, vec2, vec3, GameElement, ge, camera, position, rotation, scale, Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphics___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics/ */ \"../qdengine/graphics/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gl\", function() { return _graphics___WEBPACK_IMPORTED_MODULE_0__[\"gl\"]; });\n\n/* harmony import */ var _vectors_vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vectors/vec2.js */ \"../qdengine/vectors/vec2.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"vec2\", function() { return _vectors_vec2_js__WEBPACK_IMPORTED_MODULE_1__[\"vec2\"]; });\n\n/* harmony import */ var _vectors_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vectors/vec3.js */ \"../qdengine/vectors/vec3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"vec3\", function() { return _vectors_vec3_js__WEBPACK_IMPORTED_MODULE_2__[\"vec3\"]; });\n\n/* harmony import */ var _GameElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameElement */ \"../qdengine/GameElement/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameElement\", function() { return _GameElement__WEBPACK_IMPORTED_MODULE_3__[\"GameElement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ge\", function() { return _GameElement__WEBPACK_IMPORTED_MODULE_3__[\"GameElement\"]; });\n\n/* harmony import */ var _graphics_camera_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics/camera.js */ \"../qdengine/graphics/camera.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"camera\", function() { return _graphics_camera_js__WEBPACK_IMPORTED_MODULE_4__[\"camera\"]; });\n\n/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transform.js */ \"../qdengine/transform.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"position\", function() { return _transform_js__WEBPACK_IMPORTED_MODULE_5__[\"position\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rotation\", function() { return _transform_js__WEBPACK_IMPORTED_MODULE_5__[\"rotation\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scale\", function() { return _transform_js__WEBPACK_IMPORTED_MODULE_5__[\"scale\"]; });\n\n/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scene.js */ \"../qdengine/scene.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return _scene_js__WEBPACK_IMPORTED_MODULE_6__[\"Scene\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass QDEngine extends HTMLElement {\r\n\tconstructor() {\r\n\t  super();\r\n\t}\r\n\tconnectedCallback() {\r\n\t\tthis.innerHTML += '<canvas id=\"qdengine-viewport\"></canvas>';\r\n\t\tlet canvas = document.getElementById('qdengine-viewport');\r\n\t\t_graphics___WEBPACK_IMPORTED_MODULE_0__[\"gl\"].init(canvas);\r\n\t}\r\n}\r\ncustomElements.define('qd-engine', QDEngine);\n\n//# sourceURL=webpack:///../qdengine/index.js?");

/***/ }),

/***/ "../qdengine/scene.js":
/*!****************************!*\
  !*** ../qdengine/scene.js ***!
  \****************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return Scene; });\nfunction Scene() {\r\n\tthis.elements = [];\r\n}\r\nScene.prototype = {\r\n\tadd() {\r\n\r\n\t},\r\n\tupdate() {\r\n\t\tfor(let e of this.elements) {\r\n\t\t\te.draw();\r\n\t\t\te._update();\r\n\t\t}\t\r\n\t}\r\n};\n\n//# sourceURL=webpack:///../qdengine/scene.js?");

/***/ }),

/***/ "../qdengine/transform.js":
/*!********************************!*\
  !*** ../qdengine/transform.js ***!
  \********************************/
/*! exports provided: position, rotation, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"position\", function() { return position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotation\", function() { return rotation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scale\", function() { return scale; });\n/* harmony import */ var _vectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectors */ \"../qdengine/vectors/index.js\");\n\r\nlet position = Object(_vectors__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(0,0),\r\nrotation = Object(_vectors__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(0,0),\r\nscale = Object(_vectors__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(1, 1);\r\n\r\n\n\n//# sourceURL=webpack:///../qdengine/transform.js?");

/***/ }),

/***/ "../qdengine/vectors/index.js":
/*!************************************!*\
  !*** ../qdengine/vectors/index.js ***!
  \************************************/
/*! exports provided: vec2, vec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec2.js */ \"../qdengine/vectors/vec2.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"vec2\", function() { return _vec2_js__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"]; });\n\n/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec3.js */ \"../qdengine/vectors/vec3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"vec3\", function() { return _vec3_js__WEBPACK_IMPORTED_MODULE_1__[\"vec3\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///../qdengine/vectors/index.js?");

/***/ }),

/***/ "../qdengine/vectors/vec2.js":
/*!***********************************!*\
  !*** ../qdengine/vectors/vec2.js ***!
  \***********************************/
/*! exports provided: vec2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vec2\", function() { return vec2; });\nfunction vec2(x, y) {\r\n\tif (!new.target) \r\n\t\treturn new vec2(x,y);\r\n\r\n\tthis.x = x;\r\n\tthis.y = y;\r\n\r\n}\r\nvec2.prototype = {\r\n\tmag() {\r\n\t\treturn Math.sqrt(this.x*this.x + this.y*this.y);\r\n\t},\r\n\tnorm() {\r\n\t\tlet m = this.mag();\r\n\t\tif(m > 0) {\r\n\t\t\treturn this.div(m);\r\n\t\t} else {\r\n\t\t\treturn new vec2(0, 0);\r\n\t\t}\r\n\t},\r\n\tdiv(n) {\r\n\t\tif (n instanceof vec2) {\r\n\t\t\treturn new vec2(\r\n\t\t\t\tthis.x/n.x,\r\n\t\t\t\tthis.y/n.y\r\n\t\t\t);\r\n\t\t} else {\r\n\t\t\treturn new vec2(this.x/n, this.y/n);\r\n\t\t}\r\n\t},\r\n\tmul(n) {\r\n\t\tif (n instanceof vec2) {\r\n\t\t\treturn new vec2(\r\n\t\t\t\tthis.x*n.x,\r\n\t\t\t\tthis.y*n.y\r\n\t\t\t);\r\n\t\t} else {\r\n\t\t\treturn new vec2(this.x*n, this.y*n);\r\n\t\t}\r\n\t},\r\n\tadd(n) {\r\n\t\tif (n instanceof vec2) {\r\n\t\t\treturn new vec2(\r\n\t\t\t\tthis.x+n.x,\r\n\t\t\t\tthis.y+n.y\r\n\t\t\t);\r\n\t\t} else {\r\n\t\t\treturn new vec2(this.x+n, this.y+n);\r\n\t\t}\r\n\t}\r\n}\r\nvec2.lerp = function(v0, v1, t) {\r\n\treturn v0.mul(1 - t).add(v1.mul(t));\r\n}\r\nvec2.toBuffer = function(a) {\r\n\tlet b = [];\r\n\tfor(c of a) {\r\n\t\tb.push(c.x);\r\n\t\tb.push(c.y);\r\n\t}\r\n}\n\n//# sourceURL=webpack:///../qdengine/vectors/vec2.js?");

/***/ }),

/***/ "../qdengine/vectors/vec3.js":
/*!***********************************!*\
  !*** ../qdengine/vectors/vec3.js ***!
  \***********************************/
/*! exports provided: vec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vec3\", function() { return vec3; });\nfunction vec3(x, y, z) {\r\n\tif (!new.target) \r\n\t\treturn new vec3(x,y,z);\r\n\r\n\tthis.x = x;\r\n\tthis.y = y;\r\n\tthis.z = z;\r\n\r\n}\r\nvec3.prototype = {\r\n\tmag() {\r\n\t\tlet w = Math.sqrt(this.x*this.x + this.y*this.y);\r\n\t\treturn Math.sqrt(w*w + this.z*this.z);\r\n\t},\r\n\tnorm() {\r\n\t\tlet m = this.mag();\r\n\t\tif(m > 0) {\r\n\t\t\treturn this.div(m);\r\n\t\t} else {\r\n\t\t\treturn new vec3(0, 0, 0);\r\n\t\t}\r\n\t},\r\n\tdiv(n) {\r\n\t\tif (n instanceof vec3) {\r\n\t\t\treturn new vec3(\r\n\t\t\t\tthis.x/n.x,\r\n\t\t\t\tthis.y/n.y,\r\n\t\t\t\tthis.z/n.z\r\n\t\t\t);\r\n\t\t} else {\r\n\t\t\treturn new vec3(this.x/n, this.y/n, this.z/n);\r\n\t\t}\r\n\t},\r\n\tmul(n) {\r\n\t\tif (n instanceof vec3) {\r\n\t\t\treturn new vec3(\r\n\t\t\t\tthis.x*n.x,\r\n\t\t\t\tthis.y*n.y,\r\n\t\t\t\tthis.z*n.z\r\n\t\t\t);\r\n\t\t} else {\r\n\t\t\treturn new vec3(this.x*n, this.y*n, this.z*n);\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///../qdengine/vectors/vec3.js?");

/***/ }),

/***/ "./src/default.frag":
/*!**************************!*\
  !*** ./src/default.frag ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"//set default precision\\r\\nprecision mediump float;\\r\\nuniform vec2 u_resolution;\\r\\n\\r\\nvoid main() {\\r\\n\\tvec4 color = vec4(1, 1, 1, 1);\\r\\n\\tif(mod(gl_FragCoord.x, 20.) > 18. || mod(gl_FragCoord.y, 20.) > 18.) {\\r\\n\\t\\tcolor = vec4(0, 0, 0, 1);\\r\\n\\t}\\r\\n\\tgl_FragColor = vec4(0.5, 0.5, 0.5, 1);\\r\\n}\"\n\n//# sourceURL=webpack:///./src/default.frag?");

/***/ }),

/***/ "./src/default.vert":
/*!**************************!*\
  !*** ./src/default.vert ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"//recives data from buffer\\r\\nattribute vec4 a_position;\\r\\n\\r\\nvoid main() {\\r\\n\\tgl_Position = a_position;\\r\\n\\t//gl_PointSize = 500.;\\r\\n}\"\n\n//# sourceURL=webpack:///./src/default.vert?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var qdengine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qdengine */ \"../qdengine/index.js\");\n/* harmony import */ var qdengine_graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qdengine/graphics */ \"../qdengine/graphics/index.js\");\n/* harmony import */ var _default_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.vert */ \"./src/default.vert\");\n/* harmony import */ var _default_vert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_default_vert__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _default_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.frag */ \"./src/default.frag\");\n/* harmony import */ var _default_frag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_default_frag__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\nvar ctx, e, s, lastFrame = 0, frameTime = 0, fps, frames = 0, balls = [], delta = 0, program, programD, textureLocation, offset = 0, offsetLocation, programT;\r\nfunction main() {\r\n\t\r\n\tfps = document.getElementById('fps');\r\n\t\r\n\tprogram = qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].buildProgram(_default_vert__WEBPACK_IMPORTED_MODULE_2___default.a, _default_frag__WEBPACK_IMPORTED_MODULE_3___default.a);\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].useProgram(program);\r\n\tfor(let i = 0; i < 1000; i++) {\r\n\t\tballs[i] = new qdengine__WEBPACK_IMPORTED_MODULE_0__[\"ge\"]({shader:program, velocity:Object(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])((Math.random()*2 - 1)/5,(Math.random()*2 - 1)/5), scale:Object(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(0.02, 0.02), position:Object(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"vec2\"])(0, 0)});\r\n\t}\r\n\t\r\n\tvar positionLocation = qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getAttribLocation(program, \"a_position\");\r\n\tconsole.log(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].positionBuffer);\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindBuffer(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ARRAY_BUFFER, qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].positionBuffer);\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].enableVertexAttribArray(positionLocation);\r\n\tvar size = 2;          // 2 components per iteration\r\n    var type = qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].FLOAT;   // the data is 32bit floats\r\n    var normalize = false; // don't normalize the data\r\n    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position\r\n    var offset = 0;        // start at the beginning of the buffer\r\n    qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].vertexAttribPointer(\r\n        positionLocation, size, type, normalize, stride, offset);\r\n\r\n\toffsetLocation = qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getUniformLocation(program, \"offset\");\r\n\r\n\tdocument.querySelector('button').addEventListener('click', pauseRender);\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindBuffer(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ARRAY_BUFFER, qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].positionBuffer);\r\n\trequestAnimationFrame(draw);\r\n}\r\n\r\nlet paused = false;\r\nfunction pauseRender() {\r\n\tpaused = !paused;\r\n\tif(!paused) {\r\n\t\trequestAnimationFrame(draw);\r\n\t}\r\n}\r\n\r\nfunction draw(t) {\r\n\t\r\n\tcomputeFps(t);\r\n\tfor(let b of balls) {\r\n\t\tb.draw();\r\n\t\tcomputeMove(b);\r\n\t}\r\n\r\n\t\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindBuffer(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ARRAY_BUFFER, qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].positionBuffer);\r\n\t\r\n\t\r\n    // Clear the canvas AND the depth buffer.\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].clearColor(1, 1, 1, 1);   // clear to white\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].clear(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].COLOR_BUFFER_BIT | qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].DEPTH_BUFFER_BIT);\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bufferData(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ARRAY_BUFFER, new Float32Array(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].vertexBuffer), qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].STATIC_DRAW)\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].drawArrays(qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TRIANGLES, 0, qdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].vertexBuffer.length/2);\r\n\r\n\tqdengine__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].vertexBuffer = [];\r\n\tif(!paused) {\r\n\t\trequestAnimationFrame(draw);\r\n\t}\r\n\t\r\n}\r\nfunction computeMove(ball) {\r\n\tball.position = ball.position.add(ball.velocity.mul(delta/100));\r\n\t\r\n\tif(ball.position.x + ball.scale.x/2 > 1 || ball.position.x - ball.scale.x/2 < -1) {\r\n\t\t//point score\r\n\t\tball.velocity.x = ball.velocity.x * -1;\r\n\t}\r\n\tif(ball.position.y + ball.scale.y/2 > 1 || ball.position.y - ball.scale.y/2 < -1) {\r\n\t\tball.velocity.y = ball.velocity.y * -1;\r\n\t}\t\r\n}\r\nfunction computeFps(t) {\r\n\tif(frames === 5) {\r\n\t\tfps.innerHTML = Math.round(1/((frameTime/5)/1000));\r\n\t\tframeTime = 0;\r\n\t\tframes = 0;\r\n\t}\r\n\tdelta = t - lastFrame;\r\n\tframeTime += delta;\r\n\tlastFrame = t;\r\n\tframes++;\r\n}\r\nwindow.onload = main;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });