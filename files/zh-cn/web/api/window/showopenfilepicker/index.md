---
title: Window：showOpenFilePicker() 方法
slug: Web/API/Window/showOpenFilePicker
---

{{APIRef("File System Access API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} 接口的 **`showOpenFilePicker()`** 方法用于显示一个文件选择器，以允许用户选择一个或多个文件并返回这些文件的句柄。

## 语法

```js-nolint
showOpenFilePicker()
```

### 参数

- `options` {{Optional_Inline}}

  - : 选项对象，包含以下属性：

    - `multiple`
      - : 布尔值，默认为 `false`。设为 `true` 时允许用户选择多个文件。
    - `excludeAcceptAllOption`
      - : 布尔值，默认为 `false`。默认情况下，文件选择器带有一个允许用户选择所有类型文件的过滤选项（展开于文件类型选项中）。设置此选项为 `true` 以使该过滤选项不可用。
    - `types`

      - : 表示允许选择的文件类型的 {{jsxref('Array')}} 数组，其中的元素为包含以下选项的对象：

        - `description`
          - : 可选，对此允许文件类型集合的描述。
        - `accept`
          - : {{jsxref('Object')}} 对象，带有键名为 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)、键值为包含文件扩展名的 {{jsxref('Array')}} 数组的键值对（参考下方的示例）。

### 返回值

一个 {{jsxref("Promise")}} 对象，会兑现一个包含 {{domxref('FileSystemFileHandle')}} 对象的 {{jsxref('Array')}} 数组。

### 异常

- `AbortError`
  - : 当用户直接关闭了文件选择器或选择的文件是不宜暴露给网站的敏感文件时将会抛出 AbortError。

## 安全性

要求发生[临时性用户活动](/zh-CN/docs/Web/Security/User_activation)。用户必须与页面或 UI 元素进行交互才能使该特性正常运行。

## 示例

在此处我们设置一个用于传递给方法的选项对象。我们将允许选择图片类型、不允许使用所有类型，也不能选择多个文件。

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};
```

接下来我们创建一个异步函数来显示文件选择器并返回选择的文件。

```js
// 创建用于存放文件句柄的变量。
let fileHandle;

async function getFile() {
  // 打开文件选择器，解构返回的数组中的第一个元素
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // 操作 fileHandle 的后续代码
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化对本地文件的访问](https://web.dev/file-system-access/)
