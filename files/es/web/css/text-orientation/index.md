---
title: text-orientation
slug: Web/CSS/text-orientation
tags:
  - CSS
  - Formas de Escritura CSS
  - Orientacion del Texto CSS
  - Propiedad CSS
  - Referencia
translation_of: Web/CSS/text-orientation
---
<div>{{CSSRef}}</div>

<p>La propiedad  <a href="/en-US/docs/Web/CSS">CSS  </a><strong><code>text-orientation</code></strong> define la orientación del texto en una línea de escritura. Ésta propiedad sólo tiene efecto en modo vertical, ésto es, cuando {{cssxref("writing-mode")}} no está establecido cómo <code>horizontal-tb</code>. Ésta propiedad CSS es util para controlar la forma en que se muestran los lenguajes que utilizan escritura vertical, y tambien para construir encabezados verticales para tablas.</p>

<pre class="brush:css no-line-numbers">/* Palabras clave valor */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Valores globales */
text-orientation: inherit;
text-orientation: initial;
text-orientation: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<p>La propiedad <code>text-orientation</code> puede tener cómo valor una de las palabras clave listadas a continuación.</p>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>mixed</code></dt>
 <dd>Rota los caracteres de escritura horizontal 90° en sentido de las manecillas del reloj. Establece los caracteres de escritura vertical de forma natural. Este es el valor por defecto.</dd>
 <dt><code>upright</code></dt>
 <dd>Establece los caracteres de escritura horizontal de forma natural (pero se presentan de arriba hacia abajo), de igual manera establece de forma natural los glifos para escritura vertical. Note que ésta palabra clave causa que todos los caracteres sean considerados de forma izquierda-a-derecha: el valor utilizado para {{cssxref("direction")}} es forzado a ser <code>ltr</code>.</dd>
 <dt><code>sideways</code></dt>
 <dd>Causa que los caracteres sean presentados de la forma en que se presentarían de manera horizontal, pero con la línea de escritura rotada 90° en sentido de las manecillas del reloj.</dd>
 <dt><code>sideways-right</code></dt>
 <dd>Un alias para <code>sideways</code> que se mantiene para propositos de compatibilidad.</dd>
 <dt><code>use-glyph-orientation</code></dt>
 <dd>En elementos SVG, ésta palabra clave produce que sea utilizado el valor de las propiedades SVG desaprobadas <code>glyph-orientation-vertical</code> y <code>glyph-orientation-horizontal</code>.</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Lorem ipsum dolet semper quisquam.&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Especificación">Especificación</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Writing Modes', '#text-orientation', 'text-orientation')}}</td>
   <td>{{Spec2('CSS3 Writing Modes')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p> </p>



<p>{{Compat("css.properties.text-orientation")}}</p>

<p> </p>

<h2 id="Vea_tambien">Vea tambien</h2>

<ul>
 <li>Las otras propiedades CSS relacionadas con escritura vertical: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, y {{cssxref("unicode-bidi")}}.</li>
</ul>
