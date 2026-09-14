---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 `autoplay` 指令控制当前文档是否被允许通过 {{domxref("HTMLMediaElement")}} 接口自动播放媒体。

具体来说，如果定义的策略阻止使用此特性并且没有用户手势，{{domxref("HTMLMediaElement.play()")}} 返回的 {{jsxref("Promise")}} 将以 {{domxref("DOMException")}} 被拒绝。{{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素上的 [`autoplay`](/zh-CN/docs/Web/HTML/Reference/Elements/audio#autoplay) 属性将被忽略。

> [!NOTE]
> 有关自动播放和自动播放阻止的更多详细信息，请参阅文章[媒体和 Web Audio API 的自动播放指南](/zh-CN/docs/Web/Media/Guides/Autoplay)。

## 语法

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。请参阅 [`Permissions-Policy` > 语法](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy#语法)了解更多详细信息。

## 默认策略

`autoplay` 的默认允许列表为：`self`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
