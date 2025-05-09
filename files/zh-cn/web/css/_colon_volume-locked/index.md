---
title: :volume-locked
slug: Web/CSS/:volume-locked
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

**`:volume-locked`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)选择器表示能够发出声音，但其音量目前被用户“锁定”的媒体元素，如 {{htmlelement("audio")}} 或 {{htmlelement("video")}}。

用户代理可能根据用户偏好设置媒体的 [`muted`](/zh-CN/docs/Web/API/HTMLMediaElement/muted) 或 [`volume`](/zh-CN/docs/Web/API/HTMLMediaElement/volume) 值（例如，在会话之间记住上次设置的值、基于每个网站的设置，或者其他方式）。被标记为 `:volume-locked` 的元素无法通过 JavaScript 静音、取消静音或更改音量。锁定状态是操作系统或用户代理的首选项。

## 语法

```css
:volume-locked {
  /* ... */
}
```

## 示例

### CSS

```css
:volume-locked {
  border: 5px solid green;
}

video:volume-locked {
  border: 5px solid aqua;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_selectors)
- {{domxref("HTMLMediaElement")}} 对象的 [`volume`](/zh-CN/docs/Web/API/HTMLMediaElement/volume) 实例属性
