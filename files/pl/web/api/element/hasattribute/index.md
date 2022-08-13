---
title: element.hasAttribute
slug: Web/API/Element/hasAttribute
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/hasAttribute
---
{{ ApiRef() }}

### Podsumowanie

`hasAttribute` zwraca wartość logiczną oznaczającą, czy element posiada określony atrybut czy nie.

### Składnia

    wynik = element.hasAttribute(nazwaAtrybutu)

- `wynik` to rezultat sprawdzenia - `true` lub `false`
- `nazwaAtrybutu` jest ciągiem znaków określającym nazwę atrybutu

### Przykład

    // przed ustawieniem wartości sprawdź, czy atrybut istnieje
    d = document.getElementById("div1");
    if(d.hasAttribute("align")){
      d.setAttribute("align", "center");
    }

### Uwagi

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: hasAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttr)



{{ languages( { "en": "en/DOM/element.hasAttribute", "fr": "fr/DOM/element.hasAttribute", "ja": "ja/DOM/element.hasAttribute" } ) }}
