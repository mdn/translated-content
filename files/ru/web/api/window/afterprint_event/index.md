---
title: WindowEventHandlers.onafterprint
slug: Web/API/Window/afterprint_event
---

{{APIRef}}

Свойство `WindowEventHandlers.onafterprint` устанавливает и возвращает обработчик [`event handler`](/ru/docs/Web/Events/Event_handlers) события [`afterprint`](/ru/docs/Web/API/Window/afterprint_event) в текущем окне.

## Синтаксис

```
window.onafterprint = код обработки события
```

## Примечания

Некоторые браузеры (включая Firefox 6 и его более поздние версии, и Internet Explorer) генерируют события `beforeprint` и `afterprint`, чтобы дать сигнал о процессе распечатки страницы. Вы можете использовать эти события, чтобы повлиять на интерфейс пользователя во время печати (например, показать или скрыть отдельные его части).

Событие `afterprint` генерируется когда пользователь закончил печать или отменил её.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("window.print")}}
- {{domxref("window.onbeforeprint")}}
- [Printing](/ru/docs/Web/CSS/CSS_media_queries/Printing)
