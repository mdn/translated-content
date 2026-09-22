---
title: "HTMLTableElement : propriété cellSpacing"
short-title: cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Il est préférable d'utiliser la propriété CSS {{CSSxRef("border-spacing")}}. La propriété obsolète **`cellSpacing`** de l'interface {{DOMxRef("HTMLTableElement")}} représente l'espacement autour des éléments HTML {{HTMLElement("th")}} et {{HTMLElement("td")}} qui constituent les cellules d'un tableau. Deux cellules sont séparées par la somme des valeurs `cellSpacing` de chacune des deux cellules.

## Valeur

Une chaîne de caractères correspondant soit à un nombre de pixels (par exemple, `"10"`), soit à une valeur en pourcentage (par exemple, `"10%"`).

Lorsque la valeur `null` est affectée, cette valeur est convertie en chaîne de caractères vide (`""`), donc `elt.cellSpacing = null` est équivalent à `elt.cellSpacing = ""`.

## Exemples

Cet exemple définit l'espacement des cellules d'un tableau donné à 10 pixels.

```js
const t = document.getElementById("TableA");
t.cellSpacing = "10";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
