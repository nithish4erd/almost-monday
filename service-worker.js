const CACHE='almost-monday-v13';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
self.addEventListener('push',e=>{let d={title:'ALMOST MONDAY',body:'A new campus moment is waiting. 👀',url:'./index.html'};try{d={...d,...e.data.json()}}catch(_){};e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:'./icon-192.png',badge:'./icon-192.png',data:{url:d.url},tag:'almost-monday-push'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const c of list){if('focus'in c)return c.focus()}return clients.openWindow(e.notification.data?.url||'./index.html')}))});
