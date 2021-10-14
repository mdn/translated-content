---
title: PerformanceEntry.startTime
slug: Web/API/PerformanceEntry/startTime
tags:
  - API
  - Performance Timeline API
  - PerformanceEntry
  - Property
  - Propriété
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry/startTime
---
{{APIRef("Performance Timeline API")}}

La propriété **`startTime`** renvoie le premier [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) enregistré pour l'[entrée de performance](/fr/docs/Web/API/PerformanceEntry).

{{AvailableInWorkers}}

La valeur renvoyée par cette propriété dépend du [`type`](/fr/docs/Web/API/PerformanceEntry/entryType) de l'entrée de performance :

- « `frame` » - retourne le
  [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) quand l'affichage a été démarré.
- « `mark` » - retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) lorsque le marquage a été créé par un appel de [`performance.mark()`](/fr/docs/Web/API/Performance/mark).
- « `measure` » - retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) lorsque la mesure a été créée par un appel à [`performance.measure()`](/fr/docs/Web/API/Performance/measure).
- « `navigation` » - retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) avec une valeur de "`0`".
- « `resource` » - retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne [commence à récupérer la ressource](/fr/docs/Web/API/PerformanceResourceTiming/fetchStart).

Cette propriété est en lecture seule.

## Syntaxe

```js
entry.startTime;
```

### Valeur de retour

Un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le premier horodatage lorsque l'[entrée de performance](/fr/docs/Web/API/PerformanceEntry) a été créée.

> **Note :** Si l'entrée de performance a un [`entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) "`resource`" (c'est-à-dire que l'entrée est un objet [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)), cette propriété renvoie la valeur de l'horodatage fournie par [`PerformanceResourceTiming.fetchStart`](/fr/docs/Web/API/PerformanceResourceTiming/fetchStart).

## Exemple

L'exemple suivant montre l'utilisation de la propriété `startTime`.

```js
function run_PerformanceEntry() {
  console.log("Support de PerformanceEntry ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark n'est pas pris en charge");
    return;
  }

  // Crée quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée
  let p = performance.getEntries();
  for (let i = 0; i < p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  let properties = ["name", "entryType", "startTime", "duration"];
  let methods = ["toJSON"];

  for (let i = 0; i < properties.length; i++) {
    // On vérifie chaque propriété
    let supported = properties[i] in obj;
    if (supported)
      log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      log("..." + properties[i] + " = N'est pas pris en charge");
  }
  for (let i = 0; i < methods.length; i++) {
    // On vérifie chaque méthode
    let supported = typeof obj[methods[i]] == "function";
    if (supported) {
      let js = obj[methods[i]]();
      log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      log("..." + methods[i] + " = N'est pas pris en charge");
    }
  }
}
```

## Spécifications

| Spécification                                                                                                                        | Statut                                                   | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------------------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry-starttime',
        'startTime')}} | {{Spec2('Performance Timeline Level 2')}} |                      |
| {{SpecName('Performance Timeline', '#dom-performanceentry-starttime',
        'startTime')}}         | {{Spec2('Performance Timeline')}}             | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceEntry.startTime")}}
