---
title: bottom
slug: Web/CSS/bottom
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/bottom
---
<p>
</p><p>&lt;&lt; <a href="es/Gu%c3%ada_de_referencia_de_CSS">Volver</a>
</p>
<h3 id="Resumen" name="Resumen"> Resumen </h3>
<p>La propiedad <code>bottom</code> especifica parte de la posición de un elemento (posicionado - es decir, con una posición determinada por código).
</p><p>Para los elementos con una posición absoluta (aquellos que tienen la propiedad <code>position: absolute</code> o <code>position: fixed</code>), la propiedad bottom determina la distancia entre el borde inferior del elemento y el borde inferior de su bloque contenedor.
</p><p>Para los elementos con una posición relativa (los que tienen la propiedad <code>position: relative</code>), la propiedad bottom determina la distancia que el elemento se mueve hacia arriba desde su posición normal. Sin embargo, la propiedad {{ Cssxref("top") }} se antepone a la propiedad bottom, por lo que si <code>top</code> no es <code>auto</code>, el valor computado de <code>bottom</code> es el valor negativo del valor computado de <code>top</code>.
</p>
<ul><li> {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("auto", "automático") }}
</li><li> Se aplica a: {{ Cssxref("position", "la posición de los elementos") }}
</li><li> {{ Cssxref("inheritance", "Heredado") }}: no
</li><li> Porcentajes: se refieren a la altura del bloque contenedor.
</li><li> Medio: {{ Cssxref("Media:Visual", "visual") }}
</li><li> {{ Cssxref("computed value", "Valor calculada") }}: valor absoluto, porcentaje o auto.
</li></ul>
<h3 id="Sintaxis" name="Sintaxis"> Sintaxis </h3>
<pre class="eval">   bottom: &lt;length&gt; | &lt;percentage&gt; | auto | inherit
</pre>
<h3 id="Valores" name="Valores"> Valores </h3>
<dl><dt> &lt;length&gt; </dt><dd> Una longitud, usada como se describe en el <a href="#Resumen">resumen</a>. Puede ser un valor negativo, cero o un valor positivo.
</dd><dt> &lt;percentage&gt; </dt><dd> Un porcentaje de la altura del bloque contenedor, usado como se describe en el <a href="#Resumen">resumen</a>.
</dd><dt> <code>auto</code> </dt><dd> Para los elementos con posición absoluta, el elemento se posiciona en base a la propiedad {{ Cssxref("top") }} y por tanto se trata <code>height: auto</code> como una altura basada en el contenido del elemento. Para los elementos posicionados como relativos, especifica un desplazamiento desde su posición normal basada en la propiedad {{ Cssxref("top") }} o si, <code>top</code> es también <code>auto</code>, no se produce desplazamiento alguno.
</dd><dt> <code>inherit</code> </dt><dd> Recoge el valor que tenga el elemento padre (que puede no ser el bloque contenedor). Este valor calculado es tratado como si fuera un valor &lt;length&gt;, &lt;percentage&gt; o <code>auto</code>.
</dd></dl>
<h3 id="Ejemplos" name="Ejemplos"> Ejemplos </h3>
<pre>element {
    position: absolute;
    bottom: 20px;
    height: 200px;
    border: 1px solid #000;
}
</pre>
<p>El siguiente ejemplo permite contrastar entre <code>position:absolute</code> y <code>position:fixed</code>. Cuando el texto ocupa un espacio más alto que la porción visible de la página (la porción visible en la ventana del navegador) los bloques posicionados con <code>position:absolute</code> se desplazarán junto con la página, mientras que los bloques posicionados con <code>position:fixed</code>, no lo harán.
</p>
<ul><li><b>Atención</b>: IE6 <b>no</b> soporta el código <code>position:fixed</code>.
</li></ul>
<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="content-type" content="text/html; charset=iso-8859-1"&gt;
&lt;title&gt;Position at bottom, absolute or fixed&lt;/title&gt;
&lt;style type="text/css"&gt;
p {font-size:30px; line-height:3em;}
div.pos {width:49%; text-align:center; border:2px solid #00f;}
div#abs {position:absolute; bottom:0; left:0;}
div#fix {position:fixed; bottom:0; right:0;}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Esto&lt;br&gt;es&lt;br&gt;un texto&lt;br&gt;alto,&lt;br&gt;alto,
    &lt;br&gt;alto,&lt;br&gt;alto,&lt;br&gt;alto&lt;br&gt;de prueba.&lt;/p&gt;
  &lt;div id="fix" class="pos"&gt;&lt;p&gt;Fixed&lt;/p&gt;&lt;/div&gt;
  &lt;div id="abs" class="pos"&gt;&lt;p&gt;Absolute&lt;/p&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<h3 id="Notas" name="Notas"> Notas </h3>
<p>Para los elementos posicionados de forma absoluta cuyo bloque contenedor sea un elemento de tipo bloque, esta propiedad es un desplazamiento a partir del borde de relleno (padding) de dicho elemento.
</p><p>Para los elementos posicionados de forma absoluta, la propiedad <code>bottom</code> no tiene efectos visibles cuando los valores {{ Cssxref("top") }}, {{ Cssxref("height") }}, y {{ Cssxref("margin-top") }} <i>no</i> son <code>auto</code> (que es el valor por defecto para <code>top</code> y <code>height</code>).
</p>
<h3 id="Especificaciones" name="Especificaciones"> Especificaciones </h3>
<ul><li> <a class="external" href="http://www.w3.org/TR/CSS21/visuren.html#propdef-bottom">CSS 2.1 (en)</a>
</li><li> <a class="external" href="http://www.w3.org/Style/CSS/current-work#positioning">CSS 3 (en)</a>
</li></ul>
<h3 id="Compatibilidad_entre_navegadores" name="Compatibilidad_entre_navegadores"> Compatibilidad entre navegadores </h3>
<span class="comment">This is as far back as the documentaion goes.</span><table class="standard-table"> <tbody><tr> <th>Navegador</th> <th>Versión mínima</th> </tr> <tr> <td>Internet Explorer</td> <td>5</td> </tr> <tr> <td>Firefox</td> <td>1</td> </tr> <tr> <td>Netscape</td> <td>6</td> </tr> <tr> <td>Opera</td> <td>6</td>  </tr>
</tbody></table>
<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n"> Ver también </h3>
<p>{{ Cssxref("position") }}, {{ Cssxref("top") }}, {{ Cssxref("right") }}, {{ Cssxref("left") }}
</p><p><br>
</p>
<div class="noinclude">
<p><span class="comment">Categorías</span>
</p><p><span class="comment">Interwiki Languages</span>
</p>
</div>
{{ languages( { "fr": "fr/CSS/bottom", "pl": "pl/CSS/bottom", "en": "en/CSS/bottom" } ) }}
