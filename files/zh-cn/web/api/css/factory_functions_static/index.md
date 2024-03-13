---
title: CSS 数字工厂函数
slug: Web/API/CSS/factory_functions_static
---

{{SeeCompatTable}}**CSS numeric factory functions**，例如 `CSS.em()` 和 `CSS.turn()`，是一组使用传入的数字参数以及所指定的单位（单位名称即所用方法名称）来返回 [CSSUnitValues](/zh-CN/docs/Web/API/CSSUnitValue) 的方法。这些函数创建新的数字值，与使用 {{domxref('CSSUnitValue.CSSUnitValue()')}} 构造函数相比，没有后者那么冗长。

## 语法

```plain
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

## 示例

我们使用 `CSS.vmax()` 数字工厂函数来创建一个 {{domxref('CSSUnitValue')}}：

```js
let height = CSS.vmax(50);

console.log(height); // CSSUnitValue {value: 50, unit: "vmax"}
console.log(height.value); // 50
console.log(height.unit); // vmax
```

在这个例子中，我们给元素设定 margin 属性值，使用 `CSS.px()` 函数：

```js
myElement.attributeStyleMap.set("margin", CSS.px(40));
let currentMargin = myElement.attributeStyleMap.get("margin");
console.log(currentMargin.value, currentMargin.unit); // 40, 'px'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('CSSUnitValue.CSSUnitValue()')}}
