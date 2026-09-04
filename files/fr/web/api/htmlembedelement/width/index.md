---
title: "HTMLEmbedElement : propriété width"
short-title: width
slug: Web/API/HTMLEmbedElement/width
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La propriété **`width`** de l'interface {{DOMxRef("HTMLEmbedElement")}} retourne une chaîne de caractères qui reflète l'attribut `width` de l'élément HTML {{HTMLElement("embed")}}, indiquant la largeur d'affichage de la ressource en pixels CSS.

## Valeur

Une chaîne de caractères indiquant la largeur d'affichage de la ressource en pixels CSS.

## Exemples

```html
<embed id="el" width="800" height="600" src="https://example.com" />
```

```js
const el = document.getElementById("el");
console.log(el.width); // Sortie : '800'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLCanvasElement.width")}}
- La propriété {{DOMxRef("HTMLIFrameElement.width")}}
- La propriété {{DOMxRef("HTMLImageElement.width")}}
- La propriété {{DOMxRef("HTMLObjectElement.width")}}
- La propriété {{DOMxRef("HTMLSourceElement.width")}}
- La propriété {{DOMxRef("HTMLVideoElement.width")}}
