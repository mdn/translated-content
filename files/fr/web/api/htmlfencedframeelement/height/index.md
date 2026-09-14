---
title: "HTMLFencedFrameElement : propriété height"
short-title: height
slug: Web/API/HTMLFencedFrameElement/height
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

La propriété **`height`** de l'interface {{DOMxRef("HTMLFencedFrameElement")}} obtient et définit la valeur de l'attribut `height` correspondant sur l'élément HTML {{HTMLElement("fencedframe")}}, qui définit la hauteur de l'élément.

La taille du contenu intégré peut être définie par les propriétés internes `contentWidth` et `contentHeight` de l'objet {{DOMxRef("HTMLFencedFrameElement.config", "config")}} du `<fencedframe>`. Dans ce cas, modifier la {{DOMxRef("HTMLFencedFrameElement.width", "width")}} ou la `height` du `<fencedframe>` change la taille du conteneur intégré sur la page, mais le document à l'intérieur du conteneur est visuellement mis à l'échelle pour s'adapter. La largeur et la hauteur rapportées du document intégré (c'est-à-dire {{DOMxRef("Window.innerWidth")}} et {{DOMxRef("Window.innerHeight")}}) restent inchangées.

## Valeur

Une chaîne de caractères représentant la hauteur de l'élément en pixels CSS. La valeur par défaut est `150`.

## Exemples

```js
const frame = document.createElement("fencedframe");
frame.height = "320";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
