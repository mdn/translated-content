---
title: URL.hash
slug: Web/API/URL/hash
tags:
  - API
  - Hash
  - Propriété
  - Reference
  - URL
translation_of: Web/API/URL/hash
---
<div>{{ APIRef("URL API") }}</div>

<p>La propriété <strong><code>hash</code></strong> de l'interface {{domxref("URL")}} retourne un {{domxref("USVString")}} contenant le caractère <code>'#'</code> suivi par l'identificateur de fragment de URL.</p>

<p>Le fragment n'est pas <a href="/en-US/docs/Glossary/percent-encoding">décodé en pourcent</a>. Si l'URL ne contient pas d'identificateur de fragment, la valeur de cette propriété est une chaîne de caractère vide — <code>""</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.hash;
<em>object</em>.hash = <em>string</em>;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un {{domxref("USVString")}}.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: html">var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
url.hash // Returns '#Examples'</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('URL', '#dom-url-hash', 'URL.hash')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.URL.hash")}}</p>

<h2 id="A_voir_également">A voir également</h2>

<ul>
 <li>L'interface {{domxref("URL")}} dont il est contenu.</li>
</ul>
