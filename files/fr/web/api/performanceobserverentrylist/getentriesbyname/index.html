---
title: PerformanceObserverEntryList.getEntriesByName()
slug: Web/API/PerformanceObserverEntryList/getEntriesByName
tags:
  - API
  - Method
  - Méthode
  - PerformanceObserverEntryList
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceObserverEntryList/getEntriesByName
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La méthode <strong><code>getEntriesByName()</code></strong> de l'interface <a href="/fr/docs/Web/API/PerformanceObserverEntryList"><code>PerformanceObserverEntryList</code></a> retourne une liste d'objets <a href="/fr/docs/Web/API/PerformanceEntry">d'entrée de performance</a> explicitement <em>observés</em> pour un <em><a href="/fr/docs/Web/API/PerformanceEntry/name"><code>name</code></a></em> et <em><a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>entryType</code></a></em> donnés. Les membres de la liste sont déterminés par l'ensemble des <a href="/fr/docs/Web/API/PerformanceEntry/entryType">types d'entrées</a> spécifiés dans l'appel à la méthode <a href="/fr/docs/Web/API/PerformanceObserver/observe"><code>observe()</code></a>. La liste est disponible dans la fonction de rappel de l'observateur (en tant que premier paramètre de la fonction de rappel).</p>

<div class="note">
  <p><strong>Note :</strong> Cette interface est exposée à <a href="/fr/docs/Web/API/Window"><code>Window</code></a> et <a href="/fr/docs/Web/API/Worker"><code>Worker</code></a>.</p>
</div>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">let <var>entries</var> = <var>list</var>.getEntriesByName(<var>name</var>, <var>type</var>);</pre>

<h3 id="Parameters">Paramètres</h3>

<dl>
  <dt><em><code>name</code></em></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> représentant le nom de l'entrée à récupérer.</dd>
  <dt><em><code>type</code></em> {{optional_inline}}</dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> représentant le type d'entrée à récupérer tel que « <code>mark</code> ». Les types d'entrée valides sont énumérés dans <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a>.</dd>
</dl>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Une liste d'objets <a href="/fr/docs/Web/API/PerformanceEntry">d'entrée de performance</a> explicitement <em>observés</em> qui ont le <code>name</code> et le <code>type</code> spécifiés. Si l'argument <code>type</code> n'est pas spécifié, seul <code>name</code> sera utilisé pour déterminer les entrées à retourner. Les éléments seront triés dans l'ordre chronologique selon les <a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>startTime</code></a> des entrées. Si aucun objet ne répond aux critères spécifiés, une liste vide est retournée.</p>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">function print_perf_entry(pe) {
  console.log("name: " + pe.name +
              "; entryType: " + pe.entryType +
              "; startTime: " + pe.startTime +
              "; duration: " + pe.duration);
}

// Crée un observateur pour tous les types d'événements de performance
const observe_all = new PerformanceObserver(function(list, obs) {
  let perfEntries;

  // Imprime toutes les entrées
  perfEntries = list.getEntries();
  for (let i = 0; i &lt; perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }

  // Imprime les entrées nommées "Begin" avec le type "mark".
  perfEntries = list.getEntriesByName("Begin", "mark");
  for (let i = 0; i &lt; perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }

  // Imprime les entrées de type "mark".
  perfEntries = list.getEntriesByType("mark");
  for (let i = 0; i &lt; perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }
});
// inscrire tous les types d'événements de performance
observe_all.observe({entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server']});

const observe_frame = new PerformanceObserver(function(list, obs) {
  let perfEntries = list.getEntries();
  // Ne devrait avoir que des entrées "frame"
  for (let i = 0; i &lt; perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }
});
// inscrire à l'événement "frame" uniquement
observe_frame.observe({entryTypes: ['frame']});
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
      <td>{{SpecName('Performance Timeline Level 2',
        '#dom-performanceobserverentrylist-getentriesbyname', 'getEntriesByName()')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Définition initiale de la méthode <code>getEntriesByName()</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceObserverEntryList.getEntriesByName")}}</p>
