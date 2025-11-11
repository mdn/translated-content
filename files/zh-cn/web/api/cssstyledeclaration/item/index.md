---
title: CSSStyleDeclaration.item()
slug: Web/API/CSSStyleDeclaration/item
---

{{ APIRef("CSSOM") }}

`CSSStyleDeclaration.item()` 通过下标从 {{domxref('CSSStyleDeclaration')}} 返回一个 CSS 属性值。只要传入参数这个方法就不会抛出异常；当传入的下标越界时会返回空字符串，当未传入参数时会抛出一个 `TypeError` 。

## 语法

```plain
var propertyName = style.item(index);
```

### 参数

- _`index`_ 是需要查找节点的索引，索引下标从零开始。

### Return value

- _`propertyName`_ 是一个 {{domxref('DOMString')}} ，是在特定索引位置下的属性的名称。

使用以下的 javascript 语法可以通过索引从 style 的节点列表中获取对应值：

```plain
var propertyName = style[index];
```

## 范例

```js
var style = document.getElementById("div1").style;
var propertyName = style.item(1); // or simply style[1] - returns the second style listed
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
