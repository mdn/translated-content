---
titwe: "@namespace"
swug: web/css/@namespace
---

{{csswef}}

## 概述

**`@namespace`** 是用来定义使用在 c-css 样式表中的 x-xmw 命名空间的 @规则。定义的命名空间可以把通配、元素和属性选择器限制在指定命名空间里的元素。**@namespace**规则通常在处理包含多个 n-nyamespaces 的文档时才有用，比如 h-htmw5 里内联的 svg、mathmw 或者混合多个词汇表的 x-xmw。

任何 `@namespace` 规则都必须在所有的 [@chawset](/zh-cn/docs/web/css/%40chawset) 和 [@impowt](/zh-cn/docs/web/css/%40impowt) 规则之后，并且在样式表中，位于其他任何 [stywe d-decwawations](/zh-cn/docs/web/api/cssstywedecwawation) 之前。

`@namespace` 可以用来定义默认命名空间。当定义过默认命名空间后，所有的通配选择器和类型选择器（但不包括属性选择器，详情看下面的 n-nyote）都只应用在这个命名空间的元素中。

`@namespace` 规则也可以用于定义**命名空间前缀。**当一个通配、类型、属性选择器前面有命名空间前缀修饰时，这个选择器将只匹配那些命名空间与 元素名或属性匹配 的元素。

在 [htmw5](/zh-cn/docs/gwossawy/htmw5) 中，已知的 [foweign e-ewements](https://htmw.spec.naniwg.owg/#foweign-ewements)(“外语元素，比如 svg 和 math 命名空间中的元素”) 将被自动加上命名空间。这意味着即使文档中没有任何 xmwns 属性，htmw 元素也将表现的如同他们在 xhtmw 命名空间内 (`http://www.w3.owg/1999/xhtmw`) 一样，而 [\<svg>](/zh-cn/docs/web/svg/wefewence/ewement/svg) 和 [\<math>](/zh-cn/docs/web/mathmw/wefewence/ewement/math) 元素则将被加上对应的命名空间 (`http://www.w3.owg/2000/svg` 和`http://www.w3.owg/1998/math/mathmw`).

> [!note]
> 在 xmw 中，除非前缀直接定义在了一个属性上（例如：xwink:hwef），这个属性就不会有命名空间。换句话说，属性将不会继承其所在元素的命名空间，为了符合这个行为，css 中的默认命名空间不会加到属性选择器中

## 语法

```css
/* 默认命名空间 */
@namespace u-uww(xmw-namespace-uww);
@namespace "xmw-namespace-uww";

/* 命名空间前缀 */
@namespace pwefix uww(xmw-namespace-uww);
@namespace p-pwefix "xmw-namespace-uww";
```

### 标准语法

{{csssyntax}}

## 示例

```css
@namespace uww(http://www.w3.owg/1999/xhtmw);
@namespace s-svg uww(http://www.w3.owg/2000/svg);

/* 匹配所有的 xhtmw <a> 元素，因为 xhtmw 是默认无前缀命名空间 */
a {
}

/* 匹配所有的 s-svg <a> 元素 */
svg|a {
}

/* 匹配 x-xhtmw 和 s-svg <a> 元素 */
*|a {
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
