---
title: ':first'
slug: Web/CSS/:first
tags:
  - '@page'
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: Web/CSS/:first
---
{{CSSRef}}La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) `:first` de [CSS](/es/docs/Web/CSS), utilizada con la [regla-at](/es/docs/Web/CSS/At-rule) {{cssxref("@page")}}, representa la primera página de un documento impreso.

```css
/* Selecciona la primera página al imprimir */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> **Nota:** No puede cambiar todas las propiedades de CSS con esta pseudoclase. Solo puede cambiar los márgenes, {{cssxref("orphans")}}, {{cssxref("widows")}} y saltos de página del documento. Además, solo puede usar unidades de [longitud absoluta](/es/docs/Web/CSS/length#Absolute_length_units) al definir los márgenes. Todas las otras propiedades serán ignoradas.

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<p>Primera página.</p>
<p>Segunda página.</p>
<button>Imprimir!</button>
```

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### JavaScript

```js
document.querySelector("button").onclick = function () {
  window.print();
}
```

### Resultado

Presione el botón "Imprimir!" para imprimir el ejemplo. Las palabras en la primera página deben estar en algún lugar del centro, mientras que otras páginas tendrán sus contenidos en la posición predeterminada.

{{ EmbedLiveSample('Ejemplo', '80%', '150px') }}

## Especificaciones

| Especificación                                                                       | Estado                                   | Comentario          |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{SpecName('CSS3 Paged Media', '#left-right-first', ':first')}} | {{Spec2('CSS3 Paged Media')}} | Ningún cambio.      |
| {{SpecName('CSS2.1', 'page.html#page-selectors', ':first')}}     | {{Spec2('CSS2.1')}}                 | Definición Inicial. |

## Compatibilidad con navegadores

{{Compat("css.selectors.first")}}

## Ver también

- {{Cssxref("@page")}}
- Otras pseudo-clases relacionadas con página: {{Cssxref(":left")}}, {{Cssxref(":right")}}
