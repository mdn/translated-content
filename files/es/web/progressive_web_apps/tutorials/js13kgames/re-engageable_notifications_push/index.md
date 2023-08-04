---
title: Cómo hacer que las PWAs se puedan volver a conectar usando Notificaciones y Push
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
---

{{PreviousMenuNext("Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive/Loading", "Web/Apps/Progressive")}}

Tener la capacidad de almacenar en caché el contenido de una aplicación para que funcione sin conexión es una gran característica. Permitir que el usuario instale la aplicación web en su pantalla de inicio es aún mejor. Pero en lugar de depender solo de las acciones del usuario, podemos hacer más, utilizando mensajes `push` y notificaciones para volver a interactuar automáticamente y entregar contenido nuevo siempre que esté disponible.

## Dos APIs, un objetivo

[API Push](/es/docs/Web/API/Push_API) y [API de notificaciones](/es/docs/Web/API/Notifications_API) son dos APIs independientes, pero funcionan bien juntas cuando deseas proporcionar una funcionalidad atractiva en tu aplicación. `Push` se utiliza para entregar contenido nuevo desde el servidor a la aplicación sin ninguna intervención del lado del cliente, y su operación es manejada por el servicio _worker_ de la aplicación. El servicio _worker_ puede utilizar las notificaciones para mostrar nueva información al usuario, o al menos alertarlo cuando algo se haya actualizado.

Funcionan fuera de la ventana del navegador, al igual que el servicio _worker_, por lo que se pueden enviar actualizaciones y se pueden mostrar notificaciones cuando la página de la aplicación está desenfocada o incluso cerrada.

## Notificaciones

Comencemos con las notificaciones: pueden funcionar sin `push`, pero son muy útiles cuando se combinan con ellas. Para empezar, veámoslo de forma aislada.

### Pedir permiso

Para mostrar una notificación, primero debes solicitar permiso. Sin embargo, en lugar de mostrar la notificación de inmediato, la mejor práctica dicta que deberíamos mostrar la ventana emergente cuando el usuario la solicite haciendo clic en un botón:

