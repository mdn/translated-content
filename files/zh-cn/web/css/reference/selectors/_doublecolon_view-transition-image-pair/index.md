---
title: ::view-transition-image-pair
slug: Web/CSS/Reference/Selectors/::view-transition-image-pair
---

{{SeeCompatTable}}

**`::view-transition-image-pair`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)表示一个视图过渡的旧视图状态和新视图状态的容器——即过渡前和过渡后的状态。

在视图过渡期间，`::view-transition-image-pair` 包含在相关的伪元素树上，如[视图过渡过程](/zh-CN/docs/Web/API/View_Transition_API#视图过渡过程)中所述。它只能是 {{cssxref("::view-transition-group")}} 的子节点。并且可以有一个 {{cssxref("::view-transition-new")}} 或一个 {{cssxref("::view-transition-old")}} 子节点，亦或是两者都有。

`::view-transition-image-pair` 在 UA 样式表中具有以下默认样式：

```css
html::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
}
```

默认情况下，`::view-transition-image-pair` 在视图过渡样式表中设置了 {{cssxref("isolation", "isolation: isolate")}}，以便其子元素可以使用非正常混合模式进行混合，而不会影响其他视觉输出。

## 语法

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` 可以是以下任何值之一：

- `*`
  - : 使伪元素选择器匹配所有视图过渡组。
- `root`
  - : 使伪元素选择器匹配由 UA 创建的默认 `root` 视图过渡组，该组用于包含整个页面的视图过渡，这意味着任何未通过 {{cssxref("view-transition-name")}} 属性分配给特定视图过渡组的元素。
- {{cssxref("custom-ident")}}
  - : 使伪元素选择器匹配（通过 {{cssxref("view-transition-name")}} 属性将 {{cssxref("custom-ident")}} 分配给元素而创建的）特定视图转换组。

## 示例

```css
::view-transition-image-pair(root) {
  isolation: auto;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [View Transitions API](/zh-CN/docs/Web/API/View_Transition_API)
- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
