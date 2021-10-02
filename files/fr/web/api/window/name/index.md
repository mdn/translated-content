---
title: Window.name
slug: Web/API/Window/name
tags:
  - API
  - HTML DOM
  - Propriété
  - Reference
translation_of: Web/API/Window/name
---
<div>{{APIRef}}</div>

<h2 id="En_bref">En bref</h2>

<p>Récupère ou définit le nom de la fenêtre.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js"><var>string</var> = window.name;
window.name = <var>string</var>;
</pre>

<h2 id="Exemple">Exemple</h2>

<pre class="brush:js">window.name = "lab_view";
</pre>

<h2 id="Notes">Notes</h2>

<p>Les noms de fenêtres sont principalement utilisés pour définir les cibles de liens hypertextes et de formulaires. Les fenêtres n'ont pas besoin d'être nommées.</p>

<p>Les noms de fenêtres ont en outre été utilisés par quelques <em>frameworks </em>pour le support des échanges de messages inter-domaines (par exemple <a href="http://www.thomasfrank.se/sessionvars.html">SessionVars</a> et <a href="http://www.sitepen.com/blog/2008/07/22/windowname-transport/">dojox.io.windowName</a> de Dojo) comme une alternative plus sécurisée à JSONP. Toutefois, les applications web modernes manipulant des données sensibles devraient utiliser l'<a href="/fr/docs/Web/API/Window/postMessage">API postMessage</a> pour les échanges de messages inter-domaines plutôt que s'appuyer sur <code>window.name</code>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'browsers.html#dom-name', 'Window.name')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'browsers.html#dom-name', 'Window.name')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>
