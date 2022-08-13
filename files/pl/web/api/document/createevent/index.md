---
title: document.createEvent
slug: Web/API/Document/createEvent
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/createEvent
---
{{ ApiRef() }}

### Podsumowanie

Tworzy obiekt obsługi [zdarzenia](pl/DOM/event) o określonym typie. Utworzony obiekt powinien zostać najpierw zainicjalizowany, a następnie przekazany do metody [dispatchEvent](pl/DOM/element.dispatchEvent) elementu.

### Składnia

    var zdarzenie =document.createEvent(typ);

- `zdarzenie` to utworzony obiekt [Event](pl/DOM/event).
- `typ` to ciąg oznaczający typ tworzonego zdarzenia. Możliwe typy to m.in.: `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"`, i `"HTMLEvents"`. Zob. [Uwagi](#uwagi).

### Przykład

[dispatchEvent - przykład \[pl\]](/pl/docs/DOM/dispatchEvent_-_przyk%C5%82ad)

### Uwagi

Nazwy typów zdarzeń, które można przekazać do `createEvent` określane są przez
_moduły zdarzeń_
. Niektóre moduły zdarzeń zdefiniowane są w specyfikacjach DOM Events, niektóre moduły w innych specyfikacjach (jak np. SVG), a pewne typy zdarzeń są specyficzne dla Gecko.

Szczegóły znajdziesz w poniższej tabeli.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Moduł zdarzeń</th>
      <th>Typ do przekazania w <code>createEvent</code></th>
      <th>Metoda używana do inicjalizacji zdarzenia</th>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">
        <a
          class="external"
          href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings"
          >DOM Level 2 Events</a
        >
      </td>
    </tr>
    <tr>
      <td>Moduł zdarzeń interfejsu użytkownika</td>
      <td><code>"UIEvents"</code></td>
      <td><a href="pl/DOM/event.initUIEvent">event.initUIEvent</a></td>
    </tr>
    <tr>
      <td>Moduł zdarzeń myszy</td>
      <td><code>"MouseEvents"</code></td>
      <td><a href="pl/DOM/event.initMouseEvent">event.initMouseEvent</a></td>
    </tr>
    <tr>
      <td>Moduł zdarzeń mutacji</td>
      <td><code>"MutationEvents"</code></td>
      <td>
        <a href="pl/DOM/event.initMutationEvent">event.initMutationEvent</a>
      </td>
    </tr>
    <tr>
      <td>Moduł zdarzeń HTML</td>
      <td><code>"HTMLEvents"</code></td>
      <td><a href="pl/DOM/event.initEvent">event.initEvent</a></td>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">
        <a
          class="external"
          href="http://www.w3.org/TR/DOM-Level-3-Events/events.html#Events-eventgroupings"
          >DOM Level 3 Events</a
        >
      </td>
    </tr>
    <tr>
      <td>Moduł zdarzeń interfejsu użytkownika</td>
      <td><code>"UIEvent"</code>, <code>"UIEvents"</code></td>
      <td><a href="pl/DOM/event.initUIEvent">event.initUIEvent</a></td>
    </tr>
    <tr>
      <td>Moduł zdarzeń myszy</td>
      <td><code>"MouseEvent"</code>, <code>"MouseEvents"</code></td>
      <td><a href="pl/DOM/event.initMouseEvent">event.initMouseEvent</a></td>
    </tr>
    <tr>
      <td>Moduł zdarzeń mutacji</td>
      <td><code>"MutationEvent"</code>, <code>"MutationEvents"</code></td>
      <td>
        <a href="pl/DOM/event.initMutationEvent">event.initMutationEvent</a>
      </td>
    </tr>
    <tr>
      <td>
        Moduł zdarzeń mutacji nazw (nie zaimplementowany przez Gecko - czerwiec
        2006)
      </td>
      <td><code>"MutationNameEvent"</code></td>
      <td>
        <a href="pl/DOM/event.initMutationNameEvent"
          >event.initMutationNameEvent</a
        >
      </td>
    </tr>
    <tr>
      <td>Moduł zdarzeń tekstowych</td>
      <td>
        <code>"TextEvent"</code> (Gecko obsługuje też <code>"TextEvents"</code>)
      </td>
      <td><a href="pl/DOM/event.initTextEvent">event.initTextEvent</a></td>
    </tr>
    <tr>
      <td>Moduł zdarzeń klawiatury</td>
      <td>
        <code>"KeyboardEvent"</code> (Gecko obsługuje też
        <code>"KeyEvents"</code>)
      </td>
      <td>
        <a href="pl/DOM/event.initKeyboardEvent">event.initKeyboardEvent</a>
      </td>
    </tr>
    <tr>
      <td>Moduł podstawowych zdarzeń</td>
      <td><code>"Event"</code> (Gecko obsługuje też <code>"Events"</code>)</td>
      <td><a href="pl/DOM/event.initEvent">event.initEvent</a></td>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">
        <a
          class="external"
          href="http://www.w3.org/TR/SVG/script.html#DOMInterfaces"
          >SVG 1.1 Scripting</a
        >
      </td>
    </tr>
    <tr>
      <td rowspan="2">SVG</td>
      <td>
        <code>"SVGEvents"</code> (Gecko obsługuje też <code>"SVGEvent"</code>)
      </td>
      <td><a href="pl/DOM/event.initEvent">event.initEvent</a></td>
    </tr>
    <tr>
      <td>
        <code>"SVGZoomEvents"</code> (Gecko obsługuje też
        <code>"SVGZoomEvent"</code>)
      </td>
      <td><a href="pl/DOM/event.initUIEvent">event.initUIEvent</a></td>
    </tr>
    <tr style="background-color: #eee">
      <td colspan="3">
        Inne typy zdarzeń obsługiwane przez Gecko
        <span class="comment"
          >Gecko-related information is taken from
          nsEventDispatcher::CreateEvent code - see lxr.m.o</span
        >
      </td>
    </tr>
    <tr>
      <td rowspan="3">-</td>
      <td><code>"MouseScrollEvents"</code>, <code>"PopupEvents"</code></td>
      <td><a href="pl/DOM/event.initMouseEvent">event.initMouseEvent</a></td>
    </tr>
    <tr>
      <td><code>"PopupBlockedEvents"</code></td>
      <td>
        <a href="pl/DOM/event.initPopupBlockedEvent"
          >event.initPopupBlockedEvent</a
        >
      </td>
    </tr>
    <tr>
      <td><code>"XULCommandEvent"</code>, <code>"XULCommandEvents"</code></td>
      <td>
        <a href="pl/DOM/event.initCommandEvent">event.initCommandEvent</a>
      </td>
    </tr>
  </tbody>
</table>

Niektóre zdarzenia mogą być tworzone przy użyciu dwóch nazw typów, ponieważ w specyfikacji DOM Level 3 Events zmieniono nazwy z liczby mnogiej na pojedynczą, pozostawiając nazwy w liczbie mnogiej dla zgodności wstecznej.

### Specyfikacja

[DOM Level 2 Events: createEvent](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-DocumentEvent-createEvent)

[DOM Level 3 Events: createEvent](http://www.w3.org/TR/DOM-Level-3-Events/events.html#Events-DocumentEvent-createEvent)





{{ languages( { "en": "en/DOM/document.createEvent", "es": "es/DOM/document.createEvent", "ja": "ja/DOM/document.createEvent" } ) }}
