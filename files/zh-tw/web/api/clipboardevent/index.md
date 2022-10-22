---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
---

{{APIRef("Clipboard API")}} {{SeeCompatTable}}

**`ClipboardEvent`** 介面表示了與修改剪貼簿相關的事件，包括 {{event("cut")}}、{{event("copy")}} 及 {{event("paste")}} 事件。

## 屬性

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : Is a {{domxref("DataTransfer")}} object containing the data affected by the user-initiated {{event("cut")}}, {{event("copy")}}, or {{event("paste")}} operation, along with its MIME type.

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

- Copy-related events: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
