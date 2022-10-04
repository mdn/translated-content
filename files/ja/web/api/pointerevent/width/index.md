---
title: PointerEvent.width
slug: Web/API/PointerEvent/width
---

{{ APIRef("Pointer Events") }}

{{domxref("PointerEvent")}} インターフェイスの **`width`** 読み取り専用プロパティは、CSS ピクセルで測定された、x 軸に沿ったポインタの接触ジオメトリの幅を表します。 ポインタデバイスのソース（指など）に応じて、特定のポインタに対して、各イベントは異なる値を生成することがあります。

入力ハードウェアが接触ジオメトリをブラウザーに報告できない場合、幅のデフォルトは `1` です。

## 構文

```
var contactWidth = pointerEvent.width;
```

### 戻り値

- `contactWidth`
  - : イベントの接触面積の幅（CSS ピクセル単位）。

## 例

この例では、{{domxref("PointerEvent")}} インターフェイスの {{domxref("PointerEvent.width","width")}} プロパティと {{domxref("PointerEvent.height","height")}} プロパティを使用して接触面積を計算する方法を示します。

```js
target.addEventListener("pointerdown", function(ev) {
   // 接触面積を計算する
   var area = ev.width * ev.height;
 }, false);
```

## 仕様

| 仕様                                                                                         | 状態                                     | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#widl-PointerEvent-width', 'width')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-PointerEvent-width', 'width')}}     | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PointerEvent.width")}}
