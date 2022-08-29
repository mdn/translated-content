---
title: CSS 数値ファクトリー関数
slug: Web/API/CSS/factory_functions
tags:
  - API
  - CSS
  - CSS API
  - Houdini
  - リファレンス
  - ファクトリー関数
translation_of: Web/API/CSS/factory_functions
---
{{SeeCompatTable}}

**CSS 数値ファクトリー関数**、たとえば `CSS.em()` や `CSS.turn()` は、値を数値引数、単位を使用するメソッド名として [CSSUnitValues](/en-US/docs/Web/API/CSSUnitValue) を返すもので、このメソッドを使用すると、数値引数で単位を設定することができます。これらの関数は {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}} コンストラクターを使うよりも冗長でなく新しい数値を生成します。

## 構文

```js
CSS.number(number);
CSS.percent(number);

// <length>
CSS.em(number);
CSS.ex(number);
CSS.ch(number);
CSS.ic(number);
CSS.rem(number);
CSS.lh(number);
CSS.rlh(number);
CSS.vw(number);
CSS.vh(number);
CSS.vi(number);
CSS.vb(number);
CSS.vmin(number);
CSS.vmax(number);
CSS.cm(number);
CSS.mm(number);
CSS.Q(number);
CSS.in(number);
CSS.pt(number);
CSS.pc(number);
CSS.px(number);

// <angle>
CSS.deg(number);
CSS.grad(number);
CSS.rad(number);
CSS.turn(number);

// <time>
CSS.s(number);
CSS.ms(number);

// <frequency>
CSS.Hz(number);
CSS.kHz(number);

// <resolution>
CSS.dpi(number);
CSS.dpcm(number);
CSS.dppx(number);

// <flex>
CSS.fr(number);
```

## 例

数値ファクトリー関数の `CSS.vmax()` を使用して {{domxref('CSSUnitValue')}} を作成します。

```js
let height = CSS.vmax(50);

console.log( height );       // CSSUnitValue {value: 50, unit: "vmax"}
console.log( height.value )  // 50
console.log( height.unit )   // vmax
```

この例では、要素のマージンを `CSS.px()` ファクトリー関数で設定します。

```js
myElement.attributeStyleMap.set('margin', CSS.px(40));
let currentMargin = myElement.attributeStyleMap.get('margin');
console.log(currentMargin.value, currentMargin.unit); // 40, 'px'
```

## 仕様書

{{Specifications("api.CSS")}}

## ブラウザーの互換性

{{Compat("api.CSS")}}

## 関連情報

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
