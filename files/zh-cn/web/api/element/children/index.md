---
title: Element.children
slug: Web/API/Element/children
---

{{ APIRef("DOM") }}

**`Element.children`** 是一个只读属性，返回 一个 Node 的子{{domxref("Element","elements")}} ，是一个动态更新的 {{domxref("HTMLCollection")}}。

## 语法

```
var children = node.children;
```

```
var elList = elementNodeReference.children;
```

## 备注

`children` 属性为只读属性，对象类型为 {{ domxref("HTMLCollection") }}，你可以使用 `elementNodeReference.children[1].nodeName` 来获取某个子元素的标签名称。

## 例子

```js
// parg 是一个指向<p>元素的对象引用
if (parg.childElementCount) {
  // 检查这个<p>元素是否有子元素
  // 译者注:childElementCount 有兼容性问题
  var children = parg.children;
  for (var i = 0; i < children.length; i++) {
    // 通过 children[i] 来获取每个子元素
    // 注意:List 是一个 live 的 HTMLCollection 对象，在这里添加或删除 parg 的子元素节点，都会立即改变 List 的值。
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{domxref("Element")}} and {{domxref("ChildNode")}} pure interfaces.
- Object types implementing this pure interface: {{domxref("Document")}}, {{domxref("Element")}}, and {{domxref("DocumentFragment")}}.
