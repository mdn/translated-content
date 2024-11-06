---
title: CSS 数字工厂函数
slug: Web/API/CSS/factory_functions_static
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{APIRef("CSSOM")}}

**CSS 数字工厂函数**（例如 `CSS.em()` 和 `CSS.turn()`）是返回 [CSSUnitValue](/zh-CN/docs/Web/API/CSSUnitValue) 的方法，其中值为实际参数，单位是所使用的方法名称。这些函数创建新的数值比使用 {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}} 构造函数更加简洁。

## 语法

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

## 示例

我们使用 `CSS.vmax()` 数字工厂函数来创建 {{domxref('CSSUnitValue')}}：

```js
const height = CSS.vmax(50);

console.log(height); // CSSUnitValue {value: 50, unit: "vmax"}
console.log(height.value); // 50
console.log(height.unit); // vmax
```

在此示例中，我们使用 `CSS.px()` 工厂函数给元素设置外边距：

```js
myElement.attributeStyleMap.set("margin", CSS.px(40));
const currentMargin = myElement.attributeStyleMap.get("margin");
console.log(currentMargin.value, currentMargin.unit); // 40, 'px'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CSSUnitValue.CSSUnitValue", "CSSUnitValue()")}}
