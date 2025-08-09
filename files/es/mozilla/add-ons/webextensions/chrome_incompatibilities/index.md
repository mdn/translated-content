---
title: Incompatibilidades con Chrome
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
---

{{AddonSidebar}}

WebExtensions está diseñado para ser compatible con las extensiones de Chrome y Opera: en la medida de lo posible, las extensiones escritas para esos navegadores deberían ejecutarse en Firefox con cambios mínimos.

Sin embargo, Firefox cuenta actualmente con soporte para sólo un conjunto limitado de funciones y API compatibles con Chrome y Opera. Estamos trabajando en agregar más soporte, pero muchas características aún no son compatibles, y es posible que nunca admitamos algunas.

En este artículo se enumeran todas las características y API que se admiten total o parcialmente en Firefox. Cuando una característica está parcialmente soportada, hemos indicado cuáles son las lagunas.

Es seguro asumir que las funciones y las API que no se enumeran aquí en absoluto aún no son compatibles.

## Funciones de manifest.json

### Claves completamente compatibles

- [`applications`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
- [`browser_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`page_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)
- [`default_locale`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale)
- [`description`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description)
- [`manifest_version`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)
- [`name`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)
- [`version`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)
- [`web_accessible_resources`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)

### Claves parcialmente admitidas

#### Datos de fondo

Firefox no admite la propiedad `"persistent"`. Los scripts de fondo permanecen cargados todo el tiempo.

#### Scripts de contenido

Firefox no admite actualmente:

- `include_globs`
- `exclude_globs`
- `match_about_blank`

#### Permisos

Firefox aún no admite los siguientes permisos:

- `activeTab`
- `background`
- `clipboardRead`
- `clipboardWrite`
- `geolocation`
- `nativeMessaging`
- `unlimitedStorage`

Obviamente, también no admite permisos para las [APIs que no son compatibles](/es/docs/Mozilla/Add-ons/WebExtensions/API#chrome_incompatibilities).

## APIs JavaScript

### APIs completamente soportadas

- [alarmas](/es/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
- [Menú contextual](/es/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [pageAction](/es/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)
  - Las URL relativas pasadas a `setPopup()`se resuelven en relación con el documento de la persona que llama, en lugar de con la raíz de la extensión .

### APIs parcialmente soportadas

#### marcadores

- Firefox no admite:
  - `getRecent()`
  - `search()`
  - `removeTree()` (`remove` también elimina carpetas no vacías)
  - `onCreated`
  - `onRemoved`
  - `onChanged`
  - `onMoved`
  - `onChildrenReordered`
  - `onImportBegan`
  - `onImportEnded`
  - BookmarkTreeNodeUnmodifiable

- Firefox tiene marcadores especiales como "Marcado recientemente" o "Visitado recientemente"

#### browserAction

- Firefox no admite:
  - `enable()` o `disable()`.

- Las URL relativas pasadas a `setPopup()`se resuelven en relación con el documento de la persona que llama, en lugar de con la raíz de la extensión .

#### cookies

- eventos onChanged pueden ser subtely diferentes
- Creación de cookies de sesión `set` podría fallar
- `getAllCookieStores` siempre devuelve un almacén predeterminado y sin pestañas
- el acceso a las cookies desde pestañas privadas es imposible

#### extension

- Firefox sólo soporta :
  - `getBackgroundPage()`
  - `getURL()`
  - `inIncognitoContext` en los scripts de contenido

#### i18n

- En la API JavaScript API, Firefox solo soporta `getMessage()`.
- Firefox solo soporta los mensajes predefinidos `@@extension_id` y `@@ui_locale`.
- Firefox no localiza archivos CSS.
- Las cadenas para ser localizadas deben consistir enteramente de `__MSG_foo__` con el fin de realizar una sustitución al crearlas.

#### notifications

- Las únicas opciones de notificación admitidas son :
  - `iconUrl`
  - `title`
  - `message`.

- Los únicos métodos soportados son :
  - `create()`
  - `clear()`
  - `getAll()`.

- El único evento soportado es `onClosed`.
- Firefox no proporciona `byUser` datos.

#### Tiempo de ejecución

- Firefox sólo admite:
  - `onStartup()`
  - `getManifest()`
  - `getURL()`
  - `id`
  - `sendMessage()`
  - `onMessage`
  - `onConnect`

#### Almacenamiento

- El único área de almacenamiento que soporta Firefox es `local`.
- Firefox no soporta `getBytesInUse()` o `clear))`.

#### tabs

- Firefox does not support:
  - `getCurrent()`
  - `sendRequest()`
  - `getSelected()`
  - `duplicate()`
  - `highlight()`
  - `move()`
  - `detectLanguage()`
  - `captureVisibleTab()`
  - `getZoom()`
  - `setZoom()`
  - `getZoomSettings()`
  - `setZoomSettings()`

Firefox treats `highlighted` and `active` as the same since Firefox cannot select multiple tabs.

Firefox doesn't yet support the `callback` argument to `executeScript()`.

#### webNavigation

- Firefox does not support:
  - `getFrame()`
  - `getAllFrames()`
  - `onCreatedNavigationTarget`
  - `onHistoryStateUpdated`
  - transition types and qualifiers
  - Filtering

`onReferenceFragmentUpdated` also triggers for `pushState`.

#### webRequest

- Firefox does not support:
  - `handlerBehaviorChanged()`
  - `onAuthRequired`
  - `onBeforeRedirect`
  - `onErrorOccurred`

- Requests can be:
  - canceled only in `onBeforeRequest`
  - modified/redirected only in `onBeforeSendHeaders`

- Responses can be modified only in `onHeadersReceived`.
- Filtering by `windowId` and `tabId` is not supported.
- The `"requestBody"` instruction in `opt_extraInfoSpec` is not supported.
- Redirection is not allowed in `onBeforeRequest` or `onHeadersReceived`, but is allowed in `onBeforeSendHeaders`.
- `requestId` is not included in the argument passed to the listener.

#### windows

- `onFocusChanged` will trigger multiple times for a given focus change.
- `create()` does not support the `focused`, `type`, or `state` options.
- `update()` only supports the `focused` option.

### Planned APIs

We don't yet support the following APIs, but plan to, soon:

- [commands](https://developer.chrome.com/docs/extensions/reference/api/commands)
- [Devtools (mostly panels)](https://developer.chrome.com/extensions/devtools)
- [downloads](https://developer.chrome.com/docs/extensions/reference/api/downloads)
- [history](https://developer.chrome.com/docs/extensions/reference/api/history)
- [idle](https://developer.chrome.com/docs/extensions/reference/api/idle)
- [omnibox](https://developer.chrome.com/docs/extensions/reference/api/omnibox)
- [permissions](https://developer.chrome.com/docs/extensions/reference/api/permissions)
- [Native messaging (runtime.connectNative)](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-connectNative)

### CSS

#### Localized String Interpolation

We currently do not support interpolation of localized strings `__MSG_` tokens in extension CSS files: [Error 1209184 en Firefox](https://bugzil.la/1209184).

#### Relative URLs

We resolve URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.

### Miscellaneous incompatibilities

- Chrome allows any optional arguments to be omitted, even if followed by other arguments. Firefox currently supports this only under specific circumetances. We recommend only omitting optional arguments at the end of the arguments list, and using `null` for all other cases.
- Firefox currently [does not allow](https://bugzil.la/932513) the `{{jsxref("Statements/let", "let")}}` or `{{jsxref("Statements/const", "const")}}` statement in ordinary web pages or Web Extensions. While it is possible to enable support for Firefox's variant of the statement using a special `<script>` tag, this is not recommended. Instead, if your extension code uses `let` or `const` statements, we recommend that you [transpile them using Babel](/es/docs/Mozilla/Add-ons/WebExtensions#using_advanced_javascript_features_from_ecmascript_6_and_7) until support is turned on globally.
