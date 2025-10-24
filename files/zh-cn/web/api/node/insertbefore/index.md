---
title: Node：insertBefore() 方法
slug: Web/API/Node/insertBefore
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`insertBefore()`** 方法是将一个节点插入到指定*父节点*的子节点中，并位于*参考节点*之前。

如果给定的节点已经存在于文档中，`insertBefore()` 会将其从当前位置移动到新位置。（也就是说，它会在附加到指定的新父节点之前自动从现有的父节点中移除。）

这意味着一个节点不能同时存在于文档的两个位置。

> [!NOTE]
> 可以使用 {{domxref("Node.cloneNode()")}} 在将节点追加到新的父节点之前先对其进行复制。请注意，使用 `cloneNode()` 进行复制的节点不会自动保持同步。

如果给定的子节点是 {{domxref("DocumentFragment")}}，则该 `DocumentFragment` 的全部内容将被移动到指定父节点的子节点列表中。

## 语法

```js-nolint
insertBefore(newNode, referenceNode)
```

### 参数

- `newNode`
  - : 要插入的节点。
- `referenceNode`
  - : 在其之前插入 `newNode` 的节点。如果为 `null`，`newNode` 将被插入到节点的子节点列表末尾。
    > [!NOTE]
    > `referenceNode` **不是**可选参数。你必须显式传递 {{domxref("Node")}} 或 `null`。未能提供它或传递无效值，可能会在不同的浏览器版本中具有[不同](https://bugzil.la/119489)的[表现](https://crbug.com/419780)。

### 返回值

返回添加的子节点（除非 `newNode` 是 {{domxref("DocumentFragment")}}——将返回空的 {{domxref("DocumentFragment")}}）。

### 异常

预插入有效性

## 示例

### 示例 1

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // 创建要插入的新节点
  const newNode = document.createElement("span");

  // 获取父节点的引用
  const parentDiv = document.getElementById("childElement").parentNode;

  // 开始测试用例 [ 1 ]：存在 childElement（全部正常运行）
  let sp2 = document.getElementById("childElement");
  parentDiv.insertBefore(newNode, sp2);
  // 结束测试用例 [ 1 ]

  // 开始测试案例 [ 2 ]：childElement 类型未定义
  sp2 = undefined; // id 为“childElement”的节点不存在
  parentDiv.insertBefore(newNode, sp2); // 隐式动态转换为节点类型
  // 结束测试用例 [ 2 ]

  // 开始测试案例 [ 3 ]：childElement 的类型为“undefined”（字符串）
  sp2 = "undefined"; // id 为“childElement”的节点不存在
  parentDiv.insertBefore(newNode, sp2); // 生成“Type Error: Invalid Argument”
  // 结束测试用例 [ 3 ]
</script>
```

### 示例 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // 创建新的普通 <span> 元素
  let sp1 = document.createElement("span");

  // 获取引用元素
  let sp2 = document.getElementById("childElement");
  // 获取父元素
  let parentDiv = sp2.parentNode;

  // 在 sp2 之前插入新元素
  parentDiv.insertBefore(sp1, sp2);
</script>
```

> [!NOTE]
> 没有 `insertAfter()` 方法。可以通过将 `insertBefore` 方法与 {{domxref("Node.nextSibling")}} 结合使用来模拟实现。在前面的例子中，可以使用以下方法在 `sp2` 后面插入 `sp1`：
>
> ```js
> parentDiv.insertBefore(sp1, sp2.nextSibling);
> ```
>
> 如果 `sp2` 没有下一个兄弟节点，那么它必须是最后一个子节点——`sp2.nextSibling` 返回 `null`，此时 `sp1` 将被插入到子节点列表的末尾（紧接在 `sp2` 之后）。

### 示例 3

使用 {{domxref("Node/firstChild", "firstChild")}} 属性，在第一个子元素之前插入一个元素。

```js
// 获取父元素
let parentElement = document.getElementById("parentElement");
// 获取父元素的第一个子元素
let theFirstChild = parentElement.firstChild;

// 创建新元素
let newElement = document.createElement("div");

// 在第一个子元素之前插入新元素
parentElement.insertBefore(newElement, theFirstChild);
```

如果元素没有第一个子元素，则 `firstChild` 为 `null`。该元素仍然会被追加到父元素的最后一个子元素之后。

由于父元素没有第一个子元素，所以也没有最后一个子元素。因此，新插入的元素是*唯一*的元素。

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
- {{domxref("Element.prepend()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.after()")}}
