---
title: Navigator.connection
slug: Web/API/Navigator/connection
tags:
  - API
  - Connexion
  - Expérimental(2)
  - Navigateur
  - Propriété
translation_of: Web/API/Navigator/connection
---
<p>{{APIRef("Network Information API")}}{{SeeCompatTable}}</p>

<p><code><strong>Navigator.connection</strong></code> est une propriété en lecture seule, elle représente une {{domxref("NetworkInformation")}} qui contient les informations de la connexion du système, telles que la  bande passante actuelle du périphérique utilisateur ou si la connexion est mesurée. La propriété peut être utilisée pour sélectionner un contenu en haute ou basse définition, dépendant de la connexion de l'utilisateur.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>connexionInfo</em> = navigator.connection</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Network Information', '#h-the-connection-attribute', 'Navigator.connection')}}</td>
   <td>{{Spec2('Network Information')}}</td>
   <td>Spécification initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Navigator.connection")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/NavigatorOnLine/Online_and_offline_events">Évènements online et offline</a></li>
</ul>
