---
title: Agregar botón a la barra de herramientas
slug: Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar
---

{{AddonSidebar}}

La barra de herramientas es una de las principales componentes UI disponibles para las extensiones. Toolbar buttons live in the main browser toolbar y contienen un icono. Cuando el usuario da click en el icono, dos cosas pueden suceder:

- Si tu tienes especificado un popup para el icono, se va a mostrar. Popups son transitorios cuadros de diálogos creados usando HTML, CSS, y JavaScript.
- Si no tu tienes especificado un popup, un evento del click es generado,el cual puede ser detectado en tu codigo para realizar alguna acción y responderla.

Con las APIs de WebExtension, este tipo de botón es se llaman "browser actions", y son configurados de la siguiente manera:

- La clave [`browser_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) en manifest.json es usada para definir el botón.
- La API de JavaScript [`browserAction`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) es usada para escuchar los clicks y cambiar el botón o realizar alguna acción en el codigo.

## Un simple botón

En esta sección vamos a crear una extension que agrega un botón a la barra de herramientas. Cuando el usuario de click en el botón, vamos abrir <https://developer.mozilla.org> en una nueva pestaña.

Primero, crear una nueva carpeta "botón", y crea un archivo con el nombre de "manifest.json" con el siguiente contenido:

```json
{
  "description": "Demostrando botones de la barra de herramientas",
  "manifest_version": 2,
  "name": "botón-demo",
  "version": "1.0",

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

Esto especifica que tenemos un [background script](/es/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) llamado "background.js", y un **browser action** (butón) cuyo icono va a estar en la carpeta "icons".

Estos iconos son de [bitsies!](https://www.iconfinder.com/iconsets/bitsies) conjunto de iconos creados por Recep Kütük.

Despues, dentro del folder "botón" crea la carpeta "icons" y dentro de el guarda estos dos iconos:

- "page-16.png" (![](page-16.png))
- "page-32.png" (![](page-32.png)).

Tenemos dos iconos entonces podemos usar el mas grande para las pantallas de alta densidad. El navegador se va encargar de seleccionar el correcto para cada pantalla.

Despues, crea "background.js" en la raiz del folder de la extension, y agrega el siguiente contenido:

```js
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org",
  });
}

browser.browserAction.onClicked.addListener(openPage);
```

Esto esta a la espera de de el navegador se de click; cuando el evento se dispara, la funcion `openPage()` comienza a ejecutarse, el cual abre la página especificada usando la API de [`tabs`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs).

En este momento la extension debe de mirarse asi:

```plain
button/
    icons/
        page-16.png
        page-32.png
    background.js
    manifest.json
```

Ahora [instala la extensión](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) y da click en el botón:

{{EmbedYouTube("kwwTowgT-Ys")}}

## Agregando un popup

Vamos a intentar agregar un popup al botón. Remplaza el manifest.json con este contenido:

```json
{
  "description": "Demostrando botones de la barra de herramientas",
  "manifest_version": 2,
  "name": "botón-demo",
  "version": "1.0",

  "browser_action": {
    "browser_style": true,
    "default_popup": "popup/choose_page.html",
    "default_icon": {
      "16": "icons/page-16.png",
      "32": "icons/page-32.png"
    }
  }
}
```

Realizamos tres cambios:

- Ya no hacemos referencia a "background.js", porque ahora nosotros vamos a controlar la lógica de la extensión en el script del popup (También es posible background.js como un popup, es solo qu no lo necesitamos en este caso).
- Agregamos `"browser_style": true`, cual nos ayuda a dar estiloa nuestro popup y luzca mas integrado al navegador.
- Finalmente, agregamos `"default_popup": "popup/choose_page.html"`, cual le dice al navegador que esta acción ahora va a mostar un popup cuando se haga click , usando el documento que se encuentra en "popup/choose_page.html".

Entonces ahora necesitamos crear el popup. Crea un folder llamado "popup" y crea adentro el archivo "choose_page.html" . agregale el siguiente contenido:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_page.css" />
  </head>

  <body>
    <div class="page-choice">developer.mozilla.org</div>
    <div class="page-choice">support.mozilla.org</div>
    <div class="page-choice">addons.mozilla.org</div>
    <script src="choose_page.js"></script>
  </body>
</html>
```

Puedes notar que es un nomal archivo HTML que contiene tres elementos {{htmlelement("div")}}, con direcciones de Mozilla. También incluye archivos de CSS y JavaScript, en los cuales vamos agregar lo siguiente.

Crea el archivo "choose_page.css" adentro de la carpeta "popup" , con el siguiente contenido:

```css
html,
body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
}

.page-choice:hover {
  background-color: #cff2f2;
}
```

Es solo un poco de estilo a nuestro popup.

Ahora, crea un archivo "choose_page.js" dentro del folder "popup" con el siguiente contenido:

```js
document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("page-choice")) {
    return;
  }

  var chosenPage = "https://" + e.target.textContent;
  browser.tabs.create({
    url: chosenPage,
  });
});
```

En nuestro JavaScript, esta a la espera de clicks en las opciones de nuestro popup. Primero revisa si el click fue en una de nuestras elecciones, si no, no realizamos nada mas. Se seleccion una carga una página elegida, en una nueva pestaña con la correspondiente página. Nota que podemos usar las APIs WebExtension en el script del popup, como también scripts de fondo.

La estructura de la extensión final debe ser como esta:

```
button/
    icons/
        page-16.png
        page-32.png
    popup/
        choose_page.css
        choose_page.html
        choose_page.js
    manifest.json
```

Ahora vamos a recargar la extensión, click en el botón otra vez e intenta dar click en las opciones del popup:

{{EmbedYouTube("QPEh1L1xq0Y")}}

## Acciones de página

[Acciones de página](/es/docs/Mozilla/Add-ons/WebExtensions/Page_actions) son como las acciones del navegador, excepto que son acciones relevantes solo para algunas página en particular.

Mientras de las acciones del navegaro siembre son mostradas, las acciones de página son solo mostradas en pestañas donde son relevantes. Los botones de las acciones de página son mostradas en la barra URL , en vez de la barra de herramientas del navegador.

## Aprende más

- [`browser_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest key
- [`browserAction`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserAction) API
- Ejemplos de acciones del navegador:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify)
  - [Bookmark it!](https://github.com/mdn/webextensions-examples/tree/master/bookmark-it)
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour)
  - [inpage-toolbar-ui](https://github.com/mdn/webextensions-examples/tree/master/inpage-toolbar-ui)
  - [open-my-page-button](https://github.com/mdn/webextensions-examples/tree/master/open-my-page-button)

- [`page_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key
- [`pageAction`](/es/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API
- Ejemplos de Acciones de página:

  - [chill-out](https://github.com/mdn/webextensions-examples/tree/master/chill-out)
