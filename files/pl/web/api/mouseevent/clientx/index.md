---
title: event.clientX
slug: Web/API/MouseEvent/clientX
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/clientX
translation_of_original: Web/API/event.clientX
original_slug: Web/API/Event/clientX
---
{{ ApiRef() }}

### Podsumowanie

Zwraca poziomą współrzędną zdarzenia w obszarze klienta.

### Przykład

     function checkClientClickMap(e) {
       if e.clientX < 50 {
         doRedButton(); }
       if 50 <= e.clientX < 100 {
         doYellowButton(); }
       if e.clientX >= 100 {
         doRedButton(); } }

### Uwagi

Zobacz też [clientY](pl/DOM/event.clientY).

### Specyfikacja

[clientX](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-MouseEvent-clientX)

{{ languages( { "en": "en/DOM/event.clientX" } ) }}
