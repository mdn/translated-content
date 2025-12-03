---
title: CSSTransformComponent
slug: Web/API/CSSTransformComponent
l10n:
  sourceCommit: 1a5c9bf577facb17a2b34d1c27cfe6b3655787cd
---

{{APIRef("CSS Typed OM")}}

[CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Object_Model) 的 **`CSSTransformComponent`** 接口属于 {{domxref('CSSTransformValue')}} 接口。

## 实例属性

- {{domxref("CSSTransformComponent.is2D")}} {{ReadOnlyInline}}
  - : 返回指示变换是 2D 还是 3D 的布尔值。

## 实例方法

- {{domxref("CSSTransformComponent.toMatrix()")}}
  - : 返回一个新的 {{domxref('DOMMatrix')}} 对象。
- {{domxref("CSSTransformComponent.toString()")}}
  - : [CSS 变换函数](/zh-CN/docs/Web/CSS/Reference/Values/transform-function)形式的字符串。

    这将使用 `is2D` 的值来返回 2D 或 3D 变换。例如，如果组件表示 {{domxref("CSSRotate")}} 并且 `is2D` 为 false，则返回的字符串将以 CSS 转换函数 [`rotate3d()`](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/rotate3d) 的形式。如果为 true，则返回的字符串将以 2D 的 [`rotate()`](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/rotate) 函数的形式。

## 示例

待完成。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
