---
title: MouseEvent.pageX
slug: Web/API/MouseEvent/pageX
---

{{APIRef("DOM Events")}}

**`MouseEvent.pageX`** - это свойство {{domxref("MouseEvent")}} доступное только для чтения. Данное свойство возвращает значение равное горизонтальной координате, относительно всего документа. Это свойство учитывает любую горизонтальную прокрутку страницы. Первоначально это свойство было определено как длинное целое число. Модуль просмотра CSSOM переопределил его как double float. Подробнее см. Раздел «Совместимость с браузером».

## Синтаксис

```
var pos = event.pageX
```

## Примеры

```
var pageX = event.pageX;
pageX === event.clientX + (window.pageYOffset || document.body.scrollTop);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("UIEvent.pageX")}}
