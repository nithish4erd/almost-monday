const CACHE='a-college-1000-days-v23';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./sitcom-wallpaper.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin)return;
 event.respondWith(caches.match(req).then(cached=>{
  if(cached)return cached;
  return fetch(req).then(response=>{
   if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));}
   return response;
  }).catch(()=>{if(req.mode==='navigate')return caches.match('./index.html');return new Response('',{status:503,statusText:'Offline asset unavailable'});});
 }));
});
self.addEventListener('push',event=>{
 let data={title:'A COLLEGE OF 1000 DAYS',body:'A new campus moment is waiting.',url:'./index.html'};
 try{if(event.data)data={...data,...event.data.json()};}catch(_){}
 event.waitUntil(self.registration.showNotification(data.title,{body:data.body,icon:'./icon-192.png',badge:'./icon-192.png',data:{url:data.url},tag:'a1000-push'}));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
  for(const client of list){if('focus'in client)return client.focus();}
  return self.clients.openWindow(event.notification.data?.url||'./index.html');
 }));
});
