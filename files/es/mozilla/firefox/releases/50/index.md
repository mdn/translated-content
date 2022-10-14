---
title: Firefox 50 para desarrolladores
slug: Mozilla/Firefox/Releases/50
tags:
  - Firefox
  - Release Notes
translation_of: Mozilla/Firefox/Releases/50
---

{{FirefoxSidebar}}

Firefox 50 was released on November 15, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Cambios para desarrolladores Web

### HTML

- El estilo por defecto {{HTMLElement("bdo")}} ahora asigna {{cssxref("unicode-bidi")}} con el valor `isolate-override` ({{bug(1249497)}}).
- Asignar el atributo {{htmlattrxref("src", "track")}} del elemento {{HTMLElement("track")}} ahora funciona correctamente ({{bug(1281418)}}).
- El atributo `referrerpolicy` en los elementos {{HTMLElement("area")}}, {{HTMLElement("a")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}} y {{HTMLElement("link")}} ahora está disponible por defecto ({{bug(1223838)}}, {{bug(1264165)}}).

### CSS

- Esquinas con estilos punteados y rayados (`dashed, dotted`) Border-radiused ahora son mostradas con el estilo especificado en lugar de estilo sólido ({{bug(382721)}}).
- El selector pseudo-clase no estándar {{cssxref(":-moz-full-screen-ancestor")}} fue removido ({{bug(1199529)}}).
- {{cssxref("box-sizing")}}`: padding-box` fue removido, dado que ya no forma parte de la especificación y Firefox era el unico entre los principales navegadores que lo implementaba ({{bug(1166728)}}).
- Se removió el prefijo de los tres valores `isolate`, `isolate-override`, y `plaintext` de la propiedad {{cssxref("unicode-bidi")}} ({{bug(1141895)}}).
- En modo de compatibilidad, la etiqueta de un elemento de lista ahora hereda el tamaño de la lista, como en el modo estandar ({{bug(648331)}}).
- Las pseudo-clases {{cssxref(":in-range")}} y {{cssxref(":out-of-range")}} cambiaron su comportamiento para no coincidir elementos input deshabilitados o de solo lectura ({{bug(1264157)}}).
- Se removió el prefijo de la pseudo-clase {{cssxref(":any-link")}}({{bug(843579)}}).
- El valor `space` para {{cssxref("border-image-repeat")}} fue implementado ({{bug(720531)}}).

### JavaScript

- La propiedad del ES2015 {{jsxref("Symbol.hasInstance")}} ha sido implementada ({{bug(1054906)}}).
- El método de ES2017 {{jsxref("Object.getOwnPropertyDescriptors()")}} ha sido implementado ({{bug(1245024)}}).
- El comportamiento de \W in {{jsxref("RegExp")}} con los flags unicode e ignoreCase cambió para estar de acuerdo con el borrador mas reciente de la especificación. Ahora no coincide con K, S, k, s, and KELVIN SIGN (U+212A), y LATIN SMALL LETTER LONG S (U+017F) ({{bug(1281739)}}).

### Herramientas de desarrollador

