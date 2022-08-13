---
title: CanvasRenderingContext2D.lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
translation_of: Web/API/CanvasRenderingContext2D/lineCap
---
<div>{{APIRef}}</div>

<p>La propiedad <code><strong>CanvasRenderingContext2D</strong></code><strong><code>.lineCap</code></strong> del API Canvas 2D determina la forma usada para dibujar los puntos finales de las líneas.</p>

<div class="blockIndicator note">
<p><strong>Nota:</strong> La líneas se puede dibujar con los métodos {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}, y {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}}.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>ctx</em>.lineCap = "butt" || "round" || "square";
</pre>

<h3 id="Opciones">Opciones</h3>

<dl>
 <dt><code>"butt"</code></dt>
 <dd>Los finales de las líneas son recortados. Valor por defecto.</dd>
 <dt><code>"round"</code></dt>
 <dd>Los finales de las líneas son redondeados.</dd>
 <dt><code>"square"</code></dt>
 <dd>Los finales de líneas son recortados al agregar un cuadrado de ancho y altura igual que el grosor de línea.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Cambiando_los_finales_de_línea">Cambiando los finales de línea</h3>

<p>En este ejemplo se redondean los puntos finales de una línea recta.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[7]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.lineTo(100, 100);
ctx.stroke();
</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Changing_the_shape_of_line_caps', 700, 180) }}</p>

<h3 id="Comparando_los_finales_de_línea">Comparando los finales de línea</h3>

<p>En este ejemplo se dibujan 3 líneas, cada una con un valor distinto de la propiedad <code>lineCap</code>. Se agregaron dos guías para resaltar las diferencias entre las tres líneas. Cada una de estas líneas empiezan y terminan en estas guías.</p>

<p>La línea de la izquiera usa la opción por defecto <code>"butt"</code>. Esta es dibujada completamente al ras de las líneas de guía. La segunda esta configurada para usar la opción <code>"round</code>. Esta agrega un semicírculo al final que tiene un radio de la mitad del grosor de línea. La línea de la derecha use la opción <code>"square"</code>. Esta agrega un cuadrado con ancho y altura de la mitad del grosor de línea.</p>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>
</div>

<pre class="brush: js">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const lineCap = ['butt', 'round', 'square'];

// Draw guides
ctx.strokeStyle = '#09f';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Draw lines
ctx.strokeStyle = 'black';
for (let i = 0; i &lt; lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i];
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
}
</pre>

<p>{{EmbedLiveSample("Comparison_of_line_caps", "180", "180", "https://mdn.mozillademos.org/files/236/Canvas_linecap.png")}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-linecap", "CanvasRenderingContext2D.lineCap")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegador.">Compatibilidad de navegador.</h2>



<p>{{Compat("api.CanvasRenderingContext2D.lineCap")}}</p>

<h3 id="WebKitBlink-specific_notes">WebKit/Blink-specific notes</h3>

<ul>
 <li>En WebKit- y navegadores basados en Blink, el método no estandard  y obsoleto <code>ctx.setLineCap()</code> es implementado ademas de esta propiedad.</li>
</ul>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>La interfaz que define esta propiedad: {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.lineWidth")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.lineJoin")}}</li>
 <li><a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors">Aplicando estilos y color</a></li>
</ul>
