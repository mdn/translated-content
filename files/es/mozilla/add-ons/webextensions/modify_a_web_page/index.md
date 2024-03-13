---
title: Modify a web page
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
---

{{AddonSidebar}}Uno de los usos más comunes para las extensiones es modificar páginas web. Por ejemplo, una extension puede querer cambiar el estilo de la página, esconder determinados nodos DOM o incluir otros nuevos.Existen dos maneras de hacer esto con extensiones Web y APIs:

- **Declarativamente**: Define un patrón que encaja con un conjunto de URLs y carga un conjunto de scripts a las páginas cuyos URL encajen con ese patrón.
- **Programaticamente**: Usando una Javascript API, carga una script en la página alojada en una lengüeta específica.

De ambas formas, estos scripts se llaman scripts de contenido y son distintos del resto de scripts que constituyen una extensión.

- Solamente tienen acceso a un grupo pequeño de extensiones web y APIs.
- Obtienen acceso directo a la página web en la que han sido cargadas.
- Se comunican con el resto de la extensión usando una API de mensajería.

En este artículo hablaremos de los dos métodos para cargar una script..

## Modificando páginas que encajen con un patrón URL

Para empezar, crea un nuevo directorio llamado "modify-page". En este directorio, crea un archivo llamado "manifest.json", con el siguiente contenido:

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["page-eater.js"]
    }
  ]
}
```

La llave [`content_scripts`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) es el método de carga de scripts a páginas cuya URL encaje con los patrones. En este caso, `content_scripts` le dice al navegador que cargue una script llamada "page-eater.js" en todas las páginas con <https://developer.mozilla.org/>.

> **Nota:** Debido a que el atributo `"js"` de `content_scripts` es una array, puedes usarla para inyectar más de una script a las páginas que encajen con el patrón. Si haces esto las páginas compartiran el mismo campo de aplicación, igual que múltiples scripts cargadas por una página, y son cargadas en el mismo orden en las que están dispuestas en la array.

> **Nota:** La llave `content_scripts` tambien tiene un atributo de `"css"` que puedes usar para inyectar código CSS.

Después, crea un archivo llamado "page-eater.js" dentro del directorio "modify-page" e introduce el contenido de a continuación:

```js
document.body.textContent = "";

var header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Ahora, [instala la extensión](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) y visita <https://developer.mozilla.org/>:

{{EmbedYouTube("lxf2Tkg6U1M")}}

> **Nota:** Ten en cuenta que aunque este video muestra el contenido de la script operando en [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/), las scripts de contenido están bloqueadas en esta página por el momento.

## Modificando las páginas programaticamente

Y si quieres comer páginas, pero solo cuando el usuario te lo pida? Actualicemos este ejemplo para que podamos enyectar el contenido de la script cuando el usuario haga click en un item del menu de contexto.

Primero actualiza "manifest.json" para que incluya el contenido a continuación:

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "permissions": ["activeTab", "contextMenus"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Aquí, hemos eliminado la llave `content_scripts` y hemos añadido dos nuevas llaves:

- [`permissions`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Para inyectar scripts a las páginas necesitamos los permisos para la página que estamos modificando. El permiso [`activeTab`](/es/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) es una manera de obtener el permiso temporalmente para la lengüeta que esté actualmente abierta. También necesitamos el permiso `contextMenus` para poder añadir items al menu de contexto.
- [`background`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Usamos esto para cargar un ["background script"](/es/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) persistente llamado "background.js", en el cual montamos el menu de contexto e inyectamos el script de contenido.

Ahora generaremos este archivo. Crea un archivo llamado "background.js" en el directorio "modify-page" e introduce el siguiente contenido:

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js",
    });
  }
});
```

En esta script estamos creando un [item del menu de contexto](/es/Add-ons/WebExtensions/API/ContextMenus/create) y dándole una ID y un título específico (el texto que se estará expuesto en el menu de contexto). Después configuramos un evento de escucha para que cuando el usuario haga click en uno de los items del menu podamos comprobar si se trata de nuestro item `eat-page` . En caso afirmativo, inyectaremos "page-eater.js" a la lengüeta actual usando la API [`tabs.executeScript()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript). Alternativamente, esta API puede tomar como argumento una ID. En este caso la hemos omitido lo cual quiere decir que la script es inyectada en la lengüeta que está actualmente abierta.

