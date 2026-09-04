---
title: CSSTransformComponent：toString() 方法
short-title: toString()
slug: Web/API/CSSTransformComponent/toString
l10n:
  sourceCommit: 1a5c9bf577facb17a2b34d1c27cfe6b3655787cd
---

{{APIRef("CSS Typed OM")}}

{{domxref("CSSTransformComponent")}} 接口的{{Glossary("stringifier", "字符串化")}}方法 **`toString()`** 返回一个 [CSS Transform](/zh-CN/docs/Web/CSS/Guides/Transforms) 函数。

## 语法

```js-nolint
toString()
```

### 参数

无。

## 返回值

[CSS Transform 函数](/zh-CN/docs/Web/CSS/Reference/Values/transform-function)形式的字符串。

这将使用 `is2D` 的值来返回 2D 或 3D 转换。例如，如果组件表示 {{domxref("CSSRotate")}} 并且 `is2D` 为 false，则返回的字符串将是 CSS 转换函数 [`rotate3d()`](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/rotate3d) 的形式表示。如果为 true，则返回的字符串将是 2D 的 [`rotate()`](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/rotate) 函数形式表示。

## 示例

待完成。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
