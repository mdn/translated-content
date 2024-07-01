---
title: API Performance
slug: Web/API/Performance_API
l10n:
  sourceCommit: 2b649ca83589bf827d99db5d450c0c65a9de7a24
---

{{DefaultAPISidebar("Performance API")}}

L'API Performance est un ensemble de standards utilisés pour mesurer les performances des applications web.

## Concepts et utilisation

Si on veut s'assurer que les applications web sont rapides, il est important de mesurer et d'analyser différentes métriques relatives aux performances. L'API Performance fournit des métriques natives et l'outillage pour ajouter des mesures spécifiques à la frise chronologique des performances du navigateur. La frise chronologique des performances contient des horodatages à haute précision et peut être affichée dans les outils de développement. Les données correspondantes peuvent aussi être envoyées à des outils d'analyse externes pour enregistrer l'évolution des performances sur le temps.

Chaque métrique de performance est représentée par un objet [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry). Une entrée de performance possède un nom (`name`), une durée (`duration`), un horodatage de début (`startTime`) et un type (`type`). Toutes les métriques de performance étendent l'interface `PerformanceEntry` en la spécialisant.

La plupart des entrées de performance sont enregistrées sans que vous ayez à faire quoi que ce soit. Elles sont disponibles via la méthode [`Performance.getEntries()`](/fr/docs/Web/API/Performance/getEntries) ou (encore mieux) grâce aux instances de [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver). On a par exemple les entrées natives [`PerformanceEventTiming`](/fr/docs/Web/API/PerformanceEventTiming) qui sont enregistrées pour les évènements dont la durée dépasse un seuil donné. L'API Performance permet aussi de définir et d'enregistrer des évènements sur mesure à l'aide des interfaces [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark) et [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure).

L'interface [`Performance`](/fr/docs/Web/API/Performance) est disponible sur chaque contexte global à l'aide de [`self.performance`](/fr/docs/Web/API/performance_property) et permet d'ajouter des entrées de performance spécifiques, de récupérer ou de purger les entrées de performance.

L'interface [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) permet d'écouter les évènements liés à l'enregistrement des différents types d'entrée de performance.

