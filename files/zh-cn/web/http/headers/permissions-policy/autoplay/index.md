---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Headers/Permissions-Policy/autoplay
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `autoplay` directive controls whether the current document is allowed to autoplay media requested through the {{domxref("HTMLMediaElement")}} interface. When this policy is enabled and there were no user gestures, the {{domxref("Promise")}} returned by {{domxref("HTMLMediaElement.play()")}} will reject with a `DOMException`. The [`autoplay`](/zh-CN/docs/Web/HTML/Element/audio#autoplay) attribute on {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements will be ignored.

For more details on autoplay and autoplay blocking, see the article [Autoplay guide for media and Web Audio APIs](/zh-CN/docs/Web/Media/Autoplay_guide).

## 语法

```
Permissions-Policy: autoplay <allowlist>;
```

- \<allowlist>
  - : 允许使用此特性的来源（origin）列表。参见 [`Permissions-Policy`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#语法)。

## 默认策略

[Google Chrome](https://chromestatus.com/feature/5100524789563392) 的默认值是 `'self'`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [Permission Policy](/zh-CN/docs/Web/HTTP/Feature_Policy)
- [使用 Permission Policy](/zh-CN/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
