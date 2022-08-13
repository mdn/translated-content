---
title: removeRange
slug: Web/API/Selection/removeRange
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Selection/removeRange
---
{{ ApiRef() }}

### Podsumowanie

Usuwa zakres z zaznaczenia.

### Składnia

    sel.removeRange(range)

### Parametry

- _`range`_
  - : Obiekt zakresu, który będzie usunięty z zaznaczenia.

### Przykłady

    /* Programowo, można wybrać więcej niż jeden zakres.
     * Ten przykład usunie wszystkie zakresy oprócz pierwszego.*/
    s = window.getSelection();
    if(s.rangeCount > 1) {
     for(var i = 1; i < s.rangeCount; i++) {
      s.removeRange(s.getRangeAt(i));
     }
    }







{{ languages( { "en": "en/DOM/Selection/removeRange", "es": "es/DOM/Selection/removeRange", "it": "it/DOM/Selection/removeRange" } ) }}
