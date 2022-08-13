---
title: event.initMouseEvent
slug: Web/API/MouseEvent/initMouseEvent
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/MouseEvent/initMouseEvent
original_slug: Web/API/Event/initMouseEvent
---
{{ ApiRef() }}

### Podsumowanie

Inicjuje zdarzenie myszy po jego utworzeniu (za pomocą metody [createEvent](pl/DOM/document.createEvent) interfejsu `DocumentEvent`).

### Składnia

    event.initMouseEvent(type,canBubble,cancelable,view,detail,screenX,screenY,clientX,clientY,ctrlKey,altKey,shiftKey,metaKey,button,relatedTarget);

- `type`
  - : łańcuch znaków do ustawienia [typu](pl/DOM/event.type) zdarzeń. Możliwe typy dla zdarzeń myszy: `click`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`.
- `canBubble`
  - : czy zdarzenie bąbelkuje. Ustawia wartość [event.bubbles](pl/DOM/event.bubbles).
- `cancelable`
  - : czy domyślna akcja zdarzenia może być anulowana. Ustawia Ustawia wartość [event.cancelable](pl/DOM/event.cancelable).
- `view`
  - : AbstractView zdarzenia. You should pass the [window](pl/DOM/window) object here. Ustawia wartość [event.view](pl/DOM/event.view).
- `detail`
  - : wartość licznika kliknięć myszą. Ustawia wartość [event.detail](pl/DOM/event.detail).
- `screenX`
  - : współrzędna x względem ekranu. Ustawia wartość [event.screenX](pl/DOM/event.screenX).
- `screenY`
  - : współrzędna y względem ekranu. Ustawia wartość [event.screenY](pl/DOM/event.screenY).
- `clientX`
  - : współrzędna x w obszarze klienta. Ustawia wartość [event.clientX](pl/DOM/event.clientX).
- `clientY`
  - : współrzędna y w obszarze klienta. Ustawia wartość [event.clientY](pl/DOM/event.clientY).
- `ctrlKey`
  - : czy klawisz control był wciśnięty podczas zdarzenia. Ustawia wartość [event.ctrlKey](pl/DOM/event.ctrlKey).
- `altKey`
  - : czy klawisz alt był wciśnięty podczas zdarzenia. Ustawia wartość [event.altKey](pl/DOM/event.altKey).
- `shiftKey`
  - : czy klawisz shift był wciśnięty podczas zdarzenia. Ustawia wartość [event.shiftKey](pl/DOM/event.shiftKey).
- `metaKey`
  - : czy klawisz meta był wciśnięty podczas zdarzenia. Ustawia wartość [event.metaKey](pl/DOM/event.metaKey).
- `button`
  - : zdarzenie myszy [event.button](pl/DOM/event.button).
- `relatedTarget`
  - : zdarzenie [related EventTarget](pl/DOM/event.relatedTarget). Stosowane tylko z kilkoma typami zdarzeń (np. `mouseover` i `mouseout`). W innych przypadkach, zwraca `null`.

### Przykład



### Specyfikacja

[DOM Level 2 Events: initMouseEvent](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-initMouseEvent)





{{ languages( { "en": "en/DOM/event.initMouseEvent", "es": "es/DOM/event.initMouseEvent" } ) }}
