---
title: "HTMLCanvasElement : évènement webglcontextcreationerror"
short-title: webglcontextcreationerror
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebGL API")}}

L'évènement **`webglcontextcreationerror`** de [l'API WebGL](/fr/docs/Web/API/WebGL_API) est déclenché si l'agent utilisateur ne parvient pas à créer un contexte {{DOMxRef("WebGLRenderingContext")}}.

Cet évènement possède une propriété {{DOMxRef("WebGLContextEvent.statusMessage")}}, qui peut contenir une chaîne de caractères dépendant de la plateforme avec plus d'informations sur l'échec.

Cet évènement ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("webglcontextcreationerror", (event) => { })

onwebglcontextcreationerror = (event) => { }
```

## Type d'évènement

Un {{DOMxRef("WebGLContextEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("WebGLContextEvent")}}

## Exemple

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("webglcontextcreationerror", (e) => {
  console.log(e.statusMessage || "Unknown error");
});

const gl = canvas.getContext("webgl");
// affiche statusMessage ou "Unknown error" si la création du contexte WebGL échoue
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("WebGLContextEvent")}}
- La méthode {{DOMxRef("WebGLRenderingContext.isContextLost()")}}
- L'extension {{DOMxRef("WEBGL_lose_context")}} et ses méthodes {{DOMxRef("WEBGL_lose_context.loseContext()")}}, {{DOMxRef("WEBGL_lose_context.restoreContext()")}}
