---
title: element.lastChild
slug: Web/API/Node/lastChild
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/lastChild
original_slug: Web/API/Element/lastChild
---
{{ ApiRef() }}

### Podsumowanie

**lastChild** zwraca ostatnie dziecko węzła.

### Składnia i wartości

    ostatnieDziecko = element.lastChild

`ostatnieDziecko` to węzeł. Jeśli jego rodzicem jest element, dzieckiem jest na ogół węzeł elementu, komentarza lub węzeł tekstowy.

### Przykład

    tr = document.getElementById("row1");
    td_róg = tr.lastChild;

### Uwagi

Jeżeli nie ma węzłów potomnych, zwracane jest `null`.

### Specyfikacja

[lastChild](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-61AD09FB)



{{ languages( { "en": "en/DOM/element.lastChild", "fr": "fr/DOM/element.lastChild", "ja": "ja/DOM/element.lastChild" } ) }}
