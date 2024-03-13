---
title: HTMLInputElement.setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement.setSelectionRange`** 方法用于设定{{HTMLElement("input")}} 或 {{HTMLElement("textarea")}} 元素中当前选中文本的起始和结束位置。

在较新的浏览器中，你可以通过一个可选的 selectionDirection 来指定文本选中的方向。比如通过点击和拖动从结束位置往起始位置选中一个字符串。

每次调用这个这个方法都会更新 `HTMLInputElement` 的 `selectionStart`, `selectionEnd` 和 `selectionDirection` 属性。

要注意的是，在 [WHATWG forms spec](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply) 中，`selectionStart`, `selectionEnd` 属性和 `setSelectionRange` 方法只能应用于类型为文本、搜索、链接、电话号码和密码的输入。Chrome 从版本 33 开始会在访问其余类型的这些属性和方法时抛出异常。例如，输入类型为数字时会抛出：“不能从'HTMLInputElement'中读取'selectionStart'属性：输入元素的类型 ('number') 不支持选择（Failed to read the 'selectionStart' property from 'HTMLInputElement': The input element's type ('number') does not support selection）”。

如果你希望**全选**输入元素中的文本，你可以使用 [HTMLInputElement.select()](/zh-CN/docs/Web/API/HTMLInputElement/select) 方法。

## 语法

```plain
element.setSelectionRange(selectionStart, selectionEnd [, selectionDirection]);
```

### 参数

如果 `selectionEnd` 小于 `selectionStart`，则二者都会被看作 `selectionEnd`。

- `selectionStart`
  - : 被选中的第一个字符的位置索引，从 0 开始。如果这个值比元素的 `value` 长度还大，则会被看作 `value` 最后一个位置的索引。
- `selectionEnd`
  - : 被选中的最后一个字符的 _下一个_ 位置索引。如果这个值比元素的 value 长度还大，则会被看作 value 最后一个位置的索引。
- `selectionDirection` {{optional_inline}}

  - : 一个表示选择方向的字符串，可能的值有：

- `"forward"`
- `"backward"`
- `"none"` 默认值，表示方向未知或不相关。

## 示例

在这个示例中，按下按钮以选择文本框中第三、四、五个字符（即“Mozilla”中的“zil”）。

### HTML

```plain
<input type="text" id="text-box" size="20" value="Mozilla">
<button onclick="selectText()">Select text</button>
```

### JavaScript

```plain
function selectText() {
  const input = document.getElementById('text-box');
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
