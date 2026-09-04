---
title: -webkit-box-reflect
slug: Web/CSS/Reference/Properties/-webkit-box-reflect
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_Header}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`-webkit-box-reflect`** 可以让你在一个特定方向上为元素的内容生成倒影。

## 语法

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

/* 全局值 */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: revert;
-webkit-box-reflect: revert-layer;
-webkit-box-reflect: unset;
```

### 值

- `above`_、_ `below`_、_ `right`_、_ `left`
  - : 这些关键字用于指示倒影生成的方向。
- {{CSSxRef("&lt;length&gt;")}}
  - : 表示倒影的大小。
- {{CSSxRef("&lt;image&gt;")}}
  - : 描述要应用于倒影的蒙版。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntaxRaw(`-webkit-box-reflect = [ above | below | right | left ]? <length>? <image>?`)}}

## 规范

不属于任何标准。在 CSS 中，实现倒影效果的标准方法是使用 CSS 的 {{CSSxRef("element", "element()")}} 函数。

## 浏览器兼容性

{{Compat}}

## 参见

- Apple [文档](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)。
- WebKit [文档](https://webkit.org/blog/182/css-reflections/)。
