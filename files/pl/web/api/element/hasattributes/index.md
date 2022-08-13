---
title: element.hasAttributes
slug: Web/API/Element/hasAttributes
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/hasAttributes
---
{{ ApiRef() }}

### Podsumowanie

**hasAttributes** zwraca wartość logiczną zależnie od tego, czy element posiada jakiekolwiek atrybuty.

### Składnia

    [ true | false ] = element.hasAttributes

### Przykład

    t1 = document.getElementById("table-data");
    if ( t1.hasAttributes ) {
        // zrób coś z
        // t1.attributes
    }

### Specyfikacja

[hasAttributes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-NodeHasAttrs)



{{ languages( { "en": "en/DOM/element.hasAttributes", "fr": "fr/DOM/element.hasAttributes", "it": "it/DOM/element.hasAttributes" } ) }}
