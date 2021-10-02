---
title: 'Performance : Événement resourcetimingbufferfull'
slug: Web/API/Performance/resourcetimingbufferfull_event
tags:
  - API
  - DOM
  - Event
  - Performance
  - Reference
  - Performance web
  - onresourcetimingbufferfull
translation_of: Web/API/Performance/resourcetimingbufferfull_event
---
<div>{{APIRef}}</div>

<p>L'événement <code>resourcetimingbufferfull</code> se déclenche lorsque la mémoire <a href="/fr/docs/Web/API/Performance/setResourceTimingBufferSize">tampon de synchronisation des ressources</a> du navigateur est pleine.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Propagation</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Propriété pour le gestionnaire d'événements correspondant</th>
   <td>{{domxref("Performance.onresourcetimingbufferfull", "onresourcetimingbufferfull")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Exemples</h2>

<p>L'exemple suivant définit une fonction de rappel sur la propriété <code>onresourcetimingbufferfull</code>.</p>

<pre class="brush: js">function buffer_full(event) {
  console.log("AVERTISSEMENT : La mémoire tampon des ressources est COMPLÈTE !");
  performance.setResourceTimingBufferSize(200);
}
function init() {
  // Définit un rappel si le tampon de ressources est rempli.
  performance.onresourcetimingbufferfull = buffer_full;
}
&lt;body onload="init()"&gt;</pre>

<p>Notez que vous pouvez également configurer le gestionnaire à l'aide de la fonction addEventListener() :</p>

<pre class="brush: js">performance.addEventListener('resourcetimingbufferfull', buffer_full);
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
   <td>{{SpecName('Resource Timing', '#dom-performance-onresourcetimingbufferfull', 'onresourcetimingbufferfull')}}</td>
   <td>{{Spec2('Resource Timing')}}</td>
   <td>Définition initialen.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.resourcetimingbufferfull_event")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}</li>
 <li>{{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}</li>
</ul>
