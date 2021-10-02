---
title: PerformanceObserver.observe()
slug: Web/API/PerformanceObserver/observe
tags:
  - API
  - Method
  - Méthode
  - Performance
  - PerformanceObserver
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceObserver/observe
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La méthode <strong><code>observe()</code></strong> de l'interface <strong><a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a></strong> est utilisée pour spécifier l'ensemble des types d'entrée de performance à observer. Les types d'entrée de performance sont spécifiés sous la forme d'un tableau d'objets <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>, chacun nommant un type d'entrée ; les noms de type sont documentés sur la page <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a>.</p>

<p>Lorsqu'une entrée de performance correspondante est enregistrée, la fonction de rappel de l'observateur de performance — définie lors de la création du <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a> — est invoquée.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js"><var>observer</var>.observe(<var>options</var>);</pre>

<h3 id="Parameters">Paramètres</h3>

<dl>
  <dt><code>options</code></dt>
  <dd>Un dictionnaire <code>PerformanceObserverInit</code> avec les membres possibles suivants :
    <ul>
      <li><code>entryTypes</code> : Un tableau d'objets <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>, chacun spécifiant un type d'entrée de performance à observer. Ne peut pas être utilisé avec les options « <code>type</code> » ou « <code>buffered</code> ».</li>
      <li><code>type</code> : Une <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> unique spécifiant exactement un type d'entrée de performance à observer. Ne peut pas être utilisé avec l'option <code>entryTypes</code>.</li>
      <li><code>buffered</code> : Un indicateur booléen pour indiquer si les entrées en mémoire tampon doivent être mises en file d'attente dans la mémoire tampon de l'observateur. Ne doit être utilisé qu'avec l'option « <code>type</code> ».</li>
    </ul>
    <div class="note">
      <p><strong>Note :</strong>Voir <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a> pour une liste des noms de types d'entrées de performance valides. Les types non reconnus sont ignorés, bien que le navigateur puisse afficher un message d'avertissement sur la console pour aider les développeurs à déboguer leur code. Si aucun type valide n'est trouvé, <code>observe()</code> n'a aucun effet.</p>
    </div>
  </dd>
</dl>

<h2 id="Example">Exemple</h2>

<p>Cet exemple crée et configure deux <code>PerformanceObservers</code> ; l'un surveille les événements <code>"mark"</code> et <code>"frame"</code>, et l'autre surveille les événements <code>"measure"</code>.</p>

<pre class="brush: js">const observer = new PerformanceObserver(function(list, obj) {
  let entries = list.getEntries();
  for (let i = 0; i &lt; entries.length; i++) {
    // Traiter les événements "mark" et "famse"
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceobserver-observe',
        'observe()')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Définition initiale de la méthode <code>observe()</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceObserver.observe")}}</p>
