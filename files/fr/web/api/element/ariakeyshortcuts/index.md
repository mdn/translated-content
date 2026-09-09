---
title: "Element : propriété ariaKeyShortcuts"
short-title: ariaKeyShortcuts
slug: Web/API/Element/ariaKeyShortcuts
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

La propriété **`ariaKeyShortcuts`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut `aria-keyshortcuts`, qui indique les raccourcis clavier qu'un·e auteur·ice a mis en œuvre pour activer ou donner la sélection à un élément.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-keyshortcuts` sur l'élément avec un ID de `lien-passer` est défini sur `"Alt+Shift+A"`. En utilisant `ariaKeyShortcuts`, nous mettons à jour la valeur à `"Alt+Shift+M"`.

```html
<a id="lien-passer" href="#content" aria-keyshortcuts="Alt+Shift+A">
  Passer au contenu
</a>
```

```js
let el = document.getElementById("lien-passer");
console.log(el.ariaKeyShortcuts); // "Alt+Shift+A"
el.ariaKeyShortcuts = "Alt+Shift+M";
console.log(el.ariaKeyShortcuts); // "Alt+Shift+M"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
