---
title: Firefox 3.5 para desarrolladores
slug: Mozilla/Firefox/Releases/3.5
---

Firefox 3.5 implementa nuevas funcionalidades, además de agregar y mejorar el funcionamiento de una amplia variedad de estándares web. Este artículo ofrece una extensa lista con enlaces a artículos que explican estas grandes mejoras.

## Nuevas funcionalidades para desarrolladores en Firefox 3.5

### Para desarrolladores de sitios y aplicaciones web

#### Funciones de HTML 5

- [Usar audio y video en Firefox](/Es/Usar_audio_y_v%C3%ADdeo_en_Firefox)
  - : Firefox 3.5 implementa los elementos [`audio`](/es/docs/Web/HTML/Reference/Elements/audio) y [`video`](/es/docs/Web/HTML/Reference/Elements/video) de HTML 5.
- [Recursos sin conexión en Firefox](/es/docs/Offline_resources_in_Firefox)
  - : Firefox 3.5 implementa de forma completa la especificación para recursos sin conexión de HTML 5.
- [Arrastrar y soltar (Drag and drop](/es/docs/Web/API/HTML_Drag_and_Drop_API))
  - : La API para arrastrar y soltar de HTML 5 permite que el usuario pueda arrastrar y soltar objetos entre sitios web. También permite una API más simple para el uso por parte de las extensiones o aplicaciones basadas en la plataforma Mozilla.

#### Nuevas características de CSS implementadas

- [Tipografías descargables](/es/docs/Web/CSS/@font-face)
  - : La nueva regla {{cssxref("@font-face")}} permite a las páginas web disponer de tipografías descargables, para que los sitios web puedan ser visualizados como el autor lo pretende.
