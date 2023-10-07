---
title: "Permissions-Policy: camera"
slug: Web/HTTP/Headers/Permissions-Policy/camera
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头当中的 `camera` 指令控制着当前的文档是否允许使用视频输入设备。当该策略被开启时，由 {{domxref("MediaDevices.getUserMedia()")}} 返回的 {{jsxref("Promise")}} 将会以一个 `NotAllowedError` {{domxref("DOMException")}} 拒绝。

## 语法

```
Permissions-Policy: camera <allowlist>;
```

- \<allowlist>
  - : 允许使用此特性的来源（origin）列表。参见 [`Permissions-Policy`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#语法)。

## 默认策略

默认允许的 `camera` 列表为 `'self'`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy)
- [使用 Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
