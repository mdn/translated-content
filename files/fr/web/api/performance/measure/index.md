---
title: performance.measure()
slug: Web/API/Performance/measure
tags:
- API
- Method
- Méthode
- Reference
- Performance web
- Web Workers
translation_of: Web/API/Performance/measure
---
<div>{{APIRef("User Timing API")}}</div>

<p>La méthode <strong><code>measure()</code></strong> crée un {{domxref("DOMHighResTimeStamp", "timestamp")}} nommé dans le <em>tampon d'entrée de performance</em> du navigateur entre deux marqueurs, l'heure de début de navigation ou l'heure actuelle. Lors d'une mesure entre deux marqueurs, on aura un <em>marqueur de début</em> et un <em>marqueur de fin</em>. L'horodatage ainsi nommé est désigné comme une <em>mesure</em>.</p>

<p>La mesure correspondante peut être récupérée par l'une des méthodes suivantes de l'interface {{domxref("Performance")}} : {{domxref("Performance.getEntries", "getEntries()")}}, {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} ou {{domxref("Performance.getEntriesByType", "getEntriesByType()")}}.</p>

<p>L'{{domxref("PerformanceEntry", "entrée de performance","",1)}} créée par <code>measure()</code> aura les valeurs de propriété suivantes :</p>

<ul>
  <li>{{domxref("PerformanceEntry.entryType","entryType")}} : <code>"measure"</code>.</li>
  <li>{{domxref("PerformanceEntry.name","name")}} : le nom passé en argument lors de la création de la mesure (cf. ci-après).</li>
  <li>{{domxref("PerformanceEntry.startTime","startTime")}} : fixé selon le marqueur de départ (type {{domxref("DOMHighResTimeStamp")}}).</li>
  <li>{{domxref("PerformanceEntry.duration","duration")}} : fixé à un {{domxref("DOMHighResTimeStamp")}} qui correspond à la durée de la mesure (généralement, l'horodatage du marqueur de fin moins l'horodatage du marqueur de début).</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  performance.measure(name);
  performance.measure(name, startMark);
  performance.measure(name, startMark, endMark);
  performance.measure(name, undefined, endMark);
</pre>

<h3 id="Arguments">Arguments</h3>

<dl>
  <dt><code>name</code></dt>
  <dd>Une {{domxref("DOMString")}} représentant le nom de la mesure.</dd>
  <dt><code>startMark</code> {{optional_inline}}</dt>
  <dd>Une {{domxref("DOMString")}} représentant le nom du marqueur de départ de la mesure. Peut également être le nom d'une propriété {{domxref("PerformanceTiming")}}. Si elle est omise, l'heure de début sera celle de la navigation.</dd>
  <dt><code>endMark</code> {{optional_inline}}</dt>
  <dd>Une {{domxref("DOMString")}} représentant le nom du marqueur de fin de la mesure. Peut également être le nom d'une propriété {{domxref("PerformanceTiming")}}. Si elle est omise, le temps actuel est utilisé.</dd>
</dl>

<h3 id="Return_value">Valeur de retour</h3>

<p>Aucune</p>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant montre comment <code>measure()</code> est utilisé pour créer une nouvelle <em>mesure</em> d'{{domxref("PerformanceEntry", "entrée de performance","",1)}} dans le tampon d'entrée de performance du navigateur.</p>

<pre class="brush: js">const markerNameA = "example-marker-a"
const markerNameB = "example-marker-b"

// Exécute des temporisations imbriquées et crée un PerformanceMark pour chacune d'entre elles.
performance.mark(markerNameA);
setTimeout(function() {
  performance.mark(markerNameB);
  setTimeout(function() {

    // Crée une variété de mesures.
    performance.measure("mesure a à b", markerNameA, markerNameB);
    performance.measure("mesure a à maintenant", markerNameA);
    performance.measure("mesure du début de la navigation à b", undefined, markerNameB);
    performance.measure("mesure du début de la navigation à maintenant");

    // Sort toutes les mesures.
    console.log(performance.getEntriesByType("measure"));

    // Enfin, nettoye les entrées.
    performance.clearMarks();
    performance.clearMeasures();
  }, 1000);
}, 1000);
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
      <td>{{SpecName('User Timing Level 2', '#dom-performance-measure', 'measure()')}}
      </td>
      <td>{{Spec2('User Timing Level 2')}}</td>
      <td>Clarification du modèle de traitement de <code>mesure()</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('User Timing', '#dom-performance-measure', 'measure()')}}</td>
      <td>{{Spec2('User Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.measure")}}</p>
