---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
---

{{APIRef("User Timing API")}}

**`PerformanceMeasure`** est une interface _abstraite_ pour les objets [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) ayant un [`entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) « `measure` ». Les entrées de ce type sont créées en appelant [`measure()`](/fr/docs/Web/API/Performance/measure) pour ajouter un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) _nommé_ (la _mesure_) entre deux _marqueurs_ à la _chronologie des performances_ du navigateur.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Propriétés

Cette interface n'a pas de propriété mais elle étend les propriétés de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) suivantes en restreignant les propriétés comme suit :

- [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry.entryType)
  - : Retourne « `measure` ».
- [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry.name)
  - : Retourne le nom donné à la mesure lorsqu'elle a été créée via un appel à [`performance.measure()`](</fr/docs/Web/API/Performance/measure()>).
- [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry.startTime)
  - : Retourne un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) associé à la mesure indiquant le moment où [`performance.measure()`](</fr/docs/Web/API/Performance/measure()>) a été appelée.
- [`PerformanceEntry.duration`](/fr/docs/Web/API/PerformanceEntry.duration)
  - : Retourne un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) correspondant à la durée de la mesure (généralement, l'horodatage de fin de la mesure moins l'horodatage de début).

## Méthodes

Cette interface n'a pas de méthode.

## Exemple

Voir l'exemple dans : [Utilisation de l'API _User Timing_](/fr/docs/Web/API/User_Timing_API/Using_the_User_Timing_API).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [API _User Timing_](/fr/docs/Web/API/User_Timing_API)
- [Utilisation de l'API _User Timing_](/fr/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
