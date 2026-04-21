---
title: Selection：type 属性
short-title: type
slug: Web/API/Selection/type
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

{{domxref("Selection")}} 接口的 **`type`** 只读属性会返回用于描述当前选区类型的字符串。

## 值

一个用于描述当前选区类型的字符串。可能的取值包括：

- `None`
  - : 当前尚未进行任何选择。
- `Caret`
  - : 选区处于折叠状态（也就是说，光标放在某处文本中，但没有选中任何范围）。
- `Range`
  - : 已经选中了一个范围。

## 示例

在这个示例中，每次创建新的选区时，事件处理函数都会被触发。`console.log(selection.type)` 会根据光标是停留在文本中的某一个点，还是已经选中了一个范围，来分别输出 `Caret` 或 `Range`。

```js
let selection;

document.onselectionchange = () => {
  console.log("已创建新的选区");
  selection = document.getSelection();
  console.log(selection.type);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Selection")}}
