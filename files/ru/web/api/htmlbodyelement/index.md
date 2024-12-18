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
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющий собой код который будет вызван когда [`afterprint`](/ru/docs/Web/API/Window/afterprint_event) событие будет вызвано.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`beforeprint`](/ru/docs/Web/API/Window/beforeprint_event) вызвано.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`beforeunload`](/ru/docs/Web/API/Window/beforeunload_event) вызвано.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`hashchange`](/ru/docs/Web/API/Window/hashchange_event) вызвано.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код, который будет вызван при появлении события {{domxref("Window.languagechange_event", "languagechange")}}.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`message`](/ru/docs/Web/API/BroadcastChannel/message_event) вызвано.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`offline`](/ru/docs/Web/API/Window/offline_event) вызвано.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`online`](/ru/docs/Web/API/Window/online_event) вызвано.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`pagehide`](/ru/docs/Web/API/Window/pagehide_event) вызвано.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`pageshow`](/ru/docs/Web/API/Window/pageshow_event) вызвано.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`popstate`](/ru/docs/Web/API/Window/popstate_event) вызвано.
- {{domxref("WindowEventHandlers.onresize")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`resize`](/ru/docs/Web/API/Window/resize_event) вызвано.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`storage`](/ru/docs/Web/API/Window/storage_event) вызвано.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Это [`event handler`](/ru/docs/Web/Events/Event_handlers) представляющее собой код который будет вызван когда событие [`unload`](/ru/docs/Web/API/Window/unload_event) вызвано.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент реализующий этот интерфейс: {{ HTMLElement("body") }}
