---
title: border-top
slug: Web/CSS/border-top
---

{{CSSRef}}

## Resumen

La propiedad de [CSS](/es/docs/CSS) **`border-top`** es una abreviatura que establece los valores de {{Cssxref("border-top-color")}}, {{Cssxref("border-top-style")}}, y {{Cssxref("border-top-width")}}. Estas propiedades las características del borde superior de un elemento.

> **Nota:** Los tres valores de la abreviatura pueden ser especificados en cualquier orden, y uno o dos de ellos pueden ser omitidos.
>
> Como con todas las propiedades abreviadas, border-top siempre establece los valores de todas las propiedades que sean posibles, aun si no están especificadas. Establece aquellas que no son especificadas a sus valores por defecto. Esto significa que:
>
> ```css
> border-top: none thick green;
> ```
>
> es lo mismo que
>
> ```css
> border-top: thick green;
> ```
>
> y el valor de {{Cssxref("border-top-style")}} establecido antes de `border-top` es ignorado.
>
> El no especificar la parte de border-style que está destinada a establecer el valor de {{Cssxref("border-top-style")}} significa que se tomará el valor por defecto, lo que significa que el {{Cssxref("border-top-style")}} será `none.`
>
> También hay que tomar en cuenta que en el siguiente bloque de código se ignorará la primer asignación de {{Cssxref("border-top-style")}} dado que al indicar `border-top` se establecerá implicitamente el valor de {{Cssxref("border-top-style")}} a `none`
>
> ```css
> border-top-style: dotted;
> border-top: thick green;
> ```

{{cssinfo}}

## Sintaxis

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;
```

### Valores

- `<br-width>`
  - : See {{Cssxref("border-top-width")}}.
- `<br-style>`
  - : See {{Cssxref("border-top-style")}}.
- `<color>`
  - : See {{Cssxref("border-top-color")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
element {
  border-top: 1px solid #000;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
