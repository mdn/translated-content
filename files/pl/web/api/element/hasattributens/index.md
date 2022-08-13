---
title: element.hasAttributeNS
slug: Web/API/Element/hasAttributeNS
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/hasAttributeNS
---
{{ ApiRef() }}

### Podsumowanie

`hasAttributeNS` zwraca wartość logiczną oznaczającą, czy bieżący element ma określony atrybut.

### Składnia

    wynik =element.hasAttributeNS(przestrzeńNazw,nazwaLokalna)

- `wynik` to wartość logiczna - `true` lub `false`.
- `przestrzeńNazw` to ciąg znaków określający przestrzeń nazw atrybutu.
- `nazwaLokalna` to nazwa atrybutu.

### Przykład

    // sprawdza czy jest taki atrybut
    // przed nadaniem mu wartości
    var d = document.getElementById("div1");
    if (d.hasAttributeNS(
            "http://www.mozilla.org/ns/specialspace/",
            "special-align")) {
       d.setAttribute("align", "center");
    }

### Uwagi

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: hasAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)





{{ languages( { "en": "en/DOM/element.hasAttributeNS", "fr": "fr/DOM/element.hasAttributeNS", "ja": "ja/DOM/element.hasAttributeNS" } ) }}
