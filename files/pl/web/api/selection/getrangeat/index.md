---
title: getRangeAt
slug: Web/API/Selection/getRangeAt
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Selection/getRangeAt
---
{{ ApiRef() }}

### Podsumowanie

Zwraca obiekt zakresu reprezentujący jeden z obecnie zaznaczonych zakresów.

### Składnia

    range =sel.getRangeAt(index)

### Parametry

- _`range`_
  - : Obiekt [zakresu](pl/DOM/range), który zostanie zwrócony.

<!---->

- _`index`_
  - : Wartość liczbowa liczona od zera. Wartość ujemna, równa albo większa od [rangeCount](pl/DOM/Selection/rangeCount) spowoduje wystąpienie błędu.

### Przykłady

    ranges = [];
    sel = window.getSelection();
    for(var i = 0; i < sel.rangeCount; i++) {
     ranges[i] = sel.getRangeAt(i);
    }
    /* Każdy element w tablicy zakresów jest teraz
     * obiektem zakresu reprezentującym jeden z
     * zakresów w aktualnym zaznaczeniu */

{{ languages( { "en": "en/DOM/Selection/getRangeAt", "es": "es/DOM/Selection/getRangeAt" } ) }}
