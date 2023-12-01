---
title: performance.clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
---

{{APIRef("Resource Timing API")}}

La méthode **`clearResourceTimings()`** supprime toutes les {{domxref("PerformanceEntry", "entrées de performance","",1)}} avec un {{domxref("PerformanceEntry.entryType","entryType")}} de « `resource` » du tampon d'entrée de performance et fixe la taille du tampon de données de performance à zéro. Pour définir la taille du tampon de données de performance du navigateur, utilisez la méthode {{domxref("Performance.setResourceTimingBufferSize()")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
performance.clearResourceTimings();
```

### Arguments

Aucun.

### Valeur de retour

Aucune.

## Exemple

```js
function load_resource() {
  var image = new Image();
  image.src = "https://developer.mozilla.org/mdn-social-share.png";
}
function clear_performance_timings() {
  if (performance === undefined) {
    log("Le navigateur ne prend pas en charge les performances Web");
    return;
  }
  // Crée une entrée de performance de synchronisation des ressources en chargeant une image
  load_resource();

  var supported = typeof performance.clearResourceTimings == "function";
  if (supported) {
    console.log("Exécuter : performance.clearResourceTimings()");
    performance.clearResourceTimings();
  } else {
    console.log("performance.clearResourceTimings() N'EST PAS supporté");
    return;
  }
  // getEntries devrait maintenant retourner zéro
  var p = performance.getEntriesByType("resource");
  if (p.length == 0)
    console.log("... Le tampon de données de performance a été effacé");
  else
    console.log("... Le tampon de données de performance n'a PAS été effacé !");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
