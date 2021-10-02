---
title: WindowClient.navigate()
slug: Web/API/WindowClient/navigate
tags:
  - API
  - Client
  - Expérimentale
  - Method
  - Navigate
  - Reference
  - Service Workers
  - WindowClient
translation_of: Web/API/WindowClient/navigate
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>La méthode <strong><code>navigate()</code></strong> de l'interface  {{domxref("WindowClient")}} charge une URL spécifiée dans une page de client contrôlée, puis retourne une  {{jsxref("Promise")}}  qui devra être analysée par  {{domxref("WindowClient")}} (le demandeur).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>WindowClient</em>.navigate(<em>url</em>).then(function(<em>WindowClient</em>) {
  // do something with your WindowClient after navigation
});</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>url</code></dt>
 <dd>L'emplacement pour naviguer vers (url est une string) .</dd>
</dl>

<h3 id="Retour">Retour</h3>

<p>Une {{jsxref("Promise")}}  qui sera analysée par le demandeur {{domxref("WindowClient")}} (fonctionnement asynchrone : je te promet de faire, mais je suis pas sûr, à toi de vérifier) .</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#client-navigate-method', 'navigate()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WindowClient.navigate")}}</p>
