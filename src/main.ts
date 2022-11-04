import { createSSRApp } from "vue";
import * as Pinia from 'pinia'
import tmui from './tmui'
import App from "./App.vue";
import * as tools from './utils/tools'
// import './style/common.css'
export function createApp() {
  const app = createSSRApp(App);
  app.config.globalProperties.$tools = tools;
  app.use(Pinia.createPinia());
  app.use(tmui);
  return {
    app,
  };
}
