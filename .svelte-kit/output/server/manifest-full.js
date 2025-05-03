export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.cZy_kW1H.js",app:"_app/immutable/entry/app.ywA_5Whk.js",imports:["_app/immutable/entry/start.cZy_kW1H.js","_app/immutable/chunks/_fC4Wwws.js","_app/immutable/chunks/cCwxAksi.js","_app/immutable/chunks/BusQ8HLX.js","_app/immutable/chunks/DiebAUcc.js","_app/immutable/entry/app.ywA_5Whk.js","_app/immutable/chunks/cCwxAksi.js","_app/immutable/chunks/Bsk29_yd.js","_app/immutable/chunks/lemDLpx_.js","_app/immutable/chunks/BsMeZizU.js","_app/immutable/chunks/DmiQ7at6.js","_app/immutable/chunks/DiebAUcc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
