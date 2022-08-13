---
title: document.getElementsByName
slug: Web/API/Document/getElementsByName
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/getElementsByName
---
{{ ApiRef() }}

### Podsumowanie

Zwraca listę elementów w dokumencie o żądanym atrybucie `name`.

### Składnia

    elementy = document.getElementsByName(nazwa)

### Parametry

- `elementy` to lista elementów typu `nodeList`
- `nazwa` to ciąg znaków reprezentujący wartość atrybutu `name` elementu.

### Przykład

    // zwraca niektóre z DIV-ów
    <div name="up">200</div>
    <div name="up">145</div>
    <div name="down">146</div>
    <div name="other">178</div>
    up_divs = document.getElementsByName("up");
    dump(up_divs.item(0).tagName); // zwraca "div"

### Uwagi

**document.getElementsByName** zwraca listę węzłów wszystkich elementów o zadanej wartości atrybutu `name`. W przeciwieństwie do [getElementsByTagName](pl/DOM/element.getElementsByTagName), który analizuje samą nazwę elementu, ta metoda pracuje tylko na elementach, których atrybut `name` został wyraźnie podany.

### Specyfikacja

[getElementsByName](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-71555259)

{{ languages( { "en": "en/DOM/document.getElementsByName", "fr": "fr/DOM/document.getElementsByName", "ja": "ja/DOM/document.getElementsByName" } ) }}
