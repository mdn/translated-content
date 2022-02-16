---
title: WindowOrWorkerGlobalScope.crossOriginIsolated
slug: Web/API/crossOriginIsolated
translation_of: Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated
original_slug: Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated
---
{{APIRef()}}{{SeeCompatTable}}

La propriéte en lecture seule **`crossOriginIsolated`** de l'interface {{domxref("WindowOrWorkerGlobalScope")}} retourne une valeur booléenne qui indique si un {{jsxref("SharedArrayBuffer")}} peut être envoyé via un appel à {{domxref("Window.postMessage()")}}.

Cette valeur est dépendante de toute entête {{httpheader("Cross-Origin-Opener-Policy")}} et {{httpheader("Cross-Origin-Embedder-Policy")}} présente dans la réponse.

## Syntaxe

    var myCrossOriginIsolated = self.crossOriginIsolated; // or just crossOriginIsolated

### Valeur

Une valeur booléenne

## Exemples

```js
if(crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

## Spécifications

| Spécification                        | Statut | Commentaire                          |
| ------------------------------------ | ------ | ------------------------------------ |
| {{SpecName("HTML WHATWG")}} |        | Pas encore ajouté à la spécification |

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.crossOriginIsolated")}}

## Voir aussi

- [Service Workers](/en-US/docs/Web/API/ServiceWorker_API)
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
