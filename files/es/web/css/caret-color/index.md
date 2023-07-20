---
title: caret-color
slug: Web/CSS/caret-color
---

{{CSSRef}}

La propiedad CSS **`caret-color`** especifica el color del cursor de texto, el indicador visible del punto de inserción en un elemento donde el usuario puede introducir texto u otro contenido.

```css
/* Palabras clave */
caret-color: auto;
color: transparent;
color: currentColor;

/* Valores <color> */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0, 200, 0);
caret-color: hsla(228, 4%, 24%, 0.8);
```

> **Nota:** Los agentes usuario podrían incluir otras cosas que consideren "cursor de texto". Por ejemplo, puede haber una "cursor para navegación", que actúa de forma similar al cursor de texto pero puede ser movido en textos no editables. Por otro lado, la imagen de cursor mostrada cuando se coloca el cursor del ratón sobre texto cuando la propiedad {{cssxref("cursor")}} es `auto`, o sobre un elemento donde la propiedad `cursor` es `text` o `vertical-text`, aunque a veces se parezca al cursor de texto, no lo es (es un cursor del ratón). En algunos navegadores que no soportan esta propiedad, el color del cursor de texto no está asociado al color de la fuente.

{{cssinfo}}

## Sintaxis

### Valores

- `auto`

  - : Los agentes usuarios deberán usar `currentcolor`, pero podrían ajustar automáticamente el color del cursor para asegurar la correcta visibilidad y contraste con el contenido alrededor, posiblemente con base en `currentcolor`, el fondo, sombras, etc.

    > **Nota:** Aunque los agentes usuarios puedan usar `currentcolor` (que usualmente es animable) para el valor `auto`, `auto` no es interpolado en las transiciones/animaciones.

- {{cssxref("&lt;color&gt;")}}
  - : Color del cursor de texto.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<input />
```

### CSS

```css
input {
  caret-color: red;
}
```

### Resultado

{{EmbedLiveSample("Ejemplo", 300, 40)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
