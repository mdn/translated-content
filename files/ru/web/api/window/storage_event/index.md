---
title: storage
slug: Web/API/Window/storage_event
---

{{APIRef}}

Событие `storage` сигнализирует, что данные в объектах `localStorage` или `sessionStorage` были изменены. Подробнее см. [Web Storage API](/ru/docs/Web/API/Web_Storage_API).

## Общая информация

- Specification
  - : _[Web Storage](https://www.w3.org/TR/webstorage/#the-storage-event)_
- Interface
  - : {{domxref("StorageEvent")}}
- Bubbles
  - : Нет
- Cancelable
  - : Нет
- Target
  - : DefaultView (`<window>`)
- Default Action
  - : Нет

## Свойства

| Property                         | Type                          | Description                                            |
| -------------------------------- | ----------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}      | {{domxref("EventTarget")}}    | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}        | {{jsxref("String")}}          | The type of event.                                     |
| `bubbles` {{readonlyInline}}     | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}}  | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |
| `key` {{readonlyInline}}         | {{jsxref("String")}} (string) | The key being changed.                                 |
| `oldValue` {{readonlyInline}}    | {{jsxref("String")}} (string) | The old value of the key being changed.                |
| `newValue` {{readonlyInline}}    | {{jsxref("String")}} (string) | The new value of the key being changed.                |
| `url` {{readonlyInline}}         | {{jsxref("String")}} (string) | The address of the document whose key changed.         |
| `storageArea` {{readonlyInline}} | {{domxref("Storage")}}        | The Storage object that was affected.                  |
