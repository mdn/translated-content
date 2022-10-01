---
title: CSS Containment
slug: Web/CSS/CSS_Containment
---

{{CSSRef}}
CSS Containment 主要是通过允许开发者将某些子树从页面中独立出来，从而提高页面的性能。如果浏览器知道页面中的某部分是独立的，就能够优化渲染并获得性能提升。这个定义通过一个 CSS 属性 {{cssxref("contain")}}来实现。本文阐述了这个定义的基础用法。

## 基本示例

大多数的网页都包含了一些独立于网页中其他部分的区块。比如一个包含文章标题和内容的列表，如下：

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
</article>
<article>
  <h2>Another heading of another article</h2>
  <p>More content here.</p>
</article>
```

每个 article 区块的 CSS 中都有 {{cssxref("contain")}} 属性，其值为 content.

```css
article {
  contain: content;
}
```

在这个页面中，每个 article 都独立于其他的 article，所以，他们都被设置了 `contain: content` 属性，为了告诉浏览器他们相互独立。浏览器就可以通过这个信息来确定，如何渲染这些内容。比如，他可能不会渲染超出视图范围外的内容。

如果我们给每个 `<article>` 节点都设置其 `contain` 属性为 `content`，当新的内容被加入到该节点中时，浏览器就知道不用重排和重绘节点以外的页面内容，但如果 `<article>` 设置了其 CSS 属性能让其大小根据其内容改变（比如 `height: auto`），浏览器依旧会进行其大小的计算。

我们通过 `contain` 属性告诉浏览器，这些节点是独立的。

`content` 其实是 `contain: layout paint` 的缩写。他告诉浏览器，该节点内部的渲染和排版完全独立于外部的其他内容，并且所有的内容渲染都只限定在其节点边界内部，溢出的部分不会显示。

“节点的独立性”这个信息对于开发者来说，其实是事先知道的。但浏览器却不能够从你的内容里推测出哪些部分会是独立的。因此，这个属性给予了浏览器知晓这个信息的能力，并且允许其通过这个信息来进行一些可观的性能优化。

## 关键概念和术语

这个规范的定义只有一个属性， {{cssxref("contain")}}。他的值表明你想用何种方式控制其 containment。

### Layout containment

```css
article {
  contain: layout;
}
```

布局的影响通常是整个页面的，比如你移动了某个节点，不论你是把它移动到哪儿，浏览器都会重新计算整个页面的布局。通过使用 `contain: layout` 你可以告诉浏览器，它只会影响到该节点内部的布局，所有内部的改变都不会影响外部页面的布局，这个容器建立了一个独立的格式化上下文。

额外注意：

- `float` 布局会独立存在。
- 布局边界不会存在边距塌陷。
- 该布局容器会成为 `absolute`/`fixed` 定位的。
- 容器会创建一个栈式上下文，因此可以使用 {{cssxref("z-index")}}。

### Paint containment

```css
article {
  contain: paint;
}
```

Paint containment essentially clips the box to the padding edge of the principal box. There can be no visible overflow. The same things are true for `paint` containment as `layout` containment (see above).

Another advantage is that if the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box.

### Size containment

```css
article {
  contain: size;
}
```

Size containment does not offer much in the way of performance optimizations when used on its own. However, it means that the size of the element's children cannot affect the size of the element itself — its size is computed as if it had no children.

If you turn on `contain: size` you need to also specify the size of the element you have applied this to. It will end up being zero-sized in most cases, if you don't manually give it a size.

### Style containment

```css
article {
  contain: style;
}
```

Despite the name, style containment does not provide scoped styles such as you would get with the [Shadow DOM](/zh-CN/docs/Web/Web_Components/Using_shadow_DOM). The main use case is to prevent situations where a [CSS Counter](/zh-CN/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters) could be changed in an element, which could then affect the rest of the tree.

Using `contain: style` would ensure that the {{cssxref("counter-increment")}} and {{cssxref("counter-set")}} properties created new counters scoped to that subtree only.

> **备注：** `style` containment is "at-risk" in the spec and may not be supported everywhere (it's not currently supported in Firefox).

### 特殊值

存在两个特殊的值：

- `content`
- `strict`

We encountered the first in the example above. Using `contain: content` turns on `layout` and `paint` containment. The specification describes this value as being "reasonably safe to apply widely". It does not apply `size` containment, so you would not be at risk of a box ending up zero-sized due to a reliance on the size of its children.

To gain as much containment as possible use `contain: strict`, which behaves the same as `contain: size layout paint`, or perhaps the following to also add `style` containment in browsers that support it:

```css
contain: strict;
contain: strict style;
```

## 引用

### CSS Properties

- {{cssxref("contain")}}

## 外部资源

- [An Introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
- [Everything You Need to Know About the CSS `will-change` Property](https://dev.opera.com/articles/css-will-change-property)
