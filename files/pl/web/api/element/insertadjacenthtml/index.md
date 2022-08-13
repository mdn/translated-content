---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
translation_of: Web/API/Element/insertAdjacentHTML
---
{{APIRef("DOM")}}

**`insertAdjacentHTML()`** metoda z {{domxref("Element")}} interfejsu analizuje specyficzny tekst jak HTML albo XML, wstawia wynik w drzewo DOM w określonej pozycji. to nie naprawia elementu jest użyty na a zatem nie jest zepsuty istniejący element w środku elementu. To unika ekstra kroków z serializacją, zrobienie tego jest wiele szybsze niż bezpośredni {{domxref("Element.innerHTML", "innerHTML")}} manipulation.

## Syntax

    element.insertAdjacentHTML(position, text);

### Parametry

- `position`
  - : A {{domxref("DOMString")}} reprezentuje pozycję relatywną element-u musi być must be jeden z następujących ciągów:\* `'beforebegin'`: przed `element` -em.
    - `'afterbegin'`: W środku `element`-u przed jego pierwszym dzieckiem.
    - `'beforeend'`: W środku elementu po jego ostatnim dziecku.
    - `'afterend'`: Po `element`-cie
- `text`
  - : string analizuje HTML albo XML i włącza w drzewo.

### Visualization of position names

    <!-- beforebegin -->
    <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
    </p>
    <!-- afterend -->

> **Note:**`beforebegin` i `afterend` pozycja działa tylko jeśli node jest w drzewie DOM i ma rodzica elementu.

## Przykład:

```js
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// At this point, the new structure is:
// <div id="one">one</div><div id="two">two</div>
```

## Notes

### Security considerations

When inserting HTML into a page by using `insertAdjacentHTML()`, be careful not to use user input that hasn't been escaped.

It is not recommended you use `insertAdjacentHTML()` when inserting plain text; instead, use the {{domxref("Node.textContent")}} property or the {{domxref("Element.insertAdjacentText()")}} method. This doesn't interpret the passed content as HTML, but instead inserts it as raw text.

## Specification

| Specification                                                                                                                                                                        | Status                               | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------- |
| {{SpecName('DOM Parsing', '#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text', 'Element.insertAdjacentHTML()')}} | {{ Spec2('DOM Parsing') }} |         |

## Browser compatibility

{{Compat("api.Element.insertAdjacentHTML")}}

## See also

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: Construct a DOM representation of XML text
- [hacks.mozilla.org guest post](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) by Henri Sivonen including benchmark showing that insertAdjacentHTML can be way faster in some cases.
