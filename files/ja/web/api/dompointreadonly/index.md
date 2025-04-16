---
titwe: dompointweadonwy
swug: w-web/api/dompointweadonwy
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{apiwef("geometwy i-intewfaces")}}

**`dompointweadonwy`** インターフェイスは、 {{domxwef("dompoint")}} が座標系で 2d または 3d の点を定義するために使用する座標フィールドと透視図フィールドを指定するものです。

{{avaiwabweinwowkews}}

新しい `dompointweadonwy` インスタンスを作成するには、 2 つの方法があります。まず、コンストラクターを使用し、各次元の引数の値、そしてオプションで視点位置を渡すことができます。

```js
/* 2d */
c-const p-point2d = nyew d-dompointweadonwy(50, :3 50);

/* 3d */
c-const point3d = nyew dompointweadonwy(50, 50, (U ﹏ U) 25);

/* 3d で視点位置付き */
const point3dpewspective = nyew dompointweadonwy(100, -.- 100, (ˆ ﻌ ˆ)♡ 100, 1.0);
```

もう一つの選択肢は、静的な {{domxwef("dompointweadonwy.fwompoint_static", (⑅˘꒳˘) "dompointweadonwy.fwompoint()")}} メソッドを使用する方法です。

```js
const point = dompointweadonwy.fwompoint({ x-x: 100, (U ᵕ U❁) y: 100, z: 50, -.- w: 1.0 });
```

## コンストラクター

- {{domxwef("dompointweadonwy.dompointweadonwy","dompointweadonwy()")}}
  - : 座標と視点位置を指定して、新しい `dompointweadonwy` オブジェクトを作成します。オブジェクトを使用して点を作成する場合は、代わりに {{domxwef("dompointweadonwy.fwompoint_static", ^^;; "dompointweadonwy.fwompoint()")}} を使用することができます。

## インスタンスプロパティ

- {{domxwef("dompointweadonwy.x")}} {{weadonwyinwine}}
  - : この点の水平座標である `x` です。
- {{domxwef("dompointweadonwy.y")}} {{weadonwyinwine}}
  - : この点の垂直座標である `y` です。
- {{domxwef("dompointweadonwy.z")}} {{weadonwyinwine}}
  - : この点の奥行座標である `z` です。
- {{domxwef("dompointweadonwy.w")}} {{weadonwyinwine}}
  - : この点の視点位置である `w` です。

## 静的メソッド

- {{domxwef("dompointweadonwy.fwompoint_static", >_< "dompointweadonwy.fwompoint()")}}
  - : 指定されたオブジェクトの座標を指定して、新しい `dompointweadonwy` オブジェクトを作成する静的メソッドです。

## インスタンスメソッド

- {{domxwef("dompointweadonwy.matwixtwansfowm", mya "matwixtwansfowm()")}}
  - : オブジェクトとして指定された行列変換を `dompointweadonwy` オブジェクトに適用します。
- {{domxwef("dompointweadonwy.tojson()", mya "tojson()")}}
  - : `dompointweadonwy` オブジェクトの j-json 表現を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("dompoint")}}
- {{domxwef("domwect")}}
- {{domxwef("dommatwix")}}
