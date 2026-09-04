---
title: "CanvasGradient: addColorStop() メソッド"
short-title: addColorStop()
slug: Web/API/CanvasGradient/addColorStop
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`CanvasGradient.addColorStop()`** メソッドは、オフセット (`offset`) および色 (`color`) に基づいて、指定されたキャンバスグラデーションに新しい色経由点を追加します。

## 構文

```js-nolint
addColorStop(offset, color)
```

### 引数

- `offset`
  - : `0` 以上 `1` 以下の数値で、色経由点の位置を表します。`0` はグラデーションの先頭を表し、`1` は末尾を表します。
- `color`
  - : この色経由点の色を表す [CSS](/ja/docs/Web/CSS) の {{cssxref("&lt;color&gt;")}} 値です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `offset` が 0 以上 1 以下でない場合に発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : `color` が CSS の {{cssxref("&lt;color&gt;")}} 値として解釈できなかった場合に発生します。

## 例

### グラデーションに色経由点を追加

この例では、`addColorStop` メソッドを使用して線形 {{domxref("CanvasGradient")}} オブジェクトに色経由点を追加します。その後、このグラデーションを使用して矩形を塗りつぶします。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.7, "white");
gradient.addColorStop(1, "pink");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

#### 結果

{{ EmbedLiveSample('Adding_stops_to_a_gradient', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
