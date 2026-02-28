---
title: "HTMLTextAreaElement : propriété defaultValue"
short-title: defaultValue
slug: Web/API/HTMLTextAreaElement/defaultValue
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{APIRef("HTML DOM")}}

La propriété **`defaultValue`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} représente le contenu textuel par défaut de cette zone de texte. Obtenir et définir cette valeur est équivalent à obtenir et définir {{DOMxRef("Node.textContent", "textContent")}} sur le {{HTMLElement("textarea")}}.

## Valeur

Une chaîne de caractères.

## Exemples

Dans l'exemple ci-dessous, `defaultValue` retourne toujours la valeur initialement écrite dans le HTML. Si une valeur par défaut est définie, soit via le HTML soit via la propriété `defaultValue`, la saisie utilisateur mettra à jour la `value` mais n'écrasera pas la `defaultValue`.

```js
const textareaElement = document.getElementById("comment");
console.log(textareaElement.defaultValue);
textareaElement.defaultValue = "Ceci est désormais le texte par défaut !";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.value")}}
