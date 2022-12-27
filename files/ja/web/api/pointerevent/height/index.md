---
title: PointerEvent.height
slug: Web/API/PointerEvent/height
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`height`** 読み取り専用プロパティは、y 軸に沿ったポインタの接触ジオメトリの高さを表します（CSS ピクセル単位）。 ポインタデバイスのソース（指など）によっては、特定のポインタに対して、各イベントが異なる値を生成することがあります。

入力ハードウェアが接触ジオメトリをブラウザーに報告できない場合、高さのデフォルトは `1` です。

## 構文

```
var contactHeight = pointerEvent.height;
```

### 戻り値

- `contactHeight`
  - : イベントの接触面積の高さ（CSS ピクセル単位）。

## 例

このプロパティの例は、[PointerEvent.width の例](/ja/docs/Web/API/PointerEvent/width#Example)に含まれています。

## 仕様

| 仕様                                                                                         | 状態                                     | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#widl-PointerEvent-height', 'height')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-PointerEvent-height', 'height')}} | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.height")}}
