---
title: "SVGLength: newValueSpecifiedUnits() メソッド"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGLength/newValueSpecifiedUnits
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

`newValueSpecifiedUnits()` は {{domxref("SVGLength")}} インターフェイスのメソッドで、関連付けられた {{domxref("SVGLength.unitType", "unitType")}} を持つ数値に値を設定し、それによってオブジェクト上のすべての属性の値を置き換えます。

## 構文

```js-nolint
newValueSpecifiedUnits(unitType, valueInSpecifiedUnits)
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

- `valueInSpecifiedUnits`
  - : 長さの数値係数を、浮動小数点数として指定します。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

このメソッドは、次のいずれかの型の {{domxref("DOMException")}} を発生させる可能性があります。

- `NotSupportedError` {{domxref("DOMException")}}
  - : `unitType` が `SVG_LENGTHTYPE_UNKNOWN` であるか、有効な単位型定数でない場合に発生します。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGLength")}} が読み取り専用の属性に関連付けられている場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 特定の単位の長さの値を設定

```js
// SVGLength オブジェクトを取得
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// 指定した単位での新しい値を設定
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, 45);
console.log(length.valueInSpecifiedUnits); // 出力: 45
console.log(length.unitType); // 出力: 1 (SVG_LENGTHTYPE_NUMBER)
console.log(length.value); // ユーザー座標系に変換された値

// 値をピクセル単位に変換
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 100);
console.log(length.valueInSpecifiedUnits); // 出力: 100
console.log(length.unitType); // 出力: 5 (SVG_LENGTHTYPE_PX)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedLength")}}
