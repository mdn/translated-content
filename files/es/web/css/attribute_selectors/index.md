---
title: Selectores de atributo
slug: Web/CSS/Attribute_selectors
---

{{CSSRef}}

El **selector de atributos** CSS coincide con los elementos en función de la presencia o el valor de un atributo determinado.

```css
/* Elementos <a> con un atributo title */
a[title] {
  color: purple;
}

/* Elementos <a> con un href que coincida con "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* Elementos <a> con un href que contenga "example" */
a[href*="example"] {
  font-size: 2em;
}

/* Elementos <a> con un href que comience con "#" */
a[href^="#"] {
  color: #001978;
}

/* Elementos <a> con un href que termine en ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* Elementos <a> cuyo atributo class contenga la palabra "logo" */
a[class~="logo"] {
  padding: 2px;
}
```

- `[attr]`
  - : Selecciona los elementos que tienen el atributo _attr_.
- `[attr=value]`
  - : Selecciona los elementos cuyo atributo _attr_ tenga exactamente el valor _value_.
- `[attr~=value]`
  - : Selecciona los elementos cuyo atributo _attr_ tenga por valor una lista de palabras separadas por espacios, una de las cuales sea _value_.
- `[attr|=value]`
  - : Selecciona los elementos cuyo atributo _attr_ tenga exactamente el valor _value_ o empiece por _value_ seguido de un guión `-` (U+002D). Se puede usar para coincidencias de subcódigos en otros idiomas.
- `[attr^=value]`
  - : Selecciona los elementos cuyo atributo _attr_ tenga un valor prefijado por _value_.
- `[attr$=value]`
  - : Selecciona los elementos cuyo atributo _attr_ cuyo valor tiene el sufijo (seguido) de _value_.
- `[attr*=value]`
  - : Selecciona los elementos cuyo atributo _attr_ tenga un valor que contenga _value_.
- `[attr operator value i]`
  - : Agregar una `i` (o `I`) antes del corchete de cierre hace que el valor sea comparado sin distinguir entre mayúsculas y minúsculas (para caracteres dentro del rango ASCII).
- `[attr operator value s]` {{Experimental_Inline}}
  - : Agregar una `s` (o `S`) antes del corchete de cierre hace que el valor sea comparado distinguiendo entre mayúsculas y minúsculas (para caracteres dentro del rango ASCII).

## Ejemplos

### Enlaces

#### CSS

```css
a {
  color: blue;
}

/* Enlaces internos, comenzando con "#" */
a[href^="#"] {
  background-color: gold;
}

/* Enlaces con "example" en cualquier parte de la URL */
a[href*="example"] {
  background-color: silver;
}

/* Enlaces con "insensitive" en cualquier parte de la URL,
   independientemente de las mayúsculas */
a[href*="insensitive" i] {
  color: cyan;
}

/* Enlaces que terminan en ".org" */
a[href$=".org"] {
  color: red;
}
```

#### HTML

```html
<ul>
  <li><a href="#internal">Enlace interno</a></li>
  <li><a href="http://example.com">Enlace de ejemplo</a></li>
  <li><a href="#InSensitive">Enlace interno insensible Insensitive</a></li>
  <li><a href="http://example.org">Ejemplo de enlace .org</a></li>
</ul>
```

#### Resultado

{{EmbedLiveSample('Enlaces')}}

### Idiomas

#### CSS

```css
/* Todos los divs con un atributo `lang` están en negrita. */
div[lang] {
  font-weight: bold;
}

/* Todos los divs en inglés de EE. UU. son azules. */
div[lang~="en-us"] {
  color: blue;
}

/* Todos los divs en portugués son verdes. */
div[lang="pt"] {
  color: green;
}

/* Todos los divs en chino son rojos, ya sean
   simplificados (zh-CN) o tradicionales (zh-TW). */
div[lang|="zh"] {
  color: red;
}

/* Todos los divs con `data-lang` Traditional Chinese
   son de color púrpura. */
/* Nota: también puede usar atributos con guiones
   sin comillas dobles */
div[data-lang="zh-TW"] {
  color: purple;
}
```

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界您好！</div>
<div lang="zh-TW">世界您好！</div>
<div data-lang="zh-TW">?世界您好！</div>
```

#### Resultado

{{EmbedLiveSample('Idiomas')}}

### Listas Ordenadas

{{SeeCompatTable}}

La especificación HTML requiere que el atributo [`type`](/es/docs/Web/HTML/Element/input#type) distinga entre mayúsculas y minúsculas debido a que se usa principalmente en el elemento {{HTMLElement("input")}}, tratando de usar selectores de atributos con el atributo [`type`](/es/docs/Web/HTML/Element/ol#type) de una {{HTMLElement("ol", "lista ordenada")}} no funciona sin el modificador de mayúsculas y minúsculas.

#### CSS

```css
/*
Los tipos de lista requieren poder distinguir entre mayúsculas
y minúsculas debido al peculiar comportamiento que tiene HTML
con el atributo "type"
*/

ol[type="a"] {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="a" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="A" s] {
  list-style-type: upper-alpha;
  background: lime;
}
```

#### HTML

```html
<ol type="A">
  <li>Example list</li>
</ol>
```

#### Result

{{EmbedLiveSample("HTML_ordered_lists")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Seleccionando un solo elemento:{{domxref("Document.querySelector()")}}, {{domxref("DocumentFragment.querySelector()")}}, o {{domxref("Element.querySelector()")}}
- Seleccionar todos los elementos coincidentes:{{domxref("Document.querySelectorAll()")}}, {{domxref("DocumentFragment.querySelectorAll()")}}, o {{domxref("Element.querySelectorAll()")}}
- Todos los métodos anteriores se implementan en base a {{domxref("ParentNode")}} mixin; vea {{domxref("ParentNode.querySelector()")}} y {{domxref("ParentNode.querySelectorAll()")}}
