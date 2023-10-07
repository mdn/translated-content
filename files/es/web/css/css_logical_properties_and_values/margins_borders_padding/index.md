---
title: Propiedades lógicas para márgenes, bordes y rellenos
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
---

{{CSSRef}}

La [especificación de Propiedades y Valores Lógicos](https://drafts.csswg.org/css-logical/) define asignaciones relativas al flujo para las diversas propiedades de margen, borde, relleno y sus abreviaturas. En esta guía echamos un vistazo a estos.

Si ha visto la página principal de [Propiedades y Valores Lógicos de CSS](/es/docs/Web/CSS/CSS_Logical_Properties), verá que hay una gran cantidad de propiedades en la lista. Esto se debe principalmente al hecho de que hay cuatro valores a largo plazo para cada margen, borde y lado de relleno, más todos los valores abreviados.

## Asignaciones para márgenes, bordes, y rellenos

La especificación detalla la asignación para cada valor lógico con una contraparte física. En la tabla de abajo he dado estos valores asignados asumiendo que el modo de escritura ({{cssxref("writing-mode")}}) en uso es `horizontal-tb` — con una dirección de izquierda a derecha. La dirección en línea por lo tanto va horizontalmente — izquierda a derecha — y {{cssxref("margin-inline-start")}} debería ser quivalente a {{cssxref("margin-left")}}.

Si usaste el modo de escritura `horizontal-tb` con una dirección del texto de derecha a izquierda, entonces {{cssxref("margin-inline-start")}} debería ser el mismo que {{cssxref("margin-right")}}, y en un modo de escritura vertical esto debería ser el mismo que usar {{cssxref("margin-top")}}.

| Propiedad Lógica                         | Propiedad Física                          |
| ---------------------------------------- | ----------------------------------------- |
| {{cssxref("border-block-end")}}          | {{cssxref("border-bottom")}}              |
| {{cssxref("border-block-end-color")}}    | {{cssxref("border-bottom-color")}}        |
| {{cssxref("border-block-end-style")}}    | {{cssxref("border-bottom-style")}}        |
| {{cssxref("border-block-end-width")}}    | {{cssxref("border-bottom-width")}}        |
| {{cssxref("border-block-start")}}        | {{cssxref("border-top")}}                 |
| {{cssxref("border-block-start-color")}}  | {{cssxref("border-top-color")}}           |
| {{cssxref("border-block-start-style")}}  | {{cssxref("border-top-style")}}           |
| {{cssxref("border-block-start-width")}}  | {{cssxref("border-top-width")}}           |
| {{cssxref("border-inline-end")}}         | {{cssxref("border-right")}}               |
| {{cssxref("border-inline-end-color")}}   | {{cssxref("border-right-color")}}         |
| {{cssxref("border-inline-end-style")}}   | {{cssxref("border-right-style")}}         |
| {{cssxref("border-inline-end-width")}}   | {{cssxref("border-right-width")}}         |
| {{cssxref("border-inline-start")}}       | {{cssxref("border-left")}}                |
| {{cssxref("border-inline-start-color")}} | {{cssxref("border-left-color")}}          |
| {{cssxref("border-inline-start-style")}} | {{cssxref("border-left-style")}}          |
| {{cssxref("border-inline-start-width")}} | {{cssxref("border-left-width")}}          |
| {{cssxref("border-start-start-radius")}} | {{cssxref("border-top-left-radius")}}     |
| {{cssxref("border-start-end-radius")}}   | {{cssxref("border-bottom-left-radius")}}  |
| {{cssxref("border-end-start-radius")}}   | {{cssxref("border-top-right-radius")}}    |
| {{cssxref("border-end-end-radius")}}     | {{cssxref("border-bottom-right-radius")}} |
| {{cssxref("margin-block-end")}}          | {{cssxref("margin-bottom")}}              |
| {{cssxref("margin-block-start")}}        | {{cssxref("margin-top")}}                 |
| {{cssxref("margin-inline-end")}}         | {{cssxref("margin-right")}}               |
| {{cssxref("margin-inline-start")}}       | {{cssxref("margin-left")}}                |
| {{cssxref("padding-block-end")}}         | {{cssxref("padding-bottom")}}             |
| {{cssxref("padding-block-start")}}       | {{cssxref("padding-top")}}                |
| {{cssxref("padding-inline-end")}}        | {{cssxref("padding-right")}}              |
| {{cssxref("padding-inline-start")}}      | {{cssxref("padding-left")}}               |

Hay también algunas abreviaciones que han sido posibles porque tenemos la capacidad de apuntar ambos bloques o ambos bordes en línea de la caja simultáneamente. Estas abreviaciones no tienen equivalente físico.

| Propiedad                          | Propósito                                                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{cssxref("border-block")}}        | Establece {{cssxref("border-color")}}, {{cssxref("border-style")}}, y {{cssxref("border-width")}} para ambos bordes de bloque. |
| {{cssxref("border-block-color")}}  | Establece `border-color` para ambos bordes de bloque.                                                                          |
| {{cssxref("border-block-style")}}  | Establece `border-style` para ambos bordes de bloque.                                                                          |
| {{cssxref("border-block-width")}}  | Establece `border-width` para ambos bordes de bloque.                                                                          |
| {{cssxref("border-inline")}}       | Establece `border-color`, `-style`, y `-width` para ambos bordes en línea.                                                     |
| {{cssxref("border-inline-color")}} | Establece `border-color` para ambos bordes en línea.                                                                           |
| {{cssxref("border-inline-style")}} | Establece `border-style` para ambos bordes en línea.                                                                           |
| {{cssxref("border-inline-width")}} | Establece `border-width` para ambos bordes en línea.                                                                           |
| {{cssxref("margin-block")}}        | Establece todos los {{cssxref("margin")}}s en bloque.                                                                          |
| {{cssxref("margin-inline")}}       | Establece todos los `margin`s en línea.                                                                                        |
| {{cssxref("padding-block")}}       | Establece {{cssxref("padding")}} en bloque.                                                                                    |
| {{cssxref("padding-inline")}}      | Establece el `padding` en línea.                                                                                               |

