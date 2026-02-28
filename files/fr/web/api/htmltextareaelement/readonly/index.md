---
title: "HTMLTextAreaElement : propriété readOnly"
short-title: readOnly
slug: Web/API/HTMLTextAreaElement/readOnly
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`readOnly`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique que l'utilisateur·ice ne peut pas modifier la valeur du contrôle. Contrairement à l'attribut {{DOMxRef("HTMLTextAreaElement.disabled", "disabled")}}, l'attribut `readonly` n'empêche pas l'utilisateur·ice de cliquer ou de sélectionner dans le contrôle. Elle reflète l'attribut [`readonly`](/fr/docs/Web/HTML/Reference/Elements/textarea#readonly) de l'élément HTML {{HTMLElement("textarea")}}.

## Valeur

Un booléen.

## Exemples

```js
const textareaElement = document.getElementById("comment");
console.log(textareaElement.readOnly);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.disabled")}}
- La pseudo-classe CSS {{CSSxRef(":read-only")}}
