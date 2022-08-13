---
title: element.getClientRects
slug: Web/API/Element/getClientRects
tags:
  - NeedsBrowserCompatibility
  - NeedsExample
  - NeedsLiveSample
  - NeedsUpdate
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Element/getClientRects
---
<p> {{ ApiRef("DOM") }}</p>

<p>El método <code><strong>Element.getClientRects()</strong></code> devuelve una colección de objetos {{domxref("DOMRect")}} que indican los rectángulos que delimitan el rectángulo de cada línea de texto en el navegador.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre><code>var <em>rectCollection</em> = <var>object</var>.getClientRects();</code></pre>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>El valor devuelto es una colección de objetos rectangulares {{domxref("DOMRect")}}, uno para cada cuadro borde CSS asociado al elemento. Cada objeto {{domxref("DOMRect")}} contiene las propiedades de sólo lectura: <code>left</code>, <code>top</code>, <code>right</code> y <code>bottom</code>, que describen la caja, en pixeles, con el valor top-left relativo al valor top-left del <em>viewport. </em>En el caso de tablas con subtítulos, el subtítulo es incluido aún cuado esté fuera del cuadro borde de la tabla. En caso de ser ejecutado en algún elemento SVG que no sea el <code>&lt;svg&gt; </code>externo, el "viewport" al cual los rectángulos de resultado serán relativos será el "viewport" que establece el <code>&lt;svg&gt; </code>externo (y serán transformados por las trasnformaciones del <code>&lt;svg&gt; </code>externo, si estas existen).</p>

<p>{{ fx_minversion_note(3.5, "Firefox 3.5 ha agregado las propiedades <code>width</code> y <code>height</code> al objeto TextRectangle.") }}</p>

<p>La cantidad de desplazamiento que ha tenido el área del viewport (o cualquier otro elemento desplazable) se tiene en cuenta al calcular los rectángulos.</p>

<p>Los rectángulos devueltos no incluyen los márgenes de ningún elemento hijo que se haya podido haber desbordado.</p>

<p>Para los elementos de AREA en HTML, elementos SVG que no renderizen nada por si mismos, los elementos <code>display:none</code>, y generalmente cualquier elemento que no sea renderizado directamente, se devuelve una lista vacia.</p>

<p>Aún si la caja CSS tiene bordes vacios, se devuelven las coordenadas. Las coordenadas <code>left</code>, <code>top</code>, <code>right</code> y <code>bottom</code> pueden aún tener significado.</p>

<p>Es posible que los valores de desplazamiento sean fracciones de pixel.</p>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<pre class="eval">var rects = obj.getClientRects();
var numLines = rects.length;
</pre>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p>No forma parte de ninguna especificación W3C.</p>

<h3 id="Notas" name="Notas">Notas</h3>

<p><code>getClientRects()</code> apareció por primera vez en el modelo de objeto de MS IE DHTML.</p>

<h3 id="Referencias" name="Referencias">Referencias</h3>

<ul>
 <li><a class="external" href="http://msdn2.microsoft.com/en-us/library/ms536435.aspx">MSDN's getClientRects definition</a></li>
</ul>
