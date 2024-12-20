---
title: "PointerEvent: PointerEvent() コンストラクター"
short-title: PointerEvent()
slug: Web/API/PointerEvent/PointerEvent
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Pointer Events")}}

**`PointerEvent()`** コンストラクターは、新しい信頼できない合成 {{domxref("PointerEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new PointerEvent(type)
new PointerEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前を表します（[PointerEvent のイベントの種類](/ja/docs/Web/API/PointerEvent#ポインターイベントの種類)を参照）。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("MouseEvent/MouseEvent", "MouseEvent()")}} で定義されているプロパティに加え_、以下のプロパティを設定することができます。
    - `pointerId`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxref("PointerEvent.pointerId")}} の値を設定します。
    - `width`
      - : 数値で、既定値は `1` であり、インスタンスの {{domxref("PointerEvent.width")}} の値を設定します。
    - `height`
      - : 数値で、既定値は `1` であり、インスタンスの {{domxref("PointerEvent.height")}} の値を設定します。
    - `pressure`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxref("PointerEvent.pressure")}} の値を設定します。
    - `tangentialPressure`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxref("PointerEvent.tangentialPressure")}} の値を設定します。
    - `tiltX`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxref("PointerEvent.tiltX")}} の値を設定します。
    - `tiltY`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxref("PointerEvent.tiltY")}} の値を設定します。
    - `twist`
      - : 数値で、既定値は `0` であり、インスタンスの {{domxref("PointerEvent.twist")}} の値を設定します。
    - `pointerType`
      - : 文字列で、既定値は `""` であり、インスタンスの {{domxref("PointerEvent.pointerType")}} の値を設定します。
    - `isPrimary`
      - : 論理値で、既定値は `false` であり、インスタンスの {{domxref("PointerEvent.isPrimary")}} の値を設定します。

### 返値

新しい {{domxref("PointerEvent")}} オブジェクトです。

## 例

```js
const moveEvent = new PointerEvent("pointermove");

const downEvent = new PointerEvent("pointerdown", {
  pointerId: 1,
  bubbles: true,
  cancelable: true,
  pointerType: "touch",
  width: 100,
  height: 100,
  isPrimary: true,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
