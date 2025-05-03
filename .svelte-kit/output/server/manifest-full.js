export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Jassobolewski.github.io/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CxSYOWeo.js",app:"_app/immutable/entry/app.DO1mPSpP.js",imports:["_app/immutable/entry/start.CxSYOWeo.js","_app/immutable/chunks/B3WJfuzV.js","_app/immutable/chunks/Bif6C6bd.js","_app/immutable/chunks/CQgLc1Ei.js","_app/immutable/chunks/R1I-B-Fw.js","_app/immutable/entry/app.DO1mPSpP.js","_app/immutable/chunks/Bif6C6bd.js","_app/immutable/chunks/BBBfDBJL.js","_app/immutable/chunks/D4H8NyN4.js","_app/immutable/chunks/DRrC8-Cf.js","_app/immutable/chunks/Bo-SVGsb.js","_app/immutable/chunks/R1I-B-Fw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
