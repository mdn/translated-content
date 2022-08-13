---
title: '::spelling-error'
slug: 'Web/CSS/::spelling-error'
tags:
  - CSS
  - Experimental
  - Pseudo-elemento
  - Referencia
  - Web
translation_of: 'Web/CSS/::spelling-error'
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>El <a href="/en/CSS/Pseudo-elements">pseudo-elemento</a> <a href="/en-US/docs/Web/CSS">CSS</a> <strong><code>::spelling-error</code></strong> representa un segmento de texto que el {{glossary("user agent")}} ha marcado como deletreado incorrectamente.</p>

<pre class="brush: css no-line-numbers">::spelling-error {
  color: red;
}</pre>

<h2 id="Propiedades_permitidas">Propiedades permitidas</h2>

<p>Solo se puede usar un pequeño subconjunto de propiedades de CSS en una regla con <code>::spelling-error</code> en su selector:</p>

<ul>
 <li>{{cssxref("color")}}</li>
 <li>{{cssxref("background-color")}}</li>
 <li>{{cssxref("cursor")}}</li>
 <li>{{cssxref("caret-color")}}</li>
 <li>{{cssxref("outline")}} y sus longhands</li>
 <li>{{cssxref("text-decoration")}} y sus propiedades asociadas</li>
 <li>{{cssxref("text-emphasis-color")}}</li>
 <li>{{cssxref("text-shadow")}}</li>
</ul>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">::spelling-error</pre>

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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#selectordef-spelling-error', '::spelling-error')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("css.selectors.spelling-error")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{cssxref("::grammar-error")}}</li>
</ul>
