---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
---

{{APIRef("DOM")}}

Прекращает дальнейшую передачу текущего события.

## Синтаксис

```
event.stopPropagation();
```

## Пример

См. Пример 5: [Event Propagation](/ru/docs/conflicting/Web/API/Document_Object_Model_16086573ad7dac5194660bdbfcad47fdf7637bed7caad1fb76fb380952c4fb4b#example_5:_event_propagation) для более детального объяснения данного метода и всего механизма передачи событий в DOM документе.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Смотрите [DOM specification](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) для понимания потока событий. ([DOM Level 3 Events draft](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) содержит иллюстрации.)
- {{domxref("Event.preventDefault()")}} – это дополнительный метод, который запрещает исполнение метода по умолчанию, предназначенного для данного события.
