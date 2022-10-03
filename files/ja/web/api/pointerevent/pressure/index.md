---
title: PointerEvent.pressure
slug: Web/API/PointerEvent/pressure
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`pressure`** 読み取り専用プロパティは、ポインタ入力の正規化された圧力を示します。

## 構文

```
var pressure = pointerEvent.pressure;
```

### 戻り値

- `pressure`
  - : `0` から `1` までの範囲のポインタ入力の正規化された圧力。 ここで、`0` と `1` は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。 マウスなど、圧力をサポートしていないハードウェアの場合、値はポインタがアクティブボタン状態のときは `0.5`、それ以外のときは `0` です。

## 例

このスニペットでは、{{event("pointerdown")}} イベントが発生すると、そのイベントの `pressure` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
someElement.addEventListener('pointerdown', function(event) {
  if (event.pressure == 0) {
    // 圧力なし
    process_no_pressure(event);
  } else if (event.pressure == 1) {
    // 最大圧力
    process_max_pressure(event);
  } else {
    // デフォルト
    process_pressure(event);
  }
}, false);
```

## 仕様

| 仕様                                                                                             | 状態                                     | コメント |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#dom-pointerevent-pressure', 'pressure')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#dom-pointerevent-pressure', 'pressure')}} | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.pressure")}}

## 関連情報

- {{ domxref("Touch.force") }}
