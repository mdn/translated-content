---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
translation_of: Web/API/HTMLFormElement/elements
---
APIRef("HTML DOM")

Die **`HTMLFormElement.elements`** Eigenschaft gibt eine domxref("HTMLFormControlsCollection") ( HTMLVersionInline(4) [`HTMLCollection`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506)) aller im FORM element enthaltenen Formularsteuerelemente zurück, mit Ausnahme von [`input`](/de/docs/HTML/Element/Input "input") , die ein `type` attribute haben von `image`.

Sie können auf ein bestimmtes Element zugreifen, indem Sie entweder einen Index oder den Elementnamen oder die ID verwenden.

## Syntax

    nodeList = HTMLFormElement.elements

## Beschreibung

```js
let inputs = document.getElementById("form1").elements;
let inputByIndex = inputs[2];
let inputByName = inputs["login"];
```

## Spezifikationen

| Specification                                                              | Status               | Comment            |
| -------------------------------------------------------------------------- | -------------------- | ------------------ |
| SpecName('HTML WHATWG', '#dom-form-elements', 'HTMLFormElement.elements')  | Spec2('HTML WHATWG') |                    |
| SpecName("DOM2 HTML", "html.html#ID-76728479", "HTMLFormElement.elements") | Spec2("DOM2 HTML")   | Initial definition |
