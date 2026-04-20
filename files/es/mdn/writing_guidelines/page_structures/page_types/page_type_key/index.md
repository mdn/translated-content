---
title: La clave front matter page-type
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: 9851fc885f1bbc916f529378b506471c150fae98
---

La clave front matter `page-type` describe el tipo de una página de MDN.
Esto permite que las herramientas de contenido de MDN automatice mejor la verificación de contenido y la organización de la barra lateral.

Como cualquier otra clave front matter, la clave `page-type` se especifica en el YAML al inicio de "index.md":

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
sidebar: http
---
```

Cada área principal del sitio — JavaScript, CSS, etc. — tiene un conjunto de valores `page-type` específicos del dominio, y también hay un conjunto de valores genéricos que pueden aparecer en cualquier área del sitio.

## Tipos de páginas genéricas

Estos tipos de páginas no son específicos de un área tecnológica particular de MDN:

- `guide`: una guía genérica sin estructura específica.
- `landing-page`: una descripción general del tema, introducción de la sección y navegación a áreas clave.
- `listing-page`: una breve descripción de la sección y una lista de subpáginas dentro de esa sección.
- `how-to`: un artículo de procedimiento orientado a objetivos.
- `tutorial`: una descripción general de un artículo orientado al aprendizaje.
- `tutorial-chapter`: una parte de un tutorial de varias partes.

## Tipos de páginas específicos del dominio

Esta sección enumera los tipos de páginas que son específicos de un solo área de MDN.

### Tipos de páginas del área de aprendizaje

Esta sección enumera los valores `page-type` para las páginas bajo [Aprender](/es/docs/Learn_web_development). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de tipo de página genéricos.

- `learn-topic`: una descripción general de un tema, es decir, una colección de módulos como [_CSS_](/es/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`: una descripción general de un módulo, es decir, una colección ordenada de guías, como [_Estructurar contenido con HTML_](/es/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`: una guía que es parte de un módulo, como [_Accesibilidad móvil_](/es/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`: una guía especial con una actividad que permite evaluar la comprensión de un módulo o parte de él, como [_Pon a prueba tus habilidades: Formularios y botones_](/es/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons).
- `learn-faq`: la respuesta a una pregunta específica sobre el desarrollo web, como [_¿Qué es un nombre de dominio?_](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Tipos de páginas de accesibilidad

Esta sección enumera los valores `page-type` para las páginas bajo [Web/Accessibility](/es/docs/Web/Accessibility). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `aria-role`: un [rol](/es/docs/Web/Accessibility/ARIA/Reference/Roles) de ARIA, como [`section`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/section_role).
- `aria-attribute`: un [atributo](/es/docs/Web/Accessibility/ARIA/Reference/Attributes) de ARIA, como [`aria-sort`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort).

### Tipos de páginas CSS

Esta sección enumera los valores `page-type` para las páginas bajo [Web/CSS](/es/docs/Web/CSS). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `css-at-rule`: una [regla-at](/es/docs/Web/CSS/Guides/Syntax/At-rules), como {{cssxref("@media")}}.
- `css-at-rule-descriptor`: un descriptor de regla-at, como [`@counter-style/prefix`](/es/docs/Web/CSS/Reference/At-rules/@counter-style/prefix).
- `css-combinator`: un combinador, como el [combinador de descendientes](/es/docs/Web/CSS/Reference/Selectors/Descendant_combinator).
- `css-function`: una [función](/es/docs/Web/CSS/Reference/Values/Functions), como {{cssxref("max")}}.
- `css-keyword`: una palabra clave, como {{cssxref("inherit")}}.
- `css-media-feature`: una [característica de medios](/es/docs/Web/CSS/Reference/At-rules/@media#media_features), como {{cssxref("@media/hover")}}.
- `css-module`: un módulo, como [Animaciones CSS](/es/docs/Web/CSS/Guides/Animations).
- `css-property`: una propiedad, como {{cssxref("background-color")}}.
- `css-pseudo-class`: una [seudoclase](/es/docs/Web/CSS/Reference/Selectors/Pseudo-classes), como {{cssxref(":enabled")}}.
- `css-pseudo-element`: un [seudoelemento](/es/docs/Web/CSS/Reference/Selectors/Pseudo-elements), como {{cssxref("::before")}}.
- `css-selector`: un [selector básico](/es/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#basic_selectors), como el [selector de clase](/es/docs/Web/CSS/Reference/Selectors/Class_selectors).
- `css-shorthand-property`: una [propiedad abreviada](/es/docs/Web/CSS/Guides/Cascade/Shorthand_properties), como {{cssxref("background")}}.
- `css-type`: un [tipo de dato](/es/docs/Web/CSS/Reference/Values/Data_types), como {{cssxref("&lt;color&gt;")}}.

### Tipos de páginas de glosario

Esta sección enumera los valores `page-type` para las páginas bajo [Glossary](/es/docs/Glossary). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación.

- `glossary-definition`: una página que define un término, como [Curva de Bézier](/es/docs/Glossary/Bezier_curve).
- `glossary-disambiguation`: una página que proporciona enlaces a dos o más páginas de definición para un término ambiguo, como [Node](/es/docs/Glossary/Node).

### Tipos de páginas HTML

Esta sección enumera los valores `page-type` para las páginas bajo [Web/HTML](/es/docs/Web/HTML). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `html-attribute`: un atributo HTML, como [`autocomplete`](/es/docs/Web/HTML/Reference/Attributes/autocomplete).
- `html-attribute-value`: un solo valor para un atributo HTML, como [`dns-prefetch`](/es/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch).
- `html-element`: un elemento HTML, como [`<button>`](/es/docs/Web/HTML/Reference/Elements/button).

### Tipos de páginas HTTP

Esta sección enumera los valores `page-type` para las páginas bajo [Web/HTTP](/es/docs/Web/HTTP). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `http-csp-directive`: una directiva [CSP](/es/docs/Web/HTTP/Reference/Headers/Content-Security-Policy), como [`script-src`](/es/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).
- `http-cors-error`: un error [CORS](/es/docs/Web/HTTP/Guides/CORS), como [`CORSDidNotSucceed`](/es/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed).
- `http-permissions-policy-directive`: una directiva [`Permissions-Policy`](/es/docs/Web/HTTP/Reference/Headers/Permissions-Policy), como [`accelerometer`](/es/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer).
- `http-header`: una [cabecera HTTP](/es/docs/Web/HTTP/Reference/Headers), como [`Referer`](/es/docs/Web/HTTP/Reference/Headers/Referer).
- `http-method`: un [método de solicitud HTTP](/es/docs/Web/HTTP/Reference/Methods) como [`GET`](/es/docs/Web/HTTP/Reference/Methods/GET).
- `http-status-code`: un [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Reference/Status), como [`404`](/es/docs/Web/HTTP/Reference/Status/404).

### Tipos de páginas JavaScript

Esta sección enumera los valores `page-type` para las páginas bajo [Web/JavaScript](/es/docs/Web/JavaScript). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `javascript-class`: una definición de un objeto integrado, como [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `javascript-constructor`: un constructor de objetos, como [`Array()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).
- `javascript-error`: un error, como [RangeError: invalid array length](/es/docs/Web/JavaScript/Reference/Errors/Invalid_array_length).
- `javascript-function`: una función integrada que no es un método de objeto, como [`encodeURI()`](/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).
- `javascript-global-property`: una propiedad global como [`NaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- `javascript-instance-accessor-property`: una propiedad de accesador en una instancia de objeto, como [`Map.prototype.size`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map/size).
- `javascript-instance-data-property`: una propiedad de datos en una instancia de objeto, como la propiedad [`length`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length) de `Array`.
- `javascript-instance-method`: un método en una instancia de objeto, como [`Array.prototype.at()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
- `javascript-language-feature`: una parte de la sintaxis de JavaScript que no encaja en otra categoría, como [parámetros rest](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters).
- `javascript-namespace`: un objeto que no es instanciable y solo tiene miembros estáticos, como [`Math`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math).
- `javascript-operator`: un operador, como [Adición (+)](/es/docs/Web/JavaScript/Reference/Operators/Addition).
- `javascript-statement`: una declaración, como [`switch`](/es/docs/Web/JavaScript/Reference/Statements/switch).
- `javascript-static-accessor-property`: una propiedad de accesador estático, como [`RegExp.lastMatch`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch).
- `javascript-static-data-property`: una propiedad de datos estática, como [`Math.E`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/E).
- `javascript-static-method`: un método estático, como [`Array.from()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

### Tipos de páginas MathML

Esta sección enumera los valores `page-type` para las páginas bajo [Web/MathML](/es/docs/Web/MathML). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `mathml-attribute`: un atributo MathML, como [`mathcolor`](/es/docs/Web/MathML/Reference/Global_attributes/mathcolor).
- `mathml-element`: un elemento HTML, como [`<msqrt>`](/es/docs/Web/MathML/Reference/Element/msqrt).

### Tipos de páginas SVG

Esta sección enumera los valores `page-type` para las páginas bajo [Web/SVG](/es/docs/Web/SVG). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `svg-attribute`: un atributo SVG, como [`crossorigin`](/es/docs/Web/SVG/Reference/Attribute/crossorigin).
- `svg-element`: un elemento SVG, como [`<circle>`](/es/docs/Web/SVG/Reference/Element/circle).

### Tipos de páginas de Web API

Esta sección enumera los valores `page-type` para las páginas bajo [Web/API](/es/docs/Web/API). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `web-api-overview`: proporciona una descripción general de una Web API, como la [Fetch API](/es/docs/Web/API/Fetch_API).
- `web-api-interface`: una interfaz de Web API, como [`Request`](/es/docs/Web/API/Request).
- `web-api-constructor`: un constructor, como [`Request()`](/es/docs/Web/API/Request/Request).
- `web-api-instance-method`: un método de instancia, como [`cache.add()`](/es/docs/Web/API/Cache/add).
- `web-api-instance-property`: una propiedad de instancia, como [`request.headers`](/es/docs/Web/API/Request/headers).
- `web-api-static-method`: un método estático, como [`Response.error()`](/es/docs/Web/API/Response/error_static).
- `web-api-static-property`: una propiedad estática, como [`Notification.permission`](/es/docs/Web/API/Notification/permission_static).
- `web-api-event`: un evento, como [`Notification.click`](/es/docs/Web/API/Notification/click_event).
- `webgl-extension`: una extensión WebGL, como [`WEBGL_draw_buffers`](/es/docs/Web/API/WEBGL_draw_buffers).
- `webgl-extension-method`: un método de extensión WebGL, como [`OES_vertex_array_object.bindVertexArrayOES()`](/es/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES).

### Tipos de páginas WebAssembly

Esta sección enumera los valores `page-type` para las páginas bajo [WebAssembly/](/es/docs/WebAssembly). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de tipo de página genéricos.

- `webassembly-function`: una función global, es decir, un método directamente bajo el objeto `WebAssembly` que actúa como un espacio de nombres, como [`WebAssembly.instantiate()`](/es/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- `webassembly-constructor`: un constructor, como [`WebAssembly.Exception()`](/es/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception).
- `webassembly-interface`: una interfaz WebAssembly, como [`WebAssembly.LinkError`](/es/docs/WebAssembly/Reference/JavaScript_interface/LinkError).
- `webassembly-instance-property`: una propiedad de instancia, como [`WebAssembly.Instance.exports`](/es/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).
- `webassembly-instance-method`: un método de instancia, como [`WebAssembly.Exception.getArg()`](/es/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg).
- `webassembly-static-method`: un método estático, como [`WebAssembly.Module.exports()`](/es/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static).
- `webassembly-instruction`: una instrucción, o un conjunto de instrucciones, como [`wrap`](/es/docs/WebAssembly/Reference/Numeric/wrap_i64).

### Tipos de páginas WebDriver

Esta sección enumera los valores `page-type` para las páginas bajo [Web/WebDriver](/es/docs/Web/WebDriver). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `webdriver-command`: un comando webdriver, como [`CloseWindow`](/es/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow).
- `webdriver-capability`: una capacidad webdriver, como [`acceptInsecureCerts`](/es/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts).
- `webdriver-error`: un error webdriver, como [Certificado inseguro](/es/docs/Web/WebDriver/Reference/Errors/InsecureCertificate).

### Tipos de páginas WebExtensions

Esta sección enumera los valores `page-type` para las páginas bajo [Mozilla/Add-ons/WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `webextension-api`: una API de WebExtension, como [`alarms`](/es/docs/Mozilla/Add-ons/WebExtensions/API/alarms).
- `webextension-api-event`: un evento de API de WebExtension, como [`action.onClicked`](/es/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked).
- `webextension-api-function`: una función de WebExtension, como [`action.setBadgeText()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/action/setBadgeText).
- `webextension-api-property`: una propiedad de WebExtension, como [`browserSettings.openBookmarksInNewTabs`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs).
- `webextension-api-type`: un tipo de WebExtension, como [`contextualIdentities.ContextualIdentity`](/es/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity).
- `webextension-manifest-key`: una clave de manifiesto de WebExtension, como [`user_scripts`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).

### Tipos de páginas de manifiesto web

Esta sección enumera los valores `page-type` para las páginas bajo [Web/Manifest](/es/docs/Web/Progressive_web_apps/Manifest). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `web-manifest-member`: un miembro de un manifiesto, como [`description`](/es/docs/Web/Progressive_web_apps/Manifest/Reference/description).

### Tipos de páginas XPath

Esta sección enumera los valores `page-type` para las páginas bajo [Web/XPath](/es/docs/Web/XML/XPath). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `xpath-function`: una función, como [`ceiling()`](/es/docs/Web/XML/XPath/Reference/Functions/ceiling)

### Tipos de páginas XSLT

Esta sección enumera los valores `page-type` para las páginas bajo [Web/XSLT](/es/docs/Web/XML/XSLT). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `xslt-element`: un elemento de XSLT, como [`<xsl:message>`](/es/docs/Web/XML/XSLT/Reference/Element/message).

### Tipos de páginas EXSLT

Esta sección enumera los valores `page-type` para las páginas bajo [Web/EXSLT](/es/docs/Web/XML/EXSLT). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `xslt-function`: una función de EXSLT, como [`exsl:node-set()`](/es/docs/Web/XML/EXSLT/Reference/exsl/node-set).

### Tipos de páginas Firefox

Esta sección enumera los valores `page-type` para las páginas bajo [Mozilla/Firefox](/es/docs/Mozilla/Firefox). Cada página en esa parte del árbol debe tener un `page-type`, y su valor debe ser uno de los enumerados a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `firefox-release-notes`: las notas de la versión para una versión particular de Firefox, como [_Firefox 115 para desarrolladores_](/es/docs/Mozilla/Firefox/Releases/115).
