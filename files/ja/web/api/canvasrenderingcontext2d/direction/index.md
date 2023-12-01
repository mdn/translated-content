---
title: CanvasRenderingContext2D.direction
slug: Web/API/CanvasRenderingContext2D/direction
---

{{APIRef}} {{SeeCompatTable}}

**`CanvasRenderingContext2D.direction`** はキャンバス 2D API のプロパティで、テキストを描画する際に使用する現在の書字方向を指定します。

## 構文

```js
ctx.direction = "ltr" || "rtl" || "inherit";
```

### オプション

指定可能な値は下記の通りです。

- `"ltr"`
  - : テキストの書字方向を左書き (left-to-right) にします。
- `"rtl"`
  - : テキストの書字方向を右書き (right-to-left) にします。
- `"inherit"`
  - : テキストの書字方向を {{HTMLElement("canvas")}} 要素または {{domxref("Document")}} から適宜継承します。既定値です。

既定値は `"inherit"` です。

## 例

### 書字方向の変更

この例では、 2 つのテキストを描画しています。最初のものは左から右へ、 2 番目は右から左へ描画します。`ltr` の "Hi!" は `rtl` では "!Hi" になることに注意してください。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hi!", 150, 50);
ctx.direction = "rtl";
ctx.fillText("Hi!", 150, 130);
```

#### 結果

{{ EmbedLiveSample('Changing_text_direction', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義するインターフェイスである {{domxref("CanvasRenderingContext2D")}}
