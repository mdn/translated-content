---
title: Highlight
slug: Web/API/Highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

[CSS 自定义高亮 API](/zh-CN/docs/Web/API/CSS_Custom_Highlight_API) 的 **`Highlight`** 接口用于表示使用此 API 在文档上设置样式的 {{domxref("Range")}} 实例集合。

要为页面中的任意范围添加样式，可实例化一个新的 `Highlight` 对象，向其中添加一个或多个 `Range` 对象，然后使用 {{domxref("HighlightRegistry")}} 注册该对象。

`Highlight` 实例是一个 [类 `Set` 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#类_set_浏览器_api)，可以容纳一个或多个 `Range` 对象。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("Highlight.Highlight()", "Highlight()")}}
  - : 返回新创建的 `Highlight` 对象。

## 实例属性

_`Highlight` 接口不继承任何属性。_

- {{domxref("Highlight.priority")}}
  - : 表示此 `Highlight` 对象优先级的数字。当多个高亮重叠时，浏览器会根据该优先级来决定如何为重叠部分添加样式。
- {{domxref("Highlight.size")}} {{ReadOnlyInline}}
  - : 返回 `Highlight` 对象中 range 的数量。
- {{domxref("Highlight.type")}}
  - : 用于说明该高亮语义的可枚举 {{jsxref("String")}}。这样，辅助技术在向用户展示高亮时就能包含该语义。

## 实例方法

_`Highlight` 接口不继承任何方法。_

- {{domxref("Highlight.add()")}}
  - : 向此高亮对象中添加一个新范围。
- {{domxref("Highlight.clear()")}}
  - : 移除此高亮对象中的所有范围。
- {{domxref("Highlight.delete()")}}
  - : 从此高亮对象中移除一个范围。
- {{domxref("Highlight.entries()")}}
  - : 返回一个新的迭代器对象，该对象包含了高亮对象中的所有范围，按插入顺序排列。
- {{domxref("Highlight.forEach()")}}
  - : 按插入顺序为该高亮对象中的每个范围执行一次提供的函数。
- {{domxref("Highlight.has()")}}
  - : 返回一个布尔值来指示对应的范围是否存在于该高亮对象中。
- {{domxref("Highlight.keys()")}}
  - : {{domxref("Highlight.values()")}} 方法的别名。
- {{domxref("Highlight.values()")}}
  - : 返回一个新的迭代器对象，该对象包含此高亮对象中每个范围，按插入顺序排列。

## 示例

以下示例演示了如何创建多个文本范围，然后为它们创建 `Highlight` 对象，并在 `HighlightRegistry` 中注册该高亮显示：

```js
const parentNode = document.getElementById("foo");

// 创建多个文本范围。
const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);

// 为文本范围创建自定义高亮。
const highlight = new Highlight(range1, range2);

// 在 HighlightRegistry 中注册文本范围。
CSS.highlights.set("my-custom-highlight", highlight);
```

以下 CSS 代码片段演示了如何使用 {{cssxref("::highlight")}} 伪元素为已注册的自定义高亮显示设置样式：

```css
::highlight(my-custom-highlight) {
  background-color: peachpuff;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("css_custom_highlight_api", "CSS 自定义高亮 API", "", "nocode")}}
- [CSS 自定义高亮 API：网页文本范围高亮的未来](https://css-tricks.com/css-custom-highlight-api-early-look/)
