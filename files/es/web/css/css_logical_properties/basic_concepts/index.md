---
title: Conceptos básicos de las Propiedades y Valores Lógicos
slug: Web/CSS/CSS_Logical_Properties/Basic_concepts
translation_of: Web/CSS/CSS_Logical_Properties/Basic_concepts
---
<div>{{CSSRef}}</div>

<p class="summary">La Especificación de Propiedades y Valores Lógicos introduce asignaciones relativas al flujo para muchas de las propiedades y valores en CSS. Este artículo introduce la especificación y explica las propiedades y valores relativos al flujo.</p>

<h2 id="¿Por_qué_necesitamos_propiedades_lógicas">¿Por qué necesitamos propiedades lógicas?</h2>

<p>Tradicionalmente CSS ha medido las cosas de acuerdo con las dimensiones físicas de la pantalla. Por lo tanto, decimos que las cajas tienen un ancho<span style="font-size: 1rem; letter-spacing: -0.00278rem;"> ({{CSSxRef("width")}}) y un alto ({{CSSxRef("height")}}), posicionamos elementos</span><span style="font-size: 1rem; letter-spacing: -0.00278rem;">, los flotamos, les asignamos bordes, márgenes y rellenos arriba (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">top</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">), a la derecha (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">right</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">), abajo (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">bottom</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">), a la izquierda ( </span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">left</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">), etc. La </span><a href="https://drafts.csswg.org/css-logical/" style="font-size: 1rem; letter-spacing: -0.00278rem;">especificación de Propiedades y valores Logicos</a><span style="font-size: 1rem; letter-spacing: -0.00278rem;"> define una asignación de esos valores físicos a su lógica, o flujo relativo — por ejemplo, comienzo (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">start</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">) y final (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">end</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">) en oposición a izquierda (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">left</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">) y derecha (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">right</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">) / arriba (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">top</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">) y abajo (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">bottom</code>) .</p>

<p>Un ejemplo de por qué esas asignaciones podrían ser necesarias es el siguiente: tengo el diseño de una pantalla usando CSS Grid, el contenedor de la rejilla tiene un ancho y estoy usando las propiedades {{CSSxRef("align-self")}} y {{CSSxRef("justify-self")}} para alinear los elementos dentro del contenedor. Esas propiedades son de flujo relativo — <code>justify-self: start</code> alinea el elemento al inicio de la dimensión en línea, <code>align-self: start</code> hace lo mismo en la dimensión bloque.</p>

<p><img alt="A grid in a horizontal writing mode" src="https://mdn.mozillademos.org/files/16338/grid-horizontal-width-sm.png" style="display: block; margin: 0 auto; width: 350px;"></p>

<p>Si ahora cambio el modo de escritura para este componente a <code>vertical-rl</code> usando la propiedad {{CSSxRef("writing-mode")}}, la alineación sigue trabajando de la misma forma. La dimensión en línea está ahora de forma vertical y la dimensión bloque de forma horizontal. Sin embargo, la rejilla no se ve igual ya que el ancho asignado para el contenedor es una medida horizontal, vinculada a la posición física y no a la posición lógica o al flujo relativo del texto.</p>

<p><img alt="A grid in vertical writing mode." src="https://mdn.mozillademos.org/files/16339/grid-vertical-width-sm.png" style="display: block; margin: 0 auto; width: 350px;"></p>

<p>Si en lugar de usar la propiedad <code>width</code> usamos la propiedad lógica {{CSSxRef("inline-size")}}, el componente funciona de la misma forma sin importar en qué modo de escritura se encuentre.</p>

<p><img alt="A grid layout in vertical writing mode" src="https://mdn.mozillademos.org/files/16337/grid-vertical-inline-size-small.png" style="display: block; height: 382px; margin: 0 auto; width: 200px;"></p>

<p>Puedes probar lo anterior en el siguiente ejemplo en vivo. Cambia la propiedad <code>writing-mode</code> de <code>vertical-rl</code> a <code>horizontal-tb</code> en <code>.box</code> para mirar cómo cambia el diseño con las diferentes propiedades.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/intro-grid-example.html", '100%', 700)}}</p>

<p>Cuando trabajamos en un sitio con un modo de escritura diferente al predeterminado (horizontal) o por razones creativas, ser capaces de relacionarnos con el flujo del contenido tiene mucho sentido.</p>

<h2 id="Dimensiones_de_bloque_y_en_línea">Dimensiones de bloque y en línea</h2>

<p>Dos conceptos claves para trabajar con las propiedades y valores al flujo relativo, son las dimensiones de bloque y en línea. Como vimos anteriormente, los métodos de diseño de CSS como Flexbox y Grid usan los conceptos de bloque (<code>block</code>) y en línea (<code>inline</code>) en vez de usar los conceptos de derecha (<code>right</code>) e izquierda (<code>left</code>) / arriba (<code>top</code>) y abajo (<code>bottom</code>) para alinear elementos.</p>

<p>La dimensión en línea (<code>inline</code>) es la dimensión a lo largo de la cual se ejecuta una línea de texto en el modo de escritura en uso. Por lo tanto, en un documento en español con el texto ejecutándose horizontalmente de izquierda a derecha o un documento árabe con el texto ejecutándose horizontalmente de derecha a izquierda, la dimensión en línea es <em>horizontal</em>. Si cambiamos a un modo de escritura vertical (por ejemplo, un documento japonés), la dimensión en línea ahora es <em>vertical</em>, ya que las líneas en ese modo de escritura se ejecutan verticalmente.</p>

<p>La dimensión en bloque es la dimensión en la que los bloques —como los párrafos— se muestran uno después del otro. Tanto en español como en árabe, los bloques se ejecutan verticalmente, mientras que en cualquier modo de escritura vertical se ejecutan horizontalmente.</p>

<p>El siguiente diagrama muestra las direcciones de bloque y en línea en un modo de escritura horizontal:</p>

<p><img alt="diagram showing the inline axis running horizontally, block axis vertically." src="https://mdn.mozillademos.org/files/16340/mdn-horizontal.png" style="display: block; height: 382px; margin: 0 auto; width: 521px;"></p>

<p>El siguiente diagrama muestra las direcciones de bloque y en línea en un modo de escritura vertical:</p>

<p><img alt="Diagram showing the block axis running horizontally the inline axis vertically." src="https://mdn.mozillademos.org/files/16341/mdn-vertical.png" style="display: block; height: 382px; margin: 0 auto; width: 418px;"></p>

<h2 id="Soporte_en_navegadores">Soporte en navegadores</h2>

<p>Las Propiedades y Valores lógicos pueden ser considerados como un par de grupos en términos de la compatibilidad actual del navegador. Algunas de las propiedades son esencialmente asignadas desde la versión física, por ejemplo {{CSSxRef("inline-size")}} por {{CSSxRef("width")}} o {{CSSxRef("margin-inline-start")}} en lugar de {{CSSxRef("margin-left")}}. Esa asignación de propiedades se está comenzando a ver bien en los diferentes navegadores; sin embargo, si miras la página de cada propiedad en la <a href="/en-US/docs/Web/CSS/CSS_Logical_Properties#Reference">referencia en MDN</a>, verás que el único navegador moderno que no cuenta con estas propiedades es Edge.</p>

<p>Hay otro grupo de estas propiedades lógicas que no tienen una asignación directa con las propiedades físicas existentes. Estas son abreviaturas posibles gracias al hecho de que podemos referirnos a ambos bordes del bloque o dimensión en línea a la vez. Un ejemplo sería {{CSSxRef("margin-block")}}, que es una abreviación de {{CSSxRef("margin-block-start")}} y {{CSSxRef("margin-block-end")}}. Actualmente, estas propiedades no tiene soporte en navegadores.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: CSS Working Group está intentando decidir qué hacer con los valores abreviados de cuatro valores para las propiedades lógicas, por ejemplo, los equivalentes para configurar cuatro propiedades físicas a la vez, como márgenes con la propiedad {{CSSxRef("margin")}}. Necesitaríamos algún tipo de modificador si tuviéramos que reutilizar el margen para las propiedades relativas al flujo. Si deseas leer las sugerencias o comentarlas, el problema relevante de GitHub es <a href="https://github.com/w3c/csswg-drafts/issues/1282">#1282</a>.</p>
</div>

<h3 id="Pruebas_para_el_soporte_en_navegadores">Pruebas para el soporte en navegadores</h3>

<p>Puedes probar el soporte de las propiedades y valores lógicos usando <em>feature queries</em>. Por ejemplo, {{CSSxRef("width")}}, prueba para {{CSSxRef("inline-size")}} y, si esto es soportado, establece el ancho (<code>width</code>) en automático (<code>auto</code>) y el tamaño en línea (<code>inline-size</code>) al valor del ancho (<code>width</code>) original.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/intro-feature-queries.html", "100%", 700)}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Alineamiento de caja en Grid Layout</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox">Alineamiento de caja en Flex Layout</a></li>
 <li><a href="https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/">Entendiendo Propiedades y Valores Lógicos</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes">Modos de escritura</a></li>
</ul>
