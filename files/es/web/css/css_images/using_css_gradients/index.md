---
title: Usando degradados con CSS
slug: Web/CSS/CSS_images/Using_CSS_gradients
---

{{CSSRef}}

Los **degradados en CSS** están representados por el tipo de dato {{cssxref("&lt;gradient&gt;")}}, un tipo especial de {{cssxref("&lt;image&gt;")}} hecho de una transición progresiva entre dos o más colores. Puede elegir entre tres tipos de degradados: lineal (creado con la función {{cssxref("gradient/linear-gradient", "linear-gradient()")}}), radial (creado con la función {{cssxref("gradient/radial-gradient", "radial-gradient()")}}) y cónica (creada con la función {{cssxref("gradient/conic-gradient", "conic-gradient()")}}). También puede crear degradados repetidos con {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", " repeating-radial-gradient()")}}, y {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Los degradados se pueden usar en cualquier lugar donde usaría `<image>`, como en los fondos. Debido a que los degradados se generan dinámicamente, pueden anular la necesidad de los archivos de imagen de trama que tradicionalmente se usaban para lograr efectos similares. Además, debido a que los degradados son generados por el navegador, se ven mejor que las imágenes rasterizadas cuando se acercan y se pueden cambiar de tamaño sobre la marcha.

Comenzaremos introduciendo degradados lineales, luego presentaremos características que son compatibles con todos los tipos de degradados usando degradados lineales como ejemplo, luego pasaremos a degradados radiales, cónicos y repetitivos.

## Usando degradados lineales

Un degradado lineal crea una banda de colores que progresan en línea recta.

### Un degradado lineal básico

Para crear el tipo de degradado más básico, todo lo que necesita es especificar dos colores. Estos se llaman _paradas de color_. Debes tener al menos dos, pero puedes tener tantos como quieras.

```html hidden
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('A_basic_linear_gradient', 120, 120) }}

### Cambiando la dirección

De forma predeterminada, los degradados lineales se ejecutan de arriba a abajo. Puede cambiar su rotación especificando una dirección.

```html hidden
<div class="horizontal-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}
```

{{ EmbedLiveSample('Changing_the_direction', 120, 120) }}

### Degradados diagonales

Incluso puede hacer un degradado en diagonal, de esquina a esquina.

```html hidden
<div class="diagonal-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 100px;
}
```

```css
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}
```

{{ EmbedLiveSample('Diagonal_gradients', 200, 100) }}

### Usando ángulos

Si desea tener más control sobre la dirección, puede darle al degradado un ángulo específico.

```html hidden
<div class="angled-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
```

{{ EmbedLiveSample('Using_angles', 120, 120) }}

Cuando se usa un ángulo, `0deg` crea un degradado vertical que se extiende de abajo hacia arriba, `90deg` crea un degradado horizontal que se extiende de izquierda a derecha, y así sucesivamente en el sentido de las agujas del reloj. Los ángulos negativos corren en dirección contraria a las manecillas del reloj.

![Cuatro cuadros que enumeran el ángulo y muestran el gradiente asociado. 0deg comienza y arriba y va a la parte inferior. 90deg comienza a la derecha y va a la izquierda. 180deg comienza y baja y va a la parte superior. -90deg comienza a la izquierda y va a la derecha.](linear_red_angles.png)

## Declaración de colores y creación de efectos

Todos los tipos de degradados en CSS son una gama de colores que dependen de la posición. Los colores producidos por los degradados en CSS pueden variar continuamente con la posición, produciendo transiciones de color suaves. También es posible crear bandas de colores sólidos y transiciones fuertes entre dos colores. Las siguientes son válidas para todas las funciones de degradados:

### Usando degradados de más de dos colores

No tienes que limitarte a dos colores, ¡puedes usar tantos como quieras! De forma predeterminada, los colores están espaciados uniformemente a lo largo del degradado.

```html hidden
<div class="auto-spaced-linear-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}
```

{{ EmbedLiveSample('Using_more_than_two_colors', 120, 120) }}

### Posicionamiento de paradas de color

No es necesario que deje las paradas de color en sus posiciones predeterminadas. Para ajustar sus ubicaciones, puede dar a cada uno cero, uno o dos porcentajes o, para degradados radiales y lineales, valores de longitud absolutos. Si especifica la ubicación como un porcentaje, `0%` representa el punto de inicio, mientras que `100%` representa el punto final; sin embargo, puede usar valores fuera de ese rango si es necesario para obtener el efecto que desea. Si deja una ubicación sin especificar, la posición de esa parada de color en particular se calculará automáticamente, con la primera parada de color en `0%` y la última parada de color en `100%`, y cualquier otro color deja de ser a mitad de camino entre sus paradas de color adyacentes.

```html hidden
<div class="multicolor-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.multicolor-linear {
  background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

