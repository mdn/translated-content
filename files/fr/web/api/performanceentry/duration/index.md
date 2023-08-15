---
title: PerformanceEntry.duration
slug: Web/API/PerformanceEntry/duration
---

{{APIRef("Performance Timeline API")}}

La propriété **`duration`** renvoie un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) qui correspond à la durée de l'[entrée de performance](/fr/docs/Web/API/PerformanceEntry).

{{AvailableInWorkers}}

La valeur retournée par cette propriété dépend du [type](/fr/docs/Web/API/PerformanceEntry/entryType) de l'entrée de performance :

- « `frame` » - retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) indiquant la différence entre le `startTime` de deux _frames_ successives.
- « `mark` » - retourne "`0`" (une marque n'a pas de durée).
- « `measure` » - retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) qui correspond à la durée de la mesure.
- « `navigation` » - retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) qui est respectivement la différence entre les propriétés [`PerformanceNavigationTiming.loadEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) et [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime).
- « `resource` » - renvoie la différence entre les deux [`timestamps`](/fr/docs/Web/API/DOMHighResTimeStamp) [`responseEnd`](/fr/docs/Web/API/PerformanceResourceTiming/responseEnd) (le moment de la fin de la réponse) de la ressource et [`startTime`](/fr/docs/Web/API/PerformanceEntry/startTime) (le point de départ).

Cette propriété est en {{readonlyInline}}.

## Syntaxe

```js
entry.duration;
```

### Valeur de retour

Un objet [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la durée de l'[entrée de performance](/fr/docs/Web/API/PerformanceEntry). Si le concept de durée ne s'applique pas à une mesure de performance particulière, le navigateur peut choisir de renvoyer une durée de 0.

> **Note :** si l'entrée de performance a un [`entryType`](/fr/docs/Web/API/PerformanceEntry/entryType) "`resource`" (c'est-à-dire que l'entrée est un objet [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)), cette propriété renvoie la différence entre les [`timestamps`](/fr/docs/Web/API/DOMHighResTimeStamp) [`PerformanceEntry.responseEnd`](/fr/docs/Web/API/PerformanceResourceTiming/responseEnd) et [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime).

## Exemple

L'exemple suivant montre l'utilisation de la propriété `duration`.

```js
function run_PerformanceEntry() {
  console.log("Support de PerformanceEntry ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark N'est pas pris en charge");
    return;
  }

  // Créer quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée.
  let p = performance.getEntries();
  for (let i = 0; i < p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  let properties = ["name", "entryType", "startTime", "duration"];
  let methods = ["toJSON"];

  for (let i = 0; i < properties.length; i++) {
    // check each property
    let supported = properties[i] in obj;
    if (supported)
      console.log("..." + properties[i] + " = " + obj[properties[i]]);
    else console.log("..." + properties[i] + " = N'est pas pris en charge");
  }
  for (let i = 0; i < methods.length; i++) {
    // check each method
    let supported = typeof obj[methods[i]] == "function";
    if (supported) {
      let js = obj[methods[i]]();
      console.log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      console.log("..." + methods[i] + " = N'est pas pris en charge");
    }
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
