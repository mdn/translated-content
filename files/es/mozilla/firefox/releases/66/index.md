---
title: Firefox 66 para desarrolladores
slug: Mozilla/Firefox/Releases/66
tags:
  - "66"
  - Firefox
  - Lanzamiento
  - Mozilla
translation_of: Mozilla/Firefox/Releases/66
---

{{FirefoxSidebar}}

Este artículo proporciona información sobre los cambios en Firefox 66 que afectarán a los desarrolladores. Firefox 66 fue lanzado el 19 de marzo de 2019.

## Cambios para desarrolladores web

### Herramientas de desarrollo

- Los captadores de JavaScript ahora pueden ejecutarse desde la ventana emergente de autocompletado en la [Consola Web](https://firefox-source-docs.mozilla.org/devtools-user/web_console/) ({{bug(1499289)}}).
- Los métodos de la ventana {{domxref("Window.alert()", "alert()")}}, {{domxref("Window.prompt()","prompt()")}}, and {{domxref("Window.confirm()","confirm()")}} ahora trabajan de nuevo en el [Modo de diseño de respuesta](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/), después de un período de ruptura ({{bug(1273997)}}).
- Puede copiar la salida de la consola al portapapeles haciendo clic derecho y seleccionando "**Exportar mensajes visibles al portapapeles**" en el menú contextual.

### HTML

- Los archivos HTML (y texto sin formato) codificados en UTF-8 que se cargan desde las `file:`URL ahora son compatibles sin `<meta charset="utf-8">` la lista de materiales UTF-8 BOM, lo que facilita el trabajo local en dichos archivos antes de cargarlos en un servidor. Aún debe asegurarse de que el servidor envíe `charset=utf-8` en el `Content-Type` encabezado HTTP para dichos archivos, de lo contrario, el mecanismo de detección utilizado para los archivos locales interrumpiría la carga incremental en el caso de la red ({{bug(1071816)}}).

#### Removido

- El `x-moz-errormessage` atributo se ha eliminado del {{HTMLElement("input")}} elemento ({{bug(1513890)}}). Debe usar {{domxref("Constraint_validation", "Funciones de validación de restricciones", "", "1")}} para implementar mensajes de validación personalizados en su lugar.

### CSS

- [El Anclaje de desplazamiento](https://drafts.csswg.org/css-scroll-anchoring/) se ha implementado en Firefox Desktop (pero todavía no en dispositivos móviles), que incluye la {{cssxref("overflow-anchor")}} propiedad ({{bug(1305957)}}).
- Hemos implementado el modificador de [selector de atributo](/es/docs/Web/CSS/Attribute_selectors) que distingue entre mayúsculas y minúsculas, `s` ({{Bug(1512386)}}).
- Varias [propiedades logicas](/es/docs/Web/CSS/CSS_Logical_Properties) abreviadas han aterrizado, junto con las propiedades del radio del borde relativo al flujo:

  - {{cssxref("padding-block")}} y {{cssxref("padding-inline")}} ({{bug(1519847)}}).
  - {{cssxref("margin-block")}} y {{cssxref("margin-inline")}} ({{bug(1519944)}}).
  - {{cssxref("inset")}}, {{cssxref("inset-block")}}, y {{cssxref("inset-inline")}} ({{bug(1520229)}}).
  - {{cssxref("border-block-color")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-width")}}, {{cssxref("border-inline-color")}}, {{cssxref("border-inline-style")}}, and {{cssxref("border-inline-width")}} ({{bug(1520236)}}).
  - {{cssxref("border-block")}} y {{cssxref("border-inline")}} ({{bug(1520396)}}).
  - {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, y {{cssxref("border-end-end-radius")}} ({{bug(1520684)}}).

- Implementamos las consultas {{cssxref("@media/overflow-inline", "overflow-inline")}} y {{cssxref("@media/overflow-block", "overflow-block")}} medios ({{Bug(1422235)}}).
- {{cssxref("grid-template-columns")}} y {{cssxref("grid-template-rows")}} ahora se pueden animar, según las reglas establecidas en sus especificaciones ({{bug(1348519)}}).
- Ahora soportamos {{cssxref("calc")}} con porcentajes para celdas de tabla y anchos de columna ({{bug(957915)}}).
- Las palabras clave `min-content` y `max-content` ahora están disponibles sin prefijo ({{bug(1322780)}}). Estos se pueden establecer en:

  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("flex-basis")}}
  - {{cssxref("min-width")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-height")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - {{cssxref("block-size")}}
  - {{cssxref("inline-size")}}

### SVG

_No hay adicionales._

#### Removido

- Eliminamos el soporte para [`xml:base`](/en-US/docs/XML_introduction/xml:base) atributo ({{Bug(903372)}}).

### JavaScript

_Sin cambios._

### APIs

#### Nuevos en APIs/cambios

- La reproducción automática de audio se bloqueará de forma predeterminada poco después de que la versión 66 se convierta en la versión de lanzamiento de Firefox ({{bug(1487844)}}, consulte el {{bug(1535667)}} para obtener información detallada sobre la implementación). La función se extenderá gradualmente a los usuarios hasta que todos la tengan.

#### DOM

- El {{domxref("HTMLSlotElement.assignedElements()")}} método ha sido implementado ({{bug(1425685)}}).
- El {{domxref("TextEncoder.encodeInto()")}} método ha sido implementado ({{bug(1514664)}}).

#### Eventos DOM

- La {{domxref("InputEvent.inputType")}} propiedad ha sido implementada ({{bug(1447239)}}).
- Las propiedades {{domxref("Window.event")}} y {{domxref("Event.returnValue")}} ropiedades, que originalmente eran propiedad de IE, y que luego se admitían en otros navegadores por motivos de compatibilidad, se han vuelto a introducir en Firefox 66, después de haber sido agregadas primero en las versiones 63 y 64 respectivamente, pero luego se eliminaron nuevamente debido a problemas de compatibilidad.
- A partir de 66, cuando la {{domxref("KeyboardEvent.keyCode")}} propiedad del {{event("keypress")}} evento del objeto es 0, el valor será el mismo que {{domxref("KeyboardEvent.charCode")}}. Por el contrario, cuando, `charCode` es 0, será igual que `keyCode`. Este comportamiento de duplicación coincide con otros navegadores y se espera que solucione la mayoría de los problemas de compatibilidad asociados, sin embargo, la detección de agentes de usuario puede causar problemas adicionales en algunas bibliotecas de JavaScript. Tenga en cuenta que en términos de especificaciones, hemos cambiado desde el _modelo de división_ del _modelo fusionado_ (ver [Como determinar keyCode para eventos de pulsaciones de tecla](https://w3c.github.io/uievents/#determine-keypress-keyCode) en la especificación de interfaz de usuario de eventos).

#### Media, Audio Web, y WebRTC

- El {{domxref("MediaDevices")}} método {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, disponible como `navigator.mediaDevices.getDisplayMedia()`, se ha agregado y sincronizado con la especificación. Este método le permite capturar una pantalla o parte de una pantalla {{domxref("MediaStream")}} para manipularla o compartirla ({{bug(1321221)}}).
- Como un paso hacia la desaprobación específico de Firefox {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}- método basado para capturar contenido de la pantalla y de la ventana, no la restricción `mediaSource` estándar, ahora trata los valores `screen` y `window` de forma idéntica. Ambos ahora presentan una lista de pantallas y ventanas para que el usuario pueda elegir ({{bug(1474376)}}).
- {{domxref("RTCRtpStreamStats.qpSum", "qpSum")}} Se ha agregado a {{domxref("RTCRTPStreamStats")}} objetos de salida locales. Esto mide el total de los valores de los parámetros de cuantización para cada fotograma enviado o recibido en la pista de video. Cuanto mayor sea este número, más comprimida estará probablemente la transmisión ({{bug(1347070)}}).
- En un paso en el camino hacia la implementación del soporte para la Política de funciones en una futura actualización de Firefox, {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} a no se puede usar en situaciones en las que no hay un origen adecuado para el contenido, como cuando se llama desde un espacio aislado {{HTMLElement("iframe")}} o desde una `data` URL ingresada en el Barra de direcciones por el usuario. Para obtener más detalles específicos, consulte {{SectionOnPage("/en-US/docs/Web/API/MediaDevices/getUserMedia", "Security")}} ({{bug(1371741)}}).

#### Removido

- El legado WebRTC {{domxref("PeerConnection.getStats()")}} método heredado de WebRTC se ha eliminado, junto con los tipos asociados ({{bug(1328194)}}).

### Redes

- El valor predeterminado del {{httpheader("Accept")}} encabezado se ha cambiado a `*/*` ({{bug(1417463)}}).

### Seguridad

_Sin cambios._

### Complementos

_Sin cambios._

## Cambios para desarrolladores de complementos

### Cambios en la API

#### Menús

- Los elementos del menú de extensión del "marcador" {{WebExtAPIRef("menus.ContextType", "type")}} también aparecerán en la barra lateral de Marcadores (

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>B</kbd>

  ) y en la ventana de la Biblioteca (

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>B</kbd>

  ) ({{bug(1419195)}}).

### Cambios en Manifesto

_Sin cambios._

## Versiones anteriores

{{Firefox_for_developers(65)}}
