---
title: Macros usadas comunmente
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
tags:
  - CSS
  - Estructuras
  - Macros
  - Referencia
translation_of: MDN/Structures/Macros/Commonly-used_macros
original_slug: MDN/Structures/Macros/Commonly-used_macros
---
{{MDNSidebar}}

Esta página enumera muchas de las macros de propósito general creadas para usarlas en MDN. Para obtener información sobre cómo usar estas macros, consulta {{web.link("/es/docs/MDN/Contribute/Structures/Macros", "Uso de macros")}} y {{web.link("/es/docs/MDN/Contribute/Editor/Links#Usar_macros_de_enlaces", "Usar macros de enlaces")}}. Consulta {{web.link("/es/docs/MDN/Contribute/Structures/Macros/Other", "Otras macros")}} para obtener información sobre las macros que se utilizan con poca frecuencia, que se utilizan solo en contextos especiales o, están en desuso. También hay una {{web.link("/es/dashboards/macros", "lista completa de todas las macros en MDN")}}.

Consulta también la {{web.link("/es/docs/MDN/Contribute/Guidelines/CSS_style_guide", "guía de estilo CSS")}} para conocer los estilos disponibles para usarlos.

## Enlaces

### Creando un solo hipervínculo

En general, no es necesario utilizar macros para crear enlaces arbitrarios. Utiliza el botón **Enlace** en la interfaz del editor para crear enlaces.

- La macro {{TemplateLink("Glossary")}} crea un vínculo a la entrada de un término específico en el {{web.link("/es/docs/Glossary", "glosario")}} de MDN. Esta macro acepta un parámetro obligatorio y dos opcionales:

  Ejemplos:

  1. El nombre del término (tal como "HTML").
  2. El texto que se mostrará en el artículo en lugar del nombre del término (esto se debe usar con poca frecuencia).{{Optional_Inline}}
  3. Si se especifica este parámetro y no es cero, no se aplica el estilo personalizado que normalmente se aplica a los enlaces del glosario.{{Optional_Inline}}

  - `\{{Glossary("HTML")}}` produce {{Glossary("HTML")}}
  - `\{{Glossary("CSS", "Hojas de estilo en cascada")}}` produce {{Glossary("CSS", "Hojas de estilo en cascada")}}
  - `\{{Glossary("HTML", "", 1)}}` produce {{Glossary("HTML", "", 1)}}

### Enlace a páginas en referencias

Hay varias macros para vincular páginas en áreas de referencia específicas de MDN.

- {{TemplateLink("cssxref")}} links to a page in the [CSS Reference](/es/docs/Web/CSS/Reference).
  Ejemplo: `\{{CSSxRef("cursor")}}`, da como resultado: {{CSSxRef("cursor")}}.
- {{TemplateLink("DOMxRef")}} enlaces a páginas en la referencia DOM; si incluyes paréntesis al final, la plantilla sabe que debe mostrar el enlace para que aparezca el nombre de una función. Por ejemplo, `\{{DOMxRef("document.getElementsByName()")}}` da como resultado: {{DOMxRef("document.getElementsByName()")}} mientras que `\{{DOMxRef("Node")}}` da como resultado: {{DOMxRef("Node")}}.
- {{TemplateLink("event")}} enlaces a páginas en la referencia de Evento del DOM, por ejemplo: `\{{Event("change")}}` da como resultado {{Event("change")}}.
- {{TemplateLink("HTMLElement")}} enlaza a un elemento HTML en la Referencia HTML.
- {{TemplateLink("htmlattrxref")}} enlaza a un atributo HTML, ya sea una descripción de atributo global si solo especificas el nombre del atributo o un atributo asociado con un elemento específico si especificas un nombre de atributo y un nombre de elemento. Por ejemplo, `\{{HTMLAttrxRef("lang")}}` creará este enlace: {{HTMLAttrxRef("lang")}}. `\{{HTMLAttrxRef("type", "input")}}` creará este enlace: {{HTMLAttrxRef("type", "input")}}.
- {{TemplateLink("jsxref")}} enlaza a una página en la {{JSxRef("Referencia", "Referencia de JavaScript")}}.
- {{TemplateLink("SVGAttr")}} enlaza a un atributo SVG específico. Por ejemplo, `\{{SVGAttr("d")}}` crea este enlace: {{SVGAttr("d")}}.
- {{TemplateLink("SVGElement")}} enlaza a un elemento SVG en la Referencia SVG.
- {{TemplateLink("httpheader")}} enlaza a un {{web.link("/es/docs/Web/HTTP/Headers", "header de HTTP")}}.
- {{TemplateLink("HTTPMethod")}} enlaza a un {{web.link("/es/docs/Web/HTTP/Methods", "método de solicitud HTTP")}}.
- {{TemplateLink("HTTPStatus")}} enlaces a un {{web.link("/es/docs/Web/HTTP/Status", "código de estado de respuesta HTTP")}}.

