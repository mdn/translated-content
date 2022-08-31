---
title: PerformanceFrameTiming
slug: orphaned/Web/API/PerformanceFrameTiming
tags:
  - API
  - Frame Timing API
  - Interface
  - Performance Timeline API
  - PerformanceFrameTiming
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceFrameTiming
original_slug: Web/API/PerformanceFrameTiming
---
{{SeeCompatTable}}{{APIRef("Frame Timing API")}}

**`PerformanceFrameTiming`** est une interface _abstraite_ qui fournit des données d'horodatage de « _frame_ » pour la boucle d'événements du navigateur. Une « _frame_ » représente la quantité de travail qu'un navigateur effectue dans [une itération de la boucle d'événements](https://html.spec.whatwg.org/multipage/webappapis.html#processing-model-8), comme le traitement des événements DOM, le redimensionnement, le défilement, le rendu, les animations CSS, etc. Un _frame rate_ de 60fps (images par seconde) pour un taux de rafraîchissement de 60Hz est l'objectif pour une expérience utilisateur réactive. Cela signifie que le navigateur doit traiter une image en environ 16,7 ms.

Une application peut enregistrer un [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour une « `frame` » de [l'entrée de performance](/fr/docs/Web/API/PerformanceEntry) et l'observateur peut récupérer des données sur la durée de chaque événement. Ces informations peuvent être utilisées pour aider à identifier les choses qui consomment trop de temps pour offrir une bonne expérience utilisateur.

{{InheritanceDiagram}}

## Propriétés

Cette interface n'a pas de propriétés mais elle étend les propriétés de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) suivantes (c'est-à-dire quand le type de [l'entrée de performance](/fr/docs/Web/API/PerformanceEntry) vaut « `frame` ») en restreignant les propriétés comme suit :

- [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType)
  - : Retourne « `frame` ».
- [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry/name)
  - : Renvoie l'adresse du [document](https://dom.spec.whatwg.org/#concept-document-url).
- [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime)
  - : Retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) (moment) où le cadre a été lancé.
- [`PerformanceEntry.duration`](/fr/docs/Web/API/PerformanceEntry/duration)
  - : Retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) indiquant la différence entre le `startTime` de deux images successives.

## Méthodes

Cette interface n'a pas de méthodes.

## Exemple

Voir l'exemple dans l'article [Utilisation de l'API Frame Timing](/fr/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API).

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('Frame Timing', '#performanceframetiming-interface', 'PerformanceFrameTiming')}} | {{Spec2('Frame Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceFrameTiming")}}

## Voir aussi

- [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver)
- [Frame Rate (Firefox Performance Tool)](/fr/docs/Tools/Performance/Frame_rate)
- [L'API _Frame Timing_](/fr/docs/Web/API/Frame_Timing)
- [Utiliser l'API Frame Timing](/fr/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)
