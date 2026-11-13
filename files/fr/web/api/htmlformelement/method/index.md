---
title: "HTMLFormElement : propriété method"
short-title: method
slug: Web/API/HTMLFormElement/method
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

La propriété **`method`** de l'interface {{DOMxRef("HTMLFormElement")}} représente la méthode {{Glossary("HTTP")}} utilisée pour soumettre l'élément HTML {{HTMLElement("form")}}.

Sauf indication explicite, la méthode par défaut est `get`.

## Valeur

Une chaîne de caractères.

## Exemple

```js
document.forms["my-form"].method = "post";

const formElement = document.createElement("form"); // Crée un formulaire
document.body.appendChild(formElement);
console.log(formElement.method); // 'get'
```

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
