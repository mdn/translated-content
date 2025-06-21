---
title: "SVGLength: convertToSpecifiedUnits() メソッド"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGLength/convertToSpecifiedUnits
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

`convertToSpecifiedUnits()` は {{domxref("SVGLength")}} インターフェイスのメソッドで、長さの値を指定した単位型に変換することができます。

この関数は次のことを行います。

- 指定された単位型で {{domxref("SVGLength.unitType", "unitType")}} プロパティを更新する
- {{domxref("SVGLength.valueInSpecifiedUnits", "valueInSpecifiedUnits")}} および {{domxref("SVGLength.valueAsString", "valueAsString")}} プロパティを更新し、長さの値が指定された単位型で表現されるようにする

## 構文

```js-nolint
convertToSpecifiedUnits(unitType)
```

### 引数

- `unitType`
  - : 長さの値を変換する単位型を表す定数です。 これは、 {{domxref("SVGLength.unitType", "unitType")}} プロパティに対して定義された定数値のいずれかでなければならず、 `SVG_LENGTHTYPE_UNKNOWN` は例外となります。
    - `SVGLength.SVG_LENGTHTYPE_NUMBER`: 単位なしの値に変換
    - `SVGLength.SVG_LENGTHTYPE_PERCENTAGE`: パーセント値に変換
    - `SVGLength.SVG_LENGTHTYPE_EMS`: em 単位に変換
    - `SVGLength.SVG_LENGTHTYPE_EXS`: ex 単位に変換
    - `SVGLength.SVG_LENGTHTYPE_PX`: ピクセルに変換
    - `SVGLength.SVG_LENGTHTYPE_CM`: センチメートルに変換
    - `SVGLength.SVG_LENGTHTYPE_MM`: ミリメートルに変換
    - `SVGLength.SVG_LENGTHTYPE_IN`: インチに変換
    - `SVGLength.SVG_LENGTHTYPE_PT`: ポイントに変換
    - `SVGLength.SVG_LENGTHTYPE_PC`: パイカに変換

### 返値

なし ({{jsxref('undefined')}})。

## 例

### 長さを mm に変換

```js
// SVGLength オブジェクトを取得
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// 長さの値をセンチメートルに設定
length.valueAsString = "0.5cm";

// 長さをミリメートルに変換
length.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_MM);

console.log(length.unitType); // 出力: 7 (SVG_LENGTHTYPE_MM)
console.log(length.valueInSpecifiedUnits); // 出力: 5
console.log(length.valueAsString); // 出力: "5mm"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedLength")}}
