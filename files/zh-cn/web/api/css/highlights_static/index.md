---
title: CSS：highlights 静态属性
slug: Web/API/CSS/highlights_static
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSSOM")}}

{{domxref("CSS")}} 接口的静态只读属性 **`highlights`** 提供访问 `HighlightRegistry` 的能力，通过使用 {{domxref("css_custom_highlight_api", "CSS 自定义高亮 API", "", "nocode")}} 为任意文本范围添加样式。

## 值

{{DOMxRef("HighlightRegistry")}} 对象。

## 示例

以下示例演示了如何创建多个文本范围，然后为它们创建 `Highlight` 对象，在 `HighlightRegistry` 中注册该高亮显示，最后使用 {{cssxref("::highlight", "::highlight()")}} 伪元素为文本范围添加样式。

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

const myCustomHighlight = new Highlight(range1, range2);

CSS.highlights.set("my-custom-highlight", myCustomHighlight);
```

```css
::highlight(my-custom-highlight) {
  background-color: yellow;
  color: black;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("css_custom_highlight_api", "CSS 自定义高亮 API", "", "nocode")}}
- [CSS 自定义高亮 API：网页文本范围高亮的未来](https://css-tricks.com/css-custom-highlight-api-early-look/)
