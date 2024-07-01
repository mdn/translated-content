---
title: Casos de uso típicos de Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
---

{{CSSRef}}

En esta guía, analizaremos algunos de los casos de uso comunes de flexbox, en aquellos lugares donde tiene más sentido que otro método de diseño.

## ¿Por qué elegir flexbox?

En un mundo perfecto de compatibilidad con navegadores, la razón por la que elegiría utilizar flexbox es porque desea colocar una colección de elementos en una dirección u otra. Estos son los usos para los que fue diseñado flexbox. Puede leer más sobre la diferencia entre flexbox y CSS Grid Layout en [Relación de Flexbox con respecto a otros métodos de diseño](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods), donde discutimos cómo encaja flexbox en la imagen general de CSS Layout.

En realidad, a menudo también usamos Flexbox para trabajos que Grid Layout podría realizar mejor, como un respaldo para Grid, y también para obtener capacidades de alineación. Esto es algo que puede cambiar una vez que se implemente Box Alignment en Block Layout. En esta guía analizo algunas de las cosas típicas que podría usar flexbox hoy día.

## Navegación

Un patrón común para la navegación es tener una lista de elementos mostrada como una barra horizontal. Este patrón, tan básico como parece, era difícil de lograr antes de flexbox. Este es el ejemplo más simple de flexbox, y podría considerarse el caso ideal de uso de flexbox.

Cuando tenemos un conjunto de elementos que queremos mostrar horizontalmente, podemos terminar con espacio adicional. Necesitamos decidir qué hacer con ese espacio y tener un par de opciones. O bien mostramos el espacio fuera de los elementos, los separamos, por consiguiente, con espacios en blanco entre ellos o alrededor de ellos, o absorbemos el espacio adicional dentro de los elementos, por lo tanto, necesitamos un método para permitir que los elementos crezcan y ocupen este espacio.

### Espacio distribuido fuera de los elementos

Para distribuir el espacio entre o alrededor de los elementos, usamos las propiedades de alineación en flexbox y la propiedad {{cssxref ("justify-content")}}. Puede leer más sobre esta propiedad en [Alinear elementos en un contenedor flexible](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container), que trata sobre la alineación de elementos en el eje principal.

En el siguiente ejemplo en vivo, mostramos los elementos en su tamaño natural y utilizando `justify-content: space-between` crea cantidades iguales de espacio entre los elementos. Puede cambiar la forma en que se distribuye el espacio utilizando el valor `space-around`, o, donde sea compatible, `space-evenly`. También puede usar `flex-start` para colocar el espacio al final de los elementos, `flex-end` para colocarlo delante de ellos, o `center` para centrar los elementos de navegación.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}

### Espacio distribuido dentro de los elementos

Un patrón diferente para la navegación sería distribuir el espacio disponible dentro de los elementos, en lugar de crear un espacio entre ellos. En este caso, utilizaríamos las propiedades {{cssxref ("flex")}} para permitir que los elementos crezcan y se reduzcan en proporción entre sí, como se describe en [Control la proporción de elementos flexibles a lo largo del eje principal](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax).

Si quisiera que todos mis elementos de navegación tuvieran el mismo ancho, entonces podría usar `flex: auto`, que es la abreviatura de `flex: 1 1 auto,` todos los elementos crecen y se contraen desde una flex-basis de auto. Esto significaría que el elemento más largo tendría más espacio.

En el ejemplo en vivo a continuación, intente cambiar `flex: auto` a `flex: 1`. Esta es la abreviatura de `flex: 1 1 0` y hace que todos los elementos se vuelvan del mismo ancho, ya que están trabajando desde una flex-basis de 0 permitiendo que todo el espacio sea distribuido uniformemente.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}

## Navegación dividida

Otra forma de alinear elementos en el eje principal es usar márgenes automáticos. Esto permite el patrón de diseño de una barra de navegación donde un grupo de elementos se alinean a la izquierda y otro grupo se alinea a la derecha.

