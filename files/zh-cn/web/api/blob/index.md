---
title: Blob
slug: Web/API/Blob
---
{{APIRef("File API")}}

`Blob` 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 {{DOMxRef("ReadableStream")}} 来用于数据操作。

Blob 表示的不一定是 JavaScript 原生格式的数据。{{domxref("File")}} 接口基于`Blob`，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。

要从其他非 blob 对象和数据构造一个 `Blob`，请使用 {{domxref("Blob.Blob", "Blob()")}} 构造函数。要创建一个 blob 数据的子集 blob，请使用 {{domxref("Blob.slice()", "slice()")}} 方法。要获取用户文件系统上的文件对应的 `Blob` 对象，请参阅 {{domxref("File", "File")}} 文档。

接受 `Blob` 对象的 API 也被列在 {{domxref("File", "File")}} 文档中。

> **备注：** `slice()` 方法原本接受 `length` 作为第二个参数，以表示复制到新 `Blob` 对象的字节数。如果设置的参数使 `start + length` 超出了源 `Blob` 对象的大小，则返回从开始到结尾的所有数据。

> **备注：** `slice()` 方法在某些浏览器和版本上带有浏览器引擎前缀：比如 Firefox 12 及更早版本的`blob.mozSlice()` 和 Safari 中的`blob.webkitSlice()`。没有浏览器引擎前缀的老版本 `slice()` 方法有不同的语义，并且已过时。Firefox 30 取消了对 `blob.mozSlice()` 的支持。

## 构造函数

- {{domxref("Blob.Blob", "Blob(blobParts[, options])")}}
  - : 返回一个新创建的 `Blob` 对象，其内容由参数中给定的数组串联组成。

## 属性

- {{domxref("Blob.size")}} {{readonlyinline}}
  - : `Blob` 对象中所包含数据的大小（字节）。
- {{domxref("Blob.type")}} {{readonlyinline}}
  - : 一个字符串，表明该 `Blob` 对象所包含数据的 MIME 类型。如果类型未知，则该值为空字符串。

## 方法

- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : 返回一个新的 `Blob` 对象，包含了源 `Blob` 对象中指定范围内的数据。
- {{domxref("Blob.stream()", "Blob.stream()")}}
  - : 返回一个能读取 blob 内容的 {{domxref("ReadableStream")}}。
- {{domxref("Blob.text()", "Blob.text()")}}
  - : 返回一个 promise 且包含 blob 所有内容的 UTF-8 格式的 {{domxref("USVString")}}。
- {{domxref("Blob.arrayBuffer()", "Blob.arrayBuffer()")}}
  - : 返回一个 promise 且包含 blob 所有内容的二进制格式的 {{domxref("ArrayBuffer")}}

## 示例

### Blob 构造函数用法举例

{{domxref("Blob.Blob", "Blob() 构造函数")}}允许通过其它对象创建 Blob 对象。比如，用字符串构建一个 blob：

```js
var debug = {hello: "world"};
var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
```

> **警告：** {{ domxref("BlobBuilder") }} 接口提供了另外一种创建`Blob` 对象的方式，但该方式现在已经废弃，不应继续使用：
>
> ```js
> var builder = new BlobBuilder();
> var fileParts = ['<a id="a"><b id="b">hey!</b></a>'];
> builder.append(fileParts[0]);
> var myBlob = builder.getBlob('text/xml');
> ```

### 示例：使用 Blob 创建一个指向类型化数组的 URL

参考下面的代码：

```js
var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray.buffer], {type: 'application/octet-stream'}); // 传入一个合适的 MIME 类型
var url = URL.createObjectURL(blob);
// 会产生一个类似 blob:d3958f5c-0777-0845-9dcf-2cb28783acaf 这样的 URL 字符串
// 你可以像使用普通 URL 那样使用它，比如用在 img.src 上。
```

### 示例：从 Blob 中提取数据

一种从 Blob 中读取内容的方法是使用 {{domxref("FileReader")}}。以下代码将 Blob 的内容作为类型数组读取：

```js
var reader = new FileReader();
reader.addEventListener("loadend", function() {
   // reader.result 包含被转化为类型数组 typed array 的 blob
});
reader.readAsArrayBuffer(blob);
```

另一种读取 Blob 中内容的方式是使用 Response 对象。下述代码将 Blob 中的内容读取为文本：

```js
var text = await (new Response(blob)).text();
```

通过使用 {{domxref("FileReader")}} 的其它方法可以把 Blob 读取为字符串或者数据 URL。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Blob")}}

\[1][WebKit](http://trac.webkit.org/changeset/55670) 和 [Opera 11.10](http://www.opera.com/docs/specs/presto28/file/#blob) 版本实现的 `slice()` 使用 `length` 来作为第二个参数。但是，因为这语法异于 {{jsxref("Array/slice", "Array.slice()")}} 和 {{jsxref("String/slice", "String.slice()")}}，WebKit 已经将其移除，并添加了 [`Blob.webkitSlice()`](http://trac.webkit.org/changeset/83873) 来支持这个新的语法。

\[2] [Firefox 4](https://hg.mozilla.org/mozilla-central/rev/1b3947ed93c6) 版本实现的 `slice()` 使用 `length`来作为第二个参数。但是，因为这语法异于 {{jsxref("Array/slice", "Array.slice()")}} 和 {{jsxref("String/slice", "String.slice()")}}，Gecko 已经将其移除，并添加了 `mozSlice()` 来支持这个新的语法。

\[3] 在 Gecko 12.0 {{ geckoRelease("12.0") }} 之前，有个 bug 会影响 `slice()` 的行为，就是参数 `start` 和 `end` 的值不能超出 64 位有符号数字范围，现已修复。

\[4] 请看 {{bug("1048325")}}。

## Gecko 备注：特权许可

要使用 chrome 代码，JSM 和 Bootstrap 作用域，你必须像这样导入它：

```js
Cu.importGlobalProperties(['Blob']);
```

`Blob`可以在 Worker 作用域内使用。

## 相关链接

- {{domxref("BlobBuilder")}}
- {{domxref("FileReader")}}
- {{domxref("File")}}
- {{domxref("URL.createObjectURL")}}
- [Components.utils.importGlobalProperties](/zh-CN/docs/Components.utils.importGlobalProperties)
