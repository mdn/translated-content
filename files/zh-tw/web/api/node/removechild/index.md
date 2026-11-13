---
title: Node.removeChild()
slug: Web/API/Node/removeChild
---

{{APIRef("DOM")}}

**`Node.removeChild()`** 方法從 DOM 移除一個子節點，並傳回移除的節點。

## 語法

```plain
var oldChild = node.removeChild(child);
或
node.removeChild(child);
```

- `child` 是 DOM 中想要移除的子節點。
- `node` 是 `child` 的父節點。
- `oldChild` 為將被移除的子節點參照，例如：`oldChild === child`.

被刪除的子節點仍然存於記憶體之中，只是不在 DOM 了。從上述的第一種語法形式中，我們知道，透過引用 `oldChild` 還是可以在程式中重新使用已經被移除的子節點。

而第二種語法形式，因為沒有保留 `oldChild` 引用，因此假設你並沒有在其他地方保留節點引用，則它會立即無法使用且不可挽回，而且通常會在短時間內從[內存管理](/zh-TW/docs/Web/JavaScript/Guide/Memory_management)中被自動刪除。

如果 `child` 並非某 `element` 節點的子元素，則此方法會拋出異常。而如果調用此方法時，`child` 雖是某 `element` 的子元素，但在嘗試刪除它的過程中已被其他事件處理程序刪除，也會拋出異常（例如 [`blur`](/zh-TW/docs/Web/API/Element/blur_event)）。

### 會丟出的錯誤

兩種不同的方式拋出異常：

1. 如果 `child` 確實是 `element` 的子元素且確實存在於 DOM，但已被刪除，則會丟出以下異常：

   `Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node`.

2. 如果 `child` 不存在於頁面的 DOM，則會拋出下列的異常：

   `Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.`

## 例子

### 簡單的例子

HTML:

```html
<div id="top">
  <div id="nested"></div>
</div>
```

在知道父節點的情況下，刪除特定元素：

```js
let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);
```

沒有指定父節點的情況下，刪除特定元素：

```js
let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

從一個元素中移除所有子元素：

```js
let element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### 造成一個 TypeError

```html
<!--Sample HTML code-->
<div id="top"></div>

<script type="text/javascript">
  let top = document.getElementById("top");
  let nested = document.getElementById("nested");

  // Throws Uncaught TypeError
  let garbage = top.removeChild(nested);
</script>
```

### 造成一個 NotFoundError

```html
<!--Sample HTML code-->
<div id="top">
  <div id="nested"></div>
</div>

<script type="text/javascript">
  let top = document.getElementById("top");
  let nested = document.getElementById("nested");

  // This first call correctly removes the node
  let garbage = top.removeChild(nested);

  // Throws Uncaught NotFoundError
  garbage = top.removeChild(nested);
</script>
```

## 規範

- [DOM Level 1 Core: removeChild](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild)
- [DOM Level 2 Core: removeChild](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066)
- [DOM Level 3 Core: removeChild](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066)

## 瀏覽器相容性

{{Compat}}

## 相關連結

- {{domxref("Node.replaceChild")}}
- {{domxref("Node.parentNode")}}
- {{domxref("ChildNode.remove")}}
