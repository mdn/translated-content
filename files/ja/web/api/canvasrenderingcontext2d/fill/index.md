---
title: "CanvasRenderingContext2D: fill() メソッド"
short-title: fill()
slug: Web/API/CanvasRenderingContext2D/fill
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.fill()`** はキャンバス 2D API のメソッドで、現在のパスまたは指定されたパスを現在の {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} で塗りつぶします。

## 構文

```js-nolint
fill()
fill(path)
fill(fillRule)
fill(path, fillRule)
```

### 引数

- `fillRule`
  - : この点が塗りつぶし領域の内側にあるか外側にあるかを判定するアルゴリズムです。
    利用可能な値は次の通りです。
    - `nonzero`
      - : [非ゼロワインディングルール](https://en.wikipedia.org/wiki/Nonzero-rule)。
        既定のルールです。
    - `evenodd`
      - : [偶数奇数ワインディングルール](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : 塗りつぶす {{domxref("Path2D")}} パス。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 矩形の塗りつぶし

この例では、`fill()`メソッドを使用して矩形を塗りつぶします。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 150, 100);
ctx.fill();
```

#### 結果

{{ EmbedLiveSample('Filling_a_rectangle', 700, 180) }}

### パスと fillRule を指定

この例では、交差する線を Path2D オブジェクトに保存します。その後、`fill()` メソッドを使用してオブジェクトをキャンバスに描画します。`"evenodd"` ルールを使用することで、オブジェクトの中心部に穴が未塗りつぶしのまま残されます。デフォルトで（`"nonzero"` ルール）、この穴も塗りつぶされます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// パスを作成
let region = new Path2D();
region.moveTo(30, 90);
region.lineTo(110, 20);
region.lineTo(240, 130);
region.lineTo(60, 130);
region.lineTo(190, 20);
region.lineTo(270, 90);
region.closePath();

// パスを塗りつぶす
ctx.fillStyle = "green";
ctx.fill(region, "evenodd");
```

#### 結果

{{ EmbedLiveSample('Specifying_a_path_and_a_fillRule', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
