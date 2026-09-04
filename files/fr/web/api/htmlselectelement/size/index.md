---
title: "HTMLSelectElement : propriété size"
short-title: size
slug: Web/API/HTMLSelectElement/size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`size`** de l'interface {{DOMxRef("HTMLSelectElement")}} définit le nombre d'options, ou de lignes, qui doivent être visibles en même temps. Elle reflète l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/select#size) de l'élément HTML {{HTMLElement("select")}}. Si elle est omise, la valeur est `0`.

> [!NOTE]
> Par défaut, un `<select>` affiche une seule ligne sauf si {{DOMxRef("HTMLSelectElement.multiple", "multiple")}} est vrai, auquel cas quatre lignes sont affichées. La valeur par défaut de la propriété `size` est `0`.

## Valeur

Un nombre.

## Exemples

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.size);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("option")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedOptions")}}
- La propriété {{DOMxRef("HTMLSelectElement.length")}}
