---
title: Fondos y bordes
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
translation_of: Learn/CSS/Building_blocks/Backgrounds_and_borders
original_slug: Learn/CSS/Building_blocks/Fondos_y_bordes
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}</div>

<p>En este artículo, veremos algunas de las cosas creativas que puedes hacer con los fondos y los bordes de CSS. Añadir degradados, imágenes de fondo o redondear esquinas; los fondos y los bordes son la solución para una gran cantidad de cuestiones de estilo en CSS.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Prerrequisitos:</th>
   <td>Conocimientos básicos de informática, tener el <a href="/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico">software básico</a> instalado, conocimientos básicos de <a href="/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos">trabajar con archivos</a>, conocimientos básicos de HTML (véase <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introducción al HTML</a>) y nociones de CSS (véase <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con el CSS</a>).</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Aprender a diseñar el fondo y los bordes de las cajas.</td>
  </tr>
 </tbody>
</table>

<h2 id="Aplicar_estilo_a_los_fondos_en_CSS">Aplicar estilo a los fondos en CSS</h2>

<p>La propiedad {{cssxref ("background")}} de CSS es una propiedad abreviada de una serie de propiedades de fondo que vamos a ver en este artículo. Si descubres una propiedad de fondo compleja en una hoja de estilo, puede parecer un poco difícil de entender porque pueden estarse pasando muchos valores a la vez.</p>

<pre class="brush: css notranslate"><code>.box {
  background: linear-gradient(105deg, rgba(255,255,255,.2) 39%, rgba(51,56,57,1) 96%) center center / 400px 200px no-repeat,
  url(big-star.png) center no-repeat, rebeccapurple;
} </code>
</pre>

<p>Más adelante en este tutorial regresaremos a cómo funcionan las propiedades abreviadas, pero primero echemos un vistazo a las diferentes cosas que puedes hacer con los fondos en CSS, a partir de observar las propiedades de fondo individuales.</p>

<h3 id="Los_colores_de_fondo">Los colores de fondo</h3>

<p>La propiedad {{cssxref ("background-color")}} define el color de fondo de cualquier elemento en CSS. La propiedad admite cualquier <code><a href="/es/docs/Web/CSS/color_value">&lt;color&gt;</a></code> válido. Un color de fondo (<code>background-color</code>) se extiende por debajo del contenido y el relleno del elemento.</p>

<p>En el ejemplo siguiente hemos utilizado varios valores de color para añadir un color de fondo a la caja, a un encabezado y a un elemento {{htmlelement ("span")}}.</p>

<p><strong>Juega un poco con ellos; usa cualquier valor <a href="/es/docs/Web/CSS/color_value">&lt;color&gt;</a> disponible.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 800)}}</p>

<h3 id="Las_imágenes_de_fondo">Las imágenes de fondo</h3>

<p>La propiedad {{cssxref ("background-image")}} permite visualizar una imagen de fondo en un elemento. En el ejemplo siguiente hay dos cajas: una tiene una imagen de fondo que es más grande que la caja misma, la otra tiene una imagen pequeña en forma de estrella.</p>

<p>Este ejemplo demuestra dos cosas sobre las imágenes de fondo. De forma predeterminada, la imagen grande no se reduce para ajustarse a la caja, por lo que solo vemos una pequeña esquina de esta, mientras que la imagen pequeña aparece en forma de mosaico hasta llenar la caja. En este caso, la imagen es en realidad una sola estrella.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 800)}}</p>

<p><strong>Si especificas un color de fondo además de una imagen de fondo, la imagen se muestra encima del color de fondo. Añade una propiedad <code>background-color</code> al ejemplo anterior y obsérvalo en acción.</strong></p>

<h4 id="Controlar_background-repeat">Controlar background-repeat</h4>

<p>La propiedad {{cssxref ("background-repeat")}} se usa para controlar el comportamiento de tipo mosaico de las imágenes. Los valores disponibles son:</p>

