---
title: Categorías de contenido
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
---

La mayoría de los elementos [HTML](/es/docs/Web/HTML) son miembros de una o más **categorías de contenido** — estas categorías agrupan elementos que comparten características comunes. Se trata de una agrupación flexible (en realidad no crea una relación entre los elementos de estas categorías), pero ayudan a definir y describir el comportamiento compartido de las categorías y las reglas asociadas a ellas. Es posible que [algunos elementos no sean miembros de _ninguna_ de estas categorías](#elementos_sin_categoría).

Las categorías de contenido se usan para definir el _modelo de contenido_ de los elementos; es decir, qué puede tener cada uno como descendientes. Por ejemplo, el elemento `<p>` solo puede contener _contenido de frase_, mientras que el elemento `<div>` puede contener _contenido de flujo_. Algunos elementos, como `<ins>`, tienen un [modelo de contenido _transparente_](#modelo_de_contenido_transparente).

Existen siete categorías de contenido principales, que se pueden resumir en el siguiente diagrama de Venn:

![Un diagrama de Venn que muestra cómo se interrelacionan las distintas categorías de contenido. Las siguientes secciones explican estas relaciones en el texto.](content_categories_venn.png)

> [!NOTE]
> Un análisis más detallado de estas categorías de contenido y sus funcionalidades comparativas está fuera del alcance de este artículo; para eso, quizá quieras leer las [partes relevantes de la especificación HTML](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content).

## Contenido de metadatos

Los elementos que pertenecen a la categoría de _contenido de metadatos_ modifican la presentación o el comportamiento del resto del documento, establecen enlaces hacia otros documentos o transmiten otro tipo de información _fuera de banda_. Todo lo que está dentro de {{HTMLElement("head")}}, incluidos `<title>`, `<link>`, `<script>`, `<style>` y el menos usado `<base>`, es contenido de metadatos. Existe también el elemento `<meta>` para los metadatos que no se pueden representar con estos otros elementos.

Los elementos de metadatos son:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Algunos de estos elementos pertenecen a más de una categoría de contenido. Por ejemplo, `<script>` es miembro de las categorías de contenido de metadatos, de flujo y de frase, y además es un elemento de soporte de scripts; `<script>` se puede usar en cualquier lugar donde se espere contenido de metadatos, contenido de frase o elementos de soporte de scripts.

## Contenido de flujo

El contenido de flujo es una categoría amplia que engloba la mayoría de los elementos que pueden ir dentro del elemento {{HTMLElement("body")}}, incluidos los elementos de encabezado, los elementos de seccionamiento, los elementos de frase, los elementos incrustados, los elementos interactivos y los elementos relacionados con formularios. También incluye nodos de texto (pero no aquellos que solo consisten en espacios en blanco).

Los elementos de flujo son:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("dialog")}}
- {{HTMLElement("div")}}
- {{HTMLElement("dl")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("form")}}
- {{HTMLElement("geolocation")}}
- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("header")}}
- {{HTMLElement("hgroup")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("output")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("search")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("ul")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- [Elementos personalizados autónomos](/es/docs/Web/API/Web_components/Using_custom_elements)
- Texto sin formato

Algunos otros elementos pertenecen a esta categoría, pero solo si se cumple una condición específica:

- {{HTMLElement("area")}}, si es descendiente de un elemento {{HTMLElement("map")}}
- {{HTMLElement("link")}}, si está presente el atributo [`itemprop`](/es/docs/Web/HTML/Reference/Global_attributes/itemprop)
- {{HTMLElement("meta")}}, si está presente el atributo [`itemprop`](/es/docs/Web/HTML/Reference/Global_attributes/itemprop)

## Contenido de seccionamiento

El contenido de seccionamiento, un subconjunto del contenido de flujo, crea una [sección en el esquema actual](/es/docs/Web/HTML/Reference/Elements/Heading_Elements) que define el alcance de los elementos {{HTMLElement("header")}} y {{HTMLElement("footer")}}.

Los elementos de seccionamiento son:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Contenido de encabezado

El contenido de encabezado, un subconjunto del contenido de flujo, define el título de una sección. Esta definición se aplica tanto a las secciones marcadas explícitamente por elementos de [contenido de seccionamiento](#contenido_de_seccionamiento) como a las que se definen implícitamente mediante el propio contenido de encabezado.

Los elementos de encabezado son:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Aunque es probable que contenga contenido de encabezado, {{HTMLElement("header")}} no es, en sí mismo, contenido de encabezado.

## Contenido de frase

El contenido de frase, un subconjunto del contenido de flujo, se refiere al texto y al marcado dentro de un documento. Las secuencias de contenido de frase forman párrafos.

Los elementos de frase son:

- {{HTMLElement("abbr")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- [Elementos personalizados autónomos](/es/docs/Web/API/Web_components/Using_custom_elements)
- Texto sin formato

Algunos otros elementos pertenecen a esta categoría, pero solo si se cumple una condición específica:

- {{HTMLElement("a")}}, si su contenido es solo de frase
- {{HTMLElement("area")}}, si es descendiente de un elemento {{HTMLElement("map")}}
- {{HTMLElement("del")}}, si su contenido es solo de frase
- {{HTMLElement("ins")}}, si su contenido es solo de frase
- {{HTMLElement("link")}}, si está presente el atributo [`itemprop`](/es/docs/Web/HTML/Reference/Global_attributes/itemprop)
- {{HTMLElement("map")}}, si su contenido es solo de frase
- {{HTMLElement("meta")}}, si está presente el atributo [`itemprop`](/es/docs/Web/HTML/Reference/Global_attributes/itemprop)

## Contenido incrustado

El contenido incrustado, un subconjunto del contenido de flujo, importa otro recurso o inserta contenido de otro lenguaje de marcado o namespace en el documento.

Los elementos de contenido incrustado son:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{MathMLElement("math")}}
- {{HTMLElement("object")}}
- {{HTMLElement("picture")}}
- {{SVGElement("svg")}}
- {{HTMLElement("video")}}

## Contenido interactivo

El contenido interactivo, un subconjunto del contenido de flujo, incluye elementos diseñados específicamente para la interacción del usuario.

Los elementos de contenido interactivo son:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Algunos elementos pertenecen a esta categoría solo bajo condiciones específicas:

- {{HTMLElement("a")}}, si está presente el atributo [`href`](/es/docs/Web/HTML/Reference/Elements/a#href)
- {{HTMLElement("audio")}}, si está presente el atributo [`controls`](/es/docs/Web/HTML/Reference/Elements/audio#controls)
- {{HTMLElement("img")}}, si está presente el atributo [`usemap`](/es/docs/Web/HTML/Reference/Elements/img#usemap)
- {{HTMLElement("input")}}, si el atributo [`type`](/es/docs/Web/HTML/Reference/Elements/input#type) no está en el estado oculto
- {{HTMLElement("object")}}, si está presente el atributo [`usemap`](/es/docs/Web/HTML/Reference/Elements/object#usemap)
- {{HTMLElement("video")}}, si está presente el atributo [`controls`](/es/docs/Web/HTML/Reference/Elements/video#controls)

## Contenido palpable

**El contenido palpable** es contenido que no está vacío ni oculto; es contenido que se renderiza y que es sustantivo. El contenido palpable no se usa para definir modelos de contenido, sino para establecer una regla general: los elementos cuyo modelo de contenido permite cualquier contenido de flujo o contenido de frase deben tener, al menos, un nodo en su contenido que sea contenido palpable y que no tenga especificado el atributo `hidden`.

Los elementos palpables son:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("div")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("form")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("object")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("search")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- [Elementos personalizados autónomos](/es/docs/Web/API/Web_components/Using_custom_elements)
- Texto sin formato que no sean [espacios en blanco](/es/docs/Glossary/Whitespace) entre elementos

Algunos elementos pertenecen a esta categoría solo bajo condiciones específicas:

- {{HTMLElement("audio")}}, si está presente el atributo [`controls`](/es/docs/Web/HTML/Reference/Elements/audio#controls)
- {{HTMLElement("dl")}}, si sus elementos hijos incluyen al menos un grupo nombre-valor
- {{HTMLElement("input")}}, si el atributo [type](/es/docs/Web/HTML/Reference/Elements/input#type) no está en el estado oculto
- {{HTMLElement("ol")}}, si sus elementos hijos incluyen al menos un elemento {{HTMLElement("li")}}
- {{HTMLElement("ul")}}, si sus elementos hijos incluyen al menos un elemento {{HTMLElement("li")}}

## Elementos sin categoría

Varios elementos no son miembros de _ninguna_ categoría de contenido. Entre ellos:

- {{HTMLElement("caption")}}
- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("dd")}}
- {{HTMLElement("dt")}}
- {{HTMLElement("figcaption")}}
- {{HTMLElement("head")}}
- {{HTMLElement("html")}}
- {{HTMLElement("legend")}}
- {{HTMLElement("li")}}
- {{HTMLElement("optgroup")}}
- {{HTMLElement("option")}}
- {{HTMLElement("param")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rtc")}}
- {{HTMLElement("source")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tfoot")}}
- {{HTMLElement("th")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("track")}}

## Elementos de soporte de scripts

**Los elementos de soporte de scripts** son elementos que no contribuyen directamente a la salida renderizada del documento. En cambio, sirven para dar soporte a los scripts, ya sea conteniendo o especificando directamente el código del script, o especificando datos que los scripts utilizarán. Casi todos los elementos, incluidos aquellos que solo aceptan elementos específicos (como {{HTMLElement("ul")}}, que acepta elementos {{HTMLElement("li")}}), pueden contener elementos de soporte de scripts.

Los elementos de soporte de scripts son:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Contenido asociado a formularios

El contenido asociado a formularios es un subconjunto del contenido de flujo compuesto por elementos que tienen un formulario propietario y pueden usarse en cualquier lugar donde se espere contenido de flujo. Un formulario propietario es el elemento {{HTMLElement("form")}} que lo contiene, o el `<form>` cuyo `id` se especifica en el atributo `form` del elemento.

Los elementos asociados a formularios son:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("img")}}

Esta categoría contiene varias subcategorías:

- enumerado
  - : Elementos que aparecen en las colecciones {{domxref("HTMLFormElement.elements")}} y {{domxref("HTMLFieldSetElement.elements")}}. Incluye {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
- enviables
  - : Elementos que se pueden usar para construir el conjunto de datos del formulario cuando este se envía. Incluye {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
- reiniciables
  - : Elementos que pueden verse afectados cuando se reinicia un formulario. Incluye {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
- que heredan autocapitalize y autocorrect
  - : Elementos que heredan los atributos [`autocapitalize`](/es/docs/Web/HTML/Reference/Global_attributes/autocapitalize) y [`autocorrect`](/es/docs/Web/HTML/Reference/Global_attributes/autocorrect) de su formulario propietario. Incluye {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
- etiquetables
  - : Elementos que se pueden asociar con elementos {{HTMLElement("label")}}. Incluye {{HTMLElement("button")}}, {{HTMLElement("input")}} (todos los tipos salvo `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.

## Modelo de contenido transparente

Además de las categorías de contenido enumeradas, el modelo de contenido de un elemento también se puede definir como "transparente". Si el contenido permitido del elemento X es "transparente", entonces se consulta al padre de X. Se intersecciona el contenido permitido del padre de X con las categorías de contenido de X, y el resultado es lo que significa "transparente" en este contexto. Si el padre de X también tiene un modelo de contenido transparente, continuamos subiendo por el árbol hasta encontrar un modelo de contenido que no sea transparente. Cuando no existe tal padre, "transparente" significa "contenido de flujo".

Por ejemplo, el elemento {{HTMLElement("ruby")}} acepta contenido de frase. El elemento {{HTMLElement("ins")}} pertenece a la categoría de contenido de frase cuando solo contiene contenido de frase. Por lo tanto, un elemento {{HTMLElement("ins")}} se puede colocar dentro de un elemento {{HTMLElement("ruby")}}. El contenido permitido del elemento `<ins>` es "transparente", lo que, al estar anidado en `<ruby>`, significa "contenido de frase". Sin embargo, los elementos {{HTMLElement("rt")}} no son contenido de frase. Por lo tanto, un elemento {{HTMLElement("rt")}} no se puede anidar dentro de este elemento `<ins>`, aunque tanto `<rt>` como `<ins>` puedan estar dentro de `<ruby>`, y `<ins>` sea "transparente".

```html example-bad
<ruby>
  Texto antes
  <ins>
    <!-- No válido: rt no puede colocarse dentro de ins aquí -->
    <rt>Pronunciación</rt>
  </ins>
</ruby>
```

```html example-good
<ruby>
  Texto antes
  <!-- Válido: ins puede estar dentro de ruby, y rt puede estar dentro de ruby -->
  <ins>Texto insertado</ins>
  <rt>Pronunciación</rt>
</ruby>
```

```html example-good
<ruby>
  Texto antes
  <!-- Válido: rt puede estar dentro de ruby, y ins puede estar dentro de rt -->
  <rt><ins>Pronunciación</ins></rt>
</ruby>
```

Transparente es un _modelo de contenido_, no una _categoría de contenido_, así que solo define lo que un elemento puede contener, no dónde se puede colocar el elemento. Es decir, al determinar la validez de los elementos hijos de un elemento, no puedes "ver a través" de los hijos transparentes. Por ejemplo, un elemento {{HTMLElement("ul")}} solo acepta elementos {{HTMLElement("li")}} y elementos de soporte de scripts, y no permite `<del>` ni `<ins>`, aunque el `<del>` solo contenga elementos `<li>`.

```html example-bad
<ul>
  <del>
    <li>Naranjas</li>
    <li>Papel higiénico</li>
  </del>
  <li>Pasta de dientes</li>
</ul>
```

```html example-good
<ul>
  <li><del>Naranjas</del></li>
  <li><del>Papel higiénico</del></li>
  <li>Pasta de dientes</li>
</ul>
```
