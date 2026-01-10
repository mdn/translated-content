---
title: "HTMLImageElement : propriété border"
short-title: border
slug: Web/API/HTMLImageElement/border
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété _obsolète_ **`border`** de l'interface {{DOMxRef("HTMLImageElement")}} définit le nombre de pixels d'épaisseur que doit avoir la bordure entourant l'image. Une valeur de 0, la valeur par défaut, indique qu'aucune bordure ne doit être dessinée. Elle reflète l'attribut de contenu [`border`](/fr/docs/Web/HTML/Reference/Elements/img#border) de l'élément HTML `<img>`.

Il est recommandé d'utiliser la propriété CSS {{CSSxRef("border")}} ou ses propriétés détaillées, qui permettent non seulement de définir l'épaisseur de la bordure mais aussi d'appliquer de nombreuses autres options de mise en forme.

## Valeur

Une chaîne de caractères contenant une valeur entière qui définit l'épaisseur de la bordure entourant l'image, en pixels CSS. Une valeur de `0` ou une chaîne vide indique qu'aucune bordure ne doit être dessinée. La valeur par défaut de `border` est `0`.

Si on assigne la valeur `null`, celle-ci est convertie en chaîne vide (`""`), donc `elt.border = null` est équivalent à `elt.border = ""`.

## Exemples

### Définir l'attribut `border`

```js example-bad
const img = new Image();
img.src = "exemple.png";
img.border = "1";
```

Au lieu d'utiliser la propriété obsolète `border`, il est préférable de définir la propriété CSS `border`&nbsp;:

```js example-good
const img = new Image();
img.src = "exemple.png";
img.style.border = "1px solid black";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
