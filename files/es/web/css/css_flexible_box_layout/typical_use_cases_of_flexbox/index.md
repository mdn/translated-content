---
title: Casos de uso típicos de Flexbox
slug: Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Casos_de_uso_tipicos_de_Flexbox.
---
<p>{{CSSRef}}</p>

<p class="summary">En esta guía, analizaremos algunos de los casos de uso comunes de flexbox, en aquellos lugares donde tiene más sentido que otro método de diseño.</p>

<h2 id="¿Por_qué_elegir_flexbox">¿Por qué elegir flexbox?</h2>

<p>En un mundo perfecto de compatibilidad con navegadores, la razón por la que elegiría utilizar flexbox es porque desea colocar una colección de elementos en una dirección u otra.  Estos son los usos para los que fue diseñado flexbox. Puede leer más sobre la diferencia entre flexbox y CSS Grid Layout en <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods">Relación de Flexbox con respecto a otros métodos de diseño</a>, donde discutimos cómo encaja flexbox en la imagen general de CSS Layout.</p>

<p>En realidad, a menudo también usamos Flexbox para trabajos que Grid Layout podría realizar mejor, como un respaldo para Grid, y también para obtener capacidades de alineación. Esto es algo que puede cambiar una vez que se implemente Box Alignment en Block Layout. En esta guía analizo algunas de las cosas típicas que podría usar flexbox hoy día.</p>

<h2 id="Navegación">Navegación</h2>

<p>Un patrón común para la navegación es tener una lista de elementos mostrada como una barra horizontal. Este patrón, tan básico como parece, era difícil de lograr antes de flexbox. Este es el ejemplo más simple de flexbox, y podría considerarse el caso ideal de uso de flexbox.</p>

<p>Cuando tenemos un conjunto de elementos que queremos mostrar horizontalmente, podemos terminar con espacio adicional. Necesitamos decidir qué hacer con ese espacio y tener un par de opciones. O bien mostramos el espacio fuera de los elementos, los separamos, por consiguiente, con espacios en blanco entre ellos o alrededor de ellos, o absorbemos el espacio adicional dentro de los elementos, por lo tanto, necesitamos un método para permitir que los elementos crezcan y ocupen este espacio.</p>

<h3 id="Espacio_distribuido_fuera_de_los_elementos">Espacio distribuido fuera de los elementos</h3>

<p>Para distribuir el espacio entre o alrededor de los elementos, usamos las propiedades de alineación en flexbox y la propiedad {{cssxref ("justify-content")}}. Puede leer más sobre esta propiedad en <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Alinear elementos en un contenedor flexible</a>, que trata sobre la alineación de elementos en el eje principal.</p>

<p>En el siguiente ejemplo en vivo, mostramos los elementos en su tamaño natural y utilizando <code>justify-content: space-between</code> crea cantidades iguales de espacio entre los elementos. Puede cambiar la forma en que se distribuye el espacio utilizando el valor <code>space-around</code>, o, donde sea compatible, <code>space-evenly</code>. También puede usar <code>flex-start</code> para colocar el espacio al final de los elementos, <code>flex-end</code> para colocarlo delante de ellos, o <code>center</code> para centrar los elementos de navegación.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}</p>

<h3 id="Espacio_distribuido_dentro_de_los_elementos">Espacio distribuido dentro de los elementos</h3>

<p>Un patrón diferente para la navegación sería distribuir el espacio disponible dentro de los elementos, en lugar de crear un espacio entre ellos. En este caso, utilizaríamos las propiedades {{cssxref ("flex")}} para permitir que los elementos crezcan y se reduzcan en proporción entre sí, como se describe en <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Control la proporción de elementos flexibles a lo largo del eje principal</a>.</p>

<p>Si quisiera que todos mis elementos de navegación tuvieran el mismo ancho, entonces podría usar <code>flex: auto</code>, que es la abreviatura de <code>flex: 1 1 auto,</code> todos los elementos crecen y se contraen desde una flex-basis de auto. Esto significaría que el elemento más largo tendría más espacio.</p>

<p>En el ejemplo en vivo a continuación, intente cambiar <code>flex: auto</code> a <code>flex: 1</code>. Esta es la abreviatura de <code>flex: 1 1 0</code> y hace que todos los elementos se vuelvan del mismo ancho, ya que están trabajando desde una flex-basis de 0 permitiendo que todo el espacio sea distribuido uniformemente.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}</p>

<h2 id="Navegación_dividida">Navegación dividida</h2>

