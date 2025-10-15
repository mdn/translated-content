---
title: "HTMLFencedFrameElement : propriété width"
short-title: width
slug: Web/API/HTMLFencedFrameElement/width
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

La propriété **`width`** de l'interface {{domxref("HTMLFencedFrameElement")}} obtient et définit la valeur de l'attribut `width` correspondant sur l'élément HTML {{htmlelement("fencedframe")}}, qui spécifie la largeur de l'élément.

La taille du contenu intégré peut être définie par les propriétés internes `contentWidth` et `contentHeight` de l'objet {{domxref("HTMLFencedFrameElement.config", "config")}} du `<fencedframe>`. Dans ce cas, modifier la `width` ou la {{domxref("HTMLFencedFrameElement.height", "height")}} du `<fencedframe>` changera la taille du conteneur intégré sur la page, mais le document à l'intérieur du conteneur sera visuellement mis à l'échelle pour s'adapter. La largeur et la hauteur rapportées du document intégré (c'est-à-dire {{domxref("Window.innerWidth")}} et {{domxref("Window.innerHeight")}}) resteront inchangées.

## Valeur

Une chaîne de caractères représentant la largeur de l'élément en pixels CSS. La valeur par défaut est `300`.

## Exemples

```js
const frame = document.createElement("fencedframe");
frame.width = "480";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
