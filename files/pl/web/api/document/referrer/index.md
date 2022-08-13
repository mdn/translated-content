---
title: document.referrer
slug: Web/API/Document/referrer
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/referrer
---
{{ ApiRef() }}

### Podsumowanie

Zwraca URI strony, która przekierowała na bieżącą stronę.

### Składnia

    ciąg = document.referrer

### Uwagi

Jeżeli użytkownik otworzył stronę bezpośrednio (nie poprzez odnośnik, ale np. za pomocą zakładki), wartością tej właściwości jest pusty ciąg.

Zauważ też, że właściwość ta zwraca tylko ciąg tekstowy, nie daje dostępu do DOM strony odsyłającej.

### Specyfikacja

[referrer](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-95229140)

{{ languages( { "en": "en/DOM/document.referrer" } ) }}
