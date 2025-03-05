---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

La [función](/es/docs/Web/CSS/CSS_Functions) [CSS](/es/docs/Web/CSS) **`linear-gradient()`** crea una imagen que consiste en una transición progresiva entre dos o más colores a lo largo de una línea recta. Su resultado es un objeto del tipo de datos {{CSSxRef("&lt;gradient&gt;")}}, que es un tipo especial de {{CSSxRef("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-linear-gradient.html")}}

## Sintaxis

```css
/* Un gradiente inclinado a 45 grados,
   comenzando azul y terminando rojo */
linear-gradient(45deg, blue, red)

/* Un gradiente que va de la esquina inferior derecha a la superior izquierda,
   comenzando azul y terminando rojo */
linear-gradient(to left top, blue, red)

/* Interpolación en espacio de color rectangular */
linear-gradient(in oklab, blue, red)

/* Interpolación en espacio de color polar */
linear-gradient(in hsl, blue, red)

/* Interpolación en espacio de color polar
  con método de interpolación de tono más largo */
linear-gradient(in hsl longer hue, blue, red)

/* Parada de color: Un gradiente que va de abajo hacia arriba,
   comenzando azul, volviéndose verde al 40% de su longitud,
   y terminando rojo */
linear-gradient(0deg, blue, green 40%, red)

/* Sugerencia de color: Un gradiente que va de izquierda a derecha,
   comenzando rojo, alcanzando el color del punto medio
   al 10% del recorrido de la longitud del gradiente,
   tomando el restante 90% de la longitud para cambiar a azul */
linear-gradient(.25turn, red, 10%, blue)

/* Parada de color de múltiple posición: Un gradiente inclinado a 45 grados,
   con una mitad inferior izquierda roja y una mitad superior derecha azul,
   con una línea dura donde el gradiente cambia de rojo a azul */
linear-gradient(45deg, red 0 50%, blue 50% 100%)
```

### Valores

- `<lado-o-esquina>`

  - : La posición del punto de inicio de la línea de gradiente. Si se especifica, consiste en la palabra `to` y hasta dos palabras clave: una indica el lado horizontal (`left` o `right`), y la otra el lado vertical (`top` o `bottom`). El orden de las palabras clave de los lados no importa. Si no se especifica, se asume `to bottom`.

    Los valores `to top`, `to bottom`, `to left`, y `to right` son equivalentes a los ángulos `0deg`, `180deg`, `270deg`, y `90deg`, respectivamente. Los otros valores se traducen en un ángulo.

- {{CSSxRef("&lt;angle&gt;")}}
  - : El ángulo de dirección de la línea de gradiente. Un valor de `0deg` es equivalente a `to top`; los valores crecientes giran en el sentido de las agujas del reloj a partir de ahí.
- `<parada-de-color>`
  - : Un valor de {{CSSxRef("&lt;color&gt;")}} para una parada de color, seguido de una o dos posiciones de parada opcionales, (cada una siendo un {{CSSxRef("&lt;percentage&gt;")}} o una {{CSSxRef("&lt;length&gt;")}} a lo largo del eje del gradiente).
- `<sugerencia-de-color>`
  - : Una sugerencia de {{glossary("interpolation", "interpolación")}} que define cómo progresa el gradiente entre paradas de color adyacentes. La longitud define en qué punto entre dos paradas de color el gradiente debe alcanzar el punto medio de la transición de color. Si se omite, el punto medio de la transición es el punto medio entre dos paradas de color.

