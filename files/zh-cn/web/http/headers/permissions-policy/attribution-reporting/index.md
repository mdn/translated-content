---
title: "Permissions-Policy: attribution-reporting"
slug: Web/HTTP/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 `attribution-reporting` 指令控制当前文档是否被允许使用 [Attribution Reporting API](/zh-CN/docs/Web/API/Attribution_Reporting_API)。

具体来说，如果定义的策略阻止使用此特性：

- 不会进行后台 `attributionsrc` 请求。
- 调用 {{domxref("XMLHttpRequest.setAttributionReporting()")}} 方法时会抛出异常。
- 当在 {{domxref("fetch()")}} 调用中包含 [`attributionReporting`](/zh-CN/docs/Web/API/Window/fetch#attributionreporting) 选项时，会导致抛出异常。
- HTTP 响应中与文档相关的注册标头（{{httpheader("Attribution-Reporting-Register-Source")}} 和 {{httpheader("Attribution-Reporting-Register-Trigger")}}）将被忽略。

## 语法

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。请参阅 [`Permissions-Policy` > 语法](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#语法)了解更多详细信息。

## 默认策略

`attribution-reporting` 的默认允许列表为：`*`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)
- [Attribution Reporting API](/zh-CN/docs/Web/API/Attribution_Reporting_API)
