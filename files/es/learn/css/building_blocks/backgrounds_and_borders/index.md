---
title: Fondos y bordes
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

En este artículo, veremos algunas de las cosas creativas que puedes hacer con los fondos y los bordes de CSS. Añadir degradados, imágenes de fondo o redondear esquinas; los fondos y los bordes son la solución para una gran cantidad de cuestiones de estilo en CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico</a
        >
        instalado, conocimientos básicos de
        <a
          href="/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, conocimientos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >) y nociones de CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con el CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender a diseñar el fondo y los bordes de las cajas.</td>
    </tr>
  </tbody>
</table>

## Aplicar estilo a los fondos en CSS

La propiedad {{cssxref ("background")}} de CSS es una propiedad abreviada de una serie de propiedades de fondo que vamos a ver en este artículo. Si descubres una propiedad de fondo compleja en una hoja de estilo, puede parecer un poco difícil de entender porque pueden estarse pasando muchos valores a la vez.

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.2) 39%,
        rgba(51, 56, 57, 1) 96%
      ) center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat,
    rebeccapurple;
}
```

Más adelante en este tutorial regresaremos a cómo funcionan las propiedades abreviadas, pero primero echemos un vistazo a las diferentes cosas que puedes hacer con los fondos en CSS, a partir de observar las propiedades de fondo individuales.

### Los colores de fondo

La propiedad {{cssxref ("background-color")}} define el color de fondo de cualquier elemento en CSS. La propiedad admite cualquier [`<color>`](/es/docs/Web/CSS/color_value) válido. Un color de fondo (`background-color`) se extiende por debajo del contenido y el relleno del elemento.

En el ejemplo siguiente hemos utilizado varios valores de color para añadir un color de fondo a la caja, a un encabezado y a un elemento {{htmlelement ("span")}}.

**Juega un poco con ellos; usa cualquier valor [\<color>](/es/docs/Web/CSS/color_value) disponible.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 800)}}

### Las imágenes de fondo

La propiedad {{cssxref ("background-image")}} permite visualizar una imagen de fondo en un elemento. En el ejemplo siguiente hay dos cajas: una tiene una imagen de fondo que es más grande que la caja misma, la otra tiene una imagen pequeña en forma de estrella.

Este ejemplo demuestra dos cosas sobre las imágenes de fondo. De forma predeterminada, la imagen grande no se reduce para ajustarse a la caja, por lo que solo vemos una pequeña esquina de esta, mientras que la imagen pequeña aparece en forma de mosaico hasta llenar la caja. En este caso, la imagen es en realidad una sola estrella.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 800)}}

**Si especificas un color de fondo además de una imagen de fondo, la imagen se muestra encima del color de fondo. Añade una propiedad `background-color` al ejemplo anterior y obsérvalo en acción.**

#### Controlar background-repeat

La propiedad {{cssxref ("background-repeat")}} se usa para controlar el comportamiento de tipo mosaico de las imágenes. Los valores disponibles son:

- `no-repeat`: evita que el fondo se repita.
- `repeat-x`: repite horizontalmente.
- `repeat-y`: repite verticalmente.
- `repeat`: es el valor por defecto; repite en ambas direcciones.

**Prueba estos valores en el ejemplo siguiente. Hemos establecido el valor `no-repeat`, así que solo verás una estrella. Prueba los diferentes valores (`repeat-x` y `repeat-y`) y observa cuáles son los efectos.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 800)}}

#### Dimensionar la imagen de fondo

En el ejemplo anterior hay una imagen grande que aparece recortada porque es más grande que el fondo. En este caso, podríamos usar la propiedad {{cssxref ("background-size")}}, que puede tomar valores de [longitud](/es/docs/Web/CSS/length) o [porcentaje](/es/docs/Web/CSS/porcentaje), para ajustar el tamaño de la imagen para que quepa dentro del fondo.

También puedes utilizar palabras clave:

- `cover`: el navegador agrandará la imagen lo suficientemente grande como para que esta cubra por completo el área de la caja sin que pierda su relación de aspecto. En este caso, es probable que parte de la imagen quede fuera de la caja.
- `contain`: el navegador adecuará el tamaño de la imagen para que quepa dentro de la caja. En este caso, pueden quedar huecos a ambos lados o en la parte superior e inferior de la imagen si la relación de aspecto de la imagen es diferente de la de la caja.

En el ejemplo siguiente hemos usado la imagen más grande del ejemplo anterior y unidades de longitud para establecer sus dimensiones dentro de la caja. Puedes ver que esto ha distorsionado la imagen.

Prueba lo siguiente:

- Cambia las unidades de longitud que has utilizado para modificar el tamaño del fondo.
- Elimina las unidades de longitud y observa qué sucede cuando usas `background-size: cover` o `background-size: contain`.
- Si tu imagen es más pequeña que la caja, puedes cambiar el valor `background-repeat` para que la imagen se repita.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### Posicionar la imagen de fondo

La propiedad {{cssxref ("background-position")}} te permite elegir la posición en la que aparece la imagen de fondo dentro de la caja a la que está asociada. Para ello se utiliza un sistema de coordenadas en el que la esquina superior izquierda de la caja es `(0,0)`, y la caja se coloca sobre los ejes horizontal (`x`) y vertical (`y`).

> **Nota:** El valor predeterminado de `background-position` es `(0,0)`.

Los valores de `background-position` más comunes toman dos valores independientes: un valor horizontal seguido de un valor vertical.

Puedes usar palabras clave como `top` y `right` (busca todas las demás en la página sobre la propiedad {{cssxref ("background-position")}}):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Y también [longitudes](/es/docs/Web/CSS/length) y [porcentajes](/es/docs/Web/CSS/porcentaje):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

También puedes mezclar valores de palabras clave con longitudes o porcentajes, por ejemplo:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}
```

