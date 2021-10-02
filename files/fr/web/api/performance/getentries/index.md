---
title: performance.getEntries()
slug: Web/API/Performance/getEntries
tags:
- API
- Method
- Méthode
- Reference
- Performance web
translation_of: Web/API/Performance/getEntries
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La méthode <strong><code>getEntries()</code></strong> renvoie une liste de tous les objets {{domxref("PerformanceEntry")}} pour la page. Les membres de la liste (<em>entrées</em>) peuvent être créés en faisant des <em>marqueurs</em> ou des <em>mesures</em> de performance (par exemple en appelant la méthode {{domxref("Performance.mark", "mark()")}}) à des moments explicites. Si vous souhaitez filtrer  les entrées de performance en fonction de leur type ou de leur nom, consultez la documentation des méthodes {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} et {{domxref("Performance.getEntriesByName", "getEntriesByName()")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">
  <var>entries</var> = window.performance.getEntries();
</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<dl>
  <dt><code>entries</code></dt>
  <dd>Un tableau ({{jsxref("Array")}}) d'objets {{domxref("PerformanceEntry")}}. Les éléments seront classés par ordre chronologique en fonction des entrées {{domxref("PerformanceEntry.startTime","startTime")}}.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">function use_PerformanceEntry_methods() {
  console.log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark Non pris en charge");
    return;
  }

  // Crée quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  performance.mark("Begin");
  do_work(100000);
  performance.mark("End");
  do_work(200000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée.
  let p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Utilise getEntriesByType() pour obtenir toutes les entrées "mark".
  p = performance.getEntriesByType("mark");
  for (let i=0; i &lt; p.length; i++) {
    console.log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Utilise getEntriesByName() pour obtenir toutes les entrées "mark" nommées "Begin".
  p = performance.getEntriesByName("Begin", "mark");
  for (let i=0; i &lt; p.length; i++) {
    console.log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performance-getentries',
        'getEntries()')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline', '#dom-performance-getentries',
        'getEntries()')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Performance.getEntries")}}</p>
