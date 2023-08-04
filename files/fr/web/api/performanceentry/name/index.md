---
title: PerformanceEntry.name
slug: Web/API/PerformanceEntry/name
---

{{APIRef("Performance Timeline API")}}

La propriété **`name`** de l'interface [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) renvoie une valeur qui précise davantage la valeur renvoyée par la propriété [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType). Cette propriété est en lecture seule.

{{AvailableInWorkers}}

## Syntaxe

```js
var name = entry.name;
```

### Valeur de retour

La valeur de retour dépend du sous-type de l'objet `PerformanceEntry` et de la valeur de [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType), comme le montre le tableau ci-dessous.

| Type de valeur pour `name`                | Sous-type                                                                                                                                          | Type (`entryType`)    | Description                                                                                                   |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`URL`](/fr/docs/Web/API/URL)             | [`PerformanceFrameTiming`](/fr/docs/Web/API/PerformanceFrameTiming), [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) | `frame`, `navigation` | L'adresse du document.                                                                                        |
| [`URL`](/fr/docs/Web/API/URL)             | [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming)                                                                          | `resource`            | L'URL résolue de la ressource demandée. Cette valeur ne change pas même si la demande est redirigée.          |
| [`DOMString`](/fr/docs/Web/API/DOMString) | [`PerformanceMark`](/fr/docs/Web/API/PerformanceMark)                                                                                              | `mark`                | Le nom utilisé lorsque le marqueur a été créé en appelant [`mark()`](/fr/docs/Web/API/Performance/mark).      |
| [`DOMString`](/fr/docs/Web/API/DOMString) | [`PerformanceMeasure`](/fr/docs/Web/API/PerformanceMeasure)                                                                                        | `measure`             | Le nom utilisé lorsque la mesure a été créée en appelant [`measure()`](/fr/docs/Web/API/Performance/measure). |
| [`DOMString`](/fr/docs/Web/API/DOMString) | [`PerformancePaintTiming`](/fr/docs/Web/API/PerformancePaintTiming)                                                                                | `paint`               | Soit `'first-paint'` ou `'first-contentful-paint'`.                                                           |

## Exemple

L'exemple suivant montre l'utilisation de la propriété `name`.

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
    // Vérifie chaque propriété
    let supported = properties[i] in obj;
    if (supported)
      console.log("..." + properties[i] + " = " + obj[properties[i]]);
    else console.log("..." + properties[i] + " = Not supported");
  }
  for (let i = 0; i < methods.length; i++) {
    // Vérifie chaque méthode
    let supported = typeof obj[methods[i]] == "function";
    if (supported) {
      let js = obj[methods[i]]();
      console.log("..." + methods[i] + "() = " + JSON.stringify(js));
    } else {
      console.log("..." + methods[i] + " = Not supported");
    }
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
