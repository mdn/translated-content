---
title: GlobalEventHandlers.onchange
slug: Web/API/HTMLElement/change_event
---

{{ ApiRef("HTML DOM") }}

Свойство `onchange` (Дословно "На изменение") устанавливает и возвращает [обработчик события](/docs/Web/Guide/Events/Event_handlers), для события {{event("change")}} (Изменение чего-либо).

## Синтаксис

```
element.onchange = handlerFunction; // handlerFunction - ссылка на функцию обработчик, установленная как свойство onchange, для элемента element
var handlerFunction = element.onchange;
```

`handlerFunction` должна быть либо [функцией](/ru/docs/Web/JavaScript/Reference/Functions) определяющей обработчик события, либо `null` .

## Примечания

Почитайте страницу [DOM обработчики события](/ru/docs/Web/Guide/Events/Event_handlers) , там содержится вся информация о работе с `on...` обработчиками.

Документация по событию {{event("change")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
