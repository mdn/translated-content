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
{{DefaultAPISidebar("High Resolution Time")}}

La norme [High Resolution Time](https://www.w3.org/TR/hr-time/) définit l'interface [`Performance`](/fr/docs/Web/API/Performance) qui prend en charge les mesures de latence côté client au sein des applications. Les interfaces [`Performance`](/fr/docs/Web/API/Performance) sont considérées comme étant à _haute résolution_, car elles sont précises au millième de milliseconde (sous réserve de contraintes matérielles ou logicielles).

Les interfaces prennent en charge un certain nombre de cas d'utilisation, notamment le calcul des taux de trame (potentiellement important dans les animations) et l'évaluation comparative (comme le temps de chargement d'une ressource).

Comme l'_horloge système_ d'une plateforme est sujette à divers _décalages_ (comme les ajustements NTP), les interfaces prennent en charge une _horloge monotone_, c'est-à-dire une horloge toujours croissante. À ce titre, l'API [`Performance`](/fr/docs/Web/API/Performance) définit un type [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) plutôt que d'utiliser l'interface {{jsxref("Date.now", "Date.now()")}}.

## DOMHighResTimeStamp

Le type [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp), comme son nom l'indique, représente un point temporel de haute résolution. Ce type est un `double` et est utilisé par les interfaces de performance. La valeur peut être un point discret dans le temps ou la différence de temps entre deux points discrets dans le temps.

L'unité de [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) est la milliseconde et doit être précise à 5 µs (microsecondes). Toutefois, si le navigateur n'est pas en mesure de fournir une valeur temporelle précise à 5 microsecondes (en raison, par exemple, de contraintes matérielles ou logicielles), le navigateur peut représenter la valeur comme un temps en millisecondes précis à la milliseconde près.

## Méthodes

L'interface [`Performance`](/fr/docs/Web/API/Performance) possède deux méthodes. La méthode [`now()`](/fr/docs/Web/API/Performance/now) renvoie un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) dont la valeur dépend de [`navigationStart`](/fr/docs/Web/API/PerformanceTiming/navigationStart) et du contexte. Si le contexte est une fenêtre, la valeur est l'heure de création du contexte du navigateur et si le contexte est un [`Worker`](/fr/docs/Web/API/Worker), la valeur est l'heure de création du worker.

La méthode [`toJSON()`](/fr/docs/Web/API/Performance/toJSON) renvoie une sérialisation de l'objet [`Performance`](/fr/docs/Web/API/Performance), pour les attributs qui peuvent être sérialisés.

## Propriétés

L'interface [`Performance`](/fr/docs/Web/API/Performance) possède deux propriétés. La propriété [`timing`](/fr/docs/Web/API/Performance/timing) {{deprecated_inline}} renvoie un objet [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) contenant des informations de performance liées à la latence, telles que l'heure de début de navigation, les heures de début et de fin des redirections, les heures de début et de fin des réponses, etc.

La propriété [`navigation`](/fr/docs/Web/API/Performance/navigation) {{deprecated_inline}} renvoie un objet [`PerformanceNavigation`](/fr/docs/Web/API/PerformanceNavigation) représentant le type de navigation qui se produit dans le contexte de navigation donné, comme la page vers laquelle on a navigué depuis l'historique, la page vers laquelle on a navigué en suivant un lien, etc.

## Interfaces

- [`Performance`](/fr/docs/Web/API/Performance)
  - : Fournit des méthodes et des propriétés contenant des informations sur les performances liées au temps pour la page donnée.
- [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry)
  - : Fournit des méthodes et des propriétés pour encapsuler une seule mesure de performance qui fait partie de la chronologie des performances.
- [`PerformanceFrameTiming`](/fr/docs/Web/API/PerformanceFrameTiming)
  - : Fournit des méthodes et des propriétés contenant des données de synchronisation de trame sur la boucle d'événements du navigateur.
- [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark)
  - : Une interface abstraite pour les [entrées de performance](/fr/docs/Web/API/PerformanceEntry) avec un [type d'entrée](/fr/docs/Web/API/PerformanceEntry/entryType) de « `mark` ». Les entrées de ce type sont créées en appelant [`performance.mark()`](/fr/docs/Web/API/Performance/mark) pour ajouter un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) (un marqueur) à la chronologie des performances du navigateur.
- [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure)
  - : Une interface abstraite pour les [entrées de performance](/fr/docs/Web/API/PerformanceEntry) avec un [type d'entrée](/fr/docs/Web/API/PerformanceEntry/entryType) de « `measure` ». Les entrées de ce type sont créées en appelant [`performance.measure()`](/fr/docs/Web/API/Performance/measure) pour ajouter un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) (une mesure) entre deux marqueurs à la chronologie des performances du navigateur.
- [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming)
  - : Fournit des méthodes et des propriétés pour stocker et récupérer [les horodatages haute résolution](/fr/docs/Web/API/DOMHighResTimeStamp) ou des métriques concernant les événements de navigation de document du navigateur.
- [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver)
  - : Fournit des méthodes et des propriétés utilisées pour observer les événements de mesure des performances et être informé des nouvelles [entrées de performance](/fr/docs/Web/API/PerformanceEntry) lorsqu'elles sont enregistrées dans la chronologie des performances du navigateur.
- [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)
  - : Fournit des méthodes et des propriétés permettant de récupérer et d'analyser des données détaillées de synchronisation du réseau concernant le chargement des ressources d'une application.

## Spécifications

| Spécification                                                | Statut                                                   | Commentaire                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Highres Time')}}                         | {{Spec2('Highres Time')}}                         | Définition initiale.                                                                                                                                                                                                                                                                     |
| {{SpecName('Highres Time Level 2')}}             | {{Spec2('Highres Time Level 2')}}             | Ajout de l'attribut `performance` sur `Window` et `WorkerGlobalScope`.                                                                                                                                                                                                                   |
| {{SpecName('Highres Time Level 3')}}             | {{Spec2('Highres Time Level 3')}}             | Ajout de la propriété `timeOrigin` à l'interface `Performance`.                                                                                                                                                                                                                          |
| {{SpecName('Frame Timing')}}                         | {{Spec2('Frame Timing')}}                         | Ajout de l'interface `PerformanceFrameTiming`.                                                                                                                                                                                                                                           |
| {{SpecName('Navigation Timing')}}                 | {{Spec2('Navigation Timing')}}                 | Ajout des interfaces `PerformanceTiming` et `PerformanceNavigation`. Ajout des propriétés `timing` et `navigation` à l'interface `Performance`.                                                                                                                                          |
| {{SpecName('Navigation Timing Level 2')}}     | {{Spec2('Navigation Timing Level 2')}}     | Ajout de l'interface `PerformanceNavigationTiming`. Rend obsolète l'interface `PerformanceTiming`, l'interface `PerformanceNavigation`, ainsi que les propriétés `timing` et `navigation` à l'interface `Performance`.                                                                   |
| {{SpecName('Performance Timeline')}}             | {{Spec2('Performance Timeline')}}             | Ajout de l'interface `PerformanceEntry`, du type `PerformanceEntryList`, ainsi que les méthodes `getEntries()`, `getEntriesByType()`, et `getEntriesByName()` sur l'interface `Performance`.                                                                                             |
| {{SpecName('Performance Timeline Level 2')}} | {{Spec2('Performance Timeline Level 2')}} | Ajout d'un sérialiseur à l'interface `PerformanceEntry` ainsi que l'ajout de l'interface `PerformanceObserver` et du rappel (« callback »).                                                                                                                                              |
| {{SpecName('Resource Timing')}}                     | {{Spec2('Resource Timing')}}                     | Ajout de l'interface `PerformanceResourceTiming`. Ajout de la méthode `clearResourceTiming()`, la méthode `setResourceTimingBufferSize()` et du gestionnaire d'événements `onresourcetimingbufferfull` à l'interface `Performance`. Ajout de l'en-tête de réponse `Timing-Allow-Origin`. |
| {{SpecName('Resource Timing 2')}}                 | {{Spec2('Resource Timing 2')}}                 | Ajout des propriétés `nextHopProtocol`, `workerStart`, `transferSize`, `encodedBodySize` et `decodedBodySize` à l'interface `PerformanceResourceTiming`.                                                                                                                                 |
| {{SpecName('Resource Timing 3')}}                 | {{Spec2('Resource Timing 3')}}                 |                                                                                                                                                                                                                                                                                          |
| {{SpecName('User Timing')}}                         | {{Spec2('User Timing')}}                         | Ajout des méthodes `mark()`, `clearMarks()`, `measure()` et `clearMeasures()` à l'interface `Performance`. Ajout des interfaces `PerformanceMark` et `PeformanceMeasure`.                                                                                                                |
| {{SpecName('User Timing Level 2')}}             | {{Spec2('User Timing Level 2')}}             |                                                                                                                                                                                                                                                                                          |

## État de l'implémentation'

Comme le montre le tableau [Compatibilité des navigateurs](/fr/docs/Web/API/Performance#browser_compatibility) de l'interface [`Performance`](/fr/docs/Web/API/Performance), la plupart de ces interfaces sont largement implémentées par les navigateurs de bureau.

Pour tester le support de votre navigateur pour l'interface [`Performance`](/fr/docs/Web/API/Performance), exécutez l'application [`perf-api-support`](https://mdn.github.io/web-performance/perf-api-support.html).

## Voir aussi

- [Utilisation de l'API `Performance`](/fr/docs/Web/API/Performance_API/Using_the_Performance_API)
- [Une introduction aux API de chronométrage des performances du Web](https://w3c.github.io/perf-timing-primer/)
