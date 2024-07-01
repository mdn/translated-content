---
title: PerformanceEntry.entryType
slug: Web/API/PerformanceEntry/entryType
---

{{APIRef("Performance Timeline API")}}

La propriété **`entryType`** renvoie un [`DOMString`](/fr/docs/Web/API/DOMString) représentant le type de mesure de performance tel que, par exemple, « `mark` ». Cette propriété est en lecture seule.

{{AvailableInWorkers}}

## Syntaxe

```js
var type = entry.entryType;
```

### Valeur de retour

La valeur de retour dépend du sous-type de l'objet `PerformanceEntry` et affecte la valeur de la propriété [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry/name) comme le montre le tableau ci-dessous.

### Noms des types d'entrée de performance

| Valeur                | Sous-type                                                                                                                                          | Type de propriété pour le nom             | Description de la valeur du nom.                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `element`             | [`PerformanceElementTiming`](/fr/docs/Web/API/PerformanceElementTiming)                                                                            | [`DOMString`](/fr/docs/Web/API/DOMString) | Rapporte le temps de chargement des éléments.                                                                 |
| `frame`, `navigation` | [`PerformanceFrameTiming`](/fr/docs/Web/API/PerformanceFrameTiming), [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) | [`URL`](/fr/docs/Web/API/URL)             | L'adresse du document.                                                                                        |
| `resource`            | [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)                                                                          | [`URL`](/fr/docs/Web/API/URL)             | L'URL résolue de la ressource demandée. Cette valeur ne change pas même si la demande est redirigée.          |
| `mark`                | [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark)                                                                                              | [`DOMString`](/fr/docs/Web/API/DOMString) | Le nom utilisé lorsque la marque a été créée en appelant [`mark()`](/fr/docs/Web/API/Performance/mark).       |
| `measure`             | [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure)                                                                                        | [`DOMString`](/fr/docs/Web/API/DOMString) | Le nom utilisé lorsque la mesure a été créée en appelant [`measure()`](/fr/docs/Web/API/Performance/measure). |
| `paint`               | [`PerformancePaintTiming`](/fr/docs/Web/API/PerformancePaintTiming)                                                                                | [`DOMString`](/fr/docs/Web/API/DOMString) | Soit `'first-paint'` ou `'first-contentful-paint'`.                                                           |
| `longtask`            | [`PerformanceLongTaskTiming`](/fr/docs/Web/API/PerformanceLongTaskTiming)                                                                          | [`DOMString`](/fr/docs/Web/API/DOMString) | Signale les cas de tâches longues.                                                                            |

## Exemple

L'exemple suivant montre l'utilisation de la propriété `entryType`.

```js
function run_PerformanceEntry() {
  // Vérifie le support des fonctionnalités avant de continuer
  if (performance.mark === undefined) {
    console.log("performance.mark n'est pas pris en charge");
    return;
  }

  // Crée une entrée de performance nommée "begin" via la méthode mark()
  performance.mark("begin");

  // Vérifie le type d'entrée de toutes les entrées "begin".
  let entriesNamedBegin = performance.getEntriesByName("begin");
  for (let i = 0; i < entriesNamedBegin.length; i++) {
    let typeOfEntry = entriesNamedBegin[i].entryType;
    console.log("L'entrée est de type : " + typeOfEntry);
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
