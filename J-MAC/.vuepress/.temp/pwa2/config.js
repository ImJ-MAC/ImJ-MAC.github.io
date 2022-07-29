import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/kstong/Desktop/Python_Dev./Coder/GithubPages/ImJ-MAC/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWHintPopup from "/Users/kstong/Desktop/Python_Dev./Coder/GithubPages/ImJ-MAC/node_modules/vuepress-plugin-pwa2/lib/client/components/SWHintPopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWHintPopup,
    
  ],
});