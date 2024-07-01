---
title: will-change
slug: Web/CSS/will-change
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 `will-change` 为 web 开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

> **警告：** `will-change` 应该被视为最后的应对手段，用于解决现有的性能问题。不应该被用来预测性能问题。

```css
/* 关键字值 */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* <custom-ident> 示例  */
will-change: opacity; /* <custom-ident> 示例  */
will-change: left, top; /* 两个 <animatable-feature> 例子 */

/* 全局值 */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

想要用好该属性可能有些棘手：

- _不要将 will-change 应用于过多的元素_。浏览器已经尽力优化了所有东西。一些较强的优化可能与 `will-change` 相关联，它们可能会使用大量机器资源，当过度使用时会导致页面变慢或消耗大量资源。
- _谨慎使用_。浏览器进行的优化通常是在尽可能短的时间内删除优化并恢复到正常状态。但是，将 `will-change` 直接添加到样式表中意味着目标元素通常会在不久的将来发生变化，而浏览器会保留优化更长的时间。因此，最好的做法是在更改发生之前和之后使用脚本代码开启和关闭 `will-change`。
- _不要为了过早优化而将 `will-change` 应用于元素_。如果你的页面表现良好，则不要仅仅为了提高一点速度而将 `will-change` 属性添加到元素中。`will-change` 旨在作为最后的手段使用，以尝试解决现有的性能问题。不应该用来预测性能问题。过度使用 `will-change` 将导致内存使用过多，并导致更复杂的渲染发生，因为浏览器试图为可能的更改做准备。这将导致更差的性能。
- _要给它足够的时间来发挥作用_。该属性旨在为开发者提供一种方法，让用户代理提前了解可能会发生变化的属性。然后浏览器可以选择在实际属性更改之前应用所需的任何提前优化。因此，重要的是给浏览器一些时间来实际执行优化。找到一些方法，预测某些事情将会在稍微提前的时间内发生，并在那时设置 `will-change`。
- _请注意_。当与创建[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)的属性值一起使用（例如 will-change: opacity）时，`will-change` 实际上可能会影响元素的视觉外观，因为层叠上下文是提前创建的。

## 语法

### 取值

- `auto`
  - : 表示没有特别指定哪些属性会变化，浏览器需要自己去猜，然后使用浏览器经常使用的一些常规方法优化。

`<animateable-feature>` 可以是以下值：

- `scroll-position`
  - : 表示开发者希望在不久后改变滚动条的位置或者使之产生动画。
- `contents`
  - : 表示开发者希望在不久后改变元素内容中的某些东西，或者使它们产生动画。
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 该属性表示开发者期望在不久的将来对元素上给定名称的属性进行动画或更改。如果给定的属性是一个缩写，它表示对缩写展开的所有属性的期望。它不能是以下任何值：`unset`、`initial`、`inherit`、`will-change`、`auto`、`scroll-position` 或 `contents`。规范没有定义特定值的行为，但是 `transform` 通常被用作合成层提示。在给定特定的 CSS 属性标识时，[Chrome 目前会执行两个操作](https://github.com/operasoftware/devopera/pull/330)：建立新的合成层或新的[层叠上下文](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)。

### 通过样式表设置

在需要通过按键进行页面翻转的应用程序中（例如相册或幻灯片演示文稿），或者在页面内容较大、较复杂的应用程序中，将 `will-change` 属性包含在样式表中可能是合适的。这将让浏览器提前准备好转换，并允许在按键按下时实现流畅的页面转换效果。但是，在样式表中直接使用 `will-change` 属性时需要谨慎。这可能会导致浏览器将优化保留在内存中的时间比实际需要的时间更长。

```css
.sidebar {
  will-change: transform;
}
```

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 通过脚本设置

这是一个示例，演示如何通过脚本应用 `will-change` 属性，这可能是在大多数情况下你应该采用的方法。

```js
const el = document.getElementById("element");

// 当鼠标移动到该元素上时给该元素设置 will-change 属性
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // 将在动画关键帧块中发生变化的可优化属性
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- 独立的 transform 属性：
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - 备注：并没有单独的 `skew` 属性
