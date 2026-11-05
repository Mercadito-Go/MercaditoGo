// Service worker de Firebase Cloud Messaging para la web (avisos push con la app
// cerrada). Los valores __FIREBASE_*__ los sustituye el paso de publicación con
// los del .env (son datos públicos de la configuración web de Firebase).
// Mientras sigan sin sustituir, este archivo no hace nada.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

var cfg = {
  apiKey: 'AIzaSyD0BR3N6xRfi4eWLgqMNRC-CjxHPiYnl0k',
  appId: '1:991668274219:web:256aa5f112dcfb27c2d66e',
  messagingSenderId: '991668274219',
  projectId: 'mercaditogo-b0287'
};

if (cfg.apiKey.indexOf('__') !== 0) {
  firebase.initializeApp(cfg);
  // Los mensajes llevan "notification": el navegador los muestra solo.
  // Se inicializa el cliente para que FCM los reciba con la app cerrada.
  firebase.messaging();
}

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if ('focus' in list[i]) return list[i].focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