## Ejemplo para márgenes

Las propiedades asignadas para márgenes de {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}}, y {{cssxref("margin-inline-end")}} pueden ser usadas en lugar de sus contrapartes físicas.

En el siguiente ejemplo, crearemos dos cajas y agregaremos diferentes tamaños de márgenes a cada borde. Hemos agregado un contenedor con un borde para poder hacer el márgen más notorio.

Una caja usa propiedades físicas y la otra usa propiedades lógicas. Intenta cambiar la propiedad {{cssxref("direction")}} a `rtl` para hacer que los cuadros se muestren en dirección de derecha a izquierda, los márgenes del primer cuadro permanecerán en el mismo lugar, mientras que los márgenes en la dimensión en línea del segundo cuadro cambiarán.

También puedes intentar cambiar el modo de escritura (`writing-mode`) de `horizontal-tb` a `vertical-rl`. De nuevo, notarás cómo las márgenes permanecen en el mismo lugar de la primera caja, pero cambia para seguir la dirección del texto en el segundo.

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### Abreviaciones para márgenes

Como ahora podemos apuntar a ambos lados de la caja — ya sea ambos lados en bloque o ambos lados en línea either — hay nuevas abreviaciones disponibles, {{cssxref("margin-inline")}} y {{cssxref("margin-block")}}, que aceptan dos valores. El primer valor se aplicará al comienzo de esta dimensión y la segunda al final. Si tú solo usas un valor, se aplica para ambos.

En un modo de escritura horizontal este CSS aplicaría un margen de 5px arriba de la caja y un margen de 10px abajo.

```css
.box {
  margin-block: 5px 10px;
}
```

> **Nota:** Las propiedades abreviadas `margin-inline` y `margin-block` se enviaron en Firefox 66. Como hay nuevas propiedades, mira el soporte en el navegador antes de usarlas.

