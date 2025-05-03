import { E as attr, F as escape_html, D as pop, A as push } from "../../chunks/index.js";
import { n as navigating } from "../../chunks/index3.js";
const MyFile = "/_app/immutable/assets/Jan_Sobolewski_Resume.C-YAFT3A.pdf";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<header class="sticky top-0 z-50 bg-white shadow-md"><nav class="container mx-auto flex items-center justify-between px-6 py-4"><a href="/" class="text-2xl font-bold text-indigo-600 hover:text-indigo-800">Jan Sobolewski</a> <div class="hidden items-center space-x-6 md:flex"><a href="#about" class="text-gray-600 transition duration-300 hover:text-indigo-600">About</a> <a href="#projects" class="text-gray-600 transition duration-300 hover:text-indigo-600">Projects</a> <a href="#contact" class="text-gray-600 transition duration-300 hover:text-indigo-600">Contact</a> <a${attr("href", MyFile)} target="_blank" class="rounded-md bg-indigo-600 px-4 py-2 text-white transition duration-300 hover:bg-indigo-700">Resume</a></div></nav></header> `;
  children($$payload);
  $$payload.out += `<!----> `;
  if (navigating.to) {
    $$payload.out += "<!--[-->";
    $$payload.out += `navigating to ${escape_html(navigating.to.url.pathname)}`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
