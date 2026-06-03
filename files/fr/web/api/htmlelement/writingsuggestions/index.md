---
title: "HTMLElement : propriété writingSuggestions"
short-title: writingSuggestions
slug: Web/API/HTMLElement/writingSuggestions
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`writingSuggestions`** de l'interface {{DOMxRef("HTMLElement")}} est une chaîne de caractères indiquant si les suggestions d'écriture fournies par le navigateur doivent être activées ou non dans le cadre de l'élément.

Elle reflète la valeur de l'attribut HTML universel [`writingsuggestions`](/fr/docs/Web/HTML/Reference/Global_attributes/writingsuggestions).

## Valeur

Une valeur énumérée&nbsp;; les valeurs possibles sont&nbsp;:

- `"true"`
  - : Le navigateur affiche automatiquement les suggestions d'écriture lorsque l'utilisateur·ice appuie ou sélectionne l'élément.
- `"false"`
  - : Le navigateur n'affiche pas automatiquement les suggestions d'écriture&nbsp;: l'affichage/masquage des suggestions est géré manuellement par le script.

## Exemples

L'exemple suivant montre comment désactiver les suggestions d'écriture proposées par les agents utilisateur via un script&nbsp;:

```js
const element = document.querySelector("input");

// désactiver les suggestions d'écriture de l'agent utilisateur
element.writingSuggestions = "false";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`writingsuggestions`](/fr/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
