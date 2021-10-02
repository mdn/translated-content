---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
tags:
  - API
  - Interface
  - Performance Timeline API
  - PerformanceEntry
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>L'objet <strong><code>PerformanceEntry</code></strong> encapsule une seule mesure de performance qui fait partie de la <em>chronologie de performance</em>. Une <em>entrée de performance</em> peut être créée directement en faisant <em><a href="/fr/docs/Web/API/PerformanceMark">une marque</a></em> ou <em><a href="/fr/docs/Web/API/PerformanceMeasure">une mesure</a></em> (par exemple en appelant la méthode <a href="/fr/docs/Web/API/Performance/mark"><code>mark()</code></a>) à un point explicite d'une application. Les entrées de performance sont également créées de manière indirecte, par exemple en chargeant une ressource (telle qu'une image).</p>

<p>Les instances <code>PerformanceEntry</code> auront toujours l'un des sous-types suivants :</p>

<ul>
  <li><a href="/fr/docs/Web/API/PerformanceMark"><code>PerformanceMark</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformanceMeasure"><code>PerformanceMeasure</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformanceFrameTiming"><code>PerformanceFrameTiming</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformancePaintTiming"><code>PerformancePaintTiming</code></a></li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="Properties">Propriétés</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/name"><code>PerformanceEntry.name</code></a> {{readonlyInline}}</dt>
  <dd>Une valeur qui précise davantage la valeur renvoyée par la propriété <a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a>. La valeur des deux dépend du sous-type. Voir la page de la propriété pour les valeurs valides.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>PerformanceEntry.entryType</code></a> {{readonlyInline}}</dt>
  <dd>Une chaîne de caractère <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> représentant le type de mesure de performance comme, par exemple, "<code>mark</code>". Voir la page des propriétés pour les valeurs valides.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>PerformanceEntry.startTime</code></a> {{readonlyInline}}</dt>
  <dd>Un objet <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant l'heure de départ de la mesure de performance.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/duration"><code>PerformanceEntry.duration</code></a> {{readonlyInline}}</dt>
  <dd>Un objet <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> représentant la valeur temporelle de la durée de l'événement de performance.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/toJSON"><code>PerformanceEntry.toJSON()</code></a></dt>
  <dd>Renvoie une représentation JSON de l'objet <code>PerformanceEntry</code>.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<p>L'exemple suivant vérifie toutes les propriétés <code>PerformanceEntry</code> pour voir si le navigateur les prend en charge et, le cas échéant, écrit leurs valeurs dans la console.</p>

<pre class="brush:js">function print_PerformanceEntries() {
  // Utilise getEntries() pour obtenir une liste de toutes les entrées de performance.
  let p = performance.getEntries();
  for (let i = 0; i &lt; p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_PerformanceEntry(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
  let properties = ["name",
                    "entryType",
                    "startTime",
                    "duration"];

  for (let i = 0; i &lt; properties.length; i++) {
    // Vérifie chaque propriété
    let supported = properties[i] in perfEntry;
    if (supported) {
      let value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " n'est PAS pris en charge");
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
      <td>{{SpecName('Resource Timing 3')}}</td>
      <td>{{Spec2('Resource Timing 3')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Resource Timing 2')}}</td>
      <td>{{Spec2('Resource Timing 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Resource Timing')}}</td>
      <td>{{Spec2('Resource Timing')}}</td>
      <td>Ajoute l'interface <a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a> et la valeur <code>resource</code> pour <code>entryType</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Navigation Timing Level 2')}}</td>
      <td>{{Spec2('Navigation Timing Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('Navigation Timing')}}</td>
      <td>{{Spec2('Navigation Timing')}}</td>
      <td>Ajoute l'interface <a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a> et la valeur <code>navigation</code> pour <code>entryType</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('User Timing Level 2')}}</td>
      <td>{{Spec2('User Timing Level 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('User Timing')}}</td>
      <td>{{Spec2('User Timing')}}</td>
      <td>Ajoute les interfaces <a href="/fr/docs/Web/API/PerformanceMark"><code>PerformanceMark</code></a> et <a href="/fr/docs/Web/API/PerformanceMeasure"><code>PerformanceMeasure</code></a> ainsi que les valeurs <code>mark</code> et <code>measure</code> pour <code>entryType</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Frame Timing')}}</td>
      <td>{{Spec2('Frame Timing')}}</td>
      <td>Ajoute l'interface <a href="/fr/docs/Web/API/PerformanceFrameTiming"><code>PerformanceFrameTiming</code></a> et la valeur <code>frame</code> pour <code>entryType</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceentry', 'PerformanceEntry')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Ajout de la méthode de sérialisation <code>toJSON()</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline', '#dom-performanceentry', 'PerformanceEntry')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Définition initiale.</td>
    </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceEntry")}}</p>
