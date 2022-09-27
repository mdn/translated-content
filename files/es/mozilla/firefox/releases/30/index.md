---
title: Firefox 30 for developers
slug: Mozilla/Firefox/Releases/30
translation_of: Mozilla/Firefox/Releases/30
---

{{FirefoxSidebar}}

Want to help document Firefox 30? See the [list of bugs that need to be written about](http://beta.elchi3.de/doctracker/#list=fx&version=30.0) and pitch in!

## Cambios para los Desarrolladores Web

### Herramientas para Desarrolladores

- Ha sido implementado el Modelo de Caja Resaltado (Box Model Highlighter) ({{bug(663778)}}).
- En cualquier parte el nodo DOM aparece en la salida de la consola, se resalta cuando se encima la salida de esa consola ({{bug(757866)}}). Sucede lo mismo con todas las funciones y objetos JS, son resaltados en la salida de la consola ({{bug(584733)}}). Más información acerca de las mejoras de la consola pueden econtrarse en el siguiente [post del blog](http://www.robodesign.ro/mihai/blog/web-console-improvements-episode-30).
- Sopoerte para {{domxref("Console.count()")}} ha sido agregado ({{bug(922208)}}).

### CSS

- La propiedad {{cssxref("background-blend-mode")}} ha sido habilitada por defecto ({{bug(970600)}}).
- La propiedad no estándar {{cssxref("overflow-clip-box")}} ha sido implementada para utilizarse solamente en las hojas de estilo UA ({{bug(966992)}}).
- La propiedad {{cssxref("line-height")}} afecta ahora a las entradas de lineas de texto sencillas (`<input type=text|password|email|search|tel|url|unknown>` types) aunque no puede reducir su tamaño por debajo de una altura de la línea de `1.0` ({{bug(349259)}}).
- La propiedad {{cssxref("line-height")}} ahora también afecta el `type=button`, sin restricciones ({{bug(697451)}}).
- El cambio al nombre de los keyframes no afecta los elementos actuales ({{bug(978648)}}).

### HTML

_Sin cambios._

### JavaScript

- New ES6-compatible [array comprehensions](/es/docs/Web/JavaScript/Reference/Operators/Array_comprehensions) `[for (item of iterable) item]` and [generator comprehensions](/es/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions) `(for (item of iterable) item)` have been implemented ({{bug(979865)}}).
- [Typed arrays](/es/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Property_access) are now extensible and support new named properties ({{bug(695438)}}).
- The {{jsxref("Error.prototype.stack")}} property now contains column numbers ({{bug(762556)}}) and has been improved [when using `Function()` and `eval()` calls](/es/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack#Stack_of_eval'ed_code). This can help you to better debug minified or generated JavaScript code.
- The `Promise.cast()` method has been renamed to {{jsxref("Promise.resolve()")}} ({{bug(966348)}}).

### Interfaces/APIs/DOM

- {{domxref("Navigator.sendBeacon")}} has been implemented, easing telemetry collection ({{bug(936340)}}).
- Added a `relList` property returning a {{domxref("DOMTokenList")}} to {{domxref("HTMLLinkElement")}}, {{domxref("HTMLAreaElement")}} and {{domxref("HTMLAnchorElement")}} ({{bug(968637)}}).
- As per the latest specification, the first argument of {{domxref("OscillatorNode.start")}} and {{domxref("OscillatorNode.stop")}} is now optional and defaults to `0` ({{bug(982541)}}).
- The method {{domxref("Navigator.requestWakeLock()")}} and the non-standard {{domxref("MozWakeLock")}} are no longer available from the Web on Desktop ({{bug(963366)}}).
- The `DOM_VK_ENTER` constant has been removed from {{domxref("KeyboardEvent")}} ({{bug(969247)}}).
- Web components' {{domxref("Document.register")}} has been adapted to follow the behavior described in the latest version of the specification ({{bug(856140)}}).
- Basic support for Hit regions on canvas has been added: the methods {{domxref("CanvasRenderingContext2D.addHitRegion()")}} and {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} have been added. These are disabled by default; to activate them set the preference `canvas.hitregions.enabled` to `true`. ({{bug(966591)}})
- The non-standard, and deprecated since Firefox 15, {{domxref("Blob.mozSlice")}} is no longer supported ({{bug(961804)}}).
- The non-standard {{domxref("ArchiveReader")}} and {{domxref("ArchiveRequest")}} are no longer exposed to the Web ({{bug(968883)}}).
- [WebIDL constructors](http://dxr.mozilla.org/mozilla-central/source/dom/webidl/) cannot be called as functions anymore. They need to be preceded by the keyword `new`. ({{bug(916644)}})
- Added support for a new value (`alpha`) for the second, optional, parameter of the {{domxref("Canvas.getContext()")}} method allowing to define if alpha blending must be stored or not for this context. When not, the per-pixel alpha value in this store is always `1.0`. This allows the back-end to implement a fast-track. ({{bug(982480)}})
- {{domxref("GlobalWorkerScope.consle")}} now returns for the regular {{domxref("Console")}}; {{domxref("WorkerConsole")}} has been removed ({{bug(965860)}}).

### MathML

_No change._

### SVG

- {{SVGElement("feDropShadow")}}, and its interface {{domxref("SVGFEDropShadowElement")}}, from the Filter Effects Module are now supported ({{bug(964200)}}).

### Audio/Video

- On Linux, Gstreamer 1.0 is now supported (instead of 0.10) ({{bug(806917)}}).

## Security

_No change._

## Changes for add-on and Mozilla developers

- The interface `nsIDOMWindowUtils` now supports the Boolean attribute `audioMuted` and `audioVolume`, a float in the range `[0.0` , `1.0]`, allowing to control the sound produced by a window (that is any tab or iframe). There is no UI for this, but is available to add-ons. ({{bug(923247)}})

## See also

- [Site Compatibility for Firefox 30](/es/docs/Mozilla/Firefox/Releases/30/Site_Compatibility)

### Older versions

{{Firefox_for_developers('29')}}
