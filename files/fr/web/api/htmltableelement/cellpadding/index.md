---
title: "HTMLTableElement : propriété cellPadding"
short-title: cellPadding
slug: Web/API/HTMLTableElement/cellPadding
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

La propriété **`cellPadding`** de l'interface {{DOMxRef("HTMLTableElement")}} représente les marges internes autour des cellules individuelles du tableau.

## Valeur

Une chaîne de caractères représentant des pixels (par exemple, `"10"`) ou une valeur en pourcentage (par exemple, `"10%"`).

Lorsque la valeur `null` est affectée, cette valeur est convertie en chaîne de caractères vide (`""`), donc `elt.cellPadding = null` est équivalent à `elt.cellPadding = ""`.

## Exemples

```js
// Définir la marge interne des cellules à 10 pixels
let t = document.getElementById("TableA");
t.cellPadding = "10";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
