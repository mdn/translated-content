---
title: Window：showSaveFilePicker() 方法
slug: Web/API/Window/showSaveFilePicker
l10n:
  sourceCommit: b58a5b506fdc086f442104ccdee547b9df0cb6a7
---

{{APIRef("File System API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("Window")}} 接口的 **`showSaveFilePicker()`** 方法用于显示允许用户保存一个文件的文件选择器。用户可以选择一个已有文件覆盖保存，也可以输入名字新建一个文件。

## 语法

```js-nolint
showSaveFilePicker()
showSaveFilePicker(options)
```

### 参数

- `options` {{Optional_Inline}}
  - : 选项对象，包含以下属性：
    - `excludeAcceptAllOption` {{Optional_Inline}}
      - : 布尔值，默认为 `false`。默认情况下，选择器应包含一个不应用任何文件类型过滤器的选项（通过下面的类型选项启动）。将此选项设置为 `true` 意味着该选项*不*可用。
    - `id` {{Optional_Inline}}
      - : 通过指定 ID，浏览器可以记住不同 ID 所对应的目录。如果在另一个选择器中使用了相同的 ID，则选择器将在同一目录中打开。
    - `startIn` {{Optional_Inline}}
      - : 一个 {{domxref("FileSystemHandle")}} 对象或一个众所周知的目录（`"desktop"`、`"documents"`、`"downloads"`、`"music"`、`"pictures"` 或 `"videos"`）以指定打开选择器的起始目录。
    - `suggestedName` {{Optional_Inline}}
      - : 一个{{jsxref('String', '字符串', '', 1)}}。建议的文件名。
    - `types` {{Optional_Inline}}
      - : 允许选择的文件类型的{{jsxref('Array', '数组', '', 1)}}。每个项目都是一个具有以下选项的对象：
        - `description` {{Optional_Inline}}
          - : 允许的文件类型类别的可选描述。默认为空字符串。
        - `accept`
          - : 一个 {{jsxref('Object')}}，其键设置为 [MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types/Common_types)，值设置为文件扩展名的{{jsxref('Array', '数组', '', 1)}}（参见下面的示例）。

### 返回值

一个 {{jsxref("Promise")}} 对象，其兑现一个 {{domxref('FileSystemFileHandle')}} 对象。

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 如果用户在没有做出选择的情况下关闭提示，或者如果用户代理认为任何选定的文件过于敏感或危险，则抛出此异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果调用被[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)阻止，或者不是通过用户交互（例如按下按钮）调用，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 如果无法处理接受类型，则抛出该异常，它可能会在出现以下情况时发生：
    - `types` 选项中任何项目的 `accept` 选项的任何键字符串都无法解析为有效的 MIME 类型。
    - `types` 选项中任何项目的 `accept` 选项的任何值字符串都是无效的，例如，如果它不以 `.` 开头，或者它以 `.` 结尾，或者它包含任何无效的值码点且长度大于 16。
    - `types` 选项为空，`excludeAcceptAllOption` 选项为 `true`。

## 安全性

[瞬态用户激活](/zh-CN/docs/Web/Security/Defenses/User_activation)是必需的。用户必须与页面或 UI 元素进行交互才能使该特性正常运行。

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
- [文件系统访问 API：简化对本地文件的访问](https://developer.chrome.google.cn/docs/capabilities/web-apis/file-system-access)
