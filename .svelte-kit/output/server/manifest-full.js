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
		client: {start:"_app/immutable/entry/start.tbvu3QQD.js",app:"_app/immutable/entry/app.CFTDujZe.js",imports:["_app/immutable/entry/start.tbvu3QQD.js","_app/immutable/chunks/x0OAiZgc.js","_app/immutable/chunks/COxtZHMa.js","_app/immutable/chunks/airTDF5t.js","_app/immutable/chunks/C82JrB-z.js","_app/immutable/entry/app.CFTDujZe.js","_app/immutable/chunks/COxtZHMa.js","_app/immutable/chunks/CkR5JjnQ.js","_app/immutable/chunks/djNO61ht.js","_app/immutable/chunks/CHdRZtPq.js","_app/immutable/chunks/DM6ccm6n.js","_app/immutable/chunks/C82JrB-z.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
