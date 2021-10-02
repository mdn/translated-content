---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
tags:
  - API
  - Interface
  - Performance Observer API
  - PerformanceObserver
  - Reference
  - Performance Web
  - observers
translation_of: Web/API/PerformanceObserver
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>L'interface <strong><code>PerformanceObserver</code></strong> est utilisée pour <em>observer</em> les événements de mesure des performances et être notifié des nouvelles <a href="/fr/docs/Web/API/PerformanceEntry">entréés de performance</a> lorsqu'elles sont enregistrées dans la <em>chronologie des performances</em> du navigateur.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Constructor">Constructeur</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceObserver/PerformanceObserver"><code>PerformanceObserver()</code></a></dt>
  <dd>Crée et retourne un nouvel objet <code>PerformanceObserver</code>.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceObserver/observe"><code>PerformanceObserver.observe()</code></a></dt>
  <dd>Spécifie l'ensemble des <a href="/fr/docs/Web/API/PerformanceEntry/entryType">types d'entrées</a> à observer. La fonction de rappel de l'observateur de performances sera invoquée lorsqu'une <a href="/fr/docs/Web/API/PerformanceEntry">entrée de performance</a> est enregistrée pour l'un des <code>entryTypes</code> spécifiés.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceObserver/disconnect"><code>PerformanceObserver.disconnect()</code></a></dt>
  <dd>Arrête l'observation des <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performances</a>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceObserver/takeRecords"><code>PerformanceObserver.takeRecords()</code></a> {{Experimental_Inline}}</dt>
  <dd>Renvoie la liste actuelle des <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performances</a> stockées dans l'observateur de performance, en la vidant.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<pre class="brush:js">function perf_observer(list, observer) {
  // Traiter l'événement "measure".
}
const observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});</pre>

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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceobserver', 'PerformanceObserver')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Définition initiale de l'interface <code>PerformanceObserver</code>.</td>
    </tr>
   </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceObserver")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/MutationObserver"><code>MutationObserver</code></a></li>
 <li><a href="/fr/docs/Web/API/ResizeObserver"><code>ResizeObserver</code></a></li>
 <li><a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a></li>
</ul>
