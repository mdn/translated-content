---
title: NodeList
slug: Web/API/NodeList
---

{{APIRef("DOM")}}

**`NodeList`** 物件是節點的集合，可藉由 {{domxref("Node.childNodes")}} 屬性以及 {{domxref("document.querySelectorAll()")}} 方法取得。

> [!NOTE]
> 雖然 `NodeList` 不是 `Array`，但仍可以使用 `forEach()` 方法來進行迭代。一些老舊瀏覽器並未實作此方法。

在某些情況下，`NodeList` 為*動態集合（live collection）*，意思是 DOM 的改變會反映於集合。例如，{{domxref("Node.childNodes")}} 便是即時更新（live）的：

```js
var parent = document.getElementById("parent");
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(child_nodes.length); // should output "3"
```

在其他的情況下，`NodeList` 是一個*靜態的集合（static collection）*，代表任何之後的 DOM 變化都不會影響集合的內容。{{domxref("document.querySelectorAll()")}} 會回傳一個靜態的 `NodeList`。

當你要選擇如何迭代 `NodeList` 中的項目時，最好能於心中區分動態與靜態集合，尤其是在取得集合長度（length of the list）的時候。

## 屬性

- {{domxref("NodeList.length")}}
  - : The number of nodes in the `NodeList`.

## 方法

- {{domxref("NodeList.item()")}}
  - : Returns an item in the list by its index, or `null` if the index is out-of-bounds; can be used as an alternative to simply accessing `nodeList[idx]` (which instead returns `undefined` when `idx` is out-of-bounds).
- {{domxref("NodeList.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing to go through all key/value pairs contained in this object.
- {{domxref("NodeList.forEach()")}}
  - : Executes a provided function once per `NodeList` element.
- {{domxref("NodeList.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing to go through all keys of the key/value pairs contained in this object.
- {{domxref("NodeList.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing to go through all values of the key/value pairs contained in this object.

## 範例

It's possible to loop over the items in a `NodeList` using:

```js
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i]; // Calling myNodeList.item(i) isn't necessary in JavaScript
}
```

Don't be tempted to use [`for...in`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in) or [`for each...in`](/zh-TW/docs/JavaScript/Reference/Statements/for_each...in) to enumerate the items in the list, since that will also enumerate the length and item properties of the `NodeList` and cause errors if your script assumes it only has to deal with {{domxref("element")}} objects. Also, `for..in` is not guaranteed to visit the properties in any particular order.

[`for...of`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...of) loops will loop over `NodeList` objects correctly:

```js
var list = document.querySelectorAll("input[type=checkbox]");
for (var item of list) {
  item.checked = true;
}
```

Recent browsers also support iterator methods, {{domxref("NodeList.forEach()", "forEach()")}}, as well as {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}}, and {{domxref("NodeList.keys()", "keys()")}}

There is also an Internet Explorer compatible way to use {{jsxref("Array.forEach()", "Array.prototype.forEach")}} for iteration.

```js
var list = document.querySelectorAll("input[type=checkbox]");
Array.prototype.forEach.call(list, function (item) {
  item.checked = true;
});
```

## NodeList 原型

You can also add prototypes to nodelist:

```js
var elements = document.querySelectorAll(".suggestions");

NodeList.prototype.addEventListener = function (event, func) {
  this.forEach(function (content, item) {
    content.addEventListener(event, func);
  });
};

function log() {
  console.log(this, " was clicked");
}

elements.addEventListener("click", log);
//or
elements.addEventListener("click", function () {
  console.log(this, "  awas clicked");
});
// output from both will be element was clicked the element would be HTML Element
```

For information about forEach see [Array.prototype.forEach()](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
