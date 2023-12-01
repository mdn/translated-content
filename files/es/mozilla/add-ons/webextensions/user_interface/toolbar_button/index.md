---
title: Botón de la Barra de Herramientas
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
---

{{AddonSidebar}}

Generalmente referidas como [acciones de navegador](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), esta opción de interfaz de usuario corresponde a un botón agregado a la barra de herramientas del navegador. Los usuarios pueden hacer click en el botón para interactuar con tu extensión.
![](browser-action.png)

El botón de la barra de herramientas (acción de navegador) es muy parecido al botón de la barra de direcciones (acción de página). Para conocer las diferencias y obtener consejo en cuándo usar qué tipo de botón, te recomendamos ver [Acciones de página y acciones de navegador](/es/Add-ons/WebExtensions/user_interface/Page_actions#Page_actions_and_browser_actions).

## Especificando la acción de navegador

Puedes definir las propiedades de la acción de navegador utilizando la llave [`browser_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) del archivo manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

El único campo obligatorio es `default_icon`.

Existen dos formas de especificar una acción de navegador: con o sin una [ventana emergente](/es/Add-ons/WebExtensions/Popups). Si no especificas una ventana emergente, se le entregará un evento a la extensión cada vez que el usuario haga click en el botón. El evento es escuchable usando [`browserAction.onClicked`](/es/docs/Mozilla/Add-ons/WebExtensions/API/BrowserAction/onClicked):

```js
browser.browserAction.onClicked.addListener(handleClick);
```

En cambio, si especificas una ventana emergente, el evento de click no es despachado al hacer click en el botón: en su lugar, la ventana emergente es mostrada. El usuario podrá interactuar con la ventana emergente, la cual se cerrará automáticamente cada vez que el usuario haga click fuera de ella. Te recomendamos revisar el artículo de [ventanas emergentes](/es/Add-ons/WebExtensions/Popups) para conocer más detalles sobre la creación y administración de éstas.

Cabe destacar que tu extensión puede tener solamente una acción de navegador.

Puedes cambiar cualquier propiedad de la acción de navegador de forma programática, utilizando la API [`browserAction`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserAction).

## Íconos

Para más detalles sobre cómo crear íconos para usarlos en tu acción de navegador, revisa [Iconografía](https://design.firefox.com/photon/visuals/iconography.html) en la documentación del [Sistema de Diseño Photon](https://design.firefox.com/photon/index.html).

## Ejemplos

El repositorio de GitHub [webextensions-examples](https://github.com/mdn/webextensions-examples) contiene dos ejemplos de extensiones que implementan acciones de navegador:

- [bookmark-it](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/) usa una acción de navegador sin una ventana emergente.
- [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) usa una acción de navegador con una ventana emergente.
