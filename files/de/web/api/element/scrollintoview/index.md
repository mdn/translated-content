---
title: Element.scrollIntoView()
slug: Web/API/Element/scrollIntoView
tags:
  - API
  - CSSOM Views
  - Experimentell
  - Methode(2)
  - Reference
translation_of: Web/API/Element/scrollIntoView
---
{{ APIRef("DOM")}}{{SeeCompatTable}}

Die Methode **`Element.scrollIntoView()`** scrolled das Element in den sichtbaren Bereich des Browsers.

## Syntax

    element.scrollIntoView(); // Gleich mit element.scrollIntoView(true)
    element.scrollIntoView(alignToTop); // Boolean Argument
    element.scrollIntoView(scrollIntoViewOptions); // Object Argument

### Parameter

- _`alignToTop`_
  - : Dies ist ein {{jsxref("Boolean")}} Wert:\* Bei `true` wird der obere Rand des Elements an den oberen Rand des sichtbaren Bereichs im Browser gescrolled.
    - Bei `false` wird der untere Rand des Elements an den unteren Rand des sichtbaren Bereichs im Browser gescrolled.
- _`scrollIntoViewOptions`_

  - : Ein Boolean oder Objekt mit den folgenden Optionen:

    ```idl
    {
        behavior: "auto"  | "smooth",
        block:    "start" | "end",
    }
    ```

    Wenn der Wert ein Boolean, enspricht `true` `{block: "start"} und false {block: "end"}.`

## Beispiel

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({block: "end", behavior: "smooth"});
```

## Notizen

Das Element wird eventuell nicht ganz nach oben oder unten gescrolled. Je nach Layout der anderen Elemente.

## Technische Daten

| Specification                                                                                                    | Status                           | Kommentar          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("CSSOM View", "#dom-element-scrollintoview", "Element.scrollIntoView()")}} | {{Spec2("CSSOM View")}} | Initial definition |

## Browserkompatibilität

{{Compat("api.Element.scrollIntoView")}}

## Siehe auch

- {{non-standard_inline}} [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded)