Por último, también puedes usar una sintaxis de 4 valores para indicar una distancia desde ciertos bordes del cuadro: la unidad de longitud en este caso es un desplazamiento del valor que la precede. Entonces, en el CSS siguiente, colocamos el fondo a 20 px desde la parte superior y a 10 px desde la derecha:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**Utiliza el ejemplo siguiente para jugar con estos valores y mover la estrella por la caja.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 800)}}

> **Nota:** `background-position` es una propiedad abreviada de {{cssxref("background-position-x")}} y {{cssxref("background-position-y")}}, que te permiten configurar los diferentes valores de posición del eje por separado.

### Degradados de fondo

Un degradado, cuando se usa para un fondo, actúa como una imagen y también se establece usando la propiedad {{cssxref("background-image")}}.

Puedes leer más sobre los diferentes tipos de degradados y sobre qué puedes hacer con ellos en la página sobre el tipo de datos [`<gradient>`](/es/docs/Web/CSS/gradient) de MDN. Una forma divertida de jugar con degradados es usar uno de los muchos generadores de degradados CSS que hay disponibles en la web, [como este](https://cssgradient.io/). Puedes crear un degradado y luego copiar y pegar el código fuente que lo genera.

Prueba algunos degradados diferentes en el ejemplo siguiente. En las dos cajas hay, respectivamente, un degradado lineal que se extiende por toda la caja, y un degradado radial con un tamaño establecido, que por lo tanto se repite.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 800)}}

### Múltiples imágenes de fondo

También es posible poner múltiples imágenes de fondo: puedes especificar múltiples valores `background-image` para un solo atributo, separados cada uno por una coma.

Si haces esto, las imágenes de fondo pueden quedar superpuestas entre sí. Los fondos se superponen con la última imagen de fondo que hay en la parte inferior de la lista, y cada imagen anterior se apila encima de la que sigue en el código.

> **Nota:** Los degradados se pueden mezclar con imágenes de fondo normales.

Las otras propiedades `background-*` también pueden tener valores múltiples separados por comas, de la misma manera que `background-image`:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Cada valor de las diversas propiedades coincide con los valores que están en la misma posición en las otras propiedades. Arriba, por ejemplo, el valor para la propiedad `background-repeat` de `image1` será `no-repeat`. Sin embargo, ¿qué sucede cuando diferentes propiedades tienen una cantidad diferente de valores? La respuesta es que los valores que ocupan las posiciones más pequeñas se alternan cíclicamente: en el ejemplo anterior hay cuatro imágenes de fondo pero solo dos valores `background-position`. Los primeros dos valores de posición se aplicarán a las dos primeras imágenes, luego los valores volverán a asignarse cíclicamente: a `image3` se le dará el primer valor de posición, y a `image4` se le dará el segundo valor de posición.

**Vamos a jugar. En el ejemplo siguiente hemos incluido dos imágenes. Para demostrar el orden de superposición, cambia la imagen de fondo que aparece primero en la lista. O juega con las otras propiedades para cambiar la posición, el tamaño o repite los valores.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 800)}}

### Anclaje del fondo

Otra opción que hay disponible para fondos es especificar cómo se desplazan cuando se desplaza el contenido. Esto se controla con la propiedad {{cssxref ("background-attachment")}}, que puede tomar los valores siguientes:

- `scroll`: Hace que el fondo del elemento se desplace cuando te desplazas por el contenido de la página. Si te desplazas por el contenido del elemento, el fondo no se mueve. El efecto resultante es que el fondo está anclado a la página en una posición fija, por lo que se desplaza a medida que la página se desplaza.
- `fixed`: Hace que el fondo de un elemento quede fijo con respecto a la ventana gráfica, de modo que no se desplace cuando te desplazas por la página o el contenido del elemento. Siempre permanece en la misma posición de la pantalla.
- `local`: Este valor se añadió posteriormente (solo es compatible con Internet Explorer 9+, mientras que los otros son compatibles con IE4+) porque el valor `scroll` es bastante confuso y en muchos casos no hace lo que deseas. El valor `local` ancla el fondo al elemento en el que está configurado, de modo que cuando te desplazas por el contenido del elemento, el fondo se desplaza con este.

