---
title: <basic-shape>
slug: Web/CSS/basic-shape
---

{{CSSRef}}

## Resumen

El tipo **`<basic-shape>`** puede ser especificado usando funciones de figura (shape) básicas. Al usar esta sintaxis para definir figuras, la caja de referencia es definida por cada propiedad que usa valores `<basic-shape>`. El sistema de coordenadas para la figura tiene su origen en la esquina superior izquierda de la caja de referencia, con el eje x corriendo hacia la derecha y el eje y, hacia abajo. Todas las longitudes expresadas en porcentajes son resueltas con base en las dimensiones de la caja de referencia.

## Figuras posibles

Las siguientes figuras son soportadas. Todos los valores `<basic-shape>` usan notación funcional y son definidos aquí usando la [sintaxis de definición de valor](/es/docs/Web/CSS/Sintaxis_definición_de_valor).

- `inset()`

  - : &#x20;

    ```
    inset( <shape-arg>{1,4} [round <border-radius>]? )
    ```

    Define un rectángulo incrustado.

    Cuando se proporcionan los cuatro primeros argumentos, representan la separación superior, derecha, inferior e izquierda del interior de la caja de referencia que define las posiciones de los bordes del rectángulo interior. Estos argumentos siguen la sintaxis de la abreviatura de margen, que permite definir los cuatro valores en uno, dos o cuatro valores.

    Los argumentos opcionales [`<border-radius>`](/es/docs/Web/CSS/border-radius) definen esquinas redondeadas para el rectángulo incrustado usando la sintaxis de abreviatura de border-radius.

    Cuando un par de valores inset en cualquier dimensión suman un valor mayor al límite de la dimensión disponible (como por ejemplo, que los valores inset izquierdo y derecho sean de 75% cada uno), se está definiendo una figura que no encierra ningun área. Para esta especificación, el resultado es un área flotante vacía.

- `polygon()`

  - : &#x20;

    ```
    polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
    ```

    `<fill-rule>` representa la [regla de llenado](/es/docs/Web/SVG/Attribute/fill-rule) usada para determinar el área interior del polígono. Los valores posibles son `nonzero` y `evenodd`. El valor predeterminado es `nonzero`.

    Cada elemento par de la lista representa _xi_ y _yi_ - las coordenadas del eje x y el eje y en el vértice _i_ del polígono.

- `circle(`)

  - : &#x20;

    ```
    circle( [<shape-radius>]? [at <position>]? )
    ```

    El argumento `<shape-radius>` representa a _r_, el radio del círculo. Los valores negativos son inválidos. Un valor en porcentaje es resuelto de la anchura y altura presentes de la caja de referencia como `sqrt(width^2+height^2)/sqrt(2)`.

    El argumento {{cssxref("&lt;position&gt;")}} define el centro del círculo. Su valor predeterminado es `center`.

- `ellipse()`

  - : &#x20;

    ```
    ellipse( [<shape-radius>{2}]? [at <position>]? )
    ```

    El argumento `<shape-radius>` representa a rx y ry, los radios del eje x y del eje y de la elipse, en ese orden. Los valores negativos son inválidos. Los valores en porcentaje son resueltos contra la anchura (para rx) y altura (para ry) presentes en la caja de referencia.

    El argumento {{cssxref("&lt;position&gt;")}} define el centro de la elipse. Su valor predeterminado es `center`.

Los argumentos no definidos arriba son definidos de esta forma:

```
<shape-arg> = <length> | <percentage>
<shape-radius> = <length> | <percentage> | closest-side | farthest-side
```

Define un radio para un círculo o elipse. Su valor predeterminado es `closest-side`.

`closest-side` usa la longitud desde el centro de la figura hasta el borde más cercano de la caja de referencia. Para círculos, es el lado más cercano en cualquier dimensión. Para elipses, es el lado más cercano en la dimensión del radio.

`farthest-side` use la longitud desde el centro de la figura hasta el lado más alejado de la caja de referencia. Para círculos, es el lado más alejado en cualquier dimensión. Para elipses, es el lado más alejado en la dimensión del radio.

## Valores Calculados de Figuras Básicas

Los valores en una función `<basic-shape>` son calculados segun se especifica, con estas excepciones:

- Valores omitidos son incluidos y calculados acorde a su valor predeterminado.
- Un valor {{cssxref("&lt;position&gt;")}} en `circle()` o `ellipse()` es calculado como un par de separaciones (horizontal y después vertical) desde el origen superior izquierdo, cada uno dado como combinación de una longitud absoluta y un porcentaje.
- Un valor [`<border-radius>`](/es/docs/Web/CSS/border-radius) en `inset()` es calculado como una lista expandida de ocho valores {{cssxref("length")}} o de porcentaje.

## Interpolación de Figuras Básicas

Para interpolar dos figuras, se aplican las reglas a continuación. Los valores en la función de figura se interpolan como una lista simple. La lista de valores se interpola como {{cssxref("length", "length")}}, {{cssxref("percentage", "percentage")}}, o {{cssxref("calc", "calc")}} donde sea posible. Si los valores listados no son de los de esos tipos pero son idénticos (por ejemplo, tener `nonzero` en la misma posición en ambas listas), sí se interpolan esos valores.

- Ambas figuras deben usar la misma figura de referencia.
- Si ambas figuras son del mismo tipo, `ellipse()` o `circle()`, y ninguno de los radios usa las palabras clave `closest-side` o `farthest-side` keywords, se interpola entre cada valor de las funciones de figura.
- Si ambas figuras son de tipo `inset()`, se interpola entre cada valor de las funciones de figura.
- Si ambas figuras son de tipo `polygon()`, ambos polígonos tienen el mismo número de vértices y usan la misma regla [`<fill-rule>`](/es/docs/Web/SVG/Attribute/fill-rule), se interpola entre cada valor de la función de figura.
- En cualquier otro casa no se especifica la interpolación.

## Ejemplos

```
TODO
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- `{{cssxref("clip-path")}}`
- `{{cssxref("shape-outside")}}`
