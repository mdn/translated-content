---
title: element.removeAttributeNS
slug: Web/API/Element/removeAttributeNS
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/removeAttributeNS
---
{{ ApiRef() }}

### Podsumowanie

`removeAttributeNS` usuwa określony atrybut elementu.

### Składnia

    element.removeAttributeNS(przestrzeńNazw,nazwaAtrybutu);

- `przestrzeńNazw` to ciąg znaków określający przestrzeń nazw atrybutu.
- `nazwaAtrybutu` to ciąg znaków z nazwą atrybutu do usunięcia.

### Przykład

    // <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
    //      special:specialAlign="utterleft" width="200px" />
    d = document.getElementById("div1");
    d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
    // teraz: <div id="div1" width="200px" />

### Uwagi

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: removeAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)





{{ languages( { "en": "en/DOM/element.removeAttributeNS", "fr": "fr/DOM/element.removeAttributeNS", "ja": "ja/DOM/element.removeAttributeNS" } ) }}
