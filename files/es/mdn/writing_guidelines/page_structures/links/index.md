---
title: Macros de enlace
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 94e900db86109d76e8a1e120e3b135db0d543c87
---

MDN ofrece numerosas macros para crear enlaces siempre actualizados a su contenido. En esta guía, aprenderás sobre las macros de referencia cruzada de MDN, las cuales puedes usar para incluir un único enlace a otra página o una lista de enlaces a todas las subpáginas de un documento.

## Listas de enlaces

MDN ofrece macros que crean una lista de enlaces:

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Inserta una lista de definiciones ({{HTMLElement("dl")}}) de las subpáginas de la página actual, con el título de cada página como el término {{HTMLElement("dt")}} y su primer párrafo como el término {{HTMLElement("dd")}}.

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Cuando se incluye sin parámetros, inserta una lista ordenada de enlaces a las subpáginas de la página actual. El primer parámetro es el slug de la página principal del árbol de enlaces. El texto del enlace se muestra como código. Configurar un segundo parámetro como `true` o `1` convierte los enlaces a texto plano. Configurar un tercer parámetro como `true` o `1` añade un enlace a la página slug (principal) en la parte superior de la lista con "Overview" como texto del enlace.

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Crea un conjunto de enlaces rápidos usando las páginas secundarias de la página actual (o de la página especificada) como destinos. Esto crea listas jerárquicas de hasta dos niveles de profundidad. Los títulos de las páginas se utilizan como texto del enlace y sus resúmenes como información emergente (tooltips).

Por ejemplo, para incluir una lista ordenada de enlaces que incluya esta página y sus páginas hermanas, escribe lo siguiente:

```md
\{{ListSubpagesForSidebar("/es/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Enlaces de referencia cruzada

Algunas macros crean un único enlace de referencia cruzada a una característica de CSS, JavaScript, SVG o HTML, que incluye atributos, elementos, propiedades, tipos de datos y API. Las macros que crean enlaces únicos requieren al menos un parámetro: la característica a la que se hace referencia.

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

Para el primer parámetro obligatorio, obtén el nombre de la característica a partir de la última sección del slug del documento al que quieres enlazar.
Por ejemplo, para enlazar a la página del elemento `<select>`, cuyo slug es `Web/HTML/Reference/Elements/select`, escribe la macro como `\{{HTMLElement("select")}}`.
Esto producirá el enlace "{{HTMLElement("select")}}", que tiene formato de código e incluye los corchetes angulares.
Esto se debe a que las macros añaden un formato adicional específico de la característica al texto del enlace.
Así que nunca tendrás que preocuparte por nada más que el nombre de la característica en sí cuando uses una macro.
Por eso, usar macros para agregar enlaces es rápido y fácil.

### Personalizar el texto visible

Por defecto, el texto visible del enlace es el primer parámetro que se pasa a la macro. Para mostrar un texto diferente, usa el segundo parámetro. Por ejemplo, `\{{JSxRef("Array")}}` genera {{JSxRef("Array")}}. Para mostrar una variación de ese texto, usa `\{{JSxRef("Array", "JavaScript arrays")}}`, que genera {{JSxRef("Array", "JavaScript arrays")}}. Notarás que el enlace resultante tiene formato de código debido al comportamiento por defecto de la macro. Consulta la sección [Desactivar el formato de código](#desactivar_el_formato_de_código) para ver cómo omitir el estilo de código.

### Enlazar a páginas anidadas

Algunas características de referencia tienen páginas anidadas para características relacionadas. Por ejemplo, el elemento HTML `<input>` tiene varias páginas anidadas para diferentes tipos de entrada, como `Web/HTML/Reference/Elements/input/range` para el tipo de entrada de rango.

Pasar la información de la ruta a la macro en el primer parámetro, como en `\{{HTMLElement("input/range")}}`, genera el enlace como "{{HTMLElement("input/range")}}", lo cual no es lo que quieres. Usa el segundo parámetro para mostrar un texto de enlace diferente. Entonces, para un enlace al tipo de entrada de rango, escribe la macro como `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` para obtener "{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}". (Ten en cuenta que si el segundo parámetro incluye un espacio, como el que hay entre `input` y `type` aquí, esta macro elimina el formato de código; por lo tanto, hemos añadido explícitamente las etiquetas {{HTMLElement("code")}}).

### Usar `CSSxRef` con la referencia de CSS

Cada macro es ligeramente diferente.

La macro `CSSxRef` determina automáticamente la ruta correcta a partir del nombre de la característica que le pases como primer parámetro. La macro detecta si la característica es una propiedad, un selector, una regla @ (at-rule), una función o un tipo de dato, y enlaza al documento correspondiente en `Web/CSS/Reference/`.

Por ejemplo:

- `\{{CSSxRef("cursor")}}` enlaza a la página de la propiedad en `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` enlaza a la página de la pseudoclase en `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` enlaza a la página de la regla @ en `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` enlaza a la página de la función en `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` enlaza a la página del tipo de dato en `Web/CSS/Reference/Values/color_value`.

Al igual que la macro `HTMLElement`, la macro `CSSxRef` añade el estilo adecuado al texto del enlace según el tipo de característica. Así, `\{{CSSxRef("acos")}}` añade corchetes angulares al texto del enlace resultante, como en {{CSSxRef("acos")}}.

Otros comportamientos de la macro `CSSxRef` que vale la pena mencionar incluyen:

- Las páginas anidadas se gestionan automáticamente. Por ejemplo:
  - `\{{CSSxRef("basic-shape/circle")}}` enlaza al documento en `Web/CSS/Reference/Values/basic-shape/circle` con el enlace {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` enlaza al documento en `Web/CSS/Reference/Properties/animation-timeline/scroll` con el enlace {{CSSxRef("animation-timeline/scroll")}}.
