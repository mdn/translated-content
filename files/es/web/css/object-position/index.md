---
title: object-position
slug: Web/CSS/object-position
---

{{CSSRef}}

## Summary

La propiedad **`object-position`** determina el alineamiento del elemento dentro de la caja.

{{cssinfo}}

## Sintaxis

```css
/* <position> valores */
object-position: 100px 50px;

/* Valores globales */
object-position: inherit;
object-position: initial;
object-position: unset;
```

### Valores

- `<position>`
  - : {{ cssxref("&lt;position&gt;") }}, este es un valor de cuatro que representa una posición en 2D con respecto a los bordes de la caja. Posiciones Relativas o absolutas pueden presentar compensaciones. Tenga en cuenta que la posición puede ser establecida fuera de la caja.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

#### Ejemplo de HTML

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### Ejemplo de CSS

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

#### Resultado

{{ EmbedLiveSample('Example', 360, 300) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Contenido relacionado

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
