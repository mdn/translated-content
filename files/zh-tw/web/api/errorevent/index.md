---
title: ErrorEvent
slug: Web/API/ErrorEvent
---

{{APIRef("HTML DOM")}}

**`ErrorEvent`** 介面是用來提供程式碼或是檔案的錯誤訊息的事件。

## Properties

_此介面繼承了其父 {{domxref("Event")}} 的 properties 。_

- {{domxref("ErrorEvent.message")}} {{readonlyInline}}
  - : 一 {{domxref("DOMString")}} 提供具可讀性的關於問題的錯誤訊息。
- {{domxref("ErrorEvent.filename")}} {{readonlyInline}}
  - : 一 {{domxref("DOMString")}} ，為發生錯誤的程式碼檔案的檔名。
- {{domxref("ErrorEvent.lineno")}} {{readonlyInline}}
  - : 一 `整數` ，為發生問題的程式的行數。
- {{domxref("ErrorEvent.colno")}} {{readonlyInline}}
  - : 一 `整數` ，為發生問題的程式的欄數。
- {{domxref("ErrorEvent.error")}} {{readonlyInline}} {{experimental_inline}}
  - : 一個參與該事件的 JavaScript `Object` 。

## Constructor

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : 建立一 `ErrorEvent` 事件，其包含提供的參數。

## Methods

_此介面繼承了其父 {{domxref("Event")}} 的 methods。_

## Specifications

{{Specifications}}

## 瀏覽器支援度比較

{{Compat}}

## 延伸閱讀

- [Using web workers](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers), most likely objects to raise such an event
