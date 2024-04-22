---
title: Conceptos básicos de las Propiedades y Valores Lógicos
slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
---

{{CSSRef}}

La Especificación de Propiedades y Valores Lógicos introduce asignaciones relativas al flujo para muchas de las propiedades y valores en CSS. Este artículo introduce la especificación y explica las propiedades y valores relativos al flujo.

## ¿Por qué necesitamos propiedades lógicas?

Tradicionalmente CSS ha medido las cosas de acuerdo con las dimensiones físicas de la pantalla. Por lo tanto, decimos que las cajas tienen un ancho ({{CSSxRef("width")}}) y un alto ({{CSSxRef("height")}}), posicionamos elementos, los flotamos, les asignamos bordes, márgenes y rellenos arriba (`top`), a la derecha (`right`), abajo (`bottom`), a la izquierda ( `left`), etc. La [especificación de Propiedades y valores Logicos](https://drafts.csswg.org/css-logical/) define una asignación de esos valores físicos a su lógica, o flujo relativo — por ejemplo, comienzo (`start`) y final (`end`) en oposición a izquierda (`left`) y derecha (`right`) / arriba (`top`) y abajo (`bottom`) .

Un ejemplo de por qué esas asignaciones podrían ser necesarias es el siguiente: tengo el diseño de una pantalla usando CSS Grid, el contenedor de la rejilla tiene un ancho y estoy usando las propiedades {{CSSxRef("align-self")}} y {{CSSxRef("justify-self")}} para alinear los elementos dentro del contenedor. Esas propiedades son de flujo relativo — `justify-self: start` alinea el elemento al inicio de la dimensión en línea, `align-self: start` hace lo mismo en la dimensión bloque.

![A grid in a horizontal writing mode](grid-horizontal-width-sm.png)

Si ahora cambio el modo de escritura para este componente a `vertical-rl` usando la propiedad {{CSSxRef("writing-mode")}}, la alineación sigue trabajando de la misma forma. La dimensión en línea está ahora de forma vertical y la dimensión bloque de forma horizontal. Sin embargo, la rejilla no se ve igual ya que el ancho asignado para el contenedor es una medida horizontal, vinculada a la posición física y no a la posición lógica o al flujo relativo del texto.

![A grid in vertical writing mode.](grid-vertical-width-sm.png)

Si en lugar de usar la propiedad `width` usamos la propiedad lógica {{CSSxRef("inline-size")}}, el componente funciona de la misma forma sin importar en qué modo de escritura se encuentre.

![A grid layout in vertical writing mode](grid-vertical-inline-size-small.png)

Puedes probar lo anterior en el siguiente ejemplo en vivo. Cambia la propiedad `writing-mode` de `vertical-rl` a `horizontal-tb` en `.box` para mirar cómo cambia el diseño con las diferentes propiedades.

{{EmbedGHLiveSample("css-examples/logical/intro-grid-example.html", '100%', 700)}}

Cuando trabajamos en un sitio con un modo de escritura diferente al predeterminado (horizontal) o por razones creativas, ser capaces de relacionarnos con el flujo del contenido tiene mucho sentido.

## Dimensiones de bloque y en línea

Dos conceptos claves para trabajar con las propiedades y valores al flujo relativo, son las dimensiones de bloque y en línea. Como vimos anteriormente, los métodos de diseño de CSS como Flexbox y Grid usan los conceptos de bloque (`block`) y en línea (`inline`) en vez de usar los conceptos de derecha (`right`) e izquierda (`left`) / arriba (`top`) y abajo (`bottom`) para alinear elementos.

La dimensión en línea (`inline`) es la dimensión a lo largo de la cual se ejecuta una línea de texto en el modo de escritura en uso. Por lo tanto, en un documento en español con el texto ejecutándose horizontalmente de izquierda a derecha o un documento árabe con el texto ejecutándose horizontalmente de derecha a izquierda, la dimensión en línea es _horizontal_. Si cambiamos a un modo de escritura vertical (por ejemplo, un documento japonés), la dimensión en línea ahora es _vertical_, ya que las líneas en ese modo de escritura se ejecutan verticalmente.

La dimensión en bloque es la dimensión en la que los bloques —como los párrafos— se muestran uno después del otro. Tanto en español como en árabe, los bloques se ejecutan verticalmente, mientras que en cualquier modo de escritura vertical se ejecutan horizontalmente.

El siguiente diagrama muestra las direcciones de bloque y en línea en un modo de escritura horizontal:

![diagram showing the inline axis running horizontally, block axis vertically.](mdn-horizontal.png)

El siguiente diagrama muestra las direcciones de bloque y en línea en un modo de escritura vertical:

![Diagram showing the block axis running horizontally the inline axis vertically.](mdn-vertical.png)

## Soporte en navegadores

Las Propiedades y Valores lógicos pueden ser considerados como un par de grupos en términos de la compatibilidad actual del navegador. Algunas de las propiedades son esencialmente asignadas desde la versión física, por ejemplo {{CSSxRef("inline-size")}} por {{CSSxRef("width")}} o {{CSSxRef("margin-inline-start")}} en lugar de {{CSSxRef("margin-left")}}. Esa asignación de propiedades se está comenzando a ver bien en los diferentes navegadores; sin embargo, si miras la página de cada propiedad en la [referencia en MDN](/es/docs/Web/CSS/CSS_Logical_Properties#Reference), verás que el único navegador moderno que no cuenta con estas propiedades es Edge.

Hay otro grupo de estas propiedades lógicas que no tienen una asignación directa con las propiedades físicas existentes. Estas son abreviaturas posibles gracias al hecho de que podemos referirnos a ambos bordes del bloque o dimensión en línea a la vez. Un ejemplo sería {{CSSxRef("margin-block")}}, que es una abreviación de {{CSSxRef("margin-block-start")}} y {{CSSxRef("margin-block-end")}}. Actualmente, estas propiedades no tiene soporte en navegadores.

> **Nota:** CSS Working Group está intentando decidir qué hacer con los valores abreviados de cuatro valores para las propiedades lógicas, por ejemplo, los equivalentes para configurar cuatro propiedades físicas a la vez, como márgenes con la propiedad {{CSSxRef("margin")}}. Necesitaríamos algún tipo de modificador si tuviéramos que reutilizar el margen para las propiedades relativas al flujo. Si deseas leer las sugerencias o comentarlas, el problema relevante de GitHub es [#1282](https://github.com/w3c/csswg-drafts/issues/1282).

### Pruebas para el soporte en navegadores

Puedes probar el soporte de las propiedades y valores lógicos usando _feature queries_. Por ejemplo, {{CSSxRef("width")}}, prueba para {{CSSxRef("inline-size")}} y, si esto es soportado, establece el ancho (`width`) en automático (`auto`) y el tamaño en línea (`inline-size`) al valor del ancho (`width`) original.

{{EmbedGHLiveSample("css-examples/logical/intro-feature-queries.html", "100%", 700)}}

## Mira también

- [Alineamiento de caja en Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Alineamiento de caja en Flex Layout](/es/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [Entendiendo Propiedades y Valores Lógicos](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/)
- [Modos de escritura](/es/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
