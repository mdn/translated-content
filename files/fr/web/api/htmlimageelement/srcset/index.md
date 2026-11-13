---
title: "HTMLImageElement : propriété srcset"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`srcset`** de l'interface {{DOMxRef("HTMLImageElement")}} identifie une ou plusieurs _chaînes candidates d'image_, séparées par des virgules (`,`), chacune définissant des ressources d'image à utiliser dans des circonstances données. Chaque chaîne candidate d'image contient une URL d'image et un descripteur de largeur ou de densité de pixels optionnel qui indique les conditions dans lesquelles cette candidate doit être utilisée à la place de l'image définie par la propriété {{DOMxRef("HTMLImageElement.src", "src")}}. Elle reflète l'attribut de contenu [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) de l'élément `<img>`.

La propriété `srcset`, ainsi que la propriété {{DOMxRef("HTMLImageElement.sizes", "sizes")}}, sont des éléments essentiels pour concevoir des sites web adaptatif, car elles peuvent être utilisées ensemble pour créer des pages qui utilisent des images adaptées à la situation de rendu.

## Valeur

Une chaîne de caractères. Pour plus d'informations sur la syntaxe de l'attribut `srcset`, voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#srcset).

## Exemples

### Définir l'attribut `srcset`

```js
const img = new Image();
img.srcset =
  "/fr/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 2x, /fr/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png";
img.alt = "Une image d'exemple";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Images réactives](/fr/docs/Web/HTML/Guides/Responsive_images)
- [Guide des types et formats d'images](/fr/docs/Web/Media/Guides/Formats/Image_types)
- La propriété {{DOMxRef("HTMLImageElement.currentSrc")}}
- La propriété {{DOMxRef("HTMLImageElement.sizes")}}
- La propriété {{DOMxRef("HTMLImageElement.src")}}
