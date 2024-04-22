---
title: CSS 数値ファクトリー関数
slug: Web/API/CSS/factory_functions_static
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{APIRef("CSSOM")}}

**CSS 数値ファクトリー関数**、たとえば `CSS.em()` や `CSS.turn()` は、単位を使用するメソッド名とし、数値を引数とした値の [CSSUnitValues](/ja/docs/Web/API/CSSUnitValue) を返すもので、このメソッドを使用すると、数値引数で単位を設定することができます。これらの関数は {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}} コンストラクターを使うよりも冗長でなく新しい数値を生成します。

## 構文

```js-nolint
CSS.number(number)
CSS.percent(number)

// <length>
CSS.em(number)
CSS.ex(number)
CSS.ch(number)
CSS.ic(number)
CSS.rem(number)
CSS.lh(number)
CSS.rlh(number)
CSS.vw(number)
CSS.vh(number)
CSS.vi(number)
CSS.vb(number)
CSS.vmin(number)
CSS.vmax(number)
CSS.cm(number)
CSS.mm(number)
CSS.Q(number)
CSS.in(number)
CSS.pt(number)
CSS.pc(number)
CSS.px(number)

// <angle>
CSS.deg(number)
CSS.grad(number)
CSS.rad(number)
CSS.turn(number)

// <time>
CSS.s(number)
CSS.ms(number)

// <frequency>
CSS.Hz(number)
CSS.kHz(number)

// <resolution>
CSS.dpi(number)
CSS.dpcm(number)
CSS.dppx(number)

// <flex>
CSS.fr(number)
```

## 例

数値ファクトリー関数の `CSS.vmax()` を使用して {{domxref('CSSUnitValue')}} を作成します。

```js
const height = CSS.vmax(50);

console.log(height); // CSSUnitValue {value: 50, unit: "vmax"}
console.log(height.value); // 50
console.log(height.unit); // vmax
```

この例では、要素のマージンを `CSS.px()` ファクトリー関数で設定します。

```js
myElement.attributeStyleMap.set("margin", CSS.px(40));
const currentMargin = myElement.attributeStyleMap.get("margin");
console.log(currentMargin.value, currentMargin.unit); // 40, 'px'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
