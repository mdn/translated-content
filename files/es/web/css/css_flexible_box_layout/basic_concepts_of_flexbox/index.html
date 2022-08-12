---
title: Conceptos Básicos de flexbox
slug: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox
---
<div>{{CSSRef}}</div>

<p class="summary">El Módulo de Caja Flexible, comúnmente llamado flexbox, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación. Este artículo hace un repaso de las principales características de flexbox, las que exploraremos con mayor detalle en el resto de estas guías.</p>

<p>Cuando describimos a flexbox como unidimensional destacamos el hecho que flexbox maneja el layout en una sola dimensión a la vez — ya sea como fila o como columna. Esto contrasta con el modelo bidimensional del <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">Grid Layout de CSS</a>, el cual controla columnas y filas a la vez.</p>

<p><span style='background-color: #333333; color: #ffffff; font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif; font-size: 1.5rem;'>Los dos ejes de flexbox</span></p>

<p>Cuando trabajamos con flexbox necesitamos pensar en términos de dos ejes — el eje principal y el eje cruzado. El eje principal está definido por la propiedad {{cssxref("flex-direction")}}, y el eje cruzado es perpendicular a este. Todo lo que hacemos con flexbox está referido a estos dos ejes, por lo que vale la pena entender cómo trabajan desde el principio.</p>

<h3 id="El_eje_principal">El eje principal</h3>

<p>El eje principal está definido por <code>flex-direction</code>, que posee cuatro posibles valores:</p>

<ul>
 <li><code>row</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p>Si elegimos <code>row</code> o <code>row-reverse</code>, el eje principal correrá a lo largo de la fila según la <strong>dirección de la línea </strong>.</p>

<p><img alt="If flex-direction is set to row the main axis runs along the row in the inline direction." src="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics1.png" style="display: block; height: 152px; margin: 0px auto; width: 522px;"></p>

<p>Al elegir <code>column</code> o <code>column-reverse</code> el eje principal correrá desde el borde superior de la página hasta el final — según la <strong>dirección del bloque</strong>.</p>

<p><img alt="If flex-direction is set to column the main axis runs in the block direction." src="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics2.png" style="display: block; height: 227px; margin: 0px auto; width: 709px;"></p>

<h3 id="El_eje_cruzado">El eje cruzado</h3>

<p>El eje cruzado va perpendicular al eje principal, y por lo tanto si <code>flex-direction</code> (del eje principal) es <code>row</code> o <code>row-reverse</code> el eje cruzado irá por las columnas.</p>

<p><img alt="If flex-direction is set to row then the cross axis runs in the block direction." src="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics3.png" style="display: block; height: 125px; margin: 0px auto; width: 666px;"></p>

<p>Si el eje principal es <code>column</code> o <code>column-reverse</code> entonces el eje cruzado corre a lo largo de las filas.</p>

<p><img alt="If flex-direction is set to column then the cross axis runs in the inline direction." src="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics4.png" style="display: block; height: 244px; margin: 0px auto; width: 523px;"></p>

<p>Entender cuál eje es cuál es importante cuando empezamos a mirar la alineación y justificación flexible de los ítems; flexbox posee propiedades que permiten alinear y justificar el contenido sobre un eje o el otro.</p>

<h2 id="Líneas_de_inicio_y_de_fin">Líneas de inicio y de fin</h2>

<p>Otra área vital de entendimiento es cómo flexbox no hace suposiciones sobre la manera de escribir del documento. En el pasado, CSS estaba muy inclinado hacia el modo de escritura horizontal y de izquierda a derecha. Los métodos modernos de layout acogen la totalidad de modos de escritura así que no es necesario asumir que una línea de texto empezará arriba del documento y correrá de izquierda a derecha, con nuevas líneas dispuestas una abajo de la otra.</p>

<p>Puede leer más acerca de la relación que hay entre flexbox y la especificación de los Modos de Escritura en un artículo posterior, sin embargo la siguiente descripción debería ayudar para explicar porqué no se habla de izquierda y derecha ni de arriba o abajo a la hora de describir la dirección en la que fluyen los ítems flex.</p>

