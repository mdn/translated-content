---
title: Performance API
slug: Web/API/Performance_API
tags:
  - API
  - Guide
  - Aperçu
  - Performance
  - Performance Web
translation_of: Web/API/Performance_API
---
<div>{{DefaultAPISidebar("High Resolution Time")}}</div>

<p>La norme <a href="https://www.w3.org/TR/hr-time/">High Resolution Time</a> définit l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> qui prend en charge les mesures de latence côté client au sein des applications. Les interfaces <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> sont considérées comme étant à <em>haute résolution</em>, car elles sont précises au millième de milliseconde (sous réserve de contraintes matérielles ou logicielles).</p>

<p>Les interfaces prennent en charge un certain nombre de cas d'utilisation, notamment le calcul des taux de trame (potentiellement important dans les animations) et l'évaluation comparative (comme le temps de chargement d'une ressource).</p>

<p>Comme l'<em>horloge système</em> d'une plateforme est sujette à divers <em>décalages</em> (comme les ajustements NTP), les interfaces prennent en charge une <em>horloge monotone</em>, c'est-à-dire une horloge toujours croissante. À ce titre, l'API <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> définit un type <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> plutôt que d'utiliser l'interface {{jsxref("Date.now", "Date.now()")}}.</p>

<h2 id="DOMHighResTimeStamp">DOMHighResTimeStamp</h2>

<p>Le type <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a>, comme son nom l'indique, représente un point temporel de haute résolution. Ce type est un <code>double</code> et est utilisé par les interfaces de performance. La valeur peut être un point discret dans le temps ou la différence de temps entre deux points discrets dans le temps.</p>

<p>L'unité de <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> est la milliseconde et doit être précise à 5 µs (microsecondes). Toutefois, si le navigateur n'est pas en mesure de fournir une valeur temporelle précise à 5 microsecondes (en raison, par exemple, de contraintes matérielles ou logicielles), le navigateur peut représenter la valeur comme un temps en millisecondes précis à la milliseconde près.</p>

<h2 id="Methods">Méthodes</h2>

<p>L'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> possède deux méthodes. La méthode <a href="/fr/docs/Web/API/Performance/now"><code>now()</code></a> renvoie un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> dont la valeur dépend de <a href="/fr/docs/Web/API/PerformanceTiming/navigationStart"><code>navigationStart</code></a> et du contexte. Si le contexte est une fenêtre, la valeur est l'heure de création du contexte du navigateur et si le contexte est un <a href="/fr/docs/Web/API/Worker"><code>Worker</code></a>, la valeur est l'heure de création du worker.</p>

<p>La méthode <a href="/fr/docs/Web/API/Performance/toJSON"><code>toJSON()</code></a> renvoie une sérialisation de l'objet <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>, pour les attributs qui peuvent être sérialisés.</p>

<h2 id="Properties">Propriétés</h2>

<p>L'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> possède deux propriétés. La propriété <a href="/fr/docs/Web/API/Performance/timing"><code>timing</code></a> {{deprecated_inline}} renvoie un objet <a href="/fr/docs/Web/API/PerformanceTiming"><code>PerformanceTiming</code></a> contenant des informations de performance liées à la latence, telles que l'heure de début de navigation, les heures de début et de fin des redirections, les heures de début et de fin des réponses, etc.</p>

<p>La propriété <a href="/fr/docs/Web/API/Performance/navigation"><code>navigation</code></a> {{deprecated_inline}} renvoie un objet <a href="/fr/docs/Web/API/PerformanceNavigation"><code>PerformanceNavigation</code></a> représentant le type de navigation qui se produit dans le contexte de navigation donné, comme la page vers laquelle on a navigué depuis l'historique, la page vers laquelle on a navigué en suivant un lien, etc.</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/Performance"><code>Performance</code></a></dt>
  <dd>Fournit des méthodes et des propriétés contenant des informations sur les performances liées au temps pour la page donnée.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a></dt>
  <dd>Fournit des méthodes et des propriétés pour encapsuler une seule mesure de performance qui fait partie de la chronologie des performances.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceFrameTiming"><code>PerformanceFrameTiming</code></a></dt>
  <dd>Fournit des méthodes et des propriétés contenant des données de synchronisation de trame sur la boucle d'événements du navigateur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceMark"><code>PerformanceMark</code></a></dt>
  <dd>Une interface abstraite pour les <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performance</a> avec un <a href="/fr/docs/Web/API/PerformanceEntry/entryType">type d'entrée</a> de « <code>mark</code> ». Les entrées de ce type sont créées en appelant <a href="/fr/docs/Web/API/Performance/mark"><code>performance.mark()</code></a> pour ajouter un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> (un marqueur) à la chronologie des performances du navigateur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceMeasure"><code>PerformanceMeasure</code></a></dt>
  <dd>Une interface abstraite pour les <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performance</a> avec un <a href="/fr/docs/Web/API/PerformanceEntry/entryType">type d'entrée</a> de « <code>measure</code> ». Les entrées de ce type sont créées en appelant <a href="/fr/docs/Web/API/Performance/measure"><code>performance.measure()</code></a> pour ajouter un <a href="/fr/docs/Web/API/DOMHighResTimeStamp"><code>DOMHighResTimeStamp</code></a> (une mesure) entre deux marqueurs à la chronologie des performances du navigateur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a></dt>
  <dd>Fournit des méthodes et des propriétés pour stocker et récupérer <a href="/fr/docs/Web/API/DOMHighResTimeStamp">les horodatages haute résolution</a> ou des métriques concernant les événements de navigation de document du navigateur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a></dt>
  <dd>Fournit des méthodes et des propriétés utilisées pour observer les événements de mesure des performances et être informé des nouvelles <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performance</a> lorsqu'elles sont enregistrées dans la chronologie des performances du navigateur.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceResourceTiming"><code>PerformanceResourceTiming</code></a></dt>
  <dd>Fournit des méthodes et des propriétés permettant de récupérer et d'analyser des données détaillées de synchronisation du réseau concernant le chargement des ressources d'une application.</dd>
</dl>

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
      <td>{{SpecName('Highres Time')}}</td>
      <td>{{Spec2('Highres Time')}}</td>
      <td>Définition initiale.</td>
    </tr>
    <tr>
      <td>{{SpecName('Highres Time Level 2')}}</td>
      <td>{{Spec2('Highres Time Level 2')}}</td>
      <td>Ajout de l'attribut <code>performance</code> sur <code>Window</code> et <code>WorkerGlobalScope</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Highres Time Level 3')}}</td>
      <td>{{Spec2('Highres Time Level 3')}}</td>
      <td>Ajout de la propriété <code>timeOrigin</code> à l'interface <code>Performance</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Frame Timing')}}</td>
      <td>{{Spec2('Frame Timing')}}</td>
      <td>Ajout de l'interface <code>PerformanceFrameTiming</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Navigation Timing')}}</td>
      <td>{{Spec2('Navigation Timing')}}</td>
      <td>Ajout des interfaces <code>PerformanceTiming</code> et <code>PerformanceNavigation</code>. Ajout des propriétés <code>timing</code> et <code>navigation</code> à l'interface <code>Performance</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Navigation Timing Level 2')}}</td>
      <td>{{Spec2('Navigation Timing Level 2')}}</td>
      <td>Ajout de l'interface <code>PerformanceNavigationTiming</code>. Rend obsolète l'interface <code>PerformanceTiming</code>, l'interface <code>PerformanceNavigation</code>, ainsi que les propriétés <code>timing</code> et <code>navigation</code> à l'interface <code>Performance</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline')}}</td>
      <td>{{Spec2('Performance Timeline')}}</td>
      <td>Ajout de l'interface <code>PerformanceEntry</code>, du type <code>PerformanceEntryList</code>, ainsi que les méthodes <code>getEntries()</code>, <code>getEntriesByType()</code>, et <code>getEntriesByName()</code> sur l'interface <code>Performance</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Performance Timeline Level 2')}}</td>
      <td>{{Spec2('Performance Timeline Level 2')}}</td>
      <td>Ajout d'un sérialiseur à l'interface <code>PerformanceEntry</code> ainsi que l'ajout de l'interface <code>PerformanceObserver</code> et du rappel (« callback »).</td>
    </tr>
    <tr>
      <td>{{SpecName('Resource Timing')}}</td>
      <td>{{Spec2('Resource Timing')}}</td>
      <td>Ajout de l'interface <code>PerformanceResourceTiming</code>. Ajout de la méthode <code>clearResourceTiming()</code>, la méthode <code>setResourceTimingBufferSize()</code> et du gestionnaire d'événements <code>onresourcetimingbufferfull</code> à l'interface <code>Performance</code>. Ajout de l'en-tête de réponse <code>Timing-Allow-Origin</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Resource Timing 2')}}</td>
      <td>{{Spec2('Resource Timing 2')}}</td>
      <td>Ajout des propriétés <code>nextHopProtocol</code>, <code>workerStart</code>, <code>transferSize</code>, <code>encodedBodySize</code> et <code>decodedBodySize</code> à l'interface <code>PerformanceResourceTiming</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('Resource Timing 3')}}</td>
      <td>{{Spec2('Resource Timing 3')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('User Timing')}}</td>
      <td>{{Spec2('User Timing')}}</td>
      <td>Ajout des méthodes <code>mark()</code>, <code>clearMarks()</code>, <code>measure()</code> et <code>clearMeasures()</code> à l'interface <code>Performance</code>. Ajout des interfaces <code>PerformanceMark</code> et <code>PeformanceMeasure</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName('User Timing Level 2')}}</td>
      <td>{{Spec2('User Timing Level 2')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="Implementation_status">État de l'implémentation'</h2>

<p>Comme le montre le tableau <a href="/fr/docs/Web/API/Performance#browser_compatibility">Compatibilité des navigateurs</a> de l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>, la plupart de ces interfaces sont largement implémentées par les navigateurs de bureau.</p>

<p>Pour tester le support de votre navigateur pour l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>, exécutez l'application <code><a href="https://mdn.github.io/web-performance/perf-api-support.html">perf-api-support</a></code>.</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Performance_API/Using_the_Performance_API">Utilisation de l'API <code>Performance</code></a></li>
  <li><a href="https://w3c.github.io/perf-timing-primer/">Une introduction aux API de chronométrage des performances du Web</a></li>
</ul>
