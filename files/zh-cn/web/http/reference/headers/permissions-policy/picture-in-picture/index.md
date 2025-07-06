---
title: "Permissions-Policy: picture-in-picture"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头 `picture-in-picture` 指令控制是否允许当前文档以{{domxref("Picture-in-Picture API", "画中画", "", "nocode")}}模式播放视频。

具体而言，如果定义的策略阻止使用此特性，则 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} 调用将抛出类型为 `SecurityError` 的 {{domxref("DOMException")}} 错误。

## 语法

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。有关更多详细信息，参阅 [`Permissions-Policy` > 语法](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy#语法)。

## 默认策略

`picture-in-picture` 的默认允许列表是 `*`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