<ul>
 <li><code>no-repeat</code>: evita que el fondo se repita.</li>
 <li><code>repeat-x</code>: repite horizontalmente.</li>
 <li><code>repeat-y</code>: repite verticalmente.</li>
 <li><code>repeat</code>: es el valor por defecto; repite en ambas direcciones.</li>
</ul>

<p><strong>Prueba estos valores en el ejemplo siguiente. Hemos establecido el valor <code>no-repeat</code>, así que solo verás una estrella. Prueba los diferentes valores (<code>repeat-x</code> y <code>repeat-y</code>) y observa cuáles son los efectos.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 800)}}</p>

<h4 id="Dimensionar_la_imagen_de_fondo">Dimensionar la imagen de fondo</h4>

<p>En el ejemplo anterior hay una imagen grande que aparece recortada porque es más grande que el fondo. En este caso, podríamos usar la propiedad {{cssxref ("background-size")}}, que puede tomar valores de <a href="/es/docs/Web/CSS/length">longitud</a> o <a href="/es/docs/Web/CSS/porcentaje">porcentaje</a>, para ajustar el tamaño de la imagen para que quepa dentro del fondo.</p>

<p>También puedes utilizar palabras clave:</p>

<ul>
 <li><code>cover</code>: el navegador agrandará la imagen lo suficientemente grande como para que esta cubra por completo el área de la caja sin que pierda su relación de aspecto. En este caso, es probable que parte de la imagen quede fuera de la caja.</li>
 <li><code>contain</code>: el navegador adecuará el tamaño de la imagen para que quepa dentro de la caja. En este caso, pueden quedar huecos a ambos lados o en la parte superior e inferior de la imagen si la relación de aspecto de la imagen es diferente de la de la caja.</li>
</ul>

<p>En el ejemplo siguiente hemos usado la imagen más grande del ejemplo anterior y unidades de longitud para establecer sus dimensiones dentro de la caja. Puedes ver que esto ha distorsionado la imagen.</p>

<p>Prueba lo siguiente:</p>

<ul>
 <li>Cambia las unidades de longitud que has utilizado para modificar el tamaño del fondo.</li>
 <li>Elimina las unidades de longitud y observa qué sucede cuando usas <code>background-size: cover</code> o <code>background-size: contain</code>.</li>
 <li>Si tu imagen es más pequeña que la caja, puedes cambiar el valor <code>background-repeat</code> para que la imagen se repita.</li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}</p>

<h4 id="Posicionar_la_imagen_de_fondo">Posicionar la imagen de fondo</h4>

<p>La propiedad {{cssxref ("background-position")}} te permite elegir la posición en la que aparece la imagen de fondo dentro de la caja a la que está asociada. Para ello se utiliza un sistema de coordenadas en el que la esquina superior izquierda de la caja es <code>(0,0)</code>, y la caja se coloca sobre los ejes horizontal (<code>x</code>) y vertical (<code>y</code>).</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: El valor predeterminado de <code>background-position</code> es <code>(0,0)</code>.</p>
</div>

<p>Los valores de <code>background-position</code> más comunes toman dos valores independientes: un valor horizontal seguido de un valor vertical.</p>

<p>Puedes usar palabras clave como <code>top</code> y <code>right</code> (busca todas las demás en la página sobre la propiedad {{cssxref ("background-position")}}):</p>

<pre class="brush: css notranslate"><code>.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
} </code>
</pre>

<p>Y también <a href="/es/docs/Web/CSS/length">longitudes</a> y <a href="/es/docs/Web/CSS/porcentaje">porcentajes</a>:</p>

<pre class="brush: css notranslate"><code>.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
} </code>
</pre>

<p>También puedes mezclar valores de palabras clave con longitudes o porcentajes, por ejemplo:</p>

<pre class="brush: css notranslate">.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}</pre>

<p>Por último, también puedes usar una sintaxis de 4 valores para indicar una distancia desde ciertos bordes del cuadro: la unidad de longitud en este caso es un desplazamiento del valor que la precede. Entonces, en el CSS siguiente, colocamos el fondo a 20 px desde la parte superior y a 10 px desde la derecha:</p>

