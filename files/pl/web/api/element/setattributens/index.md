---
title: element.setAttributeNS
slug: Web/API/Element/setAttributeNS
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/setAttributeNS
---
{{ ApiRef() }}

### Podsumowanie

`setAttributeNS` dodaje nowy lub zmienia wartość istniejącego atrybutu o podanej nazwie i przestrzeni nazw.

### Składnia

    element.setAttributeNS(przestrzeńNazw,nazwa,wartość)

- `przestrzeńNazw` to ciąg znaków określajacy przestrzeń nazw atrybutu.
- `nazwa` to ciąg znaków określający nazwę atrybutu do ustawienia.
- `wartość` to żądana wartość atrybutu.

### Przykład

    var d = document.getElementById("d1");
    d.setAttributeNS("http://www.mozilla.org/ns/specialspace", "align", "center");

### Uwagi

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)





{{ languages( { "en": "en/DOM/element.setAttributeNS", "fr": "fr/DOM/element.setAttributeNS", "ja": "ja/DOM/element.setAttributeNS" } ) }}
