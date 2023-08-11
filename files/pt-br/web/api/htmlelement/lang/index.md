---
title: HTMLElement.lang
slug: Web/API/HTMLElement/lang
---

{{ APIRef("HTML DOM") }}

The **`HTMLElement.lang`** property gets or sets the base language of an element's attribute values and text content.

The language code returned by this property is defined in [RFC 1766](http://tools.ietf.org/html/rfc1766). Common examples include "en" for English, "ja" for Japanese, "es" for Spanish and so on. The default value of this attribute is `unknown`. Note that this attribute, though valid at the individual element level described here, is most often specified for the root element of the document.

This also only works with the `lang` attribute and not with `xml:lang`.

## Sintaxe

```
var languageUsed = elementNodeReference.lang; // Get the value of lang
elementNodeReference.lang = NewLanguage; // Set new value for lang
```

_languageUsed é uma variável string que obtém o idioma no qual o texto do elemento atual é gravado. NewLanguage é uma variável string cujo valor define o idioma no qual o texto do elemento atual é gravado._

## Exemplo

```js
// this snippet compares the base language and
// redirects to another url based on language
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
