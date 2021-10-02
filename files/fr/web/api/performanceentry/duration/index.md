---
title: PerformanceEntry.duration
slug: Web/API/PerformanceEntry/duration
tags:
  - API
  - PerformanceEntry
  - Property
  - Propriété
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry/duration
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La propriété <strong><code>duration</code></strong> renvoie un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> qui correspond à la durée de l'<a href="/fr/docs/Web/API/PerformanceEntry">entrée de performance</a>.</p>

<p>{{AvailableInWorkers}}</p>

<p>La valeur retournée par cette propriété dépend du <a href="/fr/docs/Web/API/PerformanceEntry/entryType">type</a> de l'entrée de performance :</p>

<ul>
  <li>« <code>frame</code> » - retourne un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> indiquant la différence entre le <code>startTime</code> de deux <i>frames</i> successives.</li>
  <li>« <code>mark</code> » - retourne "<code>0</code>" (une marque n'a pas de durée).</li>
  <li>« <code>measure</code> » - retourne le <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> qui correspond à la durée de la mesure.</li>
  <li>« <code>navigation</code> » - retourne le <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> qui est respectivement la différence entre les propriétés <a href="/fr/docs/Web/API/PerformanceNavigationTiming/loadEventEnd"><code>PerformanceNavigationTiming.loadEventEnd</code></a> et <a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>PerformanceEntry.startTime</code></a>.</li>
  <li>« <code>resource</code> » - renvoie la différence entre les deux <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamps</code></a> <a href="/fr/docs/Web/API/PerformanceResourceTiming/responseEnd"><code>responseEnd</code></a> (le moment de la fin de la réponse) de la ressource et <a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>startTime</code></a> (le point de départ).</li>
</ul>

<p>Cette propriété est en {{readonlyInline}}.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js"><em>entry</em>.duration;</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Un objet <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant la durée de l'<a href="/fr/docs/Web/API/PerformanceEntry">entrée de performance</a>. Si le concept de durée ne s'applique pas à une mesure de performance particulière, le navigateur peut choisir de renvoyer une durée de 0.</p>

<div class="notecard note">
  <p><strong>Note :</strong> si l'entrée de performance a un <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>entryType</code></a>  "<code>resource</code>" (c'est-à-dire que l'entrée est un objet <a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a>), cette propriété renvoie la différence entre les <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamps</code></a> <a href="/fr/docs/Web/API/PerformanceResourceTiming/responseEnd"><code>PerformanceEntry.responseEnd</code></a> et <a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>PerformanceEntry.startTime</code></a>.</p>
</div>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant montre l'utilisation de la propriété <code>duration</code>.</p>

<pre class="brush:js">function run_PerformanceEntry() {
  console.log("Support de PerformanceEntry ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark N'est pas pris en charge");
    return;
  }

  // Créer quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée.
  let <var>p</var> = performance.getEntries();
  for (let <var>i</var>=0; i &lt; p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(<var>obj</var>) {
  let <var>properties</var> = ["name", "entryType", "startTime", "duration"];
  let <var>methods</var> = ["toJSON"];

  for (let <var>i</var>=0; i &lt; properties.length; i++) {
    // check each property
    let <var>supported</var> = properties[i] in obj;
    if (supported)
      console.log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      console.log("..." + properties[i] + " = N'est pas pris en charge");
  }
  for (let <var>i</var>=0; i &lt; methods.length; i++) {
    // check each method
    let <var>supported</var> = typeof obj[methods[i]] == "function";
    if (supported) {
      let <var>js</var> = obj[methods[i]]();
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceentry-duration',
        'duration')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline', '#dom-performanceentry-duration',
        'duration')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceEntry.duration")}}</p>
