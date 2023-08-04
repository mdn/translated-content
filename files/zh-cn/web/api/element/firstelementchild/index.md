---
title: Element.firstElementChild
slug: Web/API/Element/firstElementChild
---

{{ APIRef("DOM") }}

**`Element.firstElementChild`** 只读属性，返回对象的第一个子 {{domxref("元素")}}, 如果没有子元素，则为 null。

> **备注：** 他的属性最初是在{{domxref("element 遍历")}}纯接口中定义的。由于这个接口包含两组不同的属性，一个针对具有子元素的{{domxref("Node")}}，一个针对子元素的属性，因此它们被移动到两个单独的纯接口中，{{domxref("Element")}}和{{domxref("ChildNode")}}。在本例中，firstElementChild 移动到{{domxref("Element")}}。这是一个相当技术性的更改，不应该影响兼容性。

## 语法

```
var element = node.firstElementChild;
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
  console.log(list.firstElementChild.textContent);
  // 输出 "First (1)"
</script>
```

## 适用于 IE8、IE9 和 Safari 的 Polyfill

```
// Overwrites native 'firstElementChild' prototype.
// Adds Document & DocumentFragment support for IE9 & Safari.
// Returns array instead of HTMLCollection.
;(function(constructor) {
    if (constructor &&
        constructor.prototype &&
        constructor.prototype.firstElementChild == null) {
        Object.defineProperty(constructor.prototype, 'firstElementChild', {
            get: function() {
                var node, nodes = this.childNodes, i = 0;
                while (node = nodes[i++]) {
                    if (node.nodeType === 1) {
                        return node;
                    }
                }
                return null;
            }
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
