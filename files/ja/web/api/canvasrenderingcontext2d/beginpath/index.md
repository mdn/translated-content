---
title: "CanvasRenderingContext2D: beginPath() メソッド"
short-title: beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.beginPath()`** はキャンバス 2D API のメソッドで、サブパスのリストを空にすることにより新しいパスを開始します。新しいパスを作成したい場合は、このメソッドを呼び出してください。

> [!NOTE]
> 新しいサブパス（つまり、現在のキャンバスの状態に一致するサブパス）を作成する場合、 {{domxref("CanvasRenderingContext2D.moveTo()")}} が使用できます。

## 構文

```js-nolint
beginPath()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 独立したパスの作成

この例では、それぞれが 1 本の直線を含む 2 つのパスを作成します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

`beginPath()` メソッドがそれぞれの線を引く前に呼び出されるため、それぞれの線は別々な色で描かれます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 第 1 のパス
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// 第 2 のパス
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Creating_distinct_paths', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.closePath()")}}
