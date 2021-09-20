---
title: Performance Timeline API
slug: Web/API/Performance_Timeline
tags:
  - API
  - Guide
  - Aperçu
  - Performance
  - Performance Web
  - Overview
  - Web Performance
translation_of: Web/API/Performance_Timeline
---
<div>{{DefaultAPISidebar("Performance Timeline API")}}</div>

<p>L'API <strong>Performance Timeline</strong> définit des extensions de l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> pour prendre en charge les mesures de latence côté client dans les applications. Ces extensions fournissent des interfaces permettant de récupérer les <a href="/fr/docs/Web/API/PerformanceEntry">paramètres de saisie des performances</a> en fonction de critères de filtrage spécifiques.</p>

<p>La norme comprend également des interfaces qui permettent à une application de définir des retours (« callbacks ») d'<em><a href="#performance_observers">observateur des performances</a></em>, qui sont notifiés lorsque des événements de performance spécifiques sont ajoutés à la <em>chronologie des performances</em> du navigateur.</p>

<p>Ce document fournit un aperçu des interfaces de la norme. Pour plus de détails sur les interfaces, voir les pages de référence et <a href="/fr/docs/Web/API/Performance_Timeline/Using_Performance_Timeline">Utilisation de Performance Timeline</a>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Performance_extensions">Extensions de <code>Performance</code></h2>

<p>L'API Performance Timeline étend l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> avec trois méthodes qui fournissent différents mécanismes pour obtenir un ensemble d'<a href="/fr/docs/Web/API/PerformanceEntry">enregistrements des performances (métriques)</a>, en fonction des critères de filtrage spécifiés. Ces méthodes sont les suivantes :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/Performance/getEntries"><code>getEntries()</code></a></dt>
  <dd>Renvoie toutes les <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performances</a> enregistrées ou, éventuellement, les entrées basées sur les <a href="/fr/docs/Web/API/PerformanceEntry/name"><code>name</code></a>, <a href="/fr/docs/Web/API/PerformanceEntry">type de performance</a> et/ou les <a href="/fr/docs/Web/API/PerformanceResourceTiming/initiatorType"><code>initiatorType</code></a> spécifiés. (tel qu'un élément HTML).</dd>
  <dt><a href="/fr/docs/Web/API/Performance/getEntriesByName"><code>getEntriesByName()</code></a></dt>
  <dd>Renvoie les <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performances</a> enregistrées en fonction du <a href="/fr/docs/Web/API/PerformanceEntry/name"><code>name</code></a> spécifié et éventuellement du <a href="/fr/docs/Web/API/PerformanceEntry">type de performance</a>.</dd>
  <dt><a href="/fr/docs/Web/API/Performance/getEntriesByType"><code>getEntriesByType()</code></a></dt>
  <dd>Renvoie les <a href="/fr/docs/Web/API/PerformanceEntry">entrées de perfornances</a> enregistrées en fonction des <a href="/fr/docs/Web/API/PerformanceEntry">types de performances</a> spécifiés.</dd>
</dl>

<h2 id="PerformanceEntry_interface">L'interface <code>PerformanceEntry</code></h2>

<p>L'interface <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a> encapsule une unique <em>entrée de performance</em>, c'est-à-dire un point de donnée ou une métrique située sur <em>la chronologie des performances</em>. Cette interface possède quatre propriétés ; ces propriétés sont étendues (avec des contraintes supplémentaires) par d'autres interfaces (telles que <a href="/fr/docs/Web/API/PerformanceMark"><code>PerformanceMark</code></a>) :</p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/name"><code>name</code></a></dt>
  <dd>Le nom de l'entrée de performance lorsque la métrique a été créée.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/entryType"><code>entryType</code></a></dt>
  <dd>Le type de mesure de performance (par exemple, « <code>mark</code> »).</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/startTime"><code>startTime</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp">horodatage haute résolution</a> représentant l'heure de départ de l'entrée de performance.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceEntry/duration"><code>duration</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/API/DOMHighResTimeStamp">horodatage haute résolution</a> représentant la valeur temporelle de la durée de l'événement de performance (certains <a href="/fr/docs/Web/API/PerformanceEntry/entryType">types d'entrée</a> de performance n'ont pas de concept de <em>durée</em> et cette valeur est fixée à <code>'0'</code> pour ces types).</dd>
</dl>

<p>Cette interface comprend une méthode <a href="/fr/docs/Web/API/PerformanceEntry/toJSON"><code>toJSON()</code></a> qui renvoie la sérialisation de l'objet <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a>. La sérialisation varie selon le <a href="/fr/docs/Web/API/PerformanceEntry/entryType">type de performance</a>.</p>

<h2 id="Performance_observers">Observateurs des performances</h2>

<p>{{SeeCompatTable}}</p>

<p>Les interfaces d'<em>observateurs de performance</em> permettent à une application d'enregistrer un <em>observateur</em> pour des types d'événements de performance spécifiques. Lorsqu'un de ces types d'événements est enregistré, l'application est <em>notifiée</em> de l'événement via la fonction de rappel de l'observateur qui a été spécifiée lors de la création de l'observateur.</p>

<p>Lorsque la fonction de rappel de l'observateur (<i>callback</i>) est invoquée, les paramètres incluent une <em><a href="/fr/docs/Web/API/PerformanceObserverEntryList">liste des entrées de l'observateur de performance</a></em> qui contient uniquement des <a href="/fr/docs/Web/API/PerformanceEntry">entrées de performance</a> <em>observées</em>. C'est-à-dire que la liste contient uniquement des entrées pour les types d'événements qui ont été spécifiés lorsque la méthode <a href="/fr/docs/Web/API/PerformanceObserver/observe"><code>observe()</code></a> de l'observateur a été invoquée. L'interface <a href="/fr/docs/Web/API/PerformanceObserverEntryList"><code>PerformanceObserverEntryList</code></a> possède les trois mêmes méthodes <code>getEntries*()</code> que l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>. Cependant, notez qu'il y a une différence clé avec ces méthodes ; les versions <a href="/fr/docs/Web/API/PerformanceObserverEntryList"><code>PerformanceObserverEntryList</code></a> sont utilisées pour récupérer les entrées de performance <em>observées</em> dans le rappel de l'observateur.</p>

<p>Outre la méthode <a href="/fr/docs/Web/API/PerformanceObserver/observe"><code>observe()</code></a> de l'interface <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a> (qui sert à enregistrer les <a href="/fr/docs/Web/API/PerformanceEntry">types d'entrées</a> pour <em>observer</em>), l'interface <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a> possède également une méthode <a href="/fr/docs/Web/API/PerformanceObserver/disconnect"><code>disconnect()</code></a> qui empêche un observateur de recevoir d'autres événements.</p>

