---
title: PerformanceEntry.toJSON()
slug: Web/API/PerformanceEntry/toJSON
tags:
  - API
  - Method
  - Méthode
  - Performance Timeline API
  - PerformanceEntry
  - Reference
  - Performance Web
translation_of: Web/API/PerformanceEntry/toJSON
---
{{APIRef("Performance Timeline API")}}

La méthode **`toJSON()`** permet de sérialiser l'objet [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) courant et renvoie une représentation JSON de l'objet.

{{AvailableInWorkers}}

## Syntaxe

```js
let jsonObj = perfEntry.toJSON();
```

### Arguments

Aucun.

### Valeur de retour

- `json`
  - : Un objet JSON qui est la sérialisation de l'objet [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry).

## Exemple

L'exemple suivant montre l'utilisation de la méthode `toJSON()`.

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
    // On vérifie chaque propriété
    let supported = properties[i] in obj;
    if (supported)
      console.log("..." + properties[i] + " = " + obj[properties[i]]);
    else
      console.log("..." + properties[i] + " = N'est pas pris en charge");
  }
  for (let i = 0; i < methods.length; i++) {
    // On vérifie chaque méthode
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

| Spécification                                                                                                                | Statut                                                   | Commentaire                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------- |
| {{SpecName('Performance Timeline Level 2', '#dom-performanceentry-tojson',
        'toJSON')}} | {{Spec2('Performance Timeline Level 2')}} | Définition initiale de la méthode `toJSON()`. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceEntry.toJSON")}}
