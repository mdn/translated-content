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
{{APIRef("Performance Timeline API")}}

L'objet **`PerformanceEntry`** encapsule une seule mesure de performance qui fait partie de la _chronologie de performance_. Une _entrée de performance_ peut être créée directement en faisant _[une marque](/fr/docs/Web/API/PerformanceMark)_ ou _[une mesure](/fr/docs/Web/API/PerformanceMeasure)_ (par exemple en appelant la méthode [`mark()`](/fr/docs/Web/API/Performance/mark)) à un point explicite d'une application. Les entrées de performance sont également créées de manière indirecte, par exemple en chargeant une ressource (telle qu'une image).

Les instances `PerformanceEntry` auront toujours l'un des sous-types suivants :

- [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure)
- [`PerformanceFrameTiming`](/fr/docs/Web/API/PerformanceFrameTiming)
- [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming)
- [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)
- [`PerformancePaintTiming`](/fr/docs/Web/API/PerformancePaintTiming)

{{AvailableInWorkers}}

## Propriétés

- [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry/name) {{readonlyInline}}
  - : Une valeur qui précise davantage la valeur renvoyée par la propriété [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType). La valeur des deux dépend du sous-type. Voir la page de la propriété pour les valeurs valides.
- [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) {{readonlyInline}}
  - : Une chaîne de caractère [`DOMString`](/fr/docs/Web/API/DOMString) représentant le type de mesure de performance comme, par exemple, "`mark`". Voir la page des propriétés pour les valeurs valides.
- [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime) {{readonlyInline}}
  - : Un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure de départ de la mesure de performance.
- [`PerformanceEntry.duration`](/fr/docs/Web/API/PerformanceEntry/duration) {{readonlyInline}}
  - : Un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle de la durée de l'événement de performance.

## Méthodes

- [`PerformanceEntry.toJSON()`](/fr/docs/Web/API/PerformanceEntry/toJSON)
  - : Renvoie une représentation JSON de l'objet `PerformanceEntry`.

## Exemple

L'exemple suivant vérifie toutes les propriétés `PerformanceEntry` pour voir si le navigateur les prend en charge et, le cas échéant, écrit leurs valeurs dans la console.

```js
function print_PerformanceEntries() {
  // Utilise getEntries() pour obtenir une liste de toutes les entrées de performance.
  let p = performance.getEntries();
  for (let i = 0; i < p.length; i++) {
    console.log("PerformanceEntry[" + i + "]");
    print_PerformanceEntry(p[i]);
  }
}
function print_PerformanceEntry(perfEntry) {
  let properties = ["name",
                    "entryType",
                    "startTime",
                    "duration"];

  for (let i = 0; i < properties.length; i++) {
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
```

## Spécifications

| Spécification                                                                                                            | Statut                                                   | Commentaire                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('Resource Timing 3')}}                                                                             | {{Spec2('Resource Timing 3')}}                 |                                                                                                                                                                                                        |
| {{SpecName('Resource Timing 2')}}                                                                             | {{Spec2('Resource Timing 2')}}                 |                                                                                                                                                                                                        |
| {{SpecName('Resource Timing')}}                                                                                 | {{Spec2('Resource Timing')}}                     | Ajoute l'interface [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming) et la valeur `resource` pour `entryType`.                                                                 |
| {{SpecName('Navigation Timing Level 2')}}                                                                 | {{Spec2('Navigation Timing Level 2')}}     |                                                                                                                                                                                                        |
| {{SpecName('Navigation Timing')}}                                                                             | {{Spec2('Navigation Timing')}}                 | Ajoute l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) et la valeur `navigation` pour `entryType`.                                                           |
| {{SpecName('User Timing Level 2')}}                                                                         | {{Spec2('User Timing Level 2')}}             |                                                                                                                                                                                                        |
| {{SpecName('User Timing')}}                                                                                     | {{Spec2('User Timing')}}                         | Ajoute les interfaces [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark) et [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure) ainsi que les valeurs `mark` et `measure` pour `entryType`. |
| {{SpecName('Frame Timing')}}                                                                                     | {{Spec2('Frame Timing')}}                         | Ajoute l'interface [`PerformanceFrameTiming`](/fr/docs/Web/API/PerformanceFrameTiming) et la valeur `frame` pour `entryType`.                                                                          |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry', 'PerformanceEntry')}} | {{Spec2('Performance Timeline Level 2')}} | Ajout de la méthode de sérialisation `toJSON()`.                                                                                                                                                       |
| {{SpecName('Performance Timeline', '#dom-performanceentry', 'PerformanceEntry')}}             | {{Spec2('Performance Timeline')}}             | Définition initiale.                                                                                                                                                                                   |

## Compatibilité des navigateurs

{{Compat("api.PerformanceEntry")}}
