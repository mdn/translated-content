---
title: "SVGAngle: newValueSpecifiedUnits() メソッド"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGAngle/newValueSpecifiedUnits
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

`newValueSpecifiedUnits()` は {{domxref("SVGAngle")}} インターフェイスのメソッドで、関連付けられた {{domxref("SVGAngle.unitType", "unitType")}} を持つ数値に値を設定し、それによってオブジェクト上のすべての属性の値を置き換えます。

## 構文

```js-nolint
newValueSpecifiedUnits(unitType, valueInSpecifiedUnits)
```

### 引数

- `unitType`
  - : 角度値を変換する単位型を表す定数です。 これは、 {{domxref("SVGAngle.unitType", "unitType")}} プロパティに対して定義された定数値のいずれかでなければならず、 `SVG_ANGLETYPE_UNKNOWN` は例外となります。
    - `SVGAngle.SVG_ANGLETYPE_DEG`: 度に変換
    - `SVGAngle.SVG_ANGLETYPE_RAD`: ラジアンに変換
    - `SVGAngle.SVG_ANGLETYPE_GRAD`: グラードに変換
    - `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: 単位なしの値に変換、度として解釈される

- `valueInSpecifiedUnits`
  - : 角度値の数値係数で、指定した単位型で表します。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

このメソッドは、次のいずれかの型の {{domxref("DOMException")}} を発生させる可能性があります。

- `NotSupportedError` {{domxref("DOMException")}}
  - : `unitType` が `SVG_ANGLETYPE_UNKNOWN` であるか、有効な単位型定数でない場合に発生します。

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGAngle")}} が読み取り専用の属性に関連付けられている場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 角度を度で設定

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// newValueSpecifiedUnits() を使用して角度の値を度単位で設定
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// 角度の値を度単位で受け取る
console.log(angle.value); // 出力: 45
console.log(angle.unitType); // 出力: 2 (SVG_ANGLETYPE_DEG)
```

### 角度をラジアンで設定

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// newValueSpecifiedUnits() を使用して角度の値をラジアンで設定
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// 角度の値を受け取る
console.log(angle.value); // 出力: 90
console.log(angle.unitType); // 出力: 3 (SVG_ANGLETYPE_RAD)
```

### 角度をグラードで設定

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// newValueSpecifiedUnits() を使用して角度の値をグラードで設定
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_GRAD, 100);

// 角度の値をグラードで受け取る
console.log(angle.value); // 出力: 90
console.log(angle.unitType); // 出力: 4 (SVG_ANGLETYPE_GRAD)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedAngle")}}
