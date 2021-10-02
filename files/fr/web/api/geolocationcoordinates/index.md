---
title: Coordinates
slug: Web/API/GeolocationCoordinates
translation_of: Web/API/GeolocationCoordinates
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<div>L'interface <strong><code>Coordinates</code></strong> représente la position et l'altitude du périphérique sur Terre, ainsi que la précision avec lesquels ces propriétés sont calculées.</div>

<h2 id="Propriétés">Propriétés</h2>

<p><em>L'interface <code>Coordinates</code> n'hérite d'aucune propriété.</em></p>

<dl>
 <dt>{{domxref("Coordinates.latitude")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un <code>double</code> représentant la latitude en degrés décimaux.</dd>
 <dt>{{domxref("Coordinates.longitude")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un <code>double</code> représentant la longitude en degrés décimaux.</dd>
 <dt>{{domxref("Coordinates.altitude")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un <code>double</code> représentant l'altitude en mètres, relatif au niveau de la mer. Cette valeur peut être <code>null</code> si l'implémentation ne peut pas fournir de données.</dd>
 <dt>{{domxref("Coordinates.accuracy")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un <code>double</code> représentant la précision des propriétés <code>latitude</code> et <code>longitude</code> , exprimé en mètres.</dd>
 <dt>{{domxref("Coordinates.altitudeAccuracy")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un <code>double</code> représentant la précision de l'<code>altitude</code> . Cette valeur peut être <code>null</code>.</dd>
 <dt>{{domxref("Coordinates.heading")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un <code>double</code> représentant la direction dans laquelle le périphérique se déplace. Cette valeur, spécifiée en degrés, indique la distance à laquelle le périphérique se trouve par rapport au Vrai Nord. <code>0</code> degrés représente le Vrai Nord, la direction est déterminé suivant le sens horaire des aiguilles d'une montre (ce qui veut dire que l'Est se trouve à <code>90</code> degrés et l'Ouest à <code>270</code> degrés). Si <code>speed</code> est à <code>0</code>, <code>heading</code> est alors <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/NaN">NaN</a></code>. Si le périphérique est incapable de fournir des informations relatives à l'endroit où il se déplace (<code>heading</code>), cette valeur est alors <code>null</code>.</dd>
 <dt>{{domxref("Coordinates.speed")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Renvoie un <code>double</code> représentant la vélocité du périphérique en mètres par seconde. Cette valeur peut être <code>null</code>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em><em><em>L'interface </em><code>Coordinates</code> <em>n'implémente et n'hérite d'aucune méthode.</em></em></em></p>

<p> </p>

<h2 id="Spécifications">Spécifications</h2>

<p> </p>

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
   <td>{{SpecName('Geolocation', '#coordinates', 'Coordinates')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Spécification initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.GeolocationCoordinates")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAPI/Using_geolocation">Using geolocation</a></li>
 <li>The {{domxref("Geolocation")}} interface that uses it.</li>
</ul>
