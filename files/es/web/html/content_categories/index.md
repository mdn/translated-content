---
title: Categorías de contenido
slug: Web/HTML/Content_categories
---

Cada elemento [HTML](/es/docs/Web/HTML) es miembro de una o más **categorías de contenido** — estas categorías agrupan elementos que comparten características comunes. Esta es una agrupación flexible (en realidad no crea una relación entre los elementos de estas categorías), pero ayuda a definir y describir el comportamiento compartido de las categorías y sus reglas asociadas, especialmente cuando te encuentras con sus intrincados detalles. También es posible que los elementos no sean miembros de _ninguna_ de estas categorías.

Hay tres tipos de categorías de contenido:

- Categoría de contenido principal — que describe reglas comunes compartidas por muchos elementos.
- Categorías de contenido relacionado con formularios — que describe reglas comunes a los elementos relacionados con formularios.
- Categorías de contenido específico — que describe categorías raras compartidas solo por unos pocos elementos, a veces, solo en un contexto específico.

> **Nota:** Una explicación comparativa más detallada de estas categorías de contenido y su funcionalidad está más allá del alcance de este artículo; para eso, posiblemente desees leer las [partes relevantes de la especificación HTML](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content).

[![Un diagrama de Venn que muestra cómo se interrelacionan las distintas categorías de contenido. Las siguientes secciones explican estas relaciones en texto.](content_categories_venn.png?size=webview)](content_categories_venn.png)

## Categorías de contenido principal

### Contenido de metadatos

Los elementos pertenecientes a la categoría _contenido de metadatos_ modifican la presentación o el comportamiento del resto del documento, establecen enlaces a otros documentos o transmiten otra información _fuera de banda_.

