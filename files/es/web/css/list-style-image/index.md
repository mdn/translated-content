---
title: list-style-image
slug: Web/CSS/list-style-image
---

{{ CSSRef() }}

### Resumen

La imagen de lista (`list-style-image`) define la imagen que será utilizada como marcador del [listado](/es/HTML/Element/li).

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("none", "ninguno") }}
- Se aplica a: elementos con 'display: list-item'
- {{ Cssxref("inheritance", "Valor heredado") }}: Sí
- Porcentajes: n/a
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculado") }}: URI absoluta o `none`

### Sintaxis

```
list-style-image: <uri> | none | inherit
```

### Valores

- `uri`
  - : directorio donde se encuentra la imagen que se utilizará como marcador.

## Ejemplos

### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### CSS

```css
ul {
  list-style-image: url("starsolid.gif");
}
```

### Result

{{EmbedLiveSample('Ejemplos')}}

### Especificaciones

- [CSS 1](http://www.w3.org/TR/CSS1#list-style-image)
- [CSS 2.1](http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-image)
- [css3-lists](http://www.w3.org/TR/css3-lists/#list-style-image)

### Compatibilidad con navegadores

### Ver también

{{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-position") }}
