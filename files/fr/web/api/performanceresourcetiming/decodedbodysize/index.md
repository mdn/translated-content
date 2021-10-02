---
title: PerformanceResourceTiming.decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - decodedBodySize
translation_of: Web/API/PerformanceResourceTiming/decodedBodySize
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>La propriété en lecture seule <strong><code>decodedBodySize</code></strong> renvoie la taille (en octets) reçue de la récupération (HTTP ou cache) du corps du message, après suppression de tout codage de contenu appliqué. Si la ressource est récupérée à partir d'un cache d'application ou de ressources locales, elle renvoie la taille de la donnée utile après suppression de tous les codages de contenu appliqués.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js"><var>resource</var>.decodedBodySize;</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>La taille (en octets) reçue de l'extraction (HTTP ou cache) du corps du message, après suppression de tout codage de contenu appliqué.</p>

<h2 id="Example">Exemple</h2>

<p>Dans l'exemple suivant, la valeur des propriétés de taille de tous les événements de <a href="/fr/docs/Web/API/PerformanceEntry/entryType">type</a> <code>"resource"</code> est enregistrée.</p>

<pre class="brush: js">function log_sizes(<var>perfEntry</var>){
  // Vérifie la prise en charge des propriétés *size et imprime leurs
  // valeurs si elles sont prises en charge.
  if ("decodedBodySize" in perfEntry) {
    console.log("decodedBodySize = " + perfEntry.decodedBodySize);
  } else {
    console.log("decodedBodySize = N'EST PAS pris en charge");
  }

  if ("encodedBodySize" in perfEntry) {
    console.log("encodedBodySize = " + perfEntry.encodedBodySize);
  } else {
    console.log("encodedBodySize = N'EST PAS pris en charge");
  }

  if ("transferSize" in perfEntry) {
    console.log("transferSize = " + perfEntry.transferSize);
  } else {
    console.log("transferSize = N'EST PAS pris en charge");
  }
}
function check_PerformanceEntries() {
  // Utilise getEntriesByType() pour obtenir uniquement les événements "resource"
  let p = performance.getEntriesByType("resource");
  for (let i = 0; i &lt; p.length; i++) {
    log_sizes(p[i]);
  }
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
      <td>{{SpecName('Resource Timing 2',
        '#dom-performanceresourcetiming-decodedbodysize', 'decodedBodySize')}}</td>
      <td>{{Spec2('Resource Timing 2')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceResourceTiming.decodedBodySize")}}</p>
