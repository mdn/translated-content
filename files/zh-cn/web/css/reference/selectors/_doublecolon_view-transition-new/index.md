---
title: ::view-transition-new
slug: Web/CSS/Reference/Selectors/::view-transition-new
---

{{SeeCompatTable}}

**`::view-transition-new`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)表示视图过渡的新视图状态——即过渡后新视图的实时表示。

在视图过渡期间，`::view-transition-new` 包含在相关的伪元素树上，如[视图过渡过程](/zh-CN/docs/Web/API/View_Transition_API#视图过渡过程)中所述。它只能是 {{cssxref("::view-transition-image-pair")}} 的子节点，并且它不会有任何子节点。

它是一个可替换元素，因此可以使用 {{cssxref("object-fit")}} 和 {{cssxref("object-position")}} 等属性进行操作。它的自然尺寸等于内容的大小。

`::view-transition-new` 在 UA 样式表中具有以下默认样式：

```css
@keyframes -ua-view-transition-fade-in {
  from {
    opacity: 0;
  }
}

html::view-transition-new(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-name: -ua-view-transition-fade-in;
  animation-duration: inherit;
  animation-fill-mode: inherit;
}
```

> [!NOTE]
> 视图过渡样式表也会额外设置一些样式来动画化 `::view-transition-new`。这些样式是在视图过渡期间动态生成的；有关更多详细信息，请参阅规范中的[设置过渡伪元素](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements)和[更新伪元素样式](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles)部分。

## 语法

```css-nolint
::view-transition-new(<pt-name-selector>) {
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
figcaption {
  view-transition-name: figure-caption;
}

@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [View Transitions API](/zh-CN/docs/Web/API/View_Transition_API)
- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
