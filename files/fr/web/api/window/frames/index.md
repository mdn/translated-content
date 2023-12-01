---
title: Window.frames
slug: Web/API/Window/frames
---

{{ApiRef("Window")}}

Renvoie la fenêtre elle-même, qui est semblable à un objet de type Array, listant les frames présentes dans la fenêtre courante.

## Syntaxe

```js
frameList = window.frames;
```

- `frameList` est une liste d'objets frame, semblable à un tableau grâce à la propriété `length` . Ses éléments sont accessibles en utilisant la notation `[i]`.
- `frameList === window` est évalué à `true`.
- Chaque élément de `window.frames` est un pseudo tableau représentant l'objet [window](/fr/docs/DOM/window) correspondant au contenu de la [\<frame>](/fr/docs/HTML/Element/frame) ou [\<iframe>](/fr/docs/HTML/Element/iframe) , et non au DOM element (i)frame (ex., `window.frames[ 0 ]` équivaut à `document.getElementsByTagName( "iframe" )[ 0 ].contentWindow`).
- pour plus de détails sur la valeur retournée, se référer au [fil de discussion sur mozilla.dev.platform](http://groups.google.com/group/mozilla.dev.platform/browse_thread/thread/5628c6f346859d4f/169aa7004565066?hl=en&ie=UTF-8&oe=utf-8&q=window.frames&pli=1).

## Exemple

```js
var frames = window.frames; // ou // var frames = window.parent.frames;
for (var i = 0; i < frames.length; i++) {
  // faire quelque chose avec chaque subframe en tant que frames[i]
  frames[i].document.body.style.background = "red";
}
```

## Spécifications

{{Specifications}}
