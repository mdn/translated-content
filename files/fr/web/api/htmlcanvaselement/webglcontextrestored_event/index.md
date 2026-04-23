---
title: "HTMLCanvasElement : évènement webglcontextrestored"
short-title: webglcontextrestored
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("WebGL API")}}

L'évènement **`webglcontextrestored`** de l'[API WebGL](/fr/docs/Web/API/WebGL_API) est déclenché si l'agent utilisateur restaure le tampon de dessin d'un objet {{DOMxRef("WebGLRenderingContext")}}.

Une fois le contexte restauré, les ressources WebGL telles que les textures et les tampons créés avant la perte du contexte ne sont plus valides. Vous devez réinitialiser l'état de votre application WebGL et recréer les ressources.

Cet évènement ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("webglcontextrestored", (event) => { })

onwebglcontextrestored = (event) => { }
```

## Type d'évènement

Un {{DOMxRef("WebGLContextEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Propriétés de l'évènement

_Cette interface hérite des propriétés de son interface parente, {{DOMxRef("Event")}}._

- {{DOMxRef("WebGLContextEvent.statusMessage")}}
  - : Une propriété en lecture seule contenant des informations supplémentaires sur l'évènement.

## Exemple

Avec l'aide de l'extension {{DOMxRef("WEBGL_lose_context")}}, vous pouvez simuler l'évènement `webglcontextrestored`&nbsp;:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextrestored", (e) => {
  console.log(e);
});

gl.getExtension("WEBGL_lose_context").restoreContext();

// L'évènement "webglcontextrestored" est affiché dans la console.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("WebGLContextEvent")}}
- La méthode {{DOMxRef("WebGLRenderingContext.isContextLost()")}}
- L'extension {{DOMxRef("WEBGL_lose_context")}} et ses méthodes {{DOMxRef("WEBGL_lose_context.loseContext()")}}, {{DOMxRef("WEBGL_lose_context.restoreContext()")}}
