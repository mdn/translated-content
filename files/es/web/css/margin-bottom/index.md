---
title: margin-bottom
slug: Web/CSS/margin-bottom
---

{{CSSRef()}}

## Summary

![The effect of the CSS margin-bottom property on the element box](/files/4045/margin-bottom.svg)El `margin-bottom` [CSS](/es/docs/CSS) (_margen-inferior_) es la propiedad de un elemento que establece el espacio requerido en la parte inferior de un elemento. Tambien se permiten valores negativos.

Esta propiedad no tiene ningun efecto sobre los elementos en linea _non-replaced_ , como {{HTMLElement("tt")}} o {{HTMLElement("span")}}.

{{cssinfo}}

## Syntax

```
Formal syntax: {{csssyntax("margin-bottom")}}
```

```
margin-bottom: 10px;        /* Una longitud absoluta (sin redimension) */
margin-bottom: 1em;         /* Una longitud en relacion con el tamaño del texto */
margin-bottom: 5%;          /* Un margen respecto al ancho de su objeto padre (el que lo contiene)  */
margin-bottom: auto;

margin-bottom: inherit; /*margen heredado*/
```

### Values

- `<length>`
  - : Specifies a fixed width. See {{cssxref("&lt;length&gt;")}} for possible values.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} always relative to the **width** of the containing block.
- `auto`
  - : See {{cssxref("margin")}}.

## Examples

```css
.content {
  margin-bottom: 5%;
}
.sidebox {
  margin-bottom: 10px;
}
.logo {
  margin-bottom: -5px;
}
#header {
  margin-bottom: 1em;
}
```

[Ver en el JSFiddle](https://jsfiddle.net/V3hrF)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
