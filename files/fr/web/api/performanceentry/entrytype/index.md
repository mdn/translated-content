---
title: PerformanceEntry.entryType
slug: Web/API/PerformanceEntry/entryType
tags:
  - API
  - Performance Timeline API
  - PerformanceEntry
  - Property
  - Propriété
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry/entryType
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La propriété <strong><code>entryType</code></strong> renvoie un <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> représentant le type de mesure de performance tel que, par exemple, « <code>mark</code> ». Cette propriété est en lecture seule.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js">var <var>type</var> = <var>entry</var>.entryType;</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>La valeur de retour dépend du sous-type de l'objet <code>PerformanceEntry</code> et affecte la valeur de la propriété <a href="/fr/docs/Web/API/PerformanceEntry/name"><code>PerformanceEntry.name</code></a> comme le montre le tableau ci-dessous.</p>

<h3 id="Performance_entry_type_names">Noms des types d'entrée de performance</h3>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Valeur</th>
      <th scope="col">Sous-type</th>
      <th scope="col">Type de propriété pour le nom</th>
      <th scope="col">Description de la valeur du nom.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>element</code></td>
      <td><a href="/fr/docs/Web/API/PerformanceElementTiming"><code>PerformanceElementTiming</code></a></td>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td>Rapporte le temps de chargement des éléments.</td>
    </tr>
    <tr>
      <td><code>frame</code>, <code>navigation</code></td>
      <td><a href="/fr/docs/Web/API/PerformanceFrameTiming"><code>PerformanceFrameTiming</code></a>,
        <a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a></td>
      <td><a href="/fr/docs/Web/API/URL"><code>URL</code></a></td>
      <td>L'adresse du document.</td>
    </tr>
    <tr>
      <td><code>resource</code></td>
      <td><a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a></td>
      <td><a href="/fr/docs/Web/API/URL"><code>URL</code></a></td>
      <td>L'URL résolue de la ressource demandée. Cette valeur ne change pas même si la demande est redirigée.</td>
    </tr>
    <tr>
      <td><code>mark</code></td>
      <td><a href="/fr/docs/Web/API/PerformanceMark"><code>PerformanceMark</code></a></td>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td>Le nom utilisé lorsque la marque a été créée en appelant <a href="/fr/docs/Web/API/Performance/mark"><code>mark()</code></a>.</td>
    </tr>
    <tr>
      <td><code>measure</code></td>
      <td><a href="/fr/docs/Web/API/PerformanceMeasure"><code>PerformanceMeasure</code></a></td>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td>Le nom utilisé lorsque la mesure a été créée en appelant <a href="/fr/docs/Web/API/Performance/measure"><code>measure()</code></a>.</td>
    </tr>
    <tr>
      <td><code>paint</code></td>
      <td><a href="/fr/docs/Web/API/PerformancePaintTiming"><code>PerformancePaintTiming</code></a></td>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td>Soit <code>'first-paint'</code> ou <code>'first-contentful-paint'</code>.</td>
    </tr>
    <tr>
      <td><code>longtask</code></td>
      <td><a href="/fr/docs/Web/API/PerformanceLongTaskTiming"><code>PerformanceLongTaskTiming</code></a></td>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td>Signale les cas de tâches longues.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant montre l'utilisation de la propriété <code>entryType</code>.</p>

<pre class="brush: js">function run_PerformanceEntry() {

  // Vérifie le support des fonctionnalités avant de continuer
  if (performance.mark === undefined) {
    console.log("performance.mark n'est pas pris en charge");
    return;
  }

  // Crée une entrée de performance nommée "begin" via la méthode mark()
  performance.mark("begin");

  // Vérifie le type d'entrée de toutes les entrées "begin".
  let entriesNamedBegin = performance.getEntriesByName("begin");
  for (let i=0; i &lt; entriesNamedBegin.length; i++) {
    let typeOfEntry = entriesNamedBegin[i].entryType;
    console.log("L'entrée est de type : " + typeOfEntry);
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceentry-entrytype',
        'entryType')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline', '#dom-performanceentry-entrytype',
        'entryType')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceEntry.entryType")}}</p>
