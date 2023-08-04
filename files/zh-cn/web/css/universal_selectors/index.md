---
title: 通配选择器
slug: Web/CSS/Universal_selectors
---

{{CSSRef}}

## 概述

在 CSS 中，一个星号 (`*`) 就是一个通配选择器。它可以匹配任意类型的 HTML 元素。在配合其他简单选择器的时候，省略掉通配选择器会有同样的效果。比如，`*.warning` 和`.warning` 的效果完全相同。

在 CSS3 中，星号 (`*`) 可以和命名空间组合使用：

- `ns|*` - 会匹配`ns`命名空间下的所有元素
- `*|*` - 会匹配所有命名空间下的所有元素
- `|*` - 会匹配所有没有命名空间的元素

## 示例

```css
*[lang^="en"] {
  color: green;
}
*.warning {
  color: red;
}
*#maincontent {
  border: 1px solid blue;
}
```

上面的 CSS 作用于下面的 HTML:

```html
<p class="warning">
  <span lang="en-us">A green span</span> in a red paragraph.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">A red span</span> in a green paragraph.
</p>
```

则会产生这样的效果：

{{EmbedLiveSample('示例')}}

> **备注：** 笔者不推荐使用通配选择器，因为它是[性能最低的一个 CSS 选择器](http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接
