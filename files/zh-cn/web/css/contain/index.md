---
title: contain
slug: Web/CSS/contain
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`contain`** 属性允许开发者声明当前元素和它的内容尽可能的*独立*于 DOM 树的其他部分。这使得浏览器在重新计算布局、样式、绘图、大小或这四项的组合时，只影响到有限的 DOM 区域，而不是整个页面，可以有效改善性能。

这个属性在包含大量独立组件的页面非常实用，它可以防止某个小部件的 CSS 规则改变对页面上的其他东西造成影响。

> **备注：** If applied (with value: `paint`, `strict` or `content`), this property creates:
>
> 1. A new [containing block](/zh-CN/docs/Web/CSS/Containing_block) (for the descendants whose {{cssxref("position")}} property is `absolute` or `fixed`).
> 2. A new [stacking context](/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
> 3. A new [block formatting context](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context).

## 语法

```css
/* 关键词值 */
contain: none;

/* 等价于 contain: layout paint size */
contain: strict;

/* 等价于 contain: layout paint W3C 链接：https://www.w3.org/TR/css-contain-2/#valdef-contain-content*/
contain: content;

contain: size;
contain: layout;
contain: style;
contain: paint;

/* 支持指定多个关键词 */
contain: size paint;
contain: size layout paint;

/* 全局值 */
contain: inherit;
contain: initial;
contain: unset;
```

The `contain` property is specified as either one of the following:

- Using a single `none`, `strict`, or `content` keyword.
- Using one or more of the `size`, `layout`, `style`, and `paint` keywords in any order.

### 属性值

- `none`
  - : 表示元素将正常渲染，没有包含规则。
- `strict`
  - : 表示除了 `style` 外的所有的包含规则应用于这个元素。等价于 `contain: size layout paint`。
- `content`
  - : 表示这个元素上有除了 `size` 和 `style` 外的所有包含规则。等价于 `contain: layout paint`。
- `size`
  - : 表示这个元素的尺寸计算不依赖于它的子孙元素的尺寸。
- `layout`
  - : 表示元素外部无法影响元素内部的布局，反之亦然。
- `style`
  - : 表示那些同时会影响这个元素和其子孙元素的属性，都在这个元素的包含范围内。
    Indicates that, for properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element. Note that this value is marked "at-risk" in the spec and may not be supported everywhere.
- `paint`
  - : 表示这个元素的子孙节点不会在它边缘外显示。如果一个元素在视窗外或因其他原因导致不可见，则同样保证它的子孙节点不会被显示。
    Indicates that descendants of the element don't display outside its bounds. If the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box. And if a descendant overflows the containing element's bounds, then that descendant will be clipped to the containing element's border-box.

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单布局

The markup below consists of a number of articles, each with content:

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

Each `<article>` and `<img>` is given a border, and the images are floated:

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

{{EmbedLiveSample('简单布局', '100%', '300')}}

### 浮动干涉

If we were to insert another image at the bottom of the first article, a large portion of the DOM tree may be re-laid out or repainted, and this would also interfere with the layout of the second article:

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social">
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

```css hidden
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

As you can see, because of the way floats work, the first image ends up inside the area of the second article:

{{EmbedLiveSample('浮动干涉', '100%', '300')}}

### Fixing with contain

If we give each `article` the `contain` property with a value of `content`, when new elements are inserted the browser understands it only needs to recalculate the containing element's subtree, and not anything outside it:

```html hidden
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social">
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
  contain: content;
}
```

This also means that the first image no longer floats down to the second article, and instead stays inside it's containing element's bounds:

{{EmbedLiveSample('Fixing_with_contain', '100%', '330')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS containment](/zh-CN/docs/Web/CSS/CSS_Containment)
- CSS {{cssxref("position")}} 属性
