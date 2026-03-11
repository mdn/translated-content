---
title: "CanvasRenderingContext2D: resetTransform() メソッド"
short-title: resetTransform()
slug: Web/API/CanvasRenderingContext2D/resetTransform
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.resetTransform()`** はキャンバス 2D API のメソッドで、現在の座標変換を恒等行列にリセットします。

## 構文

```js-nolint
resetTransform()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 座標変換行列をリセット

この例では、行列を変更した後に回転させた矩形を描画し、`resetTransform()` メソッドを使用して行列をリセットします。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

{{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} メソッドは座標変換行列を 45° 回転させます。{{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} メソッドは、その行列に基づいて調整された塗りつぶした矩形を描画します。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 回転した矩形を描画
ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(60, 0, 100, 30);

// 座標変換行列を恒等行列にリセットする
ctx.resetTransform();
```

#### 結果

{{ EmbedLiveSample('Resetting_the_matrix', 700, 180) }}

### 通常の座標変換を続ける

座標変換した図形の描画が完了したら、他のレンダリングを行う前に `resetTransform()` を呼び出す必要があります。この例では、最初の 2 つの図形は歪め変換で描画され、最後の 2 つは恒等（通常の）変換で描画されています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 歪めた矩形
ctx.transform(1, 0, 1.7, 1, 0, 0);
ctx.fillStyle = "gray";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);

// 歪めていない矩形
ctx.resetTransform();
ctx.fillStyle = "red";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);
```

#### 結果

歪めた矩形は灰色で、歪めていない矩形は赤色です。

{{ EmbedLiveSample('Continuing_with_a_regular_matrix', 700, 180) }}

## ポリフィル

{{domxref("CanvasRenderingContext2D.setTransform()", "setTransform()")}} メソッドを使用して、現在の変換を恒等行列にリセットすることもできます。次のように記述します。

```js
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
