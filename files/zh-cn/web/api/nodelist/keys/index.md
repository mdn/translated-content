---
title: NodeList.keys()
slug: Web/API/NodeList/keys
---

{{APIRef("DOM")}}

**`NodeList.keys()`** 方法返回 {{jsxref("Iteration_protocols",'iterator')}} ，此方法允许遍历这个对象中包含的所有的键，即使这个键是 `unsigned integer（无符号整数）`.

## 语法

```
nodeList.keys();
```

### 返回值

返回 {{jsxref("Iteration_protocols","iterator")}}.

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

// Using for..of
for (var key of list.keys()) {
  console.log(key);
}
```

结果是：

```
0
1
2
```

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Node")}}
- {{domxref("NodeList")}}
