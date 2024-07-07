---
title: "Permissions-Policy: battery"
slug: Web/HTTP/Headers/Permissions-Policy/battery
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 `battery` 指令控制当前文档是否被允许通过 {{DOMxRef("BatteryManager")}} 接口收集设备的电池信息，该接口通过 {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} 获得。

具体来说，如果定义的策略阻止使用此特性，{{domxref("Navigator.getBattery", "getBattery()")}} 调用将返回一个 {{jsxref("Promise")}}，该 Promise 会因 `NotAllowedError` 类型的 {{domxref("DOMException")}} 被拒绝。

## 语法

```http
Permissions-Policy: battery=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。请参阅 [`Permissions-Policy` > 语法](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#语法)了解更多详细信息。

## 默认策略

`battery` 的默认允许列表为：`self`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)
- [Battery Status API](/zh-CN/docs/Web/API/Battery_Status_API)
- {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}
- {{DOMxRef("BatteryManager")}}
