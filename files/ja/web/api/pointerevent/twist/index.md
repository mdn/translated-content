---
title: PointerEvent.twist
slug: Web/API/PointerEvent/twist
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`twist`** 読み取り専用プロパティは、ポインタ（例えばペン/スタイラス）の主軸を中心とした時計回りの回転を度数で表します。

## 構文

```
var twist = pointerEvent.twist;
```

### 戻り値

トランスデューサ（ポインタ）に適用される、ねじれの量を度数で表す `long` 値。 値の範囲は `0` から `359` です。 `twist` を報告しないデバイスの場合、値は `0` です。

## 例

{{event("pointerdown")}} イベントが発生すると、イベントの `twist` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
someElement.addEventListener('pointerdown', function(event) {
  if (event.twist == 0) {
    // ねじれなし
    process_no_twist(event);
  } else {
    // デフォルト
    process_twist(event);
  }
}, false);
```

## 仕様

| 仕様                                                                                     | 状態                                     | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-pointerevent-twist', 'twist')}} | {{Spec2('Pointer Events 2')}} |          |

## ブラウザーの互換性

{{Compat("api.PointerEvent.twist")}}

## 関連情報

- {{ domxref("Touch.force") }}
