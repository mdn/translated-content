---
title: Firefox Quantum 57 para programadores
slug: Mozilla/Firefox/Releases/57
tags:
  - "57"
  - Firefox
  - Notas de publicación
translation_of: Mozilla/Firefox/Releases/57
---

{{FirefoxSidebar}}

Este artículo proporciona información sobre los cambios incluidos en Firefox 57 (también conocido como Firefox Quantum) que conciernen a los desarrolladores. Firefox 57 se disponibilizó al público el [14 de noviembre de 2017](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Firefox 57 === Firefox Quantum

Hemos bautizado a Firefox 57 como **Quantum** por el proyecto de ingeniería [Firefox Quantum](https://wiki.mozilla.org/Quantum), cuyo objetivo ha sido el de reconstruir Firefox desde cero para darle un rendimiento y una estabilidad excelentes, así como mejorar su apariencia visual. Esta es la primera versión de Firefox en incluir algunos de estos cambios, así que quisimos conmemorar el acontecimiento.

> **Nota:** para obtener más información sobre las funciones de Quantum incluidas en esta versión, consúltese el artículo [«Firefox Quantum Developer Edition: el Firefox más rápido, con IU Photon y mejores herramientas»](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/), escrito por Dan Callahan.

[El nuevo procesador de CSS en paralelo de Firefox](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) ―también denominado **Quantum CSS** o **Stylo**― está activado de manera predeterminada en Firefox 57 para escritorio; las versiones para móviles darán el salto en el futuro. Los programadores no deberían notar ninguna diferencia importante, aparte de la amplia gama de mejoras de rendimiento. Sin embargo, existen algunas diferencias menores de funcionalidad en Stylo, las cuales se han implementado para corregir comportamientos no estándares de Gecko que habrían de desaparecer. Informaremos de esas diferencias en las páginas de referencia y en las notas de publicación según proceda (véanse [Notas sobre Quantum CSS](#notas_sobre_quantum_css)).

## Cambios para programadores web

### Herramientas de desarrollo

_No hay ningún cambio._

### HTML

- Los tipos [«date»](/es/docs/Web/HTML/Element/input/date) y [«time»](/es/docs/Web/HTML/Element/input/time) de {{htmlelement("input")}} ya están activados en todas las compilaciones ({{bug("1399036")}}).

### CSS

- Ahora admitimos los valores `minimal-ui` y `standalone` de la consulta [`display-mode`](/en-US/docs/Web/CSS/@media/display-mode) ({{bug(1369815)}}). Consúltese también el [campo de manifiesto de aplicación web `display`](/es/docs/Web/Manifest#display).
- Se corrigió un problema que causaba que la notación abreviada de la cuadrícula quedara restablecida al utilizar {{cssxref("grid-row-gap")}} y {{cssxref("grid-column-gap")}} ({{bug(1387410)}}).
- Se ha eliminado la preferencia `layout.css.clip-path-shapes.enabled`, que permitía activar o desactivar la compatibilidad de {{cssxref("&lt;basic-shape&gt;")}} con {{cssxref("clip-path")}} ({{bug(1399767)}}).

#### Notas sobre Quantum CSS

- Los valores de degradados radiales tales como `radial-gradient(circle gold,red)` funcionan en el sistema de estilos de Gecko anterior, pero no debería por la coma faltante entre `circle` y `gold` ({{bug(1383323)}}). Quantum corrige este defecto.
- Cuando se da animación a un elemento ubicado fuera de la pantalla y se establece un tiempo de retardo, Gecko no actualiza la visualización correctamente en algunas plataformas, como Windows ({{bug(1383239)}}). Esto ha quedado corregido en Quantum.
- En Gecko, no es posible desplegar de manera predeterminada los elementos {{htmlelement("details")}} mediante el atributo `open` si tienen una propiedad {{cssxref("animation")}} activa ({{bug(1382124)}}). Quantum corrige este problema.
- En Gecko, los efectos {{cssxref("transition", "transitions")}} no funcionan si se transiciona desde un {{cssxref("text-shadow")}} con un color especificado a un `text-shadow` sin ningún color ({{bug(726550)}}). Este comportamiento se ha corregido en Quantum.
- En Gecko, cancelar una animación de relleno (p. ej., con `animation-fill-mode: forwards` definido) puede desencadenar un conjunto de transiciones en el mismo elemento, aunque únicamente una vez (véase el {{bug(1192592)}} y [estas pruebas](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) para más información). Por lo general, las animaciones declaratorias no deberían desencadenar animaciones. Esto se ha corregido en Quantum.
- En Gecko, las animaciones que utilizan ems como unidad no reciben las modificaciones realizadas en {{cssxref("font-size")}} en el elemento padre del elemento animado, aunque deberían ({{bug(1254424)}}). Quantum CSS corrige esto.
- Gecko además maneja la herencia de `font-size` de manera diferente a la de Quantum CSS, por lo que para algunas configuraciones de idioma, los tamaños de letra heredados quedaban más pequeños de lo esperado (véase {{bug(1391341)}}). Quantum corrige esto.
- Gecko reutiliza el mismo mecanismo empleado al analizar una ficha de URL durante el análisis de las funciones `domain()` o `url-prefix()` para la regla {{cssxref("@document", "@-moz-document")}}. Quantum CSS no utiliza el mismo mecanismo y no considera las fichas como no válidas cuando contienen paréntesis o comillas ({{bug(1362333)}}).
- En Gecko, cuando se define un tipo de letra del sistema como el valor del {{domxref("CanvasRenderingContext2D.font", "tipo de letra")}} de algún contexto del lienzo 2D (p. ej., `menu`), la obtención del valor del tipo de letra no devuelve el resultado correcto (no devuelve nada). Este problema quedó solucionado en Quantum. ({{bug(1374885)}}).
- En Gecko, cuando se crea un subárbol desligado (p. ej., un {{htmlelement("div")}} creado a través de {{domxref("Document.createElement","createElement()")}} que todavía no se inserta en el DOM), el elemento raíz del subárbol se define como un elemento de nivel bloque. En Quantum CSS, el elemento se define como alineado, tal como se define en la especificación ({{bug(1374994)}}).
- Gecko rechaza las expresiones {{cssxref("calc")}} ―lo que invalida el valor― cuando se utilizan como el componente radial de una función {{cssxref("radial-gradient")}} ({{bug(1376019)}}). Quantum CSS lo resuelve.
- En Gecko, `calc(1*2*3)` no es analizado debidamente; Quantum CSS soluciona el problema ({{bug(1379467)}}).
- En Quantum CSS, [`calc()` se admite en todos los sitios que la especificación indica](https://drafts.csswg.org/css-values-3/#calc-notation) ({{bug(1350857)}}). En Gecko, este no es el caso.
- Gecko contiene un defecto que provoca que los pseudoelementos {{cssxref("::before")}} y {{cssxref("::after")}} se generen aun si el valor de la propiedad {{cssxref("content")}} se define como `normal` o `none`. Este comportamiento es contrario a la especificación ({{bug(1387931)}}) y se ha corregido en Quantum.
- Otro defecto de Gecko provoca que la propiedad {{cssxref("background-position")}} no pueda transicionarse entre dos valores que contengan números diferentes de valores {{cssxref("&lt;position&gt;")}}, por ejemplo, `background-position: 10px 10px;` y `background-position: 20px 20px, 30px 30px;` (véase {{bug(1390446)}}). Quantum resuelve el error.

### SVG

_No hay ningún cambio._

### JavaScript

- El bucle no estándar {{jsxref("Statements/for_each...in", "for each...in")}} (E4X) fue eliminado. En su lugar, utilícese {{jsxref("Statements/for...of", "for...of")}} y consúltese [Atención: los bucles de JavaScript 1.6 «for-each-in» son obsoletos](/es/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) para obtener ayuda en la migración. ({{bug(1083470)}}).
- Se marcaron como obsoletos los métodos {{jsxref("Object.prototype.watch()")}} y {{jsxref("Object.unwatch", "unwatch()")}}. Se emitirá una alerta si se utilizan y serán eliminados en el futuro próximo ({{bug(934669)}}).
- Se eliminaron los objetos {{jsxref("Iterator")}} y {{jsxref("StopIteration")}} y el protocolo de iteración heredado ({{bug(1098412)}}).

### API

#### API nuevas

- Se ha activado de manera predeterminada la API {{domxref("PerformanceObserver")}} ({{bug(1386021)}}).
- Añadimos las interfaces {{domxref("AbortController")}} y {{domxref("AbortSignal")}} (conocidas como la API «Abort»), que permiten interrumpir las solicitudes del DOM (como las de [recuperación](/es/docs/Web/API/WindowOrWorkerGlobalScope/fetch)) si así se desea ({{bug(1378342)}}).

#### DOM

- Se ha implementado la propiedad {{domxref("Selection.type")}} de la [API Selection](/es/docs/Web/API/Selection_API) ({{bug(1359157)}}).
- Se admite {{domxref("Document.createEvent", "Document.createEvent('FocusEvent')")}} ahora ({{bug(1388069)}}).
- La propiedad `files` de la interfaz {{domxref("HTMLInputElement")}} puede definirse ahora ({{bug(1384030)}}).
- El método `HTMLDocument.getSelection()` se ha trasladado a la interfaz {{domxref("Document.getSelection","Document")}} para que quede disponible para los documentos XML ({{bug(718711)}}).
- Hemos implementado el suceso {{Event("messageerror")}}, el cual puede ejecutar código tras su desencadenamiento por parte de manejadores de sucesos utilizados en destinos de mensajes. Véase {{domxref("MessagePort.onmessageerror")}}, {{domxref("DedicatedWorkerGlobalScope.onmessageerror")}}, {{domxref("Worker.onmessageerror")}}, {{domxref("BroadcastChannel.onmessageerror")}} y {{domxref("Window.onmessageerror")}} ({{bug(1359017)}}).
- Cuando se emplea la iteración en valores {{domxref("Headers")}}, estos quedarán organizados en orden lexicográfico y se combinarán los valores de los nombres de cabeceras duplicados ({{bug(1396848)}}).

#### Sucesos de DOM

_No hay ningún cambio._

#### Multimedia y WebRTC

- Ahora se admiten mensajes de cualquier tamaño (hasta 1 GiB, aunque 256 kiB es más interoperativo) en {{domxref("RTCDataChannel")}} por medio del uso de la opción «end-of-record» (EOR) en los mensajes de SCTP. Consúltese {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Using_data_channels", "Understanding message size limits")}} para obtener más información ({{bug(979417)}}).

  > **Nota:** Como Firefox aún no admite el protocolo ndata de SCTP, que permite intercalar mensajes de SCTP de varias fuentes, enviar objetos de datos grandes puede causar retardos importantes en el resto del tránsito SCTP. Véase el {{bug(1381145)}} para estar al tanto de la implementación de ndata en Firefox.

- El método {{domxref("RTCDataChannel.send()")}} ahora puede emitir una excepción `TypeError` si el tamaño del mensaje que se intenta enviar no es compatible con el agente de usuario de destino (esto se implementó como parte del {{bug(979417)}}).
- La [API MediaStream Recording](/es/docs/Web/API/MediaStream_Recording_API) se ha actualizado de modo que los sucesos {{event("error")}} que se envíen para notificar problemas acaecidos durante la grabación son ahora del tipo {{domxref("MediaRecorderErrorEvent")}} en lugar de sucesos genéricos.
- Se actualizó la documentación concerniente a {{domxref("OfflineAudioContext")}}, dado que sus entradas de constructores pueden especificarse ahora dentro de un objeto en lugar de una lista de parámetros ({{bug(1388591)}}).

### Seguridad

- Los URL `resource://` ya no filtran información ({{bug(863246)}})
- Los URI de datos ahora se manipulan como orígenes opacos únicos, en vez de heredar el origen del objeto de configuración responsable de la navegación ({{bug(1324406)}}).

### _Plugins_

_No hay ningún cambio._

### Otros

- El valor `fullscreen` del campo `display` del [manifiesto de aplicación web](/es/docs/Web/Manifest) ahora funciona en Firefox para Android 57 ({{bug(1126479)}}).
- La [modalidad sin periféricos](/es/docs/Mozilla/Firefox/Headless_mode) de Firefox ahora incluye el parámetro `-screenshot`, que permite a los usuarios tomar capturas de pantalla de sitios web directamente desde la consola ({{bug(1378010)}}).

## Eliminaciones de la plataforma web

### HTML

- `<link rel="preload">` (véase [Precargar contenido con rel="preload"](/es/docs/Web/HTML/Preloading_content)) fue desactivado en Firefox 57 a causa de varios problemas de compatibilidad con la web (p. ej., {{bug(1405761)}}). Se espera que para Firefox 58 quede lista la versión de reemplazo, la cual funcionará para recursos no almacenables en la antememoria.

### API

- La [API Social](/es/docs/Archive/Social_API), privativa de Mozilla, se ha eliminado completamente ({{bug(1388902)}}).

### SVG

_No hay ningún cambio._

## Cambios relativos a los complementos y los programadores de Mozilla

> **Nota:** A partir de Firefox 57, se ha eliminado por completo la compatibilidad con los complementos basados en la tecnología XPCOM. Todas las extensiones deben convertirse para emplear la [tecnología nueva](/en-US/Add-ons/WebExtensions), conocida como WebExtensions, o de lo contrario dejarán de funcionar.

### WebExtensions

Se añadieron o ampliaron las API siguientes:

- [`bookmarks`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - compatibilidad con separadores mediante [`bookmarks.BookmarkTreeNodeType`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)

  - propiedad `theme_icons` para iconos claros u oscuros en función del tema

- [`browserAction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)

  - [`browserAction.openPopup()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup)

- [`browserSettings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [`allowPopupsForUserEvents`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents)
  - [`homepageOverride`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride)
  - [`imageAnimationBehavior`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior)
  - [`newTabPageOverride`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride)

- [`browsingData`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [`browsingData.removeLocalStorage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage)

- [`clipboard`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard)

  - [`setImageData()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData)

- [`contextualIdentities`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

  - [`onCreated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated)
  - [`onRemoved`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved)
  - [`onUpdated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated)
  - `colorCode` y `iconUrl` en [`contextualIdentitities.ContextualIdentity`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity)

- [`devtools.panels`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels)

  - [`devtools.panels.ElementsPanel.createSidebarPane()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel/createSidebarPane)

- [`downloads`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

  - opción `incognito` en [`downloads.download()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download)
  - propiedad `estimatedEndTime` en [`downloads.DownloadItem`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem)

- [`find`](/en-US/Add-ons/WebExtensions/API/find)

  - [`find()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find/find)
  - [`highlightResults()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find/highlightResults)
  - [`removeHighlighting()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting)

- [`pageAction.openPopup()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup)
- [`privacy`](/en-US/Add-ons/WebExtensions/API/privacy/websites)

  - [`websites.trackingProtectionMode`](/en-US/Add-ons/WebExtensions/API/privacy/websites)

- [`proxy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy)

  - `FindProxyForURL()` puede devolver un objeto ahora

- [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime)

  - [`runtime.openOptionsPage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) funciona en Android

- [`sessions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions)

  - [`setTabValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue)
  - [`getTabValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue)
  - [`removeTabValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue)
  - [`setWindowValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue)
  - [`getWindowValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue)
  - [`removeWindowValue()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue)

- [`sidebarAction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)

  - [`sidebarAction.open()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open)

- [`storage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)

  - [`storage.managed`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed)

- [`tabs`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs)

  - opción `loadReplace` en [`tabs.update()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)
  - propiedad `discarded` en [`tabs.Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/en-US/docs/) y [`tabs.query()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) puede abrir URL con «view-source:»
  - propiedad `openerTabId` en [`tabs.Tab`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) y [`tabs.update()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

- [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)

  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme)

  - opción `windowId` para [`theme.update()`](/en-US/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

  - [`filterResponseData()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - propiedad `proxyInfo` en sucesos [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

- [`windows`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows)

  - opción `allowScriptsToClose` en [`windows.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Versiones anteriores

{{Firefox_for_developers(56)}}
