---
title: PerformanceMark
slug: Web/API/PerformanceMark
---

{{APIRef("User Timing API")}}

**`PerformanceMark`** est une interface _abstraite_ pour les objets [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) avec un [`entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) « `mark` ».Les entrées de ce type sont créées en appelant [`performance.mark()`](/fr/docs/Web/API/Performance/mark) pour ajouter un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) _nommé_ (le _marqueur_) à la _chronologie des performances_ du navigateur.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Propriétés

Cette interface n'a pas de propriété mais elle étend les propriétés de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) suivantes en restreignant les propriétés comme suit :

- [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType)
  - : Retourne « `mark` ».
- [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry/name)
  - : Retourne le nom donné au marqueur lorsqu'il a été créé via un appel de [`performance.mark()`](/fr/docs/Web/API/Performance/mark).
- [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime)
  - : Retourne le [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) à partir du moment où [`performance.mark()`](/fr/docs/Web/API/Performance/mark) a été appelé.
- [`PerformanceEntry.duration`](/fr/docs/Web/API/PerformanceEntry/duration)
  - : Retourne « `0` ». (Un marqueur n'a pas de _durée_.)

## Méthodes

Cette interface n'a pas de méthodes.

## Exemple

Voir l'exemple dans [Utilisation de l'API User Timing](/fr/docs/Web/API/User_Timing_API/Using_the_User_Timing_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [API _User Timing_](/fr/docs/Web/API/User_Timing_API)
- [Utilisation de l'API _User Timing_](/fr/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