<pre class="brush: css notranslate"><code>.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
} </code></pre>

<p><strong>Utiliza el ejemplo siguiente para jugar con estos valores y mover la estrella por la caja.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 800)}}</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: <code>background-position</code> es una propiedad abreviada de {{cssxref("background-position-x")}} y {{cssxref("background-position-y")}}, que te permiten configurar los diferentes valores de posición del eje por separado.</p>
</div>

<h3 id="Degradados_de_fondo">Degradados de fondo</h3>

<p>Un degradado, cuando se usa para un fondo, actúa como una imagen y también se establece usando la propiedad {{cssxref("background-image")}}.</p>

<p>Puedes leer más sobre los diferentes tipos de degradados y sobre qué puedes hacer con ellos en la página sobre el tipo de datos <code><a href="/en-US/docs/Web/CSS/gradient">&lt;gradient&gt;</a></code> de MDN. Una forma divertida de jugar con degradados es usar uno de los muchos generadores de degradados CSS que hay disponibles en la web, <a href="https://cssgradient.io/">como este</a>. Puedes crear un degradado y luego copiar y pegar el código fuente que lo genera.</p>

<p>Prueba algunos degradados diferentes en el ejemplo siguiente. En las dos cajas hay, respectivamente, un degradado lineal que se extiende por toda la caja, y un degradado radial con un tamaño establecido, que por lo tanto se repite.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 800)}}</p>

<h3 id="Múltiples_imágenes_de_fondo">Múltiples imágenes de fondo</h3>

<p>También es posible poner múltiples imágenes de fondo: puedes especificar múltiples valores <code>background-image</code> para un solo atributo, separados cada uno por una coma.</p>

<p>Si haces esto, las imágenes de fondo pueden quedar superpuestas entre sí. Los fondos se superponen con la última imagen de fondo que hay en la parte inferior de la lista, y cada imagen anterior se apila encima de la que sigue en el código.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Los degradados se pueden mezclar con imágenes de fondo normales.</p>
</div>

<p>Las otras propiedades <code>background-*</code> también pueden tener valores múltiples separados por comas, de la misma manera que <code>background-image</code>:</p>

<pre class="brush: css notranslate">background-image: url(image1.png), url(image2.png), url(image3.png), url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position: 10px 20px,  top right;</pre>

<p>Cada valor de las diversas propiedades coincide con los valores que están en la misma posición en las otras propiedades. Arriba, por ejemplo, el valor para la propiedad <code>background-repeat</code> de <code>image1</code> será <code>no-repeat</code>. Sin embargo, ¿qué sucede cuando diferentes propiedades tienen una cantidad diferente de valores? La respuesta es que los valores que ocupan las posiciones más pequeñas se alternan cíclicamente: en el ejemplo anterior hay cuatro imágenes de fondo pero solo dos valores <code>background-position</code>. Los primeros dos valores de posición se aplicarán a las dos primeras imágenes, luego los valores volverán a asignarse cíclicamente: a <code>image3</code> se le dará el primer valor de posición, y a <code>image4</code> se le dará el segundo valor de posición.</p>

<p><strong>Vamos a jugar. En el ejemplo siguiente hemos incluido dos imágenes. Para demostrar el orden de superposición, cambia la imagen de fondo que aparece primero en la lista. O juega con las otras propiedades para cambiar la posición, el tamaño o repite los valores.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 800)}}</p>

<h3 id="Anclaje_del_fondo">Anclaje del fondo</h3>

<p>Otra opción que hay disponible para fondos es especificar cómo se desplazan cuando se desplaza el contenido. Esto se controla con la propiedad {{cssxref ("background-attachment")}}, que puede tomar los valores siguientes:</p>

