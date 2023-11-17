---
title: width
slug: Web/CSS/width
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`width`** establece el ancho de un elemento.
Por defecto, establece el ancho del [área de contenido](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area),
pero si el {{cssxref("box-sizing")}} se establece en `border-box`,
establece el ancho del [área del borde](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/width.html")}}

Las propiedades {{cssxref("min-width")}} y {{cssxref("max-width")}} sobreescriben el `width`.

## Sintaxis

```css
/* Valores en <length> */
width: 300px;
width: 25em;

/* Valores en <percentage> */
width: 75%;

/* Valores en palabras clave */
width: max-content;
width: min-content;
width: fit-content(20em);
width: auto;

/* Valores globales */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Valores

- {{cssxref("length")}}
  - : Define el ancho como un valor absoluto.
- {{cssxref("percentage")}}
  - : Especifica el ancho como porcentaje de la anchura del bloque contenedor.
- `auto`
  - : El navegador calculará y seleccionará el ancho para el elemento especificado.
- `max-content`
  - : El ancho preferido intrínseco.
- `min-content`
  - : EL ancho mínimo intrínseco.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Utiliza la fórmula de `fit-content` con el espacio disponible reemplazado por el argumento especificado, ejemplo, `min(max-content, max(min-content, <longitud-porcentaje>))`.

## Problemas de accesibilidad

Asegúrese de que los elementos establecidos con un `width` no trunquen y/o oculten otros contenidos cuando se amplía la página para aumentar el tamaño del texto.

- [MDN Entendiendo WCAG, Pauta 1.4](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprender el criterio de éxito 1.4.4 | W3C Entendiendo WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Definición formal

{{CSSInfo}}

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Anchura predeterminada

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">
  La comunidad de Mozilla produce una gran cantidad de software excelente.
</p>
```

{{EmbedLiveSample('Default_width', '500px', '64px')}}

### Ejemplo usando píxeles y ems

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Ancho medido en px</div>
<div class="em_length">Ancho medido en em</div>
```

{{EmbedLiveSample('', '500px', '64px')}}

### Ejemplo usando porcentaje

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Ancho en porcentaje</div>
```

{{EmbedLiveSample('', '500px', '64px')}}

### Ejemplo usando "max-content"

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit usa un nombre no estándar */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
```

```html
<p class="maxgreen">
  La comunidad de Mozilla produce una gran cantidad de software excelente.
</p>
```

{{EmbedLiveSample('', '500px', '64px')}}

### Ejemplo usando "min-content"

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}
```

```html
<p class="minblue">
  La comunidad de Mozilla produce una gran cantidad de software excelente.
</p>
```

{{EmbedLiveSample('', '500px', '155px')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [El modelo de caja](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- Las propiedades lógicas asignadas: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
