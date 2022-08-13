---
title: element.setAttribute
slug: Web/API/Element/setAttribute
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/setAttribute
---
{{ ApiRef() }}

### Podsumowanie

`setAttribute` dodaje nowy lub zmienia wartość atrybutu w bieżącym elemencie.

### Składnia

    element.setAttribute(nazwa,wartość)

### Parametry

- `nazwa` to łańcuch znaków z nazwą nowego atrybutu,
- `wartość` to żądana wartość nowego atrybutu.

### Przykład

    d = document.getElementById("d1");
    d.setAttribute("align", "center");

### Uwagi

Jeśli istnieje już atrybut o danej nazwie, jego wartość zostaje zmieniona na wartość podaną w wywołaniu **setAttribute**. Jeśli nie istnieje taki atrybut, zostanie on utworzony.

Pomimo, że [getAttribute](pl/DOM/element.getAttribute) zwraca `null` jeśli atrybut nie istnieje, do usuwania atrybutów powinieneś używać metody [removeAttribute](pl/DOM/element.removeAttribute), a nie `element.setAttribute(attr, null)`.

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: setAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68F082) (wprowadzono w [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute))



{{ languages( { "en": "en/DOM/element.setAttribute", "fr": "fr/DOM/element.setAttribute", "ja": "ja/DOM/element.setAttribute" } ) }}
