---
title: URL.searchParams
slug: Web/API/URL/searchParams
tags:
  - API
  - Lecture-seule
  - Propriété
  - Reference
  - URL
  - URLSearchParameters
translation_of: Web/API/URL/searchParams
---
<div>{{APIRef("URL API")}}</div>

<div> </div>

<div>La propriété en lecture seule <strong><code>searchParams</code></strong> de l'interface {{domxref("URL")}} retourne</div>

<div>un objet {{domxref("URLSearchParams")}} permettant d'accéder aux arguments décodés</div>

<div>de la requête GET contenu dans l'URL.</div>

<div> </div>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var urlSearchParams = URL.searchParams;</pre>

<h3 id="Value">Value</h3>

<p>Un objet {{domxref("URLSearchParams")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Si l'URL de votre page est <code>https://example.com/?nom=Jonathan%20Smith&amp;age=18</code><br>
 vous pouvez extraire les paramètres 'nom' et 'age' en utilisant:</p>

<pre class="brush: js">let params = (new URL(document.location)).searchParams;
let name = params.get('nom'); // la chaine de caractère "Jonathan Smith".
let age = parseInt(params.get('age')); // le nombre 18</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('URL', '#dom-url-searchparams', 'searchParams')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_des_navigateurs">Compatibilités des navigateurs</h2>



<p>{{Compat("api.URL.searchParams")}}</p>
