---
title: element.dispatchEvent
slug: Web/API/EventTarget/dispatchEvent
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/EventTarget/dispatchEvent
original_slug: Web/API/Element/dispatchEvent
---
{{ ApiRef() }}

### Podsumowanie

Wywołuje zdarzenie w bieżącym elemencie.

### Składnia

    bool = element.dispatchEvent(event)

- `event` to [obiekt zdarzenia](pl/DOM/event), które ma zostać wywołane.
- Jeśli któraś z funkcji obsługujących to zdarzenie wywoła [preventDefault](pl/DOM/event.preventDefault), zwracana wartość to `false`. W przeciwnym przypadku zwracane jest `true`.

### Uwagi

Jak pokazuje powyższy przykład, `dispatchEvent` to ostatni krok w procesie utwórz-zainicjuj-wywołaj, którego używa się by ręcznie wywołać zdarzenia w modelu zdarzeń implementacji.

Zdarzenie może zostać utworzone przy użyciu metody [document.createEvent](pl/DOM/document.createEvent) i zainicjowane za pomocą [initEvent](pl/DOM/event.initEvent) lub innej, bardziej wyspecjalizowanej metody, jak [initMouseEvent](pl/DOM/event.initMouseEvent) albo [initUIEvent](pl/DOM/event.initUIEvent).

Zobacz też dokumentację [obiektu event](pl/DOM/event).

### Specyfikacja

[DOM Level 2 Events: dispatchEvent](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget-dispatchEvent)





{{ languages( { "en": "en/DOM/element.dispatchEvent", "es": "es/DOM/element.dispatchEvent", "fr": "fr/DOM/element.dispatchEvent", "ja": "ja/DOM/element.dispatchEvent" } ) }}
