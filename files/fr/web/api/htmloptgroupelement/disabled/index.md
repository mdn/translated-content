---
title: "HTMLOptGroupElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLOptGroupElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLOptGroupElement")}} est une valeur booléenne qui reflète l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Elements/optgroup#disabled) de l'élément HTML {{HTMLElement("optgroup")}}, indiquant si le contrôle est désactivé.

Lorsque désactivés, les éléments HTML {{HTMLElement("option")}} descendants de l'élément `<optgroup>` sont inutilisables, non cliquables et non sélectionnables. Ces `<option>` désactivés correspondront au sélecteur CSS {{CSSxRef(":disabled")}}, même si leur propriété `disabled` vaut false.

## Valeur

Une valeur booléenne.

## Exemples

```js
const optionGroup = document.getElementById("groupB");
console.log(optionGroup.disabled);
optionGroup.disabled = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
- Les pseudo-classes CSS {{CSSxRef(":disabled")}} et {{CSSxRef(":enabled")}}
