---
title: list-style-position
slug: Web/CSS/list-style-position
---

{{ CSSRef() }}

### Resumen

La posición de la lista (`list-style-position`) especifica donde será colocado el marcador de la lista en relación a la caja principal.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("outside", "outside (afuera)") }}
- Se aplica a: elementos con 'display: list-item'
- {{ Cssxref("inheritance", "Valor heredado") }}: Sí
- Porcentajes: n/a
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculado") }}: como especificado

### Sintaxis

```
list-style-position: inside | outside | inherit
```

### Valores

- `outside`
  - : el marcador se encuentra fuera de la caja principal.
- `inside`
  - : el marcador es la primera caja en línea dentro de la caja principal, después de la cual fluye el resto de los elementos.

## Ejemplos

### HTML

```html
<ul class="one">
  List 1
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<ul class="two">
  List 2
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<ul class="three">
  List 3
  <li>List Item 3-1</li>
  <li>List Item 3-2</li>
  <li>List Item 3-3</li>
  <li>List Item 3-4</li>
</ul>
```

### CSS

```css
.one {
  list-style: square inside;
}

.two {
  list-style-position: outside;
  list-style-type: circle;
}

.three {
  list-style-image: url("starsolid.gif");
  list-style-position: inherit;
}
```

### Result

{{EmbedLiveSample("Ejemplos","200","420")}}

### Especificaciones

- [CSS 1](http://www.w3.org/TR/CSS1#list-style-position)
- [CSS 2.1](http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position)
- [css3-lists](http://www.w3.org/TR/css3-lists/#list-style-position)

### Compatibilidad con navegadores

### Ver también

{{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-image") }}
