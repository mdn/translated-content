---
title: DocumentFragment
slug: Web/API/DocumentFragment
---

{{ APIRef("DOM") }}

**`DocumentFragment`**，文档片段接口，表示一个没有父对象的最小文档对象。

它被作为一个轻量版的 {{domxref("Document")}} 使用，就像标准的 document 一样，存储由节点（nodes）组成的文档结构。与 document 相比，最大的区别是它不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的{{Glossary("reflow", "重新渲染")}}，且不会对性能产生影响。

{{InheritanceDiagram}}

## 构造函数

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}
  - : 创建并返回一个新的 `DocumentFragment` 对象。

## 属性

_该接口没有特殊的属性，其属性都继承自 {{domxref("Node")}}。_

- {{ domxref("DocumentFragment.childElementCount") }} {{readonlyInline}}
  - : 返回所有属于 `DocumentFragment` 的 {{domxref("Element")}} 类型的子对象。
- {{ domxref("DocumentFragment.children") }} {{readonlyInline}}
  - : 返回一个实时的 {{domxref("HTMLCollection")}}，其中包含了所有属于 `DocumentFragment` 的 {{domxref("Element")}} 类型的子对象。
- {{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}
  - : 返回 `DocumentFragment` 的第一个 {{domxref("Element")}} 类型的子对象，如果没有则返回 `null`。
- {{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}
  - : 返回 `DocumentFragment` 的最后一个 {{domxref("Element")}} 类型的子对象，如果没有则返回 `null`。

## 方法

_该接口继承 {{domxref("Node")}} 的全部方法。_

- {{DOMxRef("DocumentFragment.append()")}}
  - : 在文档片段的最后一个子对象后插入一组 {{domxref("Node")}} 或字符串对象。
- {{DOMxRef("DocumentFragment.prepend()")}}
  - : 在文档片段的第一个元素前插入一组 {{domxref("Node")}} 或字符串对象。
- {{domxref("DocumentFragment.querySelector()")}}
  - : 返回在 `DocumentFragment` 中以文档顺序排列的第一个符合指定选择器的 {{domxref("Element")}} 节点。
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : 返回在 `DocumentFragment` 中所有的符合指定选择器的 {{domxref("Element")}} 节点组成的 `NodeList` 数组。
- {{domxref("DocumentFragment.getElementById()")}}
  - : 返回在 `DocumentFragment` 中以文档顺序排列的第一个符合指定 ID 选择器的 {{domxref("Element")}} 节点。与 `Document.getElementById()` 作用相同。

## 使用说明

最常用的方法是使用 `DocumentFragment` 创建并组成一个 DOM 子树，然后使用 {{domxref("Node")}} 接口方法（如：{{domxref("Node.appendChild", "appendChild()")}} 或 {{domxref("Node.insertBefore", "insertBefore()")}}）将其插入到 DOM 中。这种情况下会插入片段的所有子节点，并留下一个空的 `DocumentFragment`。因为所有的节点会被一次插入到文档中，所以仅会发生一个重渲染的操作，而不是每个节点分别被插入到文档中从而发生多次重渲染的操作。

该接口在 Web 组件（Web components）中也非常有用：{{HTMLElement("template")}} 元素在其 {{domxref("HTMLTemplateElement.content")}} 属性中包含了一个 `DocumentFragment`。

可以使用 {{domxref("document.createDocumentFragment")}} 方法或者构造函数来创建一个空的 `DocumentFragment`。

## 示例

### HTML

```html
<ul id="list"></ul>
```

### JavaScript

```js
const list = document.querySelector("#list");
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const fragment = new DocumentFragment();

fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.appendChild(li);
});

list.appendChild(fragment);
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
