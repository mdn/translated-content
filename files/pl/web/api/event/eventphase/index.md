---
title: event.eventPhase
slug: Web/API/Event/eventPhase
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/Event/eventPhase
---
{{ ApiRef() }}

### Podsumowanie

Wskazuje która faza przepływu zdarzenia jest aktualnie przetwarzana.

### Składnia

    faza = event.eventPhase

### Parametry

- `faza` to liczba o jednej z poniższych wartości:

| 1   | [CAPTURING_PHASE](pl/DOM/Event.CAPTURING_PHASE) | faza przechwytywania               |
| --- | ----------------------------------------------- | ---------------------------------- |
| 2   | [AT_TARGET](pl/DOM/Event.AT_TARGET)             | zdarzenie przy elemencie docelowym |
| 3   | [BUBBLING_PHASE](pl/DOM/Event.BUBBLING_PHASE)   | faza bąbelkowania                  |

### Specyfikacja

[eventPhase](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-eventPhase)

{{ languages( { "en": "en/DOM/event.eventPhase" } ) }}
