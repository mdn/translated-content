---
title: ::view-transition
slug: Web/CSS/::view-transition
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)表示视图过渡叠加层的根元素，它包含所有视图过渡且位于所有其他页面内容的顶部。

在视图过渡期间，`::view-transition` 包含在相关的伪元素树中，如[视图过渡过程](/zh-CN/docs/Web/API/View_Transitions_API#视图过渡过程)中所述。它是该树的顶级节点，并且有一个或多个 {{cssxref("::view-transition-group")}} 子节点。

`::view-transition` 在 UA 样式表中具有以下默认样式：

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

所有 {{cssxref("::view-transition-group")}} 伪元素都相对于视图过渡根元素定位。

## 语法

```css
::view-transition {
  /* ... */
}
```

## 示例

```css
::view-transition {
  background-color: rgba(0, 0, 0, 0.25);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [View Transitions API](/zh-CN/docs/Web/API/View_Transitions_API)
- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