- Algunas características de CSS tienen el mismo nombre. Además de su ubicación en el directorio, sus slugs contienen sufijos que indican su tipo. Por ejemplo, la propiedad `position` tiene el slug `Web/CSS/Reference/Properties/position`, mientras que el tipo de dato `<position>` tiene el slug `Web/CSS/Reference/Values/position_value`.

  La macro `CSSxRef` gestiona automáticamente estas características con nombres idénticos. Así, `\{{CSSxRef("position")}}` enlaza a la página de la propiedad con el enlace {{CSSxRef("position")}}, y `\{{CSSxRef("<position>")}}` enlaza a la página del tipo de dato con el enlace {{CSSxRef("&lt;position&gt;")}}.

  Otras características con nombres compartidos incluyen:
  - La propiedad `color` (`Web/CSS/Reference/Properties/color`) frente al tipo de dato `<color>` (`Web/CSS/Reference/Values/color_value`)

    **Macro**: `\{{CSSxRef("color")}}` frente a `\{{CSSxRef("<color>")}}`

  - La función `fit-content()` (`Web/CSS/Reference/Values/fit-content_function`) frente a la palabra clave `fit-content` (`Web/CSS/Reference/Values/fit-content`)

    **Macro**: `\{{CSSxRef("fit-content()")}}` frente a `\{{CSSxRef("fit-content")}}`

  - La propiedad `flex` (`Web/CSS/Reference/Properties/flex`) frente al tipo de dato `<flex>` (`Web/CSS/Reference/Values/flex_value`)

    **Macro**: `\{{CSSxRef("flex")}}` frente a `\{{CSSxRef("<flex>")}}`

  - La pseudoclase `:host` (`Web/CSS/Reference/Selectors/:host`) frente a la función de pseudoclase `:host()` (`Web/CSS/Reference/Values/:host_function`)

    **Macro**: `\{{CSSxRef(":host")}}` frente a `\{{CSSxRef(":host()")}}`

  - La propiedad `overflow` (`Web/CSS/Reference/Properties/overflow`) frente al tipo de dato `<overflow>` (`Web/CSS/Reference/Values/overflow_value`)

    **Macro**: `\{{CSSxRef("overflow")}}` frente a `\{{CSSxRef("<overflow>")}}`

  - La función `url()` (`Web/CSS/Reference/Values/url_function`) frente al tipo de dato `<url>` (`Web/CSS/Reference/Values/url_value`)

    **Macro**: `\{{CSSxRef("url()")}}` frente a `\{{CSSxRef("<url>")}}`

### Desactivar el formato de código

Las macros de referencia cruzada aplican formato de código al texto del enlace por defecto.
Para evitar la semántica del código HTML y el estilo del código CSS aplicado por las macros, usa el parámetro `"nocode"`.

Por ejemplo, `\{{CSSxRef("background-color")}}` crea el enlace "{{CSSxRef("background-color")}}" con estilo de código, mientras que `\{{domxref("CSS.supports_static", "check support", "", "nocode")}}` crea el enlace de texto plano "{{domxref("CSS.supports_static", "check support", "", "nocode")}}". De igual manera, para crear el enlace al arreglo de JavaScript sin formato de código, escribe `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` para obtener "{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}".

## Véase también

- [Uso de macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros usadas comúnmente](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), incluidas las macros de BCD (`\{{Compat}}`) y las macros de especificaciones (`\{{Specifications}}`).
- [Guía de banners y avisos](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices), que incluye las macros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` y `\{{SecureContext_Header}}`.
