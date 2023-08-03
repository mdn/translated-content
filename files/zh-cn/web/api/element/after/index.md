---
title: Element.after()
slug: Web/API/Element/after
---

{{APIRef("DOM")}}

**`Element.after()`** 方法会在其父节点的子节点列表中插入一些 {{domxref("Node")}} 或 {{domxref("DOMString")}} 对象。插入位置为该节点之后。{{domxref("DOMString")}} 对象会被以 {{domxref("Text")}} 的形式插入。

## 语法

```js-nolint
after(node1)
after(node1, node2)
after(node1, node2, /* … ,*/ nodeN)
```

### 参数

- `node1`, …, `nodeN`
  - : 一组准备插入的 {{domxref("Node")}} 或字符串。

### 异常

- {{domxref("HierarchyRequestError")}}: 在某些不正确的层级结构进行了插入操作。

## 示例

### 插入元素

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### 插入文本

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

### 同时插入元素和文本

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Element.before()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
