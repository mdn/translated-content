---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
---

{{APIRef("HTML DOM")}}

**`HTMLBodyElement`** интерфейс предоставляющий специальные свойства (помимо этого, они постоянно наследуют {{ domxref("HTMLElement") }} интерфейс) для манипуляции элементами тела.

## Свойства

_Наследует свойства о его родителя, {{domxref("HTMLElement")}} и от {{domxref("WindowEventHandlers")}}._

- {{domxref("HTMLBodyElement.aLink")}}
  - : Это {{ domxref("DOMString") }} который представляет цвет активных гиперссылок.
- {{domxref("HTMLBodyElement.background")}}
  - : Это {{ domxref("DOMString") }} который представляет собой описание расположения фонового изображения ресурса. Обратите внимание, что это не URI, хотя в некоторых старых версиях некоторых браузеров ожидается именно это.
- {{domxref("HTMLBodyElement.bgColor")}}
  - : Это {{ domxref("DOMString") }} который представляет собой цвет фона для документа.
- {{domxref("HTMLBodyElement.link")}}
  - : Это {{ domxref("DOMString") }} который представляет собой цвет непосещенных ссылок.
- {{domxref("HTMLBodyElement.text")}}
  - : Это {{ domxref("DOMString") }} который представляет собой основной цвет текста.
- {{domxref("HTMLBodyElement.vLink")}}
  - : Это {{ domxref("DOMString") }} который представляет собой цвет посещённых ссылок.

## Методы

_Не имеет специфичных методов; наследует методы от его родителя, {{domxref("HTMLElement")}} и от {{domxref("WindowEventHandlers")}}._

## Обработчики событий

_Не имеет специфичных обработчиков событий; наследует обработчики событий от его родителя, {{domxref("HTMLElement")}} и от {{domxref("WindowEventHandlers")}}._

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющий собой код который будет вызван когда {{event("afterprint")}} событие будет вызвано.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("beforeprint")}} вызвано.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("beforeunload")}} вызвано.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("hashchange")}} вызвано.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("languagechange")}} вызвано.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("message")}} вызвано.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("offline")}} вызвано.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("online")}} вызвано.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("pagehide")}} вызвано.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("pageshow")}} вызвано.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("popstate")}} вызвано.
- {{domxref("WindowEventHandlers.onresize")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("resize")}} вызвано.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("storage")}} вызвано.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Это {{event("Event_handlers", "event handler")}} представляющее собой код который будет вызван когда событие {{event("unload")}} вызвано.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент реализующий этот интерфейс: {{ HTMLElement("body") }}
