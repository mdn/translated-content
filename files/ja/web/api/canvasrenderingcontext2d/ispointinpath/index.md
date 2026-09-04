---
title: "CanvasRenderingContext2D: isPointInPath() メソッド"
short-title: isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.isPointInPath()`** はキャンバス 2D API のメソッドで、指定された点が現在のパスに含まれているかどうかを報告します。

## 構文

```js-nolint
isPointInPath(x, y)
isPointInPath(x, y, fillRule)
isPointInPath(path, x, y)
isPointInPath(path, x, y, fillRule)
```

### 引数

- `x`
  - : 現在のコンテキストの座標変換の影響を受けない、調べる対象の点の X 軸座標。
- `y`
  - : 現在のコンテキストの座標変換の影響を受けない、調べる対象の点の Y 軸座標。
- `fillRule`
  - : この点が塗りつぶし領域の内側にあるか外側にあるかを判定するアルゴリズムです。
    利用可能な値は次の通りです。
    - `nonzero`
      - : [非ゼロワインディングルール](https://en.wikipedia.org/wiki/Nonzero-rule)。
        既定のルールです。
    - `evenodd`
      - : [偶数奇数ワインディングルール](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。

- `path`
  - : 検査対象の {{domxref("Path2D")}} パス。指定されていない場合、現在のパスが使用されます。

### 返値

論理値。指定された点が現在のパスまたは指定されたパスに含まれている場合は `true`、そうでない場合は `false` を返します。

## 例

### 点が現在のパスの中にあるかどうかを検査

この例では、`isPointInPath()` メソッドを使用して、点が現在のパス内にあるかどうかを調べます。

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In path: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.fill();
result.innerText = ctx.isPointInPath(30, 70);
```

#### 結果

{{ EmbedLiveSample('Checking_a_point_in_the_current_path', 700, 220) }}

### 点が指定されたパスの中にあるかどうかを検査

マウスが移動するたびに、この例ではカーソルが円形の `Path2D` パス内にあるかどうかを調べます。ある場合は円が緑色に、そうでない場合は赤色になります。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 円を作成
const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill(circle);

// マウスの移動を待ち受け
canvas.addEventListener("mousemove", (event) => {
  // その位置が円の中かどうかを検査
  const isPointInPath = ctx.isPointInPath(circle, event.offsetX, event.offsetY);
  ctx.fillStyle = isPointInPath ? "green" : "red";

  // 円を描画
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(circle);
});
```

#### 結果

{{ EmbedLiveSample('Checking_a_point_in_the_specified_path', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Gecko 固有のメモ

- Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4) 以前では、このメソッドは指定された点の座標を現在の変換行列で乗算せずにパスと比較するという誤った動作をしていました。現在では、コンテキストが回転させられたり、変倍されたり、その他の変換が施されている場合でも、このメソッドは正しく動作します。

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
