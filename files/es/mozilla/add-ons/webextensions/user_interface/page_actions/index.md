---
title: Address bar button
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
---

{{AddonSidebar}}

Comúnmente denominado botón de acción de página, esta opción de interfaz de usuario es un botón agregado a la barra de direcciones del navegador. Los usuarios pueden hacer clic en el botón para interactuar con sus extensiones.

![](address_bar_button.png)

## Acciones de página y acciones de navegador

El botón de la barra de direcciones (o página de acción) es muy parecida al botón de la barra de herramientas (o acción del navegador).

Las diferencias son:

- **La localización del botón:**

  - La acción de página es mostrado dentro de la barra de direcciones del navegador.
  - La acción del navegador es mostrado fuera de la barra de direcciones, exactamente en la barra de herramientas del navegador.

- **La visibilidad del botón:**

  - La acción de página esta oculta por defecto (sin embargo esto puede ser cambiado en la propiedades `show_matches` y `hide_matches` [manifest key](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)), y tu puedes llamar [`pageAction.show()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/show) y [`pageAction.hide()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/hide) para mostrar o ocultar esto en pestañas especificas.
  - La acción del navegador siempre esta mostrada.

Usa una página de acción cuando cuando la acción este relacionada a la página en curso, y una acción de navegador cuando cuando la acción este relacionada a todas o a muchas páginas. Por ejemplo:

| Type           | Bookmarks action             | Content action        | Tabs operation                 |
| -------------- | ---------------------------- | --------------------- | ------------------------------ |
| page action    | Marcar esta página           | Reddit enhancement    | Enviar una pestaña             |
| browser action | Mostrar todos los marcadores | Habilitar ad-blocking | Sincronizar todas las pestañas |

## Specifying the page action

You define the page action's properties using the [`page_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) key in manifest.json:

```json
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

The only mandatory key is `default_icon`.

There are two ways to specify a page action: with or without a [popup](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups).

- **Without a popup:** When the user clicks the button, an event is dispatched to the extension, which the extension listens for using [`pageAction.onClicked`](/es/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked):

- ```js
  browser.pageAction.onClicked.addListener(handleClick);
  ```

- **With a popup:** the `click` event is not dispatched. Instead, the popup appears when the user clicks the button. The user then interacts with the popup. When the user clicks outside of the popup, it closes automatically. See the [Popup](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)article for more details on creating and managing popups.

Note that your extension can have one-page action only.

You can change any of the page action properties programmatically using the [`pageAction`](/es/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API.

## Icons

For details on how to create icons to use with your page action, see [Iconography](https://design.firefox.com/photon/visuals/iconography.html) in the [Photon Design System](https://design.firefox.com/photon/index.html) documentation.

## Examples

The [webextensions-examples](https://github.com/mdn/webextensions-examples) repository on GitHub includes the [chill-out](https://github.com/mdn/webextensions-examples/tree/master/chill-out) example which implements a page action without a popup.
