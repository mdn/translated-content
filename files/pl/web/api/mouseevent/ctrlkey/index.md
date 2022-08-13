---
title: event.ctrlKey
slug: Web/API/MouseEvent/ctrlKey
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/ctrlKey
translation_of_original: Web/API/event.ctrlKey
original_slug: Web/API/Event/ctrlKey
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje, czy klawisz \<ctrl> był wciśnięty podczas wywołania zdarzenia.

### Składnia

    bool = event.ctrlKey

### Przykład

     function goInput(e) {
     // sprawdza ctrlKey
       if e.ctrlKey
            // i przekazuje zdarzenie dalej
         superSizeOutput(e);
       else
         doOutput(e)

### Specyfikacja

[ctrlKey](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-MouseEvent-ctrlKey)

{{ languages( { "en": "en/DOM/event.ctrlKey" } ) }}