```js
var button = document.getElementById("notifications");
button.addEventListener("click", function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

Esto muestra una ventana emergente usando el propio servicio de notificaciones del sistema operativo:

![Notificación de js13kPWA.](js13kpwa-notification.png)

Cuando el usuario confirma recibir notificaciones, la aplicación las puede mostrar. El resultado de la acción del usuario puede ser predeterminada, otorgada o denegada. La opción predeterminada se elige cuando el usuario no hace una elección, y las otras dos se establecen cuando el usuario hace clic en sí o no, respectivamente.

Cuando se acepta, el permiso funciona tanto para notificaciones como para `push`.

### Crea una notificación

La aplicación de ejemplo crea una notificación a partir de los datos disponibles: se elige un juego al azar y el elegido alimenta la notificación con el contenido — establece el nombre del juego como título, menciona al autor en el cuerpo y muestra la imagen como un icono:

```js
function randomNotification() {
  var randomItem = Math.floor(Math.random() * games.length);
  var notifTitle = games[randomItem].name;
  var notifBody = "Creado por " + games[randomItem].author + ".";
  var notifImg = "data/img/" + games[randomItem].slug + ".jpg";
  var options = {
    body: notifBody,
    icon: notifImg,
  };
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

Se crea una nueva notificación aleatoria cada 30 segundos hasta que se vuelve demasiado molesta y el usuario la desactiva. (En una aplicación real, las notificaciones deberían ser mucho menos frecuentes y más útiles). La ventaja de la API de notificaciones es que utiliza la funcionalidad de notificación del sistema operativo. Esto significa que las notificaciones se pueden mostrar al usuario incluso cuando no están mirando la aplicación web, y las notificaciones son similares a las que muestran las aplicaciones nativas.

## `Push`

`Push` es más complicado que las notificaciones: necesitamos suscribirnos a un servidor que luego enviará los datos a la aplicación. El servicio _worker_ de la aplicación recibirá datos `push` del servidor, que luego se pueden mostrar usando el sistema de notificaciones u otro mecanismo si lo deseas.

La tecnología aún se encuentra en una etapa muy temprana; algunos ejemplos de uso utilizan la plataforma de mensajería en la nube de Google, pero se están reescribiendo para admitir IDVAP (**Id**entificación **vo**luntaria de la **ap**licación), que ofrece una capa adicional de seguridad para tu aplicación. Puedes examinar los [ejemplos del libro de recetas del servicio _workers_](https://github.com/mdn/serviceworker-cookbook/push-payload.html), intenta configurar un servidor de mensajería `push` usando [Firebase](https://firebase.google.com/), o crea tu propio servidor (utilizando Node.js, por ejemplo).

Como se mencionó anteriormente, para poder recibir mensajes `push`, debes tener un servicio _worker_, cuyos conceptos básicos ya se explican en [Cómo hacer que las PWAs funcionen sin conexión con el servicio workers](/es/docs/Web/Apps/Progressive/Offline_Service_workers). Dentro del servicio _workers_, se crea un mecanismo de suscripción del servicio `push`.

```js
registration.pushManager.getSubscription().then(/* ... */);
```

Una vez que el usuario está suscrito, puede recibir notificaciones automáticas del servidor.

Desde el lado del servidor, todo el proceso tiene que estar encriptado con claves públicas y privadas por razones de seguridad — permitir que todos envíen mensajes `push` sin seguridad usando tu aplicación sería una idea terrible. Consulta la [página de prueba de encriptación de datos `Push` en la Web](https://jrconlin.github.io/WebPushDataTestPage/) para obtener información detallada sobre cómo proteger el servidor. El servidor almacena toda la información recibida cuando el usuario se suscribió, por lo que los mensajes se pueden enviar más tarde cuando sea necesario.

Para recibir mensajes `push`, podemos escuchar el evento [`push`](/es/docs/Web/Reference/Events/push) en el archivo `Service Worker`:

```js
self.addEventListener("push", function (e) {
  /* ... */
});
```

Los datos se pueden recuperar y luego mostrar como una notificación al usuario inmediatamente. Esto, por ejemplo, se puede usar para recordarle algo al usuario o para informarle sobre contenido nuevo disponible en la aplicación.

### Ejemplo `push`

`Push` necesita que la parte del servidor funcione, por lo que no podemos incluirla en el ejemplo js13kPWA alojado en las páginas de GitHub, ya que solo ofrece alojamiento de archivos estáticos. Todo se explica en el [Libro de recetas para servicios _worker_](https://github.com/mdn/serviceworker-cookbook/); consulta el [Demo de carga `push`](https://github.com/mdn/serviceworker-cookbook/push-payload.html).

Esta demostración consta de tres archivos:

- [index.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/index.js), que contiene el código fuente de nuestra aplicación
- [server.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/server.js), que contiene la parte del servidor (escrito en Node.js)
- [service-worker.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/service-worker.js), que contiene el código específico de `Service Worker`.

Exploremos todos estos

#### `index.js`

El archivo `index.js` comienza registrando el servicio `worker`:

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then(function (registration) {
    return registration.pushManager
      .getSubscription()
      .then(async function (subscription) {
        // parte de registro
      });
  })
  .then(function (subscription) {
    // parte de la suscripción
  });
```

Es un poco más complicado que el servicio _worker_ que vimos en la [demostración de js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/). En este caso particular, después de registrarse, usamos el objeto de registro para suscribirnos y luego usamos el objeto de suscripción resultante para completar todo el proceso.

En la parte de registro, el código se ve así:

```js
if (subscription) {
  return subscription;
}
```

Si el usuario ya se ha suscrito, devolvemos el objeto de suscripción y pasamos a la parte de suscripción. Si no, iniciamos una nueva suscripción:

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

La aplicación obtiene la clave pública del servidor y convierte la respuesta en texto; luego se debe convertir a un Uint8Array (para admitir Chrome). Para obtener más información sobre las claves _IDVAP_, puedes leer [Envío de notificaciones _WebPush_ identificadas por _IDVAP_ a través de la publicación de blog del servicio `Push` de Mozilla](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/).

La aplicación ahora puede usar {{DOMxRef("PushManager")}} para suscribir al nuevo usuario. Hay dos opciones pasadas al método {{DOMxRef("PushManager.subscribe()")}} — la primera es `userVisibleOnly: true`, lo cual significa que todas las notificaciones enviadas al usuario serán visibles para ellos, y el segundo es `applicationServerKey`, que contiene nuestra clave _IDVAP_ adquirida y convertida con éxito.

```js
return registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

Ahora pasemos a la parte de la suscripción: la aplicación primero envía los detalles de la suscripción como JSON al servidor mediante `Fetch`.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    subscription: subscription,
  }),
});
```

Luego, se define la función {{DOMxRef("onclick", "GlobalEventHandlers.onclick")}} en el botón _Suscribirse_:

```js
document.getElementById("doIt").onclick = function () {
  const payload = document.getElementById("notification-payload").value;
  const delay = document.getElementById("notification-delay").value;
  const ttl = document.getElementById("notification-ttl").value;

  fetch("./sendNotification", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      subscription: subscription,
      payload: payload,
      delay: delay,
      ttl: ttl,
    }),
  });
};
```

Cuando se hace clic en el botón, `fetch` solicita al servidor que envíe la notificación con los parámetros dados: `payload` es el texto que se mostrará en la notificación, `delay` define un retraso en segundos hasta que se muestra la notificación, y `ttl` es la configuración de tiempo de vida que mantiene la notificación disponible en el servidor durante un período de tiempo específico, también definido en segundos.

Ahora, en el siguiente archivo JavaScript.

#### `server.js`

La parte del servidor está escrita en Node.js y se debe alojar en un lugar adecuado, que es un tema de un artículo completamente separado. Aquí solo proporcionaremos una descripción general de alto nivel.

El [módulo `web-push`](https://www.npmjs.com/package/web-push) se utiliza para configurar las claves `IDVAP` y, opcionalmente, generarlas si aún no están disponibles.

```js
const webPush = require("web-push");

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log(
    "Debes configurar las variables de entorno VAPID_PUBLIC_KEY y " +
      "VAPID_PRIVATE_KEY. Puedes utilizar las siguientes: ",
  );
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  "https://github.com/mdn/serviceworker-cookbook/",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);
```

A continuación, un módulo define y exporta todas las rutas que una aplicación necesita manejar: obtener la clave pública _IDVAP_, registrarse y luego enviar notificaciones. Puedes ver las variables del archivo `index.js` que se está utilizando: `payload`, `delay` y `ttl`.

```js
module.exports = function (app, route) {
  app.get(route + "vapidPublicKey", function (req, res) {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(route + "register", function (req, res) {
    res.sendStatus(201);
  });

  app.post(route + "sendNotification", function (req, res) {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl,
    };

    setTimeout(function () {
      webPush
        .sendNotification(subscription, payload, options)
        .then(function () {
          res.sendStatus(201);
        })
        .catch(function (error) {
          console.log(error);
          res.sendStatus(500);
        });
    }, req.body.delay * 1000);
  });
};
```

#### `service-worker.js`

El último archivo que veremos es el del servicio _worker_:

```js
self.addEventListener("push", function (event) {
  const payload = event.data ? event.data.text() : "no payload";
  event.waitUntil(
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: payload,
    }),
  );
});
```

Todo lo que hace es agregar un escucha para el evento [`push`](/es/docs/Web/Reference/Events/push), crear la variable de carga útil que consiste en el texto tomado de los datos (o crear una cadena para usar si los datos están vacíos), y luego esperar hasta la notificación se muestra al usuario.

No dudes en explorar el resto de los ejemplos en el [Libro de recetas para el servicio _workers_](https://github.com/mdn/serviceworker-cookbook/) si deseas saber cómo se manejan: el [código fuente completo está disponible en GitHub](https://github.com/mozilla/serviceworker-cookbook/). Hay una gran colección de ejemplos de uso que muestran el uso general, pero también la inserción web, las estrategias de almacenamiento en caché, el rendimiento, el trabajo sin conexión y más.

{{PreviousMenuNext("Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive/Loading", "Web/Apps/Progressive")}}

{{QuickLinksWithSubpages("/es/docs/Web/Progressive_web_apps/")}}
