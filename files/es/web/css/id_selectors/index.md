---
title: Selectores de ID
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - Referencia
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/ID_selectors
---
<div>{{CSSRef}}</div>

<p>En un documento HTML, los <strong>selectores de ID</strong> de CSS buscan un elemento basado en el contenido del atributo {{htmlattrxref("ID")}}. El atributo <code>ID</code> del elemento seleccionado debe coincidir exactamente con el valor dado en el selector.</p>

<pre class="brush: css no-line-numbers">/* El elemento con id="demo" */
#demo {
  border: red 2px solid;
}</pre>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">#id_value { <em>style properties</em> }</pre>

<p>Nótese que esto es equivalente al siguiente {{Cssxref("Attribute_selectors", "attribute selector")}}:</p>

<pre class="syntaxbox">[id=id_value] { <em>style properties</em> }</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#identified {
  background-color: skyblue;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="identified"&gt;¡Este div tiene un ID especial!&lt;/div&gt;
&lt;div&gt;Este solo es un div regular.&lt;/div&gt;
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Ejemplo", '100%', 50)}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#id-selectors", "ID selectors")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#id-selectors", "ID selectors")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "selector.html#id-selectors", "ID selectors")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#id-as-selector", "ID selectors")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.id")}}</p>
