---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
tags:
  - API
  - Gecko DOM Reference
  - NeedsBrowserCompatibility
  - stopImmediatePropagation
  - Событие
  - Ссылка
  - Уровень 3
  - Экспериментальные функции
  - метод
translation_of: Web/API/Event/stopImmediatePropagation
---
{{APIRef("DOM")}}

Останавливает цепочку вызова событий для последующих обработчиков DOM-элемента.

## Синтаксис

```
event.stopImmediatePropagation();
```

## Замечания

Если несколько обработчиков прикреплены к одному и тому же элементу с одинаковым типом события, тогда они будут вызваны в порядке своего добавления. Если один из этих обработчиков вызовет event.stopImmediatePropagation() тогда события оставшихся обработчиков вызваны не будут.

## Спецификация

[DOM Level 3 Events: stopImmediatePropagation](http://www.w3.org/TR/DOM-Level-3-Events/#events-event-type-stopImmediatePropagation)
