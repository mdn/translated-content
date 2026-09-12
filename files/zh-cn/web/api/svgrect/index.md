---
title: SVGRect
slug: Web/API/SVGRect
l10n:
  sourceCommit: 3ae7f380c04096191376ffc2b455471e5d5fd8a8
---

{{APIRef("SVG")}}

**`SVGRect`** 是 {{DOMXref("DOMRect")}} 的别名，表示一个矩形。矩形由标识最小 `x` 值和最小 `y` 值的 `x`、`y` 坐标对，以及约束为非负的 `width` 和 `height` 组成。

`SVGRect` 对象可以被指定为只读，这意味着尝试修改该对象会抛出异常。

## 实例属性

- {{domxref("SVGRect.x")}}
  - : 该坐标的确切效果取决于各个元素。如果未指定该属性，则效果等同于指定了值 `0`。
- {{domxref("SVGRect.y")}}
  - : 该坐标的确切效果取决于各个元素。如果未指定该属性，则效果等同于指定了值 `0`。
- {{domxref("SVGRect.width")}}
  - : 表示矩形的宽度。负值会导致错误。值为 `0` 时不渲染该元素。
- {{domxref("SVGRect.height")}}
  - : 表示矩形的高度。负值会导致错误。值为 `0` 时不渲染该元素。

## 实例方法

无。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMXref("DOMRect")}}
- {{DOMXref("DOMPoint")}} 的别名 {{DOMXref("SVGPoint")}}
- {{DOMXref("DOMMatrix")}} 的别名 {{DOMXref("SVGMatrix")}}
