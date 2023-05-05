---
title: File.File()
slug: Web/API/File/File
---

{{APIRef("File")}}

**`File()`** 构造器创建新的 {{domxref("File")}} 对象实例。

## 语法

```plain
var myFile = new File(bits, name[, options]);
```

### 参数

- _bits_
  - : 一个包含{{jsxref("ArrayBuffer")}}，{{domxref("ArrayBufferView")}}，{{domxref("Blob")}}，或者 {{domxref("DOMString")}} 对象的 {{jsxref("Array")}} — 或者任何这些对象的组合。这是 UTF-8 编码的文件内容。
- _name_
  - : {{domxref("USVString")}}，表示文件名称，或者文件路径。
- _options_ {{optional_inline}}

  - : 选项对象，包含文件的可选属性。可用的选项如下：

    - `type`: {{domxref("DOMString")}}，表示将要放到文件中的内容的 MIME 类型。默认值为 `""` 。
    - `lastModified`: 数值，表示文件最后修改时间的 Unix 时间戳（毫秒）。默认值为 {{jsxref("Date.now()")}}。

## 示例

```js
var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