<p>Otra forma de alinear elementos en el eje principal es usar márgenes automáticos. Esto permite el patrón de diseño de una barra de navegación donde un grupo de elementos se alinean a la izquierda y otro grupo se alinea a la derecha.</p>

<p>Aquí estamos utilizando la técnica de márgenes automáticos descrita en <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#Using_auto_margins_for_main_axis_alignment">Uso de márgenes automáticos para la alineación del eje principal</a>. Los elementos se alinean en el eje principal con <code>flex-start</code> ya que este es el comportamiento inicial de flexbox, y estamos alineando el elemento de la derecha dándole un margen izquierdo de auto. Puede mover la clase de un elemento a otro para cambiar dónde ocurre la división.</p>

<p>También en este ejemplo, estamos utilizando márgenes en los elementos flexibles para crear un espacio entre los elementos, y un margen negativo en el contenedor para que los elementos aún permanezcan a nivel con los bordes derecho e izquierdo. Hasta que las propiedades <code>gap</code> de la especificación de alineación de caja sea implementada en flexbox, debemos usar márgenes de esta manera si queremos crear un margen entre los elementos.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}</p>

<h2 id="Centrar_elemento">Centrar elemento</h2>

<p>Antes de flexbox, los desarrolladores bromeaban con que el problema más difícil en el diseño web era el centrado vertical. Esto ahora se ha hecho sencillo usando las propiedades de alineación en flexbox, como muestra el siguiente ejemplo en vivo.</p>

<p>Puedes jugar con la alineación, alineando el elemento con el inicio con <code>flex-start</code> o al final con <code>flex-end</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}</p>

<p>Es posible que en el futuro no tengamos que crear un contenedor en un contenedor flexible solo para centrar un solo elemento, ya que las propiedades de Alineación de cuadro se implementarán en última instancia en el diseño del bloque. Por ahora, sin embargo, si necesita centrar correctamente una cosa dentro de otra, flexbox es la forma de hacerlo. Como en el ejemplo anterior, convierta un contenedor en un contenedor flexible y luego utilice <code>align-items</code> en el elemento principal o apunte el propio elemento de flexión con <code>align-self</code>.</p>

<h2 id="Diseño_de_tarjeta_empujando_hacia_abajo_el_footer">Diseño de tarjeta empujando hacia abajo  el footer</h2>

<p>Ya sea que use flexbox o CSS Grid para diseñar una lista de componentes de tarjeta, estos métodos de diseño solo funcionan en los elementos directos de los componentes flex o grid. Esto significa que si tiene cantidades variables de contenido, la tarjeta se extenderá hasta la altura del área de la cuadrícula o del contenedor flexible. Cualquier contenido interno usa un diseño de bloque regular, lo que significa que en una tarjeta con menos contenido, el pie de página subirá hasta la parte inferior del contenido en lugar de adherirse a la parte inferior de la tarjeta.</p>

<p><img alt="Two card components showing that the internals of the component do not stretch with the wrapper." src="https://mdn.mozillademos.org/files/15669/flex-cards.png" style="height: 626px; width: 964px;"></p>

<p>Flexbox puede resolver esto. Hacemos de la tarjeta un contenedor flexible, con  <code>{{cssxref ("flex-direction")}} :column</code>. A continuación, configuramos el área de contenido con <code>flex: 1</code>, que es la abreviatura de <code>flex: 1 1 0</code>; el elemento puede crecer y reducirse desde una base flexible de 0. Como este es el único elemento que puede crecer, ocupa todo el espacio disponible en el contenedor flexible y empuja el pie de página hacia abajo. Si elimina la propiedad <code>flex</code> del ejemplo en vivo, verá cómo el pie de página se mueve hacia arriba para sentarse directamente debajo del contenido.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}</p>

<h2 id="Objetos_multimedia">Objetos multimedia</h2>

<p>El objeto multimedia es un patrón común en el diseño web: este patrón tiene una imagen u otro elemento a un lado y el texto a la derecha. Idealmente, un objeto multimedia debería poder voltearse, moviendo la imagen de izquierda a derecha.</p>

<p>Vemos este patrón en todas partes, usado para comentarios, y en cualquier lugar que necesitamos para mostrar imágenes y descripciones. Con flexbox podemos permitir que la parte del objeto multimedia que contiene la imagen tome su información de tamaño de la imagen, y luego el cuerpo del objeto multimedia se flexione para ocupar el espacio restante.</p>

