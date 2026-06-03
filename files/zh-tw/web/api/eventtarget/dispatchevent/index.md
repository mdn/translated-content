---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
---

{{APIRef("DOM")}}

於此 {{domxref("EventTarget")}} 物件上觸發特定的 {{domxref("Event")}} 物件實體，相當於依照註冊的順序呼叫它的 {{domxref("EventListener")}}。一般事件處理規則（包含捕捉（capturing）和可選的冒泡（bubbling）階段）也適用於用 `dispatchEvent()` 手動觸發事件。

## 語法

```plain
cancelled = !target.dispatchEvent(event)
```

### 參數

- `event` 是要被觸發的事件（{{domxref("Event")}} 物件）。
- `target` 會被初始化為事件的 {{domxref("Event", "", "target")}} 屬性，其也影響了要呼叫哪一個事件監聽器。

### 回傳值

- 會在事件完成傳遞（捕捉、命中、冒泡三階段）之後才回傳其值。
- 若事件在傳遞過程當中，事件是可被取消的（{{domxref("Event.cancelable")}} 屬性為 `true`）且曾於一個或一個以上的事件處理器中被執行了該事件的 {{domxref("Event.preventDefault()")}} 方法（且事件須確實已被取消了預設行為），即回傳 `false`。否則回傳 `true` 值。

若遇到以下 3 種情況，`dispatchEvent` 會拋出錯誤資訊－－ `UNSPECIFIED_EVENT_TYPE_ERR` ：

1. 執行 `dispatchEvent` 前並未藉由初始化事件指定事件類型
2. 事件類型為 `null` 。
3. 事件類型是個空白字串。

這些異常，處理器會報告「異常未捕獲（uncaught exceptions）」；

事件處理器（event handlers）會在一群呼叫堆（nested callstack）上執行：事件的呼叫方（caller）會先由處理器會阻擋暫停執行，直到事件完成才繼續執行，但是要注意的是，事件若發生異常並不會傳回給呼叫方。

## 注意

`dispatchEvent` 是「建立 → 初始化 → 觸發」的最後一步驟。這些步驟是用來觸發事件，讓事件完成。事件有多種建立方式，例如用 {{domxref("document.createEvent")}} 並用 [initEvent](/zh-TW/docs/Web/API/Event/initEvent) 或其他特殊 methods ，像是 [initMouseEvent](/zh-TW/docs/Web/API/MouseEvent/initMouseEvent) 或 [initUIEvent](/zh-TW/docs/Web/API/UIEvent/initUIEvent) 來初始化。

詳請可參考《{{domxref("Event")}}》。

## 範例

請參閱《[建立或觸發事件](/zh-TW/docs/Web/API/Document_Object_Model/Events)》。

## 規格

{{Specifications}}

## 瀏覽器支援度

{{Compat}}
