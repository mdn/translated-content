---
title: event.screenX
slug: Web/API/MouseEvent/screenX
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/screenX
translation_of_original: Web/API/event.screenX
original_slug: Web/API/Event/screenX
---
{{ ApiRef() }}

### Podsumowanie

Zwraca poziomą współrzędną miejsca, gdzie wystąpiło zdarzenie, względem całego ekranu.

### Składnia

    liczbaPikseli = event.screenX

### Parametry

- `liczbaPikseli` to odległość od lewej strony ekranu wyrażona w pikselach.

### Przykład

     function checkClickMap(e) {
       if e.screenX < 50
         doRedButton();
       if 50 <= e.screenX < 100
         doYellowButton();
       if e.screenX >= 100
         doRedButton();
     }

### Uwagi

Kiedy złapiesz zdarzenie w oknie, dokumencie czy innym obszernym elemencie możesz pobrać współrzędne tego zdarzenia (np. kliknięcia) i obsłużyć je prawidłowo, tak jak pokazuje powyższy przykład.

### Specyfikacja

[screenX](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-MouseEvent-screenX)

{{ languages( { "en": "en/DOM/event.screenX" } ) }}
