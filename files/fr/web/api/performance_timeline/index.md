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
{{DefaultAPISidebar("Performance Timeline API")}}

L'API **Performance Timeline** définit des extensions de l'interface [`Performance`](/fr/docs/Web/API/Performance) pour prendre en charge les mesures de latence côté client dans les applications. Ces extensions fournissent des interfaces permettant de récupérer les [paramètres de saisie des performances](/fr/docs/Web/API/PerformanceEntry) en fonction de critères de filtrage spécifiques.

La norme comprend également des interfaces qui permettent à une application de définir des retours (« callbacks ») d'_[observateur des performances](#performance_observers)_, qui sont notifiés lorsque des événements de performance spécifiques sont ajoutés à la _chronologie des performances_ du navigateur.

Ce document fournit un aperçu des interfaces de la norme. Pour plus de détails sur les interfaces, voir les pages de référence et [Utilisation de Performance Timeline](/fr/docs/Web/API/Performance_Timeline/Using_Performance_Timeline).

{{AvailableInWorkers}}

## Extensions de `Performance`

L'API Performance Timeline étend l'interface [`Performance`](/fr/docs/Web/API/Performance) avec trois méthodes qui fournissent différents mécanismes pour obtenir un ensemble d'[enregistrements des performances (métriques)](/fr/docs/Web/API/PerformanceEntry), en fonction des critères de filtrage spécifiés. Ces méthodes sont les suivantes :

- [`getEntries()`](/fr/docs/Web/API/Performance/getEntries)
  - : Renvoie toutes les [entrées de performances](/fr/docs/Web/API/PerformanceEntry) enregistrées ou, éventuellement, les entrées basées sur les [`name`](/fr/docs/Web/API/PerformanceEntry/name), [type de performance](/fr/docs/Web/API/PerformanceEntry) et/ou les [`initiatorType`](/fr/docs/Web/API/PerformanceResourceTiming/initiatorType) spécifiés. (tel qu'un élément HTML).
- [`getEntriesByName()`](/fr/docs/Web/API/Performance/getEntriesByName)
  - : Renvoie les [entrées de performances](/fr/docs/Web/API/PerformanceEntry) enregistrées en fonction du [`name`](/fr/docs/Web/API/PerformanceEntry/name) spécifié et éventuellement du [type de performance](/fr/docs/Web/API/PerformanceEntry).
- [`getEntriesByType()`](/fr/docs/Web/API/Performance/getEntriesByType)
  - : Renvoie les [entrées de perfornances](/fr/docs/Web/API/PerformanceEntry) enregistrées en fonction des [types de performances](/fr/docs/Web/API/PerformanceEntry) spécifiés.

## L'interface `PerformanceEntry`

L'interface [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) encapsule une unique _entrée de performance_, c'est-à-dire un point de donnée ou une métrique située sur _la chronologie des performances_. Cette interface possède quatre propriétés ; ces propriétés sont étendues (avec des contraintes supplémentaires) par d'autres interfaces (telles que [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark)) :

- [`name`](/fr/docs/Web/API/PerformanceEntry/name)
  - : Le nom de l'entrée de performance lorsque la métrique a été créée.
- [`entryType`](/fr/docs/Web/API/PerformanceEntry/entryType)
  - : Le type de mesure de performance (par exemple, « `mark` »).
- [`startTime`](/fr/docs/Web/API/PerformanceEntry/startTime)
  - : Un [horodatage haute résolution](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure de départ de l'entrée de performance.
- [`duration`](/fr/docs/Web/API/PerformanceEntry/duration)
  - : Un [horodatage haute résolution](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle de la durée de l'événement de performance (certains [types d'entrée](/fr/docs/Web/API/PerformanceEntry/entryType) de performance n'ont pas de concept de _durée_ et cette valeur est fixée à `'0'` pour ces types).

Cette interface comprend une méthode [`toJSON()`](/fr/docs/Web/API/PerformanceEntry/toJSON) qui renvoie la sérialisation de l'objet [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry). La sérialisation varie selon le [type de performance](/fr/docs/Web/API/PerformanceEntry/entryType).

## Observateurs des performances

{{SeeCompatTable}}

Les interfaces d'_observateurs de performance_ permettent à une application d'enregistrer un _observateur_ pour des types d'événements de performance spécifiques. Lorsqu'un de ces types d'événements est enregistré, l'application est _notifiée_ de l'événement via la fonction de rappel de l'observateur qui a été spécifiée lors de la création de l'observateur.

Lorsque la fonction de rappel de l'observateur (_callback_) est invoquée, les paramètres incluent une _[liste des entrées de l'observateur de performance](/fr/docs/Web/API/PerformanceObserverEntryList)_ qui contient uniquement des [entrées de performance](/fr/docs/Web/API/PerformanceEntry) _observées_. C'est-à-dire que la liste contient uniquement des entrées pour les types d'événements qui ont été spécifiés lorsque la méthode [`observe()`](/fr/docs/Web/API/PerformanceObserver/observe) de l'observateur a été invoquée. L'interface [`PerformanceObserverEntryList`](/fr/docs/Web/API/PerformanceObserverEntryList) possède les trois mêmes méthodes `getEntries*()` que l'interface [`Performance`](/fr/docs/Web/API/Performance). Cependant, notez qu'il y a une différence clé avec ces méthodes ; les versions [`PerformanceObserverEntryList`](/fr/docs/Web/API/PerformanceObserverEntryList) sont utilisées pour récupérer les entrées de performance _observées_ dans le rappel de l'observateur.

Outre la méthode [`observe()`](/fr/docs/Web/API/PerformanceObserver/observe) de l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) (qui sert à enregistrer les [types d'entrées](/fr/docs/Web/API/PerformanceEntry) pour _observer_), l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) possède également une méthode [`disconnect()`](/fr/docs/Web/API/PerformanceObserver/disconnect) qui empêche un observateur de recevoir d'autres événements.

> **Note :** Les observateurs de performance ont été ajoutés au `Niveau 2` de la norme et n'ont pas été implémentés à grande échelle.

## État de la mise en œuvre

Un résumé de l'état de mise en œuvre des interfaces est fourni ci-dessous, avec un lien vers des informations plus détaillées.

- **Les extensions de l'interface `Performance` :** Comme le montre le tableau de [Compatibilité des navigateurs](/fr/docs/Web/API/Performance#browser_compatibility) de l'interface [`Performance`](/fr/docs/Web/API/Performance), la plupart de ces interfaces sont largement prises en charge par les navigateurs de bureau et bénéficient d'un support moindre sur les appareils mobiles.
- **`PerformanceEntry` :** Comme le montre le tableau de [Compatibilité des navigateurs](/fr/docs/Web/API/PerformanceEntry#browser_compatibility) de l'interface [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry), la plupart de ces interfaces sont largement prises en charge par les navigateurs de bureau et le sont moins sur les appareils mobiles.
- **`PerformanceObserver` {{experimental_inline}} :** Comme le montre le tableau de [Compatibilité des navigateurs](/fr/docs/Web/API/PerformanceObserver#browser_compatibility) de l'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver), cette interface n'est pas implémentée par les navigateurs.

Pour tester la prise en charge de ces interfaces par votre navigateur, vous pouvez exécuter l'application [`perf-api-support`](https://mdn.github.io/web-performance/perf-api-support.html).

## Voir aussi

- [Une introduction aux API de chronométrage des performances du Web](https://siusin.github.io/perf-timing-primer/) (en)