Los elementos que pertenecen a esta categoría son {{HTMLElement("base")}}, {{deprecated_inline}}{{HTMLElement("command")}}, {{HTMLElement("link")}}, {{HTMLElement("meta")}}, {{HTMLElement("noscript")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} y {{HTMLElement("title")}}.

### Flujo de contenido

Los elementos que pertenecen a la categoría de flujo de contenido suelen contener texto o contenido incrustado. Son: {{HTMLElement("a")}}, {{HTMLElement("abbr")}}, {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}},{{HTMLElement("bdo")}}, {{HTMLElement("bdi")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{deprecated_inline}}{{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("del")}}, {{HTMLElement("details")}}, {{HTMLElement("dfn")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figure")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("ins")}}, {{HTMLElement("kbd")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("main")}}, {{HTMLElement("map")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("menu")}}, {{HTMLElement("meter")}}, {{HTMLElement("nav")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("ol")}}, {{HTMLElement("output")}}, {{HTMLElement("p")}}, {{HTMLElement("picture")}}, {{HTMLElement("pre")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("section")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("table")}}, {{HTMLElement("template")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("ul")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} and Text.

Algunos otros elementos pertenecen a esta categoría, pero solo si se cumple una condición específica:

- {{HTMLElement("area")}}, si es descendiente de un elemento {{HTMLElement("map")}}
- {{HTMLElement("link")}}, si está presente el atributo [itemprop](/es/docs/HTML/Global_attributes#attr-itemprop)
- {{HTMLElement("meta")}}, si está presente el atributo [itemprop](/es/docs/HTML/Global_attributes#attr-itemprop)
- {{HTMLElement("style")}}, si está presente el atributo {{deprecated_inline()}} [`scoped`](/es/docs/Web/HTML/Element/style#scoped)

### Contenido de sección

Los elementos que pertenecen al modelo de contenido de secciones crean una [sección en el esquema actual](/es/docs/Sections_and_Outlines_of_an_HTML5_document) que define el alcance de los elementos {{HTMLElement("header")}}, {{HTMLElement("footer")}} y [Contenido del encabezado](#contenido_del_encabezado).

Los elementos que pertenecen a esta categoría son {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} y {{HTMLElement("section")}}.

> **Nota:** No confundas este modelo de contenido con la categoría de [seccionado raíz](/es/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Sectioning_roots), que aísla su contenido del esquema regular.

### Contenido del encabezado

El contenido del encabezado define el título de una sección, ya sea que esté marcado por un elemento [Contenido de sección](#contenido_de_sección) explícito o definido implícitamente por el contenido del encabezado en sí mismo.

Los elementos que pertenecen a esta categoría son {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}} y {{HTMLElement("hgroup")}}.

> **Nota:** Aunque es probable que tenga contenido de encabezado, {{HTMLElement("header")}} no es contenido de encabezado en sí mismo.

> **Nota:** El elemento {{HTMLElement("hgroup")}} se eliminó de la especificación HTML del W3C antes de que se finalizara HTML 5, pero sigue siendo parte de la especificación WHATWG y la mayoría de los navegadores lo admiten por lo menos parcialmente.

### Contenido de redacción

El contenido de redacción define el texto y el marcado que contiene. Las series de contenido de redacción forman párrafos.

Los elementos que pertenecen a esta categoría son: {{HTMLElement("abbr")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{deprecated_inline}}{{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("dfn")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("kbd")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("meter")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("picture")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} y texto sin formato (no solo consiste de espacios en blanco).

Algunos otros elementos pertenecen a esta categoría, pero solo si se cumple una condición específica:

- {{HTMLElement("a")}}, si solo incluye contenido de redacción
- {{HTMLElement("area")}}, si es descendiente de un elemento {{HTMLElement("map")}}
- {{HTMLElement("del")}}, si solo incluye contenido de redacción
- {{HTMLElement("ins")}}, si solo incluye contenido de redacción
- {{HTMLElement("link")}}, si está presente el atributo [itemprop](/es/docs/HTML/Global_attributes#itemprop)
- {{HTMLElement("map")}}, si solo incluye contenido de redacción
- {{HTMLElement("meta")}}, si está presente el atributo [itemprop](/es/docs/HTML/Global_attributes#itemprop)

### Contenido incrustado

El contenido incrustado importa otro recurso o inserta contenido de otro lenguaje de marcado o espacio de nombres en el documento. Los elementos que pertenecen a esta categoría incluyen: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{HTMLElement("picture")}}, {{SVGElement("svg")}} y {{HTMLElement("video")}}.

### Contenido interactivo

El contenido interactivo incluye elementos diseñados específicamente para la interacción del usuario. Los elementos que pertenecen a esta categoría incluyen: {{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
Algunos elementos pertenecen a esta categoría solo bajo condiciones específicas:

- {{HTMLElement("audio")}}, si está presente el atributo [`controls`](/es/docs/Web/HTML/Element/audio#controls)
- {{HTMLElement("img")}}, si está presente el atributo [`usemap`](/es/docs/Web/HTML/Element/img#usemap)
- {{HTMLElement("input")}}, si el atributo [`type`](/es/docs/Web/HTML/Element/input#type) no está en estado oculto
- {{HTMLElement("menu")}}, si el atributo [`type`](/es/docs/Web/HTML/Element/menu#type) está en la barra de estado de herramientas
- {{HTMLElement("object")}}, si está presente el atributo [`usemap`](/es/docs/Web/HTML/Element/object#usemap)
- {{HTMLElement("video")}}, si está presente el atributo [`controls`](/es/docs/Web/HTML/Element/video#controls)

### Contenido palpable

El contenido es palpable cuando no está vacío ni oculto; es contenido que se presenta y es sustantivo. Los elementos cuyo modelo es flujo de contenido o contenido de redacción deben tener, por lo menos, un nodo que sea palpable.

### Contenido asociado a formulario

El contenido asociado a un formulario comprende elementos que tienen un formulario de propietario, expuesto mediante un atributo **form**. El propietario de un formulario es el elemento {{HTMLElement("form")}} que lo contiene o el elemento cuya identificación se especifica en el atributo **form**.

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{deprecated_inline()}} {{HTMLElement("keygen")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Esta categoría contiene varias subcategorías:

- enumerado
  - : Elementos que se enumeran en las colecciones IDL {{DOMxRef("HTMLFormElement.elements", "form.elements")}} y `fieldset.elements`. Contiene: {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{deprecated_inline()}} {{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
- etiquetable
  - : Elementos que se pueden asociar con elementos {{HTMLElement("label")}}. Contiene {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
- transmisible
  - : Elementos que se pueden utilizar para construir el conjunto de datos del formulario cuando se envía el formulario. Contiene {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}} y {{HTMLElement("textarea")}}.
- reiniciable
  - : Elementos que se pueden ver afectados cuando se restablece o reinicia un formulario. Contiene {{HTMLElement("input")}}, {{deprecated_inline()}}{{HTMLElement("keygen")}}, {{HTMLElement("output")}},{{HTMLElement("select")}} y {{HTMLElement("textarea")}}.

## Categorías secundarias

Hay algunas clasificaciones secundarias de elementos que también puede ser útil tener en cuenta.

### Elementos de soporte de scripts

Los **elementos de soporte de scripts** son elementos que no contribuyen directamente a la salida renderizada de un documento. En cambio, sirven para admitir scripts, ya sea conteniendo o especificando directamente el código del script, o especificando datos que serán utilizados por los scripts.

Los elementos que admiten scripts son:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Modelo de contenido transparente

Si un elemento tiene un modelo de contenido transparente, entonces su contenido debe estar estructurado de manera que sea HTML 5 válido, incluso si el elemento transparente fuera eliminado y reemplazado por elementos secundarios.

Por ejemplo, los elementos {{HTMLElement("del")}} y {{HTMLElement("ins")}} son transparentes:

```
<p>Sostenemos que estas verdades son <del><em>sagradas e innegablemente</em></del> <ins>evidentes por sí mismas</ins>.</p>
```

Si esos elementos fueran eliminados, este fragmento seguiría siendo HTML válido (si no es Español correcto).

```
<p>Sostenemos que estas verdades son <del><em>sagradas e innegablemente</em></del> <ins>evidentes por sí mismas</ins>.</p>
```

## Otros modelos de contenido

Seccionado raíz.
