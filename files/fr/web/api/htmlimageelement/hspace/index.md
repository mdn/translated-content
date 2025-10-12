---
title: "HTMLImageElement : propriété hspace"
short-title: hspace
slug: Web/API/HTMLImageElement/hspace
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

La propriété **`hspace`** (_obsolète_) de l'interface {{domxref("HTMLImageElement")}} définit le nombre de pixels d'espace vide à laisser à gauche et à droite de l'élément {{HTMLElement("img")}} lors de la mise en page.

Cette propriété reflète l'attribut [`hspace`](/fr/docs/Web/HTML/Reference/Elements/img#hspace) en {{Glossary("HTML")}}.

## Valeur

Une valeur entière qui définit la largeur, en pixels, de la marge horizontale à appliquer aux côtés gauche et droit de l'image.

## Notes d'utilisation

La valeur spécifiée pour `hspace` est appliquée aux propriétés CSS {{cssxref("margin-left")}} et {{cssxref("margin-right")}} pour définir la largeur de ces marges en pixels.

> [!WARNING]
> Cette propriété est obsolète. Vous devez utiliser la propriété CSS {{cssxref("margin")}} et ses variantes longues pour définir les marges autour d'un `<img>`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
