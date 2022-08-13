---
title: element.removeAttribute
slug: Web/API/Element/removeAttribute
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/removeAttribute
---
{{ ApiRef() }}

### Podsumowanie

`removeAttribute` usuwa atrybut bieżącego elementu.

### Składnia

    element.removeAttribute(nazwaAtrybutu)

- `nazwaAtrybutu` to ciąg znaków określający nazwę atrybutu elementu
  _element_
  , który to atrybut ma zostać usunięty

### Przykład

    // <div align="left" width="200px">
    document.getElementById("div1").removeAttribute("align");
    // teraz: <div width="200px">

### Uwagi

Aby usunąć atrybut, powinieneś używać metody `removeAttribute`, a nie ustawiać wartość atrybutu na `null` za pomocą [setAttribute](pl/DOM/element.setAttribute).

Próba usunięcia nieistniejącego atrybutu elementu nie wyrzuca wyjątku.

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: removeAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9) (wprowadzono w [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute))



{{ languages( { "en": "en/DOM/element.removeAttribute", "fr": "fr/DOM/element.removeAttribute", "ja": "ja/DOM/element.removeAttribute" } ) }}
