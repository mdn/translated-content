---
title: ':root'
slug: 'Web/CSS/:root'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:root'
---
<div>{{CSSRef}}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <strong><code>:root</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> selecciona el elemento raíz de un árbol que representa el documento. En HTML, <code>:root</code> representa el elemento {{HTMLElement("html")}} y es idéntico al selector <code>html</code>, excepto que su <a href="/es/docs/Web/CSS/Specificity">especificidad</a> es mayor.</p>

<pre class="brush: css no-line-numbers">/* Selecciona el elemento raíz del documento:
   &lt;html&gt; en el caso de HTML */
:root {
  background: yellow;
}</pre>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<p><code>:root</code> puede ser útil para declarar <a href="/es/docs/Web/CSS/Using_CSS_variables">variables CSS</a> globales:</p>

<pre class="brush: css">:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#root-pseudo', ':root')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#root-pseudo', ':root')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.root")}}</p>
