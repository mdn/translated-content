---
title: outline
slug: Web/CSS/outline
---

La propiedad [CSS](/es/docs/Web/CSS) **`outline`** es una [forma reducida](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) para establecer una o más de las propiedades individuales de contorno {{cssxref("outline-style")}}, {{cssxref("outline-width")}} y {{cssxref("outline-color")}} en una sola declaración. En la mayoría de los casos el uso de este atajo es preferible y más conveniente.

{{InteractiveExample("CSS Demo: outline")}}

```css interactive-example-choice
outline: solid;
```

```css interactive-example-choice
outline: dashed red;
```

```css interactive-example-choice
outline: 1rem solid;
```

```css interactive-example-choice
outline: thick double #32a1ce;
```

```css interactive-example-choice
outline: 8px ridge rgba(170, 50, 220, 0.6);
border-radius: 2rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  padding: 0.75rem;
  width: 80%;
  height: 100px;
}
```

Al igual que con todas las propiedades abreviadas, cualquier subvalor omitido se establecerá en su valor inicial.

### Border vs outline

Los bordes y los contornos son muy similares. Sin embargo, los contornos difieren de los bordes de la siguiente manera:

- Los contornos no ocupan espacio, son dibujados por encima del elemento. Por lo tanto, su aparición u ocultamiento no causa un redibujado de las cajas. No suma en el tamaño de la caja y no hay movimiento o desplazamiento de los elementos como con {{cssxref("border")}}.
- Los contornos pueden no ser rectangulares. Si el elemento se distribuye en varias líneas, el contorno no forma un rectágulo para encerrar a todo el elemento. A **diferencia de los bordes**, el contorno no está abierto en algunos lados:

  ```html hidden
  <p>
    <span style="outline: 2px solid #666666;"
      >Ejemplo: contorno aplicado a<br />
      varias líneas</span
    >
  </p>

  <p>
    <span style="border: 2px solid #666666;"
      >Ejemplo: borde aplicado a<br />
      varias líneas</span
    >
  </p>
  ```

  {{EmbedLiveSample}}

{{cssinfo}}

## Sintaxis

```
/* style */
outline: solid;

/* color | style */
outline: #f66 dashed;

/* style | width */
outline: inset thick;

/* color | style | width */
outline: green solid 3px;

/* Global values */
outline: inherit;
outline: initial;
outline: unset;
```

### Valores

Uno, dos o tres valores, en orden arbitrario:

- `<outline-width>`
  - : Ver {{Cssxref("outline-width")}}.
- `<outline-style>`
  - : Ver {{Cssxref("outline-style")}}.
- `<outline-color>`
  - : Desde Gecko 1.9 (Firefox 3), es usado el valor de la propiedad {{Cssxref("color")}} del elemento (color de primer plano). Ver {{Cssxref("outline-color")}}.

### Sintaxis formal

{{csssyntax}}

## Example

### HTML

```html
<a href="#">Este link tiene un estilo especial para el foco</a>
```

### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

### Result

{{EmbedLiveSample("Example", "100%", 60)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
