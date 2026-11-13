---
title: 在选择器中使用 :target 伪类
short-title: 使用 :target
slug: Web/CSS/Guides/Selectors/Using_:target
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

当一个 URL 使用 [URL 片段标识符](/zh-CN/docs/Web/URI/Reference/Fragment#fragment) 指向文档中的特定部分时，用户可能难以察觉。本指南将探讨如何利用 CSS 突出显示 URL 的目标位置，从而提升用户体验。

## 选择目标

{{cssxref(":target")}} [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)用于为文档中通过 URL 片段标识符确定的目标元素设置样式。例如，URL `https://developer.mozilla.org/zh-CN/docs/Web/CSS#参考` 包含片段标识符 `#参考`。在 HTML 中，标识符通常作为 `id` 或 `name` 属性的值出现，因为这两个属性共享同一命名空间。因此，上述示例 URL 将指向该文档中 id 为 `参考` 的元素。

若要为作为 URL 目标的任何 `h2` 元素设置样式，同时不影响其他类型的元素使其获得目标样式，请将 `:target` 伪类与[类型选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Type_selectors)结合使用：

```css
h2:target {
  outline: 2px solid;
}
```

同样的，将样式应用于特定的文档片段也是可行的。这是通过使用 URI 中相同的标识符实现的。例如，要在 `#参考` 文档片段中加入背景颜色，我们可以通过如下代码实现：

```css
#参考:target {
  background-color: yellow;
}
```

## 定位所有元素

如果想要创建应用于所有目标元素的样式，那么可以使用通用选择器：

```css
:target {
  color: red;
}
```

## 示例

在以下示例中，5 个链接指向了同一文档中的元素。例如，选择链接“一”会导致 `<h1 id="one">` 成为目标元素。注意，由于目标元素有可能会被放置到浏览器窗口的顶层，因此文档可能会跳到新的滚动位置。

```html
<h4 id="one">…</h4>
<p id="two">…</p>
<div id="three">…</div>
<a id="four">…</a> <em id="five">…</em>

<a href="#one">一</a>
<a href="#two">二</a>
<a href="#three">三</a>
<a href="#four">四</a>
<a href="#five">五</a>
```

## 结论

当片段标识符指向文档的某一部分时，读者可能会对应该阅读文档的哪一部分感到困惑。通过对 URI 的目标进行样式设置，可以减少或消除读者的困惑。

## 参见

- {{cssxref(":target")}}
