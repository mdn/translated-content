---
title: PerformanceEntry.startTime
slug: Web/API/PerformanceEntry/startTime
tags:
  - API
  - Performance Timeline API
  - PerformanceEntry
  - Property
  - Propriété
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry/startTime
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>La propriété <strong><code>startTime</code></strong> renvoie le premier <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> enregistré pour l'<a href="/fr/docs/Web/API/PerformanceEntry">entrée de performance</a>.</p>

<p>{{AvailableInWorkers}}</p>

<p>La valeur renvoyée par cette propriété dépend du <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>type</code></a> de l'entrée de performance :</p>

<ul>
  <li>« <code>frame</code> » - retourne le 
    <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> quand l'affichage a été démarré.</li>
  <li>« <code>mark</code> » - retourne le <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> lorsque le marquage a été créé par un appel de <a href="/fr/docs/Web/API/Performance/mark"><code>performance.mark()</code></a>.</li>
  <li>« <code>measure</code> » - retourne le <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> lorsque la mesure a été créée par un appel à <a href="/fr/docs/Web/API/Performance/measure"><code>performance.measure()</code></a>.</li>
  <li>« <code>navigation</code> » - retourne le <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> avec une valeur de "<code>0</code>".</li>
  <li>« <code>resource</code> » - retourne le <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>timestamp</code></a> immédiatement avant que le navigateur ne <a href="/fr/docs/Web/API/PerformanceResourceTiming/fetchStart">commence à récupérer la ressource</a>.</li>
</ul>

<p>Cette propriété est en lecture seule.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush:js">entry.startTime;</pre>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Un objet <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant le premier horodatage lorsque l'<a href="/fr/docs/Web/API/PerformanceEntry">entrée de performance</a> a été créée.</p>

<div class="notecard note">
  <p><strong>Note :</strong> Si l'entrée de performance a un <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>entryType</code></a> "<code>resource</code>" (c'est-à-dire que l'entrée est un objet <a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a>), cette propriété renvoie la valeur de l'horodatage fournie par <a href="/fr/docs/Web/API/PerformanceResourceTiming/fetchStart"><code>PerformanceResourceTiming.fetchStart</code></a>.</p>
</div>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant montre l'utilisation de la propriété <code>startTime</code>.</p>

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

  // Utilise getEntries() pour itérer à travers chaque entrée
  let p = performance.getEntries();
  for (let i = 0; i &lt; p.length; i++) {
    log("Entry[" + i + "]");
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
      log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      log("..." + properties[i] + " = N'est pas pris en charge");
  }
  for (let i = 0; i &lt; methods.length; i++) {
    // On vérifie chaque méthode
    let supported = typeof obj[methods[i]] == "function";
    if (supported) {
      let js = obj[methods[i]]();
      log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      log("..." + methods[i] + " = N'est pas pris en charge");
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
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceentry-starttime',
        'startTime')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline', '#dom-performanceentry-starttime',
        'startTime')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceEntry.startTime")}}</p>
