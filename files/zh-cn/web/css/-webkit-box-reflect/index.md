---
title: -webkit-box-reflect
slug: Web/CSS/-webkit-box-reflect
---

{{CSSRef}}{{Non-standard_Header}}

**`-webkit-box-reflect`** [CSS](/zh-CN/docs/Web/CSS) 属性可让你将元素内容在特定方向上进行轴对称反射。

```css
/* 方向值 */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* 偏移量值 */
-webkit-box-reflect: below 10px;

/* 蒙版值 */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* 全局属性值 */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: unset;
```

## 语法

### 值

- `above`、`below`、`right`、`left`
  - : 这些关键字指示反射发生的方向。
- {{CSSxRef("&lt;length&gt;")}}
  - : 指示反射的大小。
- {{CSSxRef("&lt;image&gt;")}}
  - : 描述要应用于反射的蒙版。

## 形式定义

{{CSSInfo}}

## 形式语法

```plain
-webkit-box-reflect =
  [ above | below | right | left ]? <length>? <image>?
```

## 规范

这是一个非标准的属性。在 CSS 中创建反射效果的标准方法是使用 CSS 的 {{CSSxRef("element", "element()")}} 函数。

## 浏览器兼容性

{{Compat}}

## 参见

- Apple [文档](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16)。
- Webkit [文档](https://www.webkit.org/blog/182/css-reflections/)。
- Lea Verou 撰写的有关使用 [CSS 特性创建反射效果的文章已经纳入标准跟踪](https://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/)。
