---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

Интерфейс **`ClipboardEvent`** представляет события, предоставляющие информацию, связанную с изменением буфера обмена, этими события являются [`cut`](/ru/docs/Web/API/Element/cut_event), [`copy`](/ru/docs/Web/API/Element/copy_event) и [`paste`](/ru/docs/Web/API/Element/paste_event).

## Свойства

_Интерфейс наследует свойства от родителя {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Является {{domxref("DataTransfer")}} объектом, который содержит данные, полученные от совершения пользователем операции [`cut`](/ru/docs/Web/API/Element/cut_event), [`copy`](/ru/docs/Web/API/Element/copy_event) или [`paste`](/ru/docs/Web/API/Element/paste_event), а также их MIME тип.

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

- События, связанные с копированием в буфер: [`copy`](/ru/docs/Web/API/Element/copy_event), [`cut`](/ru/docs/Web/API/Element/cut_event), [`paste`](/ru/docs/Web/API/Element/paste_event)
