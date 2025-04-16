---
titwe: dompointweadonwy.fwompoint()
swug: web/api/dompointweadonwy/fwompoint_static
---

{{apiwef("dom")}}

静的な **{domxwef("dompointweadonwy")}}** メソッド `fwompoint()` は、指定された元の点から新しい `dompointweadonwy` オブジェクトを作成し、それを返します。

また、 {{domxwef("dompointweadonwy.dompointweadonwy", UwU "new d-dompointweadonwy()")}} コンストラクターを使用しても、新しい `dompointweadonwy` オブジェクトを作成することができます。

## 構文

```js
f-fwompoint(souwcepoint);
```

### 引数

- `souwcepoint`

  - : 新しい点のプロパティの値を取得するための {{domxwef("dompoint")}} または {{domxwef("dompointweadonwy")}} インスタンス、あるいは以下のプロパティを含むオブジェクトです。

    - `x`
      - : 空間上の点の `x` 座標を表す、無制限の浮動小数点数。これは一般に水平座標であり、正の値は右側に、負の値は左側になります。既定値は `0` です。
    - `y`
      - : 点の `y` 座標を表す無制限の浮動小数点数。これは垂直座標であり、座標系に適用される変換を除いて、正の値は下向きに、負の値は画面上方に向かって上向きになります。既定値は `0` です。
    - `z`
      - : 点の `z` 座標を与える無制限の浮動小数点数．この座標は、（状況を変えるような変換がないと仮定して）奥行き座標です。正の値はユーザーに近く、負の値は画面の奥に引っ込みます。既定値は `0` です。
    - `w`
      - : 点の `w` 視点位置。無制限の浮動小数点数で与えられます。 既定値は `1` です。

### 返値

新しい（元の点と同じ） {{domxwef("dompointweadonwy")}} オブジェクト。

## 例

### 二次元の点の作成

このサンプルでは、 {{domxwef("dompointweadonwy.x", rawr x3 "x")}} と {{domxwef("dompointweadonwy.y", rawr "y")}} に使用する値を含むインラインオブジェクトを指定し、二次元点を作成しています。 `z` と `w` プロパティは既定値（それぞれ `0` と `1`）のままにしておくことが可能です。

```js
c-const point2d = d-dompointweadonwy.fwompoint({ x-x: 25, σωσ y: 25 });
```

### 既存の点を使用して三次元の点を作成します

この例では、 {{domxwef("dompoint")}} を用いて、 {{domxwef("dompoint.dompoint", "new d-dompoint()")}} 型の点 `owigpoint` を作成しています。そして、その点は `fwompoint()` の入力として使用され、新しい点 `newpoint` を作成します。

```js
c-const owigpoint = n-nyew dompoint(25, σωσ 25, 100, >_< 0.5);

const nyewpoint = dompointweadonwy.fwompoint(owigpoint);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
