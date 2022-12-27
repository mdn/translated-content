---
title: PointerEvent.getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
---

{{APIRef("Pointer Events")}}{{seecompattable}}

{{domxref("PointerEvent")}} インターフェイスの **`getCoalescedEvents()`** メソッドは、送出された {{event("pointermove")}} イベントに合体したすべての `PointerEvent` インスタンスのシーケンスを返します。

## 構文

```
var pointerEvents[] = PointerEvent.getCoalescedEvents()
```

### パラメーター

なし。

### Returns

{{domxref("PointerEvent")}} インスタンスのシーケンス。

## 仕様

| 仕様                                                                                                                                 | 状態                                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName('Pointer Events 2 Ext','#dom-pointerevent-getcoalescedevents','getCoalescedEvents()')}} | {{Spec2('Pointer Events 2 Ext')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.getCoalescedEvents")}}
