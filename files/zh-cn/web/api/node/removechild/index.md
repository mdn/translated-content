---
title: Node：removeChild() 方法
slug: Web/API/Node/removeChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`removeChild()`** 方法会从 DOM 中移除一个子节点，并返回移除的节点。

> [!NOTE]
> 只要对被移除的子节点保持引用，它仍然存在于内存中，但不再是 DOM 的一部分。在以后的代码中仍可重复使用。
>
> 如果不存储 `removeChild()` 的返回值，也不保留其他引用，该节点将在短时间内在内存中[自动删除](/zh-CN/docs/Web/JavaScript/Memory_management)。

与 {{domxref("Node.cloneNode()")}} 不同，返回值保留了与其关联的 `EventListener` 对象。

## 语法

```js-nolint
removeChild(child)
```

### 参数

- `child`
  - : {{domxref("Node")}}，即要从 DOM 中删除的子节点。

### 异常

- `NotFoundError` {{domxref("DOMException")}}
  - : 如果 `child` 不是该节点的子节点，则抛出此异常。
- {{jsxref("TypeError")}}
  - : 如果 `child` 为 `null`，则抛出此异常。

## 示例

### 简单的示例

给定以下 HTML：

```html
<div id="parent">
  <div id="child"></div>
</div>
```

在已知其父节点时移除指定元素：

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```

在不需要指定其父节点的情况下移除指定元素：

```js
const node = document.getElementById("child");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

从元素中移除所有子元素：

```js
const element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### 引发 TypeError

```html
<!--HTML 代码示例-->
<div id="parent"></div>
```

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// 抛出未捕获的 TypeError
const garbage = parent.removeChild(child);
```

### 引发 NotFoundError

```html
<!--HTML 代码示例-->
<div id="parent">
  <div id="child"></div>
</div>
```

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// 第一次调用正确并移除了该节点。
const garbage = parent.removeChild(child);

// 抛出 NotFoundError
garbage = parent.removeChild(child);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.parentNode")}}
- {{domxref("Element.remove()")}}
- {{domxref("Node.cloneNode()")}}