## Ejemplos para rellenos (Paddings)

Las propiedades asignadas para rellenos de {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}}, y {{cssxref("padding-inline-end")}} pueden ser usadas en lugar de sus contrapartes físicas.

En el siguiente ejemplo tenemos dos cajas, una de ellas está usando propiedades de relleno físico y la otra propiedades de relleno lógico. Con un modo de escritura (`writing-mode`) de `horizontal-tb`, en ambas cajas aparecerán lo mismo.

Intenta cambiar la propiedad `direction` a `rtl` para hacer que las cajas se muestren en dirección de derecha a izquierda, los rellenos del primer cuadro permanecerán en el mismo lugar, mientras que los rellenos en la dimensión en línea del segundo cuadro cambiarán.

También puedes intentar cambiar el modo de escritura (`writing-mode`) de `horizontal-tb` a `vertical-rl`. De nuevo, notarás cómo los rellenos permanecen en el mismo lugar de la primera caja, pero cambia para seguir la dirección del texto en el segundo.

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### Abreviaciones para rellenos (paddings)

Como con las márgenes, hay dos abreviaciones para rellenos — {{cssxref("padding-inline")}} y {{cssxref("padding-block")}} — que permiten configurar el relleno a las dimenciones de bloque y en línea, respectivamente.

En un modo de escritura horizontal este CSS aplicaría un relleno de 5px arriba de la caja y un relleno de 10px abajo:

```css
.box {
  padding-block: 5px 10px;
}
```

> **Nota:** Las abreviaciones de las propiedades `padding-inline` y `padding-block` se enviaron en Firefox 66. Como hay nuevas propiedades, mira el soporte en el navegador antes de usarlas.

## Ejemplos para bordes

Las propiedades del borde son la razón principal por la que las propiedades y valores lógicos parecen tener tantas propiedades, ya que tenemos _longhands_ para el color, el ancho y el estilo del borde en cada lado de una caja, junto con las abreviaciones para establecer los tres a la vez por cada lado. Al igual que con el margen y el relleno, tenemos una versión asignada de cada propiedad física.

El siguiente demo usa algunas _longhands_ y tres valores de abreviaciones. Como con los otros demos, intenta cambiar la propiedad `direction` a `rtl` para que las cajas se muestren en dirección de derecha a izquierda, o cambia el modo de escritura (`writing-mode`) de `horizontal-tb` a `vertical-rl`.

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### Nuevas abreviaciones para bordes

Hay valores abreviados de dos valores para establecer el ancho, el estilo y el color del bloque o dimensión en línea, y valores abreviados de dos valores para establecer los tres valores en la dimensión de bloque o enlínea. El siguiente código, en un modo de escritura horizontal, le dará un borde sólido verde de 2px en la parte superior e inferior del cuadro, y un borde púrpura de puntos de 4px a la izquierda y la derecha.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

> **Nota:** Estas dos abreviaciones fueron enviadas en Firefox 66, mira el soporte en los navegadores antes de usar estas propiedades ya que puede que en otros navegadores aún no estén implementadas.

### Flujo de propiedades relativas del border-radius

La especificación ha agregado recientemente valores relativos al flujo para las longitudes {{cssxref ("border-radius")}}. Estos aún no han sido implementados por ningún navegador. El siguiente ejemplo, en un modo de escritura horizontal, establecería el radio del borde superior derecho en 1em, la parte inferior derecha a 0, la parte inferior izquierda a 20px y la parte superior izquierda a 40px.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Indicating logical values for the 4-value shorthand syntax

La especificación hace una sugerencia para los métodos abreviados de cuatro valores, como la propiedad de `margin`, sin embargo, la decisión final sobre cómo debe indicarse esto aún no se ha resuelto, y se trata en [este issue](https://github.com/w3c/csswg-drafts/issues/1282).

El uso de una abreviatura de cuatro valores, como el margen, el relleno o el borde, utilizará actualmente las versiones físicas, por lo que si es importante seguir el flujo del documento, use las propiedades _longhand_ por el momento.
