---
title: Element：setAttributeNodeNS() 方法
slug: Web/API/Element/setAttributeNodeNS
l10n:
  sourceCommit: f51e2e24bdd46507e78aa2477ae9b1bedbbb7ee0
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`setAttributeNodeNS()`** 方法为元素添加一个新的限定命名空间的 {{domxref("Attr")}} 节点。

如果你并不想在添加时使用属性节点（例如从另一个元素克隆），你可以改用 {{domxref("Element.setAttributeNS()", "setAttributeNS()")}} 方法。

如果你正在处理 HTML 文档，并且你不需要指定要添加的属性属于特定的命名空间，那么使用 {{domxref("Element.setAttribute()", "setAttribute()")}} 方法即可。

## 语法

```js-nolint
setAttributeNodeNS(attributeNode)
```

### 参数

- `attributeNode`：一个属性（`Attr`）节点。

### 返回值

如果存在被替换的属性节点，则该函数返回该节点。

## 示例

```js
// <div id="one" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
//            myNS:special-align="utterleft">一</div>
// <div id="two">二</div>

const myns = "http://www.mozilla.org/ns/specialspace";
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a.cloneNode(true));
alert(d2.attributes[1].value); // 返回：“utterleft”
```

## 备注

如果元素中已存在指定的属性，则该属性将被替换为新的属性，并返回被替换的属性。

注意：如果你尝试设置的时候没有克隆该节点，你可能会遇到 `NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR`：“Attribute already in use”错误，因为 DOM 要求 {{domxref("Attr")}} 在克隆后才能被重复使用（不像其他节点一样可以被移动）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.getAttributeNodeNS()")}}
