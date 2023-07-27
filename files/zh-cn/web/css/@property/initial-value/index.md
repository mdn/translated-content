---
title: 初始值
slug: Web/CSS/@property/initial-value
---

{{CSSRef}}{{SeeCompatTable}}

**`initial-value`** [CSS](/zh-CN/docs/Web/CSS)描述符在使用{{cssxref("@property")}} {{cssxref("at-rule")}}的时候是必需的，除非 syntax 属性接受了任何有效的 token 流。它为属性设置初始值。

被选定为`initial-value`的参数，依照`syntax`描述符定义，必须可以正确地解析。因此，如果`syntax`描述符为`<color>`，那么初始值必须是一个有效的{{cssxref("color")}}值。

## 语法

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}

@property --property-name {
  syntax: "<color>";
  inherits: true;
  initial-value: #c0ffee;
}
```

## 取值

对于设定的`syntax`，具有正确值的字符串。

## 标准定义

{{cssinfo}}

## 标准语法

```css
{{csssyntax}}
```

## 实例

为 `--my-color` {{cssxref('--*', '自定义属性')}}添加颜色值类型检测、设置默认值并且设置属性值不允许被继承。

使用 [CSS](/zh-CN/docs/Web/CSS) {{cssxref('@property')}} [规则](/zh-CN/docs/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

使用 [JavaScript 中的](/zh-CN/docs/Web/JavaScript) {{domxref('CSS.registerProperty')}}函数：

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## 标准语法

```css
{{csssyntax}}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [CSS 属性与值 API](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 绘图 API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/zh-CN/docs/Web/Houdini)
