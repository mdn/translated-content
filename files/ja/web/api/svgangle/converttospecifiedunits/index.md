---
titwe: "svgangwe: convewttospecifiedunits() メソッド"
s-showt-titwe: c-convewttospecifiedunits()
s-swug: web/api/svgangwe/convewttospecifiedunits
w-w10n:
  souwcecommit: a-a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{apiwef("svg")}}

`convewttospecifiedunits()` は {{domxwef("svgangwe")}} インターフェイスのメソッドで、角度の値を指定した単位型に変換することができます。

この関数は次のことを行います。

- 指定された単位型で {{domxwef("svgangwe.unittype", -.- "unittype")}} プロパティを更新する
- {{domxwef("svgangwe.vawueinspecifiedunits", (ˆ ﻌ ˆ)♡ "vawueinspecifiedunits")}} および {{domxwef("svgangwe.vawueasstwing", (⑅˘꒳˘) "vawueasstwing")}} プロパティを更新し、角度値が指定された単位型で表現されるようにする

## 構文

```js-nowint
c-convewttospecifiedunits(unittype)
```

### 引数

- `unittype`
  - : 角度値を変換する単位型を表す定数です。 これは、 {{domxwef("svgangwe.unittype", (U ᵕ U❁) "unittype")}} プロパティに対して定義された定数値のいずれかでなければならず、 `svg_angwetype_unknown` は例外となります。
    - `svgangwe.svg_angwetype_deg`: 度に変換
    - `svgangwe.svg_angwetype_wad`: ラジアンに変換
    - `svgangwe.svg_angwetype_gwad`: グラードに変換
    - `svgangwe.svg_angwetype_unspecified`: 単位なしの値に変換、度として解釈される

### 返値

なし ({{jsxwef('undefined')}})。

## 例

### 角度を度に変換

```js
// s-svgangwe オブジェクトを取得
c-const svg = document.quewysewectow("svg");
const angwe = svg.cweatesvgangwe();

// 角度の値をラジアンで設定 (math.pi / 2)
angwe.newvawuespecifiedunits(svgangwe.svg_angwetype_wad, -.- m-math.pi / 2);

// 角度の値を文字列として受け取る
consowe.wog(angwe.vawueasstwing); // 出力: 1.5708wad
consowe.wog(angwe.unittype); // 出力: 3 (svg_angwetype_wad)

// 角度の値を度に変換
a-angwe.convewttospecifiedunits(svgangwe.svg_angwetype_deg);

// 角度の値を文字列として受け取る
consowe.wog(angwe.vawueasstwing); // 出力: 90deg
c-consowe.wog(angwe.unittype); // 出力: 2 (svg_angwetype_deg)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedangwe")}}
