---
title: Geolocation
slug: Web/API/Geolocation
tags:
  - API
  - Avancé
  - Géolocalisation API
  - Interface
  - Reference
translation_of: Web/API/Geolocation
---
<div>{{APIRef("Geolocation API")}}</div>

<p>En intégrant l'interface <code><strong>Geolocation</strong></code>, on peut obtenir la position d'un ordinateur, d'un téléphone ou d'une tablette, ce qui permet aux contenus Web d'accéder à leur localisation. Un site internet ou une application mobile peut alors offrir divers services liés à la localisation de l'utilisateur.</p>

<p>On obtient un objet par le biais de cette interface avec la propriété {{domxref("NavigatorGeolocation.geolocation")}} proposée par l'objet {{domxref("Navigator")}} .</p>

<div class="note">
<p><strong>Note:</strong> Pour des raisons de sécurité, quand une page web tente d'accéder aux données de localisation, l'utilisateur est prévenu, et son accord lui est demandé. Sachez que chaque navigateur a ses propres méthodes et politiques pour gérer les autorisations.</p>
</div>

<h2 id="Propriétés">Propriétés</h2>

<p><em>L'interface de géolocalisation n'utilise ou n'hérite d'aucune propriété.</em></p>

<h2 id="Méthodes">Méthodes</h2>

<p><em>L'interface de géolocalisation n'hérite d'aucune méthode.</em></p>

<dl>
 <dt>{{domxref("Geolocation.getCurrentPosition()")}}</dt>
 <dd>Determine la position actuelle de l'appareil et donne en retour l'objet {{domxref("Position")}} avec sa valeur.</dd>
 <dt>{{domxref("Geolocation.watchPosition()")}}</dt>
 <dd>Retourne une valeur <code>long</code> représentant la nouvelle fonction callback, créée pour être utilisée à chaque fois que la position de l'appareil change.</dd>
 <dt>{{domxref("Geolocation.clearWatch()")}}</dt>
 <dd>Supprime le lien créé par la précédente utilisation de <code>watchPosition()</code>.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{SpecName('Geolocation')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Spécification initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Geolocation")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Utiliser geolocation</a></li>
</ul>
