---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}

[Clipboard API](/zh-TW/docs/Web/API/Clipboard_API) 的 **`ClipboardEvent`** 介面表示與剪貼簿修改相關的事件，也就是 {{domxref("Element/cut_event", "cut")}}、{{domxref("Element/copy_event", "copy")}} 和 {{domxref("Element/paste_event", "paste")}} 事件。

{{InheritanceDiagram}}

## 建構子

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : 使用給定的參數建立 `ClipboardEvent` 事件。

## 實例屬性

_也繼承自其父類別 {{domxref("Event")}} 的屬性。_

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : {{domxref("DataTransfer")}} 物件，包含使用者觸發的{{domxref("Element/cut_event", "剪下")}}、{{domxref("Element/copy_event", "複製")}}或{{domxref("Element/paste_event", "貼上")}}操作所影響的資料及其 MIME 類型。

## 實例方法

_無特定方法；繼承自其父類別 {{domxref("Event")}} 的方法。_

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 與複製相關的事件：{{domxref("Element/copy_event", "copy")}}、{{domxref("Element/cut_event", "cut")}}、{{domxref("Element/paste_event", "paste")}}
- [Clipboard API](/zh-TW/docs/Web/API/Clipboard_API)
- [文章：非同步剪貼簿的圖片支援](https://web.dev/articles/async-clipboard)
