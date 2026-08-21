---
title: "HTMLTableElement : propriété bgColor"
short-title: bgColor
slug: Web/API/HTMLTableElement/bgColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

La propriété **`bgColor`** de {{DOMxRef("HTMLTableElement")}} représente la couleur de fond du tableau.

> [!NOTE]
> N'utilisez plus cet attribut. Utilisez plutôt la propriété CSS {{CSSxRef("background-color")}} en modifiant l'attribut [`style`](/fr/docs/Web/API/HTMLElement/style) de l'élément ou en utilisant une règle de style.

## Valeur

Une chaîne de caractères représentant une valeur de couleur.

Lorsque la valeur `null` est affectée, cette valeur est convertie en chaîne de caractères vide (`""`), donc `elt.bgColor = null` est équivalent à `elt.bgColor = ""`.

## Exemples

```js
// Définir la couleur de fond du tableau sur lightblue
const t = document.getElementById("TableA");
t.bgColor = "lightblue";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("background-color")}}