### Enlazar a errores

- `Bugs`

  - {{TemplateLink("bug")}} te permite enlazar a un error en bugzilla.mozilla.org fácilmente usando esta sintaxis: `\{{Bug(123456)}}`. Esto te da: {{Bug(123456)}}.
  - {{TemplateLink("WebkitBug")}} inserta un enlace a un error en la base de datos de errores de `WebKit`. For example, `\{{WebkitBug(31277)}}` inserta {{WebkitBug(31277)}}.

### Ayuda a la navegación para guías multipágina

{{TemplateLink("Previous")}}, {{TemplateLink("Next")}} y {{TemplateLink("PreviousNext")}} proporcionan controles de navegación para artículos que forman parte de secuencias. Para las plantillas unidireccionales, el único parámetro necesario es la ubicación wiki del artículo anterior o siguiente de la secuencia. Para {{TemplateLink("PreviousNext")}}, los dos parámetros necesarios son las ubicaciones wiki de los artículos correspondientes. El primer parámetro es para el artículo anterior y el segundo es para el artículo siguiente.

## Ejemplos de código

### Ejemplos en vivo

- {{TemplateLink("EmbedLiveSample")}} te permite insertar la salida de un ejemplo de código en una página, como se describe en {{web.link("/es/docs/MDN/Contribute/Structures/Live_samples", "Ejemplos en vivo")}}.
- {{TemplateLink("LiveSampleLink")}} crea un vínculo a una página que contiene el resultado de un ejemplo de código en una página, como se describe en {{web.link("/es/docs/MDN/Contribute/Structures/Live_samples", "Ejemplos en vivo")}}.

## Generar la barra lateral

Hay plantillas para casi todas las grandes colecciones de páginas. Por lo general, enlazan a la página principal de `reference/guide/tutorial` (esto, a menudo es necesario porque nuestras rutas de navegación a veces no lo pueden hacer) y colocan el artículo en la categoría apropiada.

- {{TemplateLink("CSSRef")}} genera la barra lateral para las páginas de referencia CSS.
- {{TemplateLink("HTMLRef")}} genera la barra lateral para las páginas de referencia HTML.
- {{TemplateLink("APIRef")}} genera la barra lateral para las páginas de referencia de la API web.

## Formato de propósito general

### Indicadores en línea para documentación de APIs

{{TemplateLink("optional_inline")}} y {{TemplateLink("ReadOnlyInline")}} se utilizan en la documentación de la API, normalmente cuando se describe la lista de propiedades de un objeto o parámetros de una función.

Uso: `\{{Optional_Inline}}` o `\{{ReadOnlyInline}}`. Ejemplo:

- `isCustomObject`{{ReadOnlyInline}}
  - Indica, si es `true`, que el objeto es personalizado.
- `parameterX`{{Optional_Inline}}
  - : Blah blah blah...

## Indicadores de estado y compatibilidad

### Indicadores en línea sin parámetros adicionales

#### `Non-standard`

{{TemplateLink("Non-standard_Inline")}} inserta una marca en línea que indica que la API no se ha estandarizado y no está en un seguimiento de estándares.

##### Sintaxis

`\{{Non-standard_Inline}}`

