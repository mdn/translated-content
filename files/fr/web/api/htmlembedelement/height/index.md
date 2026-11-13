---
title: "HTMLEmbedElement : propriété height"
short-title: height
slug: Web/API/HTMLEmbedElement/height
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLEmbedElement")}} retourne une chaîne de caractères qui reflète l'attribut `height` de l'élément {{HTMLElement("embed")}}, indiquant la hauteur d'affichage de la ressource en pixels CSS.

## Valeur

Une chaîne de caractères indiquant la hauteur d'affichage de la ressource en pixels CSS.

## Exemples

```html
<embed id="el" width="800" height="600" src="https://example.com" />
```

```js
const el = document.getElementById("el");
console.log(el.height); // Sortie : '600'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCanvasElement.height")}}
- La propriété {{DOMxRef("HTMLIFrameElement.height")}}
- La propriété {{DOMxRef("HTMLImageElement.height")}}
- La propriété {{DOMxRef("HTMLObjectElement.height")}}
- La propriété {{DOMxRef("HTMLSourceElement.height")}}
- La propriété {{DOMxRef("HTMLVideoElement.height")}}
