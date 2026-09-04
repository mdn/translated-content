---
title: "HTMLTextAreaElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLTextAreaElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique si ce contrôle de texte multiligne est désactivé et ne peut pas être utilisé. Elle reflète l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Elements/textarea#autocomplete) de l'élément HTML {{HTMLElement("textarea")}}. Lorsque la valeur est équivalente à faux, ce `textarea` peut tout de même être désactivé si son élément parent, comme un {{HTMLElement("fieldset")}}, est désactivé.

## Valeur

Un booléen.

## Exemples

```js
const textareaElement = document.getElementById("comment");
if (commentsDisabled) {
  textareaElement.disabled = true;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.readOnly")}}
