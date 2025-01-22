
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13802, hash: 'f2b1c39358f856ec19edaa0bca0a0d1ef41a5fa52ef2702b6d3156a6dcabd155', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '8ddb04aa921e16556eb790431742a2b47413446bbe6e6d336823b4bdbfc88930', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16850, hash: '91f9aa535f856be3ca4248df472cafa0ae13e5b9918088178317079c056309c0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 20426, hash: '38e36e2bee48c1ff8d51810ca75db2b4296f117805ff8cddbd99d3551402e28d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-3H4GCX5V.css': {size: 13164, hash: '9F1D619CGmI', text: () => import('./assets-chunks/styles-3H4GCX5V_css.mjs').then(m => m.default)}
  },
};
