---
title: event.currentTarget
slug: Web/API/Event/currentTarget
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/Event/currentTarget
---
{{ ApiRef() }}

### Podsumowanie

Pozwala zidentyfikować obecnie zarejestrowany element docelowy zdarzenia.

### Składnia

    referencjaDoWęzła = event.currentTarget

### Parametry

- `referencjaDoWęzła` to referencja do obiektu węzła DOM

### Przykład

     if e.currentTarget != t_el
        resetEventEngine();

### Specyfikacja

[currentTarget](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-currentTarget)

{{ languages( { "en": "en/DOM/event.currentTarget" } ) }}
