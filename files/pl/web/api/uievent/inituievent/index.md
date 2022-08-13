---
title: event.initUIEvent
slug: Web/API/UIEvent/initUIEvent
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/UIEvent/initUIEvent
original_slug: Web/API/Event/initUIEvent
---
{{ ApiRef() }}

### Podsumowanie

Inicjalizuje utworzone wcześniej zdarzenie interfejsu użytkownika.

### Składnia

    event.initUIEvent(type,canBubble,cancelable,view,detail)

### Parametry

- `type`
  - : typ zdarzenia
- `canBubble`
  - : Wartość logiczna wskazująca, czy zdarzenie ma bąbelkować czy nie (zob. [bubbles](pl/DOM/event.bubbles)).
- `cancelable`
  - : Wartość logiczna wskazująca, czy zdarzenie może zostać anulowane (zob. [cancelable](pl/DOM/event.cancelable)).
- `view`
  - : widok ([AbstractView](pl/DOM/AbstractView)) powiązany z tym zdarzeniem
- `detail`
  - : liczba określająca szczegółową informację dla tego zdarzenia; dla zdarzeń myszy jest to liczba kliknięć w danym miejscu ekranu (zwykle 1).

### Przykład

    e = document.createEvent("UIEvents");
    // tworzy zdarzenie kliknięcia, które bąbelkuje, może być
    // anulowane i którego widok i szczegółowa informacja
    // to odpowiednio window i 1
    e.initUIEvent("click", true, true, window, 1);

### Specyfikacja

[initUIEvent](http://www.w3.org/TR/2001/WD-DOM-Level-3-Events-20010823/events.html#Events-Event-initUIEvent)

{{ languages( { "en": "en/DOM/event.initUIEvent" } ) }}
