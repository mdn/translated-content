---
title: Macros de enlaces
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 94e900db86109d76e8a1e120e3b135db0d543c87
---

MDN proporciona numerosas macros para crear enlaces siempre actualizados al contenido de MDN. En esta guía, aprenderá sobre las macros de referencia cruzada de MDN que puede usar para incluir un solo enlace a otra página o una lista de enlaces a todas las subpáginas de un documento.

## Listas de enlaces

MDN proporciona macros que crean una lista de enlaces:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Inserta una lista de definición ({{htmlelement("dl")}}) de las subpáginas de la página actual, con el título de cada página como el término {{htmlelement("dt")}} y su primer párrafo como el término {{htmlelement("dd")}}.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Cuando se incluye sin parámetros, inserta una lista ordenada de enlaces a las subpáginas de la página actual. El primer parámetro es el slug de la página principal del árbol de enlaces. El texto del enlace se muestra como código. Establecer un segundo parámetro en `true` o `1` convierte los enlaces en texto sin formato. Establecer un tercer parámetro en `true` o `1` agrega un enlace a la página slug (principal) en la parte superior de la lista con "Visión general" como texto del enlace.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Crea un conjunto de enlaces rápidos usando los elementos secundarios de la página actual (o la página especificada) como destinos. Esto crea listas jerárquicas de hasta dos niveles de profundidad. Los títulos de las páginas se usan como texto del enlace y sus resúmenes como tooltips.

Por ejemplo, para incluir una lista ordenada de enlaces que incluya esta página y sus hermanas, escriba lo siguiente:

