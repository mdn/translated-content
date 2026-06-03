---
title: inherits
slug: Web/CSS/Reference/At-rules/@property/inherits
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

**`inherits`** [CSS](/zh-CN/docs/Web/CSS) 描述符是在使用 {{cssxref("@property")}} [At 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)时所必须的，它控制着由 `@property` 指定的自定义属性注册是否默认继承。

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

## 值

- `true`
  - : 该属性默认继承。
- `false`
  - : 该属性默认不继承。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

为 `--my-color` [自定义属性](/zh-CN/docs/Web/CSS/Reference/Properties/--*)添加类型检查，将其限定为颜色类型，并设置默认值，同时禁止其继承值。

使用 [CSS](/zh-CN/docs/Web/CSS) {{cssxref('@property')}} [At 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)：

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

使用 [JavaScript](/zh-CN/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}：

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

## 参见

- [CSS 属性和值 API](/zh-CN/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS 绘制 API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
- [Houdini API](/zh-CN/docs/Web/API/Houdini_APIs)
