---
title: PointerEvent.tangentialPressure
slug: Web/API/PointerEvent/tangentialPressure
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`tangentialPressure`** 読み取り専用プロパティは、ポインタ入力の正規化された接線方向の圧力（バレル圧力またはシリンダー応力（[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)）とも呼ばれます）を表します。

（訳注：エアブラシスタイラスのホイールのようなものを想定しています。）

## 構文

```
var tanPressure = pointerEvent.tangentialPressure;
```

### 戻り値

ポインタ入力の正規化された接線方向の圧力を表す `-1` から `1` の範囲の `float` 型。ここで、`0` はコントロールの中立位置です。

ハードウェアによっては、`0` から `1` の範囲の正の値しかサポートしない場合があることに注意してください。 接線方向の圧力をサポートしないハードウェアの場合、値は `0` になります。

## 例

このスニペットでは、{{event("pointerdown")}} イベントが発生すると、イベントの `tangentialPressure` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
someElement.addEventListener('pointerdown', function(event) {
  if (event.tangentialPressure == 0) {
    // 圧力なし
    process_no_tanPressure(event);
  } else if (event.tangentialPressure == 1) {
    // 最大圧力
    process_max_tanPressure(event);
  } else {
    // デフォルト
    process_tanPressure(event);
  }
}, false);
```

## 仕様

| 仕様                                                                                                                         | 状態                                     | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-pointerevent-tangentialpressure', 'tangentialPressure')}} | {{Spec2('Pointer Events 2')}} |          |

## ブラウザーの互換性

{{Compat("api.PointerEvent.tangentialPressure")}}

## 関連情報

- {{ domxref("Touch.force") }}
