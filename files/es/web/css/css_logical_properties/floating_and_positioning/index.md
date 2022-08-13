---
title: Propiedades lógicas para flotantes y posicionamiento
slug: Web/CSS/CSS_Logical_Properties/Floating_and_positioning
translation_of: Web/CSS/CSS_Logical_Properties/Floating_and_positioning
---
<div>{{CSSRef}}</div>

<div> </div>

<p class="summary">La <a href="https://drafts.csswg.org/css-logical/">especificación de Propiedades y Valores Lógicos</a> contiene una asignación para los valores físicos {{cssxref("float")}} y {{cssxref("clear")}}, y también para las propiedades de posicionamiento usadas con <a href="/en-US/docs/Web/CSS/CSS_Positioning">positioned layout</a>. Esta guía nos permite saber cómo utilizar estas propiedades.</p>

<h2 id="Asignando_propiedades_y_valores">Asignando propiedades y valores</h2>

<p>La tabla a continuación detalla las propiedades y valores discutidos en esta guía junto con sus asignaciones físicas. Estas, asumen un modo de escritura ({{cssxref("writing-mode")}}), con una dirección de izquierda a derecha (left-to-right).</p>

<p> </p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">
    <p>Propiedad o valor lógico</p>
   </th>
   <th scope="col">
    <p>Propiedad o valor lógico</p>
   </th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    <p>{{cssxref("float")}}: inline-start</p>
   </td>
   <td>
    <p>{{cssxref("float")}}: left</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("float")}}: inline-end</p>
   </td>
   <td>
    <p>{{cssxref("float")}}: right</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("clear")}}: inline-start</p>
   </td>
   <td>
    <p>{{cssxref("clear")}}: left</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("clear")}}: inline-end</p>
   </td>
   <td>
    <p>{{cssxref("clear")}}: right</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("inset-inline-start")}}</p>
   </td>
   <td>
    <p>{{cssxref("left")}}</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("inset-inline-end")}}</p>
   </td>
   <td>
    <p>{{cssxref("right")}}</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("inset-block-start")}}</p>
   </td>
   <td>
    <p>{{cssxref("top")}}</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("inset-block-end")}}</p>
   </td>
   <td>
    <p>{{cssxref("bottom")}}</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("text-align")}}: start</p>
   </td>
   <td>
    <p>{{cssxref("text-align")}}: left</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("text-align")}}: end</p>
   </td>
   <td>
    <p>{{cssxref("text-align")}}: right</p>
   </td>
  </tr>
 </tbody>
</table>

<p> </p>

<p>Además de estas propiedades asignadas, hay algunas propiedades abreviadas adicionales que son posibles al poder abordar las dimensiones de bloque y en línea. Estos no tienen mapeo a las propiedades físicas.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">
    <p>Propiedad lógica</p>
   </th>
   <th scope="col">
    <p>Propósito</p>
   </th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    <p>{{cssxref("inset-inline")}}</p>
   </td>
   <td>
    <p>Establece los dos valores de inserción anteriores para la dimensión en línea simultáneamente.</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("inset-block")}}</p>
   </td>
   <td>
    <p>Establece los dos valores de inserción anteriores para la dimensión de bloque simultáneamente.</p>
   </td>
  </tr>
  <tr>
   <td>
    <p>{{cssxref("inset")}}</p>
   </td>
   <td>
    <p>Establece los cuatro valores de inserción simultáneamente.</p>
   </td>
  </tr>
 </tbody>
</table>

<p> </p>

<h2 id="Flotante_y_ejemplo_claro">Flotante y ejemplo claro</h2>

<p>Los valores físicos usados con las propiedades {{cssxref("float")}} y {{cssxref("clear")}} son <code>left</code>, <code>right</code> y <code>both</code>. La especificación de las Propiedades Lógicas definen los valores <code>inline-start</code> y <code>inline-end</code> como asignación para <code>left</code> y <code>right</code>.</p>

