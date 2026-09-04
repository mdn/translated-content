---
title: "CanvasRenderingContext2D: isPointInStroke() メソッド"
short-title: isPointInStroke()
slug: Web/API/CanvasRenderingContext2D/isPointInStroke
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.isPointInStroke()`** はキャンバス 2D API のメソッドで、指定された点がパスのストロークで囲まれた領域内にあるかどうかを報告します。

## 構文

```js-nolint
isPointInStroke(x, y)
isPointInStroke(path, x, y)
```

### 引数

- `x`
  - : 検査する点の X 座標です。
- `y`
  - : 検査する点の Y 座標です。
- `path`
  - : 検査対象となる {{domxref("Path2D")}} パスです。指定されなかった場合は、現在のパスが使用されます。

### 返値

論理値で、点がパスのストロークに囲まれた領域内にある場合は `true`、そうでなければ `false` を返します。

## 例

### 現在のパスの中の点を検査

この例では、`isPointInStroke()` メソッドを使用して、点が現在のパスのストローク領域内にあるかどうかを調べます。

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In stroke: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.stroke();
result.innerText = ctx.isPointInStroke(50, 10);
```

#### 結果

{{ EmbedLiveSample('Checking_a_point_in_the_current_path', 700, 220) }}

### 点が指定されたパスの中にあるかどうかを検査

マウスが移動されるたびに、この例ではカーソルが楕円形の `Path2D` パスのストローク内にあるかどうかを調べます。ある場合、楕円のストロークは緑色に、そうでない場合は赤色になります。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 楕円を作成
const ellipse = new Path2D();
ellipse.ellipse(150, 75, 40, 60, Math.PI * 0.25, 0, 2 * Math.PI);
ctx.lineWidth = 25;
ctx.strokeStyle = "red";
ctx.fill(ellipse);
ctx.stroke(ellipse);

// マウスの移動を待ち受け
canvas.addEventListener("mousemove", (event) => {
  // その位置が楕円のストロークの中にあるかどうかを検査
  const isPointInStroke = ctx.isPointInStroke(
    ellipse,
    event.offsetX,
    event.offsetY,
  );
  ctx.strokeStyle = isPointInStroke ? "green" : "red";

  // 楕円を描画
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(ellipse);
  ctx.stroke(ellipse);
});
```

#### 結果

{{ EmbedLiveSample('Checking_a_point_in_the_specified_path', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
