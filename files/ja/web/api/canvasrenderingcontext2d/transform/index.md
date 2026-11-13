---
title: "CanvasRenderingContext2D: transform() メソッド"
short-title: transform()
slug: Web/API/CanvasRenderingContext2D/transform
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.transform()`** はキャンバス 2D API のメソッドで、このAPIは、現在の座標変換をこのメソッドの引数で指定された行列で乗算します。これにより、コンテキストの変倍、回転、移動、歪めの座標変換を行うことができます。

> [!NOTE]
> {{domxref("CanvasRenderingContext2D.setTransform()", "setTransform()")}} メソッドも参照してください。このメソッドは現在の変換を恒等行列にリセットし、その後 `transform()` を呼び出します。

## 構文

```js-nolint
transform(a, b, c, d, e, f)
```

座標変換行列は <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics></math> として記述されます。

### 引数

- `a` (`m11`)
  - : 行列の 1 行目 1 列目のセルです。
- `b` (`m12`)
  - : 行列の 2 行目 1 列目のセルです。
- `c` (`m21`)
  - : 行列の 1 行目 2 列目のセルです。
- `d` (`m22`)
  - : 行列の 2 行目 2 列目のセルです。
- `e` (`m41`)
  - : 行列の 1 行目 3 列目のセルです。
- `f` (`m42`)
  - : 行列の 2 行目 3 列目のセルです。

もともと <math><semantics><mrow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><annotation encoding="TeX">(x, y)</annotation></semantics></math> の座標を持つ点があった場合、座標変換後は座標が <math><semantics><mrow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mrow><annotation encoding="TeX">(ax + cy + e, bx + dy + f)</annotation></semantics></math> となります。すなわち、

- `e` と `f` はコンテキストの水平方向および垂直方向の移動を制御します。
- `b` と `c` が `0` の場合、`a` と `d` がコンテキストの水平方向および垂直方向の変倍を制御します。
- `a` と `d` が `1` の場合、`b` と `c` はコンテキストの水平方向および垂直方向の歪めを制御します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 図形の歪め

この例では、矩形を垂直方向 (`.2`) と水平方向 (`.8`) の両方に歪ませています。倍率と平行移動は変更されません。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.transform(1, 0.2, 0.8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Skewing_a_shape', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
