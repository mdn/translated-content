---
title: event.initEvent
slug: Web/API/Event/initEvent
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Event/initEvent
---
{{ ApiRef() }}

### Podsumowanie

Metoda służy do zainicjalizowania zdarzenia utworzonego za pomocą [interfejsu DocumentEvent](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-document)

### Składnia

    event.initKeyEvent(type,bubbles,cancelable)

### Parametry

- `type`
  - : Typ zdarzenia.
- `bubbles`
  - : Wartość logiczna wskazująca, czy zdarzenie ma bąbelkować czy nie (zob. [bubbles](pl/DOM/event.bubbles)).
- `cancelable`
  - : Wartość logiczna wskazująca, czy zdarzenie może zostać anulowane (zob. [cancelable](pl/DOM/event.cancelable)).

### Przykład

    // utwórz zdarzenie kliknięcia, które bąbelkuje
    // i nie może być anulowane
    event.initEvent("click", true, false);

### Uwagi

Zdarzenia inicjalizowane w ten sposób muszą zostać utworzone za pomocą metody [createEvent](pl/DOM/document.createEvent) interfejsu DocumentEvent. Metoda **initEvent** musi być wywołana by ustawić zdarzenie przed jego wywołaniem (za pomocą [dispatchEvent](pl/DOM/element.dispatchEvent)).

### Specyfikacja

[initEvent](http://www.w3.org/TR/2001/WD-DOM-Level-3-Events-20010823/events.html#Events-Event-initEvent)







{{ languages( { "en": "en/DOM/event.initEvent", "es": "es/DOM/event.initEvent", "fr": "fr/DOM/event.initEvent", "ja": "ja/DOM/event.initEvent" } ) }}
