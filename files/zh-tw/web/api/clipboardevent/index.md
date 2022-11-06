---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

**`ClipboardEvent`** 介面表示了與修改剪貼簿相關的事件，包括 [`cut`](/zh-TW/docs/Web/API/Element/cut_event)、[`copy`](/zh-TW/docs/Web/API/Element/copy_event) 及 [`paste`](/zh-TW/docs/Web/API/Element/paste_event) 事件。

## 屬性

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Is a {{domxref("DataTransfer")}} object containing the data affected by the user-initiated [`cut`](/zh-TW/docs/Web/API/Element/cut_event), [`copy`](/zh-TW/docs/Web/API/Element/copy_event), or [`paste`](/zh-TW/docs/Web/API/Element/paste_event) operation, along with its MIME type.

## 建構式

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Creates a `ClipboardEvent` event with the given parameters.

## 方法

_No specific methods; inherits methods from its parent {{domxref("Event")}}_.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- Copy-related events: [`copy`](/zh-TW/docs/Web/API/Element/copy_event), [`cut`](/zh-TW/docs/Web/API/Element/cut_event), [`paste`](/zh-TW/docs/Web/API/Element/paste_event)