> [!NOTE]
> La representación de [paradas de color en gradientes CSS](#composition_of_a_linear_gradient) sigue las mismas reglas que las paradas de color en [gradientes SVG](/es/docs/Web/SVG/Tutorial/Gradients).

## Descripción

Como con cualquier gradiente, un gradiente lineal [no tiene dimensiones intrínsecas](/es/docs/Web/CSS/image#description); es decir, no tiene un tamaño natural o preferido, ni una proporción preferida. Su tamaño concreto coincidirá con el tamaño del elemento al que se aplica.

Para crear un gradiente lineal que se repita para llenar su contenedor, use la función {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} en su lugar.

Debido a que los `<gradient>` pertenecen al tipo de datos `<image>`, solo se pueden usar donde se pueden usar [`<image>`](/es/docs/Web/CSS/image). Por esta razón, `linear-gradient()` no funcionará en {{CSSxRef("background-color")}} y otras propiedades que usan el tipo de datos {{CSSxRef("&lt;color&gt;")}}.

### Composición de un gradiente lineal

Un gradiente lineal se define por un eje—la _línea de gradiente_—y dos o más _puntos de parada de color_. Cada punto en el eje es un color distinto; para crear un gradiente suave, la función `linear-gradient()` dibuja una serie de líneas coloreadas perpendiculares a la línea de gradiente, cada una de las cuales coincide con el color del punto donde se cruza con la línea de gradiente.

![linear-gradient.png](linear-gradient.png)

La línea de gradiente se define por el centro de la caja que contiene la imagen de gradiente y por un ángulo. Los colores del gradiente se determinan mediante dos o más puntos: el punto de inicio, el punto final y, en medio, puntos de parada de color opcionales.

El _punto de inicio_ es la ubicación en la línea de gradiente donde comienza el primer color. El _punto final_ es el punto donde termina el último color. Cada uno de estos dos puntos se define por la intersección de la línea de gradiente con una línea perpendicular que pasa desde la esquina de la caja que está en el mismo cuadrante. El punto final se puede entender como el punto simétrico del punto de inicio. Estas definiciones algo complejas conducen a un efecto interesante que a veces se llama _esquinas mágicas_: las esquinas más cercanas a los puntos de inicio y final tienen el mismo color que sus respectivos puntos de inicio o final.

### Personalización de gradientes

Agregando más puntos de detención de color en la línea del gradiente, puedes crear una transición altamente personalizada entre múltiples colores. La posición de un punto de detención de color se puede definir explícitamente usando una {{CSSxRef("&lt;longitud&gt;")}} o un {{CSSxRef("&lt;porcentaje&gt;")}}. Si no especificas la ubicación de un color, se coloca a mitad de camino entre el que lo precede y el que lo sigue. Los siguientes dos gradientes son equivalentes.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Por defecto, los colores hacen una transición suave del color en un punto de detención al color en el punto de detención siguiente, siendo el punto medio entre los colores el punto intermedio de la transición de color. Puedes mover este punto medio a cualquier posición entre dos puntos de detención agregando una sugerencia de color % sin etiquetar entre los dos colores para indicar dónde debería estar el medio de la transición de color. El siguiente ejemplo es rojo sólido desde el inicio hasta el 10% y azul sólido desde el 90% hasta el final. Entre el 10% y el 90% el color hace una transición de rojo a azul; sin embargo, el punto medio de la transición está en el 30% en lugar de en el 50%, como sucedería sin la sugerencia de color del 30%.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Si dos o más puntos de detención de color están en la misma ubicación, la transición será una línea dura entre el primer y último color declarado en esa ubicación.

Los puntos de detención de color deben listarse en orden ascendente. Los puntos de detención de color posteriores con un valor menor sobrescribirán el valor del punto de detención de color anterior, creando una transición dura. El siguiente ejemplo cambia de rojo a amarillo en el 40%, y luego hace una transición de amarillo a azul sobre el 25% del gradiente:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Se permiten puntos de detención de color con múltiples posiciones. Un color puede declararse como dos puntos de detención de color adyacentes al incluir ambas posiciones en la declaración CSS. Los siguientes tres gradientes son equivalentes:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

De forma predeterminada, si no hay un color con un punto de detención en `0%`, el primer color declarado estará en ese punto. De manera similar, el último color continuará hasta el `100%`, o estará en el `100%` si no se ha declarado una longitud en ese último punto de detención.

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Gradiente en un ángulo de 45 grados

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(45deg, red, blue);
}
```

{{EmbedLiveSample("Gradient_at_a_45-degree_angle", 120, 120)}}

### Gradiente que comienza al 60% de la línea del gradiente

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}
```

{{EmbedLiveSample("Gradient_that_starts_at_60_of_the_gradient_line", 120, 120)}}

### Interpolación en el espacio de color rectangular

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(90deg in oklab, blue, red);
}
```

{{EmbedLiveSample("Interpolation in rectangular color space", 120, 120)}}

### Interpolación con matiz

```html hidden
<div class="shorter">menor arco de matiz</div>
<div class="longer">mayor arco de matiz</div>
```

```css hidden
div {
  height: 50vh;
  color: white;
  font-weight: bolder;
}
```

En este ejemplo de interpolación, se utiliza el sistema de color [hsl](/es/docs/Web/CSS/color_value/hsl) y se está interpolando el [matiz](/es/docs/Web/CSS/hue).

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

La caja en la parte superior usa la [interpolación menor](/es/docs/Web/CSS/hue-interpolation-method#shorter), lo que significa que el color pasa directamente de rojo a azul utilizando el arco más corto en la [rueda de color](/es/docs/Glossary/Color_wheel). La caja en la parte inferior usa la [interpolación mayor](/es/docs/Web/CSS/hue-interpolation-method#longer), lo que significa que el color pasa de rojo a azul usando el arco más largo, atravesando verdes, amarillos y naranjas.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradiente con puntos de detención de color en varias posiciones

Este ejemplo usa puntos de detención de color en varias posiciones, con colores adyacentes que tienen el mismo valor de punto de detención de color, creando un efecto de rayas.

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(
    to right,
    red 20%,
    orange 20% 40%,
    yellow 40% 60%,
    green 60% 80%,
    blue 80%
  );
}
```

{{EmbedLiveSample("Gradient_with_multi-position_color_stops", 120, 120)}}

### Más ejemplos de linear-gradient

Consulta [uso de gradientes CSS](/es/docs/Web/CSS/CSS_images/Using_CSS_gradients) para obtener más ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con los navegadores

{{Compat}}

## Véase también

- [Uso de degradados CSS](/es/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Otras funciones de gradiente: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/es/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/es/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [Módulo de imágenes CSS](/es/docs/Web/CSS/CSS_images)
