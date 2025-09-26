---
title: CSSStyleValue：parse() 静态方法
slug: Web/API/CSSStyleValue/parse_static
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSS Typed Object Model API")}}

{{domxref("CSSStyleValue")}} 接口的 **`parse()`** 静态方法将特定 CSS 属性设置为指定值，并将第一个值以 {{domxref('CSSStyleValue')}} 对象返回。

## 语法

```js-nolint
CSSStyleValue.parse(property, cssText)
```

### 参数

- `property`
  - : 要设置的 CSS 属性。
- `cssText`
  - : 以逗号分隔的字符串，包含一个或多个要应用于所提供属性的值。

### 返回值

`CSSStyleValue` 对象，包含第一个提供的值。

## 示例

下面的代码解析了一组 `transform` 属性的声明。第二个代码块显示了返回对象的结构，就像它在开发人员工具控制台中呈现的那样。

```js
const css = CSSStyleValue.parse(
  "transform",
  "translate3d(10px,10px,0) scale(0.5)",
);
```

```css
CSSTransformValue {0: CSSTranslate, 1: CSSScale, length: 2, is2D: false}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`CSSStyleValue.parseAll()`](/zh-CN/docs/Web/API/CSSStyleValue/parseAll_static)
- [使用 CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
