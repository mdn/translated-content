---
title: Element.prepend()
slug: Web/API/Element/prepend
---

{{APIRef("DOM")}}

**`Element.prepend`** 方法可以在父节点的第一个子节点之前插入一系列{{domxref("Node")}}对象或者{{domxref("DOMString")}}对象。{{domxref("DOMString")}}会被当作{{domxref("Text")}}节点对待（也就是说插入的不是 HTML 代码）。

## 语法

```plain
Element.prepend((Node or DOMString)... nodes);
```

### 参数

- `nodes`
  - : 要插入的一系列{{domxref("Node")}}或者{{domxref("DOMString")}}。

### 返回值

`undefined`.

### 错误

- {{domxref("HierarchyRequestError")}}：节点不能插入当前层级内。

## 例子

### Prepending an element

```js
var parent = document.createElement("div");
var p = document.createElement("p");
var span = document.createElement("span");
parent.append(p);
parent.prepend(span);

console.log(parent.childNodes); // NodeList [ <span>, <p> ]
```

### Prepending text

```js
var parent = document.createElement("div");
parent.append("Some text");
parent.prepend("Headline: ");

console.log(parent.textContent); // "Headline: Some text"
```

### Appending an element and text

```js
var parent = document.createElement("div");
var p = document.createElement("p");
parent.prepend("Some text", p);

console.log(parent.childNodes); // NodeList [ #text "Some text", <p> ]
```

### `Element.prepend()` is unscopable

`prepend() 不能在 with 语句内使用，详情参考`{{jsxref("Symbol.unscopables")}}。

```js
var parent = document.createElement("div");

with (parent) {
  prepend("foo");
}
// ReferenceError: prepend is not defined
```

## Polyfill

使用下面的代码在 IE9 或更高版本中模拟`prepend()`方法：

```js
// from: https://github.com/jserz/js_piece/blob/master/DOM/Element/prepend()/prepend().md
(function (arr) {
  arr.forEach(function (item) {
    item.prepend =
      item.prepend ||
      function () {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(
            isNode ? argItem : document.createTextNode(String(argItem)),
          );
        });

        this.insertBefore(docFrag, this.firstChild);
      };
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
```

## 说明

{{Specifications}}

## 兼容性

{{Compat}}

## See also

- {{domxref("Element")}} and {{domxref("ChildNode")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("ChildNode.before()")}}
- {{domxref("NodeList")}}
