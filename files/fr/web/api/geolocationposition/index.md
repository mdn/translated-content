---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
tags:
  - API
  - Geolocation API
  - GeolocationPosition
  - Interface
  - Secure context
  - TopicStub
translation_of: Web/API/GeolocationPosition
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>L'interface <strong><code>GeolocationPosition</code></strong> représente la position de l'appareil concerné à un instant donné. La position, représentée par un objet {{domxref("GeolocationCoordinates")}}, comprend la position 2D de l'appareil, sur un sphéroïde représentant la Terre, mais aussi son altitude et sa vitesse.</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>L'interface <code>GeolocationPosition</code> n'hérite d'aucune propriété.</em></p>

<dl>
 <dt>{{domxref("GeolocationPosition.coords")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un objet {{domxref("GeolocationCoordinates")}} définissant l'emplacement actuel.</dd>
 <dt>{{domxref("GeolocationPosition.timestamp")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un {{domxref("DOMTimeStamp")}} représentant l'heure à laquelle l'emplacement a été récupéré.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em><em>L'interface </em><code>GeolocationPosition</code><em> n'implémente ni n'hérite d'aucune méthode.</em></em></p>

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
   <td>{{SpecName('Geolocation', '#position_interface', 'GeolocationPosition')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Spécification initale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.GeolocationPosition")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Geolocation_API/Using">Utilisation de l'API de Géolocalisation</a></li>
 <li>{{domxref("Geolocation")}}</li>
</ul>