- [Pedidos de CSS según el medio](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Firefox 3.5 implementa esta característica que permite al autor del sitio web tener más control sobre el archivo CSS que cada dispositivo va a recibir según las características del mismo.
- {{cssxref(":before")}} y {{cssxref(":after")}} actualizados a CSS 2.1
  - : Los pseudo-elementos `:before` y `:after` han sido actualizados para implementar por completo las características de CSS 2.1, añadiendo la posibilidad de usar `position`, `float`, `list-style-*` y algunas propiedades de `display`.
- [`opacity`](/es/docs/Web/CSS/opacity)
  - : La extensión al CSS `-moz-opacity` fue eliminada para implementar la propiedad estandar `opacity`.
- [`text-shadow`](/es/docs/Web/CSS/text-shadow)
  - : La propiedad `text-shadow`, que permite especificar efectos de sombra para textos y decoraciones del texto, está implementada.
- [`word-wrap`](/es/docs/Web/CSS/overflow-wrap)
  - : Esta propiedad permite especificar cuando las líneas deben o no ser cortadas entre palabras para prevenir el overflow cuando una línea que no puede ser cortada es demasiado larga para entrar en una sola línea.
- [`-moz-box-shadow`](/es/docs/Web/CSS/box-shadow)

  [`-moz-border-image`](/es/docs/Web/CSS/border-image)

  [`-moz-column-rule`](/es/docs/Web/CSS/column-rule)

  [`-moz-column-rule-width`](/es/docs/Web/CSS/column-rule-width)

  [`-moz-column-rule-style`](/es/docs/Web/CSS/column-rule-style)

  [`-moz-column-rule-color`](/es/docs/Web/CSS/column-rule-color)
  - : Firefox 3.5 añade la posibilidad de usar estas extensiones al CSS de Mozilla.

- [The `-moz-nativehyperlinktext` color value](/es/docs/Web/CSS/color#mozilla_specific_colors)
  - : Este nuevo valor del color representa el predefinido por el sistema del usuario para los hipervínculos.
- Las nuevas propiedades `-moz-window-shadow` y `-moz-system-metric(mac-graphite-theme)`
  - : Estas nuevas propiedades de CSS fueron añadidas para facilitar la creación de temas.
- Nuevos valores para [`-moz-appearance`](/es/docs/Web/CSS/appearance)
  - : Los valores `-moz-win-glass` y `-moz-mac-unified-toolbar` se agregaron a `-moz-appearance`.
- [Usar transformaciones CSS](/es/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Firefox 3.5 implementa las transformaciones CSS. Mirá [`-moz-transform`](/es/docs/Web/CSS/transform) y [`-moz-transform-origin`](/es/docs/Web/CSS/transform-origin) para saber más detalles.
- [`:nth-child`](/es/docs/Web/CSS/:nth-child)

  [`:nth-last-child`](/es/docs/Web/CSS/:nth-last-child)

  [`:nth-of-type`](/es/docs/Web/CSS/:nth-of-type)

  [`:nth-last-of-type`](/es/docs/Web/CSS/:nth-last-of-type)

  [`:first-of-type`](/es/docs/Web/CSS/:first-of-type)

  [`:last-of-type`](/es/docs/Web/CSS/:nth-last-of-type)

  [`:only-of-type`](/es/docs/Web/CSS/:only-of-type)
  - : Estos selectores pueden ser usados en Firefox 3.5.

#### Nuevas funcionalidades del DOM

- [localStorage](/es/docs/Web/API/Web_Storage_API#localstorage)
  - : Firefox 3.5 implementa el uso de la propiedad `localStorage` del Web Storage, que permite que las aplicaciones web guarden datos en la computadora del cliente.
- [Usar DOM workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Firefox 3.5 implementa los trabajadores (workers) del DOM lo que permite el multi-threading en las aplicaciones web.
- [Usar geolocalización](/es/docs/Web/API/Geolocation_API)
  - : Firefox 3.5 implementa la API de geolocalización, que permite que las aplicaciones web obtengan información sobre la ubicación actual del usuario si unu proveedor de ese servicio está instalado y habilitado.
- [Usar JSON en Firefox](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)
  - : Posibilidad de usar [JSON](/es/docs/Glossary/JSON) en el DOM.
- [Localizar elementos del DOM con selectores](/es/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : El API de selectores permite pedirle a un documento que localice los elementos que coincidan con una regla seleccionada.
- [El objeto `NodeIterator`](/es/docs/Web/API/NodeIterator)
  - : El objeto `NodeIterator` permite recorrer la lista de nodos en un árbol del DOM.
- [El evento MozAfterPaint](/es/docs/Gecko-Specific_DOM_Events#MozAfterPaint)
  - : Este nuevo evento del DOM es lanzado después de actualizar partes de una ventana.
- [El evento MozMousePixelScroll](/es/docs/Gecko-Specific_DOM_Events#MozMousePixelScroll)
  - : Este nuevo evento del DOM permite detectar el desplazamiento con la rueda del ratón/mouse en lugar de los eventos basados en la línea de desplazamiento.

#### Nuevas funcionalidades JavaScript

- [Nuevo en JavaScript 1.8.1](/es/docs/New_in_JavaScript_1.8.1)
  - : Una introducción a todos los cambios de JavaScript 1.8.1.
- [`Object.getPrototypeOf()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Este nuevo método retorna el prototipo de un objeto especificado.
- [Uso de JSON nativo](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)
  - : Firefox 3.5 tiene soporte para [JSON](/es/docs/Glossary/JSON) nativo.
- Nuevos métodos trim en el objeto String
  - : El objeto [`String`](/es/docs/Web/JavaScript/Reference/Global_Objects/String) tiene ahora los métodos [`trim()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/trim), [`trimLeft()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart), y [`trimRight()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) .

#### Networking

- [Controles de acceso cross-site para HTTP](/es/docs/Web/HTTP/Guides/CORS)
  - : En Firefox 3.5, es ahora posible en las peticiones HTTP, incluyendo aquellas hechas por [`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest), trabajar entre dominios si el servidor lo permite.
- [Eventos de progreso para](/es/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)[`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
  - : Ahora se ofrecen eventos de progreso para que las extensiones puedan monitorizar el progreso de las peticiones.
- Soporte `XMLHttpRequest` síncrono mejorado
  - : [DOM Timeout](https://bugzilla.mozilla.org/show_bug.cgi?id=340345) y [Input Events](https://bugzilla.mozilla.org/show_bug.cgi?id=333198) son ahora soportados durante un `XMLHttpRequest` síncrono.
- [Control de prefetch de DNS](/es/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)
  - : Firefox 3.5 ofrece prefetch de DNS, por el que resuelve nombres de dominio con anticipación para links incluidos en la página actual, para ahorrar tiempo cuando los enlaces son realmente clickados. Este artículo describe cómo puedes optimizar tu sitio web para desactivar el prefetch, o ajustar cómo opera el prefetch.

#### Nuevas funcionalidades Canvas

- [API de texto HTML 5 para elementos `canvas`](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Los elementos Canvas ahora soportan la API de texto HTML 5.
- [Efectos de sombra en un `canvas`](/es/docs/Canvas_tutorial/Applying_styles_and_colors#Shadows)
  - : Los efectos de sombra de Canvas son ahora soportados.
- [`createImageData()`](/es/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object)
  - : El método canvas `createImageData()` es ahora soportado, permitiendo al código crear específicamente un objeto `ImageData` en lugar de necesitar que sea hecho automáticamente. Esto puede mejorar el rendimiento de otros métodos `ImageData` evitando que deban crear el objeto.
- Atributo `moz-opaque`
  - : Añadido el atributo DOM `moz-opaque`, que permite al canvas saber si la translucencia será un factor. Si el canvas sabe que no hay translucencia, el rendimiento de pintado puede ser optimizado.

#### Nuevas funcionalidades SVG

- [Aplicar efectos SVG al contenido HTML](/es/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : Ahora puedes aplicar efectos SVG a contenido HTML y XHTML; este artículo describe cómo.

#### Otras nuevas funcionalidades

- [Corrección de color ICC en Firefox](/es/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox)
  - : Firefox 3.5 ahora soporta corrección de color ICC para imágenes etiquetadas.
- El atributo `defer` es ahora soportado en elementos [`script`](/es/docs/Web/HTML/Reference/Elements/script)
  - : Este atributo indica al navegador que _puede_ escoger continuar parseando y renderizando la página sin esperar a que el script termine de ejecutarse.

### Otras mejoras

- La propiedad de los nodosde texto [`wholeText`](/es/docs/Web/API/Text/wholeText) y el método [`replaceWholeText()`](/es/docs/Web/API/Text) han sido implementados.
- La propiedad [`element.children`](/es/docs/Web/API/Element/children) ha sido añadida. Retorna una _colección_ de elementos hijo del elemento dado.
- La propiedad {{domxref("element.contentEditable")}} es ahora soportada, para soportar elementos editables.
- La API Element Traversal es ahora soportada por el objeto DOM [Element](/es/docs/Web/API/Element).
- Los nodos de documento HTML pueden ser ahora clonados usando [`cloneNode()`](/es/docs/Web/API/Node/cloneNode).
- El método no estándar `getBoxObjectFor()` ha sido eliminado. Deberías usar [`getBoundingClientRect()`](/es/docs/Web/API/Element/getBoundingClientRect) en su lugar.
- Los eventos DOM ya despachados pueden ser ahora re-despachados. Esto hace que Firefox 3.5 pase el test 30 de Acid 3.
- Se han hecho mejoras en el manejo de rango DOM 2.
- En ámbito no-chrome, los objetos capturados en excepciones son ahora el objeto realmente lanzado en lugar de un wrapper [XPConnect](/es/docs/XPConnect) que contiene el objeto lanzado.
- Las referencias ID de SVG ahora son vivas.
- Los filtros SVG ahora funcionan para `foreignObject`.
- El método `GetSVGDocument()` ha sido añadido a los elementos [`object`](/es/docs/Web/HTML/Reference/Elements/object) y [`iframe`](/es/docs/Web/HTML/Reference/Elements/iframe) por compatibilidad.
- El setting implícito de propiedades en inicializadores de objeto y array ya no ejecuta los setters JavaScript. Ver el post [Object and array initializers should not invoke setters when evaluated](/web-tech/2009/04/29/object-and-array-initializers-should-not-invoke-setters-when-evaluated) para más detalles.
- La variable `gDownloadLastDir.path` ha sido renombrada a `gDownloadLastDir.file` porque se refiere a un `nsIFile`, no a una ruta.
- La variable `gDownloadLastDirPath` ha sido renombrada a `gDownloadLastDirFile` porque se refiere a un `nsIFile`, not a una ruta.
- A partir de Firefox 3.5, no puedes usar `data:` bindings en los chrome packages que tienen automatización `XPCNativeWrapper`.

### For XUL and add-on developers

If you're an extension developer, you should start by reading [Updating extensions for Firefox 3.5](/es/docs/Mozilla/Firefox/Releases/3.5/Updating_extensions), which offers a helpful overview of what changes may affect your extension.

#### New components and functionality

- [Supporting private browsing mode](/es/docs/Supporting_private_browsing_mode)
  - : Firefox 3.5 offers Private Browsing mode, which doesn't record the user's activities. Extensions may support private browsing following the guidelines offered by this article.
- [Security changes in Firefox 3.5](/es/docs/Mozilla/Firefox/Releases/3.5/Security_changes)
  - : This article covers security-related changes in Firefox 3.5.
- [Theme changes in Firefox 3.5](/es/docs/Theme_changes_in_Firefox_3.5)
  - : This article covers theme-related changes in Firefox 3.5.
- [Monitoring WiFi access points](/es/docs/Monitoring_WiFi_access_points)
  - : Code with UniversalXPConnect privileges can now monitor the list of available access points, getting information on their SSIDs, MAC addresses, and signal strength. This can be used in tandem with Geolocation to offer WiFi-based location service.

#### Notable changes and improvements

- The XUL [`textbox`](/en-US/XUL/textbox) widget now offers a [`search`](/en-US/XUL/Attribute/textbox.type) type, for use as search fields.
- In order to support dragging and dropping tabs between windows, the [`browser`](/es/docs/XUL/browser) widget now has a [`swapDocShells()`](/es/docs/XUL/Method/SwapDocShells) method.
- Added the [`level`](/es/docs/XUL/Attribute/Panel.level) attribute to the [`panel`](/es/docs/XUL/panel) element; this specifies whether panels appear on top of other applications, or just on top of the window the panel is contained within.
- XUL elements now support the `clientXXX` and `scrollXXX` properties.
- [`keyset`](/es/docs/XUL/keyset)s now include a `disabled` attribute.
- In addition, `keyset`s can now be removed using the node's [`removeChild()`](/es/docs/Web/API/Node/removeChild) method.
- [`mozIStorageStatement`](/en-US/mozIStorageStatement) had the `initialize()` method removed; consumers should use the [`createStatement()`](/en/mozIStorageConnection#createStatement%28%29) method instead to get a new statement object.
- The [Storage](/es/docs/Storage) API now offers support for asynchronous requests.
- The [`nsICookie2`](/es/docs/nsICookie2) interface now exposes the time at which cookies were created in its new `creationTime` attribute.
- Added a flag to [`nsIProtocolHandler`](/en-US/nsIProtocolHandler) (`URI_IS_LOCAL_RESOURCE`) that is checked during chrome registration to make sure a protocol is allowed to be registered.
- Firefox now looks for plugins in `/usr/lib/mozilla/plugins` on Linux, as well as the previously supported locations.
- The plugin API has been updated to include support for private browsing mode; you may now use [`NPN_GetValue()`](/es/docs/NPN_GetValue) to query the state of private browsing mode using the variable `NPNVprivateModeBool`.

## New features for end users

### User experience

- Location aware browsing
  - : If you choose, you may allow Firefox 3.5 to share information about your current location with web sites. Firefox 3.5 can use information about the network you're connected to to share your location. Of course, it asks for your permission before doing so, to ensure your privacy.
- Open audio and video support
  - : Firefox 3.5 supports embedded video and audio using the open Ogg format, as well as WAV for audio. No plugins, no confusing error messages about needing to install something or other that turns out not to be available on your platform anyway.
- Local data storage
  - : Web applications can now use Web Storage's local storage capabilities to store data on your computer. This is great for anything from site preferences to more complex data.

### Security and privacy

- Private Browsing
  - : Need to use someone else's computer? Switch on Private Browsing mode and nothing will be recorded about your session, including cookies, history, and any other potentially private information.
- Better privacy controls
  - : The Privacy preference pane has been completely redesigned to offer users more control over their private information. Users can choose to retain or discard anything including history information, cookies, downloads, and form field information. In addition, users can specify whether or not to include history and/or bookmarks in the location bar's automated suggestions, so you can keep private web addresses from popping up unexpectedly while typing in the location bar.

### Performance

- Faster JavaScript performance
  - : JavaScript, the "J" in "AJAX," is sped up dramatically in Firefox 3.5 with the new TraceMonkey JavaScript engine. Web applications are much faster than in Firefox 3.
- Faster page rendering
  - : Web content draws faster in Firefox 3.5, thanks to technologies such as "speculative parsing." Your users don't need to know what it means, other than "it makes things draw faster."

## See also

- [Firefox 3 for developers](/es/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/es/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/es/docs/Mozilla/Firefox/Releases/1.5)