```md
\{{ListSubpagesForSidebar("/es/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Enlaces de referencia cruzada

Algunas macros crean un solo enlace para hacer referencia cruzada a una característica de CSS, JavaScript, SVG o HTML, incluidos atributos, elementos, propiedades, tipos de datos y API. Las macros que crean enlaces únicos requieren al menos un parámetro: la característica a la que se hace referencia.

Estas macros son:

- [`\{{CSSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)
- [`\{{glossary("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)

### Uso básico

Para el primer parámetro requerido, deriva el nombre de la característica de la última sección del slug del documento al que desea vincular.
Por ejemplo, para vincular a la página del elemento `<select>` con el slug `Web/HTML/Reference/Elements/select`, escribirá la macro como `\{{HTMLElement("select")}}`.
Esto producirá el enlace "{{htmlelement("select")}}", que tiene formato de código y también incluye los corchetes angulares.
Esto se debe a que las macros agregan formato específico de la característica adicional al texto del enlace.
Así que nunca tiene que preocuparse por nada más que el nombre de la característica en sí al usar una macro.
Es por eso que usar macros para agregar enlaces es rápido y fácil.

### Personalizar el texto de visualización

De manera predeterminada, el texto de visualización del enlace es el primer parámetro pasado a la macro. Para mostrar un texto diferente, use el segundo parámetro. Por ejemplo, `\{{JSxRef("Array")}}` produce {{jsxref("Array")}}. Para mostrar una variación de ese texto, use `\{{JSxRef("Array", "JavaScript arrays")}}`, que produce {{jsxref("Array", "JavaScript arrays")}}. Notará que el enlace resultante tiene formato de código debido al comportamiento predeterminado de la macro. Consulte la sección sobre [Deshabilitar el formato de código](#deshabilitar_el_formato_de_código) para ver cómo omitir el estilo de código.

### Vincular a páginas anidadas

Algunas características de referencia tienen páginas anidadas para características relacionadas. Por ejemplo, el elemento HTML `<input>` tiene múltiples páginas anidadas para diferentes tipos de entrada, como `Web/HTML/Reference/Elements/input/range` para el tipo de entrada de rango.

Pasar la información de la ruta a la macro en el primer parámetro como en `\{{HTMLElement("input/range")}}` produce el enlace como "{{htmlelement("input/range")}}", que no es lo que desea. Use el segundo parámetro para mostrar un texto de enlace diferente. Así que para un enlace al tipo de entrada de rango, escribiríamos la macro como `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` para producir "{{htmlelement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}". (Tenga en cuenta que si el segundo parámetro incluye un espacio, como el que hay entre `input` y `type` aquí, esta macro elimina el formato de código; así que hemos agregado las etiquetas {{htmlelement("code")}} explícitamente).

### Usar `CSSxRef` con la referencia de CSS

Cada macro es ligeramente diferente.

La macro `CSSxRef` determina automáticamente la ruta correcta desde el nombre de la característica que proporciona como primer parámetro a la macro. La macro detecta si una característica es una propiedad, un selector, una regla-arroba, una función o un tipo de dato, y vincula al documento apropiado bajo `Web/CSS/Reference/`.

Por ejemplo:

- `\{{CSSxRef("cursor")}}` vincula a la página de propiedad en `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` vincula a la página de pseudo-clase en `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` vincula a la página de regla-arroba en `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` vincula a la página de función en `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` vincula a la página de tipo de dato en `Web/CSS/Reference/Values/color_value`.

Al igual que la macro `HTMLElement`, la macro `CSSxRef` agrega el estilo apropiado al texto del enlace basándose en el tipo de característica. Así, `\{{CSSxRef("acos")}}` agrega corchetes angulares al texto de enlace resultante como en {{cssxref("acos")}}.

Algunos otros comportamientos de la macro `CSSxRef` vale la pena notar incluyen:

- Las páginas anidadas se manejan automáticamente. Por ejemplo:
  - `\{{CSSxRef("basic-shape/circle")}}` vincula al documento en `Web/CSS/Reference/Values/basic-shape/circle` con el enlace {{cssxref("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` vincula al documento en `Web/CSS/Reference/Properties/animation-timeline/scroll` con el enlace {{cssxref("animation-timeline/scroll")}}.
- Algunas características de CSS tienen el mismo nombre. Además de su ubicación de directorio, sus slugs contienen sufijos para reflejar su tipo. Por ejemplo, la propiedad `position` tiene el slug `Web/CSS/Reference/Properties/position`, mientras que el tipo de dato `<position>` tiene el slug `Web/CSS/Reference/Values/position_value`.

  La macro `CSSxRef` maneja automáticamente estas características con el mismo nombre. Así, `\{{CSSxRef("position")}}` vincula a la página de propiedad con el enlace {{cssxref("position")}}, y `\{{CSSxRef("<position>")}}` vincula a la página de tipo de dato con el enlace {{cssxref("&lt;position&gt;")}}.

  Otras características con nombres compartidos incluyen:
  - Propiedad `color` (`Web/CSS/Reference/Properties/color`) vs. tipo de dato `<color>` (`Web/CSS/Reference/Values/color_value`)

    **Macro**: `\{{CSSxRef("color")}}` vs. `\{{CSSxRef("<color>")}}`

  - Función `fit-content()` (`Web/CSS/Reference/Values/fit-content_function`) vs. palabra clave `fit-content` (`Web/CSS/Reference/Values/fit-content`)

    **Macro**: `\{{CSSxRef("fit-content()")}}` vs. `\{{CSSxRef("fit-content")}}`

  - Propiedad `flex` (`Web/CSS/Reference/Properties/flex`) vs. tipo de dato `<flex>` (`Web/CSS/Reference/Values/flex_value`)

    **Macro**: `\{{CSSxRef("flex")}}` vs. `\{{CSSxRef("<flex>")}}`

  - Pseudo-clase `:host` (`Web/CSS/Reference/Selectors/:host`) vs. función de pseudo-clase `:host()` (`Web/CSS/Reference/Values/:host_function`)

    **Macro**: `\{{CSSxRef(":host")}}` vs. `\{{CSSxRef(":host()")}}`

  - Propiedad `overflow` (`Web/CSS/Reference/Properties/overflow`) vs. tipo de dato `<overflow>` (`Web/CSS/Reference/Values/overflow_value`)

    **Macro**: `\{{CSSxRef("overflow")}}` vs. `\{{CSSxRef("<overflow>")}}`

  - Función `url()` (`Web/CSS/Reference/Values/url_function`) vs. tipo de dato `<url>` (`Web/CSS/Reference/Values/url_value`)

    **Macro**: `\{{CSSxRef("url()")}}` vs. `\{{CSSxRef("<url>")}}`

### Deshabilitar el formato de código

Las macros de referencia cruzada aplican formato de código al texto del enlace de manera predeterminada.
Para evitar la semántica de código HTML y el estilo de código CSS aplicados por las macros, use el parámetro `"nocode"`.

Por ejemplo, `\{{CSSxRef("background-color")}}` crea el enlace "{{cssxref("background-color")}}" con estilo de código, mientras que `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` crea el enlace de texto sin formato "{{domxref("CSS.supports_static", "check support", "", "nocode")}}". De manera similar, para crear el enlace de matriz de JavaScript sin formato de código, escribiríamos `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` para producir "{{jsxref("Array", "JavaScript arrays", "", "nocode")}}".

## Véase también

- [Usar macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros comúnmente usadas](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), incluidas las macros de BCD (`\{{Compat}}`) y las macros de especificación (`\{{Specifications}}`).
- [Guía de banners y avisos](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices), incluidas las macros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` y `\{{SecureContext_Header}}`.
