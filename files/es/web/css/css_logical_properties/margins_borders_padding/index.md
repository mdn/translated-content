---
title: 'Propiedades lógicas para márgenes, bordes y rellenos'
slug: Web/CSS/CSS_Logical_Properties/Margins_borders_padding
translation_of: Web/CSS/CSS_Logical_Properties/Margins_borders_padding
---
<p>{{CSSRef}}</p>

<p class="summary">La <a href="https://drafts.csswg.org/css-logical/">especificación de Propiedades y Valores Lógicos</a> define asignaciones relativas al flujo para las diversas propiedades de margen, borde, relleno y sus abreviaturas. En esta guía echamos un vistazo a estos.</p>

<p class="summary">Si ha visto la página principal de <a href="/en-US/docs/Web/CSS/CSS_Logical_Properties">Propiedades y Valores Lógicos de CSS</a>, verá que hay una gran cantidad de propiedades en la lista. Esto se debe principalmente al hecho de que hay cuatro valores a largo plazo para cada margen, borde y lado de relleno, más todos los valores abreviados.</p>

<h2 id="Asignaciones_para_márgenes_bordes_y_rellenos">Asignaciones para márgenes, bordes, y rellenos</h2>

<p>La especificación detalla la asignación para cada valor lógico con una contraparte física. En la tabla de abajo he dado estos valores asignados asumiendo que el modo de escritura ({{cssxref("writing-mode")}}) en uso es <code>horizontal-tb</code> — con una dirección de izquierda a derecha. La dirección en línea por lo tanto va horizontalmente — izquierda a derecha — y {{cssxref("margin-inline-start")}} debería ser quivalente a {{cssxref("margin-left")}}.</p>

