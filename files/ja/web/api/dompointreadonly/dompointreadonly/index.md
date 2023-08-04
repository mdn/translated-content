---
title: DOMPointReadOnly()
slug: Web/API/DOMPointReadOnly/DOMPointReadOnly
---

{{APIRef("DOM")}}

**`DOMPointReadOnly()`** コンストラクターは、スクリプトコードによってその値を変更できない、二次元または三次元の点を表す新しい {{domxref("DOMPointReadOnly")}} オブジェクト（オプションで遠近法を使用可能）を返します。

## 構文

```js
new DOMPointReadOnly();
new DOMPointReadOnly(x);
new DOMPointReadOnly(x, y);
new DOMPointReadOnly(x, y, z);
new DOMPointReadOnly(x, y, z, w);
```

### 引数

- `x` {{optional_inline}}
  - : 水平座標 x の値を浮動小数点数で指定します。既定値は 0 です。
- `y` {{optional_inline}}
  - : 垂直座標 y の値を浮動小数点数で指定します。既定値は 0 です。
- `z` {{optional_inline}}
  - : 奥行き座標 z の値を浮動小数点数で指定します。既定値は 0 です。
- `w` {{optional_inline}}
  - : 視点位置 w を浮動小数点数で指定します。既定値は 1 です。

> **メモ:** これらの値はそれぞれ*無制限*の数と呼ばれるものです。有限の浮動小数点数に加えて、±{{jsxref("Infinity")}} や {{jsxref("NaN")}} のような特別な値も使用することができます。

### 返値

空間内の指定された位置を表す、新しい {{domxref("DOMPointReadOnly")}} オブジェクト。

## 例

次のコードは、二次元または三次元の点を作成する例です。

```js
var point2D = new DOMPointReadOnly(50, 25);
var point3D = new DOMPointReadOnly(50, 0, 10);
var perspectivePoint3D = new DOMPointReadOnly(50, 50, 25, 0.5);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
