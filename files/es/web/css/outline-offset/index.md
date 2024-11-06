---
title: outline-offset
slug: Web/CSS/outline-offset
---

{{CSSRef}}

## Resumen

La propiedad CSS **`outline-offset`** es usada para establecer el espacio entre un contorno {{ cssxref("outline") }} y el límite o borde de un elemento. Un contorno es una línea que se dibuja al rededor de los elementos, fuera de los límites de su borde.

{{cssinfo}}

El espacio será transparente (el elemento padre determinará el fondo).

## Sintaxis

```css
/* Valores <length> */
outline-offset: 3px;
outline-offset: 0.2em;

/* Valores globales */
outline-offset: inherit;
outline-offset: initial;
outline-offset: unset;
```

### Valores

- `<length>`
  - : La anchura del espacio. Ver {{cssxref("&lt;length&gt;")}} para unidades posibles. Valores negativos colocan el borde dentro del elemento.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
p {
  outline: dashed thin;
  /* Mueve el contorno 10px lejos del borde */
  outline-offset: 10px;
  border: 1px solid black;
}
```

Html

```html
<p>outline: offset 10px. Border is solid and outline is dashed</p>
```

El código anterior producirá este efecto:

{{ EmbedLiveSample('Examples', '', '', '') }}

#### Otro ejemplo

```html hidden
<p>
  <span style="outline-offset: 1px; outline: green solid 3px;">
    <span style="outline-offset: 1px; outline: blue solid 3px;">
      outline: multiple offsets;
    </span>
  </span>
</p>
```

{{EmbedLiveSample}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
