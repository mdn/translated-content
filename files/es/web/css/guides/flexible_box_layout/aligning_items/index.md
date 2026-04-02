---
title: Aligning Items in a Flex Container
slug: Web/CSS/Guides/Flexible_box_layout/Aligning_items
original_slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
---

Una de las razones por las que flexbox atrajo rápidamente el interés de los desarrolladores web es que por primera vez en la web se ha conseguido unas posibilidades completas de alineamiento de elementos. Se habilita la alineación vertical, de modo que por fin existe una manera rápida y facil de centrar una caja. A lo largo de esta guía, vamos a desarrollar un exhaustivo recorrido sobre el funcionamiento de las propiedades de alineamiento y justificación en Flexbox.

Para centrar nuestra caja, usamos la propiedad align-items para alinear nuestro artículo en el eje transversal, que en este caso es el eje del bloque que se ejecuta verticalmente. Utilizamos justify-content para alinear el elemento en el eje principal, que en este caso el eje en línea se ejecuta horizontalmente.

![A containing element with another box centered inside it.](align1.png)

Puedes echar un vistazo al código de este ejemplo a continuación. Cambia el tamaño del contenedor o elemento anidado y el elemento anidado siempre permanece centrado.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Propiedades que controlan la alineación

Las propiedades que veremos en esta guía son las siguientes.

- {{cssxref("justify-content")}} — controla la alineación de todos los elementos en el eje principal.
- {{cssxref("align-items")}} — controla la alineación de todos los elementos en el eje transversal.
- {{cssxref("align-self")}} — controla la alineación de un elemento flexible individual en el eje transversal.
- {{cssxref("align-content")}} — descrito en la especificación como para "empaquetar líneas flexibles"; Controla el espacio entre las líneas de flexión en el eje transversal.

También descubriremos cómo se pueden usar los márgenes automáticos para la alineación en flexbox

