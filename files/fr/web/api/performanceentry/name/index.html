---
title: PerformanceEntry.name
slug: Web/API/PerformanceEntry/name
tags:
  - API
  - Performance Timeline API
  - PerformanceEntry
  - Property
  - Propriété
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry/name
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La propriété <strong><code>name</code></strong> de l'interface <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> renvoie une valeur qui précise davantage la valeur renvoyée par la propriété <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a>. Cette propriété est en lecture seule.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">var <var>name</var> = <var>entry</var>.name;
</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>La valeur de retour dépend du sous-type de l'objet <code>PerformanceEntry</code> et de la valeur de <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a>, comme le montre le tableau ci-dessous.</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Type de valeur pour <code>name</code></th>
      <th scope="col">Sous-type</th>
      <th scope="col">Type (<code>entryType</code>)</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/fr/docs/Web/API/URL"><code>URL</code></a></td>
      <td><a href="/fr/docs/Web/API/PerformanceFrameTiming"><code>PerformanceFrameTiming</code></a>,
        <a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a></td>
      <td><code>frame</code>, <code>navigation</code></td>
      <td>L'adresse du document.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/URL"><code>URL</code></a></td>
      <td><a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a></td>
      <td><code>resource</code></td>
      <td>L'URL résolue de la ressource demandée. Cette valeur ne change pas même si la demande est redirigée.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td><a href="/fr/docs/Web/API/PerformanceMark"><code>PerformanceMark</code></a></td>
      <td><code>mark</code></td>
      <td>Le nom utilisé lorsque le marqueur a été créé en appelant <a href="/fr/docs/Web/API/Performance/mark"><code>mark()</code></a>.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td><a href="/fr/docs/Web/API/PerformanceMeasure"><code>PerformanceMeasure</code></a></td>
      <td><code>measure</code></td>
      <td>Le nom utilisé lorsque la mesure a été créée en appelant <a href="/fr/docs/Web/API/Performance/measure"><code>measure()</code></a>.</td>
    </tr>
    <tr>
      <td><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></td>
      <td><a href="/fr/docs/Web/API/PerformancePaintTiming"><code>PerformancePaintTiming</code></a></td>
      <td><code>paint</code></td>
      <td>Soit <code>'first-paint'</code> ou <code>'first-contentful-paint'</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant montre l'utilisation de la propriété <code>name</code>.</p>

<pre class="brush: js">function run_PerformanceEntry() {
  console.log("Support de PerformanceEntry ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark n'est pas pris en charge");
    return;
  }

  // Crée quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée.
  let p = performance.getEntries();
  for (let i = 0; i &lt; p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  let properties = ["name", "entryType", "startTime", "duration"];
  let methods = ["toJSON"];

  for (let i = 0; i &lt; properties.length; i++) {
    // Vérifie chaque propriété
    let supported = properties[i] in obj;
    if (supported)
      console.log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      console.log("..." + properties[i] + " = Not supported");
  }
  for (let i = 0; i &lt; methods.length; i++) {
    // Vérifie chaque méthode
    let supported = typeof obj[methods[i]] == "function";
    if (supported) {
      let js = obj[methods[i]]();
      console.log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      console.log("..." + methods[i] + " = Not supported");
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceentry-name',
        'name')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline', '#dom-performanceentry-name',
        'name')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceEntry.name")}}</p>
