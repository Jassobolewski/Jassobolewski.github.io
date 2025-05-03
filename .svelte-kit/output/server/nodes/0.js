import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DdqSMFZh.js","_app/immutable/chunks/D4H8NyN4.js","_app/immutable/chunks/Bif6C6bd.js","_app/immutable/chunks/BBBfDBJL.js","_app/immutable/chunks/DRrC8-Cf.js","_app/immutable/chunks/CuQr3efw.js","_app/immutable/chunks/CvSYrwM1.js","_app/immutable/chunks/B3WJfuzV.js","_app/immutable/chunks/CQgLc1Ei.js","_app/immutable/chunks/R1I-B-Fw.js"];
export const stylesheets = ["_app/immutable/assets/0.DCMlUrzH.css"];
export const fonts = [];
