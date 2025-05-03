import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
    paths: {
      base: "",
    },
    prerender: {
      handleHttpError: "warn",
    },
  },
};

export default config;
