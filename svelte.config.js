import adapter from "@sveltejs/adapter-static";
const dev = process.env.NODE_ENV === "development";
const repoName = "Jassobolewski.github.io"; // your repo name
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    paths: {
      base: dev ? "" : `/${repoName}`,
    },
  },
};

export default config;
