---
title: "@namespace"
slug: Web/CSS/@namespace
---

{{CSSRef}}

## 概述

**`@namespace`** 是用来定义使用在 CSS 样式表中的 XML 命名空间的 @规则。定义的命名空间可以把通配、元素和属性选择器限制在指定命名空间里的元素。**@namespace**规则通常在处理包含多个 namespaces 的文档时才有用，比如 HTML5 里内联的 SVG、MathML 或者混合多个词汇表的 XML。

任何 `@namespace` 规则都必须在所有的 [@charset](/zh-CN/docs/Web/CSS/%40charset) 和 [@import](/zh-CN/docs/Web/CSS/%40import) 规则之后，并且在样式表中，位于其他任何 [style declarations](/zh-CN/docs/Web/API/CSSStyleDeclaration) 之前。

`@namespace` 可以用来定义默认命名空间。当定义过默认命名空间后，所有的通配选择器和类型选择器（但不包括属性选择器，详情看下面的 note）都只应用在这个命名空间的元素中。

`@namespace` 规则也可以用于定义**命名空间前缀。**当一个通配、类型、属性选择器前面有命名空间前缀修饰时，这个选择器将只匹配那些命名空间与 元素名或属性匹配 的元素。

在 [HTML5](/zh-CN/docs/Glossary/HTML5) 中，已知的 [foreign elements](https://html.spec.whatwg.org/#foreign-elements)(“外语元素，比如 SVG 和 math 命名空间中的元素”) 将被自动加上命名空间。这意味着即使文档中没有任何 xmlns 属性，HTML 元素也将表现的如同他们在 XHTML 命名空间内 (`http://www.w3.org/1999/xhtml`) 一样，而 [\<svg>](/zh-CN/docs/Web/SVG/Element/svg) 和 [\<math>](/zh-CN/docs/Web/MathML/Element/math) 元素则将被加上对应的命名空间 (`http://www.w3.org/2000/svg` 和`http://www.w3.org/1998/Math/MathML`).

> **备注：** 在 XML 中，除非前缀直接定义在了一个属性上（例如：xlink:href），这个属性就不会有命名空间。换句话说，属性将不会继承其所在元素的命名空间，为了符合这个行为，CSS 中的默认命名空间不会加到属性选择器中

## 语法

```css
/* 默认命名空间 */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* 命名空间前缀 */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

### 标准语法

{{csssyntax}}

## 示例

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* 匹配所有的 XHTML <a> 元素，因为 XHTML 是默认无前缀命名空间 */
a {
}

/* 匹配所有的 SVG <a> 元素 */
svg|a {
}

/* 匹配 XHTML 和 SVG <a> 元素 */
*|a {
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
