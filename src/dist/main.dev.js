"use strict";

require("./scss/vendors.scss");

require("./scss/main.scss");

require("bootstrap");

var _TheHeader = _interopRequireDefault(require("./components/TheHeader"));

var _FooterCta = _interopRequireDefault(require("./components/FooterCta"));

var _TheFooter = _interopRequireDefault(require("./components/TheFooter"));

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @import Scss Modules*/

/** @import JS Module*/

/**@import Components */
var app = (0, _vue.createApp)(_App["default"]);
app.component("TheHeader", _TheHeader["default"]);
app.component("FooterCta", _FooterCta["default"]);
app.component("TheFooter", _TheFooter["default"]);
app.use(_router["default"]);
app.mount("#app");