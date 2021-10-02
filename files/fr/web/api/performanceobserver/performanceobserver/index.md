---
title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
tags:
  - API
  - Constructor
  - Constructeur
  - PerformanceObserver
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceObserver/PerformanceObserver
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>Le constructeur <strong><code>PerformanceObserver()</code></strong> crée un nouvel objet <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a> avec le <code>callback</code> d'observation donné. La fonction de rappel de l'observateur est invoquée lorsque des <a href="/fr/docs/Web/API/PerformanceEntry">événements d'entrée de performance</a> sont répertoriés pour les <a href="/fr/docs/Web/API/PerformanceEntry/entryType">types d'entrées</a> qui ont été enregistrés, via la méthode <a href="/fr/docs/Web/API/PerformanceObserver/observe"><code>observe()</code></a>.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js">const <var>observer</var> = new PerformanceObserver(<var>callback</var>);</pre>

<h3 id="Parameters">Paramètres</h3>

<dl>
  <dt><code>callback</code></dt>
  <dd>Une fonction de rappel qui sera invoquée lorsque des événements de performance <em>observés</em> sont enregistrés. Lorsque la fonction de rappel est invoquée, son premier paramètre est une <a href="/fr/docs/Web/API/PerformanceObserverEntryList">liste des entrées de l'observateur de performance</a> et le second paramètre est l'objet <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a> courant.</dd>
</dl>

<h3 id="Return_value">Valeur de retour</h3>

<p>Un nouvel objet <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a> qui appellera le <code>callback</code> spécifiée lorsque des événements de performance observés se produisent.</p>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">const observer = new PerformanceObserver(function(list, obj) {
  let entries = list.getEntries();
  for (let i = 0; i &lt; entries.length; i++) {
    // Traiter les événements "mark" et "frame"
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Traiter l'événement "measure"
}
const observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
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
        '#idl-def-performanceobservercallback', 'PerformanceObserver()')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Définition initiale du constructeur <code>PerformanceObserver()</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceObserver.PerformanceObserver")}}</p>
