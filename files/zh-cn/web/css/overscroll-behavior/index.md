---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
---

{{CSSRef}}

**`overscroll-behavior`** CSS 属性是 {{cssxref("overscroll-behavior-x")}} 和 {{cssxref("overscroll-behavior-y")}} 属性的合并写法，让你可以控制浏览器过度滚动时的表现——也就是滚动到边界。

```css
/* 关键字的值 */
overscroll-behavior: auto; /* 默认 */
overscroll-behavior: contain;
overscroll-behavior: none;

/* 使用 2 个值 */
overscroll-behavior: auto contain;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: unset;
```

默认情况下，当触及页面顶部或者底部时（或者是其他可滚动区域），移动端浏览器倾向于提供一种“触底”效果，甚至进行页面刷新。你可能也发现了，当对话框中含有可滚动内容时，一旦滚动至对话框的边界，对话框下方的页面内容也开始滚动了——这被称为“滚动链”。

在某些情况下我们不想要这些表现，使用 `overscroll-behavior` 来去除不需要的滚动链，以及类似 QQ 一类的应用下拉刷新效果。

{{cssinfo}}

## 语法

`overscroll-behavior` 属性可以使用下面列表中的一或两个关键字指定。

使用两个关键字来指定 `overscroll-behavior` 分别在 `x` 和 `y` 轴的值。只用一个值的话，x 和 y 轴都被指定为该值。

### 值

- `auto`
  - : 默认效果
- `contain`
  - : 设置这个值后，默认的滚动边界行为不变（“触底”效果或者刷新），但是临近的滚动区域不会被滚动链影响到，比如对话框后方的页面不会滚动。
- `none`
  - : 临近滚动区域不受到滚动链影响，而且默认的滚动到边界的表现也被阻止。

### 形式语法

{{csssyntax}}

## 示例

在我们 [滚动行为示例](https://mdn.github.io/css-examples/overscroll-behavior/) (也可以看该 [源代码](https://github.com/mdn/css-examples/tree/master/overscroll-behavior)) 我们展现一个虚构的联系人全页列表，和一个包含聊天窗口的对话框。

![](example.png)

正常情况下在聊天窗口边界之前都可以使用滚动条，但是当滚动到边界之后，其后的联系人窗口也将开始滚动，这并不是我们满意的效果。可以在聊天窗口中使用 `overscroll-behavior-y` (`overscroll-behavior` 也可以) 就像如下：

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

我们也希望移除标准的滚动至顶部或底部的滚动特效（例如 Android 上的 Chrome 当滚动超过顶部边界时会刷新页面），可以通过在 {{htmlelement("body")}} 元素设置 `overscroll-behavior: none` 来阻止这个行为：

```css
body {
  margin: 0;
  overscroll-behavior: none;
}
```

## 规范

在 CSSWG 发布自己的草案之前，该规范只能在它的 [WICG Github Repository](https://wicg.github.io/overscroll-behavior/) 中找到。

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 过度滚动行为](/zh-CN/docs/Web/CSS/CSS_overscroll_behavior)模块
- developer.chrome.google.cn 上的[掌控滚动操作——自定义下拉刷新和溢出效果](https://developer.chrome.google.cn/blog/overscroll-behavior)（2017）
