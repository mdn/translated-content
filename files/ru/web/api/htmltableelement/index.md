---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
---

{{APIRef("HTML DOM")}}

Объекты `table` описывают интерфейс [`HTMLTableElement`](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64060425), который содержит дополнительные свойства и методы (по сравнению с обычным объектным интерфейсом [`element`](/ru/docs/Web/API/Element) которые также доступны вследствие наследования) для управления внешним видом таблиц HTML.

## Свойства

_Наследует свойства от родителя, {{domxref("HTMLElement")}}._

- [table.caption](/ru/docs/Web/API/HTMLTableElement/caption)
  - : **caption** возвращает заголовок таблицы.
- [table.tHead](/ru/docs/Web/API/HTMLTableElement/tHead)
  - : **tHead** возвращает header таблицы.
- [table.tFoot](/ru/docs/Web/API/HTMLTableElement/tFoot)
  - : **tFoot** возвращает footer таблицы.
- [table.rows](/ru/docs/Web/API/HTMLTableElement/rows)
  - : **rows** возвращает строки таблицы.
- [table.tBodies](/ru/docs/Web/API/HTMLTableElement/tBodies)
  - : **tBodies** возвращает тела таблицы.

<!---->

- [table.align](/ru/docs/Web/API/HTMLTableElement/align)
  - : **align** возвращает/устанавливает выравнивание таблицы.
- [table.bgColor](/ru/docs/Web/API/HTMLTableElement/bgColor)
  - : **bgColor** возвращает/устанавливает цвет фона таблицы.
- [table.border](/ru/docs/Web/API/HTMLTableElement/border)
  - : **border** возвращает/устанавливает рамку таблицы.
- [table.cellPadding](/ru/docs/Web/API/HTMLTableElement/cellPadding)
  - : **cellPadding** возвращает/устанавливает cellpadding.
- [table.cellSpacing](/ru/docs/Web/API/HTMLTableElement/cellSpacing)
  - : **cellSpacing** возвращает/устанавливает cellspacing.
- [table.frame](/ru/docs/Web/API/HTMLTableElement/frame)
  - : **frame** определяет, какие стороны таблицы имеют рамку.
- [table.rules](/ru/docs/Web/API/HTMLTableElement/rules)
  - : **rules** определяет, какие внутренние рамки являются видимыми.
- [table.summary](/ru/docs/Web/API/HTMLTableElement/summary)
  - : **summary** возвращает/устанавливает описание таблицы.
- [table.width](/ru/docs/Web/API/HTMLTableElement/width)
  - : **width** возвращает/устанавливает ширину таблицы.

## Методы

_Наследует методы от своего родителя, {{domxref("HTMLElement")}}_.

- [table.createTHead](/ru/docs/Web/API/HTMLTableElement/createTHead)
  - : **createTHead** создаёт header таблицы.
- [table.deleteTHead](/ru/docs/Web/API/HTMLTableElement/deleteTHead)
  - : **deleteTHead** удаляет header таблицы.
- [table.createTFoot](/ru/docs/Web/API/HTMLTableElement/createTFoot)
  - : **createTFoot** создаёт footer таблицы.
- [table.deleteTFoot](/ru/docs/Web/API/HTMLTableElement/deleteTFoot)
  - : **deleteTFoot** удаляет footer таблицы.
- [table.createCaption](/ru/docs/Web/API/HTMLTableElement/createCaption)
  - : **createCaption** создаёт заголовок таблицы.
- [table.deleteCaption](/ru/docs/Web/API/HTMLTableElement/deleteCaption)
  - : **deleteCaption** удаляет заголовок таблицы.
- [table.insertRow](/ru/docs/Web/API/HTMLTableElement/insertRow)
  - : **insertRow** вставляет строку.
- [table.deleteRow](/ru/docs/Web/API/HTMLTableElement/deleteRow)
  - : **deleteRow** удаляет строку.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент HTML, реализующий данный интерфейс: {{HTMLElement("table")}}.
