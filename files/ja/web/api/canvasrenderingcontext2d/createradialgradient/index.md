---
title: "CanvasRenderingContext2D: createRadialGradient() メソッド"
short-title: createRadialGradient()
slug: Web/API/CanvasRenderingContext2D/createRadialGradient
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

**`CanvasRenderingContext2D.createRadialGradient()`** はキャンバス 2D API のメソッドで、2 つの円のサイズと座標を使って放射グラデーションを作成します。

このメソッドは {{domxref("CanvasGradient")}} を返します。シェイプに適用するには、グラデーションをまず {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} または {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} プロパティに割り当てる必要があります。

> [!NOTE]
> グラデーション座標はグローバル、つまり現在の座標空間からの相対座標です。シェイプに適用された場合、座標はシェイプの座標に対する相対的なものではありません。

## 構文

```js-nolint
createRadialGradient(x0, y0, r0, x1, y1, r1)
```

`createRadialGradient()` メソッドは、グラデーションの開始円を定義する 3 つの引数と、終了円を定義する 3 つの引数の合計 6 つの引数で指定します。

### 引数

- `x0`
  - : 開始円の X 座標です。
- `y0`
  - : 開始円の Y 座標です。
- `r0`
  - : 開始円の半径です。負ではない有限数でなければなりません。
- `x1`
  - : 終了円の X 座標です。
- `y1`
  - : 終了円の Y 座標です。
- `r1`
  - : 終了円の半径です。負ではない有限数でなければなりません。

### 返値

2 つの指定された円で初期化された放射 {{domxref("CanvasGradient")}} です。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 引数に無限数が渡された場合に発生します。
- `IndexSizeError` {{domxref("DOMException")}}
  - : 引数に負の半径が渡された場合に発生します。

## 例

### 放射グラデーションで矩形を塗りつぶす

この例では `createRadialGradient()` メソッドを用いて放射グラデーションを初期化しています。その後、グラデーションの 2 つの円の間に 3 つの色経由点が作成されます。最後に、グラデーションは canvas コンテキストに割り当てられ、塗りつぶされた長方形にレンダリングされます。

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 放射グラデーションを作成
// 内側の円は x=110, y=90 で radius=30
// 外側の円は x=100, y=100 で radius=70
const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);

// 3 つの色経由点を追加
gradient.addColorStop(0, "pink");
gradient.addColorStop(0.9, "white");
gradient.addColorStop(1, "green");

// 塗りつぶしスタイルを設定し、長方形を描画
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);
```

#### 結果

{{ EmbedLiveSample('Filling_a_rectangle_with_a_radial_gradient', 700, 240) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
