---
title: "HTMLImageElement : propriété src"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLImageElement")}} reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src) qui définit l'image à afficher dans l'élément HTML {{HTMLElement("img")}}.

## Valeur

Une chaîne de caractères. Pour plus d'informations sur la syntaxe de l'attribut `src`, voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#src).

## Exemples

### Définir l'attribut `src`

```js
const img = new Image();
img.src = "exemple.png";
img.alt = "Une image d'exemple";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.currentSrc")}}
- La propriété {{DOMxRef("HTMLImageElement.srcset")}}
- La propriété {{DOMxRef("HTMLImageElement.sizes")}}
