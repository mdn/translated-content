---
title: performance.getEntries()
slug: Web/API/Performance/getEntries
---

{{APIRef("Performance Timeline API")}}

La méthode **`getEntries()`** renvoie une liste de tous les objets {{domxref("PerformanceEntry")}} pour la page. Les membres de la liste (_entrées_) peuvent être créés en faisant des _marqueurs_ ou des _mesures_ de performance (par exemple en appelant la méthode {{domxref("Performance.mark", "mark()")}}) à des moments explicites. Si vous souhaitez filtrer les entrées de performance en fonction de leur type ou de leur nom, consultez la documentation des méthodes {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} et {{domxref("Performance.getEntriesByName", "getEntriesByName()")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
entries = window.performance.getEntries();
```

### Valeur de retour

- `entries`
  - : Un tableau ({{jsxref("Array")}}) d'objets {{domxref("PerformanceEntry")}}. Les éléments seront classés par ordre chronologique en fonction des entrées {{domxref("PerformanceEntry.startTime","startTime")}}.

## Exemple

```js
function use_PerformanceEntry_methods() {
  console.log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark Non pris en charge");
    return;
  }

  // Crée quelques entrées de performance via la méthode mark()
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  performance.mark("Begin");
  do_work(100000);
  performance.mark("End");
  do_work(200000);
  performance.mark("End");

  // Utilise getEntries() pour itérer à travers chaque entrée.
  let p = performance.getEntries();
  for (var i = 0; i < p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Utilise getEntriesByType() pour obtenir toutes les entrées "mark".
  p = performance.getEntriesByType("mark");
  for (let i = 0; i < p.length; i++) {
    console.log(
      "Mark only entry[" +
        i +
        "]: name = " +
        p[i].name +
        "; startTime = " +
        p[i].startTime +
        "; duration  = " +
        p[i].duration,
    );
  }

  // Utilise getEntriesByName() pour obtenir toutes les entrées "mark" nommées "Begin".
  p = performance.getEntriesByName("Begin", "mark");
  for (let i = 0; i < p.length; i++) {
    console.log(
      "Mark and Begin entry[" +
        i +
        "]: name = " +
        p[i].name +
        "; startTime = " +
        p[i].startTime +
        "; duration  = " +
        p[i].duration,
    );
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
