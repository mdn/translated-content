---
title: ::-moz-focus-inner
slug: Web/CSS/::-moz-focus-inner
l10n:
  sourceCommit: f2175c4c2cf9de232ec9b2e1c395903d53ea24a0
---

{{CSSRef}}{{SeeCompatTable}}

**`::-moz-focus-inner`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)是用于表示 {{HTMLElement("button")}} 元素以及 {{HTMLElement("input/button","button")}}、{{HTMLElement("input/submit","submit")}}、{{HTMLElement("input/reset","reset")}} 和 {{HTMLElement("input/color","color")}} 类型的 {{HTMLElement("input")}} 元素的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)。

> [!NOTE]
> 使用 `::-moz-focus-inner` 时，除了支持它的按钮外，其他按钮都不匹配，也没有任何效果。

## 语法

```css
::-moz-focus-inner {
  /* ... */
}
```

## 示例

### HTML

```html
<input type="submit" value="输入" /> <button type="submit">按钮</button>
```

### CSS

```css
button::-moz-focus-inner,
input[type="color"]::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner {
  padding-block-start: 0px;
  padding-inline-end: 2px;
  padding-block-end: 0px;
  padding-inline-start: 2px;
  border: 2px dotted red;
}
```

### 结果

{{EmbedLiveSample("示例", 300, 50)}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [Mozilla CSS 拓展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)
- 相关 CSS 属性：

  - [`-moz-user-focus`](/zh-CN/docs/Web/CSS/-moz-user-focus)

- 相关 CSS 选择器：

  - [`:focus`](/zh-CN/docs/Web/CSS/:focus)
  - [`:focus-visible`](/zh-CN/docs/Web/CSS/:focus-visible)
  - [`:focus-within`](/zh-CN/docs/Web/CSS/:focus-within)
