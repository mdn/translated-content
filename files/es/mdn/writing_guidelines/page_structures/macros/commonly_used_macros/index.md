---
title: Macros usadas comunmente
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
---

{{MDNSidebar}}

Esta página enumera muchas de las macros de propósito general creadas para usarlas en MDN. Para obtener información sobre cómo usar estas macros, consulta [Uso de macros](/es/docs/MDN/Contribute/Structures/Macros) y [Usar macros de enlaces](/es/docs/MDN/Contribute/Editor/Links#Usar_macros_de_enlaces). Consulta [Otras macros](/es/docs/MDN/Contribute/Structures/Macros/Other) para obtener información sobre las macros que se utilizan con poca frecuencia, que se utilizan solo en contextos especiales o, están en desuso. También hay una [lista completa de todas las macros en MDN](/es/dashboards/macros).

Consulta también la [guía de estilo CSS](/es/docs/MDN/Contribute/Guidelines/CSS_style_guide) para conocer los estilos disponibles para usarlos.

## Enlaces

### Creando un solo hipervínculo

En general, no es necesario utilizar macros para crear enlaces arbitrarios. Utiliza el botón **Enlace** en la interfaz del editor para crear enlaces.

- La macro [`Glossary`](https://github.com/mdn/yari/tree/main/kumascript/macros/Glossary.ejs) crea un vínculo a la entrada de un término específico en el [glosario](/es/docs/Glossary) de MDN. Esta macro acepta un parámetro obligatorio y dos opcionales:

  Ejemplos:

  1. El nombre del término (tal como "HTML").
  2. El texto que se mostrará en el artículo en lugar del nombre del término (esto se debe usar con poca frecuencia).{{Optional_Inline}}
  3. Si se especifica este parámetro y no es cero, no se aplica el estilo personalizado que normalmente se aplica a los enlaces del glosario.{{Optional_Inline}}

  - `\{{Glossary("HTML")}}` produce {{Glossary("HTML")}}
  - `\{{Glossary("CSS", "Hojas de estilo en cascada")}}` produce {{Glossary("CSS", "Hojas de estilo en cascada")}}
  - `\{{Glossary("HTML", "", 1)}}` produce {{Glossary("HTML", "", 1)}}

### Enlace a páginas en referencias

Hay varias macros para vincular páginas en áreas de referencia específicas de MDN.

- [`cssxref`](https://github.com/mdn/yari/tree/main/kumascript/macros/cssxref.ejs) links to a page in the [CSS Reference](/es/docs/Web/CSS/Reference).
  Ejemplo: `\{{CSSxRef("cursor")}}`, da como resultado: {{CSSxRef("cursor")}}.
- [`DOMxRef`](https://github.com/mdn/yari/tree/main/kumascript/macros/DOMxRef.ejs) enlaces a páginas en la referencia DOM; si incluyes paréntesis al final, la plantilla sabe que debe mostrar el enlace para que aparezca el nombre de una función. Por ejemplo, `\{{DOMxRef("document.getElementsByName()")}}` da como resultado: {{DOMxRef("document.getElementsByName()")}} mientras que `\{{DOMxRef("Node")}}` da como resultado: {{DOMxRef("Node")}}.
- [`HTMLElement`](https://github.com/mdn/yari/tree/main/kumascript/macros/HTMLElement.ejs) enlaza a un elemento HTML en la Referencia HTML.
- [`jsxref`](https://github.com/mdn/yari/tree/main/kumascript/macros/jsxref.ejs) enlaza a una página en la {{JSxRef("Referencia", "Referencia de JavaScript")}}.
- [`SVGAttr`](https://github.com/mdn/yari/tree/main/kumascript/macros/SVGAttr.ejs) enlaza a un atributo SVG específico. Por ejemplo, `\{{SVGAttr("d")}}` crea este enlace: {{SVGAttr("d")}}.
- [`SVGElement`](https://github.com/mdn/yari/tree/main/kumascript/macros/SVGElement.ejs) enlaza a un elemento SVG en la Referencia SVG.
- [`httpheader`](https://github.com/mdn/yari/tree/main/kumascript/macros/httpheader.ejs) enlaza a un [header de HTTP](/es/docs/Web/HTTP/Headers).
- [`HTTPMethod`](https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPMethod.ejs) enlaza a un [método de solicitud HTTP](/es/docs/Web/HTTP/Methods).
- [`HTTPStatus`](https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPStatus.ejs) enlaces a un [código de estado de respuesta HTTP](/es/docs/Web/HTTP/Status).

### Ayuda a la navegación para guías multipágina

[`Previous`](https://github.com/mdn/yari/tree/main/kumascript/macros/Previous.ejs), [`Next`](https://github.com/mdn/yari/tree/main/kumascript/macros/Next.ejs) y [`PreviousNext`](https://github.com/mdn/yari/tree/main/kumascript/macros/PreviousNext.ejs) proporcionan controles de navegación para artículos que forman parte de secuencias. Para las plantillas unidireccionales, el único parámetro necesario es la ubicación wiki del artículo anterior o siguiente de la secuencia. Para [`PreviousNext`](https://github.com/mdn/yari/tree/main/kumascript/macros/PreviousNext.ejs), los dos parámetros necesarios son las ubicaciones wiki de los artículos correspondientes. El primer parámetro es para el artículo anterior y el segundo es para el artículo siguiente.

## Ejemplos de código

### Ejemplos en vivo

- [`EmbedLiveSample`](https://github.com/mdn/yari/tree/main/kumascript/macros/EmbedLiveSample.ejs) te permite insertar la salida de un ejemplo de código en una página, como se describe en [Ejemplos en vivo](/es/docs/MDN/Contribute/Structures/Live_samples).
- [`LiveSampleLink`](https://github.com/mdn/yari/tree/main/kumascript/macros/LiveSampleLink.ejs) crea un vínculo a una página que contiene el resultado de un ejemplo de código en una página, como se describe en [Ejemplos en vivo](/es/docs/MDN/Contribute/Structures/Live_samples).

## Generar la barra lateral

Hay plantillas para casi todas las grandes colecciones de páginas. Por lo general, enlazan a la página principal de `reference/guide/tutorial` (esto, a menudo es necesario porque nuestras rutas de navegación a veces no lo pueden hacer) y colocan el artículo en la categoría apropiada.

- [`CSSRef`](https://github.com/mdn/yari/tree/main/kumascript/macros/CSSRef.ejs) genera la barra lateral para las páginas de referencia CSS.
- [`HTMLSidebar`](https://github.com/mdn/yari/tree/main/kumascript/macros/HTMLSidebar.ejs) genera la barra lateral para las páginas de referencia HTML.
- [`APIRef`](https://github.com/mdn/yari/tree/main/kumascript/macros/APIRef.ejs) genera la barra lateral para las páginas de referencia de la API web.

## Formato de propósito general

### Indicadores en línea para documentación de APIs

[`optional_inline`](https://github.com/mdn/yari/tree/main/kumascript/macros/optional_inline.ejs) y [`ReadOnlyInline`](https://github.com/mdn/yari/tree/main/kumascript/macros/ReadOnlyInline.ejs) se utilizan en la documentación de la API, normalmente cuando se describe la lista de propiedades de un objeto o parámetros de una función.

Uso: `\{{Optional_Inline}}` o `\{{ReadOnlyInline}}`. Ejemplo:

- `isCustomObject`{{ReadOnlyInline}}
  - Indica, si es `true`, que el objeto es personalizado.
- `parameterX`{{Optional_Inline}}
  - : Blah blah blah...

## Indicadores de estado y compatibilidad

### Indicadores en línea sin parámetros adicionales

#### `Non-standard`

[`Non-standard_Inline`](https://github.com/mdn/yari/tree/main/kumascript/macros/Non-standard_Inline.ejs) inserta una marca en línea que indica que la API no se ha estandarizado y no está en un seguimiento de estándares.

##### Sintaxis

`\{{Non-standard_Inline}}`

##### Ejemplos

- Icono: {{Non-standard_Inline}}

#### Experimental

[`experimental_inline`](https://github.com/mdn/yari/tree/main/kumascript/macros/experimental_inline.ejs) inserta una marca en línea que indica que la API no está ampliamente implementada y puede cambiar en el futuro.

##### Sintaxis

`\{{Experimental_Inline}}`

##### Ejemplos

- Icon: {{Experimental_Inline}}

### Indicadores en línea que apoyan la especificación de la tecnología

En estas macros, el parámetro (cuando se especifica) debe ser una de las cadenas "html", "js", "css" o "gecko", seguida del número de versión.

#### Desaprobado

[`Deprecated_Inline`](https://github.com/mdn/yari/tree/main/kumascript/macros/Deprecated_Inline.ejs) inserta una marca desaprobado en línea (`Deprecated_Inline`) para desalentar el uso de una API que oficialmente está en desuso. **Nota**: "Desaprobado" significa que el elemento ya no se debe utilizar, pero sigue funcionando. Si quieres decir que ya no funciona, utiliza el término "obsoleto".

No utilices el parámetro en ningún área independiente del navegador (HTML, API, JS, CSS, …).

##### Sintaxis

`\{{Deprecated_Inline}}`

##### Ejemplo

- Icon: {{Deprecated_Inline}}

### Plantilla de insignias

Estas macros se utilizan principalmente en la página [WebAPI](/es/docs/Web/API). Consulta [Creación de nuevas insignias](#creación_de_nuevas_insignias) para obtener información sobre cómo crear una nueva insignia (`Badge`).

### Indicadores de encabezado de página o sección

Estas plantillas tienen la misma semántica que sus contrapartes en línea descritas anteriormente. Las plantillas se deben colocar directamente debajo del título de la página principal (o la ruta de navegación si está disponible) en la página de referencia. También se pueden utilizar para marcar una sección en una página.

- [`Non-standard_Header`](https://github.com/mdn/yari/tree/main/kumascript/macros/Non-standard_Header.ejs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/tree/main/kumascript/macros/SeeCompatTable.ejs) se debe usar en páginas que documentan [características experimentales](/es/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental). Ejemplo: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/yari/tree/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`Deprecated_Header`](https://github.com/mdn/yari/tree/main/kumascript/macros/Deprecated_Header.ejs) con parámetro: `\{{Deprecated_Header("gecko5")}}` {{Deprecated_Header("gecko5")}} No utilices el parámetro en ninguna área de diagnóstico del navegador (HTML, APIs, JS, CSS, …).
- [`secureContext_header`](https://github.com/mdn/yari/tree/main/kumascript/macros/secureContext_header.ejs): `\{{SecureContext_Header}}` {{SecureContext_Header}}

### Indica que una función está disponible en `workers` web

La macro [`AvailableInWorkers`](https://github.com/mdn/yari/tree/main/kumascript/macros/AvailableInWorkers.ejs) inserta un cuadro de nota localizado que indica que una función está disponible en el contexto de [workers web](/es/docs/Web/API/Web_Workers_API).

{{AvailableInWorkers}}
