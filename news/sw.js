// /news/sw.js — 自动每次从网络拉, 附 cache-buster 绕过 GitHub Pages CDN 缓存
// 部署后用户刷新一次, SW 注册并接管, 之后每次部署用户正常刷新即看新版

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    Promise.all([
      clients.claim(),
      clients.matchAll({ includeUncontrolled: true }).then(function(cls) {
        cls.forEach(function(c) { c.postMessage({ type: 'RELOAD' }); });
      })
    ])
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  var accept = e.request.headers.get('accept') || '';
  var isHTML = e.request.mode === 'navigate' || accept.indexOf('text/html') !== -1;

  if (isHTML) {
    // 附 cache-buster, CDN 当成新 URL 直接吐新的
    var freshUrl = url.pathname + '?cb=' + Date.now();
    e.respondWith(
      fetch(freshUrl, { cache: 'no-store', headers: e.request.headers })
        .catch(function() { return fetch(e.request); })
    );
  }
});