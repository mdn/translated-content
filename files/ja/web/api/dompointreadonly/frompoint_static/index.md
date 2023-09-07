---
title: DOMPointReadOnly.fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint_static
---

{{APIRef("DOM")}}

静的な **{domxref("DOMPointReadOnly")}}** メソッド `fromPoint()` は、指定された元の点から新しい `DOMPointReadOnly` オブジェクトを作成し、それを返します。

また、 {{domxref("DOMPointReadOnly.DOMPointReadOnly", "new DOMPointReadOnly()")}} コンストラクターを使用しても、新しい `DOMPointReadOnly` オブジェクトを作成することができます。

## 構文

```js
fromPoint(sourcePoint);
```

### 引数

- `sourcePoint`

  - : 新しい点のプロパティの値を取得するための {{domxref("DOMPoint")}} または {{domxref("DOMPointReadOnly")}} インスタンス、あるいは以下のプロパティを含むオブジェクトです。

    - `x`
      - : 空間上の点の `x` 座標を表す、無制限の浮動小数点数。これは一般に水平座標であり、正の値は右側に、負の値は左側になります。既定値は `0` です。
    - `y`
      - : 点の `y` 座標を表す無制限の浮動小数点数。これは垂直座標であり、座標系に適用される変換を除いて、正の値は下向きに、負の値は画面上方に向かって上向きになります。既定値は `0` です。
    - `z`
      - : 点の `z` 座標を与える無制限の浮動小数点数．この座標は、（状況を変えるような変換がないと仮定して）奥行き座標です。正の値はユーザーに近く、負の値は画面の奥に引っ込みます。既定値は `0` です。
    - `w`
      - : 点の `w` 視点位置。無制限の浮動小数点数で与えられます。 既定値は `1` です。

### 返値

新しい（元の点と同じ） {{domxref("DOMPointReadOnly")}} オブジェクト。

## 例

### 二次元の点の作成

このサンプルでは、 {{domxref("DOMPointReadOnly.x", "x")}} と {{domxref("DOMPointReadOnly.y", "y")}} に使用する値を含むインラインオブジェクトを指定し、二次元点を作成しています。 `z` と `w` プロパティは既定値（それぞれ `0` と `1`）のままにしておくことが可能です。

```js
const point2D = DOMPointReadOnly.fromPoint({ x: 25, y: 25 });
```

### 既存の点を使用して三次元の点を作成します。

この例では、 {{domxref("DOMPoint")}} を用いて、 {{domxref("DOMPoint.DOMPoint", "new DOMPoint()")}} 型の点 `origPoint` を作成しています。そして、その点は `fromPoint()` の入力として使用され、新しい点 `newPoint` を作成します。

```js
const origPoint = new DOMPoint(25, 25, 100, 0.5);

const newPoint = DOMPointReadOnly.fromPoint(origPoint);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
