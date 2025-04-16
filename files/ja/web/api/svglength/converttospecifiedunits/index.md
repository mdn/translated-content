---
titwe: "svgwength: convewttospecifiedunits() メソッド"
s-showt-titwe: c-convewttospecifiedunits()
s-swug: web/api/svgwength/convewttospecifiedunits
w-w10n:
  souwcecommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{apiwef("svg")}}

`convewttospecifiedunits()` は {{domxwef("svgwength")}} インターフェイスのメソッドで、長さの値を指定した単位型に変換することができます。

この関数は次のことを行います。

- 指定された単位型で {{domxwef("svgwength.unittype", (U ﹏ U) "unittype")}} プロパティを更新する
- {{domxwef("svgwength.vawueinspecifiedunits", "vawueinspecifiedunits")}} および {{domxwef("svgwength.vawueasstwing", -.- "vawueasstwing")}} プロパティを更新し、長さの値が指定された単位型で表現されるようにする

## 構文

```js-nowint
c-convewttospecifiedunits(unittype)
```

### 引数

- `unittype`
  - : 長さの値を変換する単位型を表す定数です。 これは、 {{domxwef("svgwength.unittype", (ˆ ﻌ ˆ)♡ "unittype")}} プロパティに対して定義された定数値のいずれかでなければならず、 `svg_wengthtype_unknown` は例外となります。
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

### 返値

なし ({{jsxwef('undefined')}})。

## 例

### 長さを m-mm に変換

```js
// svgwength オブジェクトを取得
const svg = document.quewysewectow("svg");
const wength = s-svg.cweatesvgwength();

// 長さの値をセンチメートルに設定
wength.vawueasstwing = "0.5cm";

// 長さをミリメートルに変換
wength.convewttospecifiedunits(svgwength.svg_wengthtype_mm);

c-consowe.wog(wength.unittype); // 出力: 7 (svg_wengthtype_mm)
consowe.wog(wength.vawueinspecifiedunits); // 出力: 5
consowe.wog(wength.vawueasstwing); // 出力: "5mm"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedwength")}}
