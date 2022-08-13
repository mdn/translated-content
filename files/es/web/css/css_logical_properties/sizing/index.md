---
title: Dimensionamiento para propiedades lógicas
slug: Web/CSS/CSS_Logical_Properties/Sizing
translation_of: Web/CSS/CSS_Logical_Properties/Sizing
original_slug: Web/CSS/CSS_Logical_Properties/Dimensionamiento
---
<div>{{CSSRef}}</div>

<p class="summary">En esta guía explicaremos las asignaciones relativas al flujo relativo entre las propiedades de dimensionamiento físico y lógico usados para dimensionar elementos en nuestras páginas.</p>

<p>Cuando especificamos el tamaño de un ítem, las <a href="https://drafts.csswg.org/css-logical/">Propiedades y Valores Lógicos</a> te dan la habilidad de indicar el dimensionamiento en relación al flujo relativo del texto (en línea y bloque) más bien que dimensionamiento físico con relación a las dimensiones físicas: horizontal y vertical (por ejemplo, left y right). Si bien estas asignaciones de flujo relativo pueden convertirse en el valor predeterminado para muchos de nosotros, en un diseño puede usar el tamaño físico y el tamaño lógico. Es posible que desee que algunas características se relacionen siempre con las dimensiones físicas, independientemente del modo de escritura.</p>

<h2 id="Asignaciones_para_dimensiones">Asignaciones para dimensiones</h2>

<p>La siguiente tabla proporciona asignaciones entre propiedades lógicas y físicas. Estas asignaciones asumen que estás en un modo de escritura  <code>horizontal-tb</code>, como Inglés o Árabe, en cada caso el ancho ({{CSSxRef("width")}}) sería asignado a {{CSSxRef("inline-size")}}.</p>

<p>Si tú estás en un modo de escritura vertical, entonces {{CSSxRef("inline-size")}} sería asignado a {{CSSxRef("height")}}.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propiedades Lógicas</th>
   <th scope="col">Propiedades Físicas</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{CSSxRef("inline-size")}}</td>
   <td>{{CSSxRef("width")}}</td>
  </tr>
  <tr>
   <td>{{CSSxRef("block-size")}}</td>
   <td>{{CSSxRef("height")}}</td>
  </tr>
  <tr>
   <td>{{CSSxRef("min-inline-size")}}</td>
   <td>{{CSSxRef("min-width")}}</td>
  </tr>
  <tr>
   <td>{{CSSxRef("min-block-size")}}</td>
   <td>{{CSSxRef("min-height")}}</td>
  </tr>
  <tr>
   <td>{{CSSxRef("max-inline-size")}}</td>
   <td>{{CSSxRef("max-width")}}</td>
  </tr>
  <tr>
   <td>{{CSSxRef("max-block-size")}}</td>
   <td>{{CSSxRef("max-height")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Ejemplo_de_ancho_y_alto">Ejemplo de ancho y alto</h2>

<p>Las asignaciones para el ancho ({{CSSxRef("width")}}) y el alto ({{CSSxRef("height")}}) son {{CSSxRef("inline-size")}}, que establece el largo en la dimensión en línea y {{CSSxRef("block-size")}}, que establece el largo en la dimensión en bloque. Cuando trabajamos en Inglés, si reemplazamos el ancho (<code>width</code>) con <code>inline-size</code> y el alto (<code>height</code>) con <code>block-size</code> dará el mismo diseño.</p>

<p>En el siguiente ejemplo, establecemos un modo de escritura <code>horizontal-tb</code>. Cambiamos esto por <code>vertical-rl</code> y veremos que el primer ejemplo — cuando usamos <code>width</code> y <code>height</code> — permanece con el mismo tamaño en cada dimensión, a pesar de que el texto se vuelve vertical. El segundo ejemplo — cuando usamos <code>inline-size</code> y <code>block-size</code> — seguirá la dirección del texto como si todo el bloque hubiera girado.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/size-inline-block.html", '100%', 500)}}</p>

<h2 id="Ejemplo_de_ancho_y_alto_mínimo">Ejemplo de ancho y alto mínimo</h2>

<p>También hay asignaciones para {{CSSxRef ("min-width")}} y {{CSSxRef ("min-height")}} — estas son {{CSSxRef ("min-inline-size")}} y {{ CSSxRef ("min-block-size")}}. Estas funcionan de la misma manera que las propiedades de <code>inline-size</code> y <code>block-size</code>, pero establecen un tamaño mínimo en lugar de uno fijo.<br>
 <br>
 Intente cambiar el siguiente ejemplo a <code>vertical-rl</code>, como en el primer ejemplo, para ver el efecto que tiene. Estoy usando <code>min-height</code> en el primer ejemplo y <code>min-block-size</code> en el segundo.</p>

<p> </p>

<p>{{EmbedGHLiveSample("css-examples/logical/size-min.html", "100%", 500)}}</p>

<h2 id="Ejemplo_de_ancho_y_alto_máximo">Ejemplo de ancho y alto máximo</h2>

<p>Finalmente, puedes usar {{CSSxRef("max-inline-size")}} y {{CSSxRef("max-block-size")}} como reemplazos de {{CSSxRef("max-width")}} y {{CSSxRef("max-height")}}. Intenta jugar con el siguiente ejemplo de la misma manera que antes.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/size-max.html", "100%", 500)}}</p>

<h2 id="Palabras_claves_para_redimensionamiento_lógico">Palabras claves para redimensionamiento lógico</h2>

<p>La propiedad {{CSSxRef("resize")}} establece si un elemento se puede redimensionar o no y si tiene valores físicos de <code>horizontal</code> y <code>vertical</code>. La propiedad <code>resize</code> también tiene valores de palabras clave lógicas. Usar <code>resize: inline</code> permite cambiar el tamaño en la dimensión inline y <code>resize: block</code> permite cambiar el tamaño en la dimensión de bloque.</p>

<p>El valor de la palabra clave de <code>both</code>para la propiedad de cambio de tamaño funciona ya sea que esté pensando física o lógicamente. Establece ambas dimensiones a la vez. Intenta jugar con el siguiente ejemplo.</p>

<p>{{EmbedGHLiveSample("css-examples/logical/size-resize.html", "100%", 700)}}</p>

<div class="blockIndicator warning">
<p><strong>Nota:</strong> <span style="font-size: 1rem; letter-spacing: -0.00278rem;">Tenga en cuenta que actualmente los valores lógicos para el cambio de tamaño solo son compatibles con Firefox.</span></p>

<p> </p>
</div>
