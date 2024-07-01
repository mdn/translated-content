---
title: Element：setAttributeNode() 方法
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`setAttributeNode()`** 方法为指定的元素添加一个新的 {{domxref("Attr")}} 节点。

如果你并不想在添加时使用属性节点（例如从另一个元素克隆），你可以改用 {{domxref("Element.setAttribute()", "setAttribute()")}} 方法。

## 语法

```js-nolint
setAttributeNode(attribute)
```

### 参数

- `attribute`：设置到当前元素的属性（`Attr`）节点。

### 返回值

如果存在被替换的属性节点，则该函数返回该节点。

## 示例

此示例将 `align` 属性从一个元素复制到另一个元素。

### HTML

```html
<div id="one" align="left">一</div>
<div id="two">二</div>
```

### JavaScript

```js
let d1 = document.getElementById("one");
let d2 = document.getElementById("two");
let a = d1.getAttributeNode("align");

d2.setAttributeNode(a.cloneNode(true));

// 返回：“left”
alert(d2.attributes[1].value);
```

## 备注

如果元素中已经存在同名的属性，则该属性将被替换为新的属性，并返回被替换的属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.getAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
