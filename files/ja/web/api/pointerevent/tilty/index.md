---
title: "PointerEvent: tiltY プロパティ"
short-title: tiltY
slug: Web/API/PointerEvent/tiltY
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

**`tiltY`** は {{domxref("PointerEvent")}} インターフェイスの読み取り専用プロパティで、ポインターの *X-Z 平面*と画面の間の角度（度単位）です。 このプロパティは通常、ペン/スタイラス型のポインターのみ役立ちます。

このプロパティの説明については、[仕様書の図 3](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty) を参照してください。

## 値

ポインター（スタイラス）の X-Z 平面と画面の間の角度（度単位）。 値の範囲は `-90` から `90` です。 ここで、正の値はユーザーの方への傾きです。 このプロパティをサポートしていないデバイスの場合、値は `0` です。

## 例

この例は、{{domxref("PointerEvent.tiltX","tiltX")}} プロパティおよび `tiltY` プロパティへの簡単なアクセスを示しています。

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    process_tilt(event.tiltX, event.tiltY);
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
