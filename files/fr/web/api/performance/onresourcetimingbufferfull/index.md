---
title: performance.onresourcetimingbufferfull
slug: Web/API/Performance/onresourcetimingbufferfull
tags:
- API
- Method
- Méthode
- Reference
- Performance web
translation_of: Web/API/Performance/onresourcetimingbufferfull
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>La propriété <strong><code>onresourcetimingbufferfull</code></strong> est un gestionnaire d'événements qui sera appelé lorsque l'événement <a href="/fr/docs/Web/API/Performance/resourcetimingbufferfull_event"><code>resourcetimingbufferfull</code></a> est déclenché. Ce déclenchement a lieu lorsque le tampon de performance de synchronisation des ressources du navigateur est plein.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  callback = performance.onresourcetimingbufferfull = buffer_full_cb;
</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<dl>
  <dt><code>callback</code></dt>
  <dd>Un {{event("Event_handlers", "event handler")}} qui est invoqué lorsque l'événement <a href="/fr/docs/Web/API/Performance/resourcetimingbufferfull_event"><code>resourcetimingbufferfull</code></a> est déclenché.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant définit une fonction de rappel sur la propriété <code>onresourcetimingbufferfull</code>.</p>

<pre class="brush: js">function buffer_full(event) {
  console.log("WARNING: Resource Timing Buffer is FULL!");
  performance.setResourceTimingBufferSize(200);
}
function init() {
  // Définit un rappel si le tampon de ressources est rempli.
  performance.onresourcetimingbufferfull = buffer_full;
}
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
      <td>{{SpecName('Resource Timing', '#dom-performance-onresourcetimingbufferfull',
        'onresourcetimingbufferfull')}}</td>
      <td>{{Spec2('Resource Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.onresourcetimingbufferfull")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>Événément <a href="/fr/docs/Web/API/Performance/resourcetimingbufferfull_event"><code>resourcetimingbufferfull</code></a></li>
  <li>{{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
  </li>
  <li>
    {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
  </li>
</ul>
