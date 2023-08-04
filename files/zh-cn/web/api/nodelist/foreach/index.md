---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
---

{{APIRef("DOM")}}

{{domxref("NodeList")}}接口的 **`forEach()`** 方法按插入顺序为列表中的每个值对调用一次参数中给定的回调。

## 语法

```
someNodeList.forEach(callback[, thisArg]);
```

### 参数

- `callback`

  - : 为 `someNodeList`的每一个元素执行函数。它接受以下三个参数：

    - `currentValue`
      - : `someNodeList`中的当前元素。
    - `currentIndex` {{Optional_inline}}
      - : `someNodeList`中的`currentValue`所对应的索引值。
    - `listObj` {{Optional_inline}}
      - : `someNodeList` 在 `forEach()` 方法中所属的 NodeList 对象。

- `thisArg` {{Optional_inline}}
  - : 传递 `callback` 的值一般用{{jsxref("this")}}值。

### 返回值

{{jsxref('undefined')}}.

## Exceptions

None.

## 示例

```js
let node = document.createElement("div");
let kid1 = document.createElement("p");
let kid2 = document.createTextNode("hey");
let kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

let list = node.childNodes;

list.forEach(function (currentValue, currentIndex, listObj) {
  console.log(currentValue + ", " + currentIndex + ", " + this);
}, "myThisArg");
```

上述代码会产生以下结果：

```
[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg
```

## Polyfill

{{Glossary("Polyfill","polyfill")}} 增加了对所有支持[ES5](https://caniuse.com/#search=es5)的浏览器的兼容性：

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
```

或者

```js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
```

上面的代码是大部分浏览器实现的 `NodeList.prototype.forEach()`（例如 Chrome）。

## Specifications

{{Specifications}}

## Browser Compatibility

{{Compat}}

## See also

- {{domxref("Node")}}
- {{domxref("NodeList")}}