Ahora mismo la extensión debería ser algo como esto:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Ahora [recarga la extensión](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on), abre la página (cualquier página en esta ocasión), activa el menu de contexto y selecciona "Eat this page" (Comer esta página):

{{EmbedYouTube("zX4Bcv8VctA")}}

> **Nota:** Ten en cuenta que aunque este video muestra el contenido de la script operando en [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/), las scripts de contenido están bloqueadas en esta página por el momento.

## Mensajería

Scripts de contenido y scripts de fondo no pueden acceder directamente al estado del otro. Sin embargo, pueden comunicarse mediante el uso de mensajes. Una terminal configura un escuchador de mensajes y la otra terminal puede mandarle un mensaje. La siguente tabla resume las APIs involucradas en cada parte:

|                    | En el script de contenido                                                                   | En el script de fondo                                                          |
| ------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Mandar un mensaje  | [`browser.runtime.sendMessage()`](</en-US/Add-ons/WebExtensions/API/runtime#sendMessage()>) | [`browser.tabs.sendMessage()`](/es/Add-ons/WebExtensions/API/Tabs/sendMessage) |
| Recibir un mensaje | [`browser.runtime.onMessage`](/es/Add-ons/WebExtensions/API/runtime/onMessage)              | [`browser.runtime.onMessage`](/es/Add-ons/WebExtensions/API/runtime#onMessage) |

Actualicemos nuestro ejemplo para ilustrar como mandar un mensaje desde una script de fondo.

Primero, hemos de editar "background.js" para que tenga el siguiente contenido:

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the extension!",
  });
}

function onExecuted(result) {
  var querying = browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  querying.then(messageTab);
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "eat-page") {
    let executing = browser.tabs.executeScript({
      file: "page-eater.js",
    });
    executing.then(onExecuted);
  }
});
```

Ahora, después de inyectar "page-eater.js", hemos de usar [`tabs.query()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) para obtener la lengüeta actualmente activa y entonces usar [`tabs.sendMessage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) para mandar un mensaje a las scripts de contenido cargadas en la lengüeta. El mensaje tiene el contenido `{replacement: "Message from the extension!"}`.

Después, actualiza "page-eater.js" de esta forma:

```js
function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  var header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
```

Ahora, en vez de simplemente comer la página, el contenido espera a un mensaje usando [`runtime.onMessage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Cuando el mensaje llega, el script de contenido ejecuta el mismo código de antes, exceptuando que el texto de reemplazo se obtenido de `request.replacement`.

Debido a que [`tabs.executeScript()`](/es/Add-ons/WebExtensions/API/tabs/executeScript) es una función asincrónica y para asegurarnos de que mandamos el mensaje solo cuando el escuchador ha sido añadido en "page-eater.js", usamos `onExecuted` que sera llamado después de que "page-eater.js" se ejecute.

> **Nota:** Pulsa Ctrl+Shift+J (o Cmd+Shift+J en el Mac) o `web-ext run --bc` para abrir la consola de navegación para ver `console.log` en la script de fondo. Alternativamente puedes usar el [Add-on Debugger](/es/Add-ons/Add-on_Debugger), el cual te permite poner un breakpoint. De momento no hay forma de iniciar un [Add-on Debugger directamente de una extensión web](https://github.com/mozilla/web-ext/issues/759).

Si queremos enviar mensajes directamente desde el contenido script de vuelta a la página de fondo, podríamos usar[`runtime.sendMessage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) en vez de [`tabs.sendMessage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage). Por ejemplo:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> **Nota:** Todos estos ejemplos inyectan Javascript; también puedes inyectar CSS programaticamente usando la función[`tabs.insertCSS()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).

## Aprende más

- La guía de [scripts de contenido](/es/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [`content_scripts`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) llave de manifiesto
- [`permissions`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) llave de manifiesto
- [`tabs.executeScript()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- Ejemplos con `content_scripts`:

  - [borderify](https://github.com/mdn/webextensions-examples/tree/master/borderify)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/master/page-to-extension-messaging)

- Ejemplos con `tabs.executeScript()`:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify)
  - [context-menu-demo](https://github.com/mdn/webextensions-examples/tree/master/context-menu-demo)
