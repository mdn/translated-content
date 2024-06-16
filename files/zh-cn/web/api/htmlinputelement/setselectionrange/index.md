---
title: HTMLInputElement：setSelectionRange() 方法
slug: Web/API/HTMLInputElement/setSelectionRange
l10n:
  sourceCommit: 76960f06597294df2d93ebb9960ad40c909c7cb5
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement.setSelectionRange`** 方法用于设定 {{HTMLElement("input")}} 或 {{HTMLElement("textarea")}} 元素中当前选中文本的起始和结束位置。

该元素必须获得焦点才能使调用产生任何效果。

可选地，你可以指定选择应发生的方向。例如，这使你可以指示，选择是由用户从选定文本的末尾向开头处点击并拖动设置的。

每次调用这个这个方法都会更新 {{domxref("HTMLInputElement.selectionStart")}}、{{domxref("HTMLInputElement.selectionEnd")}} 和 {{domxref("HTMLInputElement.selectionDirection")}} 属性。

该元素必须是以下输入类型之一：[`password`](/zh-CN/docs/Web/HTML/Element/input/password)、[`search`](/zh-CN/docs/Web/HTML/Element/input/search)、[`tel`](/zh-CN/docs/Web/HTML/Element/input/tel)、[`text`](/zh-CN/docs/Web/HTML/Element/input/text) 或 [`url`](/zh-CN/docs/Web/HTML/Element/input/url)。否则，浏览器会抛出 `InvalidStateError` 异常。

如果你希望**全选**输入元素中的文本，你可以使用 [HTMLInputElement.select()](/zh-CN/docs/Web/API/HTMLInputElement/select) 方法。

## 语法

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### 参数

如果 `selectionEnd` 小于 `selectionStart`，则二者都会被看作 `selectionEnd`。

- `selectionStart`
  - : 被选中的第一个字符的位置索引，从 0 开始。如果这个值比元素的 value 长度还大，则会被看作 value 最后一个位置的索引。
- `selectionEnd`
  - : 被选中的最后一个字符的*下一个*位置索引，从 0 开始。如果这个值比元素的 value 长度还大，则会被看作 value 最后一个位置的索引。
- `selectionDirection` {{optional_inline}}

  - : 一个表示选择方向的字符串，可能的值有：

    - `"forward"`
    - `"backward"`
    - `"none"` 默认值，表示方向未知或不相关。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

- InvalidStateError {{domxref("DOMException")}}
  - : 如果元素不是以下输入类型之一：[`password`](/zh-CN/docs/Web/HTML/Element/input/password)、[`search`](/zh-CN/docs/Web/HTML/Element/input/search)、[`tel`](/zh-CN/docs/Web/HTML/Element/input/tel)、[`text`](/zh-CN/docs/Web/HTML/Element/input/text) 或 [`url`](/zh-CN/docs/Web/HTML/Element/input/url)，则抛出该异常。

## 示例

在这个示例中，按下按钮以选择文本框中第三、四、五个字符（即“Mozilla”中的“zil”）。

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button onclick="selectText()">选择文本</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
