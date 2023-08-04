---
title: performance.clearMarks()
slug: Web/API/Performance/clearMarks
---

{{APIRef("User Timing API")}}

La méthode **`clearMarks()`** supprime les _marqueurs nommés_ du tampon d'entrée des performances du navigateur. Si la méthode est appelée sans arguments, toutes les {{domxref("PerformanceEntry", "entrées de performance","",1)}} avec un {{domxref("PerformanceEntry.entryType", "entryType")}} de « `mark` » seront supprimées du tampon d'entrée de performance.

{{AvailableInWorkers}}

## Syntaxe

```js
performance.clearMarks();
performance.clearMarks(name);
```

### Arguments

- name {{optional_inline}}
  - : Un {{domxref("DOMString")}} représentant le nom de l'horodatage. Si cet argument est omis, toutes les {{domxref("PerformanceEntry","entrées de performance","",1)}} avec un {{domxref("PerformanceEntry.entryType","entryType")}} de « `mark` » seront supprimés.

### Valeur de retour

Aucune.

## Exemple

L'exemple suivant montre les deux utilisations de la méthode `clearMarks()`.

```js
// Créé une petite aide pour montrer combien d'entrées PerformanceMark il y a.
function logMarkCount() {
  console.log(
    "J'ai trouvé autant d'entrées : " +
      performance.getEntriesByType("mark").length,
  );
}

// Crée une série de marqueurs.
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

logMarkCount(); // "J'ai trouvé autant d'entrées : 6"

// Supprime seulement les entrées "squirrel" de PerformanceMark.
performance.clearMarks("squirrel");
logMarkCount(); // "J'ai trouvé autant d'entrées : 4"

// Supprime toutes les entrées de PerformanceMark.
performance.clearMarks();
logMarkCount(); // "J'ai trouvé autant d'entrées : 0"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
