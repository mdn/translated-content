---
title: La clave page-type de front matter
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: bd8f07e677d3bf6d5ebb0bccec3afb48f52921b5
---

La clave `page-type` de front matter describe el tipo de una página de MDN.
Esto permite que las herramientas de contenido de MDN automaticen mejor la verificación del contenido y la organización de la barra lateral.

Al igual que cualquier otra clave de front matter, la clave `page-type` se especifica en el YAML al inicio de `index.md`:

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
sidebar: http
---
```

Cada área principal del sitio —JavaScript, CSS, etc.— tiene un conjunto de valores `page-type` específicos de ese dominio, y también hay un conjunto de valores genéricos que pueden aparecer en cualquier área del sitio.

## Tipos de página genéricos

Estos tipos de páginas no son específicos de un área tecnológica concreta de MDN:

- `guide`: una guía genérica sin una estructura determinada.
- `landing-page`: una descripción general del tema, con introducción a la sección y navegación a las áreas clave.
- `listing-page`: una descripción breve de la sección y un listado de subpáginas dentro de esa sección.
- `how-to`: un artículo práctico orientado a un objetivo concreto.
- `tutorial`: una descripción general de un artículo orientado al aprendizaje.
- `tutorial-chapter`: una parte de un tutorial dividido en varias partes.

## Tipos de página específicos del dominio

Esta sección enumera los tipos de página que son específicos de un área concreta de MDN.

### Tipos de página del área de aprendizaje

Esta sección enumera los valores de `page-type` para las páginas de [Learn](/es/docs/Learn_web_development). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de tipo de página genéricos.

- `learn-topic`: una descripción general de un tema, es decir, una colección de módulos como [_CSS_](/es/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`: una descripción general de un módulo, es decir, una colección ordenada de guías, como [_Estructuración de contenido con HTML_](/es/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`: una guía que forma parte de un módulo, como [_Accesibilidad en dispositivos móviles_](/es/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`: una guía especial con una actividad para evaluar la comprensión de un módulo o de una parte de él, como [_Pon a prueba tus habilidades: Formularios y botones_](/es/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons).
- `learn-faq`: la respuesta a una pregunta concreta sobre desarrollo web, como [_¿Qué es un nombre de dominio?_](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Tipos de página de accesibilidad

Esta sección enumera los valores de `page-type` para las páginas de [Web/Accessibility](/es/docs/Web/Accessibility). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `aria-role`: un [rol](/es/docs/Web/Accessibility/ARIA/Reference/Roles) ARIA, como [`section`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/section_role).
- `aria-attribute`: un [atributo](/es/docs/Web/Accessibility/ARIA/Reference/Attributes) ARIA, como [`aria-sort`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort).

### Tipos de página de CSS

Esta sección enumera los valores de `page-type` para las páginas de [Web/CSS](/es/docs/Web/CSS). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `css-at-rule`: una [regla-at](/es/docs/Web/CSS/Guides/Syntax/At-rules), como {{cssxref("@media")}}.
- `css-at-rule-descriptor`: un descriptor de regla-at, como [`@counter-style/prefix`](/es/docs/Web/CSS/Reference/At-rules/@counter-style/prefix).
- `css-combinator`: un combinador, como el [combinador de descendientes](/es/docs/Web/CSS/Reference/Selectors/Descendant_combinator).
- `css-function`: una [función](/es/docs/Web/CSS/Reference/Values/Functions), como {{cssxref("max")}}.
- `css-keyword`: una palabra clave, como {{cssxref("inherit")}}.
- `css-media-feature`: una [característica de medios](/es/docs/Web/CSS/Reference/At-rules/@media#media_features), como {{cssxref("@media/hover")}}.
- `css-module`: un módulo, como [CSS Animations](/es/docs/Web/CSS/Guides/Animations).
- `css-property`: una propiedad, como {{cssxref("background-color")}}.
- `css-pseudo-class`: una [pseudoclase](/es/docs/Web/CSS/Reference/Selectors/Pseudo-classes), como {{cssxref(":enabled")}}.
- `css-pseudo-element`: un [pseudoelemento](/es/docs/Web/CSS/Reference/Selectors/Pseudo-elements), como {{cssxref("::before")}}.
- `css-selector`: un [selector básico](/es/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#basic_selectors), como el [selector de clase](/es/docs/Web/CSS/Reference/Selectors/Class_selectors).
- `css-shorthand-property`: una [propiedad abreviada](/es/docs/Web/CSS/Guides/Cascade/Shorthand_properties), como {{cssxref("background")}}.
- `css-type`: un [tipo de dato](/es/docs/Web/CSS/Reference/Values/Data_types), como {{cssxref("&lt;color&gt;")}}.

### Tipos de página del glosario

Esta sección enumera los valores de `page-type` para las páginas de [Glossary](/es/docs/Glossary). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación.

- `glossary-definition`: una página que define un término, como [Curva de Bézier](/es/docs/Glossary/Bezier_curve).
- `glossary-disambiguation`: una página con enlaces a dos o más páginas de definición para un término ambiguo, como [Nodo](/es/docs/Glossary/Node).

### Tipos de página de HTML

Esta sección enumera los valores de `page-type` para las páginas de [Web/HTML](/es/docs/Web/HTML). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `html-attribute`: un atributo HTML, como [`autocomplete`](/es/docs/Web/HTML/Reference/Attributes/autocomplete).
- `html-attribute-value`: un valor concreto de un atributo HTML, como [`dns-prefetch`](/es/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch).
- `html-element`: un elemento HTML, como [`<button>`](/es/docs/Web/HTML/Reference/Elements/button).

### Tipos de página de HTTP

Esta sección enumera los valores de `page-type` para las páginas de [Web/HTTP](/es/docs/Web/HTTP). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `http-csp-directive`: una directiva [CSP](/es/docs/Web/HTTP/Reference/Headers/Content-Security-Policy), como [`script-src`](/es/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).
- `http-cors-error`: un error de [CORS](/es/docs/Web/HTTP/Guides/CORS), como [`CORSDidNotSucceed`](/es/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed).
- `http-permissions-policy-directive`: una directiva de [`Permissions-Policy`](/es/docs/Web/HTTP/Reference/Headers/Permissions-Policy), como [`accelerometer`](/es/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer).
- `http-header`: una [cabecera HTTP](/es/docs/Web/HTTP/Reference/Headers), como [`Referer`](/es/docs/Web/HTTP/Reference/Headers/Referer).
- `http-method`: un [método de solicitud HTTP](/es/docs/Web/HTTP/Reference/Methods), como [`GET`](/es/docs/Web/HTTP/Reference/Methods/GET).
- `http-status-code`: un [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Reference/Status), como [`404`](/es/docs/Web/HTTP/Reference/Status/404).

### Tipos de página de JavaScript

Esta sección enumera los valores de `page-type` para las páginas de [Web/JavaScript](/es/docs/Web/JavaScript). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `javascript-class`: la definición de un objeto integrado, como [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `javascript-constructor`: el constructor de un objeto, como [`Array()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).
- `javascript-error`: un error, como [RangeError: invalid array length](/es/docs/Web/JavaScript/Reference/Errors/Invalid_array_length).
- `javascript-function`: una función integrada que no es un método de objeto, como [`encodeURI()`](/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).
- `javascript-global-property`: una propiedad global, como [`NaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- `javascript-instance-accessor-property`: una propiedad de acceso en una instancia de objeto, como [`Map.prototype.size`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map/size).
- `javascript-instance-data-property`: una propiedad de datos en una instancia de objeto, como la propiedad [`length`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length) de `Array`.
- `javascript-instance-method`: un método en una instancia de objeto, como [`Array.prototype.at()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
- `javascript-language-feature`: una parte de la sintaxis de JavaScript que no encaja en ninguna otra categoría, como los [parámetros rest](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters).
- `javascript-namespace`: un objeto que no se puede instanciar y solo tiene miembros estáticos, como [`Math`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math).
- `javascript-operator`: un operador, como [Suma (+)](/es/docs/Web/JavaScript/Reference/Operators/Addition).
- `javascript-statement`: una sentencia, como [`switch`](/es/docs/Web/JavaScript/Reference/Statements/switch).
- `javascript-static-accessor-property`: una propiedad de acceso estática, como [`RegExp.lastMatch`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch).
- `javascript-static-data-property`: una propiedad de datos estática, como [`Math.E`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/E).
- `javascript-static-method`: un método estático, como [`Array.from()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

### Tipos de página de MathML

Esta sección enumera los valores de `page-type` para las páginas de [Web/MathML](/es/docs/Web/MathML). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `mathml-attribute`: un atributo de MathML, como [`mathcolor`](/es/docs/Web/MathML/Reference/Global_attributes/mathcolor).
- `mathml-element`: un elemento MathML, como [`<msqrt>`](/es/docs/Web/MathML/Reference/Element/msqrt).

### Tipos de página de SVG

Esta sección enumera los valores de `page-type` para las páginas de [Web/SVG](/es/docs/Web/SVG). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `svg-attribute`: un atributo SVG, como [`crossorigin`](/es/docs/Web/SVG/Reference/Attribute/crossorigin).
- `svg-element`: un elemento SVG, como [`<circle>`](/es/docs/Web/SVG/Reference/Element/circle).

### Tipos de página de la API web

Esta sección enumera los valores de `page-type` para las páginas de [Web/API](/es/docs/Web/API). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `web-api-overview`: ofrece una descripción general de una API web, como la [API Fetch](/es/docs/Web/API/Fetch_API).
- `web-api-interface`: una interfaz de una API web, como [`Request`](/es/docs/Web/API/Request).
- `web-api-constructor`: un constructor, como [`Request()`](/es/docs/Web/API/Request/Request).
- `web-api-instance-method`: un método de instancia, como [`cache.add()`](/es/docs/Web/API/Cache/add).
- `web-api-instance-property`: una propiedad de instancia, como [`request.headers`](/es/docs/Web/API/Request/headers).
- `web-api-static-method`: un método estático, como [`Response.error()`](/es/docs/Web/API/Response/error_static).
- `web-api-static-property`: una propiedad estática, como [`Notification.permission`](/es/docs/Web/API/Notification/permission_static).
- `web-api-event`: un evento, como [`Notification.click`](/es/docs/Web/API/Notification/click_event).
- `webgl-extension`: una extensión de WebGL, como [`WEBGL_draw_buffers`](/es/docs/Web/API/WEBGL_draw_buffers).
- `webgl-extension-method`: un método de extensión de WebGL, como [`OES_vertex_array_object.bindVertexArrayOES()`](/es/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES).

### Tipos de página de WebAssembly

Esta sección enumera los valores de `page-type` para las páginas de [WebAssembly/](/es/docs/WebAssembly). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de tipo de página genéricos.

- `webassembly-function`: una función global, es decir, un método directamente bajo el objeto `WebAssembly` que actúa como un namespace, como [`WebAssembly.instantiate()`](/es/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- `webassembly-constructor`: un constructor, como [`WebAssembly.Exception()`](/es/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception).
- `webassembly-interface`: una interfaz de WebAssembly, como [`WebAssembly.LinkError`](/es/docs/WebAssembly/Reference/JavaScript_interface/LinkError).
- `webassembly-instance-property`: una propiedad de instancia, como [`WebAssembly.Instance.exports`](/es/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).
- `webassembly-instance-method`: un método de instancia, como [`WebAssembly.Exception.getArg()`](/es/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg).
- `webassembly-static-method`: un método estático, como [`WebAssembly.Module.exports()`](/es/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static).
- `webassembly-instruction`: una instrucción, o un conjunto de instrucciones, como [`wrap`](/es/docs/WebAssembly/Reference/Numeric/wrap_i64).

### Tipos de página de WebDriver

Esta sección enumera los valores de `page-type` para las páginas de [Web/WebDriver](/es/docs/Web/WebDriver). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `webdriver-command`: un comando de WebDriver, como [`CloseWindow`](/es/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow).
- `webdriver-capability`: una capacidad de WebDriver, como [`acceptInsecureCerts`](/es/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts).
- `webdriver-error`: un error de WebDriver, como [Certificado no seguro](/es/docs/Web/WebDriver/Reference/Errors/InsecureCertificate).

### Tipos de página de WebExtensions

Esta sección enumera los valores de `page-type` para las páginas de [Mozilla/Add-ons/WebExtensions](/es/docs/Mozilla/Add-ons/WebExtensions). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `webextension-api`: una API de WebExtension, como [`alarms`](/es/docs/Mozilla/Add-ons/WebExtensions/API/alarms).
- `webextension-api-event`: un evento de una API de WebExtension, como [`action.onClicked`](/es/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked).
- `webextension-api-function`: una función de WebExtension, como [`action.setBadgeText()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/action/setBadgeText).
- `webextension-api-property`: una propiedad de WebExtension, como [`browserSettings.openBookmarksInNewTabs`](/es/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs).
- `webextension-api-type`: un tipo de WebExtension, como [`contextualIdentities.ContextualIdentity`](/es/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity).
- `webextension-manifest-key`: una clave de manifiesto de WebExtension, como [`user_scripts`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).

### Tipos de página de manifiesto web

Esta sección enumera los valores de `page-type` para las páginas de [Web/Manifest](/es/docs/Web/Progressive_web_apps/Manifest). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `web-manifest-member`: un miembro de un manifiesto, como [`description`](/es/docs/Web/Progressive_web_apps/Manifest/Reference/description).

### Tipos de página de XPath

Esta sección enumera los valores de `page-type` para las páginas de [Web/XPath](/es/docs/Web/XML/XPath). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `xpath-function`: una función, como [`ceiling()`](/es/docs/Web/XML/XPath/Reference/Functions/ceiling).

### Tipos de página de XSLT

Esta sección enumera los valores de `page-type` para las páginas de [Web/XSLT](/es/docs/Web/XML/XSLT). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `xslt-element`: un elemento de XSLT, como [`<xsl:message>`](/es/docs/Web/XML/XSLT/Reference/Element/message).

### Tipos de página de EXSLT

Esta sección enumera los valores de `page-type` para las páginas de [Web/EXSLT](/es/docs/Web/XML/EXSLT). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `exslt-function`: una función de EXSLT, como [`exsl:node-set()`](/es/docs/Web/XML/EXSLT/Reference/exsl/node-set).

### Tipos de página de Firefox

Esta sección enumera los valores de `page-type` para las páginas de [Mozilla/Firefox](/es/docs/Mozilla/Firefox). Todas las páginas de esa parte del árbol deben tener un `page-type`, y su valor debe ser uno de los que se indican a continuación o uno de los valores de [tipo de página genérico](#generic_page_types).

- `firefox-release-notes`: las notas de la versión de una versión concreta de Firefox, como [_Firefox 115 para desarrolladores_](/es/docs/Mozilla/Firefox/Releases/115).