##### Ejemplos

- Icono: {{Non-standard_Inline}}

#### Experimental

{{TemplateLink("experimental_inline")}} inserta una marca en línea que indica que la API no está ampliamente implementada y puede cambiar en el futuro.

##### Sintaxis

`\{{Experimental_Inline}}`

##### Ejemplos

- Icon: {{Experimental_Inline}}

### Indicadores en línea que apoyan la especificación de la tecnología

En estas macros, el parámetro (cuando se especifica) debe ser una de las cadenas "html", "js", "css" o "gecko", seguida del número de versión.

#### Desaprobado

{{TemplateLink("Deprecated_Inline")}} inserta una marca desaprobado en línea (`Deprecated_Inline`) para desalentar el uso de una API que oficialmente está en desuso. **Nota**: "Desaprobado" significa que el elemento ya no se debe utilizar, pero sigue funcionando. Si quieres decir que ya no funciona, utiliza el término "obsoleto".

No utilices el parámetro en ningún área independiente del navegador (HTML, API, JS, CSS, …).

##### Sintaxis

`\{{Deprecated_Inline}}` o `\{{Deprecated_Inline("gecko5")}}`

##### Ejemplos

- Icon: {{Deprecated_Inline}}
- Insignia: {{Deprecated_Inline("gecko5")}}

#### Obsoleto

{{TemplateLink("Obsolete_Inline")}} inserta una marca de obsoleto en línea (`Deprecated_Inline`) para evitar el uso de, por ejemplo, una función, método o propiedad que oficialmente es obsoleto.

No utilices el parámetro en ningún área independiente del navegador (HTML, API, JS, CSS, …).

##### Sintaxis

`\{{Obsolete_Inline}}` u `\{{Obsolete_Inline("js1.8.5")}}`

##### Ejemplos

- Icon: {{Obsolete_Inline}}
- Badge: {{Obsolete_Inline("js1.8.5")}}

### Plantilla de insignias

Estas macros se utilizan principalmente en la página {{web.link("/es/docs/Web/API", "WebAPI")}}. Consulta [Creación de nuevas insignias](#creación_de_nuevas_insignias) para obtener información sobre cómo crear una nueva insignia (`Badge`).

### Indicadores de encabezado de página o sección

Estas plantillas tienen la misma semántica que sus contrapartes en línea descritas anteriormente. Las plantillas se deben colocar directamente debajo del título de la página principal (o la ruta de navegación si está disponible) en la página de referencia. También se pueden utilizar para marcar una sección en una página.

- {{TemplateLink("Non-standard_Header")}}: `\{{Non-standard_Header}}` {{Non-standard_Header}}
- {{TemplateLink("SeeCompatTable")}} se debe usar en páginas que documentan {{web.link("/es/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental", "características experimentales")}}. Ejemplo: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- {{TemplateLink("Deprecated_Header")}}: `\{{Deprecated_Header}}` {{Deprecated_Header}}
- {{TemplateLink("Deprecated_Header")}} con parámetro: `\{{Deprecated_Header("gecko5")}}` {{Deprecated_Header("gecko5")}} No utilices el parámetro en ninguna área de diagnóstico del navegador (HTML, APIs, JS, CSS, …).
- {{TemplateLink("Obsolete_Header")}}: `\{{Obsolete_Header}}` {{Obsolete_Header}}
- {{TemplateLink("Obsolete_Header")}} con parámetro: `\{{Obsolete_Header("gecko30")}}` {{Obsolete_Header("gecko30")}} No utilice el parámetro en ninguna área de diagnóstico del navegador (HTML, APIs, JS, CSS, …).
- {{TemplateLink("secureContext_header")}}: `\{{SecureContext_Header}}` {{SecureContext_Header}}

### Indica que una función está disponible en `workers` web

La macro {{TemplateLink("AvailableInWorkers")}} inserta un cuadro de nota localizado que indica que una función está disponible en el contexto de {{web.link("/es/docs/Web/API/Web_Workers_API", "workers web")}}.

{{AvailableInWorkers}}
