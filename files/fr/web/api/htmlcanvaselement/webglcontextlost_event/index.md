---
title: "HTMLCanvasElement : évènement webglcontextlost"
short-title: webglcontextlost
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("WebGL API")}}

L'évènement **`webglcontextlost`** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) est déclenché si l'agent utilisateur détecte que le tampon de dessin associé à un objet {{DOMxRef("WebGLRenderingContext")}} a été perdu.

Cet évènement ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("webglcontextlost", (event) => { })

onwebglcontextlost = (event) => { }
```

## Type d'évènement

Un {{DOMxRef("WebGLContextEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Propriétés de l'évènement

_Cette interface hérite des propriétés de son interface parente, {{DOMxRef("Event")}}._

- {{DOMxRef("WebGLContextEvent.statusMessage")}}
  - : Une propriété en lecture seule contenant des informations supplémentaires sur l'évènement.

## Exemple

Avec l'aide de l'extension {{DOMxRef("WEBGL_lose_context")}}, vous pouvez simuler l'évènement `webglcontextlost`&nbsp;:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// L'évènement "webglcontextlost" est affiché dans la console.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("WebGLContextEvent")}}
- La méthode {{DOMxRef("WebGLRenderingContext.isContextLost()")}}
- L'extension {{DOMxRef("WEBGL_lose_context")}} et ses méthodes {{DOMxRef("WEBGL_lose_context.loseContext()")}}, {{DOMxRef("WEBGL_lose_context.restoreContext()")}}