<p>Si usaste el modo de escritura <code>horizontal-tb</code> con una dirección del texto de derecha a izquierda, entonces {{cssxref("margin-inline-start")}} debería ser el mismo que {{cssxref("margin-right")}}, y en un modo de escritura vertical esto debería ser el mismo que usar {{cssxref("margin-top")}}.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propiedad Lógica</th>
   <th scope="col">Propiedad Física</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{cssxref("border-block-end")}}</td>
   <td>{{cssxref("border-bottom")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-end-color")}}</td>
   <td>{{cssxref("border-bottom-color")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-end-style")}}</td>
   <td>{{cssxref("border-bottom-style")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-end-width")}}</td>
   <td>{{cssxref("border-bottom-width")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-start")}}</td>
   <td>{{cssxref("border-top")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-start-color")}}</td>
   <td>{{cssxref("border-top-color")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-start-style")}}</td>
   <td>{{cssxref("border-top-style")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-start-width")}}</td>
   <td>{{cssxref("border-top-width")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-end")}}</td>
   <td>{{cssxref("border-right")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-end-color")}}</td>
   <td>{{cssxref("border-right-color")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-end-style")}}</td>
   <td>{{cssxref("border-right-style")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-end-width")}}</td>
   <td>{{cssxref("border-right-width")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-start")}}</td>
   <td>{{cssxref("border-left")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-start-color")}}</td>
   <td>{{cssxref("border-left-color")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-start-style")}}</td>
   <td>{{cssxref("border-left-style")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-start-width")}}</td>
   <td>{{cssxref("border-left-width")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-start-start-radius")}}</td>
   <td>{{cssxref("border-top-left-radius")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-start-end-radius")}}</td>
   <td>{{cssxref("border-bottom-left-radius")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-end-start-radius")}}</td>
   <td>{{cssxref("border-top-right-radius")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("border-end-end-radius")}}</td>
   <td>{{cssxref("border-bottom-right-radius")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("margin-block-end")}}</td>
   <td>{{cssxref("margin-bottom")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("margin-block-start")}}</td>
   <td>{{cssxref("margin-top")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("margin-inline-end")}}</td>
   <td>{{cssxref("margin-right")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("margin-inline-start")}}</td>
   <td>{{cssxref("margin-left")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("padding-block-end")}}</td>
   <td>{{cssxref("padding-bottom")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("padding-block-start")}}</td>
   <td>{{cssxref("padding-top")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("padding-inline-end")}}</td>
   <td>{{cssxref("padding-right")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("padding-inline-start")}}</td>
   <td>{{cssxref("padding-left")}}</td>
  </tr>
 </tbody>
</table>

<p>Hay también algunas abreviaciones que han sido posibles porque tenemos la capacidad de apuntar ambos bloques o ambos bordes en línea de la caja simultáneamente. Estas abreviaciones no tienen equivalente físico.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propiedad</th>
   <th scope="col">Propósito</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{cssxref("border-block")}}</td>
   <td>Establece {{cssxref("border-color")}}, {{cssxref("border-style")}}, y {{cssxref("border-width")}} para ambos bordes de bloque.</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-color")}}</td>
   <td>Establece  <code>border-color</code> para ambos bordes de bloque.</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-style")}}</td>
   <td>Establece  <code>border-style</code> para ambos bordes de bloque.</td>
  </tr>
  <tr>
   <td>{{cssxref("border-block-width")}}</td>
   <td>Establece  <code>border-width</code> para ambos bordes de bloque.</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline")}}</td>
   <td>Establece  <code>border-color</code>, <code>-style</code>, y <code>-width</code> para ambos bordes en línea.</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-color")}}</td>
   <td>Establece  <code>border-color</code> para ambos bordes en línea.</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-style")}}</td>
   <td>Establece  <code>border-style</code> para ambos bordes en línea.</td>
  </tr>
  <tr>
   <td>{{cssxref("border-inline-width")}}</td>
   <td>Establece <code>border-width</code> para ambos bordes en línea.</td>
  </tr>
  <tr>
   <td>{{cssxref("margin-block")}}</td>
   <td>Establece todos los {{cssxref("margin")}}s en bloque.</td>
  </tr>
  <tr>
   <td>{{cssxref("margin-inline")}}</td>
   <td>Establece todos los <code>margin</code>s en línea.</td>
  </tr>
  <tr>
   <td>{{cssxref("padding-block")}}</td>
   <td>Establece {{cssxref("padding")}} en bloque.</td>
  </tr>
  <tr>
   <td>{{cssxref("padding-inline")}}</td>
   <td>Establece el <code>padding</code> en línea.</td>
  </tr>
 </tbody>
</table>

<h2 id="Ejemplo_para_márgenes">Ejemplo para márgenes</h2>

<p>Las propiedades asignadas para márgenes de {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}}, y {{cssxref("margin-inline-end")}} pueden ser usadas en lugar de sus contrapartes físicas.</p>

<p>En el siguiente ejemplo, crearemos dos cajas y agregaremos diferentes tamaños de márgenes a cada borde. Hemos agregado un contenedor con un borde para poder hacer el márgen más notorio.</p>

<p>Una caja usa propiedades físicas y la otra usa propiedades lógicas. Intenta cambiar la propiedad {{cssxref("direction")}} a <code>rtl</code> para hacer que los cuadros se muestren en dirección de derecha a izquierda, los márgenes del primer cuadro permanecerán en el mismo lugar, mientras que los márgenes en la dimensión en línea del segundo cuadro cambiarán.</p>

<p>También puedes intentar cambiar el modo de escritura (<code>writing-mode</code>) de <code>horizontal-tb</code> a <code>vertical-rl</code>. De nuevo, notarás cómo las márgenes permanecen en el mismo lugar de la primera caja, pero cambia para seguir la dirección del texto en el segundo.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}</p>

<h3 id="Abreviaciones_para_márgenes">Abreviaciones para márgenes</h3>

<p>Como ahora podemos apuntar a ambos lados de la caja — ya sea ambos lados en bloque o ambos lados en línea either — hay nuevas abreviaciones disponibles, {{cssxref("margin-inline")}} y {{cssxref("margin-block")}}, que aceptan dos valores. El primer valor se aplicará al comienzo de esta dimensión y la segunda al final. Si tú solo usas un valor, se aplica para ambos.</p>

<p>En un modo de escritura horizontal este CSS aplicaría un margen de 5px arriba de la caja y un margen de 10px abajo.</p>

<pre class="brush: css">.box {
  margin-block: 5px 10px;
}</pre>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Las propiedades abreviadas <code>margin-inline</code> y <code>margin-block</code> se enviaron en Firefox 66. Como hay nuevas propiedades, mira el soporte en el navegador antes de usarlas.</p>
</div>

<h2 id="Ejemplos_para_rellenos_(Paddings)">Ejemplos para rellenos (Paddings)</h2>

<p>Las propiedades asignadas para rellenos de {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}}, y {{cssxref("padding-inline-end")}} pueden ser usadas en lugar de sus contrapartes físicas.</p>

<p>En el siguiente ejemplo tenemos dos cajas, una de ellas está usando propiedades de relleno físico y la otra propiedades de relleno lógico. Con un modo de escritura (<code>writing-mode</code>) de <code>horizontal-tb</code>, en ambas cajas aparecerán lo mismo.</p>

<p>Intenta cambiar la propiedad <code>direction</code> a <code>rtl</code> para hacer que las cajas se muestren en dirección de derecha a izquierda, los rellenos del primer cuadro permanecerán en el mismo lugar, mientras que los rellenos en la dimensión en línea del segundo cuadro cambiarán.</p>

<p>También puedes intentar cambiar el modo de escritura (<code>writing-mode</code>) de <code>horizontal-tb</code> a <code>vertical-rl</code>. De nuevo, notarás cómo los rellenos permanecen en el mismo lugar de la primera caja, pero cambia para seguir la dirección del texto en el segundo.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}</p>

<h3 id="Abreviaciones_para_rellenos_(paddings)">Abreviaciones para rellenos (paddings)</h3>

<p>Como con las márgenes, hay dos abreviaciones para rellenos — {{cssxref("padding-inline")}} y {{cssxref("padding-block")}} — que permiten configurar el relleno a las dimenciones de bloque y en línea, respectivamente.</p>

<p>En un modo de escritura horizontal este CSS aplicaría un relleno de 5px arriba de la caja y un relleno de 10px abajo:</p>

<pre class="brush: css">.box {
  padding-block: 5px 10px;
}</pre>

<div class="blockIndicator note">
<p><strong>Note</strong>: Las abreviaciones de las propiedades <code>padding-inline</code> y <code>padding-block</code> se enviaron en Firefox 66. Como hay nuevas propiedades, mira el soporte en el navegador antes de usarlas.</p>
</div>

<h2 id="Ejemplos_para_bordes">Ejemplos para bordes</h2>

<p>Las propiedades del borde son la razón principal por la que las propiedades y valores lógicos parecen tener tantas propiedades, ya que tenemos <em>longhands</em> para el color, el ancho y el estilo del borde en cada lado de una caja, junto con las abreviaciones para establecer los tres a la vez por cada lado. Al igual que con el margen y el relleno, tenemos una versión asignada de cada propiedad física.</p>

<p>El siguiente demo usa algunas <em>longhands </em><span style="font-size: 1rem; letter-spacing: -0.00278rem;">y tres valores de abreviaciones. Como con los otros demos, intenta cambiar la propiedad </span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">direction</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;"> a </span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">rtl</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;"> para que las cajas se muestren en dirección de derecha a izquierda, o cambia el modo de escritura (</span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">writing-mode</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">) de </span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">horizontal-tb</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;"> a </span><code style="font-size: 1rem; letter-spacing: -0.00278rem;">vertical-rl</code><span style="font-size: 1rem; letter-spacing: -0.00278rem;">.</span></p>

<p>{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}</p>

<h3 id="Nuevas_abreviaciones_para_bordes">Nuevas abreviaciones para bordes</h3>

<p>Hay valores abreviados de dos valores para establecer el ancho, el estilo y el color del bloque o dimensión en línea, y valores abreviados de dos valores para establecer los tres valores en la dimensión de bloque o enlínea. El siguiente código, en un modo de escritura horizontal, le dará un borde sólido verde de 2px en la parte superior e inferior del cuadro, y un borde púrpura de puntos de 4px a la izquierda y la derecha.</p>

<pre class="brush: css">.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}</pre>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Estas dos abreviaciones fueron enviadas en Firefox 66, mira el soporte en los navegadores antes de usar estas propiedades ya que puede que en otros navegadores aún no estén implementadas.</p>
</div>

<h3 id="Flujo_de_propiedades_relativas_del_border-radius">Flujo de propiedades relativas del border-radius</h3>

<p> </p>

<p>La especificación ha agregado recientemente valores relativos al flujo para las longitudes {{cssxref ("border-radius")}}. Estos aún no han sido implementados por ningún navegador. El siguiente ejemplo, en un modo de escritura horizontal, establecería el radio del borde superior derecho en 1em, la parte inferior derecha a 0, la parte inferior izquierda a 20px y la parte superior izquierda a 40px.</p>

<p> </p>

<pre class="brush: css">.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}</pre>

<h2 id="Indicating_logical_values_for_the_4-value_shorthand_syntax">Indicating logical values for the 4-value shorthand syntax</h2>

<p>La especificación hace una sugerencia para los métodos abreviados de cuatro valores, como la propiedad de <code>margin</code>, sin embargo, la decisión final sobre cómo debe indicarse esto aún no se ha resuelto, y se trata en <a href="https://github.com/w3c/csswg-drafts/issues/1282">este issue</a>.</p>

<p>El uso de una abreviatura de cuatro valores, como el margen, el relleno o el borde, utilizará actualmente las versiones físicas, por lo que si es importante seguir el flujo del documento, use las propiedades <em>longhand</em> por el momento.</p>

<p> </p>
