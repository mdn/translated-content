---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

The **`ClipboardEvent`** interface represents events providing information related to modification of the clipboard, that is [`cut`](/es/docs/Web/Reference/Events/cut), [`copy`](/es/docs/Web/Reference/Events/copy), and [`paste`](/es/docs/Web/Reference/Events/paste) events.

## Constructor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Creates a `ClipboardEvent` event with the given parameters.

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Is a {{domxref("DataTransfer")}} object containing the data affected by the user-initiated [`cut`](/es/docs/Web/Reference/Events/cut), [`copy`](/es/docs/Web/Reference/Events/copy), or [`paste`](/es/docs/Web/Reference/Events/paste) operation, along with its MIME type.

## Methods

_No specific methods; inherits methods from its parent {{domxref("Event")}}_.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- Copy-related events: [`copy`](/es/docs/Web/Reference/Events/copy), [`cut`](/es/docs/Web/Reference/Events/cut), [`paste`](/es/docs/Web/Reference/Events/paste)
