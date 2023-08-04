---
title: PerformanceTiming.responseEnd
slug: Web/API/PerformanceTiming/responseEnd
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`responseEnd`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le navigateur a reçu le dernier octet de la réponse, ou lorsque la connexion est fermée si cela s'est produit en premier, depuis le serveur à partir d'un cache ou d'une ressource locale.

## Syntaxe

```js
let time = performanceTiming.responseEnd;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