Pour plus d'informations sur les concepts de cette API, voir [la section sur les guides de l'API Performance](#guides) ci-après.

![Diagramme UML des interfaces de l'API Performance](diagram.svg)

## Référence

L'API Performance définit les interfaces suivantes&nbsp;:

- [`EventCounts`](/fr/docs/Web/API/EventCounts)
  - : Une carte de correspondance en lecture seule, renvoyée par la propriété [`performance.eventCounts`](/fr/docs/Web/API/Performance/eventCounts), qui contient le nombre d'évènements émis, répartis par type d'évènement.
- [`LargestContentfulPaint`](/fr/docs/Web/API/LargestContentfulPaint)
  - : Mesure la durée de rendu du plus grand bloc de texte ou de la plus grande image visible au sein de la zone d'affichage (<i lang="en">viewport</i>) écoulée depuis le début du chargement de la page.
- [`LayoutShift`](/fr/docs/Web/API/LayoutShift)
  - : Fournit des indications sur la stabilité de la disposition d'une page selon les mouvements des éléments de la page.
- [`LayoutShiftAttribution`](/fr/docs/Web/API/LayoutShiftAttribution)
  - : Fournit des informations de débogage pour les éléments qui subissent un décalage sur la page.
- [`Performance`](/fr/docs/Web/API/Performance)
  - : L'interface principale permettant d'accéder aux mesures de performance. Elle est disponible dans les contextes des fenêtres et des <i lang="en">workers</i> via [`self.performance`](/fr/docs/Web/API/performance_property).
- [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming)
  - : Mesure les horodatages pour le rendu d'éléments spécifiques.
- [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry)
  - : Une entrée de la frise chronologique des performances qui encapsule une seule métrique de performance. Toutes les métriques de performance héritent de cette interface.
- [`PerformanceEventTiming`](/fr/docs/Web/API/PerformanceEventTiming)
  - : Mesure la latence des évènements (et permet entre autres de mesurer le <i lang="en">first input delay</i> (ou FID) qui correspond à la durée entre l'interaction de la personne avec l'application et le moment où le navigateur peut réagir).
- [`PerformanceLongTaskTiming`](/fr/docs/Web/API/PerformanceLongTaskTiming)
  - : Détecte les tâches longues qui monopolisent le rendu et empêchent l'exécution d'autres tâches.
- [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark)
  - : Un marqueur spécifique pour votre entrée sur mesure dans la frise chronologique des performances.
- [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure)
  - : Permet une mesure spécifique entre deux entrées de performance.
- [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming)
  - : Mesure les évènements de navigation dans le document, par exemple la durée nécessaire au chargement du document.
- [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver)
  - : Écoute les nouvelles entrées de performance lorsqu'elles sont enregistrées sur la frise chronologique des performances du navigateur.
- [`PerformanceObserverEntryList`](/fr/docs/Web/API/PerformanceObserverEntryList)
  - : Énumère les entrées observées pour un observateur de performance (`PerformanceObserver`) donné.
- [`PerformancePaintTiming`](/fr/docs/Web/API/PerformancePaintTiming)
  - : Mesure les opérations de rendu qui ont lieu pendant la construction de la page web.
- [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)
  - : Mesure les métriques liées aux chargements réseau comme les horodatages de début et de fin pour les redirections, les récupérations de ressources, les requêtes DNS, les appels réseau, etc.
- [`PerformanceServerTiming`](/fr/docs/Web/API/PerformanceServerTiming)
  - : Expose les métriques du serveur qui sont envoyées dans la réponse via l'en-tête [`Server-Timing`](/fr/docs/Web/HTTP/Headers/Server-Timing).
- [`TaskAttributionTiming`](/fr/docs/Web/API/TaskAttributionTiming)
  - : Identifie le type de tâche et le conteneur responsable de la tâche longue.
- [`VisibilityStateEntry`](/fr/docs/Web/API/VisibilityStateEntry)
  - : Le chronométrage relatif au changement d'état de visibilité de la page (par exemple quand un onglet passe du premier plan à l'arrière-plan et vice versa).

## Guides

Les guides qui suivent vous permettront de comprendre les concepts fondamentaux de l'API Performance tout en fournissant un aperçu de son potentiel&nbsp;:

- [Les données de performance](/fr/docs/Web/API/Performance_API/Performance_data)
  - : Collecter, récupérer et manipuler les données de performance.
- [Chronométrage haute précision](/fr/docs/Web/API/Performance_API/High_precision_timing)
  - : Mesurer à l'aide d'horodatage haute précision et d'horloges monotones.
- [Chronométrage pour la récupération des ressources](/fr/docs/Web/API/Performance_API/Resource_timing)
  - : Mesurer les performances réseau pour la récupération des ressources telles que les images, les fichiers CSS ou JavaScript.
- [Chronométrage de la navigation](/fr/docs/Web/API/Performance_API/Navigation_timing)
  - : Mesurer les performances relatives à la navigation dans un document.
- [Chronométrage applicatif](/fr/docs/Web/API/Performance_API/User_timing)
  - : Mesurer et enregistrer les données de performance spécifiques à votre application.
- [Chronométrage côté serveur](/fr/docs/Web/API/Performance_API/Server_timing)
  - : Récupérer les métriques côté serveur.

<!-- Voir https://github.com/openwebdocs/project/issues/157 pour les parties manquantes au moment de cette mise à jour (2023-07-31). -->

## Spécifications

{{Specifications}}

## Voir aussi

- [La gestion des performances sur le Web](/fr/docs/Web/Performance)
- [Apprendre&nbsp;: les performances sur le Web](/fr/docs/Learn/Performance)