{{ EmbedLiveSample('Positioning_color_stops', 120, 120) }}

### Creando lineas duras

Para crear una lina dura entre dos colores, creando una franja en lugar de una transición gradual, las paradas de color adyacentes se pueden establecer en la misma ubicación. En este ejemplo, los colores comparten una parada de color en la marca `50%`, a la mitad del degradado:

```html hidden
<div class="striped"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.striped {
  background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

{{ EmbedLiveSample('Creating_hard_lines', 120, 120) }}

### Sugerencias de degradado

De forma predeterminada, el degradado cambia uniformemente de un color al siguiente. Puede incluir una sugerencia de color para mover el punto medio del valor de transición a un punto determinado a lo largo del degradado. En este ejemplo, hemos movido el punto medio de la transición de la marca del 50% a la marca del 10%.

```html hidden
<div class="color-hint"></div>
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
}
```

```css
.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('Gradient_hints', 120, 120) }}

### Creación de bandas y rayas de colores

Para incluir un área de color sólida sin transición dentro de un degradado, incluya dos posiciones para la parada de color. Las paradas de color pueden tener dos posiciones, lo que equivale a dos paradas de color consecutivas con el mismo color en posiciones diferentes. El color alcanzará la saturación completa en la primera parada de color, mantendrá esa saturación hasta la segunda parada de color y pasará al color de la parada de color adyacente a través de la primera posición de la parada de color adyacente.

```html hidden
<div class="multiposition-stops"></div>
<div class="multiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.multiposition-stops {
  background: linear-gradient(
    to left,
    lime 20%,
    red 30%,
    red 45%,
    cyan 55%,
    cyan 70%,
    yellow 80%
  );
  background: linear-gradient(
    to left,
    lime 20%,
    red 30% 45%,
    cyan 55% 70%,
    yellow 80%
  );
}
.multiposition-stop2 {
  background: linear-gradient(
    to left,
    lime 25%,
    red 25%,
    red 50%,
    cyan 50%,
    cyan 75%,
    yellow 75%
  );
  background: linear-gradient(
    to left,
    lime 25%,
    red 25% 50%,
    cyan 50% 75%,
    yellow 75%
  );
}
```

{{ EmbedLiveSample('Creating_color_bands_stripes', 120, 120) }}

En el primer ejemplo anterior, el color lima va desde la marca del 0%, lo que está implícito, hasta la marca del 20%, pasa del color lima a rojo durante el siguiente 10% del ancho del degradado, alcanza el rojo sólido en la marca del 30%, y permanece en rojo sólido hasta el 45% del degradado, donde se desvanece a cian, siendo totalmente cian durante el 15% del degradado, y así sucesivamente.

En el segundo ejemplo, la segunda parada de color de cada color está en la misma ubicación que la primera parada de color del color adyacente, lo que crea un efecto de rayas.

En ambos ejemplos, el degradado se escribe dos veces: el primero es el método de nivel 3 de imágenes CSS de repetir el color para cada parada y el segundo ejemplo es el método de parada de color múltiple de nivel 4 de imágenes CSS de incluir dos longitudes de parada de color en un declaración de parada de color lineal.