<div class="note">
  <p><strong>Note :</strong> Les observateurs de performance ont été ajoutés au <code>Niveau 2</code> de la norme et n'ont pas été implémentés à grande échelle.</p>
</div>

<h2 id="Implementation_status">État de la mise en œuvre</h2>

<p>Un résumé de l'état de mise en œuvre des interfaces est fourni ci-dessous, avec un lien vers des informations plus détaillées.</p>

<ul>
  <li><strong>Les extensions de l'interface <code>Performance</code> :</strong> Comme le montre le tableau de <a href="/fr/docs/Web/API/Performance#browser_compatibility">Compatibilité des navigateurs</a> de l'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a>, la plupart de ces interfaces sont largement prises en charge par les navigateurs de bureau et bénéficient d'un support moindre sur les appareils mobiles.</li>
  <li><strong><code>PerformanceEntry</code> :</strong> Comme le montre le tableau de <a href="/fr/docs/Web/API/PerformanceEntry#browser_compatibility">Compatibilité des navigateurs</a> de l'interface <a href="/fr/docs/Web/API/PerformanceEntry"><code>PerformanceEntry</code></a>, la plupart de ces interfaces sont largement prises en charge par les navigateurs de bureau et le sont moins sur les appareils mobiles.</li>
  <li><strong><code>PerformanceObserver</code> {{experimental_inline}} :</strong> Comme le montre le tableau de <a href="/fr/docs/Web/API/PerformanceObserver#browser_compatibility">Compatibilité des navigateurs</a> de l'interface <a href="/fr/docs/Web/API/PerformanceObserver"><code>PerformanceObserver</code></a>, cette interface n'est pas implémentée par les navigateurs.</li>
</ul>

<p>Pour tester la prise en charge de ces interfaces par votre navigateur, vous pouvez exécuter l'application <code><a href="https://mdn.github.io/web-performance/perf-api-support.html">perf-api-support</a></code>.</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="https://siusin.github.io/perf-timing-primer/">Une introduction aux API de chronométrage des performances du Web</a> <small>(en)</small></li>
</ul>
