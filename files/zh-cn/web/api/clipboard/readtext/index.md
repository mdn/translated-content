---
title: Clipboard：readText() 方法
slug: Web/API/Clipboard/readText
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

{{domxref("Clipboard")}} 接口的 **`readText()`** 方法返回一个兑现为系统剪贴板中的文本内容的 {{jsxref("Promise")}}。

> [!NOTE]
> 如需读取非文本内容，请使用 {{domxref("Clipboard.read", "read()")}} 方法。如需写入文本到剪贴板，请使用 {{domxref("Clipboard.writeText", "writeText()")}} 方法。

## 语法

```js-nolint
readText()
```

### 参数

无。

### 返回值

一个兑现为包含剪贴板文本内容的字符串 {{jsxref("Promise")}}。

如果剪贴板为空、不包含文本，或在表示剪贴板内容的对象不存在文本表示形式，则返回空字符串。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果不允许读取剪贴板，则抛出此异常。
- `NotFoundError` {{domxref("DOMException")}}
  - : 如果剪贴板声明包含可表示为文本的数据，但无法提供文本表示时抛出。

## 安全考虑

只能在[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中读取剪贴板。

其他安全要求在 API 概述主题的[安全考虑](/zh-CN/docs/Web/API/Clipboard_API#安全考虑)一节中进行了介绍。

## 示例

本示例获取剪贴板中的文本内容，并将返回的文本插入到选定元素中。

```js
async function pasteTextToElement(element) {
  try {
    const text = await navigator.clipboard.readText();
    element.textContent = text;
  } catch (error) {
    console.error(error.message);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API)
- web.dev 上的[解锁剪贴板权限](https://web.developers.google.cn/articles/async-clipboard)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
