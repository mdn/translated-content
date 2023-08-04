---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
---

{{APIRef("HTML DOM")}}

Объекты `table` описывают интерфейс [`HTMLTableElement`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64060425), который содержит дополнительные свойства и методы (по сравнению с обычным объектным интерфейсом [`element`](/ru/docs/DOM/element) которые также доступны вследствие наследования) для управления внешним видом таблиц HTML.

## Свойства

_Наследует свойства от родителя, {{domxref("HTMLElement")}}._

- [table.caption](/ru/docs/DOM/table.caption)
  - : **caption** возвращает заголовок таблицы.
- [table.tHead](/ru/docs/DOM/table.tHead)
  - : **tHead** возвращает header таблицы.
- [table.tFoot](/ru/docs/DOM/table.tFoot)
  - : **tFoot** возвращает footer таблицы.
- [table.rows](/ru/docs/DOM/table.rows)
  - : **rows** возвращает строки таблицы.
- [table.tBodies](/ru/docs/DOM/table.tBodies)
  - : **tBodies** возвращает тела таблицы.

<!---->

- [table.align](/ru/docs/DOM/table.align)
  - : **align** возвращает/устанавливает выравнивание таблицы.
- [table.bgColor](/ru/docs/DOM/table.bgColor)
  - : **bgColor** возвращает/устанавливает цвет фона таблицы.
- [table.border](/ru/docs/DOM/table.border)
  - : **border** возвращает/устанавливает рамку таблицы.
- [table.cellPadding](/ru/docs/DOM/table.cellPadding)
  - : **cellPadding** возвращает/устанавливает cellpadding.
- [table.cellSpacing](/ru/docs/DOM/table.cellSpacing)
  - : **cellSpacing** возвращает/устанавливает cellspacing.
- [table.frame](/ru/docs/DOM/table.frame)
  - : **frame** определяет, какие стороны таблицы имеют рамку.
- [table.rules](/ru/docs/DOM/table.rules)
  - : **rules** определяет, какие внутренние рамки являются видимыми.
- [table.summary](/ru/docs/DOM/table.summary)
  - : **summary** возвращает/устанавливает описание таблицы.
- [table.width](/ru/docs/DOM/table.width)
  - : **width** возвращает/устанавливает ширину таблицы.

## Методы

_Наследует методы от своего родителя, {{domxref("HTMLElement")}}_.

- [table.createTHead](/ru/docs/DOM/table.createTHead)
  - : **createTHead** создаёт header таблицы.
- [table.deleteTHead](/ru/docs/DOM/table.deleteTHead)
  - : **deleteTHead** удаляет header таблицы.
- [table.createTFoot](/ru/docs/DOM/table.createTFoot)
  - : **createTFoot** создаёт footer таблицы.
- [table.deleteTFoot](/ru/docs/DOM/table.deleteTFoot)
  - : **deleteTFoot** удаляет footer таблицы.
- [table.createCaption](/ru/docs/DOM/table.createCaption)
  - : **createCaption** создаёт заголовок таблицы.
- [table.deleteCaption](/ru/docs/DOM/table.deleteCaption)
  - : **deleteCaption** удаляет заголовок таблицы.
- [table.insertRow](/ru/docs/DOM/table.insertRow)
  - : **insertRow** вставляет строку.
- [table.deleteRow](/ru/docs/DOM/table.deleteRow)
  - : **deleteRow** удаляет строку.

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## Смотрите также

- Элемент HTML, реализующий данный интерфейс: {{HTMLElement("table")}}.
