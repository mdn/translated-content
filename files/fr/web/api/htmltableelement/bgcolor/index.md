---
title: "HTMLTableElement : propriété bgColor"
short-title: bgColor
slug: Web/API/HTMLTableElement/bgColor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`bgColor`** de {{DOMxRef("HTMLTableElement")}} représente la couleur de fond du tableau.

> [!NOTE]
> N'utilisez plus cet attribut. Utilisez plutôt la propriété CSS {{CSSxRef("background-color")}} en modifiant l'attribut [`style`](/fr/docs/Web/API/HTMLElement/style) de l'élément ou en utilisant une règle de style.

## Valeur

Une chaîne de caractères représentant une valeur de couleur.

Lorsque la valeur `null` est affectée, cette valeur est convertie en chaîne vide (`""`), donc `elt.bgColor = null` est équivalent à `elt.bgColor = ""`.

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
