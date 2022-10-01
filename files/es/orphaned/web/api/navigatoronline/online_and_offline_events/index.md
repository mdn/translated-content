---
title: Eventos online y offline
slug: orphaned/Web/API/NavigatorOnLine/Online_and_offline_events
tags:
  - AJAX
  - DOM
  - Desarrollo_Web
  - Todas_las_Categorías
translation_of: Web/API/NavigatorOnLine/Online_and_offline_events
original_slug: Web/API/NavigatorOnLine/Online_and_offline_events
---
[Firefox 3](/es/Firefox_3_para_desarrolladores) implementa [eventos Online/Offline](http://www.whatwg.org/specs/web-apps/current-work/#offline) de la [especificacióbn WHATWG Web Applications 1.0](http://www.whatwg.org/specs/web-apps/current-work/).

### Descripción

Para poder construir una aplicación web offline-funcional, necesitas conocer cuándo está tu aplicación realmente offline. Además, también necesitas conocer cuándo vuelve la aplicación al estado 'online' nuevamente. A efectos prácticos, los requisitos son los siguientes:

1. Necesitas conocer cuándo el usuario vuelve a estar online, para que puedas re-sincronizar con el servidor.
2. Necesitas conocer cuándo el usuario está offline, para así estar seguro de poner en cola las peticiones al servidor para más tarde.

Es este proceso el que los eventos online/offline ayudan a trivializar.

Tu aplicación web quizás necesite establecer que ciertos documentos se mantengan en la caché de recursos offline. Para hacerlo, incluye elementos `LINK` en tu sección `HEAD` de la siguiente manera:

```html
<link rel="offline-resource" href="mi_recurso>
```

Cuando Firefox 3 o superiores procesan el HTML, esto causará que el recurso referenciado se mantenga en caché para su uso offline en un recurso especial de la caché.

### API

#### `navigator.onLine`

[`navigator.onLine`](/es/DOM/window.navigator.onLine) es una propiedad que mantiene un valor `true`/`false` (`true` para online, `false` para offline). Esta propiedad se actualiza siempre que el usuario cambia hacia "Modo sin conexión" seleccionando el menú correspondiente (Archivo -> Trabajar sin conexión en Firefox).

Además, esta propiedad se debería actualizar siempre que el navegador no sea capaz de conectarse a la red. De acuerdo con la especificación:

> El atributo `navigator.onLine` debe devolver false si el agente de usuario no contactará con la red cuando el usuario siga los enlaces o cuando un script solicite una página remota (o sepa que intentarlo fallaría)...

Firefox 2 actualiza esta propiedad cuando cambia desde/hacia el modo offline del navegador, y cuando pierde/recupera la conectividad de la red en Windows y Linux.

Esta propiedad existía en versiones más antiguas de Firefox e Internet Explorer (la especificación surgió a partir estas implementaciones previas), así que puedes comenzar a usarla inmediatamente. La detección automática del estado de la red se implementó en Firefox 2.

#### eventos "`online`" y "`offline`"

[Firefox 3](/es/Firefox_3_para_desarrolladores) introduce dos nuevos eventos: "`online`" y "`offline`". Estos dos eventos son iniciados en el `<body>` de cada página cuando el usuario cambia de modo online a offline. Además, los eventos emergen desde `document.body` a `document`, terminando en `window`. Ambos eventos son no-cancelables (no se puede evitar que el usuario pase a modo online u offline).

Puedes registrar _listeners_ para estos eventos de varias maneras habituales:

- Usando [`addEventListener`](/es/DOM/element.addEventListener) en `window`, `document` o `document.body`
- estableciendo las propiedades `.ononline` u `.onoffline` en `document` o `document.body` para que apunten a un objeto JavaScript `Function` (**Nota:** usar `window.ononline` o `window.onoffline` no funcionará por razones de compatibilidad).
- especificando los atributos `ononline="..."` u `onoffline="..."` en la etiqueta `<body>` en el código HTML.

### Ejemplo:

Hay una [prueba sencilla](https://bugzilla.mozilla.org/attachment.cgi?id=220609) que puedes ejecutar para verificar que los eventos están funcionando.

```html
<!doctype html>
<html>
<head>
  <script>
    function updateOnlineStatus(msg) {
      var status = document.getElementById("status");
      var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
      status.setAttribute("class", condition);
      var state = document.getElementById("state");
      state.innerHTML = condition;
      var log = document.getElementById("log");
      log.appendChild(document.createTextNode("Event: " + msg + "; status=" + condition + "\n"));
    }
    function loaded() {
      updateOnlineStatus("load");
      document.body.addEventListener("offline", function () {
        updateOnlineStatus("offline")
      }, false);
      document.body.addEventListener("online", function () {
        updateOnlineStatus("online")
      }, false);
    }
  </script>
  <style>...</style>
</head>
<body onload="loaded()">
  <div id="status"><p id="state"></p></div>
  <div id="log"></div>
</body>
</html>
```

### Referencias

- [Sección 'Eventos Online/Offline ' de la especificación WHATWG Web Applications 1.0](http://www.whatwg.org/specs/web-apps/current-work/#offline)
- [El bug que documenta la implementación de los eventos online/offline en Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=336359) y un enlace [con una modificación posterior](https://bugzilla.mozilla.org/show_bug.cgi?id=336682)
- [Un ejemplo sencillo](https://bugzilla.mozilla.org/attachment.cgi?id=220609)
- [Una explicación de los eventos Online/Offline](http://ejohn.org/blog/offline-events/)
