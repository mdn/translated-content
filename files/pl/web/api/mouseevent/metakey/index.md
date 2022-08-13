---
title: event.metaKey
slug: Web/API/MouseEvent/metaKey
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/metaKey
translation_of_original: Web/API/event.metaKey
original_slug: Web/API/Event/metaKey
---
{{ ApiRef() }}

### Podsumowanie

Zwraca wartość logiczną wskazującą, czy klawisz \<meta> był wciśnięty podczas wywołania zdarzenia.

### Przykład

     function goInput(e) {
     // sprawdza metaKey
       if (e.metaKey) {
            // i przekazuje zdarzenie dalej
         superSizeOutput(e);

        } else {
         doOutput(e);
        }
     }

### Uwagi

Na niekótrych platformach metaKey może obsługiwać klawisz o innej nazwie.

### Specyfikacja

[metaKey](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-MouseEvent-metaKey)

{{ languages( { "en": "en/DOM/event.metaKey" } ) }}
