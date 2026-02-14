---
title: "DOMMatrixReadOnly: translate() メソッド"
short-title: translate()
slug: Web/API/DOMMatrixReadOnly/translate
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`translate()` は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、元の行列を平行移動させた結果の新しい行列を作成します。

## 構文

```js-nolint
translate(translateX, translateY)
translate(translateX, translateY, translateZ)
```

### 引数

- `translateX`
  - : 平行移動させるベクトルの横軸（x 座標）を表す数値です。
- `translateY`
  - : 平行移動させるベクトルの縦軸（y 座標）を表す数値です。
- `translateZ` {{optional_inline}}
  - : 平行移動させるベクトルの z 成分を表す数値です。指定されなかった場合の既定値は 0 になります。 0 以外の数値であった場合、結果の行列は 3D になります。

### 返値

行列を指定されたベクトルで平行移動させた結果の新しい行列を格納した [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) を返します．元の行列は変更されません．

平行移動が Z 軸について適用された場合、結果の行列は 4x4 の 3D 行列になります。

## 例

この SVG には赤と青の 2 つの正方形が格納されており、それぞれが文書の原点に配置されています。

```html
<svg width="250" height="250" viewBox="0 0 50 50">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
</svg>
```

以下の JavaScript では、まず恒等行列を作成し、次に `translate()` メソッドを使用して新しい変換行列を作成し、それを `transform` として青い正方形に適用しています。赤い正方形はそのままの位置に配置されます。

```js
const matrix = new DOMMatrixReadOnly().translate(25, 25);

document
  .querySelector("#transformed")
  .setAttribute("transform", matrix.toString());
```

{{EmbedLiveSample('Examples', '250', '250')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
