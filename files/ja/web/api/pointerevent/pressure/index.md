---
title: "PointerEvent: pressure プロパティ"
short-title: pressure
slug: Web/API/PointerEvent/pressure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

**`pressure`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、ポインター入力の正規化された圧力を示します。

## 値

ポインター入力の `0` から `1` までの範囲に正規化された圧力。ここで、`0` と `1` は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。 マウスなど、圧力に対応していないハードウェアの場合、値はポインターのボタンの状態がアクティブであるときは `0.5`、それ以外のときは `0` です。

## 例

このスニペットでは、{{domxref("Element/pointerdown_event", "pointerdown")}} イベントが発生すると、そのイベントの `pressure` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.pressure === 0) {
      // 圧力なし
      process_no_pressure(event);
    } else if (event.pressure === 1) {
      // 最大圧力
      process_max_pressure(event);
    } else {
      // デフォルト
      process_pressure(event);
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
