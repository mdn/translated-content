---
title: "PointerEvent: tangentialPressure プロパティ"
short-title: tangentialPressure
slug: Web/API/PointerEvent/tangentialPressure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

**`tangentialPressure`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、ポインター入力の正規化された接線方向の圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）を表します。

## 値

ポインター入力の正規化された接線方向の圧力を表す `-1` から `1` の範囲の `float` 値。ここで、`0` はコントロールの中立位置です。

ハードウェアによっては、`0` から `1` の範囲の正の値しかサポートしない場合があることに注意してください。 接線方向の圧力をサポートしないハードウェアの場合、値は `0` になります。

## 例

このスニペットでは、 {{domxref("Element/pointerdown_event", "pointerdown")}} イベントが発生すると、イベントの `tangentialPressure` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.tangentialPressure === 0) {
      // 圧力なし
      process_no_tanPressure(event);
    } else if (event.tangentialPressure === 1) {
      // 最大圧力
      process_max_tanPressure(event);
    } else {
      // デフォルト
      process_tanPressure(event);
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Touch.force") }}
