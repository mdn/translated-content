---
title: ":focus"
slug: Web/CSS/:focus
---

{{CSSRef}}

**`:focus`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示获得焦点的元素（如表单输入）。当用户点击或轻触一个元素或使用键盘的 <kbd>Tab</kbd> 键选择它时，它会被触发。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus.html", "tabbed-shorter")}}

> **备注：** 此伪类仅适用于焦点的元素自身。如果要选择*包含*焦点元素的元素，请使用 {{cssxref(":focus-within")}}。

## 语法

```css
:focus {
  /* ... */
}
```

## 示例

### HTML

```html
<div><input class="red-input" value="当获得焦点时我将呈现红色。" /></div>
<div><input class="blue-input" value="当获得焦点时我将呈现蓝色。" /></div>
```

### CSS

```css
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 无障碍考虑

请确保视力不佳的人可以看到视觉焦点指示器。这也将有利于任何在明亮空间（如室外阳光下）使用屏幕的人。[WCAG 2.1 SC 1.4.11 非文本对比度](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) 要求视觉焦点指示符的对比度至少为 3 比 1。

- 无障碍的视觉焦点指示：[让你的网站更具焦点！设计有用且可用的焦点指示器的技巧](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

永远不要为了仅移除焦点轮廓（可见的焦点指示），而不替换为符合 [WCAG 2.1 SC 1.4.11 非文本对比度](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)标准的焦点轮廓。

- 小建议：[永远不要移除 CSS 轮廓](https://www.a11yproject.com/posts/never-remove-css-outlines/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
