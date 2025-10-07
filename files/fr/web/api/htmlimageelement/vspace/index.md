---
title: "HTMLImageElement : propriété vspace"
short-title: vspace
slug: Web/API/HTMLImageElement/vspace
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

La propriété **`vspace`** (_obsolète_) de l'interface {{domxref("HTMLImageElement")}} définit le nombre de pixels d'espace vide à laisser au-dessus et en dessous de l'élément HTML {{HTMLElement("img")}} lors de la mise en page.

## Valeur

Une valeur entière définissant la hauteur, en pixels, de la marge verticale à appliquer aux parties supérieure et inférieure de l'image.

## Notes d'utilisation

La valeur définie pour `vspace` est appliquée sur les propriétés {{cssxref("margin-top")}} et {{cssxref("margin-bottom")}} pour définir la hauteur de ces marges en pixels.

> [!WARNING]
> Cette propriété est obsolète. Vous devez utiliser à la place la propriété CSS {{cssxref("margin")}} et ses formes développées pour définir les marges autour d'un élément HTML `<img>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