### Controlar la progresión de un degradado

De forma predeterminada, un degradado progresa uniformemente entre los colores de dos paradas de color adyacentes, siendo el punto medio entre esas dos paradas de color el valor de color del punto medio. Puede controlar la {{glossary("interpolation","interpolación")}}, o la progresión, entre dos paradas de color al incluir una ubicación de sugerencia de color. En este ejemplo, el color alcanza el punto medio entre el lima y el cian en el 20% del degradado en lugar del 50% del recorrido. El segundo ejemplo no contiene la sugerencia para resaltar la diferencia que puede hacer la sugerencia de color:

```html hidden
<div class="colorhint-gradient"></div>
<div class="regular-progression"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 10px;
  box-sizing: border-box;
}
```

```css
.colorhint-gradient {
  background: linear-gradient(to top, lime, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, lime, cyan);
}
```

{{ EmbedLiveSample('Controlling_the_progression_of_a_gradient', 120, 120) }}

### Degradados superpuestos

Los degradados admiten la transparencia, por lo que puede apilar varios fondos para lograr algunos efectos bastante elegantes. Los fondos se apilan de arriba a abajo, con el primero especificado en la parte superior.

```html hidden
<div class="layered-image"></div>
```

```css hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.layered-image {
  background: linear-gradient(to right, transparent, mistyrose),
    url("critters.png");
}
```

{{ EmbedLiveSample('Overlaying_gradients', 300, 150) }}

### Degradados apilados

Incluso puede apilar degradados con otros degradados. Siempre que los degradados superiores no sean completamente opacos, los degradados inferiores seguirán siendo visibles.

```html hidden
<div class="stacked-linear"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-linear {
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
}
```

{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}

## Uso de degradados radiales

Los degradados radiales son similares a los degradados lineales, excepto que irradian desde un punto central. Puedes elegir dónde está ese punto central. También puedes hacerlos circulares o elípticos.

### Un degradado radial básico

Al igual que con los degradados lineales, todo lo que necesita para crear un degradado radial son dos colores. De forma predeterminada, el centro del degradado está en la marca del 50% al 50%, y el degradado es elíptico y coincide con la relación de aspecto de su cuadro:

```html hidden
<div class="simple-radial"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.simple-radial {
  background: radial-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_radial_gradient', 120, 120) }}

### Posicionamiento de paradas de color radiales

Nuevamente, al igual que los degradados lineales, puede colocar cada parada de color radial con un porcentaje o una longitud absoluta.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_radial_color_stops', 120, 120) }}

### Posicionamiento del centro del degradado

Puede colocar el centro del degradado con términos clave, porcentaje o longitudes absolutas, valores de longitud y porcentaje repetidos si solo hay uno presente, de lo contrario, en el orden de posición desde la izquierda y posición desde la parte superior.

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_center_of_the_gradient', 120, 120) }}

### Tamaño en degradados radiales

A diferencia de los degradados lineales, puede especificar el tamaño de los degradados radiales. Los valores posibles incluyen `closest-corner` (esquina más cercana), `closest-side` (lado más cercano), `farthest-corner` (esquina más alejada) y `farthest-side` (lado más lejano), siendo `farthest-corner` (esquina más alejada) el valor predeterminado. Los círculos también se pueden dimensionar con una longitud y las elipses con una longitud o porcentaje.

#### Ejemplo: lado más cercano para elipses

Este ejemplo utiliza el valor de tamaño del `closest-side` (lado más cercano), lo que significa que el tamaño se establece según la distancia desde el punto de inicio (el centro) hasta el lado más cercano del cuadro adjunto.

```html hidden
<div class="radial-ellipse-side"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-side {
  background: radial-gradient(
    ellipse closest-side,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_ellipses', 240, 100) }}

#### Ejemplo: esquina más lejana para elipses

Este ejemplo es similar al anterior, excepto que su tamaño se especifica como `farthest-corner` (esquina más lejana), que establece el tamaño del degradado por la distancia desde el punto de inicio hasta la esquina más alejada del cuadro que lo encierra desde el punto de inicio.

```html hidden
<div class="radial-ellipse-far"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-far {
  background: radial-gradient(
    ellipse farthest-corner at 90% 90%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_farthest-corner_for_ellipses', 240, 100) }}

#### Ejemplo: lado más cercano para círculos

Este ejemplo usa `closest-side` (lado más cercano), lo que hace que el radio del círculo sea la distancia entre el centro del degradado y el lado más cercano. En este caso, el radio es la distancia entre el centro y el borde inferior, porque el degradado se coloca al 25% de la izquierda y al 25% de la parte inferior, y la altura del elemento `div` es menor que el ancho.

```html hidden
<div class="radial-circle-close"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-close {
  background: radial-gradient(
    circle closest-side at 25% 75%,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_closest-side_for_circles', 240, 120) }}

#### Ejemplo: longitud o porcentaje para elipses

Solo para elipses, puede cambiar el tamaño de la elipse utilizando una longitud o un porcentaje. El primer valor representa el radio horizontal, el segundo el radio vertical, donde usas un porcentaje que corresponde al tamaño del cuadro en esa dimensión. En el siguiente ejemplo, se ha usado un porcentaje para el radio horizontal.

```html hidden
<div class="radial-ellipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-ellipse-size {
  background: radial-gradient(
    ellipse 50% 50px,
    red,
    yellow 10%,
    #1e90ff 50%,
    beige
  );
}
```

{{ EmbedLiveSample('Example_length_or_percentage_for_ellipses', 240, 120) }}

#### Ejemplo: longitud para círculos

Para los círculos, el tamaño se puede dar como [\<length>](/es/docs/Web/CSS/length), que es el tamaño del círculo.

```html hidden
<div class="radial-circle-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-size {
  background: radial-gradient(circle 50px, red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_length_for_circles', 240, 120) }}

### Degradados radiales apilados

Al igual que los degradados lineales, también puede apilar degradados radiales. El primero especificado está en la parte superior, el último en la parte inferior.

```html hidden
<div class="stacked-radial"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-radial {
  background:
    radial-gradient(
      circle at 50% 0,
      rgba(255, 0, 0, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(0, 0, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(0, 255, 0, 0.5),
        rgba(0, 255, 0, 0) 70.71%
      ) beige;
  border-radius: 50%;
}
```

{{ EmbedLiveSample('Stacked_radial_gradients', 200, 200) }}

## Usando gradientes cónicos

La función [CSS](/es/docs/Web/CSS) **`conic-gradient()`** crea una imagen que consta de un degradado con transiciones de color giradas alrededor de un punto central (en lugar de irradiar desde el centro). Ejemplos de degradados cónicos incluyen gráficos circulares y {{glossary("color wheel", "ruedas de colores")}}, pero también se pueden usar para crear tableros de ajedrez y otros efectos interesantes.

La sintaxis de degradado cónico es similar a la sintaxis de degradado radial, pero las paradas de color se colocan alrededor de un arco de degradado, la circunferencia de un círculo, en lugar de en la línea de degradado que emerge del centro del degradado, y el las paradas de color son porcentajes o grados: las longitudes absolutas no son válidas.

En un degradado radial, la transición de colores es desde el centro de una elipse, hacia el exterior, en todas las direcciones. Con degradados cónicos, los colores cambian como si giraran alrededor del centro de un círculo, comenzando en la parte superior y siguiendo en el sentido de las agujas del reloj. De forma similar a los degradados radiales, puede colocar el centro del degradado. De forma similar a los degradados lineales, puede cambiar el ángulo del degradado.

### Un degradado cónico básico

Al igual que con los degradados lineales y radiales, todo lo que necesita para crear un degradado cónico son dos colores. Por defecto, el centro del degradado está en la marca 50% 50%, con el inicio del degradado hacia arriba:

```html hidden
<div class="simple-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-conic {
  background: conic-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_conic_gradient', 120, 120) }}

### Posicionamiento del centro cónico

Al igual que los degradados radiales, puede colocar el centro del degradado cónico con términos clave, porcentajes o longitudes absolutas, con la palabra clave `at`

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_conic_center', 120, 120) }}

### Cambiando el ángulo

De forma predeterminada, las diferentes paradas de color que especifique están espaciadas equidistantemente alrededor del círculo. Puede colocar el ángulo de inicio del degradado cónico utilizando la palabra clave `from` al principio seguida de un ángulo o una longitud, y puede especificar diferentes posiciones para las paradas de colores al incluir un ángulo o una longitud después de ellas.

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
}
```

{{ EmbedLiveSample('Changing_the_angle', 120, 120) }}

## Usar degradados repetitivos

Las funciones {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}} y {{cssxref("gradient/conic-gradient", "conic-gradient()")}} no admiten paradas de color repetidas automáticamente. Sin embargo, las funciones {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} y {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} están disponibles para ofrecer esta funcionalidad.

El tamaño de la línea de degradado o el arco que se repite es la longitud entre el primer valor de parada de color y el último valor de longitud de parada de color. Si la primera parada de color solo tiene un color y no tiene longitud de parada de color, el valor predeterminado es 0. Si la última parada de color tiene solo un color y no tiene longitud de parada de color, el valor predeterminado es 100%. Si no se declara ninguno, la línea de degradado es 100%, lo que significa que los degradados lineales y cónicos no se repetirán y el degradado radial solo se repetirá si el radio del degradado es menor que la longitud entre el centro del degradado y la esquina más alejada. Si se declara la primera parada de color y el valor es mayor que 0, el degradado se repetirá, ya que el tamaño de la línea o el arco es la diferencia entre la primera parada de color y la última parada de color es inferior al 100% o 360 grados.

### Gradientes lineales repetitivos

Este ejemplo usa {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} para crear un degradado que progresa repetidamente en línea recta. Los colores se alternan nuevamente a medida que se repite el degradado. En este caso, la línea de degradado tiene una longitud de 10px.

```html hidden
<div class="repeating-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-linear {
  background: repeating-linear-gradient(
    -45deg,
    red,
    red 5px,
    blue 5px,
    blue 10px
  );
}
```

{{ EmbedLiveSample('Repeating_linear_gradients', 120, 120) }}

### Múltiples degradados lineales repetitivos

De forma similar a los degradados lineales y radiales normales, puede incluir varios degradados, uno encima del otro. Esto solo tiene sentido si los degradados son parcialmente transparentes, lo que permite que los degradados posteriores se muestren a través de las áreas transparentes, o si incluye diferentes valores de propiedad en [background-size](/es/docs/Web/CSS/background-size), opcionalmente con diferente [background-position](/es/docs/Web/CSS/background-position), para cada imagen degradada. Estamos usando la transparencia.

En este caso, las líneas de degradado tienen una longitud de 300px, 230px y 300px.

```html hidden
<div class="multi-repeating-linear"></div>
```

```css hidden
div {
  width: 600px;
  height: 400px;
}
```

```css
.multi-repeating-linear {
  background: repeating-linear-gradient(
      190deg,
      rgba(255, 0, 0, 0.5) 40px,
      rgba(255, 153, 0, 0.5) 80px,
      rgba(255, 255, 0, 0.5) 120px,
      rgba(0, 255, 0, 0.5) 160px,
      rgba(0, 0, 255, 0.5) 200px,
      rgba(75, 0, 130, 0.5) 240px,
      rgba(238, 130, 238, 0.5) 280px,
      rgba(255, 0, 0, 0.5) 300px
    ), repeating-linear-gradient(
      -190deg,
      rgba(255, 0, 0, 0.5) 30px,
      rgba(255, 153, 0, 0.5) 60px,
      rgba(255, 255, 0, 0.5) 90px,
      rgba(0, 255, 0, 0.5) 120px,
      rgba(0, 0, 255, 0.5) 150px,
      rgba(75, 0, 130, 0.5) 180px,
      rgba(238, 130, 238, 0.5) 210px,
      rgba(255, 0, 0, 0.5) 230px
    ), repeating-linear-gradient(23deg, red 50px, orange 100px, yellow 150px, green
        200px, blue 250px, indigo 300px, violet 350px, red 370px);
}
```

{{ EmbedLiveSample('Multiple_repeating_linear_gradients', 600, 400) }}

### Degradado de cuadros

Para crear cuadrados incluimos varios degradados superpuestos con transparencia. En la primera declaración de antecedentes enumeramos cada parada de color por separado. La segunda declaración de propiedad de fondo usando la sintaxis de parada de color de posición múltiple:

```html hidden
<div class="plaid-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.plaid-gradient {
  background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ), repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px,
      transparent 56px,
      transparent 63px,
      rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px,
      transparent 69px,
      transparent 116px,
      rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px
    ), repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px
    ), repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(
          143,
          77,
          63,
          0.25
        ) 5px, rgba(143, 77, 63, 0.25) 10px);

  background: repeating-linear-gradient(
      90deg,
      transparent 0 50px,
      rgba(255, 127, 0, 0.25) 50px 56px,
      transparent 56px 63px,
      rgba(255, 127, 0, 0.25) 63px 69px,
      transparent 69px 116px,
      rgba(255, 206, 0, 0.25) 116px 166px
    ), repeating-linear-gradient(
      0deg,
      transparent 0 50px,
      rgba(255, 127, 0, 0.25) 50px 56px,
      transparent 56px 63px,
      rgba(255, 127, 0, 0.25) 63px 69px,
      transparent 69px 116px,
      rgba(255, 206, 0, 0.25) 116px 166px
    ), repeating-linear-gradient(
      -45deg,
      transparent 0 5px,
      rgba(143, 77, 63, 0.25) 5px 10px
    ), repeating-linear-gradient(45deg, transparent 0 5px, rgba(
          143,
          77,
          63,
          0.25
        ) 5px 10px);
}
```

{{ EmbedLiveSample('Plaid_gradient', 200, 200) }}

### Degradados radiales repetitivos

Este ejemplo usa {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} para crear un degradado que irradia repetidamente desde un punto central. Los colores se alternan una y otra vez a medida que se repite el degradado.

```html hidden
<div class="repeating-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-radial {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{ EmbedLiveSample('Repeating_radial_gradients', 120, 120) }}