<p>Si <code>flex-direction</code> es <code>row</code> y estoy trabajando en español, entonces el margen inicial del eje principal quedará a la izquierda, y el margen final a la derecha.</p>

<p><img alt="Working in English the start edge is on the left." src="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics5.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>Si fuera a trabajar en árabe, entonces el margen inicial de mi eje principal quedaría a la derecha y el margen final a la izquierda.</p>

<p><img alt="The start edge in a RTL language is on the right." src="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics6.png" style="display: block; height: 152px; margin: 0px auto; width: 634px;"></p>

<p>En ambos casos el margen inicial del eje cruzado estará en el extremo superior del contenedor flex y el margen final en el extremo inferior, ya que ambos idiomas tiene un modo de escritura horizontal.</p>

<p>Después de un tiempo, pensar en inicial y final en vez de izquierda y derecha se hará natural, y será útil cuando interactúe con otros métodos de layout tales como el CSS Grid Layout que sigue los mismos patrones.</p>

<h2 id="El_contenedor_flex">El contenedor flex</h2>

<p>Un área del documento que contiene un flexbox es llamada <strong>contendedor flex</strong>. Para crear un contenedor flex, establecemos la propiedad del área del contenedor {{cssxref("display")}} como <code>flex</code> o <code>inline-flex</code>. Tan pronto como hacemos esto, los hijos directos de este contenedor se vuelven <strong>ítems flex</strong>. Como con todas las propiedades de CSS, se definen algunos valores iniciales, así que cuando creemos un contenedor flex todos los ítems flex contenidos se comportarán de la siguiente manera.</p>

<ul>
 <li>Los ítems se despliegan sobre una fila (la propiedad <code>flex-direction</code> por defecto es <code>row</code>).</li>
 <li>Los ítems empiezan desde el margen inicial sobre el eje principal.</li>
 <li>Los ítems no se ajustan en la dimensión principal, pero se pueden contraer.</li>
 <li>Los ítems se ajustarán para llenar el tamaño del eje cruzado.</li>
 <li>La propiedad {{cssxref("flex-basis")}} es definida como <code>auto</code>.</li>
 <li>La propiedad {{cssxref("flex-wrap")}} es definida como <code>nowrap</code>.</li>
</ul>

<p>El resultado es que todos los ítems se alinearán en una solo fila, usando el tamaño del contenedor como su tamaño en el eje principal. Si hay más ítems de los que caben en el contenedor, estos no pasarán más abajo si no que sobrepasarán el margen. Si hay ítems más altos que otros, todos los ítems serán ajustados en el eje cruzado para alcanzar al mayor.</p>

<p>Se puede ver en el ejercicio en vivo de abajo cómo luce. Intente editar el ítem o añadir ítems adicionales para así probar el comportamiento inicial de flexbox.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}} </p>

<h3 id="Cambiar_flex-direction">Cambiar flex-direction</h3>

<p>Al añadir la propiedad {{cssxref("flex-direction")}} en el contenedor flex nos permite cambiar la dirección de cómo los ítems son desplegados. Colocando <code>flex-direction: row-reverse</code> se mantendrá el despliegue a lo largo de la fila, sin embargo el inicio y final quedarán al revés del original.</p>

<p>Si cambiamos <code>flex-direction</code> a <code>column</code> el eje principal se cambiará y los ítems aparecerán en una columna. Colocando <code>column-reverse</code> las líneas de inicio y fin serán nuevamente puestas al revés.</p>

<p>El ejemplo en vivo de abajo tiene <code>flex-direction</code> puesto como <code>row-reverse</code>. Pruebe los otros valores — <code>row</code>, <code>column</code> y <code>column-reverse</code> — para ver qué sucede con el contenido.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}</p>

<h2 id="Contenedores_flex_Multi-línea_con_flex-wrap">Contenedores flex Multi-línea con flex-wrap</h2>

<p>Si bien flexbox es un modelo unidimensional, es posible lograr que nuestros ítems flex sean repartidos en varías líneas. Haciendo esto, se deberá considerar cada línea como un nuevo contenedor flex. Cualquier distribución del espacio solo sucederá dentro de esa línea, sin referenciar las líneas colaterales.</p>

