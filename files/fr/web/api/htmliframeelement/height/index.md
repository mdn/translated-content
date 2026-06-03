---
title: "HTMLIFrameElement : propriété height"
short-title: height
slug: Web/API/HTMLIFrameElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLIFrameElement")}} retourne une chaîne de caractères qui reflète l'attribut `height` de l'élément HTML {{HTMLElement("iframe")}}, indiquant la hauteur du cadre en pixels CSS.

## Valeur

Une chaîne de caractères indiquant la hauteur du cadre en pixels CSS.

## Exemples

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.height); // Affiche : '600'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCanvasElement.height")}}
- La propriété {{DOMxRef("HTMLEmbedElement.height")}}
- La propriété {{DOMxRef("HTMLImageElement.height")}}
- La propriété {{DOMxRef("HTMLObjectElement.height")}}
- La propriété {{DOMxRef("HTMLSourceElement.height")}}
- La propriété {{DOMxRef("HTMLVideoElement.height")}}
