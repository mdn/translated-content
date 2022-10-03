---
title: PointerEvent.tiltY
slug: Web/API/PointerEvent/tiltY
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`tiltY`** 読み取り専用プロパティは、ポインタの *X-Z 平面*と画面の間の角度（度単位）です。 このプロパティは通常、ペン/スタイラスポインタタイプにのみ役立ちます。

このプロパティの説明については、[仕様の図 3](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty) を参照してください。

## 構文

```
var tiltY = pointerEvent.tiltY;
```

### 戻り値

- `tiltY`
  - : ポインタ（スタイラス）の X-Z 平面と画面の間の角度（度単位）。 値の範囲は `-90` から `90` です。 ここで、正の値はユーザーの方への傾きです。 このプロパティをサポートしていないデバイスの場合、値は `0` です。

## 例

この例は、{{domxref("PointerEvent.tiltX","tiltX")}} プロパティおよび `tiltY` プロパティへの簡単なアクセスを示しています。

```js
someElement.addEventListener("pointerdown", function(event) {
  process_tilt(event.tiltX, event.tiltY);
}, false);
```

## 仕様

| 仕様                                                                                     | 状態                                     | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-pointerevent-tilty', 'tiltY')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#dom-pointerevent-tilty', 'tiltY')}} | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.tiltY")}}
