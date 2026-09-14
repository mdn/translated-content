---
title: "CanvasRenderingContext2D: setTransform() メソッド"
short-title: setTransform()
slug: Web/API/CanvasRenderingContext2D/setTransform
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.setTransform()`** はキャンバス 2D API のメソッドで、現在の座標変換を恒等行列にリセット（上書き）した後、このメソッドの引数で記述された座標変換を呼び出します。これにより、コンテキストの変倍、回転、移動、歪めを行うことができます。

> [!NOTE]
> {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} メソッドも参照してください。このメソッドは現在の変換行列を上書きせずに、指定された行列と乗算します。

## 構文

```js-nolint
setTransform(a, b, c, d, e, f)
setTransform(matrix)
```

座標変換行列は <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics></math> として記述されます。

この座標変換行列は、キャンバス上に描画されるそれぞれの点を表す列ベクトルの左側に掛け合わされ、キャンバス上で使用される最終的な座標を生成します。

### 引数

`setTransform()` は 2 種類の引数を受け入れます。古い形式では、設定する変換行列の個々の要素を表す複数の引数で構成されます。

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

あるいは、上記の値をプロパティとして含むオブジェクトを単一の引数として渡すことも可能です。引数名はそのプロパティキーとなります。同義の 2 つの名前（例: `m11` と `a`）が両方存在する場合、それらは同じ数値でなければならず、そうでない場合、{{jsxref("TypeError")}} が発生します。オブジェクト形式を使用すると、一部の引数を省略できます 。 `a` と `d` はデフォルトで `1`、その他はデフォルトで `0` となります。

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

ctx.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Skewing_a_shape', 700, 180) }}

### DOMMatrix オブジェクトの受け渡し

次の例では、2 つの {{htmlelement("canvas")}} 要素があります。最初の要素のコンテキストに対して、最初の種類の `setTransform()` を使用して座標変換を適用し、その上に矩形を描画します。その後、{{domxref("CanvasRenderingContext2D.getTransform()")}} を使用してその行列を取得します。

次に、取得した行列を直接 2 番目のキャンバスコンテキストに適用します。具体的には `DOMMatrix` オブジェクトを `setTransform()`（すなわち 2 番目の型）に直接渡し、その上に円を描画します。

#### HTML

```html
<!-- 最初のキャンバス (ctx1) -->
<canvas width="240"></canvas>
<!-- 二番目のキャンバス (ctx2) -->
<canvas width="240"></canvas>
```

#### CSS

```css
canvas {
  border: 1px solid black;
}
```

#### JavaScript

```js
const canvases = document.querySelectorAll("canvas");
const ctx1 = canvases[0].getContext("2d");
const ctx2 = canvases[1].getContext("2d");

ctx1.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx1.fillRect(25, 25, 50, 50);

let storedTransform = ctx1.getTransform();
console.log(storedTransform);

ctx2.setTransform(storedTransform);
ctx2.beginPath();
ctx2.arc(50, 50, 50, 0, 2 * Math.PI);
ctx2.fill();
```

#### 結果

{{ EmbedLiveSample('Retrieving_and_passing_a_DOMMatrix_object', "100%", 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
