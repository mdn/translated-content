---
title: "HTMLFieldSetElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLFieldSetElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} est une valeur booléenne reflétant l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Elements/fieldset#disabled) de l'élément HTML {{HTMLElement("fieldset")}}, qui indique si le contrôle est désactivé.

Lorsque l'élément est désactivé, tous les contrôles de formulaire descendants du `<fieldset>`, à l'exception des éléments descendants de l'enfant {{HTMLElement("legend")}} du `<fieldset>`, le cas échéant, sont désactivés. Un élément désactivé est inutilisable et non cliquable, et correspond au sélecteur {{CSSxRef(":disabled")}}, même si la valeur de sa propriété `disabled` est `false`.

## Valeur

Une valeur booléenne.

## Exemples

```js
const fs = document.getElementById("billing-address");
console.log(fs.disabled);
fs.disabled = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
- Les pseudo-classes CSS {{CSSxRef(":disabled")}} et {{CSSxRef(":enabled")}}
