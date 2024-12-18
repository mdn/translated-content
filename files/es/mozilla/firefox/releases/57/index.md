---
title: Firefox Quantum 57 para programadores
slug: Mozilla/Firefox/Releases/57
---

{{FirefoxSidebar}}

Este artículo proporciona información sobre los cambios incluidos en Firefox 57 (también conocido como Firefox Quantum) que conciernen a los desarrolladores. Firefox 57 se disponibilizó al público el [14 de noviembre de 2017](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Firefox 57 === Firefox Quantum

Hemos bautizado a Firefox 57 como **Quantum** por el proyecto de ingeniería [Firefox Quantum](https://wiki.mozilla.org/Quantum), cuyo objetivo ha sido el de reconstruir Firefox desde cero para darle un rendimiento y una estabilidad excelentes, así como mejorar su apariencia visual. Esta es la primera versión de Firefox en incluir algunos de estos cambios, así que quisimos conmemorar el acontecimiento.

> [!NOTE]
> Para obtener más información sobre las funciones de Quantum incluidas en esta versión, consúltese el artículo [«Firefox Quantum Developer Edition: el Firefox más rápido, con IU Photon y mejores herramientas»](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/), escrito por Dan Callahan.

[El nuevo procesador de CSS en paralelo de Firefox](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) ―también denominado **Quantum CSS** o **Stylo**― está activado de manera predeterminada en Firefox 57 para escritorio; las versiones para móviles darán el salto en el futuro. Los programadores no deberían notar ninguna diferencia importante, aparte de la amplia gama de mejoras de rendimiento. Sin embargo, existen algunas diferencias menores de funcionalidad en Stylo, las cuales se han implementado para corregir comportamientos no estándares de Gecko que habrían de desaparecer. Informaremos de esas diferencias en las páginas de referencia y en las notas de publicación según proceda (véanse [Notas sobre Quantum CSS](#notas_sobre_quantum_css)).

## Cambios para programadores web

### Herramientas de desarrollo

_No hay ningún cambio._

### HTML

- Los tipos [«date»](/es/docs/Web/HTML/Element/input/date) y [«time»](/es/docs/Web/HTML/Element/input/time) de {{htmlelement("input")}} ya están activados en todas las compilaciones ([Error 1399036 en Firefox](https://bugzil.la/1399036)).

### CSS

- Ahora admitimos los valores `minimal-ui` y `standalone` de la consulta [`display-mode`](/es/docs/Web/CSS/@media/display-mode) ([Error 1369815 en Firefox](https://bugzil.la/1369815)). Consúltese también el [campo de manifiesto de aplicación web `display`](/es/docs/Web/Manifest#display).
- Se corrigió un problema que causaba que la notación abreviada de la cuadrícula quedara restablecida al utilizar {{cssxref("grid-row-gap")}} y {{cssxref("grid-column-gap")}} ([Error 1387410 en Firefox](https://bugzil.la/1387410)).
- Se ha eliminado la preferencia `layout.css.clip-path-shapes.enabled`, que permitía activar o desactivar la compatibilidad de {{cssxref("&lt;basic-shape&gt;")}} con {{cssxref("clip-path")}} ([Error 1399767 en Firefox](https://bugzil.la/1399767)).

#### Notas sobre Quantum CSS

- Los valores de degradados radiales tales como `radial-gradient(circle gold,red)` funcionan en el sistema de estilos de Gecko anterior, pero no debería por la coma faltante entre `circle` y `gold` ([Error 1383323 en Firefox](https://bugzil.la/1383323)). Quantum corrige este defecto.
- Cuando se da animación a un elemento ubicado fuera de la pantalla y se establece un tiempo de retardo, Gecko no actualiza la visualización correctamente en algunas plataformas, como Windows ([Error 1383239 en Firefox](https://bugzil.la/1383239)). Esto ha quedado corregido en Quantum.
- En Gecko, no es posible desplegar de manera predeterminada los elementos {{htmlelement("details")}} mediante el atributo `open` si tienen una propiedad {{cssxref("animation")}} activa ([Error 1382124 en Firefox](https://bugzil.la/1382124)). Quantum corrige este problema.
- En Gecko, los efectos {{cssxref("transition", "transitions")}} no funcionan si se transiciona desde un {{cssxref("text-shadow")}} con un color especificado a un `text-shadow` sin ningún color ([Error 726550 en Firefox](https://bugzil.la/726550)). Este comportamiento se ha corregido en Quantum.
- En Gecko, cancelar una animación de relleno (p. ej., con `animation-fill-mode: forwards` definido) puede desencadenar un conjunto de transiciones en el mismo elemento, aunque únicamente una vez (véase el [Error 1192592 en Firefox](https://bugzil.la/1192592) y [estas pruebas](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) para más información). Por lo general, las animaciones declaratorias no deberían desencadenar animaciones. Esto se ha corregido en Quantum.
- En Gecko, las animaciones que utilizan ems como unidad no reciben las modificaciones realizadas en {{cssxref("font-size")}} en el elemento padre del elemento animado, aunque deberían ([Error 1254424 en Firefox](https://bugzil.la/1254424)). Quantum CSS corrige esto.
- Gecko además maneja la herencia de `font-size` de manera diferente a la de Quantum CSS, por lo que para algunas configuraciones de idioma, los tamaños de letra heredados quedaban más pequeños de lo esperado (véase [Error 1391341 en Firefox](https://bugzil.la/1391341)). Quantum corrige esto.
- Gecko reutiliza el mismo mecanismo empleado al analizar una ficha de URL durante el análisis de las funciones `domain()` o `url-prefix()` para la regla {{cssxref("@document", "@-moz-document")}}. Quantum CSS no utiliza el mismo mecanismo y no considera las fichas como no válidas cuando contienen paréntesis o comillas ([Error 1362333 en Firefox](https://bugzil.la/1362333)).
- En Gecko, cuando se define un tipo de letra del sistema como el valor del {{domxref("CanvasRenderingContext2D.font", "tipo de letra")}} de algún contexto del lienzo 2D (p. ej., `menu`), la obtención del valor del tipo de letra no devuelve el resultado correcto (no devuelve nada). Este problema quedó solucionado en Quantum. ([Error 1374885 en Firefox](https://bugzil.la/1374885)).
- En Gecko, cuando se crea un subárbol desligado (p. ej., un {{htmlelement("div")}} creado a través de {{domxref("Document.createElement","createElement()")}} que todavía no se inserta en el DOM), el elemento raíz del subárbol se define como un elemento de nivel bloque. En Quantum CSS, el elemento se define como alineado, tal como se define en la especificación ([Error 1374994 en Firefox](https://bugzil.la/1374994)).
- Gecko rechaza las expresiones {{cssxref("calc")}} ―lo que invalida el valor― cuando se utilizan como el componente radial de una función {{cssxref("radial-gradient")}} ([Error 1376019 en Firefox](https://bugzil.la/1376019)). Quantum CSS lo resuelve.
- En Gecko, `calc(1*2*3)` no es analizado debidamente; Quantum CSS soluciona el problema ([Error 1379467 en Firefox](https://bugzil.la/1379467)).
- En Quantum CSS, [`calc()` se admite en todos los sitios que la especificación indica](https://drafts.csswg.org/css-values-3/#calc-notation) ([Error 1350857 en Firefox](https://bugzil.la/1350857)). En Gecko, este no es el caso.
- Gecko contiene un defecto que provoca que los pseudoelementos {{cssxref("::before")}} y {{cssxref("::after")}} se generen aun si el valor de la propiedad {{cssxref("content")}} se define como `normal` o `none`. Este comportamiento es contrario a la especificación ([Error 1387931 en Firefox](https://bugzil.la/1387931)) y se ha corregido en Quantum.
- Otro defecto de Gecko provoca que la propiedad {{cssxref("background-position")}} no pueda transicionarse entre dos valores que contengan números diferentes de valores {{cssxref("&lt;position&gt;")}}, por ejemplo, `background-position: 10px 10px;` y `background-position: 20px 20px, 30px 30px;` (véase [Error 1390446 en Firefox](https://bugzil.la/1390446)). Quantum resuelve el error.

### SVG

_No hay ningún cambio._

### JavaScript

- El bucle no estándar {{jsxref("Statements/for_each...in", "for each...in")}} (E4X) fue eliminado. En su lugar, utilícese {{jsxref("Statements/for...of", "for...of")}} y consúltese [Atención: los bucles de JavaScript 1.6 «for-each-in» son obsoletos](/es/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) para obtener ayuda en la migración. ([Error 1083470 en Firefox](https://bugzil.la/1083470)).
- Se marcaron como obsoletos los métodos {{jsxref("Object.prototype.watch()")}} y {{jsxref("Object.unwatch", "unwatch()")}}. Se emitirá una alerta si se utilizan y serán eliminados en el futuro próximo ([Error 934669 en Firefox](https://bugzil.la/934669)).
- Se eliminaron los objetos {{jsxref("Iterator")}} y {{jsxref("StopIteration")}} y el protocolo de iteración heredado ([Error 1098412 en Firefox](https://bugzil.la/1098412)).

### API

#### API nuevas

- Se ha activado de manera predeterminada la API {{domxref("PerformanceObserver")}} ([Error 1386021 en Firefox](https://bugzil.la/1386021)).
- Añadimos las interfaces {{domxref("AbortController")}} y {{domxref("AbortSignal")}} (conocidas como la API «Abort»), que permiten interrumpir las solicitudes del DOM (como las de [recuperación](/es/docs/Web/API/Window/fetch)) si así se desea ([Error 1378342 en Firefox](https://bugzil.la/1378342)).

#### DOM

- Se ha implementado la propiedad {{domxref("Selection.type")}} de la [API Selection](/es/docs/Web/API/Selection_API) ([Error 1359157 en Firefox](https://bugzil.la/1359157)).
- Se admite {{domxref("Document.createEvent", "Document.createEvent('FocusEvent')")}} ahora ([Error 1388069 en Firefox](https://bugzil.la/1388069)).
- La propiedad `files` de la interfaz {{domxref("HTMLInputElement")}} puede definirse ahora ([Error 1384030 en Firefox](https://bugzil.la/1384030)).
- El método `HTMLDocument.getSelection()` se ha trasladado a la interfaz {{domxref("Document.getSelection","Document")}} para que quede disponible para los documentos XML ([Error 718711 en Firefox](https://bugzil.la/718711)).
- Hemos implementado el suceso [`messageerror`](/es/docs/Web/Reference/Events/messageerror), el cual puede ejecutar código tras su desencadenamiento por parte de manejadores de sucesos utilizados en destinos de mensajes. Véase {{domxref("MessagePort.onmessageerror")}}, {{domxref("DedicatedWorkerGlobalScope.onmessageerror")}}, {{domxref("Worker.onmessageerror")}}, {{domxref("BroadcastChannel.onmessageerror")}} y {{domxref("Window.onmessageerror")}} ([Error 1359017 en Firefox](https://bugzil.la/1359017)).
- Cuando se emplea la iteración en valores {{domxref("Headers")}}, estos quedarán organizados en orden lexicográfico y se combinarán los valores de los nombres de cabeceras duplicados ([Error 1396848 en Firefox](https://bugzil.la/1396848)).

#### Sucesos de DOM

_No hay ningún cambio._

#### Multimedia y WebRTC

- Ahora se admiten mensajes de cualquier tamaño (hasta 1 GiB, aunque 256 kiB es más interoperativo) en {{domxref("RTCDataChannel")}} por medio del uso de la opción «end-of-record» (EOR) en los mensajes de SCTP. Consúltese [Understanding message size limits](/es/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) para obtener más información ([Error 979417 en Firefox](https://bugzil.la/979417)).

  > [!NOTE]
  > Como Firefox aún no admite el protocolo ndata de SCTP, que permite intercalar mensajes de SCTP de varias fuentes, enviar objetos de datos grandes puede causar retardos importantes en el resto del tránsito SCTP. Véase el [Error 1381145 en Firefox](https://bugzil.la/1381145) para estar al tanto de la implementación de ndata en Firefox.

- El método {{domxref("RTCDataChannel.send()")}} ahora puede emitir una excepción `TypeError` si el tamaño del mensaje que se intenta enviar no es compatible con el agente de usuario de destino (esto se implementó como parte del [Error 979417 en Firefox](https://bugzil.la/979417)).
- La [API MediaStream Recording](/es/docs/Web/API/MediaStream_Recording_API) se ha actualizado de modo que los sucesos [`error`](/es/docs/Web/API/HTMLElement/error_event) que se envíen para notificar problemas acaecidos durante la grabación son ahora del tipo {{domxref("MediaRecorderErrorEvent")}} en lugar de sucesos genéricos.
- Se actualizó la documentación concerniente a {{domxref("OfflineAudioContext")}}, dado que sus entradas de constructores pueden especificarse ahora dentro de un objeto en lugar de una lista de parámetros ([Error 1388591 en Firefox](https://bugzil.la/1388591)).

### Seguridad

- Los URL `resource://` ya no filtran información ([Error 863246 en Firefox](https://bugzil.la/863246))
- Los URI de datos ahora se manipulan como orígenes opacos únicos, en vez de heredar el origen del objeto de configuración responsable de la navegación ([Error 1324406 en Firefox](https://bugzil.la/1324406)).

### Plugins

_No hay ningún cambio._

### Otros

- El valor `fullscreen` del campo `display` del [manifiesto de aplicación web](/es/docs/Web/Manifest) ahora funciona en Firefox para Android 57 ([Error 1126479 en Firefox](https://bugzil.la/1126479)).
- La [modalidad sin periféricos](/es/docs/Mozilla/Firefox/Headless_mode) de Firefox ahora incluye el parámetro `-screenshot`, que permite a los usuarios tomar capturas de pantalla de sitios web directamente desde la consola ([Error 1378010 en Firefox](https://bugzil.la/1378010)).

## Eliminaciones de la plataforma web

### HTML

- `<link rel="preload">` (véase [Precargar contenido con rel="preload"](/es/docs/Web/HTML/Attributes/rel/preload)) fue desactivado en Firefox 57 a causa de varios problemas de compatibilidad con la web (p. ej., [Error 1405761 en Firefox](https://bugzil.la/1405761)). Se espera que para Firefox 58 quede lista la versión de reemplazo, la cual funcionará para recursos no almacenables en la antememoria.

### API

- La [API Social](/es/docs/Archive/Social_API), privativa de Mozilla, se ha eliminado completamente ([Error 1388902 en Firefox](https://bugzil.la/1388902)).

### SVG

_No hay ningún cambio._

## Cambios relativos a los complementos y los programadores de Mozilla

> [!NOTE]
> A partir de Firefox 57, se ha eliminado por completo la compatibilidad con los complementos basados en la tecnología XPCOM. Todas las extensiones deben convertirse para emplear la [tecnología nueva](/es/docs/Mozilla/Add-ons/WebExtensions), conocida como WebExtensions, o de lo contrario dejarán de funcionar.

### WebExtensions

Se añadieron o ampliaron las API siguientes:

- [`bookmarks`](/es/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - compatibilidad con separadores mediante [`bookmarks.BookmarkTreeNodeType`](/es/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)

  - propiedad `theme_icons` para iconos claros u oscuros en función del tema

- [`browserAction`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)

  - [`browserAction.openPopup()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup)

- [`browserSettings`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [`allowPopupsForUserEvents`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents)
  - [`homepageOverride`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride)
  - [`imageAnimationBehavior`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior)
  - [`newTabPageOverride`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride)

- [`browsingData`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [`browsingData.removeLocalStorage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage)

- [`clipboard`](/es/docs/Mozilla/Add-ons/WebExtensions/API/clipboard)

  - [`setImageData()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData)

- [`contextualIdentities`](/es/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

  - [`onCreated`](/es/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated)
  - [`onRemoved`](/es/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved)
  - [`onUpdated`](/es/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated)
  - `colorCode` y `iconUrl` en [`contextualIdentitities.ContextualIdentity`](/es/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity)

- [`devtools.panels`](/es/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

  - [`devtools.panels.ElementsPanel.createSidebarPane()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane)

- [`downloads`](/es/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

  - opción `incognito` en [`downloads.download()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download)
  - propiedad `estimatedEndTime` en [`downloads.DownloadItem`](/es/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem)

- [`find`](/es/docs/Mozilla/Add-ons/WebExtensions/API/find)

  - [`find()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/find/find)
  - [`highlightResults()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/find/highlightResults)
  - [`removeHighlighting()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting)

- [`pageAction.openPopup()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup)
- [`privacy`](/es/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)

  - [`websites.trackingProtectionMode`](/es/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)

- [`proxy`](/es/docs/Mozilla/Add-ons/WebExtensions/API/proxy)

  - `FindProxyForURL()` puede devolver un objeto ahora

- [`runtime`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime)

  - [`runtime.openOptionsPage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) funciona en Android

- [`sessions`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sessions)

  - [`setTabValue()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue)
  - [`getTabValue()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue)
  - [`removeTabValue()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue)
  - [`setWindowValue()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue)
  - [`getWindowValue()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue)
  - [`removeWindowValue()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue)

- [`sidebarAction`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)

  - [`sidebarAction.open()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open)

- [`storage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage)

  - [`storage.managed`](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed)

- [`tabs`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs)

  - opción `loadReplace` en [`tabs.update()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)
  - propiedad `discarded` en [`tabs.Tab`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/es/docs/Web) y [`tabs.query()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) puede abrir URL con «view-source:»
  - propiedad `openerTabId` en [`tabs.Tab`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) y [`tabs.update()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

- [`theme`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)

  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/es/docs/Mozilla/Add-ons/WebExtensions/API/theme)

  - opción `windowId` para [`theme.update()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/es/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

  - [`filterResponseData()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - propiedad `proxyInfo` en sucesos [`webRequest`](/es/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

- [`windows`](/es/docs/Mozilla/Add-ons/WebExtensions/API/windows)

  - opción `allowScriptsToClose` en [`windows.create()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Versiones anteriores

{{Firefox_for_developers(56)}}
