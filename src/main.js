/** @import Scss Modules*/
import "./scss/vendors.scss";
import "./scss/main.scss";

/** @import JS Module*/
import "bootstrap";

/**@import Components */
import TheHeader from "./components/TheHeader";
import FooterCta from "./components/FooterCta";
import TheFooter from "./components/TheFooter";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("TheHeader", TheHeader);
app.component("FooterCta", FooterCta);
app.component("TheFooter", TheFooter);

app.use(router);
app.mount("#app");
