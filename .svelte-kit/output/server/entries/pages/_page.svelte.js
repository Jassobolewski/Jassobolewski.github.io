import { I as getContext, J as sanitize_props, K as rest_props, M as fallback, N as attr_class, E as attr, O as spread_attributes, P as clsx, Q as slot, R as bind_props, D as pop, A as push, S as stringify, T as attr_style } from "../../chunks/index.js";
import { cls } from "@layerstack/tailwind";
import { uniqueId } from "@layerstack/utils";
import { buildFormatters } from "@layerstack/utils/format";
import { getAllKnownLocales, localeStore } from "@layerstack/utils/locale";
import "clsx";
import { enablePatches, setAutoFreeze } from "immer";
import { browser } from "@layerstack/utils/env";
import "@layerstack/utils/object";
import { r as readable, w as writable, d as derived } from "../../chunks/index2.js";
import "@layerstack/utils/serialize";
import "@layerstack/utils/rollup";
import "@layerstack/utils/date";
import "@layerstack/utils/dateRange";
import "@layerstack/utils/number";
import "@layerstack/utils/routing";
import "@layerstack/utils/array";
import { scaleLinear } from "d3-scale";
import { b as base } from "../../chunks/paths.js";
enablePatches();
setAutoFreeze(false);
function matchMedia(queryString) {
  if (browser) {
    const query = window.matchMedia(queryString);
    return readable(query.matches, (set) => {
      const listener = (e) => set(e.matches);
      query.addEventListener("change", listener);
      return () => query.removeEventListener("change", listener);
    });
  } else {
    return writable(true);
  }
}
const matchMediaWidth = (width) => matchMedia(`(min-width: ${width}px)`);
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};
matchMediaWidth(breakpoints.sm);
matchMediaWidth(breakpoints.md);
matchMediaWidth(breakpoints.lg);
matchMediaWidth(breakpoints.xl);
matchMediaWidth(breakpoints.xxl);
matchMedia(`screen`);
matchMedia(`print`);
matchMedia(`(prefers-color-scheme: dark)`);
matchMedia(`(prefers-color-scheme: light)`);
matchMedia(`(prefers-reduced-motion: reduce)`);
matchMedia(`(orientation: landscape)`);
matchMedia(`(orientation: portrait)`);
class CurrentTheme {
  /** The currently selected theme. If using the "system" theme this will be null. */
  theme;
  /** Whether the current theme is a light or dark theme */
  dark;
  constructor(theme, dark) {
    this.theme = theme;
    this.dark = dark;
  }
  /** The theme in use, either the selected theme or the theme chosen based on the "system" setting. */
  get resolvedTheme() {
    if (this.theme) {
      return this.theme;
    } else {
      return this.dark ? "dark" : "light";
    }
  }
}
function createThemeStore(options) {
  let store = writable(new CurrentTheme(null, false));
  if (!browser) {
    return {
      subscribe: store.subscribe,
      setTheme: (themeName) => {
        store.set(new CurrentTheme(themeName, options.dark.includes(themeName)));
      }
    };
  }
  let darkMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  function resolveSystemTheme({ matches }) {
    if (options.dark.length) {
      if (matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    store.set(new CurrentTheme(null, matches));
  }
  function setTheme(themeName) {
    if (themeName === "system") {
      localStorage.removeItem("theme");
      delete document.documentElement.dataset.theme;
      resolveSystemTheme(darkMatcher);
      darkMatcher.addEventListener("change", resolveSystemTheme);
    } else {
      darkMatcher.removeEventListener("change", resolveSystemTheme);
      localStorage.theme = themeName;
      document.documentElement.dataset.theme = themeName;
      let dark = options.dark.includes(themeName);
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      store.set(new CurrentTheme(themeName, dark));
    }
  }
  let savedTheme = localStorage.getItem("theme") || "system";
  setTheme(savedTheme);
  return {
    subscribe: store.subscribe,
    setTheme
  };
}
const settingsKey = Symbol();
function createLocaleStores(settings) {
  if (settings.locale && settings.localeSettings && settings.format) {
    return {
      locale: settings.locale,
      localeSettings: settings.localeSettings,
      format: settings.format
    };
  }
  let allLocales = getAllKnownLocales(settings.localeFormats);
  let locale = localeStore(settings.forceLocale, settings.fallbackLocale);
  let localeSettings = derived(locale, ($locale) => {
    let settings2 = allLocales[$locale];
    if (settings2) {
      return settings2;
    }
    return {
      ...allLocales.en,
      locale: $locale
    };
  });
  return {
    locale,
    localeSettings,
    format: derived(localeSettings, buildFormatters)
  };
}
function createShowDrawer() {
  return writable(true);
}
let FALLBACK_SETTINGS = null;
function getFallbackSettings() {
  FALLBACK_SETTINGS = FALLBACK_SETTINGS ?? {
    currentTheme: createThemeStore({ dark: [] }),
    componentSettingsCache: {},
    showDrawer: createShowDrawer(),
    ...createLocaleStores({})
  };
  return FALLBACK_SETTINGS;
}
function getSettings() {
  try {
    return getContext(settingsKey) ?? getFallbackSettings();
  } catch (error) {
    return getFallbackSettings();
  }
}
function resolveComponentClasses(theme) {
  return typeof theme === "string" ? { root: theme } : theme ?? {};
}
function getComponentClasses(name) {
  const settings = getSettings();
  return resolveComponentClasses(settings?.components?.[name]?.classes);
}
function Shine($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "lightColor",
    "lightRadius",
    "depth",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "classes"
  ]);
  push();
  let lightColor = fallback($$props["lightColor"], "#666666");
  let lightRadius = fallback($$props["lightRadius"], 300);
  let depth = fallback($$props["depth"], 1);
  let surfaceScale = fallback($$props["surfaceScale"], 2);
  let specularConstant = fallback($$props["specularConstant"], 0.75);
  let specularExponent = fallback($$props["specularExponent"], 120);
  let classes = fallback($$props["classes"], () => ({}), true);
  const settingsClasses = getComponentClasses("Shine");
  const filterId = uniqueId("filter-");
  let mouse = { x: 0, y: 0 };
  let wrapperBox = { left: 0, top: 0 };
  $$payload.out += `<svg${attr_class(clsx(cls("fixed inset-0 pointer-events-none", settingsClasses.svg, classes?.svg)))}><filter${attr("id", filterId)} color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha"${attr("stdDeviation", depth)}></feGaussianBlur><feSpecularLighting result="light-source"${attr("surfaceScale", surfaceScale)}${attr("specularConstant", specularConstant)}${attr("specularExponent", specularExponent)}${attr("lighting-color", lightColor)}><fePointLight${attr("x", mouse.x - wrapperBox.left)}${attr("y", mouse.y - wrapperBox.top)}${attr("z", lightRadius)}></fePointLight></feSpecularLighting><feComposite result="reflections" in="light-source" in2="SourceAlpha" operator="in"></feComposite><feComposite in="SourceGraphic" in2="reflections" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"></feComposite></filter></svg> <div${spread_attributes(
    {
      ...$$restProps,
      class: clsx(cls("inline-block", settingsClasses.root, classes?.root, $$sanitized_props.class))
    },
    null,
    void 0,
    { filter: `url(#${stringify(filterId)})` }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    lightColor,
    lightRadius,
    depth,
    surfaceScale,
    specularConstant,
    specularExponent,
    classes
  });
  pop();
}
function Tilt($$payload, $$props) {
  push();
  let maxRotation = fallback($$props["maxRotation"], 20);
  let setBrightness = fallback($$props["setBrightness"], false);
  let className = fallback($$props["class"], void 0);
  const settingsClasses = getComponentClasses("Tilt");
  let width = 0;
  let height = 0;
  let rotateX = 0;
  let rotateY = 0;
  let brightness = 1;
  scaleLinear().domain([0, height]).range([-maxRotation, maxRotation]);
  scaleLinear().domain([0, width]).range([maxRotation, -maxRotation]);
  scaleLinear().domain([0, height]).range([2, 1]);
  $$payload.out += `<div${attr_class(clsx(cls("Tilt [perspective:600px]", "[&>*]:[transform:rotateX(var(--rotateX))_rotateY(var(--rotateY))]", "[&>*]:brightness-[var(--brightness)]", settingsClasses.root, className)))}${attr_style("", {
    "--rotateX": `${stringify(rotateX)}deg`,
    "--rotateY": `${stringify(rotateY)}deg`,
    "--brightness": brightness
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { maxRotation, setBrightness, class: className });
  pop();
}
function _page($$payload) {
  $$payload.out += `<main><section id="hero" class="bg-gray-100 py-20 md:py-32"><div class="container mx-auto px-6 text-center"><h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-6xl">Hi, I'm Jan Sobolewski</h1> <p class="mb-6 text-lg font-semibold text-indigo-700 md:text-2xl">Computer Science Student</p> <p class="text-md mx-auto mb-8 max-w-2xl text-gray-600 md:text-lg">A driven Computer Science student with a proven foundation in software
        development (Fanshawe College Advanced Diploma, Dean's Honour Roll 6x).
        Skilled in C++, Java, C#, and web technologies, passionate about
        building efficient applications and solving complex problems. Eager to
        contribute to innovative projects.</p> <a href="#projects" class="mr-4 rounded-md bg-indigo-600 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-indigo-700">View My Work</a> <a href="#contact" class="rounded-md border border-indigo-600 px-8 py-3 text-lg font-medium text-indigo-600 transition duration-300 hover:bg-indigo-50">Get In Touch</a></div></section> <section id="about" class="py-16 md:py-24"><div class="container mx-auto px-6"><h2 class="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">About Me</h2> <div class="flex flex-col items-center md:flex-row md:space-x-12"><div class="mb-8 md:mb-0 md:w-1/3"><img${attr("src", `${stringify(base)}src/lib/assets/Image.jpeg`)} alt="Your Name" class="mx-auto rounded-lg shadow-lg"></div> <div class="text-lg leading-relaxed text-gray-700 md:w-2/3"><p class="mb-4">Currently pursuing a Bachelor of Science in Computer Science at
            Western University, building upon a comprehensive Computer
            Programmer Analyst Advanced Diploma from Fanshawe College (graduated
            with a 4.12 GPA and 6x Dean's Honour Roll awards). My education
            provides a strong mix of theoretical knowledge (Data Structures,
            Algorithms) and practical application development skills. I'm
            passionate about the entire software development lifecycle, from
            design to deployment, with experience gained through diverse coding
            projects using languages like C++, Java, C#, and JavaScript, along
            with frameworks like ASP.NET, React, and Angular. I enjoy tackling
            challenges, whether it's building emulators, developing full-stack
            applications with SQL databases, or leveraging cloud services like
            Azure. I thrive in team environments, value clear communication, and
            am always eager to learn – currently expanding my knowledge in Rust
            and staying updated on emerging tech trends. I'm actively seeking
            opportunities to apply my skills and contribute to impactful
            projects.</p> <div class="mt-8">`;
  Tilt($$payload, {
    class: "transition duration-500 hover:scale-110",
    children: ($$payload2) => {
      $$payload2.out += `<h3 class="mb-4 text-xl font-semibold text-gray-800">Key Skills:</h3> <ul class="flex flex-wrap gap-2"><li class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">Programming Languages: C++, C#, Java, JavaScript, SQL, HTML,
                  CSS, C</li> <li class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">Frameworks/Libraries: React, Angular, Node.js, ASP.NET,
                  OpenGL, Java Swing</li> <li class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">Databases: SQL Server (MSSQL), JSON</li> <li class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">Tools &amp; Platforms: Git, GitHub, Azure, Visual Studio, Android
                  Studio, Jira</li> <li class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">Concepts: Object-Oriented Programming (OOP), Agile
                  Development, REST API Design, Data Structures &amp; Algorithms,
                  Full-Stack Development, CRUD Operations, User-Centered Design</li> <li class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">Collaboration: Teamwork, Communication, Problem-Solving,
                  Adaptability</li></ul>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div></div></section> <section id="education" class="bg-white py-16 md:py-24"><div class="container mx-auto px-6"><h2 class="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Education</h2> <div class="mx-auto max-w-3xl space-y-8">`;
  Tilt($$payload, {
    class: "overflow-hidden transition duration-300 hover:scale-110",
    children: ($$payload2) => {
      $$payload2.out += `<div class="rounded-lg bg-white p-6 shadow-md"><h3 class="mb-1 text-xl font-semibold text-indigo-700">Bachelor of Science, Computer Science</h3> <p class="mb-1 font-medium text-gray-800">Western University | London, Ontario</p> <p class="mb-2 text-sm text-gray-600">September 2023 – December 2026 (Expected)</p> <p class="text-gray-700"><span class="font-semibold">Relevant Skills/Coursework:</span> Agile
              Development, Data Structures and Algorithms, Linear Algebra</p></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Tilt($$payload, {
    class: "overflow-hidden transition duration-300 hover:scale-110",
    children: ($$payload2) => {
      $$payload2.out += `<div class="rounded-lg bg-white p-6 shadow-md"><h3 class="mb-1 text-xl font-semibold text-indigo-700">Ontario College Advanced Diploma, Computer Programmer Analyst</h3> <p class="mb-1 font-medium text-gray-800">Fanshawe College | London, Ontario | CO-OP Program</p> <p class="mb-2 text-sm text-gray-600">September 2019 – December 2022 (Graduated)</p> <ul class="list-inside list-disc text-sm text-gray-700"><li>Cumulative GPA: 4.12</li> <li>Awards: Dean's Honour Roll (6x)</li></ul></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></section> <section id="projects" class="bg-gray-50 py-16 md:py-24"><div class="container mx-auto px-6"><h2 class="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">My Projects</h2> `;
  Shine($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="grid grid-cols-3 grid-rows-1 gap-4">`;
      Tilt($$payload2, {
        class: "overflow-hidden transition duration-300 hover:scale-110",
        children: ($$payload3) => {
          $$payload3.out += `<div class="rounded-lg bg-white shadow-lg transition hover:shadow-xl"><img src="https://via.placeholder.com/600x400" alt="Project 1 Thumbnail" class="h-48 w-full object-cover"> <div class="p-6"><h3 class="mb-2 text-xl font-semibold text-gray-800">Chip 8 Emulator (C++)</h3> <p class="mb-4 text-sm text-gray-600">Developed a functional Chip 8 emulator using C++ and OpenGL to
                  simulate virtual CPU cycles and graphics rendering, applying
                  Object-Oriented Programming principles.</p></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Tilt($$payload2, {
        class: "transition duration-500 hover:scale-110",
        children: ($$payload3) => {
          $$payload3.out += `<div class="overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"><img src="https://via.placeholder.com/600x400" alt="Project 2 Thumbnail" class="h-48 w-full object-cover"> <div class="p-6"><h3 class="mb-2 text-xl font-semibold text-gray-800">Note-Taking App (Android/Java)</h3> <p class="mb-4 text-sm text-gray-600">reated an Android application using Java and JSON for data
                  storage. Focused on user-centered design principles and agile
                  methodologies to enhance performance and usability.</p></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Tilt($$payload2, {
        class: "transition duration-500 hover:scale-110",
        children: ($$payload3) => {
          $$payload3.out += `<div class="overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"><img src="https://via.placeholder.com/600x400" alt="Project 3 Thumbnail" class="h-48 w-full object-cover"> <div class="p-6"><h3 class="mb-2 text-xl font-semibold text-gray-800">Bezier Pen Tool (C++)</h3> <p class="mb-4 text-sm text-gray-600">Created a Bezier pen tool that lets you make 2D Bezier curves
                  in a OpenGL window.</p></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></section> <div class="container mx-auto px-6 text-center"><section id="contact" class="py-16 md:py-24"><p class="mx-auto mb-8 max-w-lg text-lg text-gray-600">I'm actively seeking co-op, internship, and software development
        opportunities where I can apply my skills and continue to learn. Feel
        free to reach out via email or connect with me on LinkedIn or GitHub!</p> <a href="mailto:your.email@example.com" class="inline-block rounded-md bg-indigo-600 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-indigo-700">Email Me</a> <div class="mt-12 flex justify-center space-x-6"><a href="https://www.linkedin.com/in/jan-sobolewski-65990119b/" target="_blank" rel="noopener noreferrer" class="text-gray-500 transition duration-300 hover:text-indigo-600"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> <span class="sr-only">LinkedIn</span></a> <a href="https://github.com/Jassobolewski" target="_blank" rel="noopener noreferrer" class="text-gray-500 transition duration-300 hover:text-indigo-600"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> <span class="sr-only">GitHub</span></a></div></section></div></main> <footer class="bg-gray-800 py-8 text-gray-400"><div class="container mx-auto px-6 text-center"><p class="text-sm">© 2024 Jan Sobolewski. All rights reserved.</p></div></footer>`;
}
export {
  _page as default
};
