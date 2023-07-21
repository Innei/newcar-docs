import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

export const sharedConfig = defineConfig({
  title: "Newcar",
  appearance: "dark",
  themeConfig: {
    outline: 2,
    search: {
      provider: "local"
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Bug-Duck/newcar"
      }
    ],
    footer: {
      message: "Released under the Apache-2.0 license",
      copyright: "Copyright © 2023-present BugDuck"
    }
  },
  vite: {
    plugins: [UnoCSS()]
  }
});
