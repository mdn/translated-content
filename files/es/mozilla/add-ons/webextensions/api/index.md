---
title: API
slug: Mozilla/Add-ons/WebExtensions/API
---

Las API de JavaScript para las Extensiones Web se pueden usar dentro de los [scripts en segundo plano](/es/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) de la extensión y en cualquier otro documento contenido en la extensión, incluyendo las ventanas emergentes de [acción de página](/es/docs/Mozilla/Add-ons/WebExtensions/Page_actions) o [acción del navegador](/es/docs/Mozilla/Add-ons/WebExtensions/Browser_action), [barras laterales](/es/docs/Mozilla/Add-ons/WebExtensions/Sidebars), [páginas de opciones](/es/docs/Mozilla/Add-ons/WebExtensions/Options_pages) o [páginas de pestañas nuevas](/es/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). A algunas de estas API también se puede acceder mediante los [scripts de contenido](/es/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts) de una extensión ( consulte la [lista en la guía de script de contenido](/es/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)).

Para usar API más poderosas debes [solicitar permiso](/es/Add-ons/WebExtensions/manifest.json/permissions) en manifest.json en tu extensión.

Puedes acceder a las API utilizando el namespace `browser`:

```js
function logTabs(tabs) {
  console.log(tabs);
}

browser.tabs.query({ currentWindow: true }, logTabs);
```

Muchas de las APIs son asíncronas, devolviendo un `Promise`:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

var setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(logCookie, logError);
```

Tenga en cuenta que esto es diferente del sistema de extensiones de Google Chrome, que utiliza el nombre `chrome` en lugar de `browser`, y que utiliza `callbacks` en lugar de `promise` para funciones asíncronas. Como ayuda para portar, la implementación de Firefox de la API WebExtensions admite `chrome` y `callbacks`, así como `browser` y `promise`. Mozilla también ha escrito un _polyfill_ que habilita el código que usa `browser` y `promise` para trabajar sin cambios en Chrome.: <https://github.com/mozilla/webextension-polyfill>.

Firefox también implementa estas APIs bajo el nombre `chrome` usando `callbacks`. Esto permite que el código escrito para Chrome se ejecute sin cambios en Firefox para las APIs documentadas aquí.

Microsoft Edge usa el namespace `browser`, pero aún no admite APIs asíncronas basadas en `promise`. En Edge, por el momento, las APIs asíncronas deben utilizar `callbacks`.

No todos los navegadores son compatibles con todas las APIs: para obtener más información, consulte [Soporte del navegador para las API de JavaScript](/es/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).

## Listado de API de JavaScript

Vea a continuación una lista completa de las API de JavaScript:

Esta página lista todas las APIs JavaScript de WebExtension que actualmente son soportadas.

{{SubpagesWithSummaries}}

## Incompatibilidades con Chrome

Nosotros no soportamos ninguna API que no es listada arriba.

Incluso, para las APIs que están listadas arriba, no siempre soportamos todas las propiedades que Chrome soporta. Por favor, chequea la página de la API para cualquier incompatibilidad con Chrome.
