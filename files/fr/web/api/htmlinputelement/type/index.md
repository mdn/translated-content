---
title: "HTMLInputElement : propriété type"
short-title: type
slug: Web/API/HTMLInputElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`type`** de l'interface {{DOMxRef("HTMLInputElement")}} indique le type de données autorisé dans l'élément HTML {{HTMLElement("input")}}, par exemple un nombre, une date ou un e-mail. Les navigateurs sélectionneront le composant et le comportement appropriés pour aider les utilisateur·ice·s à saisir une valeur valide.

Elle reflète l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) de l'élément {{HTMLElement("input")}}.

## Valeur

Une chaîne de caractères représentant le type.

Les valeurs possibles sont listées dans la section des [types d'entrée](/fr/docs/Web/HTML/Reference/Elements/input#les_différents_types_de_champs_input) de l'attribut.

## Exemples

### HTML

```html
<input id="input1" type="date" />
```

### JavaScript

```js
const inputElement = document.querySelector("#input1");
console.log(inputElement.type); // Sortie : "date"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.type")}}
- La propriété {{DOMxRef("HTMLButtonElement.type")}}
