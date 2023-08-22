---
title: Window：showSaveFilePicker() 方法
slug: Web/API/Window/showSaveFilePicker
---

{{APIRef("File System Access API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} 接口的 **`showSaveFilePicker()`** 方法用于显示一个文件选择器，以允许用户保存一个文件。可以选择一个已有文件覆盖保存，也可以输入名字新建一个文件。

## 语法

```js-nolint
showSaveFilePicker()
```

### 参数

- `options` {{Optional_Inline}}

  - : 选项对象，包含以下属性：

    - `excludeAcceptAllOption`
      - : 布尔值，默认为 `false`。默认情况下，文件选择器带有一个允许用户选择所有类型文件的过滤选项（展开于文件类型选项中）。设置此选项为 `true` 以使该过滤选项不可用。
    - `suggestedName`
      - : {{jsxref('String')}} 字符串。建议的文件名称。
    - `types`

      - : 允许保存的文件类型的 {{jsxref('Array')}} 数组。其中的元素为包含以下选项的对象：

        - `description`
          - : 可选，对此允许文件类型集合的描述。
        - `accept`
          - : {{jsxref('Object')}} 对象，带有键名为 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)、键值为包含文件扩展名的 {{jsxref('Array')}} 数组的键值对（参考下方的示例）。

### 返回值

一个 {{jsxref("Promise")}} 对象，会兑现一个 {{domxref('FileSystemFileHandle')}} 对象。

### 异常

- `AbortError`
  - : 当用户直接关闭了文件选择器或选择的文件是敏感文件时将会抛出 AbortError。

## 安全性

要求发生[临时性用户活动](/zh-CN/docs/Web/Security/User_activation)。用户必须与页面或 UI 元素进行交互才能使该特性正常运行。

## 示例

以下函数可以显示一个文件选择器，并突出显示文本文件类型以供选择。

```js
async function getNewFileHandle() {
  const opts = {
    types: [
      {
        description: "Text file",
        accept: { "text/plain": [".txt"] },
      },
    ],
  };
  return await window.showSaveFilePicker(opts);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)
- [文件系统访问 API：简化对本地文件的访问](https://web.dev/file-system-access/)
