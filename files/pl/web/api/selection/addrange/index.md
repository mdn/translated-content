---
title: addRange
slug: Web/API/Selection/addRange
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Selection/addRange
---
{{ ApiRef() }}

### Podsumowanie

Dodaje zakres do zaznaczenia.

### Składnia

    sel.addRange(range)

### Parametry

- _`range`_
  - : Obiekt [zakresu](pl/DOM/range), który będzie dodany do zaznaczenia.

### Przykłady

     /* Wybiera wszystkie znaczniki STRONG w dokumencie HTML */
     var strongs = document.getElementsByTagName("strong");
     var s = window.getSelection();
     if(s.rangeCount > 0) s.removeAllRanges();
     for(var i = 0; i < strongs.length; i++) {
      var range = document.createRange();
      range.selectNode(strongs[i]);
      s.addRange(range);
     }





{{ languages( { "en": "en/DOM/Selection/addRange", "es": "es/DOM/Selection/addRange", "it": "it/DOM/Selection/addRange" } ) }}
