---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP {{HTTPHeader('Permissions-Policy')}} 标头的 `web-share` 指令控制当前文档是否允许使用 Web Share API 的 {{domxref("Navigator.share","Navigator.share()")}} 方法将文本、链接、图像和其他内容分享到用户选择的任意目标。

具体而言，如果定义的策略阻止使用此特性，则调用 {{domxref("Navigator.share()")}} 将以 `NotAllowedError` 类型的 {{domxref("DOMException")}} 拒绝其返回的 {{jsxref("Promise")}}。

## 语法

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。请参阅 [`Permissions-Policy` > 语法](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy#语法)了解更多详细信息。

## 默认策略

`web-share` 的默认允许列表为：`self`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader('Permissions-Policy')}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
