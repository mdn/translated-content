---
title: Navigator.geolocation
slug: Web/API/Navigator/geolocation
tags:
  - API
  - Géolocalisation API
  - Navigateur
  - Propriété
  - Reference
translation_of: Web/API/Navigator/geolocation
---
<div>{{APIRef("Geolocation API")}}</div>

<p><strong><code>Navigator.geolocation</code></strong> est une propriété en lecture seule, qui retoune un objet {{domxref("Geolocation")}} donnant accès aux contenus web de localisation de l'appareil. Ceci permet à un site Internet ou à une application d'offrir des résultats personnalisés basés sur la localisation des utilisateurs.</p>

<div class="note">
<p><strong>Note:</strong> Pour des raisons de sécurité, quand une page web essaie d'accéder aux informations de localisation, l'utilisateur reçoit une notification qui lui demande la permission d'activer cette fonctionnalité. Chaque navigateur a sa propre politique et ses propres méthodes pour demander cette permission.</p>
</div>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>geo</var> = <var>navigator</var>.geolocation
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
   <td>{{SpecName('Geolocation', '#navi-geo', 'Navigator.geolocation')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité navigateur</h2>

<p>{{Compat("api.Navigator.geolocation")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/WebAPI/Using_geolocation">Utiliser la géolocalisation</a></li>
</ul>
