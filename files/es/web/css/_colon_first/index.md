---
title: ':first'
slug: 'Web/CSS/:first'
tags:
  - '@page'
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:first'
---
<div>{{CSSRef}}</div>

<div>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <code>:first</code> de <a href="/es/docs/Web/CSS">CSS</a>, utilizada con la <a href="/es/docs/Web/CSS/At-rule">regla-at</a> {{cssxref("@page")}}, representa la primera página de un documento impreso.</div>

<div> </div>

<pre class="brush: css">/* Selecciona la primera página al imprimir */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}</pre>

<div class="note"><strong>Nota:</strong> No puede cambiar todas las propiedades de CSS con esta pseudoclase. Solo puede cambiar los márgenes, {{cssxref("orphans")}}, {{cssxref("widows")}} y saltos de página del documento. Además, solo puede usar unidades de <a href="/es/docs/Web/CSS/length#Absolute_length_units">longitud absoluta</a> al definir los márgenes. Todas las otras propiedades serán ignoradas.</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo" name="Ejemplo">Ejemplo</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Primera página.&lt;/p&gt;
&lt;p&gt;Segunda página.&lt;/p&gt;
&lt;button&gt;Imprimir!&lt;/button&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.querySelector("button").onclick = function () {
  window.print();
}</pre>

<h3 id="Resultado">Resultado</h3>

<p>Presione el botón "Imprimir!" para imprimir el ejemplo. Las palabras en la primera página deben estar en algún lugar del centro, mientras que otras páginas tendrán sus contenidos en la posición predeterminada.</p>

<p>{{ EmbedLiveSample('Ejemplo', '80%', '150px') }}</p>

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
   <td>{{SpecName('CSS3 Paged Media', '#left-right-first', ':first')}}</td>
   <td>{{Spec2('CSS3 Paged Media')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'page.html#page-selectors', ':first')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("css.selectors.first")}}</p>

<div id="compat-mobile"> </div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{Cssxref("@page")}}</li>
 <li>Otras pseudo-clases relacionadas con página: {{Cssxref(":left")}}, {{Cssxref(":right")}}</li>
</ul>
