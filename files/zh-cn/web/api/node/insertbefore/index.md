---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
---

{{APIRef("DOM")}}

**`Node.insertBefore()`** 方法在参考节点之前插入一个拥有指定父节点的子节点。如果给定的子节点是对文档中现有节点的引用，`insertBefore()` 会将其从当前位置移动到新位置（在将节点附加到其他节点之前，不需要从其父节点删除该节点）。

这意味着一个节点不能同时位于文档的两个点中。因此，如果被插入节点已经有父节点，则首先删除该节点，然后将其插入到新位置。若要保留已在文档中的被插入节点，在将该节点追加到新父节点之前，可以使用 {{domxref("Node.cloneNode()")}} 复制节点。注意，使用 `cloneNode()` 创建的节点副本不会自动与原始节点保持同步。

如果引用节点为 `null`，则将指定的节点添加到指定父节点的子节点列表的末尾。

如果给定的子节点是 {{domxref("DocumentFragment")}}，那么 `DocumentFragment` 的全部内容将被移动到指定父节点的子节点列表中。

## 语法

```js
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

- `insertedNode` 被插入节点 (newNode)
- `parentNode` 新插入节点的父节点
- `newNode` 用于插入的节点
- `referenceNode` `newNode` 将要插在这个节点之前

如果 `referenceNode` 为 `null` 则 `newNode` 将被插入到子节点的末尾*。*

> **备注：** `referenceNode` 引用节点**不是**可选参数——你必须显式传入一个 `Node` 或者 `null`。如果不提供节点或者传入无效值，在不同的浏览器中会有[不同](https://bugzilla.mozilla.org/show_bug.cgi?id=119489)的[表现](https://code.google.com/p/chromium/issues/detail?id=419780)。

## 返回值

函数返回被插入过的子节点；当 `newNode` 是 {{domxref("DocumentFragment")}} 时，返回空 {{domxref("DocumentFragment")}}。

## 例子

### 示例 1

```js
<div id="parentElement">
   <span id="childElement">foo bar</span>
</div>

<script>
// 创建要插入的节点
var newNode = document.createElement("span");

// 获得父节点的引用
var parentDiv = document.getElementById("childElement").parentNode;

//实验一：referenceNode 存在 --> 正确返回
var sp2 = document.getElementById("childElement");
parentDiv.insertBefore(newNode, sp2);
//实验一结束

//实验二：referenceNode 为 undefined
var sp2 = undefined; // Not exist a node of id "childElement"
parentDiv.insertBefore(newNode, sp2); //隐式转换到节点类型
//实验二结束

//实验三：referenceNode 为字符类型的 "undefined"
var sp2 = "undefined"; //不存在 id 为"childElement"的 referenceNode
parentDiv.insertBefore(newNode, sp2); // Generate "Type Error: Invalid Argument"
//实验三结束
</script>
```

### 示例 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  //创建一个新的、普通的<span>元素
  var sp1 = document.createElement("span");

  //插入节点之前，要获得节点的引用
  var sp2 = document.getElementById("childElement");
  //获得父节点的引用
  var parentDiv = sp2.parentNode;

  //在 DOM 中在 sp2 之前插入一个新元素
  parentDiv.insertBefore(sp1, sp2);
</script>
```

没有 `insertAfter()`。不过，可以使用 `insertBefore` 和 {{domxref("Node.nextSibling")}} 来模拟它。

在前一个例子中，可使用下面代码将 `sp1` 插入到 `sp2` 之后：

```js
parentDiv.insertBefore(sp1, sp2.nextSibling);
```

如果 `sp2` 没有下一个节点，则它肯定是最后一个节点，则 `sp2.nextSibling` 返回 `null`，且 `sp1` 被插入到子节点列表的最后面（即 `sp2` 后面）。

### 示例 3

在第一个子元素的前面插入一个元素，可使用 [firstChild](/zh-CN/docs/DOM/Node.firstChild) 属性。

```js
//插入节点之前，要获得节点的引用
var parentElement = document.getElementById("parentElement");
//获得第一个子节点的引用
var theFirstChild = parentElement.firstChild;

//创建新元素
var newElement = document.createElement("div");

//在第一个子节点之前插入新元素
parentElement.insertBefore(newElement, theFirstChild);
```

当元素没有首节点时，`firstChild` 返回 `null`。该元素仍然会被插入到父元素中，位于最后一个节点后面。又由于父元素没有第一个子节点，也没有最后一个子节点。最终，新元素成为唯一的子元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("ParentNode.prepend()")}}
