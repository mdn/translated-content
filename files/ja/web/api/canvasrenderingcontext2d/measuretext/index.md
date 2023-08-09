---
title: CanvasRenderingContext2D.measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
---

{{APIRef}}

`CanvasRenderingContext2D.measureText()` メソッドは、測定したテキストの情報（例えば幅など）を持つ {{domxref("TextMetrics")}} オブジェクトを返します。

## 構文

```js
ctx.measureText(text);
```

### 引数

- text
  - : 測定する文字列。

### 返値

{{domxref("TextMetrics")}} オブジェクト。

## 例

以下の {{HTMLElement("canvas")}} 要素があるとします。

```html
<canvas id="canvas"></canvas>
```

以下のコードを使用して {{domxref("TextMetrics")}} オブジェクトを得ることができます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("Hello world");
console.log(text.width); // 56;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("TextMetrics")}}
