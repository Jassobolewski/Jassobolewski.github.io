import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CO0jvDXt.js","_app/immutable/chunks/lemDLpx_.js","_app/immutable/chunks/cCwxAksi.js","_app/immutable/chunks/Bsk29_yd.js","_app/immutable/chunks/BsMeZizU.js","_app/immutable/chunks/Dzh9A0sF.js","_app/immutable/chunks/BavELtqP.js","_app/immutable/chunks/DesGnQr3.js","_app/immutable/chunks/BusQ8HLX.js","_app/immutable/chunks/DiebAUcc.js"];
export const stylesheets = ["_app/immutable/assets/0.CBgtlfSP.css"];
export const fonts = [];
