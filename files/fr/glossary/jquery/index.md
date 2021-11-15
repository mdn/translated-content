---
title: jQuery
slug: Glossary/jQuery
tags:
  - API
  - Bibliothèque
  - Glossaire
  - JavaScript
translation_of: Glossary/jQuery
original_slug: Glossaire/jQuery
---
<p><strong>jQuery</strong> est une  {{Glossary("Library","bibliothèque")}} {{Glossary("JavaScript")}} qui se concentre sur la simplification de la manipulation de {{Glossary("DOM")}}, les appels d'{{Glossary ("AJAX")}} et la gestion des {{Glossary ("Event","évènements")}}. Elle est fréquemment utilisée par les développeurs JavaScript.</p>

<p>jQuery utilise un format, <code>$(selector).action()</code> pour assigner un (ou plusieurs) élément à un évènement. Pour expliquer cela en détail, <code>$(selector)</code> appelle jQuery pour sélectionner un élément <code>selector</code> et l'affecte à un évènement d'{{Glossary("API")}} appelé <code>.action()</code>.</p>

<pre class="brush: js"><code class="language-js">$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});</code></pre>

<p>Le code ci-dessus remplit la même fonction que le code suivant :</p>

<pre class="brush: js"><code class="language-js">window.onload = function() {
  alert( "Hello World!" );
  document.getElementById("blackBox").style.display = "none";
};</code></pre>

<h2 id="Télécharger_jQuery">Télécharger jQuery</h2>

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
   <td><code>bower install https://code.jquery.com/jquery-3.2.1.min.js</code></td>
   <td><code>https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js</code></td>
  </tr>
 </tbody>
</table>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>{{Interwiki("wikipedia", "jQuery")}} sur Wikipedia</li>
 <li><a href="https://jquery.com/">jQuery Official Website</a></li>
</ul>

<h3 id="Apprentissage_de_jQuery">Apprentissage de jQuery</h3>

<ul>
 <li><a href="https://www.codecademy.com/learn/jquery">Le cours en ligne sur codecademy.com</a> (en)</li>
</ul>

<h3 id="Information_technique">Information technique</h3>

<ul>
 <li><a href="https://api.jquery.com/">Documentation de référence de l'API</a> (en)</li>
</ul>
