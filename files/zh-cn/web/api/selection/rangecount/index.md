---
title: Selection.rangeCount
slug: Web/API/Selection/rangeCount
---

{{ ApiRef("DOM") }}

**`Selection.rangeCount`** 是一个返回选区（selection）中范围（range）数量的只读属性。

在网页使用者点击一个加载完毕的新打开的页面之前，`rangeCount` 的值是 `0`。在使用者点击页面之后，`rangeCount` 的值变为 `1`，即使并没有可视的选区。

使用者一般情况下在一次只能选择一个 range，所以通常情况下 `rangeCount` 属性的值总为 `1`。脚本可以使选区包含多个范围。

Gecko 浏览器允许跨表格单元格获得多个选区。Firefox allows to select multiple ranges in the document by using Ctrl+click (unless the click within an element with display: table-cell).

## 示例

下面这个例子会每隔一秒显示一次 `rangeCount` 的值。在浏览器中选择文本，然后查看其值的变化。

### HTML

```html
<table>
  <tr>
    <td>a.1</td>
    <td>a.2</td>
  </tr>
  <tr>
    <td>b.1</td>
    <td>b.2</td>
  </tr>
  <tr>
    <td>c.1</td>
    <td>c.2</td>
  </tr>
</table>
```

### JavaScript

```js
setInterval(() => {
  console.log(window.getSelection().rangeCount);
}, 1000);
```

### 结果

打开控制台以查看选区中范围的数量。在 Gecko 浏览器中，你可以通过按住 <kbd>Ctrl</kbd>（或在 MacOS 上为 <kbd>Cmd</kbd>）同时拖动鼠标来选择表格单元格中的多个范围。

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{domxref("Selection")}} 接口。
