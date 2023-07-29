---
title: order
slug: Web/CSS/order
---

{{CSSRef("CSS Flexible Boxes")}}

## 概述

[CSS](/zh-CN/docs/CSS) **`order`** 属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 `order` 属性的值的增序进行布局。拥有相同 `order` 属性值的元素按照它们在源代码中出现的顺序进行布局。

> **备注：** `order` 仅仅对元素的视觉顺序 (**visual order**) 产生作用，并不会影响元素的逻辑或 tab 顺序。 **`order`** 不可以用于非视觉媒体，例如 speech。

{{cssinfo}}

参考 [使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes) 获取更多信息。

## 语法

```css
/* Numerical value including negative numbers */
order: 5;
order: -5;

/* Global values */
order: inherit;
order: initial;
order: unset;
```

### 取值

- `<integer>`
  - : 表示此可伸缩项目所在的次序组。

### Formal syntax

{{csssyntax}}

## 例子

这里是一个基本的 HTML 代码片段：

```html
<!doctype html>
<header>…</header>
<div id="main">
  <article>…</article>
  <nav>…</nav>
  <aside>…</aside>
</div>
<footer>…</footer>
```

下面的 CSS 代码会创建一个经典的双 sidebar 围绕一个中央内容块的布局。Flexible Box 布局模块会自动地创建三个具有相同高度的内容块，也会使用所有可用的水平空间。

```css
#main {
  display: flex;
}
#main > article {
  flex: 1;
  order: 2;
}
#main > nav {
  width: 200px;
  order: 1;
}
#main > aside {
  width: 200px;
  order: 3;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes)
