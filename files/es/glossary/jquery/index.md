---
title: jQuery
slug: Glossary/jQuery
tags:
  - Glosario
  - JQuery
  - JavaScript
translation_of: Glossary/jQuery
---
<p>jQuery es una {{Glossary("JavaScript")}} {{Glossary("Library")}} que se enfoca en simplificar la manipulación del {{Glossary("DOM")}}, llamadas {{Glossary("AJAX")}} y manejo de {{Glossary("Event")}}. Es utilizado por desarrolladores JavaScript de manera frecuente.</p>

<p>jQUery usa un formato, <code>$(selector).action()</code> para asignar elementos a un evento. Para explicarlo con mayor detalle, <code>$(selector)</code> hara que jQuery seleccione los elementos <code>selector</code> y los asigne a un evento {{Glossary("API")}} llamado <code>.action()</code>.</p>

<pre class="brush: js"><code class="language-js">$(document).ready(function(){
  alert("¡Hola Mundo!");
  $("#blackBox").hide();
});</code></pre>

<p>El código anterior es equivalente al siguiente:</p>

<pre class="brush: js"><code class="language-js">window.onload = function() {
  alert( "¡Hola Mundo!" );
  document.getElementById("blackBox").style.display = "none";
};</code></pre>

<h2 id="Descargar_jQuery">Descargar jQuery</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"><strong>npm</strong></th>
   <th scope="col">bower (solo file)</th>
   <th scope="col">Google CDN</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>npm install jquery</code></td>
   <td><code>bower install https://code.jquery.com/jquery-3.2.1.min.js</code></td>
   <td><code>https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Aprende_más">Aprende más</h2>

<h3 id="Conocimiento_general">Conocimiento general</h3>

<ul>
 <li>{{Interwiki("wikipedia", "jQuery")}} en Wikipedia</li>
 <li><a href="http://jquery.com/">Sitio oficial de jQuery</a></li>
</ul>

<h3 id="Aprende_jQuery">Aprende jQuery</h3>

<ul>
 <li><a href="https://www.codecademy.com/learn/jquery">Curso web en codeacademy.com</a></li>
</ul>

<h3 id="Información_técnica">Información técnica</h3>

<ul>
 <li><a href="https://api.jquery.com/">Documentación de referencia de la API</a><a href="https://api.jquery.com/"> </a></li>
</ul>
