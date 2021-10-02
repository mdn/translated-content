---
title: PositionOptions
slug: Web/API/PositionOptions
translation_of: Web/API/PositionOptions
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>L'interface <strong><code>PositionOptions</code></strong> décrit un objet, contenant des propriétés, à passer en paramétre de {{domxref("Geolocation.getCurrentPosition()")}} et {{domxref("Geolocation.watchPosition()")}}.</p>

<h2 id="Properties">Properties</h2>

<p><em>L'interface <code>PositionOptions</code> n'hérite d'aucune propriété</em>.</p>

<dl>
 <dt>{{domxref("PositionOptions.enableHighAccuracy")}} {{securecontext_inline}}</dt>
 <dd>C'est un {{domxref("Boolean")}} qui indique que l'application souhaite recevoir les meilleurs résultats possibles. Si la valeur est <code>true</code> et si l'appareil peut fournir une position plus précise, il le fera. Notez que cela peut entraîner des temps de réponse plus lents ou une augmentation de la consommation d'énergie (avec une puce GPS sur un appareil mobile par exemple). D'un autre côté, si la valeur est <code>false</code>, l'appareil peut prendre la liberté d'économiser des ressources en répondant plus rapidement et/ou en utilisant moins d'énergie. Valeur par défaut: <code>false</code>.</dd>
 <dt>{{domxref("PositionOptions.timeout")}} {{securecontext_inline}}</dt>
 <dd>C'est une valeur positive de type <code>long</code> représentant la durée maximale (en millisecondes) que le périphérique est autorisé à prendre pour renvoyer une position. La valeur par défaut est <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code>, ce qui signifie que <code>getCurrentPosition()</code> ne retournera pas tant que la position n'est pas disponible.</dd>
 <dt>{{domxref("PositionOptions.maximumAge")}} {{securecontext_inline}}</dt>
 <dd>C'est une valeur positive de type <code>long</code> l'âge maximal en millisecondes d'une position en cache possible qu'il est acceptable de retourner. Si initialisé à <code>0</code>,  cela signifie que le périphérique ne peut pas utiliser une position mise en cache et doit tenter de récupérer la position actuelle réelle. Si initialisé à <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code> l'appareil doit retourner une position mise en cache indépendamment de son âge. Valeur par défaut: 0.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p>L'interface <code>PositionOptions</code> n'implémente ni n'hérite d'aucune méthode.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Geolocation', '#positionoptions', 'PositionOptions')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Specification initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.PositionOptions")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Using geolocation</a></li>
 <li>The {{domxref("Geolocation")}} interface that uses it.</li>
</ul>
