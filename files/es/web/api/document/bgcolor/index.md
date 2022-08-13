---
title: document.bgColor
slug: Web/API/Document/bgColor
translation_of: Web/API/Document/bgColor
---
<p>{{APIRef("DOM")}}{{ Deprecated_header() }}</p>

<p><code>bgColor</code> da/define el color de fondo (bgColor) del documento actual.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><i>color</i> = document.bgColor
document.bgColor =
<i>color</i>
</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<ul>
 <li><code>color</code> es un texto representando el color como una palabra en inglés (e.j., "red") o en valor hexadecimal (e.j., "<code>#ff0000</code>").</li>
</ul>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<pre class="eval"># document.bgColor = "darkblue";
# document.bgColor = "#ff00ff";
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>El valor por defecto de esta propiedad en Mozilla Firefox es blanco (<code>#ffffff</code> en hexadecimal).</p>

<p><code>document.bgColor</code> está desaprobado en <a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268">DOM Level 2 HTML</a>. La alternativa recomendada es el uso del estilo <a href="es/CSS/background-color"> background-color</a> de CSS el cual puede ser accesado a través del DOM con <code>document.body.style.backgroundColor</code>. Otra alternativa es <code>document.body.bgColor</code>, sin embargo, ésta última también está desaprobada en HTML 4.01 a favor de la alternativa CSS.</p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p>DOM Nivel 0. No es parte de ningún estándar.</p>

<p>{{ languages( { "en": "en/DOM/document.bgColor", "pl": "pl/DOM/document.bgColor" } ) }}</p>
