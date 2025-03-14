---
title: Element.before()
slug: Web/API/Element/before
---

{{APIRef("DOM")}}

**`ChildNode.before`** 方法可以在 `ChildNode` 这个节点的父节点中插入一系列的 {{domxref("Node")}} 或者字符串对象，位置就是在 `ChildNode` 节点的前面，字符串对象其实和 {{domxref("Text")}} 节点一样的方式来完成插入的。

## 语法

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
```

### 参数

- `param1`、…、`paramN`
  - : 一系列的 {{domxref("Node")}} 或者字符串对象。

### 异常

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 无法在层次结构中的指定节点处插入节点时抛出。

## 示例

### 插入元素节点

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### 插入文本节点

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.before("Text");

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

### 同时插入元素和文本

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span, "Text");

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.after()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
