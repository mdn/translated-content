---
title: "Permissions-Policy: local-fonts"
slug: Web/HTTP/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 `local-fonts` 指令控制当前文档是否允许通过 {{DOMxRef("Window.queryLocalFonts()")}} 方法收集用户本地安装的字体的数据。

具体而言，如果定义的策略阻止使用此特性，则 {{DOMxRef("Window.queryLocalFonts()")}} 将以 `SecurityError` 类型的 {{domxref("DOMException")}} 拒绝其返回的 {{jsxref("Promise")}}。

## 语法

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。参见 [`Permissions-Policy`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#语法)。

## 默认策略

`local-fonts` 的默认允许列表为：`self`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)
