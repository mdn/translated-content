---
title: event.cancelable
slug: Web/API/Event/cancelable
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Event/cancelable
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje, czy zdarzenie można anulować.

### Składnia

    bool = event.cancelable

### Uwagi

To, czy zdarzenie może być anulowane czy nie jest określane w momencie, kiedy zdarzenie jest tworzone. Aby anulować zdarzenie, użyj metody [preventDefault](pl/DOM/event.preventDefault) na tym zdarzeniu, dzięki czemu nie zostanie wykonana akcja - domyślny rezultat tego zdarzenia.

### Specyfikacja

[cancelable](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-canCancel)

{{ languages( { "en": "en/DOM/event.cancelable", "es": "es/DOM/event.cancelable", "ja": "ja/DOM/event.cancelable" } ) }}
