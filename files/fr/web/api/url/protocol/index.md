---
title: URL.protocol
slug: Web/API/URL/protocol
tags:
  - API
  - Propriété
  - Reference
  - URL
  - protocole
translation_of: Web/API/URL/protocol
---
<div>{{ApiRef("URL API")}}</div>

<p>La propriété <strong><code>protocol</code></strong> de l'interface {{domxref("URL")}} est une {{domxref("USVString")}} représentant le schéma protocolaire de URL, incluant <code>':'</code> à la fin.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.protocol;
<em>object</em>.protocol = <em>string</em>;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un {{domxref("USVString")}}.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
var result = url.protocol; // Retourne:"https:"
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
   <td>{{SpecName('URL', '#dom-url-protocol', 'protocol')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.URL.protocol")}}</p>

<h2 id="A_voir_également">A voir également</h2>

<ul>
 <li>L'interface {{domxref("URL")}} dont il est contenu.</li>
</ul>
