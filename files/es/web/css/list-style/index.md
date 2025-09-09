---
title: list-style
slug: Web/CSS/list-style
---

{{ CSSRef() }}

## Resumen

La propiedad de estilo de lista (`list-style`) permite definir de golpe todos los parámetros: {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-image") }}, y {{ Cssxref("list-style-position") }}.

- {{ Cssxref("initial", "Valor inicial") }}: ver propiedades individuales
- Se aplica a: elementos con 'display: list-item'
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: N/A
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculado") }}: ver propiedades individuales

## Sintaxis

list-style: [ list-style-type || list-style-position || list-style-image ] | inherit

### Valores

ver {{ Cssxref("list-style-type", "list-style-type") }}.

ver {{ Cssxref("list-style-image", "list-style-image") }}.

ver {{ Cssxref("list-style-position", "list-style-position") }}.

## Ejemplos

### HTML

```html
List 1
<ul class="one">
  <li>List Item1</li>
  <li>List Item2</li>
  <li>List Item3</li>
</ul>
List 2
<ul class="two">
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
</ul>
```

### CSS

```css
.one {
  list-style: circle;
}

.two {
  list-style: square inside;
}
```

### Resultado

{{EmbedLiveSample('Ejemplos')}}

## Especificaciones

- [CSS 1 (en)](https://www.w3.org/TR/CSS1#list-style)
- [CSS 2.1 (en)](https://www.w3.org/TR/CSS21/generate.html#propdef-list-style)
- [css3-lists (en)](https://www.w3.org/TR/css3-lists/#list-style)

## Compatibilidad con navegadores

### Ver también

{{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-image") }}, {{ Cssxref("list-style-position")}}
