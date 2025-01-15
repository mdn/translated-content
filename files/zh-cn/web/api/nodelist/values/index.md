---
title: NodeList：values() 方法
slug: Web/API/NodeList/values
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`NodeList.values()`** 方法返回一个用于遍历该对象中包含的所有值（值为 {{domxref("Node")}} 对象）的{{jsxref("Iteration_protocols","迭代器", "", 1)}}。

## 语法

```js-nolint
values()
```

### 返回值

返回一个{{jsxref("Iteration_protocols","迭代器", "", 1)}}。

## 示例

```js
const node = document.createElement("div");
const kid1 = document.createElement("p");
const kid2 = document.createTextNode("hey");
const kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

const list = node.childNodes;

// 使用 for...of
for (const value of list.values()) {
  console.log(value);
}
```

结果为：

```plain
<p>
#text "hey"
<span>
```

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `NodeList.prototype.values` 的 polyfill](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
