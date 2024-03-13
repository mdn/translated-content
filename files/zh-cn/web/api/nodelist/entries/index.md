---
title: NodeList.entries()
slug: Web/API/NodeList/entries
---

{{APIRef("DOM")}}

该方法返回一个迭代协议，允许遍历此对象中包含的所有键/值。该值也是一个{{domxref("Node")}} 对象。

## 语法

```
list.entries();
```

### 返回值

返回一个 {{jsxref("Iteration_protocols","iterator")}}.

## 例子

```js
var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");
node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

// 使用 for..of 循环
for (var entry of list.entries()) {
  console.log(entry);
}
```

结果如下：

```
Array [ 0, <p> ]
Array [ 1, #text "hey" ]
Array [ 2, <span> ]
```

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Node")}}
- {{domxref("NodeList")}}
