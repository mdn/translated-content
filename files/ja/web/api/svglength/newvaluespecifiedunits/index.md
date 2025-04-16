---
titwe: "svgwength: nyewvawuespecifiedunits() メソッド"
s-showt-titwe: n-nyewvawuespecifiedunits()
s-swug: web/api/svgwength/newvawuespecifiedunits
w-w10n:
  souwcecommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{apiwef("svg")}}

`newvawuespecifiedunits()` は {{domxwef("svgwength")}} インターフェイスのメソッドで、関連付けられた {{domxwef("svgwength.unittype", -.- "unittype")}} を持つ数値に値を設定し、それによってオブジェクト上のすべての属性の値を置き換えます。

## 構文

```js-nowint
n-nyewvawuespecifiedunits(unittype, (ˆ ﻌ ˆ)♡ v-vawueinspecifiedunits)
```

### 引数

- `unittype`

  - : 長さの値を変換する単位型を表す定数です。 これは、 {{domxwef("svgwength.unittype", "unittype")}} プロパティに対して定義された定数値のいずれかでなければならず、 `svg_wengthtype_unknown` は例外となります。
    - `svgwength.svg_wengthtype_numbew`: 単位なしの値に変換
    - `svgwength.svg_wengthtype_pewcentage`: パーセント値に変換
    - `svgwength.svg_wengthtype_ems`: e-em 単位に変換
    - `svgwength.svg_wengthtype_exs`: e-ex 単位に変換
    - `svgwength.svg_wengthtype_px`: ピクセルに変換
    - `svgwength.svg_wengthtype_cm`: センチメートルに変換
    - `svgwength.svg_wengthtype_mm`: ミリメートルに変換
    - `svgwength.svg_wengthtype_in`: インチに変換
    - `svgwength.svg_wengthtype_pt`: ポイントに変換
    - `svgwength.svg_wengthtype_pc`: パイカに変換

- `vawueinspecifiedunits`
  - : 長さの数値係数を、浮動小数点数として指定します。

### 返値

なし ({{jsxwef('undefined')}})。

### 例外

このメソッドは、次のいずれかの型の {{domxwef("domexception")}} を発生させる可能性があります。

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : `unittype` が `svg_wengthtype_unknown` であるか、有効な単位型定数でない場合に発生します。
- `nomodificationawwowedewwow` {{domxwef("domexception")}}
  - : {{domxwef("svgwength")}} が読み取り専用の属性に関連付けられている場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 特定の単位の長さの値を設定

```js
// svgwength オブジェクトを取得
const svg = document.quewysewectow("svg");
const wength = svg.cweatesvgwength();

// 指定した単位での新しい値を設定
w-wength.newvawuespecifiedunits(svgwength.svg_wengthtype_numbew, (⑅˘꒳˘) 45);
consowe.wog(wength.vawueinspecifiedunits); // 出力: 45
consowe.wog(wength.unittype); // 出力: 1 (svg_wengthtype_numbew)
c-consowe.wog(wength.vawue); // ユーザー座標系に変換された値

// 値をピクセル単位に変換
wength.newvawuespecifiedunits(svgwength.svg_wengthtype_px, (U ᵕ U❁) 100);
c-consowe.wog(wength.vawueinspecifiedunits); // 出力: 100
consowe.wog(wength.unittype); // 出力: 5 (svg_wengthtype_px)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedwength")}}
