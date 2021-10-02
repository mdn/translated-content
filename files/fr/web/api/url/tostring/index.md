---
title: URL.toString()
slug: Web/API/URL/toString
tags:
  - API
  - Méthode
  - Reference
  - URL
  - toString()
translation_of: Web/API/URL/toString
---
<div>{{ApiRef("URL API")}}</div>

<p>La méthode <strong><code>URL.toString()</code></strong> retourne un {{domxref("USVString")}} contenant tout l'URL. C'est en effet, une version de {{domxref("URL.href")}} en lecture seule.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>string</em> = <em>url</em>.toString();</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun.</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un {{domxref("USVString")}}.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toString() // doit retourner l'URL en tant que chaîne
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
   <td>{{SpecName('URL', '#URL-stringification-behavior', 'stringifier')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.URL.toString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("URL")}} à laquelle elle appartient.</li>
</ul>
