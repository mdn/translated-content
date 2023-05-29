---
title: EventListener.handleEvent()
slug: conflicting/Web/API/EventTarget/addEventListener
original_slug: Web/API/EventListener/handleEvent
---

{{APIRef("DOM Events")}}

{{domxref("EventListener")}} の **`handleEvent()`** メソッドは、
監視されている {{domxref("EventTarget")}} 上で発生するイベントを処理するために
`EventListener` へとイベントが送られたとき、 {{Glossary("user agent")}} によって呼び出されます。

## 構文

```js
eventListener.handleEvent(event);
```

### 引数

- **`event`**
  - : イベントが発火してから、処理が必要となるイベントが記述された {{domxref("Event")}} オブジェクト。

### 戻り値

None.

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat}}
