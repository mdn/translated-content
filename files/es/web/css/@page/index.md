---
title: '@page'
slug: Web/CSS/@page
translation_of: Web/CSS/@page
---
{{CSSRef}}

## Resumen

La regla @page es usada para modificar algunas propiedades CSS cuando se va a imprimir una página web. No se pueden cambiar todas las propiedades CSS con `@page`, solo los márgenes, las líneas viudas, huérfanas y los saltos de página. Cualquier intento de cambiar otra propiedad será ignorada.

La regla `@page` puede ser accesada por medio de la interfaz modelo objeto {{domxref("CSSPageRule")}}.

> **Nota:** La W3C esta discutiendo como manejar las unidades relativas {{cssxref("&lt;length&gt;")}} : `vh`, `vw`, `vmin`, y `vmax`. Mientras tanto, se recomienda no usarlas en la regla `@page`.

## Sintaxis

### Descriptores

- [`size`](/es/docs/Web/CSS/@page/size)
  - : Especifica el tamaño y la orientación de la caja objetivo de la página. En general, una caja es representada dentro de una hoja, también indica el tamaño de la hoja destino.

- [`marks`](/es/docs/Web/CSS/@page/marks)
  - : Añade marcas de corte y/o registro al documento.

- [`bleed`](/es/docs/Web/CSS/@page/bleed)
  - : Especifica la extensión más allá de la caja de página a la que se recorta el procesamiento de página.

### Sintaxis Formal

{{csssyntax}}

## Ejemplos

Por favor dirígete a las [pseudo-classes](/es/docs/CSS/Pseudo-classes) de `@page` por ejemplos.

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
- {{Cssxref(":recto")}} {{experimental_inline}}
- {{Cssxref(":verso")}} {{experimental_inline}}

## Especificaciones

| Especificación                                                                                       | Estatus                                          | Comentario                                                                                                   |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS Logical Properties', '#logical-page', ':recto and :verso')}} | {{Spec2('CSS Logical Properties')}} | Agrega los selectores de página`:recto` y `:verso.`                                                          |
| {{SpecName('CSS3 Paged Media', '#at-page-rule', '@page')}}                         | {{Spec2('CSS3 Paged Media')}}         | Ningún cambio desde {{SpecName('CSS2.1')}}, aunque mas reglas CSS pueden ser usadas dentro de `@page`. |
| {{SpecName('CSS2.1', 'page.html#page-selectors', '@page')}}                     | {{Spec2('CSS2.1')}}                         | Definición inicial                                                                                           |

## Compatibilidad del navegador

{{Compat("css.at-rules.page")}}
