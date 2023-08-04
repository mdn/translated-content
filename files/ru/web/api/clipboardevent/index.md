---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

Интерфейс **`ClipboardEvent`** представляет события, предоставляющие информацию, связанную с изменением буфера обмена, этими события являются {{event("cut")}}, {{event("copy")}} и {{event("paste")}}.

## Свойства

_Интерфейс наследует свойства от родителя {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Является {{domxref("DataTransfer")}} объектом, который содержит данные, полученные от совершения пользователем операции {{event("cut")}}, {{event("copy")}} или {{event("paste")}}, а также их MIME тип.

## Конструктор

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Создаёт `ClipboardEvent` событие с переданными параметрами.

## Методы

_Нет специальных методов; Этот интерфейс наследует методы от своего родителя {{domxref("Event")}}_.

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- События, связанные с копированием в буфер: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
