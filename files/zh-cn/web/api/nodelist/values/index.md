---
title: NodeList.values()
slug: Web/API/NodeList/values
---

该方法返回一个 iterator 迭代器，可以利用迭代器遍历所有 value。

## Syntax

```
nodeList.values();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

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
for (var value of list.values()) {
  console.log(value);
}
```

The result is:

```
<p>
#text "hey"
<span>
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node")}}
- {{domxref("NodeList")}}