<ul>
 <li><code>scroll</code>: Hace que el fondo del elemento se desplace cuando te desplazas por el contenido de la página. Si te desplazas por el contenido del elemento, el fondo no se mueve. El efecto resultante es que el fondo está anclado a la página en una posición fija, por lo que se desplaza a medida que la página se desplaza.</li>
 <li><code>fixed</code>: Hace que el fondo de un elemento quede fijo con respecto a la ventana gráfica, de modo que no se desplace cuando te desplazas por la página o el contenido del elemento. Siempre permanece en la misma posición de la pantalla.</li>
 <li><code>local</code>: Este valor se añadió posteriormente (solo es compatible con Internet Explorer 9+, mientras que los otros son compatibles con IE4+) porque el valor <code>scroll</code> es bastante confuso y en muchos casos no hace lo que deseas. El valor <code>local</code> ancla el fondo al elemento en el que está configurado, de modo que cuando te desplazas por el contenido del elemento, el fondo se desplaza con este.</li>
</ul>

<p>La propiedad {{cssxref ("background-attachment")}} solo tiene efecto cuando hay contenido por el que puedas desplazarte, por lo que hemos preparado un ejemplo para demostrar las diferencias entre los tres valores: echa un vistazo a <a href="http://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html">background-attachment.html</a> (También puedes consultar el <a href="https://github.com/mdn/learning-area/tree/master/css/styling-boxes/backgrounds">código fuente</a> aquí).</p>

<h3 id="Usar_la_propiedad_abreviada_para_el_fondo">Usar la propiedad abreviada para el fondo</h3>

<p>Como mencionamos al comienzo de este artículo, a menudo verás fondos que están especificados usando la propiedad {{cssxref ("background")}}. Esta forma abreviada te permite configurar todas las diferentes propiedades a la vez.</p>

<p>Si utilizas varios fondos, debes especificar todas las propiedades para el primer fondo y luego añadir el fondo siguiente separado por una coma. En el ejemplo siguiente hay un degradado con un tamaño y una posición, luego un fondo de imagen con <code>no-repeat</code> y una posición y, por último, un color.</p>

<p>Al escribir los valores abreviados de las imágenes de fondo es necesario seguir algunas reglas, por ejemplo:</p>

<ul>
 <li>Solo es posible especificar un color de fondo (<code>background-color</code>) después de la coma final.</li>
 <li>El valor para <code>background-size</code> solo puede incluirse inmediatamente después de <code>background-position</code>, separado con el carácter '/', así: <code>center/80%</code>.</li>
</ul>

<p>Consulta la página para el atributo {{cssxref ("background")}} de MDN para ver todas las posibilidades.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 800)}}</p>

<h3 id="Consideraciones_de_accesibilidad_con_los_fondos">Consideraciones de accesibilidad con los fondos</h3>

<p>Al colocar texto sobre una imagen o un color de fondo, debes asegurarte de que tiene suficiente contraste para que tus visitantes puedan leer el texto. Si estableces una imagen de fondo y el texto se coloca encima de la imagen, también debes especificar un color de fondo (<code>background-color</code>) que permita leer el texto si la imagen no se carga.</p>

<p>Los lectores de pantalla no pueden analizar las imágenes de fondo, por lo tanto, deben ser puramente decorativas; cualquier contenido importante debe ser parte de la página HTML y no debe estar contenido en un fondo.</p>

<h2 id="Bordes">Bordes</h2>

<p>Al aprender sobre el modelo de cajas descubrimos cómo los bordes afectan al tamaño de nuestra caja. En este artículo veremos cómo usar los bordes de una manera creativa. Por lo general, cuando a un elemento le añadimos bordes con CSS, usamos una propiedad abreviada que establece el color, el ancho y el estilo del borde en una línea de CSS.</p>

<p>Podemos establecer un borde para los cuatro lados de una caja con {{cssxref ("border")}}:</p>

<pre class="brush: css notranslate"><code>.box {
  border: 1px solid black;
} </code></pre>

<p>O podemos establecer solo un borde de la caja, por ejemplo:</p>

<pre class="brush: css notranslate"><code>.box {
  border-top: 1px solid black;
} </code></pre>

