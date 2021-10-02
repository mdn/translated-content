---
title: PerformanceResourceTiming.requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - requestStart
translation_of: Web/API/PerformanceResourceTiming/requestStart
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>La propriété en lecture seule <strong><code>requestStart</code></strong> renvoie un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> du moment immédiatement avant que le navigateur ne commence à demander la ressource au serveur, au cache ou à la ressource locale. Si la connexion de transport échoue et que le navigateur retire la demande, la valeur renvoyée sera le début de la nouvelle demande.</p>

<p>Il n'y a pas de propriété de fin (« <em>requestEnd</em> ») correspondante pour <code>requestStart</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js"><var>resource</var>.requestStart;</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant le moment immédiatement avant que le navigateur ne commence à demander la ressource au serveur.</p>

<h2 id="Example">Example</h2>

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
      <td>{{SpecName('Resource Timing', '#dom-performanceresourcetiming-requeststart',
        'requestStart')}}</td>
      <td>{{Spec2('Resource Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceResourceTiming.requestStart")}}</p>
