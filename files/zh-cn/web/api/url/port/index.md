---
title: URL：port 属性
slug: Web/API/URL/port
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`port`** 属性是一个表示 URL 端口号的字符串。

> [!NOTE]
> 如果传递给 [`URL()`](/zh-CN/docs/Web/API/URL/URL) 构造函数的输入字符串不包含显式端口号（例如 `https://localhost`），或者包含的端口号是与输入字符串的协议部分对应的默认端口号（例如 `https://localhost:443`），那么在构造函数返回的 [`URL`](/zh-CN/docs/Web/API/URL) 对象中，端口属性的值将为空字符串：`''`。

## 值

字符串。

## 示例

```js
// 使用非默认端口号的 https 协议
new URL("https://example.com:5443/svn/Repos/").port; // '5443'
// 使用非默认端口号的 http 协议
new URL("http://example.com:8080/svn/Repos/").port; // '8080'
// 使用默认端口号的 https 协议
new URL("https://example.com:443/svn/Repos/").port; // ''（空字符串）
// 使用默认端口号的 http 协议
new URL("http://example.com:80/svn/Repos/").port; // ''（空字符串）
// 没有明确端口号的 https 协议
new URL("https://example.com/svn/Repos/").port; // ''（空字符串）
// 没有明确端口号的 http 协议
new URL("https://example.com/svn/Repos/").port; // ''（空字符串）
// 使用非默认端口号的 ftp 协议
new URL("ftp://example.com:221/svn/Repos/").port; // '221'
// 使用默认端口号的 ftp 协议
new URL("ftp://example.com:21/svn/Repos/").port; // ''（空字符串）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("URL")}} 接口。
