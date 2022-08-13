---
title: event.bubbles
slug: Web/API/Event/bubbles
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Event/bubbles
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje, czy zdarzenie bąbelkuje przez model dokumentu czy nie.

### Składnia

    bool = event.bubbles

### Przykład

     function goInput(e) {
      // sprawdza czy zdarzenie bąbelkuje
      if not e.bubbles {
         // i jeśli nie - przekazuje je dalej
         passItOn(e);
      }
      // jeśli bąbelkuje:
      doOutput(e)
    }





{{ languages( { "en": "en/DOM/event.bubbles", "es": "es/DOM/event.bubbles", "ja": "ja/DOM/event.bubbles" } ) }}
