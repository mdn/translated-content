---
title: "HTMLOptGroupElement : propriété label"
short-title: label
slug: Web/API/HTMLOptGroupElement/label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`label`** de l'interface {{DOMxRef("HTMLOptGroupElement")}} est une chaîne de caractères qui reflète l'attribut [`label`](/fr/docs/Web/HTML/Reference/Elements/optgroup#label) de l'élément HTML {{HTMLElement("optgroup")}}, lequel fournit une étiquette textuelle au groupe d'options.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const optionGroup = document.getElementById("groupB");
console.log(optionGroup.label);
optionGroup.label = `${optionGroup.label} (${optionGroup.children.length})`;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("optgroup")}}
- L'attribut HTML [`label`](/fr/docs/Web/HTML/Reference/Elements/optgroup#label)
