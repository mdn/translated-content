---
title: PerformanceResourceTiming.redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - redirectEnd
translation_of: Web/API/PerformanceResourceTiming/redirectEnd
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>La propriété en lecture seule <strong><code>redirectEnd</code></strong> retourne un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> immédiatement après la réception du dernier octet de la réponse de la dernière redirection.</p>

<p>Lors de l'extraction d'une ressource, s'il y a plusieurs redirections HTTP, que l'une d'entre elles a une origine différente du document actuel, et que l'algorithme de vérification d'autorisation de synchronisation réussit pour chaque ressource redirigée, cette propriété renvoie l'heure immédiatement après la réception du dernier octet de la réponse de la dernière redirection ; sinon, zéro est retourné.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js"><var>resource</var>.redirectEnd;</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> immédiatement après la réception du dernier octet de la réponse de la dernière redirection.</p>

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
      <td>{{SpecName('Resource Timing', '#dom-performanceresourcetiming-redirectend',
        'redirectEnd')}}</td>
      <td>{{Spec2('Resource Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceResourceTiming.redirectEnd")}}</p>
