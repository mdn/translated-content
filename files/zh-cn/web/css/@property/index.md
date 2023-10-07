---
title: "@property"
slug: Web/CSS/@property
---

{{CSSRef}}{{SeeCompatTable}}

**`@property`** [CSS](/zh-CN/docs/Web/CSS) {{cssxref("at-rule")}}是[CSS Houdini](/zh-CN/docs/Web/Houdini) API 的一部分，它允许开发者显式地定义他们的{{cssxref('--*', 'CSS 自定义属性')}}, 允许进行属性类型检查、设定默认值以及定义该自定义属性是否可以被继承。

`@property` 规则提供了一个直接在样式表中注册自定义属性的方式，而无需运行任何 JS 代码。有效的 `@property` 规则会注册一个自定义属性，就像 {{domxref('CSS.registerProperty')}} 函数被使用同样的参数调用了一样。

## Syntax(语法描述符)

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

一个有效的 `@property` 规则代表一项自定义属性的注册，使用自定义属性名作为规则内代码序列的序部。

`@property` 规则中 **syntax** 和 **inherits** 描述符是必需的; 如果其中任何一项缺失，整条规则都将失效并且会被忽略。 **initial-value** 描述符仅在 syntax 描述符为通用 syntax 定义时是可选的，否则**initial-value**也是必需的——如果此时该描述符缺失，整条规则都将失效且被忽略。

未知的描述符自身都是无效的，且会被忽略。但是不会造成整条`@property`规则的失效。

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
