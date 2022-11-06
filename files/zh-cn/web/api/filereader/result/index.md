---
title: FileReader.result
slug: Web/API/FileReader/result
---

{{APIRef("File API")}}

返回文件的内容。只有在读取操作完成后，此属性才有效，返回的数据的格式取决于是使用哪种读取方法来执行读取操作的。

## 语法

```plain
var file = instanceOfFileReader.result
```

## 值

一个字符串或者一个{{domxref("ArrayBuffer")}} ，这取决于读取操作是使用哪种方法来进行的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
