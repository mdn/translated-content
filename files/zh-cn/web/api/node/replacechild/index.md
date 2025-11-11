---
title: Node.replaceChild()
slug: Web/API/Node/replaceChild
---

{{APIRef("DOM")}}

**`Node.replaceChild()`** 方法用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。

## 语法

```js-nolint
replaceChild(newChild, oldChild)
```

### 参数

- **`newChild`**
  - : 用来替换 `oldChild` 的新节点。如果该节点已经存在于 DOM 树中，则它首先会被从原始位置删除。
- **`oldChild`**
  - : 被替换掉的原始节点。

### 返回值

返回值为被替换的{{domxref("Node", "节点", "", 1)}}，与 `oldChild` 为同一个节点。

## 示例

```js
// <div>
//   <span id="childSpan">foo bar</span>
// </div>

// 创建一个空的 span 元素节点
// 没有 id，没有任何属性和内容
const sp1 = document.createElement("span");

// 添加一个 id 属性，值为 'newSpan'
sp1.setAttribute("id", "newSpan");

// 创建一个文本节点
const sp1_content = document.createTextNode("新的 span 元素的内容。");

// 将文本节点插入到 span 元素中
sp1.appendChild(sp1_content);

// 获得被替换节点和其父节点的引用。
const sp2 = document.getElementById("childSpan");
const parentDiv = sp2.parentNode;

// 用新的 span 元素 sp1 来替换掉 sp2
parentDiv.replaceChild(sp1, sp2);

// 结果：
// <div>
//   <span id="newSpan">新的 span 元素的内容。</span>
// </div>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.removeChild")}}
- {{domxref("Element.replaceWith")}}
