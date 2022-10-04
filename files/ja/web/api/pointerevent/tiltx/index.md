---
title: PointerEvent.tiltX
slug: Web/API/PointerEvent/tiltX
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`tiltX`** 読み取り専用プロパティは、ポインタの *Y-Z 平面*と画面との間の角度（度単位）です。 このプロパティは通常、ペン/スタイラスポインタタイプにのみ役立ちます。

このプロパティの説明については、[仕様の図 2](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx) を参照してください。

## 構文

```
var tiltX = pointerEvent.tiltX;
```

### 戻り値

- `tiltX`
  - : ポインタ（スタイラス）の Y-Z 平面と画面の間の角度（度単位）。 値の範囲は `-90` から `90` です。 ここで、正の値は右への傾きです。 このプロパティをサポートしていないデバイスの場合、値は `0` です。

## 例

この例は、`tiltX` プロパティおよび {{domxref("PointerEvent.tiltY","tiltY")}} プロパティへの簡単なアクセスを示しています。

```js
someElement.addEventListener("pointerdown", function(event) {
  process_tilt(event.tiltX, event.tiltY);
}, false);
```

## 仕様

| 仕様                                                                                     | 状態                                     | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-pointerevent-tiltx', 'tiltX')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#dom-pointerevent-tiltx', 'tiltX')}} | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.tiltX")}}
