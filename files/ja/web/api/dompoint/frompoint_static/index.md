---
title: DOMPoint.fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
---

{{APIRef("DOM")}}

**{{domxref("DOMPoint")}}** の静的メソッド `fromPoint()` は，元の点を与えて新しい変更可能な `DOMPoint` オブジェクトを作成し、返します。

また、 {{domxref("DOMPoint.DOMPoint", "new DOMPoint()")}} コンストラクターを使用して、新しい `DOMPoint` オブジェクトを作成することもできます。

このインターフェイスは `DOMPointReadOnly` に基づいていますが、読み取り専用ではありません。
中のプロパティを任意に変更することができます。

## 構文

```js
fromPoint(sourcePoint);
```

### 引数

- `sourcePoint`

  - : 新しい点のプロパティの値を取得するための {{domxref("DOMPoint")}} または {{domxref("DOMPointReadOnly")}} インスタンス、または以下のプロパティを含むオブジェクトです。

    - `x`
      - : 空間上のこの点の `x` 座標を表す、無制限の浮動小数点数です。これは一般に水平座標であり、正の値は右側に、負の値は左側になります。既定値は `0` です。
    - `y`
      - : この点の `y` 座標を表す無制限の浮動小数点数です。これは垂直座標であり、座標系に適用される変換がない限り、正の値は画面の内側へ、負の値は画面の上方へ向かいます。既定値は `0` です。
    - `z`
      - : この点の `z` 座標を表す無制限の浮動小数点数です。この座標は、（状況を変えるような変換がないと仮定した場合の）奥行き座標です。正の値はユーザーにより近く、負の値は画面の内側へ引っ込んでいきます。既定値は `0` です。
    - `w`
      - : この点の `w` 視点位置で、無制限の浮動小数点数として与えられます。 既定値は `1` です。

### 返値

座標と視点の位置が元の点と同じである、新しい {{domxref("DOMPoint")}} オブジェクトです。この点のプロパティは変更可能であり、いつでも変更することができます。

## 例

### 読み取り専用の点から変更可能な点を作成

もし {{domxref("DOMPointReadOnly")}} オブジェクトがあれば、その点の変更可能なコピーを簡単に作成することができます。

```js
var mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### 二次元の点の作成

このサンプルでは、 {{domxref("DOMPointReadOnly.x", "x")}} と {{domxref("DOMPointReadOnly.y", "y")}} に使用する値を含むインラインオブジェクトを指定し、二次元の点を作成しています。 _z_ と _w_ プロパティは既定値（それぞれ 0 と 1）のままにしておくことができます。

```js
var center = DOMPoint.fromPoint({ x: 75, y: -50, z: -55, w: 0.25 });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
