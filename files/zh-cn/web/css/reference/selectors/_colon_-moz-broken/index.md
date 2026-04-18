---
title: :-moz-broken
slug: Web/CSS/Reference/Selectors/:-moz-broken
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}{{deprecated_header}}

**`:-moz-broken`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)是一个用于匹配表示损坏图像链接的元素的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)。

> [!NOTE]
> 这个选择器主要是供主题开发者使用的。

## 语法

```css
:-moz-broken {
  /* ... */
}
```

## 示例

### HTML

```html
<img src="broken.jpg" alt="这张图片无法显示。:-(" />
```

### CSS

```css
:-moz-broken {
  background: bisque;
  padding: 8px;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":-moz-loading")}}、{{cssxref(":-moz-suppressed")}}、{{cssxref(":-moz-user-disabled")}}
- [Firefox bug 11011](https://bugzil.la/11011)
