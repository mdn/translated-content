---
title: "HTMLFormElement : propriété acceptCharset"
short-title: acceptCharset
slug: Web/API/HTMLFormElement/acceptCharset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`acceptCharset`** de l'interface {{DOMxRef("HTMLFormElement")}} représente l'{{Glossary("character encoding", "encodage de caractères")}} de l'élément HTML {{HTMLElement("form")}}.

La spécification autorise une seule valeur insensible à la casse `"UTF-8"`, reflétant l'omniprésence de cet encodage (historiquement plusieurs encodages de caractères pouvaient être spécifiés sous forme d'une liste séparée par des virgules ou par des espaces).

Ceci reflète la valeur de l'attribut HTML [`accept-charset`](/fr/docs/Web/HTML/Reference/Elements/form#accept-charset) du formulaire.

## Valeur

Une chaîne de caractères pouvant correspondre, de façon insensible à la casse, à `UTF-8`.

## Exemple

```js
let charSet = document.forms["my-form"].acceptCharset;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
