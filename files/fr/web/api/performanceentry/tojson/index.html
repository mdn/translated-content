---
title: PerformanceEntry.toJSON()
slug: Web/API/PerformanceEntry/toJSON
tags:
  - API
  - Method
  - Méthode
  - Performance Timeline API
  - PerformanceEntry
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry/toJSON
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La méthode <strong><code>toJSON()</code></strong> permet de sérialiser l'objet <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> courant et renvoie une représentation JSON de l'objet.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js">let jsonObj = perfEntry.toJSON();
</pre>

<h3 id="Arguments">Arguments</h3>

<p>Aucun.</p>

<h3 id="Return_value">Valeur de retour</h3>

<dl>
  <dt><code>json</code></dt>
  <dd>Un objet JSON qui est la sérialisation de l'objet <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a>.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant montre l'utilisation de la méthode <code>toJSON()</code>.</p>

<pre class="brush:js">function run_PerformanceEntry() {
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
    // On vérifie chaque propriété
    let supported = properties[i] in obj;
    if (supported)
      console.log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      console.log("..." + properties[i] + " = N'est pas pris en charge");
  }
  for (let i = 0; i &lt; methods.length; i++) {
    // On vérifie chaque méthode
    let supported = typeof obj[methods[i]] == "function";
    if (supported) {
      let js = obj[methods[i]]();
      console.log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      console.log("..." + methods[i] + " = N'est pas pris en charge");
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceentry-tojson',
        'toJSON')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Définition initiale de la méthode <code>toJSON()</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceEntry.toJSON")}}</p>
