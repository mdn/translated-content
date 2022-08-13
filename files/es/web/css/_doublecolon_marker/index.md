---
title: '::marker'
slug: 'Web/CSS/::marker'
translation_of: 'Web/CSS/::marker'
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">El <a href="/en/CSS/Pseudo-elements">pseudo-elemento</a> <strong><code>::marker</code></strong> en <a href="/en-US/docs/Web/CSS">CSS </a></span>selecciona la caja de marcadores de un elemento de la lista, que normalmente contiene una viñeta o un número. Funciona en cualquier elemento o pseudo-elemento configurado para <code><a href="/en-US/docs/Web/CSS/display">display: list-item</a></code>, como el elemento {{HTMLElement("li")}} y {{HTMLElement("summary")}}.</p>

<pre class="brush: css no-line-numbers">::marker {
  color: blue;
  font-size: 1.2em;
}</pre>

<h2 id="Propiedades_permitidas">Propiedades permitidas</h2>

<p>Sólo ciertas propiedades CSS puedes utilizarse en una regla con <code>::marker</code> como selector:</p>

<ul>
 <li>Todas las <a href="/en-US/docs/Web/CSS/CSS_Fonts">propiedades de fuentes</a></li>
 <li>{{CSSxRef("color")}}</li>
 <li>La propiedad {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} y {{CSSxRef("direction")}}</li>
 <li>La propiedad {{CSSxRef("content")}}</li>
</ul>

<div class="blockIndicator note">
<p>En la especificación se indica que en el futuro de pueden admitir propiedades CSS adicionales.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{CSSSyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;Duraznos&lt;/li&gt;
  &lt;li&gt;Manzanas&lt;/li&gt;
  &lt;li&gt;Ciruelas&lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">ul li::marker {
  color: red;
  font-size: 1.5em;
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Example')}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#marker-pseudo', '::marker')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>No significant change.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Lists', '#marker-pseudo', '::marker')}}</td>
   <td>{{Spec2('CSS3 Lists')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("css.selectors.marker")}}</p>
</div>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li>Elementos HTML que tienen marcadores por defecto: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}</li>
</ul>
