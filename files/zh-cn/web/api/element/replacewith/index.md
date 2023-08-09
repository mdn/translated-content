---
title: Element.replaceWith()
slug: Web/API/Element/replaceWith
---

{{APIRef("DOM")}} {{SeeCompatTable}}

**`ChildNode.replaceWith()`** 的方法用一套 {{domxref("Node")}} 对象或者 {{domxref("DOMString")}} 对象，替换了该节点父节点下的子节点。{{domxref("DOMString")}} 对象被当做等效的{{domxref("Text")}} 节点插入。

## 语法

```plain
[Throws, Unscopable]
void ChildNode.replaceWith((Node or DOMString)... nodes);
```

### 参数

- `节点`
  - : 一系列用来替换的{{domxref("Node")}} 对象或者 {{domxref("DOMString")}} 对象。

### 例外

- {{domxref("HierarchyRequestError")}}: 无法在层次结构中的指定点插入节点。

## 案例

### Using `replaceWith()`

```js
var parent = document.createElement("div");
var child = document.createElement("p");
parent.appendChild(child);
var span = document.createElement("span");

child.replaceWith(span);

console.log(parent.outerHTML);
// "<div><span></span></div>"
```

### `ChildNode.replaceWith()` is unscopable

`replaceWith()`的方法并没有作用于 with 语句。参考 {{jsxref("Symbol.unscopables")}} 获取更多信息。

```js
with (node) {
  replaceWith("foo");
}
// ReferenceError: replaceWith is not defined
```

## Polyfill

你可以在 IE9 及更高级的浏览器中使用下面的代码向上兼容`replaceWith()`的方法：

```js
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("replaceWith")) {
      return;
    }
    Object.defineProperty(item, "replaceWith", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function replaceWith() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(
            isNode ? argItem : document.createTextNode(String(argItem)),
          );
        });

        this.parentNode.replaceChild(docFrag, this);
      },
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("ChildNode")}} 和 {{domxref("ParentNode")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("NodeList")}}
