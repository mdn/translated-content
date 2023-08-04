---
title: <mspace>
slug: Web/MathML/Element/mspace
---

{{MathMLRef}}

MathML\<mspace>元素用来表示一段空白，空白的大小由它自身的属性决定。

## 属性

- class, id, style
  - : 用来供[样式表](/zh-CN/docs/CSS)使用。
- depth
  - : 空白在基线下方的高度 (参阅 [length](/zh-CN/docs/MathML/Attributes/Values#Lengths)).
- height
  - : 空白在基线上方的高度 (参阅 [length](/zh-CN/docs/MathML/Attributes/Values#Lengths)).
- linebreak
  - : Indicates a line-break at the space. Possible values: `auto` (default value), `newline`, `nobreak`, `goodbreak`, `badbreak`.
    Starting with MathML 3, it is preferred to use {{ MathMLElement("mo") }} to control linebreaking.
- mathbackground
  - : 用来设置背景色，可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- width
  - : 空白的宽度 (参阅 [length](/zh-CN/docs/MathML/Attributes/Values#Lengths)).

注意，一些像`mathcolor`、`mathvariant`或`dir`这种常用的属性在`<mspace>`上是无效的。

## 例子

```html
<math>
  <mspace depth="40px" height="20px" />

  <mspace width="100px" />
</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## Gecko 说明

- [Indentation attributes](http://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs) 暂时没有实现 (for Gecko see [Firefox bug 534962](https://bugzil.la/534962)).
- 从 Gecko 23.0 开始实现了对`width`属性负值的支持。

## 相关链接

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
