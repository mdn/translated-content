---
title: performance.clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
tags:
- API
- Method
- Méthode
- Reference
- Performance web
translation_of: Web/API/Performance/clearResourceTimings
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>La méthode <strong><code>clearResourceTimings()</code></strong> supprime toutes les {{domxref("PerformanceEntry", "entrées de performance","",1)}} avec un {{domxref("PerformanceEntry.entryType","entryType")}} de « <code>resource</code> » du tampon d'entrée de performance et fixe la taille du tampon de données de performance à zéro. Pour définir la taille du tampon de données de performance du navigateur, utilisez la méthode {{domxref("Performance.setResourceTimingBufferSize()")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js"><em>performance</em>.clearResourceTimings();
</pre>

<h3 id="Arguments">Arguments</h3>

<p>Aucun.</p>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Aucune.</p>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">function load_resource() {
  var image = new Image();
  image.src = "https://developer.mozilla.org/static/img/opengraph-logo.png";
}
function clear_performance_timings() {
  if (performance === undefined) {
    log("Le navigateur ne prend pas en charge les performances Web");
    return;
  }
  // Crée une entrée de performance de synchronisation des ressources en chargeant une image
  load_resource();

  var supported = typeof performance.clearResourceTimings == "function";
  if (supported) {
    console.log("Exécuter : performance.clearResourceTimings()");
    performance.clearResourceTimings();
  } else {
    console.log("performance.clearResourceTimings() N'EST PAS supporté");
    return;
  }
  // getEntries devrait maintenant retourner zéro
  var p = performance.getEntriesByType("resource");
  if (p.length == 0)
    console.log("... Le tampon de données de performance a été effacé");
  else
    console.log("... Le tampon de données de performance n'a PAS été effacé !");
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
      <td>{{SpecName('Resource Timing', '#dom-performance-clearresourcetimings',
        'clearResourceTimings()')}}</td>
      <td>{{Spec2('Resource Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.clearResourceTimings")}}</p>
