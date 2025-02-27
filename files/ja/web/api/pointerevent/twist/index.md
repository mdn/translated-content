---
title: "PointerEvent: twist プロパティ"
short-title: twist
slug: Web/API/PointerEvent/twist
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

**`twist`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、ポインター（ペンやスタイラスなど）の主軸を中心とした時計回りの回転を度数で表します。

## 値

トランスデューサー（ポインター）に適用される、ねじれの量を度数で表す `long` 値。 値の範囲は `0` から `359` です。 `twist` を報告しない機器の場合、値は `0` です。

## 例

{{domxref("Element/pointerdown_event", "pointerdown")}} イベントが発生すると、イベントの `twist` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.twist === 0) {
      // ねじれなし
      process_no_twist(event);
    } else {
      // デフォルト
      process_twist(event);
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
