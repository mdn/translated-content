---
title: Propiedades abreviadas
slug: Web/CSS/Shorthand_properties
---

{{CSSRef}}

Las **_propiedades abreviadas_** son propiedades CSS que le permiten establecer los valores de varias otras propiedades CSS simultáneamente. Usando una propiedad abreviada, puede escribir hojas de estilo más concisas (y a menudo más legibles), ahorrando tiempo y energía.

La especificación CSS define propiedades abreviadas para agrupar la definición de propiedades comunes que actúan sobre el mismo tema. Por ejemplo, la propiedad CSS {{cssxref("background")}} es una propiedad abreviada que puede definir los valores de {{cssxref("background-color")}}, {{cssxref("background-image") }}, {{cssxref("background-repeat")}} y {{cssxref("background-position")}}. Del mismo modo, las propiedades más comunes relacionadas con la tipografía se pueden definir usando la abreviatura {{cssxref("font")}}, y los diferentes márgenes alrededor de una caja se pueden definir usando la abreviatura {{cssxref("margin")}}.

## Casos especiales

Hay algunos casos especiales a tener en cuenta al usar propiedades abreviadas.

### Omitiendo propiedades

Un valor que no se especifica se establece en su valor inicial. Eso significa que **anula** los valores establecidos previamente. Por ejemplo:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

Esto no establecerá el color del fondo en `red` sino en el valor predeterminado para {{cssxref("background-color")}}, que es `transparent`.

Solo los valores de las propiedades individuales pueden heredar. Como los valores omitidos se reemplazan por su valor inicial, es imposible permitir la herencia de propiedades individuales omitiéndolas. La palabra clave `inherit` se puede aplicar a una propiedad, pero solo como un todo, no como palabra clave para un valor u otro. Eso significa que la única forma de hacer que un valor específico se herede es usar la propiedad junto con la palabra clave `inherit`.

### Ordenando propiedades

Las propiedades abreviadas intentan no forzar un orden específico para los valores de las propiedades que reemplazan. Esto funciona bien cuando estas propiedades usan valores de diferentes tipos, ya que el orden no tiene importancia, pero no funciona tan fácilmente cuando varias propiedades pueden tener valores idénticos.

Dos casos importantes son:

- propiedades relacionadas con los bordes de una caja, como {{cssxref("border-style")}}, {{cssxref("margin")}} o {{cssxref("padding")}}
- propiedades relacionadas con las esquinas de una caja, como {{cssxref("border-radius")}}

#### Bordes de una caja

Las propiedades de manejo abreviadas relacionadas con los bordes de una caja, como {{cssxref("border-style")}}, {{cssxref("margin")}} o {{cssxref("padding")}}, siempre usan una sintaxis de 1 a 4 valores que representan esos bordes:

- **Sintaxis de 1 valor:** `border-width: 1em` — El valor único representa todos los bordes: ![Bordes de caja con sintaxis de un valor](border1.png)

- **Sintaxis de 2 valores:** `border-width: 1em 2em` — El primer valor representa los bordes verticales, es decir, superior e inferior, el segundo, los horizontales, es decir, izquierdo y derecho: ![Bordes de caja con sintaxis de dos valores](border2.png)

- **Sintaxis de 3 valores:** `border-width: 1em 2em 3em` — El primer valor representa el borde superior, el segundo, el horizontal, es decir, izquierda y derecha, y el tercer valor representa el borde inferior: ![Bordes de caja con sintaxis de tres valores](border3.png)

- **Sintaxis de 4 valores:** `border-width: 1em 2em 3em 4em` — Los cuatro valores representan los bordes superior, derecho, inferior e izquierdo respectivamente, siempre en ese orden, es decir, en el sentido de las agujas del reloj comenzando por la parte superior: ![Bordes de caja con sintaxis de cuatro valores](border4.png) La letra inicial de las direcciones en inglés _Top-Right-Bottom-Left_ coinciden con el orden de las consonantes de la palabra problema en inglés _trouble_: TRBL. También puede recordarlo como el orden en que las manecillas giran en un reloj: `1em` comienza en la posición de las 12 en punto, luego `2em` en la posición de las 3 en punto, luego `3em` en la posición de las 6 en punto y `4em` en la posición de las 9 en punto.

#### Esquinas de una caja

De manera similar, las propiedades de manejo abreviadas relacionadas con las esquinas de una caja, como {{cssxref("border-radius")}}, siempre usan una sintaxis consistente de 1 a 4 valores que representan esas esquinas:

