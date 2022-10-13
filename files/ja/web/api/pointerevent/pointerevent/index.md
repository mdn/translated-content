---
title: PointerEvent.PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
---

{{APIRef("Pointer Events")}}

**`PointerEvent()`** コンストラクタは、新しい信頼できない合成 {{domxref("PointerEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```
 event = new PointerEvent(type, PointerEventInit);
```

### 引数

- _type_
  - : イベントの名前を表す {{domxref("DOMString")}} です（[`PointerEvent` のイベントタイプ](/Web/API/PointerEvent#Pointer_event_types)を参照）。
- _PointerEventInit_{{optional_inline}}

  - : 次のフィールドを持つ `PointerEventInit` ディクショナリです。

    - `pointerId` — インスタンスの {{domxref("PointerEvent.pointerId")}} の値を設定する `long` 型のオプションで、デフォルトは `0` です。
    - `width` — インスタンスの {{domxref("PointerEvent.width")}} の値を設定する `double` 型のオプションで、デフォルトは `1` です。
    - `height` — インスタンスの {{domxref("PointerEvent.height")}} の値を設定する `double` 型のオプションで、デフォルトは `1` です。
    - `pressure` — インスタンスの {{domxref("PointerEvent.pressure")}} の値を設定する `float` 型のオプションで、デフォルトは `0` です。
    - `tangentialPressure` — インスタンスの {{domxref("PointerEvent.tangentialPressure")}} の値を設定する `float` 型のオプションで、デフォルトは `0` です。
    - `tiltX` — インスタンスの {{domxref("PointerEvent.tiltX")}} の値を設定する `long` 型のオプションで、デフォルトは `0` です。
    - `tiltY` — インスタンスの {{domxref("PointerEvent.tiltY")}} の値を設定する `long` 型のオプションで、デフォルトは `0` です。
    - `twist` — インスタンスの {{domxref("PointerEvent.twist")}} の値を設定する `long` 型のオプションで、デフォルトは `0` です。
    - `pointerType` — インスタンスの {{domxref("PointerEvent.pointerType")}} の値を設定する {{domxref("DOMString")}} 型のオプションで、デフォルトは `""` です。
    - `isPrimary` — インスタンスの {{domxref("PointerEvent.isPrimary")}} の値を設定する {{jsxref("Boolean")}} 型のオプションで、デフォルトは `false` です。

    > **メモ:** `PointerEventInit` ディクショナリは、{{domxref("MouseEvent.MouseEvent","MouseEvent")}}、{{domxref("UIEvent.UIEvent", "UIEventInit")}}、および {{domxref("Event.Event", "EventInit")}} ディクショナリからのフィールドも受け入れます。

## 例

```js
var moveEvent = new PointerEvent("pointermove");

var downEvent = new PointerEvent("pointerdown",
   {pointerId: 1,
    bubbles: true,
    cancelable: true,
    pointerType: "touch",
    width: 100,
    height: 100,
    isPrimary: true
   });
```

## ブラウザーの互換性

{{Compat("api.PointerEvent.PointerEvent")}}
