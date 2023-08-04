---
title: 继承性
slug: Web/CSS/@property/inherits
---

{{CSSRef}}{{SeeCompatTable}}

**`inherits`** [CSS](/zh-CN/docs/Web/CSS) 描述符在使用{{cssxref("@property")}} {{cssxref("at-rule")}}时是必需的，它控制由 `@property`声明注册的自定义属性默认情况下是否会被继承。

## Syntax（类型描述符）

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

- `true`
  - : 属性默认继承
- `false`
  - : 属性默认不继承

## 规范定义

{{cssinfo}}

## 标准语法

```css
{{csssyntax}}
```

## 实例

为 `--my-color` {{cssxref('--*', '自定义属性')}}添加颜色值类型检测、设置默认值并且设置属性值不允许被继承。

使用 [CSS](/zh-CN/docs/Web/CSS) {{cssxref('@property')}} [@规则](/zh-CN/docs/Web/CSS/At-rule):

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [CSS 属性与值 API](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 绘图 API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/zh-CN/docs/Web/Houdini)
