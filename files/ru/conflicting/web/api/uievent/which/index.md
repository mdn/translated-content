---
title: MouseEvent.which
slug: conflicting/Web/API/UIEvent/which
original_slug: Web/API/MouseEvent/which
---

{{APIRef("DOM Events")}} {{Non-standard_header}}

**`MouseEvent.which`** это свойство только для чтения которое показывает какая именно кнопка мыши вызвала событие MouseEvent. Стандартная альтернатива этому свойству – {{ domxref("MouseEvent.button") }} и {{ domxref("MouseEvent.buttons") }}.

## Синтаксис

```
var buttonPressed = instanceOfMouseEvent.which
```

### Возвращаемое значение

Значения соответствующие кнопкам:

- `0`: Нет кнопки
- `1`: Левая кнопка
- `2`: Средняя (если есть)
- `3`: Права кнопка

Для мыши настроенной для левшей порядок значений будет изменён. В этом случае значению `1` будет соответствовать правая кнопка, а `3` – левая.

## Спецификация

Это свойство не является частью спецификации.

## Совместимость с браузерами

{{Compat("api.MouseEvent.which")}}

## Смотрите также

- {{ domxref("MouseEvent") }}