Aquí estamos utilizando la técnica de márgenes automáticos descrita en [Uso de márgenes automáticos para la alineación del eje principal](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#Using_auto_margins_for_main_axis_alignment). Los elementos se alinean en el eje principal con `flex-start` ya que este es el comportamiento inicial de flexbox, y estamos alineando el elemento de la derecha dándole un margen izquierdo de auto. Puede mover la clase de un elemento a otro para cambiar dónde ocurre la división.

También en este ejemplo, estamos utilizando márgenes en los elementos flexibles para crear un espacio entre los elementos, y un margen negativo en el contenedor para que los elementos aún permanezcan a nivel con los bordes derecho e izquierdo. Hasta que las propiedades `gap` de la especificación de alineación de caja sea implementada en flexbox, debemos usar márgenes de esta manera si queremos crear un margen entre los elementos.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}

## Centrar elemento

Antes de flexbox, los desarrolladores bromeaban con que el problema más difícil en el diseño web era el centrado vertical. Esto ahora se ha hecho sencillo usando las propiedades de alineación en flexbox, como muestra el siguiente ejemplo en vivo.

Puedes jugar con la alineación, alineando el elemento con el inicio con `flex-start` o al final con `flex-end`.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}

Es posible que en el futuro no tengamos que crear un contenedor en un contenedor flexible solo para centrar un solo elemento, ya que las propiedades de Alineación de cuadro se implementarán en última instancia en el diseño del bloque. Por ahora, sin embargo, si necesita centrar correctamente una cosa dentro de otra, flexbox es la forma de hacerlo. Como en el ejemplo anterior, convierta un contenedor en un contenedor flexible y luego utilice `align-items` en el elemento principal o apunte el propio elemento de flexión con `align-self`.

## Diseño de tarjeta empujando hacia abajo el footer

Ya sea que use flexbox o CSS Grid para diseñar una lista de componentes de tarjeta, estos métodos de diseño solo funcionan en los elementos directos de los componentes flex o grid. Esto significa que si tiene cantidades variables de contenido, la tarjeta se extenderá hasta la altura del área de la cuadrícula o del contenedor flexible. Cualquier contenido interno usa un diseño de bloque regular, lo que significa que en una tarjeta con menos contenido, el pie de página subirá hasta la parte inferior del contenido en lugar de adherirse a la parte inferior de la tarjeta.

![Two card components showing that the internals of the component do not stretch with the wrapper.](flex-cards.png)

Flexbox puede resolver esto. Hacemos de la tarjeta un contenedor flexible, con `{{cssxref ("flex-direction")}} :column`. A continuación, configuramos el área de contenido con `flex: 1`, que es la abreviatura de `flex: 1 1 0`; el elemento puede crecer y reducirse desde una base flexible de 0. Como este es el único elemento que puede crecer, ocupa todo el espacio disponible en el contenedor flexible y empuja el pie de página hacia abajo. Si elimina la propiedad `flex` del ejemplo en vivo, verá cómo el pie de página se mueve hacia arriba para sentarse directamente debajo del contenido.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}

## Objetos multimedia

El objeto multimedia es un patrón común en el diseño web: este patrón tiene una imagen u otro elemento a un lado y el texto a la derecha. Idealmente, un objeto multimedia debería poder voltearse, moviendo la imagen de izquierda a derecha.

Vemos este patrón en todas partes, usado para comentarios, y en cualquier lugar que necesitamos para mostrar imágenes y descripciones. Con flexbox podemos permitir que la parte del objeto multimedia que contiene la imagen tome su información de tamaño de la imagen, y luego el cuerpo del objeto multimedia se flexione para ocupar el espacio restante.