<p>Para lograr repartirse en varias líneas añada la propiedad {{cssxref("flex-wrap")}} con el valor <code>wrap</code>. Cuando los ítems sean demasiados para desplegarlos en una línea, serán repartidos en la línea siguiente. El ejemplo en vivo de abajo contiene ítems que se les ha asignando un ancho, donde el ancho total de los ítems excede al del contenedor flex. Cuando <code>flex-wrap</code> se coloca como <code>wrap</code>, los ítems se repartirán. Al colocarlo como <code>nowrap</code>, el cual es el valor inicial, estos se contraerán para calzar con el contenedor ya que usan los valores iniciales de flexbox que permiten que los ítems se contraigan. Al usar <code>nowrap</code> los ítems podrían salirse del margen si estos no pudieran contraerse, o no contraerse lo suficiente para ser calzados.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}</p>

<h2 id="La_abreviatura_flex-flow">La abreviatura flex-flow</h2>

<p>Se pueden combinar las propiedades <code>flex-direction</code> y <code>flex-wrap</code> en la abreviatura {{cssxref("flex-flow")}} . El primer valor especificado es <code>flex-direction</code> y el segundo valor es <code>flex-wrap</code>.</p>

<p>En el ejemplo en vivo de abajo intente cambiar el primer valor por uno de los valores permitidos para <code>flex-direction</code> - <code>row</code>, <code>row-reverse</code>, <code>column</code> o <code>column-reverse</code>, y cambie también el segundo valor por <code>wrap</code> y <code>nowrap</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}</p>

<h2 id="Propiedades_aplicadas_a_los_ítems_flex">Propiedades aplicadas a los ítems flex</h2>

<p>Para obtener más control sobre los ítems flex podemos apuntarlos directamente. Hacemos esto a través de tres propiedades:</p>

<ul>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("flex-basis")}}</li>
</ul>

<p>Daremos un breve vistazo a estas propiedades en este resumen, y en un próximo artículo ahondaremos sobre su comportamiento.</p>

<p>Antes de darle sentido a estas propiedades debemos considerar el concepto de <strong>espacio disponible</strong>. Lo que hacemos cuando cambiamos el valor de alguna de estas propiedades es cambiar la forma que se distribuye el espacio disponible entre nuestros ítems. Este concepto de espacio disponible es también importante cuando veamos la alineación de ítems.</p>

<p>Si tenemos tres ítems con un ancho de 100 pixeles en un contenedor de 500 pixeles de ancho, entonces el espacio que se necesita para colocar nuestros ítems es de 300 pixeles. Esto deja 200 pixeles de espacio disponible. Si no cambiamos los valores iniciales entonces flexbox colocará ese espacio después del último ítem.</p>

<p><img alt="This flex container has available space after laying out the items." src="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics7.png" style="display: block; height: 198px; margin: 0px auto; width: 528px;"></p>

<p>Si en cambio quisiéramos que los ítems crecieran para llenar ese espacio, entonces necesitaremos un método para distribuir el espacio sobrante entre los ítems. Es justo lo que harán las propiedades <code>flex</code> que aplicaremos a dichos ítems.</p>

<h3 id="La_propiedad_flex-basis">La propiedad <code>flex-basis</code></h3>

<p>Con <code>flex-basis</code> se define el tamaño de un ítem en términos del espacio que deja como espacio disponible. El valor inicial de esta propiedad es <code>auto</code> — en este caso el navegador revisa si los ítems definen un tamaño. En el ejemplo de arriba, todos los ítems tienen un ancho de 100 pixeles así que este es usado como <code>flex-basis</code>.</p>

<p>Si los ítems no tiene un tamaño entonces el tamaño de su contenido es usado como flex-basis. Y por eso, apenas declarado <code>display: flex</code> en el padre a fin de crear ítems flex, todos estos ítems se ubicaron en una sola fila y tomaron solo el espacio necesario para desplegar su contenido.</p>

<h3 id="La_propiedad_flex-grow">La propiedad <code>flex-grow</code></h3>

