---
title: "HTMLInputElement : propriété defaultChecked"
short-title: defaultChecked
slug: Web/API/HTMLInputElement/defaultChecked
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`defaultChecked`** de l'interface {{DOMxRef("HTMLInputElement")}} indique l'état de sélection par défaut de l'élément. Cette propriété reflète l'attribut [`checked`](/fr/docs/Web/HTML/Reference/Elements/input#checked) de l'élément HTML {{HTMLElement("input")}}.

L'attribut booléen [`checked`](/fr/docs/Web/HTML/Reference/Elements/input#checked) est valide pour les types d'entrée `radio` (`{{HTMLElement("input/radio", "&lt;input type=\"radio\"&gt;")}}`) et `checkbox` (`{{HTMLElement("input/checkbox", "&lt;input type=\"checkbox\"&gt;")}}`). La présence de cet attribut définit la propriété `defaultChecked` à `true`.

## Value

Un booléen.

## Exemples

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.defaultChecked);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La pseudo-classe CSS {{CSSxRef(":default")}}
- La pseudo-classe CSS {{CSSxRef(":checked")}}
