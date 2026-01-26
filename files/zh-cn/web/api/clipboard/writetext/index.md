---
title: Clipboard：writeText() 方法
slug: Web/API/Clipboard/writeText
l10n:
  sourceCommit: fff3c2948f6eb9452568bb48e016bd199ce54b95
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

{{domxref("Clipboard")}} 接口的 **`writeText()`** 方法用于将指定文本写入系统剪贴板，并返回一个在剪贴板内容更新后兑现的 {{jsxref("Promise")}}。

## 语法

```js-nolint
writeText(newClipText)
```

### 参数

- `newClipText`
  - : 要写入剪贴板的字符串。

### 返回值

一个在剪贴板内容更新后兑现的 {{jsxref("Promise")}}。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果不允许写入剪贴板，则抛出此异常。

## 安全考虑

只能在[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中读取剪贴板。

其他安全要求在 API 概述主题的[安全考虑](/zh-CN/docs/Web/API/Clipboard_API#安全考虑)一节中进行了介绍。

## 示例

本示例将剪贴板内容设置为字符串“\<空剪切板>”。

```js
button.addEventListener("click", () => writeClipboardText("<空剪切板>"));

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
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
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