La propiedad {{cssxref ("background-attachment")}} solo tiene efecto cuando hay contenido por el que puedas desplazarte, por lo que hemos preparado un ejemplo para demostrar las diferencias entre los tres valores: echa un vistazo a [background-attachment.html](http://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (También puedes consultar el [código fuente](https://github.com/mdn/learning-area/tree/master/css/styling-boxes/backgrounds) aquí).

### Usar la propiedad abreviada para el fondo

Como mencionamos al comienzo de este artículo, a menudo verás fondos que están especificados usando la propiedad {{cssxref ("background")}}. Esta forma abreviada te permite configurar todas las diferentes propiedades a la vez.

Si utilizas varios fondos, debes especificar todas las propiedades para el primer fondo y luego añadir el fondo siguiente separado por una coma. En el ejemplo siguiente hay un degradado con un tamaño y una posición, luego un fondo de imagen con `no-repeat` y una posición y, por último, un color.

Al escribir los valores abreviados de las imágenes de fondo es necesario seguir algunas reglas, por ejemplo:

- Solo es posible especificar un color de fondo (`background-color`) después de la coma final.
- El valor para `background-size` solo puede incluirse inmediatamente después de `background-position`, separado con el carácter '/', así: `center/80%`.

Consulta la página para el atributo {{cssxref ("background")}} de MDN para ver todas las posibilidades.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 800)}}

### Consideraciones de accesibilidad con los fondos

Al colocar texto sobre una imagen o un color de fondo, debes asegurarte de que tiene suficiente contraste para que tus visitantes puedan leer el texto. Si estableces una imagen de fondo y el texto se coloca encima de la imagen, también debes especificar un color de fondo (`background-color`) que permita leer el texto si la imagen no se carga.

Los lectores de pantalla no pueden analizar las imágenes de fondo, por lo tanto, deben ser puramente decorativas; cualquier contenido importante debe ser parte de la página HTML y no debe estar contenido en un fondo.

## Bordes

Al aprender sobre el modelo de cajas descubrimos cómo los bordes afectan al tamaño de nuestra caja. En este artículo veremos cómo usar los bordes de una manera creativa. Por lo general, cuando a un elemento le añadimos bordes con CSS, usamos una propiedad abreviada que establece el color, el ancho y el estilo del borde en una línea de CSS.

Podemos establecer un borde para los cuatro lados de una caja con {{cssxref ("border")}}:

```css
.box {
  border: 1px solid black;
}
```

O podemos establecer solo un borde de la caja, por ejemplo:

```css
.box {
  border-top: 1px solid black;
}
```

Cada una de las propiedades de estas propiedades abreviadas sería:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Y las no abreviadas:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> **Nota:** Estas propiedades para el borde superior, derecho, inferior e izquierdo también tienen propiedades _lógicas_ asignadas que se relacionan con el modo de escritura del documento (por ejemplo, texto de izquierda a derecha o de derecha a izquierda, o de arriba a abajo). Exploraremos esto en la próxima lección, que expone el [uso de diferentes direcciones de texto](/es/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

**Hay una variedad de estilos que puedes usar para los bordes. En el ejemplo siguiente, hemos utilizado un estilo de borde diferente para los cuatro lados de la caja. Juega con el estilo, el ancho y el color del borde para ver cómo funcionan los bordes.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### Esquinas redondeadas

El redondeo de esquinas en una caja se logra mediante el uso de la propiedad {{cssxref ("border-radius")}} y otras propiedades asociadas que se relacionan con cada esquina de la caja. Como valor pueden usarse dos longitudes o porcentajes: el primer valor define el radio horizontal y el segundo el radio vertical. En muchos casos, solo se pondrá un valor, que se utilizará para ambos.

Por ejemplo, para hacer que las cuatro esquinas de una caja tengan un radio de 10 píxeles:

```css
.box {
  border-radius: 10px;
}
```

O para hacer que la esquina superior derecha tenga un radio horizontal de 1 em y un radio vertical del 10%:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

En el ejemplo siguiente hemos establecido las cuatro esquinas, y luego cambiamos los valores de la esquina superior derecha para que sea diferente. Juega con los valores para cambiar las esquinas. Echa un vistazo a la página de la propiedad {{cssxref ("border-radius")}} para ver las opciones de sintaxis disponibles.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

## Pon a prueba tus habilidades

Hemos cubierto mucho terreno en este artículo. ¿Recuerdas la información más relevante? Encontrarás más pruebas para verificar que retienes la información antes de seguir adelante en [Test your skills: Backgrounds and Borders](/es/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Resumen

En este artículo hemos expuesto bastantes conceptos y puedes ver que hay mucho para añadir a un fondo o a un borde de una caja. Explora las diferentes páginas de propiedades si deseas obtener más información sobre cualquiera de las características que hemos discutido. Todas las páginas de MDN contienen más ejemplos de uso, para que juegues y mejores tus conocimientos.

En el próximo artículo descubriremos cómo interacciona el modo de escritura de tu documento con tu CSS. ¿Qué sucede cuando el texto no fluye de izquierda a derecha?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
