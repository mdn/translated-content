---
title: "HTMLIFrameElement : propriété width"
short-title: width
slug: Web/API/HTMLIFrameElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

La propriété **`width`** de l'interface {{DOMxRef("HTMLIFrameElement")}} retourne une chaîne de caractères qui reflète l'attribut `width` de l'élément HTML {{HTMLElement("iframe")}}, indiquant la largeur du cadre en pixels CSS.

## Valeur

Une chaîne de caractères indiquant la largeur du cadre en pixels CSS.

## Exemples

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.width); // Affiche : '800'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCanvasElement.width")}}
- La propriété {{DOMxRef("HTMLEmbedElement.width")}}
- La propriété {{DOMxRef("HTMLImageElement.width")}}
- La propriété {{DOMxRef("HTMLObjectElement.width")}}
- La propriété {{DOMxRef("HTMLSourceElement.width")}}
- La propriété {{DOMxRef("HTMLVideoElement.width")}}
