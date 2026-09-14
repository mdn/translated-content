---
title: :-moz-drag-over
slug: Web/CSS/Reference/Selectors/:-moz-drag-over
---

{{Non-standard_header}}

**`:-moz-drag-over`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)是一个 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)，用于在调用 {{domxref("HTMLElement/dragover_event", "dragover")}} 事件时匹配一个元素。

## 语法

```css
:-moz-drag-over {
  /* ... */
}
```

## 示例

### HTML

```html
<table border="1">
  <tr>
    <td width="100px" height="100px">Drag Over</td>
  </tr>
</table>
```

### CSS

```css
td:-moz-drag-over {
  color: red;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- [Mozilla CSS 扩展](/zh-CN/docs/Web/CSS/Reference/Mozilla_extensions)
- [HTML 拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
