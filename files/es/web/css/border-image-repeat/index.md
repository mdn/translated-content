---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
tags:
  - Bordes CSS
  - CSS
  - Propiedades CSS
  - Referencia
translation_of: Web/CSS/border-image-repeat
---
<div>{{CSSRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>La propiedad CSS <strong><code>border-image-repeat</code></strong> define cómo se manejará la parte media de una imagen de borde para que coincida con el tamaño del borde. Tiene sintaxis de un valor, el cual describe el comportamiento de todos los lados, y otra sintaxis de dos valores, que establece diferentes valores para el comportamiento horizontal y vertical.</p>

<div>{{cssinfo}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css">/* border-image-repeat: <em>type</em> */
border-image-repeat: stretch;

/* border-image-repeat: <em>horizontal</em> <em>vertical</em> */
border-image-repeat: round stretch;

/* Global values */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: unset;
</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><em>type</em></dt>
 <dd>Puede ser <code>stretch</code>, <code>repeat</code>, o <code>round</code>, que denotan cómo será tratada la imagen vertical y horizontalmente.</dd>
 <dt><em>horizontal</em></dt>
 <dd>Puede ser <code>stretch</code>, <code>repeat</code>, o <code>round</code>, denotando cómo será tratada la imagen horizontalmente.</dd>
 <dt><em>vertical</em></dt>
 <dd>Puede ser <code>stretch</code>, <code>repeat</code>, o <code>round</code>, denotando cómo será tratada la imagen verticalmente.</dd>
 <dt><code>stretch</code></dt>
 <dd>Palabra clave que indica que la imagen deberá ser estirada para cubrir el espacio entre dos bordes.</dd>
 <dt><code>repeat</code></dt>
 <dd>Palabra clave que indica que la imagen debe ser repetida hasta que cubra el espacio entre dos bordes.</dd>
 <dt><code>round</code></dt>
 <dd>Palabra clave que indica que la imagen debe ser repetida hasta que cubra el espacio entre dos bordes. Si la imagen no se ajusta después de repetirse un número íntegro de veces, la imagen es escalada para ajustarse.</dd>
 <dt><code>space</code></dt>
 <dd>La imagen es repetida hasta cubrir el área del elemento. Si no se cubre el área completa con un número de imágenes, el espacio extra es distribuido al rededor de éstas.</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="Contenido_CSS">Contenido CSS</h3>

<pre class="brush: css; highlight[7]">#borderImageRepetition {
  width: 260px;
  height: 80px;
  margin-bottom: 10px;
  border: 30px solid;
  border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 27;
  border-image-repeat: stretch; /* Puede ser modificado en el ejemplo en vivo */
}
</pre>

<div class="hidden">
<h3 id="Contenido_HTML">Contenido HTML</h3>

<pre class="brush: html">&lt;div id="borderImageRepetition"&gt;
&lt;/div&gt;
&lt;select id="repetition"&gt;
  &lt;option value="stretch"&gt;stretch&lt;/option&gt;
  &lt;option value="repeat"&gt;repeat&lt;/option&gt;
  &lt;option value="round"&gt;round&lt;/option&gt;
  &lt;option value="space"&gt;space&lt;/option&gt;
  &lt;option value="stretch repeat"&gt;stretch repeat&lt;/option&gt;
  &lt;option value="space round"&gt;space round&lt;/option&gt;
&lt;/select&gt;
</pre>

<h3 id="Contenido_JavaScript">Contenido JavaScript</h3>

<pre class="brush: js">var repetition = document.getElementById("repetition");
repetition.addEventListener("change", function (evt) {
  document.getElementById("borderImageRepetition").style.borderImageRepeat = evt.target.value;
});
</pre>
</div>

<p>{{EmbedLiveSample("Example", "330px", "180px")}}</p>

<h2 id="Specifications" name="Specifications">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estatus</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Backgrounds', '#border-image-repeat', 'border-image-repeat')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h2>

<div>{{Compat("css.properties.border-image-repeat")}}</div>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li><a href="https://css-tricks.com/almanac/properties/b/border-image/">css-tricks border-image</a></li>
</ul>
