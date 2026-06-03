---
title: :-moz-loading
slug: Web/CSS/Reference/Selectors/:-moz-loading
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{Non-standard_header}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:-moz-loading`** 是一个用于匹配那些尚未开始加载、无法显示的元素（例如还未开始加载的图像）的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)。需要注意的是，*正在加载中的图像*并不会被此伪类匹配。

> [!NOTE]
> 这个选择器主要是供主题开发者使用的。

## 语法

```css
:-moz-loading {
  /* ... */
}
```

## 示例

### 为正在加载的图片设置背景

```css
:-moz-loading {
  background: url("loading-animation.gif") center no-repeat;
}
```

## 规范

不属于任何标准。

## 参见

- {{cssxref(":-moz-broken")}}、{{cssxref(":-moz-suppressed")}}、{{cssxref(":-moz-user-disabled")}}
