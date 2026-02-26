---
title: "HTMLTableElement : propriété cellPadding"
short-title: cellPadding
slug: Web/API/HTMLTableElement/cellPadding
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`cellPadding`** de l'interface {{DOMxRef("HTMLTableElement")}} représente les marges internes autour des cellules individuelles du tableau.

## Valeur

Une chaîne de caractères représentant des pixels (par exemple, `"10"`) ou une valeur en pourcentage (par exemple, `"10%"`).

Lorsque la valeur `null` est affectée, cette valeur est convertie en chaîne vide (`""`), donc `elt.cellPadding = null` est équivalent à `elt.cellPadding = ""`.

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
