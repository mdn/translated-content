---
title: document.alinkColor
slug: Web/API/Document/alinkColor
translation_of: Web/API/Document/alinkColor
---
<p>{{APIRef("DOM")}}</p>

<div class="warning">
<p><strong>Desaprobado</strong></p>
</div>

<p>Devuelve o define el color que tendrán los vínculos activos en el cuerpo (elemento <code>body</code> del documento. Un vínculo está activo durante el tiempo entre los eventos <code>mousedown</code> (cuando se presiona el botón izquierdo del "mouse" sobre el vínculo) y <code>mouseup</code> (cuando se deja de presionar el vínculo al soltar el botón izquierdo del "mouse").</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval"><em>color</em> = document.alinkColor
document.alinkColor =<em>color</em>
</pre>

<p><code>color</code> es un texto que deberá llevar el nombre del color en inglés(e.g., <code>"blue"</code>, <code>"darkblue"</code>, etc.) o el valor hexadecimal del color (e.g., <code>#0000FF</code>)</p>

<h2 id="Notas" name="Notas">Notas</h2>

<p>El valor por defecto de esta propiedad en Mozilla es rojo (<code>#ee0000</code> en hexadecimal).</p>

<p><code>document.alinkColor</code> es obsoleto en <a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268">DOM Level 2 HTML</a>. Una alternativa es el selector CSS {{ Cssxref(":active") }}.</p>

<p>Otra alternativa es <code>document.body.aLink</code>, sin embargo éste es <a class="external" href="http://www.w3.org/TR/html401/struct/global.html#adef-alink">desaprobado en HTML 4.01</a> a favor de la alternativa CSS.</p>

<p><a href="es/Gecko">Gecko</a> soporta tanto <code>alinkColor</code>/<code>:active</code> como {{ Cssxref(":focus") }}. Internet Explorer 6 y 7 soportan <code>alinkColor</code>/<code>:active</code> sólo para <a href="es/HTML/Element/a"> vínculos de ancla (&lt;a&gt;) HTML</a> y el comportamiento es el mismo que <code>:focus</code> bajo Gecko. En IE (Internet Explorer) no hay soporte para <code>:focus</code>.</p>

<h2 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h2>

<p>DOM Nivel 0. No es parte de ningún estándar.</p>

<p><a class="external" href="http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/alinkcolor.asp">MSDN: alinkColor property</a></p>
