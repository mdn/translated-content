---
title: performance.toJSON()
slug: Web/API/Performance/toJSON
tags:
  - API
  - Method
  - Méthode
  - Performance Web
  - Référence
translation_of: Web/API/Performance/toJSON
---
<div>{{APIRef("High Resolution Timing")}}</div>

<p>La méthode <strong><code>toJSON()</code></strong> de l'interface {{domxref("Performance")}} est un sérialiseur standard : elle renvoie une représentation JSON des propriétés de l'objet performance.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  myPerf = performance.toJSON()
</pre>

<h3 id="Arguments">Arguments</h3>

<p>Aucun</p>

<h3 id="Return_value">Valeur de retour</h3>

<dl>
  <dt><code>myPerf</code></dt>
  <dd>Un objet JSON qui est la sérialisation de l'objet {{domxref("Performance")}}.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">var js;
js = window.performance.toJSON();
console.log("json = " + JSON.stringify(js));
</pre>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Highres Time Level 2', '#dom-performance-tojson', 'toJSON()
        serializer')}}</td>
      <td>{{Spec2('Highres Time Level 2')}}</td>
      <td>Définition de <code>toJson()</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.toJSON")}}</p>
