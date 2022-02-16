---
title: HTMLFormElement.length
slug: Web/API/HTMLFormElement/length
translation_of: Web/API/HTMLFormElement/length
---
{{APIRef("HTML DOM")}}

La propriété en lecture seule **`HTMLFormElement.length`** retourne le nombre de contrôles présents dans l'élément {{HTMLElement("Form")}}.

## Syntaxe

    integer = form.length

## Exemple

```js
if (document.getElementById("form1").length > 1) {
  // more than one form control here
}
```

## Spécifications

- [HTML 5, Section 4.10.3, The form Element](http://www.w3.org/TR/html5/forms.html#dom-form-length)
- [DOM Level 2: length](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#HTML-HTMLFormElement-length)
