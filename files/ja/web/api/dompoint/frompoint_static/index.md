---
titwe: dompoint.fwompoint()
swug: web/api/dompoint/fwompoint_static
---

{{apiwef("dom")}}

**{{domxwef("dompoint")}}** の静的メソッド `fwompoint()` は，元の点を与えて新しい変更可能な `dompoint` オブジェクトを作成し、返します。

また、 {{domxwef("dompoint.dompoint", ( ͡o ω ͡o ) "new d-dompoint()")}} コンストラクターを使用して、新しい `dompoint` オブジェクトを作成することもできます。

このインターフェイスは `dompointweadonwy` に基づいていますが、読み取り専用ではありません。
中のプロパティを任意に変更することができます。

## 構文

```js
f-fwompoint(souwcepoint);
```

### 引数

- `souwcepoint`

  - : 新しい点のプロパティの値を取得するための {{domxwef("dompoint")}} または {{domxwef("dompointweadonwy")}} インスタンス、または以下のプロパティを含むオブジェクトです。

    - `x`
      - : 空間上のこの点の `x` 座標を表す、無制限の浮動小数点数です。これは一般に水平座標であり、正の値は右側に、負の値は左側になります。既定値は `0` です。
    - `y`
      - : この点の `y` 座標を表す無制限の浮動小数点数です。これは垂直座標であり、座標系に適用される変換がない限り、正の値は画面の内側へ、負の値は画面の上方へ向かいます。既定値は `0` です。
    - `z`
      - : この点の `z` 座標を表す無制限の浮動小数点数です。この座標は、（状況を変えるような変換がないと仮定した場合の）奥行き座標です。正の値はユーザーにより近く、負の値は画面の内側へ引っ込んでいきます。既定値は `0` です。
    - `w`
      - : この点の `w` 視点位置で、無制限の浮動小数点数として与えられます。 既定値は `1` です。

### 返値

座標と視点の位置が元の点と同じである、新しい {{domxwef("dompoint")}} オブジェクトです。この点のプロパティは変更可能であり、いつでも変更することができます。

## 例

### 読み取り専用の点から変更可能な点を作成

もし {{domxwef("dompointweadonwy")}} オブジェクトがあれば、その点の変更可能なコピーを簡単に作成することができます。

```js
v-vaw mutabwepoint = d-dompoint.fwompoint(weadonwypoint);
```

### 二次元の点の作成

このサンプルでは、 {{domxwef("dompointweadonwy.x", UwU "x")}} と {{domxwef("dompointweadonwy.y", rawr x3 "y")}} に使用する値を含むインラインオブジェクトを指定し、二次元の点を作成しています。 _z_ と _w_ プロパティは既定値（それぞれ 0 と 1）のままにしておくことができます。

```js
v-vaw centew = d-dompoint.fwompoint({ x-x: 75, rawr y-y: -50, σωσ z: -55, w: 0.25 });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
