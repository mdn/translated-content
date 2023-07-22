---
title: Interceptar peticiones HTTP
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---

{{AddonSidebar}}

Para interceptar peticiones HTTP, utilice la API {{WebExtAPIRef("webRequest")}}. Esta API le permite agregar detector de eventos para varias etapas en la realización de las solicitudes HTTP. En los listeners, tu puedes:

- Obtener acceso a la solicitud y respuesta de las cabeceras y cuerpos
- Cancelar y redireccionar las solicitudes
- Modificar las solicitudes y respuestas de las cabeceras

En este artículo se verán los tres diferentes usos del módulo `webRequest`:

- Registro de solicitudes de URLs a medida que se realizan.
- Redireccionar las solicitudes.
- Modificar las cabeceras de las solicitud.

## Registrar solicitudes de URLs

Crea un nuevo directorio llamado "requests". En ese directorio, crea un archivo llamado "manifest.json" el cual debe poseer el siguiente contenido:

```json
{
  "description": "Demostrar webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Luego, crea un archivo llamado "background.js" con el siguiente contenido:

```js
function logURL(requestDetails) {
  console.log("Cargando: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

En este punto se utiliza {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} para llamar la función `logURL()` junstamente después de realizar la solicitud. La función `logURL()` se apropia de la solicitud URL del objeto de eventos y lo registra en la consola del navegador. El [patrón](/es/Add-ons/WebExtensions/Match_patterns) `{urls: ["<all_urls>"]}` signinifica que se pueden interceptar todas las solicitudes HTTP de todas las URLs.

Para probarlo, [instala la WebExtension](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox), [abre la consola del navegador](/es/docs/Tools/Browser_Console), y abre algunas páginas Web. En la consola del navegador, deberías ver las URLs de cualquier recurso que el navegador solicita:

{{EmbedYouTube("X3rMgkRkB1Q")}}

## Redireccionar solicitudes

Ahora utilice `webRequest` para redireccionar todas las solicitudes HTTP. Primero, reemplace manifest.json con lo siguiente:

```json
{
  "description": "Demostrar webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "webRequestBlocking"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

El único cambio fue la adición de los [`permisos`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"webRequestBlocking"`. Se necesita preguntar por este extra-permiso todas las veces que se está activamente modificando una solicitud.

Luego, reemplace "background.js" con esto:

```js
var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) {
  console.log("Redireccionando: " + requestDetails.url);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

De nuevo, se utiliza el detector de eventos {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} para ejecutar una función justamente antes de que cada solicitud sea realizada. Esta función reemplazará el objetivo URL con `redirectUrl` que está definido en la función.

Esta vez no se está interceptando cada solicitud: la opción `{urls:[pattern], types:["image"]}` especifica que solo se debería interceptar solicitudes (1) de URLs que residen bajo "https\://developer.mozilla.org/" (2) para recursos de imágenes. Vea {{WebExtAPIRef("webRequest.RequestFilter")}} para más información sobre esto.

Dése cuenta también, que se esta pasando la opción llamada `"blocking"`: se necesita pasar cada vez que se requiera modificar la solicitud. Esto hace que la función del escuchador bloquee la solicitud de la red, así que el navegador espera que el escuchador retorne antes de continuar. Vea la documentación {{WebExtAPIRef("webRequest.onBeforeRequest")}} para conocer más sobre `"blocking"`.

Para probarlo, abra una página de MDN que contenga bastantes imágenes (por ejemplo <https://developer.mozilla.org/es/docs/Tools/Network_Monitor>), [recargue la WebExtension](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on), y luego recargue la página de MDN:

{{EmbedYouTube("ix5RrXGr0wA")}}

## Modificar las cabeceras de la solicitud

Finalmente se utilizará `webRequest` para modificar las cabeceras de las solicitudes. En este ejempo se modificará la cabecera "User-Agent" así que el navegador se identificará por sí mismo como Opera 12.16, pero solamente cuando se visitan páginas de "http\://useragentstring.com/".

El "manifest.json" puede permanecer igual que el ejemplo anterior.

Reemplace "background.js" con el siguiente código:

```js
var targetPage = "http://useragentstring.com/*";

var ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  for (var header of e.requestHeaders) {
    if (header.name == "User-Agent") {
      header.value = ua;
    }
  }
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

Aquí se utiliza el escuchador de eventos {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} para ejecutar una función juntamente antes de que la solicitud de las cabeceras sean enviadas.

La función escuchadora será llamada solamente por solicitudes de URLs que coincidan con el [patrón](/es/Add-ons/WebExtensions/Match_patterns) `targetPage`. Dése cuenta de nuevo que `"blocking"` se ha pasado como una opción. También se pasó `"requestHeaders"`, lo cual significa que al escuchador pasará un array conteniendo las cabeceras de la solicitud que se espera enviar. Vea {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} para más información en estas opciones.

La función escuchadora busca la cabecera "User-Agent" en el array de la solicitud de cabeceras, reemplaza el valor con el valor de la variable `ua`, y regresa el array modificado. Este array modificado será el enviado al servidor.

Para comprobarlo, abra [useragentstring.com](http://useragentstring.com/) y verifique que identifica al navegador como Firefox. Luego recargue el complemento, recargue [useragentstring.com](http://useragentstring.com/), y compruebe que Firefox es identificado ahora como Opera:

{{EmbedYouTube("SrSNS1-FIx0")}}

## Aprenda más

Para aprender más sobre todas las cosas que puede hacer con la API `webRequest`, vea su propia [documentación de referencia](/es/Add-ons/WebExtensions/API/WebRequest).
