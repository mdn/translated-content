---
title: "HTMLInputElement : propriété readOnly"
short-title: readOnly
slug: Web/API/HTMLInputElement/readOnly
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`readOnly`** de l'interface {{DOMxRef("HTMLInputElement")}} indique que l'utilisateur·ice ne peut pas modifier la valeur de l'élément HTML {{HTMLElement("input")}}. Elle reflète l'attribut booléen [`readonly`](/fr/docs/Web/HTML/Reference/Elements/input#readonly) de l'élément {{HTMLElement("input")}}&nbsp;; elle retourne `true` si l'attribut est présent et `false` lorsqu'il est omis.

Contrairement à un contrôle de formulaire avec une propriété {{DOMxRef("HTMLInputElement.disabled", "disabled")}} à `true`, une valeur de propriété `readOnly` à `true` n'empêche pas l'utilisateur·ice de cliquer ou de sélectionner dans le contrôle.

Alors que l'attribut HTML `readonly` est ignoré si le type est `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `reset`, `button` et `image`, la propriété `readOnly` est `true` pour ces types d'entrée si l'attribut est présent, `false` sinon.

## Valeur

Un booléen.

## Exemples

```js
const inputElement = document.getElementById("total");
console.log(inputElement.readOnly);
inputElement.readOnly = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.disabled")}}
- La pseudo-classe CSS {{CSSxRef(":read-only")}}
