---
title: "Window : propriété crossOriginIsolated"
slug: Web/API/Window/crossOriginIsolated
l10n:
  sourceCommit: c40fe6508ac4add549d315aa20f6bc2fca49c27e
---

{{APIRef("DOM")}}

La propriété en lecture seule **`crossOriginIsolated`** de l'interface [`Window`](/fr/docs/Web/API/Window) renvoie une valeur booléenne indiquant si le site web est isolé pour les requêtes entre origines multiples. Cet état réduit le risque d'attaque par canal auxiliaire et permet certaines choses&nbsp;:

- Un objet [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) peut être créé et envoyé via un appel à [`Window.postMessage()`](/fr/docs/Web/API/Window/postMessage) ou [`MessagePort.postMessage()`](/fr/docs/Web/API/MessagePort/postMessage).
- [`Performance.now()`](/fr/docs/Web/API/Performance/now) dispose d'une meilleure précision.
- On peut accéder à la méthode [`Performance.measureUserAgentSpecificMemory()`](/fr/docs/Web/API/Performance/measureUserAgentSpecificMemory).

Un site web est dans cet état d'isolation lorsque l'en-tête de réponse HTTP [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) vaut `same-origin` et l'en-tête [`Cross-Origin-Embedder-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) vaut `require-corp` ou `credentialless`.

## Valeur

Une valeur booléenne.

## Exemples

```js
const monWorker = new Worker("worker.js");

if (window.crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  monWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  monWorker.postMessage(buffer);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