<p>En el ejemplo de abajo tenemos dos cajas — la primera tiene una caja flotante con <code>float: left</code>, la segunda con <code>float: inline-start</code>. Si tu cambias el modo de escritura (<code>writing-mode</code>) a <code>vertical-rl</code> o la dirección (<code>direction</code>) a <code>rtl</code> verás que la caja flotando a la izquierda siempre se queda en la izquierda, mientras que el ítem <code>inline-start</code>-floated sigue la dirección (<code>direction</code>) y el modo de escritura (<code>writing-mode</code>).</p>

<p>{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}</p>

<h2 id="Ejemplo_Propiedades_de_inserción_para_diseño_posicionado">Ejemplo: Propiedades de inserción para diseño posicionado</h2>

<p>El posicionamiento generalmente nos permite posicionar un elemento de una manera relativa al bloque de contención — esencialmente, insertamos el elemento en relación con el lugar donde caería en función del flujo normal. Para hacer esto, hemos usado popiedades físicas como {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} y {{cssxref("left")}}.</p>

<p>Estas propiedades toman una longitud o un porcentaje como valor y se relacionan con las dimensiones de la pantalla del usuario.</p>

<p>Se han creado nuevas propiedades en la especificación de Propiedades Lógicas para cuando desee que el posicionamiento se relacione con el flujo de texto en su modo de escritura. Estos son los siguientes: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} y {{cssxref("inset-inline-end")}}.</p>

<p>En el siguiente ejemplo hemos usado las propiedades <code>inset-block-start</code> y <code>inset-inline-end</code> para posicionar la caja azul usando un posicionamiento absoluto dentro del área con el borde punteado de color gris, que tiene <code>position: relative</code>. Podemos cambiar la propiedad de modo de escritura (<code>writing-mode</code>) a <code>vertical-rl</code>, o agregar <code>direction: rtl</code>, y ver cómo el cuadro de flujo relativo se mantiene con la dirección del texto.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}</p>

<h2 id="Nuevas_abreviaciones_de_dos-_y_cuatro-valores">Nuevas abreviaciones de dos- y cuatro-valores</h2>

<p>Al igual que con otras propiedades en la especificación, tenemos algunas propiedades abreviadas nuevas, que permiten configurar dos o cuatro valores a la vez. Estos no tienen una equivalencia directa a propiedades físicas.</p>

<ul>
 <li>
  <p>{{cssxref("inset")}} — pone los cuatro lados juntos.</p>
 </li>
 <li>
  <p>{{cssxref("inset-inline")}} — pone los dos en línea juntos.</p>
 </li>
 <li>
  <p>{{cssxref("inset-block")}} — pone los dos bloques juntos.</p>
 </li>
</ul>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Los navegadores que han implementado la especificación de propiedades lógicas han implementado hasta ahora las asignaciones directas y no las abreviaturas nuevas. Consulte la sección de datos de compatibilidad del navegador en cada referencia de página de propiedades para obtener más detalles.</p>
</div>

<h2 id="Ejemplo_Valores_lógicos_para_text-align">Ejemplo: Valores lógicos para text-align</h2>

<p>La propiedad {{cssxref("text-align")}} tiene valores lógicos que se relacionan con la dirección del texto. — en lugar de usar <code>left</code> y <code>right</code> usamos <code>start</code> y <code>end</code>. En el siguiente ejemplo tenemos <code>text-align: right</code> en el primer bloque y <code>text-align: end</code> en el segundo.</p>

<p>Si cambias el valor de la dirección (<code>direction</code>) a <code>rtl</code> verás que la alineación permanece a la derecha para el primer bloque, pero va al extremo lógico en el segundo bloque.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}</p>

<p>Esto funciona de una manera más consistente cuando se usa la alineación de caja que usa inicio y final en lugar de direcciones físicas para la alineación.</p>
