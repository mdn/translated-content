---
title: overflow-anchor
slug: Web/CSS/Reference/Properties/overflow-anchor
---

**`overflow-anchor`** [CSS](/zh-CN/docs/Web/CSS) 属性提供一种退出浏览器滚动锚定行为的方法，该行为会调整滚动位置以最大程度地减少内容偏移。

默认情况下，在任何支持滚动锚定行为的浏览器中都将其启用。因此，仅当你在文档或文档的一部分中遇到滚动锚定问题并且需要关闭行为时，才通常需要更改此属性的值。

## 语法

```css
/* Keyword values */
overflow-anchor: auto;
overflow-anchor: none;

/* Global values */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: unset;
```

### Values

- `auto`
  - : The element becomes a potential anchor when adjusting scroll position.
- `none`
  - : The element won't be selected as a potential anchor.

### Formal syntax

{{csssyntax}}

## 范例

To prevent scroll anchoring in a document, use the `overflow-anchor` property.

```css
body {
  overflow-anchor: none;
}
```

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## See also

- [Guide to scroll anchoring](/zh-CN/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
