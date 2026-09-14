---
title: "SVGAngle: convertToSpecifiedUnits() メソッド"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGAngle/convertToSpecifiedUnits
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

`convertToSpecifiedUnits()` は {{domxref("SVGAngle")}} インターフェイスのメソッドで、角度の値を指定した単位型に変換することができます。

この関数は次のことを行います。

- 指定された単位型で {{domxref("SVGAngle.unitType", "unitType")}} プロパティを更新する
- {{domxref("SVGAngle.valueInSpecifiedUnits", "valueInSpecifiedUnits")}} および {{domxref("SVGAngle.valueAsString", "valueAsString")}} プロパティを更新し、角度値が指定された単位型で表現されるようにする

## 構文

```js-nolint
convertToSpecifiedUnits(unitType)
```

### 引数

- `unitType`
  - : 角度値を変換する単位型を表す定数です。 これは、 {{domxref("SVGAngle.unitType", "unitType")}} プロパティに対して定義された定数値のいずれかでなければならず、 `SVG_ANGLETYPE_UNKNOWN` は例外となります。
    - `SVGAngle.SVG_ANGLETYPE_DEG`: 度に変換
    - `SVGAngle.SVG_ANGLETYPE_RAD`: ラジアンに変換
    - `SVGAngle.SVG_ANGLETYPE_GRAD`: グラードに変換
    - `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: 単位なしの値に変換、度として解釈される

### 返値

なし ({{jsxref('undefined')}})。

## 例

### 角度を度に変換

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// 角度の値をラジアンで設定 (Math.PI / 2)
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// 角度の値を文字列として受け取る
console.log(angle.valueAsString); // 出力: 1.5708rad
console.log(angle.unitType); // 出力: 3 (SVG_ANGLETYPE_RAD)

// 角度の値を度に変換
angle.convertToSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG);

// 角度の値を文字列として受け取る
console.log(angle.valueAsString); // 出力: 90deg
console.log(angle.unitType); // 出力: 2 (SVG_ANGLETYPE_DEG)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedAngle")}}
