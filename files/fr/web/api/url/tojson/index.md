---
title: URL.toJSON()
slug: Web/API/URL/toJSON
tags:
  - API
  - Méthode
  - Reference
  - URL
  - toJSON()
translation_of: Web/API/URL/toJSON
---
<div>{{APIRef("URL API")}}</div>

<p>La méthode <strong><code>toJSON()</code></strong> de l'interface {{domxref("URL")}} retourne un {{domxref("USVString")}} contenant une version sérialisé de l'URL, même si dans la pratique, il semble avoir le même effet que {{domxref("URL.toString()")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">json = url.toJSON();</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun.</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>A {{domxref("USVString")}}.</p>

<h2 id="Exemples">Exemples</h2>

<pre>const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toJSON()
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('URL', '#dom-url-tojson', 'toJSON()')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.URL.toJSON")}}</p>