<p>Con la propiedad <code>flex-grow</code> definida como un entero positivo, los ítems flex pueden crecer en el eje principal a partir de <code>flex-basis</code>. Esto hará que el ítem se ajuste y tome todo el espacio disponible del eje, o una proporción del espacio disponible si otro ítem también puede crecer.</p>

<p>Si le damos a todos los ítems del ejemplo anterior un valor <code>flex-grow</code> de 1 entonces el espacio disponible en el contenedor flex será compartido igualitariamente entre estos ítems y se ajustarán para llenar el contenedor sobre el eje principal.</p>

<p>Podemos usar flex-grow apropiadamente para distribuir el espacio en proporciones. Si otorgamos al primer ítem un valor <code>flex-grow</code> de 2 y a los otros un valor de 1, entonces 2 partes serán dadas al primer ítem  (100px de 200px en el caso del ejemplo de arriba) y 1 parte para cada uno de los restantes (cada uno con 50px de los 200px en total).</p>

<h3 id="La_propiedad_flex-shrink">La propiedad <code>flex-shrink</code></h3>

<p>Así como la propiedad <code>flex-grow</code> se encarga de añadir espacio sobre el eje principal, la propiedad <code>flex-shrink</code> controla como se contrae. Si no contamos con suficiente espacio en el contenedor para colocar los ítems y <code>flex-shrink</code> posee un valor entero positivo, el ítem puede contraerse a partir de <code>flex-basis</code>. Así como podemos asignar diferentes valores de <code>flex-grow</code> con el fin que un ítem se expanda más rápido que otros — un ítem con un valor más alto de <code>flex-shrink</code> se contraerá más rápido que sus hermanos que poseen valores menores.</p>

<p>El tamaño mínimo del ítem tendrá que ser considerado cuando se determine un valor de contracción que pueda funcionar, esto significa que flex-shrink tiene el potencial de comportarse menos consistentemente que flex-grow . Por lo tanto, haremos una revisión más detallada de cómo este algoritmo trabaja en el artículo Controlling Ratios de los ítems sobre el eje principal.</p>

<div class="note">
<p>Nótese que los valores de <code>flex-grow</code> y <code>flex-shrink</code> son proporciones. Típicamente si pusiéramos todos los ítems flex: <code>1 1 200px</code> y luego quisiéramos que un ítem creciera al doble, deberíamos ponerlo con flex: <code>2 1 200px</code>. Aunque igualmente podemos colocar flex: <code>10 1 200px</code> y flex: <code>20 1 200px</code> si quisiéramos.</p>
</div>

<h3 id="Valores_abreviados_para_las_propiedades_flex">Valores abreviados para las propiedades flex</h3>

<p>Difícilmente veremos la propiedades <code>flex-grow</code>, <code>flex-shrink</code> y <code>flex-basis</code> usadas individualmente; si no que han sido combinadas en la abreviación {{cssxref("flex")}} . La abreviación <code>flex</code> permite establecer los tres valores en este orden: <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>.</p>

<p>El ejemplo en vivo de más abajo permite probar los diferentes valores de la abreviación flex; recuerde que el primer valor es <code>flex-grow</code>. Dándole un valor positivo significa que el ítem puede crecer. El segundo es <code>flex-shrink</code> — con un valor positivo los ítems pueden contraerse. El valor final es <code>flex-basis</code>; este es el valor que los ítems usan como valor base para crecer y contraerse.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 400)}}</p>

<p>Hay además algunas abreviaturas de valores que cubren la mayoría de los casos de uso. Se ven con frecuencia utilizados en tutoriales, y en muchos casos es todo lo que necesitamos usar. Los valores predefinidos son los siguientes:</p>

<ul>
 <li><code>flex: initial</code></li>
 <li><code>flex: auto</code></li>
 <li><code>flex: none</code></li>
 <li><code>flex: &lt;positive-number&gt;</code></li>
</ul>

