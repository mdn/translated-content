---
title: "Window : propriété caches"
short-title: caches
slug: Web/API/Window/caches
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}

La propriété en lecture seule **`caches`** retourne l'objet {{DOMxRef("CacheStorage")}} associé au contexte actuel.
Cet objet permet de stocker des ressources pour une utilisation hors-ligne et de générer des réponses personnalisées à des requêtes.

## Valeur

Un objet {{DOMxRef("CacheStorage")}}.

## Exemple

L'exemple suivant montre comment une fenêtre peut récupérer des données mises en cache.

```js
caches.open("v1").then((cache) => cache.match("/list"));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">Service Workers</i>](/fr/docs/Web/API/Service_Worker_API)
- L'interface {{DOMxRef("CacheStorage")}}
- L'interface {{DOMxRef("Cache")}}