<p>Cada una de las propiedades de estas propiedades abreviadas sería:</p>

<pre class="brush: css notranslate"><code>.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
} </code></pre>

<p>Y las no abreviadas:</p>

<pre class="brush: css notranslate"><code>.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
} </code></pre>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Estas propiedades para el borde superior, derecho, inferior e izquierdo también tienen propiedades <em>lógicas</em> asignadas que se relacionan con el modo de escritura del documento (por ejemplo, texto de izquierda a derecha o de derecha a izquierda, o de arriba a abajo). Exploraremos esto en la próxima lección, que expone el <a href="/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">uso de diferentes direcciones de texto</a>.</p>
</div>

<p><strong>Hay una variedad de estilos que puedes usar para los bordes. En el ejemplo siguiente, hemos utilizado un estilo de borde diferente para los cuatro lados de la caja. Juega con el estilo, el ancho y el color del borde para ver cómo funcionan los bordes.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}</p>

<h3 id="Esquinas_redondeadas">Esquinas redondeadas</h3>

<p>El redondeo de esquinas en una caja se logra mediante el uso de la propiedad {{cssxref ("border-radius")}} y otras propiedades asociadas que se relacionan con cada esquina de la caja. Como valor pueden usarse dos longitudes o porcentajes: el primer valor define el radio horizontal y el segundo el radio vertical. En muchos casos, solo se pondrá un valor, que se utilizará para ambos.</p>

<p>Por ejemplo, para hacer que las cuatro esquinas de una caja tengan un radio de 10 píxeles:</p>

<pre class="brush: css notranslate"><code>.box {
  border-radius: 10px;
} </code></pre>

<p>O para hacer que la esquina superior derecha tenga un radio horizontal de 1 em y un radio vertical del 10%:</p>

<pre class="brush: css notranslate"><code>.box {
  border-top-right-radius: 1em 10%;
} </code></pre>

<p>En el ejemplo siguiente hemos establecido las cuatro esquinas, y luego cambiamos los valores de la esquina superior derecha para que sea diferente. Juega con los valores para cambiar las esquinas. Echa un vistazo a la página de la propiedad {{cssxref ("border-radius")}} para ver las opciones de sintaxis disponibles.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}</p>

<h2 id="Pon_a_prueba_tus_habilidades">Pon a prueba tus habilidades</h2>

<p>Hemos cubierto mucho terreno en este artículo. ¿Recuerdas la información más relevante? Encontrarás más pruebas para verificar que retienes la información antes de seguir adelante en<a href="/en-US/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders"> Test your skills: Backgrounds and Borders</a>.</p>

<h2 id="Resumen">Resumen</h2>

<p>En este artículo hemos expuesto bastantes conceptos y puedes ver que hay mucho para añadir a un fondo o a un borde de una caja. Explora las diferentes páginas de propiedades si deseas obtener más información sobre cualquiera de las características que hemos discutido. Todas las páginas de MDN contienen más ejemplos de uso, para que juegues y mejores tus conocimientos.</p>

<p>En el próximo artículo descubriremos cómo interacciona el modo de escritura de tu documento con tu CSS. ¿Qué sucede cuando el texto no fluye de izquierda a derecha?</p>

<p>{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}</p>

<h2 id="En_este_módulo">En este módulo</h2>

<ol>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Cascada y herencia</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">Selectores CSS</a>
  <ul>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">Selectores de tipo, de clase y de ID</a></li>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">Selectores de atributos</a></li>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">Las pseudoclases y los pseudoelementos</a></li>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Selectores de combinación</a></li>
  </ul>
 </li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/The_box_model">El modelo de cajas</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">Fondos y bordes</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">El uso de diferentes direcciones de texto</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content">El desbordamiento de los contenidos</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">Los valores y las unidades</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">Elementos de dimensionado en CSS</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements">Imágenes, media y elementos de formulario</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Styling_tables">Aplicar estilo a las tablas</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS">Depurar el CSS</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Organizing">Organizar el CSS</a></li>
</ol>
