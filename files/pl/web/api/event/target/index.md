---
title: event.target
slug: Web/API/Event/target
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/Event/target
---
{{ ApiRef() }}

### Podsumowanie

Zwraca referencję do elementu, do którego zdarzenie zostało pierwotnie wysłane.

### Składnia

    referencjaDoEventTarget = event.target

### Parametry

- `referencjaDoEventTarget` to referencja do obiektu EventTarget

### Przykład

     d = document.getElementById("d1");
     if e.target != d
        resetGame();
     // nie nasze zdarzenie

### Specyfikacja

[target](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-target)

{{ languages( { "en": "en/DOM/event.target" } ) }}
