---
title: event.shiftKey
slug: Web/API/MouseEvent/shiftKey
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/shiftKey
translation_of_original: Web/API/event.shiftKey
original_slug: Web/API/Event/shiftKey
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje, czy klawisz \<shift> był wciśnięty przy wywołaniu zdarzenia.

### Składnia

    bool = event.shiftKey

### Przykład

     function goInput(e) {
     // sprawdza shiftKey
       if e.shiftKey
           // i przekazuje zdarzenie dalej
         superSizeOutput(e);
       else
         doOutput(e)

### Specyfikacja

[shiftKey](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-MouseEvent-shiftKey)

{{ languages( { "en": "en/DOM/event.shiftKey" } ) }}
