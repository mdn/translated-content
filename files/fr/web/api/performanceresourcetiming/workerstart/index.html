---
title: PerformanceResourceTiming.workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - workerStart
translation_of: Web/API/PerformanceResourceTiming/workerStart
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>La propriété en lecture seule <strong><code>workerStart</code></strong> de l'interface <a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a> renvoie un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant l'envoi du <a href="/fr/docs/Web/API/FetchEvent"><code>FetchEvent</code></a> si un processus de <i>service worker</i> est déjà en cours, ou immédiatement avant le démarrage du processus de <i>service worker</i> s'il n'est pas déjà en cours. Si la ressource n'est pas interceptée par un <i>service worker</i>, la propriété renvoie toujours 0.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js"><var>resource</var>.workerStart;</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> immédiatement avant de transmettre le <a href="/fr/docs/Web/API/FetchEvent"><code>FetchEvent</code></a> si un processus de <i>service worker</i> est déjà en cours, ou immédiatement avant de lancer le processus de <i>service worker</i> s'il n'est pas encore en cours. Si la ressource n'est pas interceptée par un <i>service worker</i>, la propriété retourne toujours 0.</p>

<h2 id="Example">Exemple</h2>

<p>Dans l'exemple suivant, la valeur des propriétés <code>*Start</code> et <code>*End</code> de tous les événements de <a href="/fr/docs/Web/API/PerformanceEntry/entryType">type</a> <code>"resource"</code> sont enregistrés.</p>

<pre class="brush: js">function print_PerformanceEntries() {
  // Utilise getEntriesByType() pour obtenir uniquement les événements "resource"
  let p = performance.getEntriesByType("resource");
  for (let i = 0; i &lt; p.length; i++) {
    print_start_and_end_properties(p[i]);
  }
}
function print_start_and_end_properties(perfEntry) {
  // Imprime les horodatages des propriétés *start et *end
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart"];

  for (let i = 0; i &lt; properties.length; i++) {
    // vérifie chaque propriété
    let supported = properties[i] in perfEntry;
    if (supported) {
      let value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = N'EST PAS pris en charge");
    }
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
      <td>{{SpecName('Resource Timing 2', '#dom-performanceresourcetiming-workerstart',
        'workerStart')}}</td>
      <td>{{Spec2('Resource Timing 2')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceResourceTiming.workerStart")}}</p>