<p>En el ejemplo en vivo a continuación puedes ver nuestro objeto multimedia. He usado las propiedades de alineación para alinear los elementos en el eje transversal con <code>flex-start</code>, y luego establezco el elemento flex <code>.content</code> a <code>flex: 1</code>. Al igual que nuestra columna del patrón de la tarjeta de diseño anterior, usar <code>flex: 1</code> significa que esta parte de la tarjeta puede crecer.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}</p>

<p>Algunas de las cosas que podría querer probar en este ejemplo en vivo se relacionan con las diferentes formas en que podría desear restringir el objeto multimedia en su diseño.</p>

<p>Para evitar que la imagen crezca demasiado, agregue un {{cssxref ("max-width")}} a la imagen. Como ese lado del objeto multimedia está usando los valores iniciales de flexbox, puede reducirse pero no crecer, y utiliza una <code>flex-basis</code> de auto. Cualquier {{cssxref ("ancho")}} o ancho máximo aplicado a la imagen se convertirá en la <code>flex-basis</code>.</p>

<pre class="brush: css">.image img {
  max-width: 100px;
}
</pre>

<p>También puede permitir que ambos lados crezcan y se reduzcan en proporción. Si configura ambos lados a <code>flex: 1</code>, crecerán y se reducirán de una {{cssxref ("flex-basis")}} de 0, por lo que terminará con dos columnas de igual tamaño. Puede tomar el contenido como una guía y configurar ambos para <code>flex: auto</code>, en cuyo caso crecerían y se reducirían con el tamaño del contenido o cualquier tamaño aplicado directamente a los elementos de flexión, como el ancho de la imagen.</p>

<pre class="brush: css">.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}</pre>

<p>También puede dar a cada lado diferentes factores {{cssxref ("flex-grow")}}, por ejemplo, configurando el lado con la imagen para <code>flex: 1</code> y el lado del contenido para <code>flex: 3</code>. Esto significará que usan una <code>flex-basis</code> de <code>0</code>, pero distribuye ese espacio a diferentes proporciones según el factor <code>flex-grow</code> que haya asignado. Las propiedades de flexión que utilizamos para hacer esto se describen en detalle en la guía <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlando las proporciones de elementos de flexión a lo largo del eje principal</a>.</p>

<pre class="brush: css">.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}</pre>

<h3 id="Volteando_el_objeto_multimedia">Volteando el objeto multimedia</h3>

<p>Para cambiar la visualización del objeto multimedia de modo que la imagen esté a la derecha y el contenido a la izquierda, podemos usar la propiedad <code>flex-direction</code> configurada para <code>row-reverse</code>. El objeto multimedia ahora se muestra al revés. He logrado esto en el ejemplo en vivo agregando una clase <code>flipped</code> junto con la clase existente <code>.media</code>. Esto significa que puede ver cómo cambia la pantalla eliminando esa clase del html.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}</p>

<h2 id="Controles_de_formulario">Controles de formulario</h2>

<p>Flexbox es particularmente útil cuando se trata de estilos de controles de formularios. Los formularios tienen muchas marcas y muchos elementos pequeños que normalmente queremos alinear entre sí. Un patrón común es tener un elemento {{htmlelement ("input")}} asociado con un {{htmlelement ("button")}}, tal vez para un formulario de búsqueda o donde simplemente desea que su visitante ingrese una dirección de correo electrónico.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/input-button.html", '100%', 550)}}</p>

<p>Puede agregar una etiqueta o un icono a la izquierda tan fácilmente como hicimos clic en el botón derecho. He añadido una etiqueta y aparte, algunos estilos de color de fondo, no tuve que cambiar el diseño. El campo de entrada extensible ahora tiene un poco menos de espacio para actuar, pero utiliza el espacio izquierdo después que se representaron los dos elementos.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}</p>

<p>Patrones como este pueden hacer que sea mucho más fácil crear una biblioteca de elementos de formulario para su diseño, que se adapte fácilmente a los elementos adicionales que se agregan. Está aprovechando la flexibilidad de flexbox al mezclar elementos que no crecen con los que lo hacen.</p>

<h2 id="Conclusión">Conclusión</h2>

<p>Mientras explora los patrones anteriores, es de esperar que haya empezado a ver cómo puede pensar en la mejor manera de utilizar flexbox para lograr el resultado que desea. Muy a menudo tienes más de una opción. Mezcle elementos que no puedan estirarse con aquellos que pueden, use el contenido para informar el tamaño o permita que flexbox comparta espacio en proporción. Tu decides.</p>

<p>Piense en la mejor manera de presentar el contenido que tiene y luego vea cómo flexbox u otros métodos de diseño pueden ayudarlo a lograrlo.</p>
