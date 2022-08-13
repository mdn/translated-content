---
title: element.parentNode
slug: Web/API/Node/parentNode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/parentNode
original_slug: Web/API/Element/parentNode
---
{{ ApiRef() }}

### Podsumowanie

Własność **parentNode** zwraca rodzica bieżącego elementu.

### Składnia i wartości

    rodzic = element.parentNode

`rodzic` jest rodzicem bieżącego węzła. Rodzicem elementu jest węzeł typu `Element`, `Document` lub `DocumentFragment`.

### Przykład

    text_field = document.getElementById("t");
    if ( div1.parentNode == document ){
        text_field.setAttribute("value", "top-level");
        // pole tekstowe wyświetli tekst "top-level" }

### Uwagi

`parentNode` zwraca `null` dla poniższych typów węzłów: `Attr`, `Document`, `DocumentFragment`, `Entity` i `Notation`.

`null` zwracane jest także, gdy węzeł został utworzony, ale nie przypisano go jeszcze do drzewa.

### Zobacz także

{{ Domxref("element.firstChild") }}, {{ Domxref("element.lastChild") }}, {{ Domxref("element.childNodes") }}, {{ Domxref("element.nextSibling") }}, {{ Domxref("element.previousSibling") }}.

### Specyfikacja

[DOM Level 2 Core: Node.parentNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1060184317)





{{ languages( { "en": "en/DOM/element.parentNode", "fr": "fr/DOM/element.parentNode", "it": "it/DOM/element.parentNode", "ja": "ja/DOM/element.parentNode" } ) }}
