---
title: Element.lastElementChild
slug: Web/API/Element/lastElementChild
---

{{ APIRef("DOM") }}

只读属性 **`Element.lastElementChild`** 返回对象的最后一个子{{domxref("Element", "元素")}}，如果没有子元素，则返回 `null`。

> **备注：** This property was initially defined in the {{domxref("ElementTraversal")}} pure interface. As this interface contained two distinct set of properties, one aimed at {{domxref("Node")}} that have children, one at those that are children, they have been moved into two separate pure interfaces, {{domxref("Element")}} and {{domxref("ChildNode")}}. In this case, `lastElementChild` moved to {{domxref("Element")}}. This is a fairly technical change that shouldn't affect compatibility.

## 语法

```
var element = node.lastElementChild;
```

## 例子

```html
<ul id="foo">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.lastElementChild.textContent);
  // 输出 "Third (3)"
</script>
```

## 适用于 IE8、IE9 和 Safari 的 Polyfill

```js
// Overwrites native 'lastElementChild' prototype.
// Adds Document & DocumentFragment support for IE9 & Safari.
// Returns array instead of HTMLCollection.
(function (constructor) {
  if (
    constructor &&
    constructor.prototype &&
    constructor.prototype.lastElementChild == null
  ) {
    Object.defineProperty(constructor.prototype, "lastElementChild", {
      get: function () {
        var node,
          nodes = this.childNodes,
          i = nodes.length - 1;
        while ((node = nodes[i--])) {
          if (node.nodeType === 1) {
            return node;
          }
        }
        return null;
      },
    });
  }
})(window.Node || window.Element);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 纯接口 {{domxref("Element")}} 和 {{domxref("ChildNode")}}。
- 实现了此纯接口的对象类型：{{domxref("Document")}}、{{domxref("Element")}}，和 {{domxref("DocumentFragment")}}。
