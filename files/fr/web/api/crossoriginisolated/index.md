---
title: crossOriginIsolated
slug: Web/API/crossOriginIsolated
page-type: web-api-global-property
translation_of: Web/API/crossOriginIsolated
original_slug: Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated
browser-compat: api.crossOriginIsolated
---
{{APIRef()}}{{SeeCompatTable}}

La propriété globale en lecture seule **`crossOriginIsolated`** renvoie une valeur booléenne indiquant si un objet [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) peut être envoyé via un appel à [`Window.postMessage()`](/fr/docs/Web/API/Window/postMessage).

Cette valeur dépend des en-têtes [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) et
[`Cross-Origin-Embedder-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) présents dans la réponse HTTP.

## Valeur

Une valeur booléenne.

## Exemples

```js
if(crossOriginIsolated) {
  // On peut envoyer un SharedArrayBuffer
} else {
  // Sinon on fait autre chose
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">Service Workers</i>](/fr/docs/Web/API/Service_Worker_API)
- [L'API <i lang="en">Web Workers</i>](/fr/docs/Web/API/Web_Workers_API)