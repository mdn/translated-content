---
title: Firefox 30 for developers
slug: Mozilla/Firefox/Releases/30
---

Want to help document Firefox 30? See the [list of bugs that need to be written about](http://beta.elchi3.de/doctracker/#list=fx&version=30.0) and pitch in!

## Cambios para los Desarrolladores Web

### Herramientas para Desarrolladores

- Ha sido implementado el Modelo de Caja Resaltado (Box Model Highlighter) ([Error 663778 en Firefox](https://bugzil.la/663778)).
- En cualquier parte el nodo DOM aparece en la salida de la consola, se resalta cuando se encima la salida de esa consola ([Error 757866 en Firefox](https://bugzil.la/757866)). Sucede lo mismo con todas las funciones y objetos JS, son resaltados en la salida de la consola ([Error 584733 en Firefox](https://bugzil.la/584733)). Más información acerca de las mejoras de la consola pueden econtrarse en el siguiente [post del blog](http://www.robodesign.ro/mihai/blog/web-console-improvements-episode-30).
- Sopoerte para {{domxref("Console.count()")}} ha sido agregado ([Error 922208 en Firefox](https://bugzil.la/922208)).

### CSS

- La propiedad {{cssxref("background-blend-mode")}} ha sido habilitada por defecto ([Error 970600 en Firefox](https://bugzil.la/970600)).
- La propiedad no estándar {{cssxref("overflow-clip-box")}} ha sido implementada para utilizarse solamente en las hojas de estilo UA ([Error 966992 en Firefox](https://bugzil.la/966992)).
- La propiedad {{cssxref("line-height")}} afecta ahora a las entradas de lineas de texto sencillas (`<input type=text|password|email|search|tel|url|unknown>` types) aunque no puede reducir su tamaño por debajo de una altura de la línea de `1.0` ([Error 349259 en Firefox](https://bugzil.la/349259)).
- La propiedad {{cssxref("line-height")}} ahora también afecta el `type=button`, sin restricciones ([Error 697451 en Firefox](https://bugzil.la/697451)).
- El cambio al nombre de los keyframes no afecta los elementos actuales ([Error 978648 en Firefox](https://bugzil.la/978648)).

### HTML

_Sin cambios._

### JavaScript

- New ES6-compatible [array comprehensions](/es/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` and [generator comprehensions](/es/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` have been implemented ([Error 979865 en Firefox](https://bugzil.la/979865)).
- [Typed arrays](/es/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) are now extensible and support new named properties ([Error 695438 en Firefox](https://bugzil.la/695438)).
- The {{jsxref("Error.prototype.stack")}} property now contains column numbers ([Error 762556 en Firefox](https://bugzil.la/762556)) and has been improved [when using `Function()` and `eval()` calls](/es/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack#Stack_of_eval'ed_code). This can help you to better debug minified or generated JavaScript code.
- The `Promise.cast()` method has been renamed to {{jsxref("Promise.resolve()")}} ([Error 966348 en Firefox](https://bugzil.la/966348)).

### Interfaces/APIs/DOM

- {{domxref("Navigator.sendBeacon")}} has been implemented, easing telemetry collection ([Error 936340 en Firefox](https://bugzil.la/936340)).
- Added a `relList` property returning a {{domxref("DOMTokenList")}} to {{domxref("HTMLLinkElement")}}, {{domxref("HTMLAreaElement")}} and {{domxref("HTMLAnchorElement")}} ([Error 968637 en Firefox](https://bugzil.la/968637)).
- As per the latest specification, the first argument of {{domxref("OscillatorNode.start")}} and {{domxref("OscillatorNode.stop")}} is now optional and defaults to `0` ([Error 982541 en Firefox](https://bugzil.la/982541)).
- The method {{domxref("Navigator.requestWakeLock()")}} and the non-standard {{domxref("MozWakeLock")}} are no longer available from the Web on Desktop ([Error 963366 en Firefox](https://bugzil.la/963366)).
- The `DOM_VK_ENTER` constant has been removed from {{domxref("KeyboardEvent")}} ([Error 969247 en Firefox](https://bugzil.la/969247)).
- Web components' {{domxref("Document.register")}} has been adapted to follow the behavior described in the latest version of the specification ([Error 856140 en Firefox](https://bugzil.la/856140)).
- Basic support for Hit regions on canvas has been added: the methods {{domxref("CanvasRenderingContext2D.addHitRegion()")}} and {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} have been added. These are disabled by default; to activate them set the preference `canvas.hitregions.enabled` to `true`. ([Error 966591 en Firefox](https://bugzil.la/966591))
- The non-standard, and deprecated since Firefox 15, {{domxref("Blob.mozSlice")}} is no longer supported ([Error 961804 en Firefox](https://bugzil.la/961804)).
- The non-standard {{domxref("ArchiveReader")}} and {{domxref("ArchiveRequest")}} are no longer exposed to the Web ([Error 968883 en Firefox](https://bugzil.la/968883)).
- [WebIDL constructors](http://dxr.mozilla.org/mozilla-central/source/dom/webidl/) cannot be called as functions anymore. They need to be preceded by the keyword `new`. ([Error 916644 en Firefox](https://bugzil.la/916644))
- Added support for a new value (`alpha`) for the second, optional, parameter of the {{domxref("Canvas.getContext()")}} method allowing to define if alpha blending must be stored or not for this context. When not, the per-pixel alpha value in this store is always `1.0`. This allows the back-end to implement a fast-track. ([Error 982480 en Firefox](https://bugzil.la/982480))
- {{domxref("GlobalWorkerScope.consle")}} now returns for the regular {{domxref("Console")}}; {{domxref("WorkerConsole")}} has been removed ([Error 965860 en Firefox](https://bugzil.la/965860)).

### MathML

_No change._

### SVG

- {{SVGElement("feDropShadow")}}, and its interface {{domxref("SVGFEDropShadowElement")}}, from the Filter Effects Module are now supported ([Error 964200 en Firefox](https://bugzil.la/964200)).

### Audio/Video

- On Linux, Gstreamer 1.0 is now supported (instead of 0.10) ([Error 806917 en Firefox](https://bugzil.la/806917)).

## Security

_No change._

## Changes for add-on and Mozilla developers

- The interface `nsIDOMWindowUtils` now supports the Boolean attribute `audioMuted` and `audioVolume`, a float in the range `[0.0` , `1.0]`, allowing to control the sound produced by a window (that is any tab or iframe). There is no UI for this, but is available to add-ons. ([Error 923247 en Firefox](https://bugzil.la/923247))

## See also

- [Site Compatibility for Firefox 30](/es/docs/Mozilla/Firefox/Releases/30/Site_Compatibility)

### Older versions

{{Firefox_for_developers('29')}}
