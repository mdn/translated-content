---
title: Utilisation de l'API Performance
slug: Web/API/Performance_API/Using_the_Performance_API
tags:
  - API
  - Guide
  - Aperçu
  - Performance
  - Performance Web
translation_of: Web/API/Performance_API/Using_the_Performance_API
---
<div>{{DefaultAPISidebar("High Resolution Time")}}</div>

<p>Une exigence fondamentale de la performance web est une définition précise et cohérente du <em>temps.</em> Le type <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> (un <code>double</code>) est utilisé par toutes les interfaces de performance pour contenir de telles valeurs de temps.</p>

<p>En outre, il doit y avoir un moyen de créer une <em>empreinte temporelle</em> pour un point spécifique dans le temps ; ceci est fait avec la méthode <a href="/fr/docs/Web/API/Performance/now"><code>now()</code></a>.</p>

<p>Les interfaces de performance web sont définies dans un <a href="https://www.w3.org/wiki/Web_Performance/Publications">ensemble de normes</a>. L'interface <em>de base</em> de ces normes est l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> et ses méthodes et propriétés sont étendues par différentes normes. Ce guide décrit comment utiliser les interfaces <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> qui sont définies dans la norme <a href="https://w3c.github.io/hr-time/">High-Resolution Time</a>. D'autres guides sur les performances web (répertoriés dans la section <a href="#see_also">Voir aussi</a>) décrivent comment utiliser des méthodes et propriétés supplémentaires de l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>.</p>

<h2 id="High_precision_timing">Chronométrage de haute précision</h2>

<p><em>Le chronométrage de haute précision</em> est obtenu en utilisant le type <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> pour les valeurs de temps. L'unité est la milliseconde et doit être précise à 5 µs (microsecondes). Toutefois, si le navigateur n'est pas en mesure de fournir une valeur temporelle précise à 5 microsecondes (en raison de contraintes matérielles ou logicielles, par exemple), il peut représenter la valeur comme un temps en millisecondes précis à la milliseconde près.</p>

<p>L'exemple de code suivant montre l'utilisation de <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> et de la méthode <a href="/fr/docs/Web/API/Performance/now"><code>Performance.now()</code></a>. La méthode <a href="/fr/docs/Web/API/Performance/now"><code>now()</code></a> renvoie un <em>timestamp</em> (de type <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a>) qui est un point discret dans le temps. En appelant cette méthode avant et après une tâche, il est possible de mesurer le temps nécessaire à l'exécution de la tâche.</p>

<pre class="brush: js">
function calculate_time() {
  let startTime;
  let endTime;

  startTime = performance.now();
  do_task();
  endTime = performance.now();

  return (endTime - startTime);
}
</pre>

<h2 id="Serializing_the_Performance_object">Sérialisation de l'objet <code>Performance</code></h2>

<p>La sérialisation JSON de l'objet <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> est effectuée via la méthode <a href="/fr/docs/Web/API/Performance/toJSON"><code>toJSON()</code></a>. Dans l'exemple suivant, la sérialisation JSON des objets <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>, <a href="/fr/docs/Web/API/Performance/timing"><code>Performance.timing</code></a> {{deprecated_inline}} et <a href="/fr/docs/Web/API/Performance/navigation"><code>Performance.navigation</code></a> {{deprecated_inline}} est imprimée dans l'élément <code>object</code>.</p>

<pre class="brush: js">
function print_json() {
  let json;
  let o = document.getElementsByTagName("output")[0];

  if (window.performance.toJSON === undefined) {
    json = "window.performance.toJSON() n'est PAS pris en charge";
    o.innerHTML += json + "&lt;br&gt;";
  } else {
    let s;
    json = window.performance.toJSON();

    // Imprimer l'objet de performance
    s = JSON.stringify(json);
    o.innerHTML = "&lt;p&gt;performance = " + s + "&lt;/p&gt;";

    // Imprimer les objets performance.timing et performance.navigation
    let perf = JSON.parse(s);

    let timing = perf.timing;
    o.innerHTML += "&lt;p&gt;peformance.timing = " + JSON.stringify(timing) + "&lt;/p&gt;";

    let navigation = perf.navigation;
    o.innerHTML += "&lt;p&gt;peformance.navigation = " + JSON.stringify(navigation) + "&lt;/p&gt;";
  }
}
</pre>

<h2 id="Specifications">Spécifications</h2>

<p>Les interfaces décrites dans ce document sont définies dans la norme <code>High Resolution Time</code> qui comporte deux niveaux :</p>

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
      <td>{{SpecName('Highres Time Level 2')}}</td>
      <td>{{Spec2('Highres Time Level 2')}}</td>
      <td>Ajout de l'attribut <code>performance</code> sur <code>Window</code> et <code>WorkerGlobalScope</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Highres Time')}}</td>
      <td>{{Spec2('Highres Time')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Interoperability">Interopérabilité</h2>

<p>Comme le montre le tableau des <a href="/fr/docs/Web/API/Performance#browser_compatibility">Compatibilités des navigateurs</a> de l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>, la plupart des interfaces <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> sont largement implémentées par les navigateurs de bureau.</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Performance_API">Aperçu de l'API Performance</a></li>
  <li><a href="https://siusin.github.io/perf-timing-primer/">Une introduction aux API de chronométrage des performances du Web</a> <small>(en)</small></li>
  <li><a href="https://docs.google.com/document/d/1ZKW9N0cteHgK91SyYQONFuy2ZW6J4Oak398niTo232E/edit">Graphique des couches de performance Web</a> <small>(en)</small></li>
  <li><a href="https://caniuse.com/#search=high-resolution-time">CanIUse données pour le Temps à haute résolution</a> <small>(en)</small></li>
  <li><a href="https://www.w3.org/wiki/Web_Performance/Publications">Web Performance Standards Status and Roadmap</a> <small>(en)</small></li>
</ul>
