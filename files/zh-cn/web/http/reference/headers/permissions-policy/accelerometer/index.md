---
title: "Permissions-Policy: accelerometer"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{SeeCompatTable}}

HTTP {{HTTPHeader('Permissions-Policy')}} 标头的 `accelerometer` 指令控制当前文档是否被允许通过 {{domxref('Accelerometer')}} 接口收集设备加速度信息。

具体来说，如果定义的策略阻止使用此特性，则 {{domxref("Accelerometer.Accelerometer", "Accelerometer()")}} 构造函数调用将抛出类型为 `SecurityError` 的 {{domxref("DOMException")}}。

## 语法

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。请参阅 [`Permissions-Policy` 中的语法](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy#语法)了解更多详细信息。

## 默认策略

`accelerometer` 的默认允许列表为：`self`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader('Permissions-Policy')}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
