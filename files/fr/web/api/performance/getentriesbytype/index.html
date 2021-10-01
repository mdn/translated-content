---
title: performance.getEntriesByType()
slug: Web/API/Performance/getEntriesByType
tags:
- API
- Method
- Méthode
- Reference
- Performance web
translation_of: Web/API/Performance/getEntriesByType
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La méthode <strong><code>getEntriesByName()</code></strong> renvoie une liste de tous les objets {{domxref("PerformanceEntry")}} pour le type donné. Les entrées de performance auront pu être créées au préalable avec des <em>marqueurs</em> ou des <em>mesures</em> de performance (par exemple en appelant la méthode {{domxref("Performance.mark", "mark()")}}) à des moments explicites.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  let <var>entries</var> = window.performance.getEntriesByType(type);
</pre>

<h3 id="Arguments">Arguments</h3>

<dl>
  <dt><code>type</code></dt>
  <dd>Le type d'entrée à récupérer tel que « <code>mark</code> ». Les types d'entrées valides sont listés dans {{domxref("PerformanceEntry.entryType")}}.</dd>
</dl>

<h3 id="Return_Value">Valeur de retour</h3>

<dl>
  <dt><code>entries</code></dt>
  <dd>Une liste de tous les objets {{domxref("PerformanceEntry")}} ayant le <em>type</em> spécifié. Les éléments seront triés dans l'ordre chronologique basé sur les propriétés {{domxref("PerformanceEntry.startTime", "startTime")}} des entrées. Si aucun objet ne possède le type spécifié, ou si aucun argument n'est fourni, une liste vide est renvoyée.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">function usePerformanceEntryMethods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Non pris en charge");
    return;
  }

  // Crée quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  doWork(50000);
  performance.mark("End");
  performance.mark("Begin");
  doWork(100000);
  performance.mark("End");
  doWork(200000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée.
  var p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    log("Entry[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Utilise getEntries(name, entryType) pour obtenir des entrées spécifiques.
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (var i=0; i &lt; p.length; i++) {
    log("Begin[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Utilise getEntriesByType() pour obtenir toutes les entrées "mark".
  p = performance.getEntriesByType("mark");
  for (var i=0; i &lt; p.length; i++) {
    log("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Utilise getEntriesByName() pour obtenir toutes les entrées "mark" nommées "Begin".
  p = performance.getEntriesByName("Begin", "mark");
  for (var i=0; i &lt; p.length; i++) {
    log("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performance-getentriesbytype',
        'getEntriesByType()')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline', '#dom-performance-getentriesbytype',
        'getEntriesByType()')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.getEntriesByType")}}</p>
