---
title: File：File() 构造函数
slug: Web/API/File/File
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`File()`** 构造函数创建新的 {{domxref("File")}} 对象实例。

## 语法

```js-nolint
new File(fileBits, fileName)
new File(fileBits, fileName, options)
```

### 参数

- `fileBits`
  - : 一个[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)对象，例如一个具有 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、字符串或任何此类元素的组合的{{jsxref("Array", "数组", "", 1)}}，将被放入 {{domxref("File")}} 内。请注意，这里的字符串被编码为 UTF-8，与通常的 JavaScript UTF-16 字符串不同。
- `fileName`
  - : 表示文件名或文件路径的字符串。
- `options` {{optional_inline}}

  - : 包含文件可选属性的选项对象。可用选项如下：

    - `type` {{optional_inline}}
      - : 表示将放入文件的内容的 MIME 类型的字符串。默认值为 `""`。
    - `endings` {{optional_inline}}
      - : 如果数据是文本，如何解释内容中的换行符（`\n`）。默认值 `transparent` 将换行符复制到 blob 中而不更改它们。要将换行符转换为主机系统的本机约定，指定值为 `native`。
    - `lastModified` {{optional_inline}}
      - : 一个数字，表示 Unix 时间纪元与文件上次修改时间之间的毫秒数。默认值为调用 {{jsxref("Date.now()")}} 返回的值。

## 示例

```js
const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
