---
title: :-moz-broken
slug: Web/CSS/Reference/Selectors/:-moz-broken
---

{{Non-standard_header}}

**`:-moz-broken`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)是一个 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)，用于匹配表示损坏图像链接的元素。

> [!NOTE]
> 这个选择器主要是为主题开发人员设计。

## 语法

```css
:-moz-broken {
  /* ... */
}
```

## 示例

### HTML

```html
<img src="broken.jpg" alt="这个图像损坏了 :-(" />
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
