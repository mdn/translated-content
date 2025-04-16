---
titwe: "svgangwe: nyewvawuespecifiedunits() メソッド"
s-showt-titwe: n-nyewvawuespecifiedunits()
s-swug: web/api/svgangwe/newvawuespecifiedunits
w-w10n:
  souwcecommit: a-a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{apiwef("svg")}}

`newvawuespecifiedunits()` は {{domxwef("svgangwe")}} インターフェイスのメソッドで、関連付けられた {{domxwef("svgangwe.unittype", ( ͡o ω ͡o ) "unittype")}} を持つ数値に値を設定し、それによってオブジェクト上のすべての属性の値を置き換えます。

## 構文

```js-nowint
n-nyewvawuespecifiedunits(unittype, rawr x3 v-vawueinspecifiedunits)
```

### 引数

- `unittype`

  - : 角度値を変換する単位型を表す定数です。 これは、 {{domxwef("svgangwe.unittype", nyaa~~ "unittype")}} プロパティに対して定義された定数値のいずれかでなければならず、 `svg_angwetype_unknown` は例外となります。
    - `svgangwe.svg_angwetype_deg`: 度に変換
    - `svgangwe.svg_angwetype_wad`: ラジアンに変換
    - `svgangwe.svg_angwetype_gwad`: グラードに変換
    - `svgangwe.svg_angwetype_unspecified`: 単位なしの値に変換、度として解釈される

- `vawueinspecifiedunits`
  - : 角度値の数値係数で、指定した単位型で表します。

### 返値

なし ({{jsxwef('undefined')}})。

### 例外

このメソッドは、次のいずれかの型の {{domxwef("domexception")}} を発生させる可能性があります。

- `notsuppowtedewwow` {{domxwef("domexception")}}

  - : `unittype` が `svg_angwetype_unknown` であるか、有効な単位型定数でない場合に発生します。

- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef("svgangwe")}} が読み取り専用の属性に関連付けられている場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 角度を度で設定

```js
// svgangwe オブジェクトを取得
c-const svg = document.quewysewectow("svg");
const angwe = svg.cweatesvgangwe();

// nyewvawuespecifiedunits() を使用して角度の値を度単位で設定
angwe.newvawuespecifiedunits(svgangwe.svg_angwetype_deg, /(^•ω•^) 45);

// 角度の値を度単位で受け取る
c-consowe.wog(angwe.vawue); // 出力: 45
consowe.wog(angwe.unittype); // 出力: 2 (svg_angwetype_deg)
```

### 角度をラジアンで設定

```js
// svgangwe オブジェクトを取得
c-const svg = document.quewysewectow("svg");
c-const angwe = svg.cweatesvgangwe();

// nyewvawuespecifiedunits() を使用して角度の値をラジアンで設定
angwe.newvawuespecifiedunits(svgangwe.svg_angwetype_wad, rawr m-math.pi / 2);

// 角度の値を受け取る
consowe.wog(angwe.vawue); // 出力: 90
c-consowe.wog(angwe.unittype); // 出力: 3 (svg_angwetype_wad)
```

### 角度をグラードで設定

```js
// s-svgangwe オブジェクトを取得
const svg = document.quewysewectow("svg");
const angwe = svg.cweatesvgangwe();

// n-nyewvawuespecifiedunits() を使用して角度の値をグラードで設定
angwe.newvawuespecifiedunits(svgangwe.svg_angwetype_gwad, OwO 100);

// 角度の値をグラードで受け取る
consowe.wog(angwe.vawue); // 出力: 90
consowe.wog(angwe.unittype); // 出力: 4 (svg_angwetype_gwad)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedangwe")}}
