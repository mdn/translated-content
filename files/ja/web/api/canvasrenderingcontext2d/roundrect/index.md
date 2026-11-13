---
title: "CanvasRenderingContext2D: roundRect() メソッド"
short-title: roundRect()
slug: Web/API/CanvasRenderingContext2D/roundRect
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.roundRect()`** はキャンバス 2D API のメソッドで、現在のパスに角丸矩形を追加します。

角の半径は、CSS の {{cssxref("border-radius")}} プロパティとほぼ同様の方法で指定します。

現在のパスを変更する他のメソッドと同様に、このメソッドは直接何かをレンダリングするものではありません。
角丸矩形をキャンバスに描画するには、{{domxref("CanvasRenderingContext2D.fill", "fill()")}} メソッドか {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} メソッドを使用してください。

## 構文

```js-nolint
roundRect(x, y, width, height, radii)
```

### 引数

- `x`
  - : 矩形の開始点の X 軸座標をピクセル数で指定します。
- `y`
  - : 矩形の開始点の Y 軸座標をピクセル数で指定します。
- `width`
  - : 矩形の幅です。正の値は右方向、負の値は左方向です。
- `height`
  - : 矩形の高さです。正の値は下方向、負の値は上方向です。
- `radii`
  - : 矩形の角に使用する円弧の半径を指定する数値またはリスト。
    半径の数値と順序は、`width` と `height` が正の値である場合、CSS プロパティ {{cssxref("border-radius")}} の方法と同様に機能します。
    - `すべての角`
    - `[すべての角]`
    - `[左上と右下, 右上と左下]`
    - `[左上, 右上と左下, 右下]`
    - `[左上, 右上, 右下, 左下]`

    `width` が負の値の場合、角丸矩形は水平方向に反転します。そのため、通常左隅に適用される半径値が右隅に使用され、その逆も同様になります。
    同様に、`height` が負の場合、角丸矩形は垂直方向に反転します。
    いずれかの辺が両端の頂点の半径の合計よりも短い場合、指定された半径は縮小されることがあります。

    `radii` 引数は、{{domxref("DOMPoint")}} または {{domxref("DOMPointReadOnly")}} のインスタンス、同じプロパティを含むオブジェクト（`{x: 0, y: 0}`）、そのようなオブジェクトのリスト、あるいは数値とそのようなオブジェクトを混在させたリストとしても指定できます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("RangeError")}}
  - : `radii` が 0 個以上または 4 個を超える要素を持つリストである場合、またはその値のいずれかが負の数である場合。

## 例

### 矩形の描画

この例では、`roundRect()` メソッドを使用して複数の角丸矩形のパスを作成します。
その後、`stroke()` メソッドを使用してパスを描画します。

#### HTML

```html
<canvas id="canvas" width="700" height="300"></canvas>
```

#### JavaScript

まず、角丸矩形を描画するためのコンテキストを生成します。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

下記コードは、2 つの矩形を描画します。いずれも点 (10, 20) から始まり、幅 150、高さ 100 です。
最初の矩形は赤色で描画され、引数として数値を指定することですべての角の半径を0に設定します。
2 つ目は青色で描画され、リスト内の単一の要素として半径 40px を指定します。

```js
// 半径ゼロの角丸矩形（数値で指定）
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, 0);
ctx.stroke();

// 半径 40px の角丸矩形（単一の要素リスト）
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, [40]);
ctx.stroke();
```

前の矩形の下に、対角の角の半径の値を指定するオレンジ色の矩形をもう一つ描画します。

```js
// 2つの異なる半径を持つ角丸矩形
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.roundRect(10, 150, 150, 100, [10, 40]);
ctx.stroke();
```

最後に、半径の値が 4 つあり、同じ始点を持つ 2 つの角丸矩形を描画します。
ここでの違いは、2 つ目が負の幅で描画される点です。

```js
// 4 つの異なる半径を持つ角丸矩形
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.roundRect(400, 20, 200, 100, [0, 30, 50, 60]);
ctx.stroke();

// 同じ矩形逆方向に描画した場合
ctx.strokeStyle = "magenta";
ctx.beginPath();
ctx.roundRect(400, 150, -200, 100, [0, 30, 50, 60]);
ctx.stroke();
```

#### 結果

結果は下記に示します。
右側の 2 つの矩形について、下側の矩形が負の幅をつけて描画されている点、そしてこれによって矩形が水平方向に反転している点に注目してください。

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 300) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.rect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