<p>Fijando <code>flex: initial</code> el ítem se restablece con los valores iniciales de Flexbox. Es lo mismo que <code>flex: 0 1 auto</code>. En este caso el valor de <code>flex-grow</code> is 0, así que los ítems no crecerán más de su tamaño <code>flex-basis</code> . El valor <code>flex-shrink</code> es 1, así que los ítems pueden contraerse si es necesario en vez de salirse de los márgenes. El valor de <code>flex-basis</code> es <code>auto</code>. Los ítems pueden definir un tamaño en la dimensión del eje principal, o bien obtener su tamaño por el contenido del los mismos.</p>

<p>Usar <code>flex: auto</code> es lo mismo que usar <code>flex: 1 1 auto</code> , es como con <code>flex:initial</code> pero en este caso los ítems pueden crecer y llenar el contendor así como encoger si se requiere.</p>

<p>Al usar <code>flex: none</code> se crearán ítems flex totalmente inflexibles. Es como escribir <code>flex: 0 0 auto</code>. Los ítems no pueden ni crecer ni encoger pero serán colocados usando flexbox con <code>flex-basis</code> en <code>auto</code>.</p>

<p>Una abreviación que es común en tutoriales es <code>flex: 1</code> o <code>flex: 2</code>  y más. Es como usar <code>flex: 1 1 0</code>. Los ítems pueden crecer o encoger con un <code>flex-basis</code> de 0.</p>

<p>Pruebe estas abreviaciones de valores en el ejemplo en vivo de abajo.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 480)}}</p>

<h2 id="Alineación_justificación_y_distribución_del_espacio_libre_entre_ítems">Alineación, justificación y distribución del espacio libre entre ítems</h2>

<p>Una característica clave de flexbox es la capacidad de alinear y justificar ítems sobre los ejes principal y cruzado, y distribuir el espacio entre los ítems flex.</p>

<h3 id="align-items"><code>align-items</code></h3>

<p>La propiedad {{cssxref("align-items")}} alineará los ítems sobre el eje cruzado.</p>

<p>El valor inicial para esta propiedad es <code>stretch</code> razón por la cual los ítems se ajustan por defecto a la altura de aquel más alto. En efecto se ajustan para llenar el contenedor flex — el ítem más alto define la altura de este.</p>

<p>En cambio definimos <code>align-items</code> como <code>flex-start</code> para que los ítems se alineen al comienzo del contenedor flex, <code>flex-end</code> para alinearlos al final, o <code>center</code> para alinearlos al centro. Intente esto en el ejemplo en vivo — He definido en el contenedor flex una altura para que se aprecie que se pueden mover libremente dentro del contenedor. Vea lo que sucede si se coloca el valor align-items como:</p>

<ul>
 <li><code>stretch</code></li>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}</p>

<h3 id="justify-content"><code>justify-content</code></h3>

<p>La propiedad {{cssxref("justify-content")}} es usada para alinear los ítems en el eje principal, cuyo <code>flex-direction</code> define la dirección del flujo. El valor inicial es <code>flex-start</code> que alineará los ítems al inicio del margen del contenedor, pero también se podría definir como <code>flex-end</code> para alinearlos al final, o <code>center</code> para alinearlos al centro.</p>

<p>También podemos usar <code>space-between</code> para tomar todo el espacio sobrante después de que los ítems hayan sido colocados, y distribuir de forma pareja los ítems para que haya un espacio equitativo entre cada ítem. O bien, usamos el valor <code>space-around</code> para crear un espacio equitativo a la derecha e izquierda de cada ítem.</p>

<p>Pruebe con los siguientes valores de<code>justify-content</code> en el ejemplo en vivo:</p>

<ul>
 <li><code>space-evenly</code></li>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
 <li><code>space-around</code></li>
 <li><code>space-between</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}</p>

<p>En un próximo artículo ahondaremos sobre estas propiedades, con el fin de obtener mejor entendimiento de cómo funcionan. Sin embargo, estos sencillos ejemplos serán útiles para la mayoría de los casos de uso.</p>

<h2 id="Próximos_pasos">Próximos pasos</h2>

<p>Al final de este artículo usted debería tener un entendimiento de las características básicas de Flexbox. En el próximo artículo veremos cómo esta especificación encaja con las otras partes de CSS.</p>
