---
title: Selection.rangeCount
slug: Web/API/Selection/rangeCount
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

The **`Selection.rangeCount`**是一个返回选区 (selection) 中 range 对象数量的只读属性。

在网页使用者点击一个加载完毕的新打开的页面之前，**rangeCount**的值是 0。在使用者点击页面之后，rangeCount 的值变为 1，即使并没有可视的选区 (selection)。

使用者一般情况下在一次只能选择一个 range，所以通常情况下**rangeCount 属性**的值总为 1。脚本 (如 javascript) 可以使选区包含多个 range。

Gecko 浏览器允许跨表格单元格获得多个选区 (此处可能翻译不准). Firefox allows to select multiple ranges in the document by using Ctrl+click (unless the click within an element with display: table-cell).

## 用法

```plain
value = sel.rangeCount
```

## 例子

下面这个例子会每隔一秒显示一次 rangeCount 的值。在浏览器中选择文本，然后看看他的改变。

### HTML Content

```html
//打开控制台看看 selection 中有多少 range 对象。
//在 Gecko 浏览器，当你用鼠标在表格单元格中拖动的同时按住 Ctrl，你可以选择多个 range。

<table>
<tr><td>a.1<td>a.2
<tr><td>b.1<td>b.2
```

### JavaScript Content

```js
window.setInterval(function () {
  console.log(window.getSelection().rangeCount);
}, 1000);
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
