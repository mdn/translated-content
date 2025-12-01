---
title: "HTMLCanvasElement : méthode transferControlToOffscreen()"
short-title: transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Canvas API")}}

La méthode **`transferControlToOffscreen()`** de l'interface {{DOMxRef("HTMLCanvasElement")}} transfère le contrôle à un objet {{DOMxRef("OffscreenCanvas")}}, soit sur le fil d'exécution principal, soit dans un worker.

## Syntaxe

```js-nolint
transferControlToOffscreen()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("OffscreenCanvas")}}.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - le canevas a déjà reçu un mode de contexte via {{DOMxRef("HTMLCanvasElement.getContext()")}}
    - le canevas a déjà transféré son contrôle vers un objet canvas hors écran.

## Exemples

L'exemple suivant montre comment transférer le contrôle à un objet {{DOMxRef("OffscreenCanvas")}} sur le fil d'exécution principal&nbsp;:

```js
const htmlCanvas = document.createElement("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext("webgl");

// Quelques dessins avec le contexte gl…
```

L'exemple suivant montre comment transférer le contrôle à un objet {{DOMxRef("OffscreenCanvas")}} dans un worker&nbsp;:

```js
const offscreen = document.querySelector("canvas").transferControlToOffscreen();
const worker = new Worker("my-worker-url.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface définissant cette méthode&nbsp;: {{DOMxRef("HTMLCanvasElement")}}
- L'interface {{DOMxRef("OffscreenCanvas")}}
