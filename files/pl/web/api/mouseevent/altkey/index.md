---
title: event.altKey
slug: Web/API/MouseEvent/altKey
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/altKey
translation_of_original: Web/API/event.altKey
original_slug: Web/API/Event/altKey
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje, czy klawisz \<alt> był wciśnięty przy wywołaniu zdarzenia.

### Składnia

    bool = event.altKey

### Przykład

     function goInput(e) {
     // sprawdza przycisk <alt>
       if e.altKey {
          // przekazuje zdarzenie dalej
          superSizeOutput(e);
       }
       else {
         doOutput(e);
       }
     }



{{ languages( { "en": "en/DOM/event.altKey", "ja": "ja/DOM/event.altKey" } ) }}
