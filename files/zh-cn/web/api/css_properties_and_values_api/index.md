---
title: CSS 属性和值 API
slug: Web/API/CSS_Properties_and_Values_API
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

**CSS 属性和值 API**（CSS Properties and Values API）——[CSS Houdini](/zh-CN/docs/Web/API/Houdini_APIs) API 的一部分——允许开发者显式地定义它们的 {{cssxref('--*', 'CSS 自定义属性')}}，允许设置属性类型检查、默认值以及是否可继承其值。

## 接口

- {{domxref('CSS.registerProperty')}}
  - : 定义了浏览器应该如何解析 {{cssxref('--*', 'CSS custom properties')}}。通过 [JavaScript](/zh-CN/docs/Web/JavaScript) 中的 {{domxref('CSS.registerProperty')}} 访问该接口。
- {{cssxref('@property')}}
  - : 定义了浏览器应该如何解析 {{cssxref('--*', 'CSS custom properties')}}。通过 [CSS](/zh-CN/docs/Web/CSS) 中的 {{cssxref('@property')}} [at 规则](/zh-CN/docs/Web/CSS/At-rule)访问该接口。

## 示例

以下代码在 [JavaScript](/zh-CN/docs/Web/JavaScript) 中使用 {{domxref('CSS.registerProperty')}} 输入一个 {{cssxref('--*', 'CSS 自定义属性')}}，`--my-color`，将其作为一个颜色，然后为其设置一个默认值，并且不允许继承它的值。

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

可以在 [CSS](/zh-CN/docs/Web/CSS) 中使用 {{cssxref('@property')}} [at-rule](/zh-CN/docs/Web/CSS/At-rule) 进行相同的注册：

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 属性和值 API](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS Painting API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/zh-CN/docs/Web/API/Houdini_APIs)
