---
title: Firefox 9 for developers
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 75d6ce4e2e752b8577012aea96abc766659ed3e2
---

{{FirefoxSidebar}}

Firefox 9 se lanzó para Windows el 20 de diciembre de 2011. El 21 de diciembre de 2011 se lanzó la versión 9.0.1 para Mac y Linux, que corrigió un error de bloqueo descubierto en el último minuto.

## Cambios para desarrolladores web

### HTML

- El atributo `value` de {{ HTMLElement("li") }} ahora puede ser negativo. Los valores negativos anteriores se convertian a 0.
- Ahora puede [especificar la hora de inicio y finalización de los medios](/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#specifying_playback_range) en la URI de los medios cuando usa los elementos {{ HTMLElement("audio") }} y {{ HTMLElement("video") }}.
- Los elementos {{ HTMLElement("input") }} y {{ HTMLElement("textarea") }} [ahora respetan el valor del atributo `lang`](/es/docs/Web/HTML/Global_attributes/spellcheck#controlling_the_spellchecker_language) al invocar el corrector ortográfico.
- Firefox en Android ahora permite a los usuarios tomar fotos con la cámara de su teléfono sin salir del navegador cuando se usa el elemento {{ HTMLElement("input") }} con `type="file"` y `accept="image/*"` .
- Las imágenes PNG ICO de estilo Windows Vista ahora son compatibles.
- Dibujar imagenes que usan el atributo [`crossorigin`](/es/docs/Web/HTML/Attributes/crossorigin) para solicitar acceso CORS ya no [contaminan el lienzo](/es/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f) cuando se otorga CORS.
- El valor del atributo [`rowspan`](/es/docs/Web/HTML/Element/td#rowspan) ahora puede ser tan grande como 65 534, en lugar de 8190.

### CSS

- La propiedad {{ cssxref("font-stretch") }} ahora es compatible.
- La propiedad {{ cssxref("columns") }} ahora es compatible, con el prefijo `-moz`. Esta es una forma abreviada de las siguientes propiedades: {{ cssxref("column-width") }} y {{ cssxref("column-count") }}.
- Cuando una hoja de estilo incluida usando el elemento {{ HTMLElement("link") }} ha sido completamente cargada y analizada (pero aún no aplicada al documento), un [evento `load`](/es/docs/Web/HTML/Element/link#stylesheet_load_events) ahora se activa. Además, si se produce un error al procesar una hoja de estilo, se activa un evento de `error`.
- Ahora puede especificar configuraciones de desbordamiento para los bordes izquierdo y derecho del contenido usando una nueva sintaxis de dos valores para {{ cssxref("text-overflow") }}.

### JavaScript

_Ningún cambio._

### DOM

- [Uso del modo de pantalla completa](/es/docs/Web/API/Fullscreen_API)
  - : La nueva API de pantalla completa proporciona una forma de presentar contenido utilizando toda la pantalla, sin interfaz de navegador. Esto es genial para video y juegos. Esta API es actualmente experimental y prefijada.

<!---->

- El método {{ domxref("Node.contains()") }} ahora está implementado; esto le permite determinar si un nodo dado es descendiente de otro nodo.
- Se implementó el atributo {{ domxref("Node.parentElement") }}; esto devuelve el padre {{ domxref("Element") }} de un nodo DOM, o `null` si el padre no es un elemento.
- Los [eventos de composición](/es/docs/Web/API/CompositionEvent) de DOM Nivel 3 ahora son compatibles.
- Se implementó el atributo {{ domxref("Document.scripts") }}; esto devuelve un {{ domxref("HTMLCollection") }} de todos los elementos {{ HTMLElement("script") }} del documento.
- Se implementó el método {{ domxref("Document.queryCommandSupported()") }}.
- El conjunto de eventos que se pueden escuchar en los elementos {{ HTMLElement("body") }} se ha revisado para que coincida con el último borrador de la especificación HTML5. La lista de eventos en la [referencia de eventos DOM](/es/docs/Web/Events) refleja qué eventos se pueden detectar en {{ HTMLElement("body") }}.
- El evento `readystatechange` ahora solo se activa en {{ domxref("Document") }}, según lo previsto.
- Los manejadores de eventos ahora se implementan como interfaces IDL estándar. En la mayoría de los casos, esto no afectará el contenido, pero hay excepciones.
- Se ha agregado un nuevo tipo de respuesta, "`moz-json`", a `XMLHttpRequest`, lo que permite que `XMLHttpRequest` analice automáticamente cadenas [JSON](/es/docs/Glossary/JSON); cuando solicita este tipo, se analiza una cadena JSON devuelta, de modo que el valor de la propiedad `response` es el objeto JavaScript resultante.
- [Eventos de "progreso" `XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#monitoring_progress) ahora se envían de manera confiable para cada fragmento de datos recibido; en el pasado, era posible que la última parte de los datos recibidos no activará un evento de "progreso". Ahora puede realizar un seguimiento del progreso siguiendo solo los eventos de "progreso", en lugar de tener que monitorear también los eventos de "carga" para detectar la recepción de la última porción de datos.
- En el pasado, llamar a [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener) con un detector `null` generaba una excepción. Ahora devuelve sin error y sin efecto.
- La nueva propiedad {{ domxref("navigator.doNotTrack") }} permite que su contenido determine fácilmente si el usuario ha habilitado o no su preferencia de no rastrear; si este valor es "sí", no debe rastrear al usuario.
- Los objetos {{ domxref("Range") }} y {{ domxref("Selection") }} ahora se comportan según sus especificaciones cuando {{ domxref("Text.splitText()", "splitText()") }} y {{domxref("Node.normalize", "normalize()") }} son llamados.
- El valor de {{ domxref("Node.ownerDocument") }} para los nodos doctype ahora es el documento en el que se llamó a [`createDocumentType()`](/es/docs/Web/API/DOMImplementation/createDocumentType) para crear el nodo, en lugar de `null`.
- Se ha eliminado `window.navigator.taintEnabled`; no ha sido compatible en muchos años.

### Workers

- Los _workers_ implementados en las URL de blob se rompieron en Firefox 8 y volvieron a funcionar a partir de Firefox 9.

### WebGL

- Los atributos de contexto [WebGL](/es/docs/Web/API/WebGL_API) `drawingBufferWidth` y `drawingBufferHeight` ahora son compatibles.

### MathML

- Se eliminó el valor `restyle` no estándar para el atributo `actiontype` en los elementos {{ MathMLElement("maction") }}.
- Si bien aún no es compatible, el uso del elemento `mlabeledtr` ya no interrumpe el renderizado por completo. Consulte el [error 689641, en Firefox](https://bugzil.la/689641) para ver el progreso en el soporte real de este elemento.

### Redes

- Ahora puede enviar el contenido de [matrices tipadas en JavaScript](/es/docs/Web/JavaScript/Guide/Typed_arrays) (es decir, el contenido de un [`ArrayBuffer`](/es/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)) [usando XMLHttpRequest](/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- Las conexiones WebSocket ahora permiten que no se reciban caracteres en marcos de datos UTF-8 válidos, en lugar de fallar.
- La cabecera HTTP `Accept` para solicitudes XSLT se ha cambiado a "\*/\*" para simplificar. Dado que recuperar XSLT siempre ha vuelto a "\*/\*", tenía sentido simplificar la solicitud inicial.
- Los intentos por parte de un servidor de usar los códigos de respuesta `301 Moved Permanently` (Movido permanentemente) o `307 Temporary Redirect` (Redirección temporal) para redirigir al usuario a un URI `javascript:` ahora [resultan en un error de "mala conexión"](/es/docs/Web/HTTP#more_on_redirection_responses) en lugar de redirigir. Esto evita ciertos tipos de ataques de secuencias de comandos entre sitios.
- El contenido entregado con un {{ HTTPHeader("Content-Disposition") }} se trataba previamente como si el {{ HTTPHeader("Content-Disposition") }} fuera un "archivo adjunto"; esto no siempre funcionó como se esperaba. Ahora se manejan como si {{ HTTPHeader("Content-Disposition") }} estuviera "en línea".
- El tamaño máximo predeterminado de un elemento en la memoria caché del disco se ha aumentado a 50 MB; anteriormente, solo se almacenaban en caché los elementos de hasta 5 MB.

### Herramientas de desarrollador

- La consola web ahora admite [sustituciones de cadenas](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) básicas en sus métodos de registro.
- Ahora puede [crear bloques de salida anidados visualmente](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) en la consola web, para ayudar a que sea más fácil de leer.

## Cambios para Mozilla y desarrolladores de complementos

Consulte [Actualización de complementos para Firefox 9](/es/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_9) para obtener una descripción general de los cambios que puede necesitar realizar para que sus complementos funcionen en Firefox 9.

### XUL

- El elemento [`<xul:tab>`](/es/docs/Mozilla/Tech/XUL/tab) ahora tiene un elemento [`pending`](/es/docs/Mozilla/Tech/XUL/Attribute/pending) atributo, cuyo valor es `true`, cuando la pestaña está en proceso de ser restaurada por el servicio de almacenamiento de sesiones. Esto se puede usar para diseñar la pestaña en los temas. El atributo no está presente en las pestañas que no están pendientes.
- El elemento [`<xul:tab>`](/es/docs/Mozilla/Tech/XUL/tab) ahora tiene un elemento [`unread`](/es/docs/Mozilla/Tech/XUL/Attribute/unread) atributo, cuyo valor es `true`, cuando la pestaña ha cambiado desde la última vez que fue la pestaña activa o si no se ha seleccionado desde que comenzó la sesión actual. El atributo no está presente en las pestañas que no están sin leer.
- Ahora puede usar un [`<xul:panel>`](/es/docs/Mozilla/Tech/XUL/panel) como una imagen de arrastre para las operaciones de arrastrar y soltar del DOM. Esto le permite usar la API estándar de arrastrar y soltar para [arrastrar y soltar contenido XUL](/es/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images).
- El método [`appendNotification`](/es/docs/Mozilla/Tech/XUL/Method/appendNotification) del elemento [`<xul:notificationbox>`](/es/docs/Mozilla/Tech/XUL/notificationbox) ahora permite especificar una devolución de llamada que se llama para eventos interesantes relacionados con el cuadro de notificación. Actualmente, el único evento es "eliminado", que le indica que el cuadro se eliminó de su ventana.

### Cambios en el módulo de código JavaScript

- [`FileUtils.jsm`](/es/docs/JavaScript_code_modules/FileUtils.jsm) ahora tiene un constructor `File` que devuelve un objeto `nsIFile` que representa un archivo especificado por su nombre de ruta.

### Cambios de servicios

- El servicio de preferencias de contenido ahora [maneja la navegación en modo privado](/es/docs/Using_content_preferences#private-browsing) (vea [error 679784, en Firefox](https://bugzil.la/679784)).

### NSPR

- NSPR ahora tiene un módulo "agregar", que le permite agregar nuevos datos al final de un registro existente.

### Cambios de interfaz

#### Interfaces eliminadas

- `nsIGlobalHistory3` se eliminó durante la simplificación del código de Places y DocShell.

#### Varios cambios en la interfaz

- La interfaz `nsISound` tiene una nueva constante, `EVENT_EDITOR_MAX_LEN`. Permite reproducir el sonido del sistema cuando se escriben más caracteres que el máximo permitido en un campo de texto. Actualmente, esto solo se usa en Windows.
- La interfaz `nsIScriptError2` tiene nuevas propiedades `timeStamp` e `innerWindowID`; además, el método `initWithWindowID()` ahora toma una ID de ventana interna en lugar de una ID de ventana externa.
- Se agregó el atributo `nsIBidiKeyboard.haveBidiKeyboards`; esto le permite determinar si el sistema tiene al menos un teclado instalado para cada dirección: de izquierda a derecha y de derecha a izquierda.
- El nuevo atributo `nsIEditor.isSelectionEditable` le permite determinar si el ancla de selección actual es editable. Esto ayuda a respaldar los casos en los que solo se pueden editar partes del documento, al permitirle ver si la selección actual está en una sección editable.
- Los métodos `nsIBrowserHistory.registerOpenPage()` y `nsIBrowserHistory.unregisterOpenPage()` se han eliminado como parte de una revisión de rendimiento en el sistema de Lugares. Puede usar los métodos correspondientes en `mozIPlacesAutoComplete` en su lugar.
- Se agregó el método `nsIDOMWindowUtils.wrapDOMFile()`; esto devuelve un objeto DOM {{ domxref("File") }} para un `nsIFile` dado.
- Se agregó el método `nsIChromeFrameMessageManager.removeDelayedFrameScript()` para admitir la eliminación de código de carga retrasada. Los complementos con arranque deben usar esto, al apagar, para eliminar cualquier código que haya cargado usando `nsIChromeFrameMessageManager.loadFrameScript()` con el indicador de carga retrasada establecido. Esto está expuesto a complementos como `browser.messageManager.removeDelayedFrameScript()`.
- La interfaz `nsIAppStartup` tiene un nuevo atributo `interrupted`, que le permite saber si el proceso de inicio se interrumpió en algún momento mediante un aviso interactivo. Esto puede ser útil, por ejemplo, cuando se cronometran los inicios durante la evaluación del rendimiento, para poder eliminar los números de las sesiones que se interrumpieron.
- La interfaz `nsIEditorSpellCheck` se ha revisado para admitir la selección por sitio de diccionarios del corrector ortográfico.

### Analizador IDL

El analizador IDL ya no incluye soporte para la noción nunca completamente implementada de punteros únicos.

### Cambios en el sistema de compilación

- Se eliminó la opción `--enable-application=standalone` para construir un XPConnect independiente; no ha funcionado desde 2007 de todos modos.
- Se eliminó la compatibilidad con la creación independiente de Necko y Transformiix XSLT; ya no puede usar `--enable-application=network` o `--enable-application=content/xslt`.
- El sistema de compilación ahora busca `.mozconfig` en `$topsrcdir/.mozconfig` o `$topsrcdir/mozconfig`, y en ningún otro lugar, a menos que anule la ruta `.mozconfig` usando la variable de entorno `MOZCONFIG`.
- Se ha sustituido la utilidad `xpidl` en el SDK por [pyxpidl](/es/docs/XPIDL/pyxpidl).

### Otros cambios

- El corrector ortográfico ya no tiene un límite arbitrario de longitud de palabra de 130 caracteres en la longitud de las palabras que intentará revisar. Este límite se estableció anteriormente para evitar bloqueos que ocurrían en el corrector ortográfico, pero los errores subyacentes se han solucionado desde entonces.
- Ahora puede registrar componentes para agregar funciones al objeto {{ domxref("window.navigator") }} mediante la categoría "JavaScript-navigator-property". Vea [Agregar APIs al objeto navegador](/es/docs/Mozilla/Developer_guide/Adding_APIs_to_the_navigator_object) para detalles y ejemplos.

## Véase también

{{Firefox_for_developers('8')}}
