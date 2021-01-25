import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

// FontAwesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faApple,
  faGoogle,
  faFacebook,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faTimes,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faChevronLeft,
  faTimes,
  faApple,
  faGoogle,
  faFacebook,
  faPhone,
  faFontAwesome
);

// Shared Components
import { NavigationHeader, IconButton } from "./components/shared";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("tapa-icon-button", IconButton)
  .component("tapa-navigation-header", NavigationHeader)
  .mount("#app");