> [!NOTE]
> Las propiedades de alineación en Flexbox se han colocado en su propia especificación — [CSS Box Alignment Level 3](https://www.w3.org/TR/css-align-3/). Se espera que esta especificación finalmente reemplace las propiedades tal como se definen en Flexbox Nivel Uno.

## El eje transversal

Las propiedades `align-items` y `align-self` controlan la alineación de nuestros elementos flexibles en el eje transversal, en filas si `flex-direction` se encuentra en row ó en columnas si `flex-direction se encuentra en` column.

Estamos haciendo uso de la alineación del eje transversal en el ejemplo de flexión más simple. Si agregamos display: flex a un contenedor, todos los elementos secundarios se convierten en elementos flexibles organizados en una fila. Todos se estirarán para ser tan altos como el elemento más alto, ya que ese elemento define la altura de los elementos en el eje transversal. Si su contenedor flexible tiene una altura establecida, entonces los elementos se extenderán a esa altura, independientemente de la cantidad de contenido en el elemento.

![Three items, one with additional text causing it to be taller than the others.](align2.png)

![Three items stretched to 200 pixels tall](align3.png)

La razón por la que los elementos se convierten en la misma altura es que el valor inicial de `align-items`, la propiedad que controla la alineación en el eje transversal, se establece en `stretch`.

Podemos usar otros valores para controlar como se alinean los items:

- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: center`
- `align-items: stretch`
- `align-items: baseline`

En el ejemplo en vivo a continuación, el valor de `align-items` is `stretch`. Pruebe los otros valores y vea cómo todos los elementos se alinean entre sí en el contenedor flexible.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}}

### Alineando un item individual con align-self

La propiedad align-items establece la propiedad align-self en todos los elementos flexibles como un grupo. Esto significa que puede declarar explícitamente la propiedad `align-self` para apuntar a un solo elemento. La propiedad `align-self` acepta todos los mismos valores que `align-items`, además del valor `auto`, que restablecerá el valor a lo que esté definido en el contenedor flex o flexible..

En este siguiente ejemplo en vivo, el contenedor flex tiene el elemento de alineación: `flex-start`, lo que significa que todos los elementos están alineados con el inicio del eje transversal. En este caso se dirige al primer elemento utilizando un selector `first-child`, y se configuró con la propiedad: `strecth`; otro elemento ha sido alineado, utilizando su clase `selected` y dando valor a la propiedad `align-self: center`. Puede cambiar el valor de `align-items` o cambiar los valores de `align-self` en los elementos individuales para ver cómo funciona esto.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}}

### Cambiando el eje principal

Hasta ahora hemos examinado el comportamiento cuando nuestra `flex-direction` es `row`, y mientras trabajamos en un lenguaje escrito de arriba a abajo. Esto significa que el eje principal corre a lo largo de la fila horizontalmente, y nuestra alineación del eje transversal mueve los elementos hacia arriba y hacia abajo.

![Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the vertical axis.](align4.png)

Si cambiamos nuestra `flex-direction` a columna, `align-items` y `align-self` van a alinear los items a la derecha y a la izquierda.

![Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the horizontal axis.](align5.png)

Puede probarlo con el siguiente ejemplo, que tiene un contenedor flexible, con `flex-direction: column`, y que de lo contrario seria exactamente igual al ejemplo anterior. .

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}}

## Alineando el contenido en el eje transversal: la propiedad align-content

Hasta ahora hemos estado alineando los elementos, o un elemento individual dentro del área definida por el contenedor flexible. Si tiene un contenedor flexible de varias líneas envuelto, también puede usar la propiedad `align-content` para controlar la distribucion del espacio entre las filas. En la especificación, esto se describe como [empaquetamiento de lineas flexibles](https://drafts.csswg.org/css-flexbox/#align-content-property).

Para que `align-content` funcione necesita una mayor altura en su contenedor flexible que la que requiere para mostrar los items. A partir de ahi el tratara a todos los items como un conjunto, para determinar que sucede con ese espacio libre y y la alineacion de todo el conjunto de elementos que contiene.

La propiedad `align-content` acepta los siguientes valores:

- `align-content: flex-start`
- `align-content: flex-end`
- `align-content: center`
- `align-content: space-between`
- `align-content: space-around`
- `align-content: stretch`
- `align-content: space-evenly` (not defined in the Flexbox specification)

En el ejemplo en vivo siguiente, el contenedor flexible, tiene una altura de 400 pixels, lo cual es mas de lo que necesita para mostrar nuestros items. El valor de `align-content` lo que significa que el espacio disponible es compartido entre las lineas flexibles que estan colocadas al ras al inicio y al final del contenedor en el eje transversal.

Pruebe con otros valores para ver como la propiedad `align-content` funciona.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}}

Una vez mas podemos cambiar nuestra `flex-direction` a `column` para ver como esta propieda se comporta cuando trabajamos con columnas. Al igual que antes necesitamos suficiente espacio en el eje transversal para dejar algun espacio libre despues de mostrar todos los items

{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}}

> [!NOTE]
> El valor `space-evenly` no está definido en las especificaciones de flexbox y la ultima adiccion a las especificaciones de Alineacion de cajas Box Alignment . El soporte del navegador para este valor no es tan bueno como el de los valores definidos en la especificación de flexbox.

Revise la [documentacion para `justify-content` en MDN](/es/docs/Web/CSS/Reference/Properties/justify-content) para encontrar más detalles de todos sus valores y el soporte de los navegadores.

## Alineando contenido en el eje principal

Ahora que hemos visto como funciona la alineacion en el eje transversal, podemos echar una mirada al eje principal. Aquí solo tendremos una propiedad disponible disponible — `justify-content`. Esto se debe a que solo podemos trabajar con los items como grupos en el eje principal. Con `justify-content` controlamos que sucede con el espacion disponible, en caso de que haya más espacio del que se necesita para mostrar los items

En nuestro ejemplo inicial con `display: flex` en el contenedor, los items se muestran como una fila y todos se alinean al inicio del contenedor. Esto se debe a que el valor inicial de `justify-content` es `flex-start`. Cualquier espacio disponible se coloca al final de los elementos.

![Three items, each 100 pixels wide in a 500 pixel container. The available space is at the end of the items.](align6.png)

La propiedad `justify-content` accepta el mismo valor que `align-content`.

- `justify-content: flex-start`
- `justify-content: flex-end`
- `justify-content: center`
- `justify-content: space-between`
- `justify-content: space-around`
- `justify-content: stretch`
- `justify-content: space-evenly` (not defined in the Flexbox specification)

En el ejemplo a continuacion el valor de `justify-content` es `space-between`. El espacio disponible despues de mostrar los items es distribuido entre estos. El elemento izquierdo y derecho se alinea al ras con el inicio y el final.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}}

Si el eje principal esta en direccion bloque porque `flex-direction` tiene valor `column`, entonces `justify-content` distribuira el espacio entre items, en la misma medida que el posee el espacio en el contenedor flex para ser distribuida, o sea siempre que haya espacio en el contenedor para distribuir.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}}

### Modos de Alineación y escritura

Recuerda que con todos estos metodos de alineación los valores de `flex-start` y `flex-end` son escritos en modo consciente. Si el valor de `justify-content` es `start` y el modo de escritura es izquierda a derecha, como en español o ingles, los elementos se alinearán comenzando en el lado izquierdo del contenedor

![Three items lined up on the left](basics5.png)

Sin embargo si el modo de escritura es de derecha a izquierda como en arabe, los elementos o items se alinearán en el extremo derecho del contenedor.

![Three items lined up from the right](basics6.png)

El ejemplo siguiente tiene la propiedad `direction` con valor `rtl` para forzar a los elementos a colocarse de derecha a izquierda. Puedes eliminarlo o cambiar los valores de `justify-content` para ver como flexbox se comporta cuando el inicio de la direccion dentro de la linea, es a la derecha.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}}

## Alineacíon y flex-direction

La linea de inicio también cambiará si cambias la propiedad `flex-direction` — por ejemplo usando `row-reverse` en vez de `row`.

En el ejemplo siguiente tengo items dispuestos con `flex-direction: row-reverse` y `justify-content: flex-end`. En lenguaje de izquierda a derecha, estos elementos se alinearan a la izquierda. Prueba a cambiar `flex-direction: row-reverse` a `flex-direction: row`. Veras como los elementos ahora se mueven a la derecha.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}}

Considerando que esto puede ser algo confuso, la regla a tener en cuenta es que a no ser que hagas algo para cambiarlo, los items flexible se alinean en la misma direccion que las palabras se ordenan linealmente en el lenguaje de tu documento a lo largo de la linea. `flex-start` comenzará donde el inicio de la oracion debe comenzar.

![Diagram showing start on the left and end on the right.](align8.png)

Puedes cambiarlo para que aparezcan en dirección de bloque, para el lenguaje de tu documento, seleccionando `flex-direction: column`. Luego `flex-start` estará donde la parte superior del primer parrafo de texto comenzaria.

![Diagram showing start at the top and end at the bottom.](align10.png)

Si cambias flex-direction a uno de los valores inversos, entonces se distribuirán desde el eje final y en el orden inverso a la forma en que se escriben las palabras en el idioma de su documento. `flex-start` cambiará al final de ese eje — por lo tanto, a la ubicación donde se ajustarán sus líneas si trabaja en filas, o al final de su último párrafo de texto, en la dirección en bloque.

![Diagram showing start on the right and end on the left.](align9.png)

![Diagram showing end at the top and start at the bottom](align11.png)

## Usando auto margenes para la alineación en el eje principal

No tenemos una propiedad `justify-items` o `justify-self` disponible en el eje principal para nuestros items, ya que estos son tratados como un grupo en este eje. Sin embargo es posible realizar cierta alineación individual, para separar un elemento o un grupo de elementos de otros, usando automargenes, o margenes automaticos con flebox.

Un patrón común es una barra de navegación donde algunos elementos clave se alinean a la derecha, con el grupo principal a la izquierda. Podría pensarse que este debería ser un caso de uso para una propiedad de `justify-self` , sin embargo, considere la imagen a continuación. Tengo tres artículos en un lado y dos en el otro. Si pudiera usar `justify-self` en el elemento _d_, también cambiaría la alineación del artículo _e_ que sigue, lo cual puede o no ser mi intención.

![Five items, in two groups. Three on the left and two on the right.](align7.png)

En cambio podemos enfocarnos en el item 4 y separarlo de los tres primeros elementos dandole a este un valor al `margin-left` de `auto`. El auto margen tomará todo el espacio que puedan en su eje — así es como funciona el centrado de un bloque con los margenes automáticos a derecha e izquierda. Cada lado trata de ocupar tanto espacio como puede, y así el bloque se empuja hacia el medio.

En este ejemplo en vivo, tenemos elementos flexibles, organizados simplemente en una fila con los valores básicos de flexión, y la clase `push` tiene `margin-left: auto`. Puedes intentar eliminarlo o agregar la clase a otro elemento para ver cómo funciona.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}}

## Futuras caracteristicas de alineación para Flexbox

Al principio de este artículo, expliqué que las propiedades de alineación actualmente contenidas en la especificación de flexbox de Nivel 1 también se incluyen en el Nivel de Alineación de Casillas 3, que puede extender estas propiedades y valores en el futuro. Ya hemos visto un lugar donde esto ha sucedido, con la introducción del `space-evenly` para las propiedades de `align-content` y `justify-content`.

El módulo de alineación de cuadro también incluye otros métodos para crear espacio entre elementos, como la función de `column-gap` y `ow-gap`, como se ve en el [Diseño de rejillas de CSS](/es/docs/Web/CSS/Guides/Grid_layout). La inclusión de estas propiedades en la Alineación de cajas significa que en el futuro también deberíamos poder utilizar `column-gap` y `row-gap` tambien en diseños flexibles. Esto significará que no tendremos que usar márgenes para espaciar los elementos flexibles.

Mi sugerencia al explorar en profundidad la alineación de flexbox es hacerlo conjuntamente con la alineación en Diseño de rejillas. Ambas especificaciones utilizan las propiedades de alineación que se detallan en la especificación de Alineación de cajas. Puede ver cómo se comportan estas propiedades cuando se trabaja con una cuadrícula en el artículo de MDN [Alineación de cajas](/es/docs/Web/CSS/Guides/Grid_layout/Box_alignment) , y también he comparado cómo funciona la alineación en estas especificaciones en mi [Hoja de trucos de alineacion de cajas](https://rachelandrew.co.uk/css/cheatsheets/box-alignment).

## Ver también

- [Alineación de cajas](/es/docs/Web/CSS/CSS_Box_Alignment)
- [Alineación en Flexbox](/es/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [Alineación de cajs en Diseño de rejillas](/es/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout)
