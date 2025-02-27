---
title: ::view-transition-group
slug: Web/CSS/::view-transition-group
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition-group`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)表示单个视图过渡组。

在视图过渡期间，`::view-transition-group` 包含在相关的伪元素树上，如[视图过渡过程](/zh-CN/docs/Web/API/View_Transitions_API#视图过渡过程)中所述。它只能是 {{cssxref("::view-transition")}} 的子节点，并且有一个 {{cssxref("::view-transition-image-pair")}} 子节点。

`::view-transition-group` 在 UA 样式表中具有以下默认样式：

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

默认情况下，该元素最初会镜像表示 {{cssxref("::view-transition-old")}} 伪元素的大小和位置，即旧视图状态。如果没有旧视图状态，则会镜像表示 {{cssxref("::view-transition-new")}} 伪元素的大小和位置，即新视图状态。

如果同时存在新旧两种视图状态，则视图过渡样式表中的样式会将该伪元素的 {{cssxref("width")}} 和 {{cssxref("height")}} 从旧视图状态的边框盒大小动画到新视图状态的边框盒大小。

> [!NOTE]
> 视图过渡样式表中的样式是在视图过渡期间动态生成的；有关更多详细信息，请参阅规范中的[设置过渡伪元素](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements)和[更新伪元素样式](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles)部分。

此外，元素的变换是从旧视图状态的屏幕空间，变换到新视图状态的屏幕空间。由于动画属性的值是在过渡开始时确定的，因此此样式是动态生成的。

## 语法

```css-nolint
::view-transition-group(<pt-name-selector>) {
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
view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [View Transitions API](/zh-CN/docs/Web/API/View_Transitions_API)
- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