### Múltiples degradados radiales repetitivos

```html hidden
<div class="multi-target"></div>
```

```css hidden
div {
  width: 250px;
  height: 150px;
}
```

```css
.multi-target {
  background:
    repeating-radial-gradient(
        ellipse at 80% 50%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 15px,
        rgba(255, 255, 255, 0.5) 15px,
        rgba(255, 255, 255, 0.5) 30px
      ) top left no-repeat,
    repeating-radial-gradient(
        ellipse at 20% 50%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 10px,
        rgba(255, 255, 255, 0.5) 10px,
        rgba(255, 255, 255, 0.5) 20px
      ) top left no-repeat yellow;
  background-size:
    200px 200px,
    150px 150px;
}
```

{{ EmbedLiveSample('Multiple_repeating_radial_gradients', 250, 150) }}

## Veáse también

- Funciones de degradado: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Tipos de datos CSS relacionados con degradados: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- Propiedades CSS relacionadas con degradados: {{cssxref("background")}}, {{cssxref("background-image")}}
- [Galería de patrones de degradados CSS, por Lea Verou](https://projects.verou.me/css3patterns/)
- [Biblioteca de degradados CSS, por Estelle Weyl](http://standardista.com/cssgradients/)
- [Generador de degradado CSS](https://cssgenerator.org/gradient-css-generator.html)
