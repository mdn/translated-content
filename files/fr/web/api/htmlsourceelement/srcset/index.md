---
title: "HTMLSourceElement : propriété srcset"
short-title: srcset
slug: Web/API/HTMLSourceElement/srcset
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La propriété **`srcset`** de l'interface {{DOMxRef("HTMLSourceElement")}} est une chaîne de caractères contenant une liste, séparée par des virgules, d'images candidates.

Chaque image candidate inclut l'URL d'une ressource image à utiliser comme source pour l'élément et, éventuellement, un descripteur indiquant les circonstances dans lesquelles l'image doit être utilisée. Le descripteur est soit un nombre suivi de `'w'`, indiquant la largeur de l'élément, soit un nombre suivi de `'x'`, indiquant la densité de pixels de l'appareil.

Elle reflète l'attribut `srcset` de l'élément HTML {{HTMLElement("source")}} imbriqué dans un élément HTML {{HTMLElement("picture")}}. Elle n'a pas de sens et est ignorée lorsqu'elle est imbriquée dans un élément HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, qui utilisent à la place l'attribut {{DOMxRef("HTMLSourceElement.src", "src")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```html
<picture>
  <source
    id="el"
    srcset="smile.png, smile-1.5x.png 1.5x, smile-2x.png 2x"
    type="image/png" />
</picture>
```

```js
const el = document.getElementById("el");
console.log(el.srcset); // Affiche : "smile.png, smile-1.5x.png 1.5x, smile-2x.png 2x"
el.srcset = "smile.png, smile-med.png 600w, smile-large.png 800w"; // Met à jour la valeur de srcset
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLSourceElement.type")}}
- La propriété {{DOMxRef("HTMLSourceElement.src")}}
- La propriété {{DOMxRef("HTMLSourceElement.media")}}
- La propriété {{DOMxRef("HTMLSourceElement.sizes")}}
- L'élément HTML {{HTMLElement("source")}}
- L'élément HTML {{HTMLElement("picture")}}
