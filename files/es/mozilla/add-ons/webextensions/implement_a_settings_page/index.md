---
title: Implementar una página de configuración
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
---

{{AddonSidebar}}

Una página de configuración ofrece a los usuarios una manera de ver y cambiar los ajustes (algunas veces también llamados "preferencias" u "opciones") para el complemento.

Con WebExtensions, los ajustes generalmente se almacenan utilizando la API [`storage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage) . La implementación de una página de configuración se realiza en un proceso de tres pasos:

- Escribir un archivo HTML que muestre los ajustes y permita al usuario cambiarlos.
- Escribir un script, incluido desde el archivo HTML , que establece la página de configuración desde su almacenamiento y actualiza los ajustes seleccionados cuando el usuario los modifica.
- Establecer la ruta al archivo HTML como la clave [`options_ui`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) en manifest.json. Haciendo esto, el documento HTML se mostrará en el administrador de complementos del navegador, junto al nombre del complemento y su descripción.

> **Nota:** También puedes abrir esta página mediante programación utilizando la función [`runtime.openOptionsPage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) .

## Una sencilla ExtensionWeb

En primer lugar, vamos a escribir una extensión que añada un borde azul a todas las páginas que el usuario visita.

Crea un nuevo directorio llamado "configuración", a continuación crea un archivo llamado"manifest.json" en su interior ,con el siguiente contenido:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],

  "applications": {
    "gecko": {
      "id": "settings-example@mozilla.org"
    }
  }
}
```

Este complemento da instrucciones al navegador para cargar un script de contenido llamado "borderify.js" en todas las páginas web que el usuario visita.

Ten en cuenta que también hemos incluido la clave [`applications`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) . Necesitaremos esto (solamente en Firefox ) porque si hay un error, debemos establecer explícitamente (la identidad del complemento) [add-on ID](/es/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID) , y también incluimos la clave de manifiesto `options_ui`. Aunque no utilicemos la clave `options_ui` en ese momento, lo haremos en la siguiente sección. Ver el [bug 1269545](https://bugzilla.mozilla.org/show_bug.cgi?id=1269454).

A continuación, crea un archivo llamado "borderify.js" en el directorio "configuración" , y añade el siguiente contenido :

```js
document.body.style.border = "10px solid blue";
```

Esto solo añade un borde azul a la página.

Ahora [instala WebExtension](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) y comprueba — abre cualquier página web que te guste:

{{EmbedYouTube("E-WUhihF8fw")}}

## Añadir ajustes

Ahora vamos a crear una página de configuración que permita al usuario establecer el color del borde.

En primer lugar, actualiza "manifest.json" para que tenga este contenido:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],

  "applications": {
    "gecko": {
      "id": "settings-example@mozilla.org"
    }
  },

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"]
}
```

Hemos añadido dos nuevas claves de manifiesto:

- [`options_ui`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui): Esta establece un documento HTML que es la página de configuración (tambien llamada página de opciones) para este complemento.
- [`permissions`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): utilizaremos la API [`storage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage) para almacenar los ajustes, y necesitaremos pedir permiso para utilizar esta API.

A continuacion, como hemos prometido crear "options.html", vamos a realizarlo. Crea un archivo con ese nombre en el directorio "configuración" , y añade el siguiente contenido:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <form>
      <label>Border color<input type="text" id="color" /></label>
      <button type="submit">Save</button>
    </form>

    <script src="options.js"></script>
  </body>
</html>
```

Esto define un elemento HTML {{htmlelement("form")}} con un texto etiquetado {{htmlelement("input")}} y un botón de envio {{htmlelement("button")}}. también incluye un script llamado "options.js".

Crea "options.js", de nuevo en el directorio "configuración" , y añade el siguiente contenido:

```js
function saveOptions(e) {
  chrome.storage.local.set({
    color: document.querySelector("#color").value,
  });
}

function restoreOptions() {
  chrome.storage.local.get("color", (res) => {
    document.querySelector("#color").value = res.color || "blue";
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
```

Esto hace dos cosas:

- Cuando el documento ha sido cargado, se obtiene el valor "color" desde el almacenamiento utilizando [`storage.local.get()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get). Si el valor no se ha establecido, utiliza por defecto "azul".
- Cuando el usuario envía el formulario haciendo click en "guardar", se almacena el valor del cuadro de texto utilizando [`storage.local.set()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set).

Finalmente, actualiza "borderify.js" para leer el color del borde del almacenamiento:

```js
chrome.storage.local.get(null, (res) => {
  var color = "blue";
  if (res.color) {
    color = res.color;
  }
  document.body.style.border = "10px solid " + color;
});
```

En este punto, el complemento completo debe tener este aspecto:

```
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

Ahora:

- [recarga WebExtension.](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on)
- carga una página web.
- abre la página de configuración y cambia el color del borde.
- recarga la página web para ver la diferencia.

En Firefox se puede accededer a la página de configuración visitando : complementos y haciendo click en el botón "Preferencias" junto a la entrada del complemento.

{{EmbedYouTube("ECt9cbWh1qs")}}

## Aprende más

- Documentación de referencia de la clave de manifiesto.[options_ui.](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
- Documentación de referencia de la API [storage.](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage)
- Abrir la página de configuración directamente desde el complemento utilizando la API [`runtime.openOptionsPage().`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage)
- Página de ejemplo de configuraciones:

  - [color-favorito.](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour)
