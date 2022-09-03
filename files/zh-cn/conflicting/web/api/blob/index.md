---
title: BlobBuilder
slug: conflicting/Web/API/Blob
original_slug: Web/API/BlobBuilder
---
{{ deprecated_header() }}

{{ SeeCompatTable() }}

The `BlobBuilder` interface provides an easy way to construct {{ domxref("Blob") }} objects. Just create a `BlobBuilder` and append chunks of data to it by calling the [`append()`](#append) method. When you're done building your blob, call [`getBlob()`](#getBlob) to retrieve a {{ domxref("Blob") }} containing the data you sent into the blob builder.

> **备注：** `BlobBuilder`接口已经废弃，请使用新版草案中引入的 {{domxref('Blob') }}构造函数。

## 方法概述

```js
void append(in ArrayBuffer data);
void append(in Blob data);
void append(in String data, [optional] in String endings);
Blob getBlob([optional] in DOMString contentType);
File getFile(in DOMString name, [optional] in DOMString contentType);
```

## 方法

### append()

Appends the contents of the specified JavaScript object to the {{ domxref("Blob") }} being built. If the value you specify isn't a {{ domxref("Blob") }}, [`ArrayBuffer`](/zh-CN/JavaScript_typed_arrays/ArrayBuffer), or [`String`](/zh-CN/JavaScript/Reference/Global_Objects/String), the value is coerced to a string before being appended to the blob.

```js
void append(
  in ArrayBuffer data
);

void append(
  in Blob data
);


void append(
  in String data,
  [optional] in String endings
);
```

###### 参数

- `data`
  - : The data to append to the {{ domxref("Blob") }} being constructed.
- `endings`
  - : Specifies how strings containing `\n` are to be written out. This can be `"transparent"` (endings unchanged) or `"native"` (endings changed to match host OS filesystem convention). The default value is `"transparent"`.

### getBlob()

Returns the {{ domxref("Blob") }} object that has been constructed using the data passed through calls to [`append()`](#append).

```
Blob getBlob(
  in DOMString contentType {{ optional_inline() }}
);
```

###### 参数

- contentType {{ optional_inline() }}
  - : The MIME type of the data to be returned in the {{ domxref("Blob") }}. This will be the value of the `Blob` object's type property.

###### 返回值

A {{ domxref("Blob") }} object containing all of the data passed to any calls to [`append()`](#append) made since the `BlobBuilder` was created. This also resets the `BlobBuilder` so that the next call to [`append()`](#append) is starting a new, empty blob.

### getFile() {{ non-standard_inline() }}

返回一个{{ domxref("File") }}对象。

```
File getFile(
  in DOMString name,
  [optional] in DOMString contentType
);
```

###### 参数

- name
  - : 文件名。
- contentType {{ optional_inline() }}
  - : 设置返回的{{ domxref("File") }}对象中的数据的 MIME 类型。这个值将会成为返回`的File`对象的 type 属性的值。

###### 返回值

一个{{ domxref("File") }}对象。

## 浏览器兼容性

{{Compat("api.BlobBuilder")}}

## 相关链接

- [File API Specification: BlobBuilder](http://dev.w3.org/2009/dap/file-system/file-writer.html#idl-def-BlobBuilder)
- {{ domxref("Blob") }}
- {{ domxref("File") }}
