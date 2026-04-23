---
title: "HTMLImageElement : propriété align"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété _obsolète_ **`align`** de l'interface {{DOMxRef("HTMLImageElement")}} est une chaîne de caractères qui indique comment positionner l'image par rapport à son conteneur.

Il est recommandé d'utiliser à la place la propriété CSS {{CSSxRef("vertical-align")}}, qui fonctionne aussi pour les images malgré son nom. Vous pouvez également utiliser la propriété {{CSSxRef("float")}} pour faire flotter l'image à la marge gauche ou droite.

## Valeur

Une chaîne de caractères dont la valeur est l'une des suivantes&nbsp;: `top`, `middle`, `bottom`, `left` ou `right`. Pour leur signification, voir la référence HTML [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img#align).

## Exemples

### Définir l'attribut `align`

```js example-bad
const img = new Image();
img.src = "example.png";
img.align = "top";
```

Au lieu d'utiliser la propriété obsolète `align`, il est préférable de définir la propriété CSS `vertical-align`&nbsp;:

```js example-good
const img = new Image();
img.src = "example.png";
img.style.verticalAlign = "top";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