En el ejemplo en vivo a continuación puedes ver nuestro objeto multimedia. He usado las propiedades de alineación para alinear los elementos en el eje transversal con `flex-start`, y luego establezco el elemento flex `.content` a `flex: 1`. Al igual que nuestra columna del patrón de la tarjeta de diseño anterior, usar `flex: 1` significa que esta parte de la tarjeta puede crecer.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}

Algunas de las cosas que podría querer probar en este ejemplo en vivo se relacionan con las diferentes formas en que podría desear restringir el objeto multimedia en su diseño.

Para evitar que la imagen crezca demasiado, agregue un {{cssxref ("max-width")}} a la imagen. Como ese lado del objeto multimedia está usando los valores iniciales de flexbox, puede reducirse pero no crecer, y utiliza una `flex-basis` de auto. Cualquier {{cssxref ("ancho")}} o ancho máximo aplicado a la imagen se convertirá en la `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

También puede permitir que ambos lados crezcan y se reduzcan en proporción. Si configura ambos lados a `flex: 1`, crecerán y se reducirán de una {{cssxref ("flex-basis")}} de 0, por lo que terminará con dos columnas de igual tamaño. Puede tomar el contenido como una guía y configurar ambos para `flex: auto`, en cuyo caso crecerían y se reducirían con el tamaño del contenido o cualquier tamaño aplicado directamente a los elementos de flexión, como el ancho de la imagen.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

También puede dar a cada lado diferentes factores {{cssxref ("flex-grow")}}, por ejemplo, configurando el lado con la imagen para `flex: 1` y el lado del contenido para `flex: 3`. Esto significará que usan una `flex-basis` de `0`, pero distribuye ese espacio a diferentes proporciones según el factor `flex-grow` que haya asignado. Las propiedades de flexión que utilizamos para hacer esto se describen en detalle en la guía [Controlando las proporciones de elementos de flexión a lo largo del eje principal](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax).

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Volteando el objeto multimedia

Para cambiar la visualización del objeto multimedia de modo que la imagen esté a la derecha y el contenido a la izquierda, podemos usar la propiedad `flex-direction` configurada para `row-reverse`. El objeto multimedia ahora se muestra al revés. He logrado esto en el ejemplo en vivo agregando una clase `flipped` junto con la clase existente `.media`. Esto significa que puede ver cómo cambia la pantalla eliminando esa clase del html.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}

## Controles de formulario

Flexbox es particularmente útil cuando se trata de estilos de controles de formularios. Los formularios tienen muchas marcas y muchos elementos pequeños que normalmente queremos alinear entre sí. Un patrón común es tener un elemento {{htmlelement ("input")}} asociado con un {{htmlelement ("button")}}, tal vez para un formulario de búsqueda o donde simplemente desea que su visitante ingrese una dirección de correo electrónico.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/input-button.html", '100%', 550)}}

Puede agregar una etiqueta o un icono a la izquierda tan fácilmente como hicimos clic en el botón derecho. He añadido una etiqueta y aparte, algunos estilos de color de fondo, no tuve que cambiar el diseño. El campo de entrada extensible ahora tiene un poco menos de espacio para actuar, pero utiliza el espacio izquierdo después que se representaron los dos elementos.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}

Patrones como este pueden hacer que sea mucho más fácil crear una biblioteca de elementos de formulario para su diseño, que se adapte fácilmente a los elementos adicionales que se agregan. Está aprovechando la flexibilidad de flexbox al mezclar elementos que no crecen con los que lo hacen.

## Conclusión

Mientras explora los patrones anteriores, es de esperar que haya empezado a ver cómo puede pensar en la mejor manera de utilizar flexbox para lograr el resultado que desea. Muy a menudo tienes más de una opción. Mezcle elementos que no puedan estirarse con aquellos que pueden, use el contenido para informar el tamaño o permita que flexbox comparta espacio en proporción. Tu decides.

Piense en la mejor manera de presentar el contenido que tiene y luego vea cómo flexbox u otros métodos de diseño pueden ayudarlo a lograrlo.
