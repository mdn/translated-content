---
title: DOMPointReadOnly
slug: Web/API/DOMPointReadOnly
---

{{APIRef("Geometry Interfaces")}}

**`DOMPointReadOnly`** インターフェイスは、 {{domxref("DOMPoint")}} が座標系で二次元または三次元の点を定義するために使用する座標フィールドと透視図フィールドを指定するものです。

{{AvailableInWorkers}}

新しい `DOMPointReadOnly` インスタンスを作成するには、 2 つの方法があります。まず、コンストラクターを使用し、各次元の引数の値、そしてオプションで視点位置を渡すことができます。

```js
/* 二次元 */
const point2D = new DOMPointReadOnly(50, 50);

/* 三次元 */
const point3D = new DOMPointReadOnly(50, 50, 25);

/* 三次元で視点位置付き */
const point3DPerspective = new DOMPointReadOnly(100, 100, 100, 1.0);
```

もう一つの選択肢は、静的な {{domxref("DOMPointReadOnly.fromPoint()")}} メソッドを使用する方法です。

```js
const point = DOMPointReadOnly.fromPoint({ x: 100, y: 100, z: 50, w: 1.0 });
```

## コンストラクター

- {{domxref("DOMPointReadOnly.DOMPointReadOnly","DOMPointReadOnly()")}}
  - : 座標と視点位置を指定して、新しい `DOMPointReadOnly` オブジェクトを作成します。オブジェクトを使用して点を作成する場合は、代わりに {{domxref("DOMPointReadOnly.fromPoint()")}} を使用することができます。

## プロパティ

- {{domxref("DOMPointReadOnly.x")}} {{readonlyInline}}
  - : この点の水平座標である `x` です。
- {{domxref("DOMPointReadOnly.y")}} {{readonlyInline}}
  - : この点の垂直座標である `y` です。
- {{domxref("DOMPointReadOnly.z")}} {{readonlyInline}}
  - : この点の奥行座標である `z` です。
- {{domxref("DOMPointReadOnly.w")}} {{readonlyInline}}
  - : この点の視点位置である `w` です。

## 静的メソッド

- {{domxref("DOMPointReadOnly.fromPoint()")}}
  - : 指定されたオブジェクトの座標を指定して、新しい `DOMPointReadOnly` オブジェクトを作成する静的メソッドです。

## メソッド

- {{domxref("DOMPointReadOnly.matrixTransform", "matrixTransform()")}}
  - : オブジェクトとして指定された行列変換を `DOMPointReadOnly` オブジェクトに適用します。
- {{domxref("DOMPointReadOnly.toJSON()", "toJSON()")}}
  - : `DOMPointReadOnly` オブジェクトの JSON 表現を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
