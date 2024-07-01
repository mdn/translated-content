---
title: DocumentType：after() 方法
slug: Web/API/DocumentType/after
---

{{APIRef("DOM")}}

**`DocumentType.after()`** 方法在 `DocumentType` 的父级的子列表中插入一组 {{domxref("Node")}} 对象或字符串，紧跟在 `DocumentType` 之后。字符串将作为等效的 {{domxref("Text")}} 节点插入。

## 语法

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* … ,*/ paramN)
```

### 参数

- `param1`, …, `paramN`
  - : 要插入的一组 {{domxref("Node")}} 对象或字符串。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : 当无法将节点插入到层次结构的指定点时抛出。

## 示例

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.after(document.createElement("html"));

myDoc.childNodes;
// 节点列表 [<!DOCTYPE html>, <html>]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DocumentType.before()")}}
