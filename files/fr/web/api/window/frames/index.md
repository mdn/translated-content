---
title: "Window : propriété frames"
short-title: frames
slug: Web/API/Window/frames
l10n:
  sourceCommit: fff34aeef99745d594b618950330cb8333e9bfc6
---

{{APIRef("DOM")}}

La propriété **`frames`** de l'interface {{DOMxRef("Window")}} retourne la fenêtre elle-même, qui est semblable à un objet de type tableau (`array`), listant les sous-cadres directs de la fenêtre courante.

## Valeur

Une liste d'objets de cadre. Elle est similaire à un tableau en ce qu'elle possède une propriété `length` et que ses éléments peuvent être accessibles en utilisant la notation `[i]`.

- `frames === window` est évalué comme vrai.
- Chaque élément du pseudo-tableau `window.frames` représente l'objet {{DOMxRef("Window")}} correspondant au contenu du {{HTMLElement("frame")}} ou du {{HTMLElement("iframe")}} donné, et non à l'élément DOM `frame` ou `iframe` (c'est-à-dire, `window.frames[0]` est la même chose que `document.getElementsByTagName("iframe")[0].contentWindow`).
- Pour plus de détails sur la valeur retournée, consultez ce [fil de discussion sur mozilla.dev.platform <sup>(angl.)</sup>](https://groups.google.com/g/mozilla.dev.platform/c/VijG80aFnU8).

## Exemples

```js
const frames = window.frames; // ou const frames = window.parent.frames;
for (let i = 0; i < frames.length; i++) {
  // faire quelque chose avec chaque sous-cadre en tant que frames[i]
  frames[i].document.body.style.background = "red";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