- **Sintaxis de 1 valor:** `border-radius: 1em` — El valor único representa todas las esquinas: ![Esquinas de caja con sintaxis de un valor](corner1.png)

- **Sintaxis de 2 valores:** `border-radius: 1em 2em` — El primer valor representa las esquinas superior izquierda e inferior derecha, el segundo las esquinas superior derecha e inferior izquierda: ![Esquinas de caja con sintaxis de dos valores](corner2.png)

- **Sintaxis de 3 valores:** `border-radius: 1em 2em 3em` — El primer valor representa la esquina superior izquierda, el segundo las esquinas superior derecha e inferior izquierda y el tercer valor la esquina inferior derecha: ![Esquinas de caja con sintaxis de tres valores](corner3.png)

- **Sintaxis de 4 valores:** `border-radius: 1em 2em 3em 4em` — Los cuatro valores representan las esquinas superior izquierda, superior derecha, inferior derecha e inferior izquierda respectivamente, siempre en ese orden, es decir, en el sentido de las agujas del reloj comenzando por la parte superior izquierda: ![Esquinas de caja con sintaxis de cuatro valores](corner4.png)

## Propiedades de fondo

Un fondo con las siguientes propiedades...

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

... se puede acortar a una sola declaración:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(La forma abreviada es en realidad el equivalente de las propiedades anteriores más `background-attachment: scroll` y, en CSS3, algunas propiedades adicionales).

Consulte {{cssxref("background")}} para obtener información más detallada, incluidas las propiedades de CSS3.

## Propiedades de tipografía (Font)

Las siguientes declaraciones...

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

... se puede acortar a lo siguiente:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Esta declaración abreviada es en realidad equivalente a las declaraciones anteriores más `font-variant: normal` y `font-size-adjust: none` (CSS2.0 / CSS3), `font-stretch: normal` (CSS3).

## Propiedades de borde

Con los bordes, el ancho, el color y el estilo se pueden simplificar en una sola declaración. Por ejemplo, el siguiente CSS...

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

... se puede simplificar como:

```css
border: 1px solid #000;
```

## Propiedades de margen y relleno

Las versiones abreviadas de los valores de margen y relleno funcionan de manera similar; la propiedad `margin` permite especificar valores abreviados utilizando uno, dos, tres o cuatro valores. Las siguientes declaraciones CSS...

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

... son iguales a la siguiente declaración abreviando cuatro valores. Tenga en cuenta que los valores están en el sentido de las agujas del reloj, comenzando en la parte superior: arriba, derecha, abajo, luego a la izquierda (TRBL, las consonantes en "_trouble_" en inglés).

```css
margin: 10px 5px 10px 5px;
```

Las reglas abreviadas de margen para declaraciones de uno, dos, tres y cuatro valores son:

- Cuando se especifica **un** valor, se aplica el mismo margen a **los cuatro lados**.
- Cuando se especifican **dos** valores, el primer margen se aplica a la parte **superior e inferior**, el segundo a la **izquierda y la derecha**.
- Cuando se especifican **tres** valores, el primer margen se aplica a la parte **superior**, el segundo a la **izquierda y derecha**, el tercero a la parte **inferior**.
- Cuando se especifican **cuatro** valores, los márgenes se aplican a la parte **superior**, **derecha**, **inferior** e **izquierda** en ese orden (en el sentido de las agujas del reloj).

## La propiedad abreviada universal

CSS proporciona una propiedad abreviada universal, {{cssxref("all")}}, que aplica su valor a todas las propiedades del documento. Su finalidad es cambiar el modelo de herencia de las propiedades.

Consulte [Cascada y herencia](/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) o [Introducción a Cascada en CSS](/es/docs/Web/CSS/Cascade) para obtener más información sobre cómo funciona la herencia en CSS.

## Véase también

- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Syntax), [at-rule](/es/docs/Web/CSS/At-rule), [comments](/es/docs/Web/CSS/Comments), [specificity](/es/docs/Web/CSS/Specificity) and [inheritance](/es/docs/Web/CSS/inheritance), the [box](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Web/CSS/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/initial_value), [computed](/es/docs/Web/CSS/computed_value), [resolved](/es/docs/Web/CSS/resolved_value), [specified](/es/docs/Web/CSS/specified_value), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/Web/CSS/actual_value) values. Definitions of [value syntax](/es/docs/Web/CSS/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Replaced_element).
- Propiedades abreviadas: {{cssxref("all")}}, {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-start")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-image")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("gap")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("mask")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}, {{cssxref("text-decoration")}}, {{cssxref("text-emphasis")}}, {{cssxref("transition")}}
