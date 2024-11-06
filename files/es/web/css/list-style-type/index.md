---
title: list-style-type
slug: Web/CSS/list-style-type
---

{{ CSSRef() }}

### Resumen

El {{ Cssxref("list-style-type", "tipo de estilo de lista") }} especifica la apariencia del [listado](/es/HTML/Element/li).

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("disc", "disco/punto") }}
- Se aplica a: elementos con 'display: list-item'
- {{ Cssxref("inheritance", "Valor heredado") }}: Sí
- Porcentajes: n/a
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculado") }}: según se especificó

### Sintaxis

```
 list-style-type:  <std-list-style-name> | {{ Cssxref("none") }} | {{ Cssxref("inherit") }} ;
```

### Valores

- \<std-list-style-name>
  - : un nombre de estilo de lista estándar: `disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-latin, upper-latin, armenian, georgian, lower-alpha, upper-alpha`
- `disc`
  - : un disco.
- `circle`
  - : un círculo.
- `square`
  - : un cuadrado.
- `decimal`
  - : números decimales empezando con 1.
- `decimal-leading-zero`
  - : números decimales empezando eventualmente por ceros (por ejemplo: 01, 02, 03, ..., 98, 99).
- `lower-roman`
  - : números romanos en minúscula (i, ii, iii, iv, v, etc.).
- `upper-roman`
  - : números romanos en mayúscula (I, II, III, IV, V, etc.).
- `lower-greek`
  - : letras griegas en minúscula alfa/α, beta/β, gamma/γ, ...
- `lower-latin`
  - : letras ASCII en minúscula (a, b, c, ... z).
- `upper-latin`
  - : letras ASCII en mayúscula (A, B, C, ... Z).
- `armenian`
  - : numeración armenia tradicional (ayb/ayp, ben/pen, gim/keem, ...).
- `georgian`
  - : numeración georgiana tradicional (an, ban, gan, ..., he, tan, in, in-an, ...).
- `lower-alpha`
  - : es igual que `lower-latin`.
- `upper-alpha`
  - : es igual que `upper-latin`.
- `none`
  - : nada.

## Ejemplos

### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* or use the shortcut "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}
```

### HTML

```html
<ol class="normal">
  List 1
  <li>Hello</li>
  <li>World</li>
  <li>What's up?</li>
</ol>

<ol class="shortcut">
  List 2
  <li>Looks</li>
  <li>Like</li>
  <li>The</li>
  <li>Same</li>
</ol>
```

### Result

{{EmbedLiveSample("Ejemplos","200","300")}}

### Notas

Ésta especificación no define el comportamiento en el caso de una lista con más elementos que la cantidad de letras del alfabeto utilizado. Por ejemplo, después de 26 letras, el resultado con `lower-latin` no es definido (y continuará como: AA, AB, AC,...). Por eso, para listas largas, es recomendable utilizar números.

### Especificaciones

- [CSS 1](http://www.w3.org/TR/CSS1#list-style-type)
- [CSS 2.1](http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-type)
- [css3-lists](http://www.w3.org/TR/css3-lists/#list-style-type)

### Compatibilidad con navegadores

### Ver también

{{ Cssxref("list-style") }}, {{ Cssxref("list-style-image") }}, {{ Cssxref("list-style-position") }}
