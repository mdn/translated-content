---
title: element.length
slug: Web/API/NodeList/length
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/NodeList/length
original_slug: Web/API/Element/length
---
{{ ApiRef() }}

### Podsumowanie

**length** zwraca liczbę elementów listy.

### Składnia

    liczbaElementów = nodeList.length

### Parametry

- `liczbaElementów` to liczba całkowita reprezentująca liczbę elementów listy.

### Przykład

    // wszystkie paragrafy z dokumentu
    items = document.getElementsByTagName("p");
    // są jakieś?
    if ( items.length ) {
         // dodaj HTML z każdego elemntu listy
         for (var i = 0; i < items.length; i++) {
             gross += items[0].innerHTML;
             // gross zawiera teraz cały HTML z paragrafów
         }
    }

### Uwagi

Właściwość **length** jest bardzo częsta w programowaniu z użyciem DOM. Używa się jej by sprawdzić, czy lista zawiera elementy oraz w pętli for, jak w powyższym przykładzie.

### Specyfikacja

[length](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-203510337)

{{ languages( { "en": "en/DOM/element.length", "ja": "ja/DOM/element.length" } ) }}
