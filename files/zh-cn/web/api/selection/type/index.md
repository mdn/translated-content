---
title: Selection.type
slug: Web/API/Selection/type
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

**`type`**是 {{domxref("Selection")}} 接口的只读属性，其返回的是{{domxref("DOMString")}}即描述当前选择的类型。

## 语法

```plain
value = sel.type
```

### Value

{{domxref("DOMString")}} 描述的是当前选择的类型。可能的值为：

- `None`: 当前没有选择。
- `Caret`: 选区已折叠（即 光标在字符之间，并未处于选中状态）。
- `Range`: 选择的是一个范围。

## 例子

在下面的示例中，回调函数将在每次进行新的选择时触发。 `console.log(selection.type)` 将会输出 `Caret` 或者 `Range` ，其输出值取决于插入标记是放置在文本中的单个点还是已选择范围。

```plain
var selection;

document.onselectionchange = function() {
  console.log('New selection made');
  selection = document.getSelection();
  console.log(selection.type);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Selection")}}
