---
title: Element.before()
slug: Web/API/Element/before
---

{{APIRef("DOM")}} {{SeeCompatTable}}

**`ChildNode.before`** 方法可以在`ChildNode` 这个节点的父节点中插入一些列的 {{domxref("Node")}} 或者 {{domxref("DOMString")}} 对象，位置就是在`ChildNode` 节点的前面，{{domxref("DOMString")}} 对象其实和 {{domxref("Text")}} 节点一样的方式来完成插入的。

## 语法

```plain
[Throws, Unscopable]
void Element.before((Node or DOMString)... nodes);
```

### Parameters 参数

- `nodes`
  - : 一系列的 {{domxref("Node")}} 或者 {{domxref("DOMString")}}

### Exceptions

- {{domxref("HierarchyRequestError")}}: 当节点插入了错误的层级就会出现报错，需要遵循 html 标签的层级关系，

## Examples 事例

### Inserting an element 插入元素节点

```js
var parent = document.createElement("div");
var child = document.createElement("p");
parent.appendChild(child);
var span = document.createElement("span");

child.before(span);

console.log(parent.outerHTML);
// "<div><span></span><p></p></div>"
```

### Inserting text 插入文本节点

```js
var parent = document.createElement("div");
var child = document.createElement("p");
parent.appendChild(child);

child.before("Text");

console.log(parent.outerHTML);
// "<div>Text<p></p></div>"
```

### Inserting an element and text 同时插入文本和元素

```js
var parent = document.createElement("div");
var child = document.createElement("p");
parent.appendChild(child);
var span = document.createElement("span");

child.before(span, "Text");

console.log(parent.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

### `Element.before()` is unscopable 不可使用区域

The `before()` 不能配合 with 声明使用，See {{jsxref("Symbol.unscopables")}} for more information.

```js
with (node) {
  before("foo");
}
// ReferenceError: before is not defined
```

## Polyfill

兼容 ie9 或者更高版本的方法，You can polyfill the `before() method` in Internet Explorer 9 and higher with the following code:

```js
// from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/before()/before().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("before")) {
      return;
    }
    Object.defineProperty(item, "before", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(
            isNode ? argItem : document.createTextNode(String(argItem)),
          );
        });

        this.parentNode.insertBefore(docFrag, this);
      },
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ChildNode")}} and {{domxref("ParentNode")}}
- {{domxref("ChildNode.after()")}}
- {{domxref("ParentNode.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("NodeList")}}
