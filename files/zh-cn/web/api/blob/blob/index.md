---
title: Blob()
slug: Web/API/Blob/Blob
---

{{APIRef("File API")}}

**`Blob()`** 构造函数返回一个新的 {{domxref("Blob")}} 对象。blob 的内容由参数数组中给出的值的串联组成。

## 语法

```plain
var aBlob = new Blob( array, options );
```

### 参数

- _array_ 是一个由{{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}} 等对象构成的 {{jsxref("Array")}} ，或者其他类似对象的混合体，它将会被放进 {{domxref("Blob")}}。DOMStrings 会被编码为 UTF-8。
- _options_ 是一个可选的`BlobPropertyBag`字典，它可能会指定如下两个属性：

  - `type`，默认值为 `""`，它代表了将会被放入到 blob 中的数组内容的 MIME 类型。
  - `endings`，默认值为`"transparent"`，用于指定包含行结束符`\n`的字符串如何被写入。它是以下两个值中的一个：`"native"`，代表行结束符会被更改为适合宿主操作系统文件系统的换行符，或者 `"transparent"`，代表会保持 blob 中保存的结束符不变 {{non-standard_inline}}

## 示例

```js
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // 一个包含 DOMString 的数组
var oMyBlob = new Blob(aFileParts, { type: "text/html" }); // 得到 blob
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 被本构造函数取代而弃用的{{domxref("BlobBuilder")}}
