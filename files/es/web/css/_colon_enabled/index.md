---
title: ':enabled'
slug: 'Web/CSS/:enabled'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:enabled'
---
<div>{{CSSRef}}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <code>:enabled</code> <a href="/es/docs/Web/CSS">CSS</a> representa cualquier elemento habilitado. Un elemento está habilitado si puede ser activado (es decir seleccionado, se puede hacer click en él, acepta que se le introduzca texto, etc.) o si accepta el foco. El elemento también tiene un estado deshabilitado el en cuál, no puede ser activado ni acepta el foco.</p>

<pre class="brush: css">/* Selecciona cualquier &lt;input&gt; habilitado */
input:enabled {
  color: blue;
}</pre>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<p>El siguiente ejemplo hace que el color del texto y el botón {{htmlElement ("input")}} sean verdes cuando están habilitados, y grises cuando están deshabilitados. Esto ayuda al usuario a comprender con qué elementos se puede interactuar.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form action="url_of_form"&gt;
  &lt;label for="FirstField"&gt;Primer campo (habilitado):&lt;/label&gt;
  &lt;input type="text" id="FirstField" value="Lorem"&gt;&lt;br&gt;

  &lt;label for="SecondField"&gt;Segundo campo (deshabilitado):&lt;/label&gt;
  &lt;input type="text" id="SecondField" value="Ipsum" disabled="disabled"&gt;&lt;br&gt;

  &lt;input type="button" value="Enviar"&gt;
&lt;/form&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Ejemplo", 550, 95)}}</p>

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
   <td>{{SpecName('HTML WHATWG', '#selector-enabled', ':enabled')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', '#selector-enabled', ':enabled')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Define la semántica en relación con HTML y los formularios.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#enableddisabled', ':enabled')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Basic UI', '#pseudo-classes', ':enabled')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>Enlaza con selectores nivel 3.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#enableddisabled', ':enabled')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Define la pseudo clase pero no la semántica asociada.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("css.selectors.enabled")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{Cssxref(":disabled")}}</li>
</ul>
