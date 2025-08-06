// @ts-check
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
    site: "https://neonmint.efeele.dev",
    integrations: [preact(), icon(), sitemap({
        filter: (page) =>
            !page.includes("/blog/tags") &&
            !page.includes("/blog/techs"),
    }),],

    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            theme: 'github-dark'
        },
    },
});
