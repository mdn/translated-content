---
title: NodeList
slug: Web/API/NodeList
---

{{APIRef("DOM")}}

`NodeList` 对象是节点的集合，通常是由属性，如{{domxref("Node.childNodes")}} 和 方法，如{{domxref("document.querySelectorAll")}} 返回的。

> **备注：** `NodeList` **不是一个数组**，是一个类似数组的对象 (_Like Array Object_)。虽然 `NodeList` 不是一个数组，但是可以使用 `forEach()` 来迭代。你还可以使用 {{jsxref("Array.from()")}} 将其转换为数组。
>
> 不过，有些浏览器较为过时，没有实现 `NodeList.forEach()` 和 `Array.from()`。你可以用 {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} 来规避这一问题。请查看[该例](#Example)。

在一些情况下，`NodeList` 是一个实时集合，也就是说，如果文档中的节点树发生变化，`NodeList` 也会随之变化。例如，{{domxref("Node.childNodes")}} 是实时的：

```js
var parent = document.getElementById("parent");
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // 我们假设结果会是“2”
parent.appendChild(document.createElement("div"));
console.log(child_nodes.length); // 但此时的输出是“3”
```

在其他情况下，`NodeList` 是一个静态集合，也就意味着随后对文档对象模型的任何改动都不会影响集合的内容。比如 {{domxref("document.querySelectorAll")}} 就会返回一个静态 `NodeList`。

最好牢记这种不同，尤其是在当你选择 `NodeList` 中所有项遍历的方式，或缓存它的长度的时候。

## 属性

- {{domxref("NodeList.length")}}
  - : `NodeList` 中包含的节点个数。

## 方法

- {{domxref("NodeList.item()")}}
  - : 返回 `NodeList` 对象中指定索引的节点，如果索引越界，则返回`null`。等价的写法是 `nodeList[i]`，不过，在这种情况下，越界访问将返回 `undefined`。
- {{domxref("NodeList.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}}, allowing code to go through all key/value pairs contained in the collection. (In this case, the keys are numbers starting from 0 and the values are nodes.)
- {{domxref("NodeList.forEach()")}}
  - : Executes a provided function once per `NodeList` element, passing the element as an argument to the function.
- {{domxref("NodeList.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}}, allowing code to go through all the keys of the key/value pairs contained in the collection. (In this case, the keys are numbers starting from 0.)
- {{domxref("NodeList.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing code to go through all values (nodes) of the key/value pairs contained in the collection.

## 例子

可以使用 [for](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环遍历一个 `NodeList` 对象中的所有的节点：

```js
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i]; // 调用 myNodeList.item(i) 是没有必要的
}
```

**不要尝试使用 [`for...in`](/zh-CN/JavaScript/Reference/Statements/for...in) 或者 [`for each...in`](/zh-CN/JavaScript/Reference/Statements/for_each...in) 来遍历一个 `NodeList` 对象中的元素**，因为，如果你把上述两个属性也看成 {{domxref("element")}} 对象的话，`NodeList` 对象中的 `length` 和 `item` 属性也会被遍历出来，这可能会导致你的脚本运行出错。此外，`for...in` 不能保证访问这些属性的顺序。

[for...of](/zh-CN/JavaScript/Reference/Statements/for...of) 循环**将会**正确的遍历 `NodeList` 对象：

```js
var list = document.querySelectorAll("input[type=checkbox]");
for (var checkbox of list) {
  checkbox.checked = true;
}
```

最近，浏览器也支持一些遍历方法，比如 {{domxref("NodeList.forEach()", "forEach()")}} 与 {{domxref("NodeList.entries()", "entries()")}}、{{domxref("NodeList.values()", "values()")}}、和 {{domxref("NodeList.keys()", "keys()")}}。

也有一种使用数组 `Array` 的 {{jsxref("Array.forEach()", "Array.prototype.forEach")}} 来遍历 `NodeList` 的方法，这种方法兼容 Internet Explorer {{Deprecated_Inline}}：

```js
var list = document.querySelectorAll("input[type=checkbox]");
Array.prototype.forEach.call(list, function (checkbox) {
  checkbox.checked = true;
});
```

## 英文原版中已删除的内容

> 译者注：也许它已独立成了一篇单独的技术文章。如果有找到这样的文章，请将其链接添加至本页末的“参见”处，并删除本节内容。如果没有“参见”，请添加它为二级标题（`<h2>`），`<h2>` 的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id) 属性为“See_also”或“参见”。

### 为什么 NodeList 不是数组？

`NodeList` 对象在某些方面和数组非常相似，看上去可以直接使用从 `Array.prototype` 上继承的方法。然而，除了 `forEach` 方法，`NodeList` 没有这些类似数组的方法。

JavaScript 的继承机制是基于原型的。数组元素之所以有一些数组方法（比如 `forEach` 和 `map`），是因为它的原型链上有这些方法，如下：

`myArray --> Array.prototype --> Object.prototype --> null`（想要获取一个对象的原型链，可以连续地调用 `Object.getPrototypeOf`，直到原型链尽头）。

`forEach`，`map` 这些方式其实是 `Array.prototype` 这个对象的方法。

和数组不一样的是，`NodeList` 的原型链是这样的：

`myNodeList --> NodeList.prototype --> Object.prototype --> null`

NodeList 的原型上除了类似数组的 `forEach` 方法之外，还有 `item`，`entries`，`keys` 和 `values` 方法。

#### 解决办法

一个解决办法就是把 `Array.prototype` 上的方法添加到 `NodeList.prototype` 上。可是，要注意[扩展 DOM 对象的原型是非常危险的](http://perfectionkills.com/whats-wrong-with-extending-the-dom/)，尤其是在旧版本的 Internet Explorer（6，7，8）中。

```js
var arrayMethods = Object.getOwnPropertyNames(Array.prototype);

arrayMethods.forEach(attachArrayMethodsToNodeList);

function attachArrayMethodsToNodeList(methodName) {
  if (methodName !== "length") {
    NodeList.prototype[methodName] = Array.prototype[methodName];
  }
}

var divs = document.getElementsByTagName("div");
var firstDiv = divs[0];

firstDiv.childNodes.forEach(function (divChild) {
  divChild.parentNode.style.color = "#0F0";
});
```

不扩展 DOM 对象原型的解决办法：

```js
var forEach = Array.prototype.forEach;

var divs = document.getElementsByTagName("div");
var firstDiv = divs[0];

forEach.call(firstDiv.childNodes, function (divChild) {
  divChild.parentNode.style.color = "#0F0";
});
```

> **备注：** 请注意，在上面的代码中，将某个宿主对象（如 `NodeList`）作为 `this` 传递给原生方法（如 forEach）不能保证在所有浏览器中工作，已知在一些浏览器中会失败。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