- [La consola Web ahora entiende los source maps.](/es/docs/Tools/Web_Console/Console_messages#Source_maps)
- [El inspector de almacenamiento ahora permite borrar elementos individuales desde los objetos de almacenamiento de IndexedDB.](/es/docs/Tools/Storage_Inspector#IndexedDB)
- [La herramienta de memoria está habilitada por defecto.](/es/docs/Tools/Memory)
- [La panel de "Modelo de caja" fue movido al panel lateral Computado.](/es/docs/Tools/Page_Inspector/UI_Tour#Computed_view)
- [La consola Web ahora muestra las trazas de pila para las peticiones de red XHR o Fetch().](/es/docs/Tools/Web_Console/Console_messages#Viewing_network_request_details)
- [Todos los bugs corregidos entre Firefox 49 y Firefox 50](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263766&chfield=resolution&chfieldfrom=2016-06-06&chfieldvalue=FIXED&resolution=FIXED&classification=Client%20Software&chfieldto=2016-08-01&query_format=advanced&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### HTTP

- El protocolo experimental (y obsoleto) [SPDY](https://es.wikipedia.org/wiki/SPDY) 3.1 ahora está deshabilitado por defecto {{bug(1287132)}}.
- Se añadió soporte para {{HTTPHeader("X-Content-Type-Options")}} ({{bug(471020)}}).
- Los prefijos de cookies **`__Host-`** and **`__Secure-`** han sido implementados. Ver {{HTTPHeader("Set-Cookie")}} y {{bug(1283368)}}.
- El encabezado {{HTTPHeader("Referrer-Policy")}} ha sido implementado {{bug(1264164)}}.

### Seguridad

- El atributo {{htmlattrxref("ping", "a")}} del elemento {{htmlelement("a")}} ahora se apega al [`connect-src`](/es/docs/Web/Security/CSP/CSP_policy_directives#connect-src) [CSP 1.1 policy directive](/es/docs/Web/Security/CSP/CSP_policy_directives) ({{bug(1100181)}}).
- Agregado soporte para la directiva [`sandbox`](/es/docs/Web/Security/CSP/CSP_policy_directives#sandbox) [CSP](/es/docs/Web/Security/CSP) ({{bug(671389)}}).
- Ahora es posible indicar una política [content security policy for workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers#Content_security_policy) ({{bug (959388)}}).
- El método {{domxref("Navigator.sendBeacon()")}} ya no lanza una excepción si los datos de la baliza (Beacon Data) no pudieron ser enviados devido a una política de restricción consentimiento method [Content Security Policy](/es/docs/Web/Security/CSP); en su lugar, retorna `false` como es esperado ({{bug(1234813)}}).

### Redes

- Cuando un error es encontrado durante una {{domxref("XMLHttpRequest")}} asíncrona, el método {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} ahora retorna un string vacio ({{bug(1286744)}}).
- En lugar de retornar un `NetworkError`, ahora el asynchronous {{domxref("XMLHttpRequest")}} asíncrono que falla por CORS u otras restricciones de red, ahora lanza un {{event("error")}} que puede ser capturado como cualquier otro error ({{bug(709991)}}).
- {{domxref("XMLHttpRequest.getResponseHeader()")}} y {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} ahora también retornan encabezados vacíos por defecto. Esto puede ser controlado mediante la preferencia `network.http.keep_empty_response_headers_as_empty_string` ({{bug(918721)}}).
- La opción `only-if-cached` fue agregada a [`Request.cache`](/es/docs/Web/API/Request/cache) ({{bug(1272436)}}).

### DOM

- Ahora la opción `once` para {{domxref("EventTarget.addEventListener()")}} es soportada ({{bug(1287706)}}).
- La interfaz {{domxref("NodeList")}} are now iterable and the methods {{domxref("NodeList.forEach()", "forEach()")}}, {{domxref("NodeList.values()", "values()")}}, {{domxref("NodeList.entries()")}} and {{domxref("NodeList.keys()")}} are now available ({{bug(1290636)}}).
- The interface {{domxref("DOMTokenList")}} are now iterable and the methods {{domxref("DOMTokenList.forEach()", "forEach()")}}, {{domxref("DOMTokenList.values()", "values()")}}, {{domxref("DOMTokenList.entries()")}} and {{domxref("DOMTokenList.keys()")}} are now available ({{bug(1290636)}}).
- The methods {{domxref("Document.createElement()")}} and {{domxref("Document.createElementNS()")}} now have an optional `options` parameter for creating [custom elements](/es/docs/Web/Web_Components/Custom_Elements) ({{bug(1276579)}}).

### SVG

- The `allowReorder` attribute has been dropped and the behavior it was setting is now the default for SVG {{SVGElement("switch")}} elements ({{bug(1279690)}}).
- The `defer` keyword for the {{SVGAttr("preserveAspectRatio")}} attribute on SVG {{SVGElement("image")}} elements has been removed to follow the latest SVG2 specification ({{bug(1280425)}}).

### Drag and Drop API

- The {{domxref("DataTransfer.items")}} property has been implemented, allowing access to multiple items being dragged and dropped using the HTML Drag and Drop API. To allow this, the {{domxref("DataTransferItem")}} and {{domxref("DataTransferItemList")}} interfaces are now supported as well ({{bug(906420)}}). This is enabled by default.
- The old, obsolete Firefox specific drag and drop API events `dragdrop` and `draggesture` are no longer supported. Be sure to update any code still using them to use the [HTML drag and drop API](/es/docs/Web/API/HTML_Drag_and_Drop_API) ({{bug(1162050)}}.

### Pointer Lock API

- The [Pointer Lock API](/es/docs/Web/API/Pointer_Lock_API) is now unprefixed ({{bug(991899)}}).
- Before Firefox 50, [`requestPointerLock()`](/en-US/docs/Web/API/Element/requestPointerLock) asked for permission using a doorhanger, and pointer lock would not be enabled until the user granted permission. From Firefox 50, pointer lock is like the [fullscreen API](/es/docs/Web/API/Fullscreen_API): it's granted immediately, but a notification is displayed explaining to the user how to exit ({{bug(1273351)}}).

### IndexedDB

- Ahora se envía un evento {{event("close")}} al objeto {{domxref("IDBDatabase")}} cuando la base de datos respectiva es cerrada de forma inesperada ({{bug(1151017)}}).

### Service Workers

- The {{domxref("WindowClient.navigate()")}} method has been implemented. This method lets you open a specified URL into a client window which is being controlled by the service worker ({{bug(1218148)}}).

### WebGL

- The {{domxref("EXT_shader_texture_lod")}} WebGL extension has been implemented ({{bug(1111689)}}).
- The texImage methods have been updated for [WebGL 2](/es/docs/Web/API/WebGL2RenderingContext) to implement PBOs (`PIXEL_UNPACK_BUFFER`) ({{bug(1280499)}}).

### WebRTC

- Adding a track to a {{domxref("MediaStream")}} now generates the {{event("addtrack")}} event as described in the specification. The event is of type {{domxref("MediaStreamTrackEvent")}} and is fired on the stream to which the track was added. You can use either {{domxref("EventTarget.addEventListener", "MediaStream.addEventListener('addtrack', ...)")}} or the {{domxref("MediaStream.onaddtrack")}} property to handle `"addtrack"` events.
- The {{domxref("MediaStreamTrack")}} interface now supports the {{event("ended")}} event and the {{domxref("MediaStreamTrack.onended")}} event handler.
- Firefox now supports the {{domxref("MediaStreamTrack.readyState")}} property, which indicates whether the track is live or permanently ended.
- The {{domxref("MediaStreamTrack")}} methods {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} and {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} have been implemented; these let you get the most recently applied set of customized property constraints and the actual values of all of the track's constrainable properties, respectively. The accompanying data types have been documented as well.
- The {{domxref("RTCDataChannel.stream")}} property has been removed. This was replaced with {{domxref("RTCDataChannel.id")}} in [Firefox 24](/es/docs/Mozilla/Firefox/Releases/24), but was supported for backward compatibility. Please be sure to update your code to use the `id` property if you haven't done so yet.

### Web Audio API

- The {{domxref("PannerNode")}} interface now supports the 3D Cartesian space properties for the position ({{domxref("PannerNode.positionX")}}, {{domxref("PannerNode.positionY")}}, and {{domxref("PannerNode.positionZ")}}) and directionality ({{domxref("PannerNode.orientationX")}}, {{domxref("PannerNode.orientationY")}}, {{domxref("PannerNode.orientationZ")}}) of an audio source.
- The interface {{domxref("IIRFilterNode")}}, which implements a general {{interwiki("wikipedia", "infinite impulse response")}} (IIR) filter, has been implemented.
- Throttling in background tabs of timers created by {{domxref("WindowTimers.setInterval", "Window.setInterval()")}} and {{domxref("WindowTimers.setTimeout", "Window.setTimeout()")}} no longer occurs if a [Web Audio API](/es/docs/Web/API/Web_Audio_API) {{domxref("AudioContext")}} is actively playing sound. This should help prevent issues with timing-sensitive audio playback (such as music players generating individual notes using timers) in the background ({{bug(1181073)}}).

### Audio/Video

- The `AlignSetting` enum (representing possible values for {{domxref("VTTCue.align")}}) incorrectly previously included the value `"middle"` instead of `"center"`. This has been corrected ({{bug(1276130)}}).
- The non-standard and experimental method {{domxref("HTMLMediaElement.seekToNextFrame()")}} now seeks to the next frame in the media asynchronously, rather than synchronously, and returns a {{jsxref("Promise")}} which resolves once the seek is complete.
- The implementation of {{domxref("HTMLTrackElement")}} has been corrected to allow {{HTMLElement("track")}} elements to load resources even if not in a document ({{bug(871747)}}).

### API de batería

- The {{domxref("navigator.battery")}} property, which has been deprecated since Firefox 43, is now obsolete and has been removed. Use the {{domxref("navigator.getBattery()")}} method instead to get a battery {{jsxref("Promise")}}, which will resolve when the {{domxref("BatteryManager")}} is available for use; the {{domxref("BatteryManager")}} is passed into the fulfillment handler for the promise ({{bug(12593355)}}).

### Archivos y directorios

- A subset of the [File and Directory Entries API](/es/docs/Web/API/File_and_Directory_Entries_API) has been implemented, to improve compatibility with sites that were previously only compatible with Google Chrome ({{bug(1265767)}}).

  - The asynchronous API interfaces have been implemented, with the caveat that only reading of files is supported; for example, the {{domxref("FileSystemFileEntry.createWriter()")}} method is a no-op.
  - These interfaces have been implemented:

    - {{domxref("FileSystem")}}
    - {{domxref("FileSystemEntry")}} (properties only; the methods have not been implemented)
    - {{domxref("FileSystemFileEntry")}} (except for {{domxref("FileSystemFileEntry.createWriter", "createWriter()")}})
    - {{domxref("FileSystemDirectoryEntry")}} (except for {{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}})
    - {{domxref("FileSystemDirectoryReader")}}

  - {{domxref("HTMLInputElement.webkitdirectory")}} as well as the {{HTMLattrxref("webkitdirectory", "input")}} attribute of the {{HTMLElement("input")}} element have been implemented; this lets you configure a file input to accept directories instead of files ({{bug(1258489)}}).
  - {{domxref("HTMLInputElement.webkitEntries")}} has been implemented; this returns an array of {{domxref("FileSystemEntry")}}-based objects representing the selected items.
  - {{domxref("File.webkitRelativePath")}} has been implemented; this contains the path of the file relative to the root of the containing {{domxref("FileSystemDirectoryEntry")}} that was among the items in the list returned by {{domxref("HTMLInputElement.webkitGetEntries()")}}.
  - See [File and Directory Entries API support in Firefox](/es/docs/Web/API/File_and_Directory_Entries_API/Firefox_support) for details about what we do and do not support in this API.
  - These APIs are now enabled by default; some were previously available but only behind a preference ({{bug(1288683)}}).

- We've implemented {{domxref("DataTransferItem.webkitGetAsEntry()")}} as part of the [File and Directory Entries API](/es/docs/Web/API/File_and_Directory_Entries_API); this lets you obtain a {{domxref("FileSystemEntry")}} representing a dropped file ({{bug(1289255)}}). This is enabled by default.
- The `HTMLInputElement.directory` property, part of the [Directory Upload API](https://wicg.github.io/directory-upload/proposal.html) proposal, has been renamed to `allowdirs` ({{bug(1288681)}}). This property is hidden behind a preference.

## Versiones anteriores

{{Firefox_for_developers(49)}}
