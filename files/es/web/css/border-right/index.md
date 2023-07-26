---
title: border-right
slug: Web/CSS/border-right
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`border-right`** es un a propiedad rápida para dar valores al {{cssxref("border-right-width")}}, {{cssxref("border-right-style")}} y {{cssxref("border-right-color")}}. Estas propiedades establecen un [borde](/es/docs/Web/CSS/border)derecho del elemento.

{{EmbedInteractiveExample("pages/css/border-right.html")}}

Como con todas las propiedades rápidas, `border-right` siempre establece los valores de todas las propiedades que puede establecer, incluso si no están especificadas. Establece los no especificados a sus valores por defecto. Lo que significa que ...

```css
border-right-style: dotted;
border-right: thick green;
```

... es en realidad lo mismo que ...

```css
border-right-style: dotted;
border-right: none thick green;
```

... y el valor de {{cssxref("border-right-style")}} dado previamente a `border-right` es ignorado. Puesto que el valor por defecto de {{cssxref("border-right-style")}} es `none`, si no se especifica la parte `border-style` el resultado es no establecer un borde.

## Sintaxis

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;
```

Los tres valores de la propiedad rápida pueden ser especificados en cualquier orden, incluso omitiendo uno o dos de ellos.

### Valores

- `<br-width>`
  - : Ver {{cssxref("border-right-width")}}.
- `<br-style>`
  - : Ver {{cssxref("border-right-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Ver {{cssxref("border-right-color")}}.

### Formal syntax

{{csssyntax}}

## Ejemplo

```html
<div>Esta caja tiene un borde en el lado derecho.</div>
```

```css
div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

{{EmbedLiveSample('Example')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
