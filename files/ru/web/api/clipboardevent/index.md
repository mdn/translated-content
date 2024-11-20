---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

Интерфейс **`ClipboardEvent`** представляет события, предоставляющие информацию, связанную с изменением буфера обмена, этими события являются [`cut`](/ru/docs/Web/Events/cut), [`copy`](/ru/docs/Web/Events/copy) и [`paste`](/ru/docs/Web/Events/paste).

## Свойства

_Интерфейс наследует свойства от родителя {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Является {{domxref("DataTransfer")}} объектом, который содержит данные, полученные от совершения пользователем операции [`cut`](/ru/docs/Web/Events/cut), [`copy`](/ru/docs/Web/Events/copy) или [`paste`](/ru/docs/Web/Events/paste), а также их MIME тип.

## Конструктор

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Создаёт `ClipboardEvent` событие с переданными параметрами.

## Методы

_Нет специальных методов; Этот интерфейс наследует методы от своего родителя {{domxref("Event")}}_.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- События, связанные с копированием в буфер: [`copy`](/ru/docs/Web/Events/copy), [`cut`](/ru/docs/Web/Events/cut), [`paste`](/ru/docs/Web/Events/paste)
