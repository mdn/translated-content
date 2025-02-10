---
title: "Permissions-Policy: fullscreen"
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 `fullscreen` 指令控制当前文档是否允许使用 {{domxref('Element.requestFullscreen()')}}。

默认情况下，顶级文档及其同源子框架可以请求并进入全屏模式。此指令允许或阻止跨源框架使用全屏模式。这包括同源框架。

具体而言，如果定义的策略阻止使用此功能，则 {{domxref('Element.requestFullscreen', "requestFullscreen()")}} 调用将返回一个 {{jsxref('Promise')}} 并以 {{jsxref('TypeError')}} 拒绝。

> [!NOTE]
> 如果此指令（即通过 `allow` 属性）和 `allowfullscreen` 属性都存在于 `<iframe>` 元素上，则该指令优先。

## 语法

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。有关更多详细信息，参阅 [`Permissions-Policy` > 语法](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#语法)。

## 默认策略

`fullscreen` 的默认允许列表是 `self`。

## 示例

### 一般示例

SecureCorp Inc. 希望在除与其同源和源为 `https://example.com` 的浏览上下文之外的所有浏览上下文中禁用全屏 API。它可以通过提供以下 HTTP 响应标头来定义权限策略以实现此目的：

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### 使用 \<iframe> 元素

FastCorp Inc. 希望禁用除特定 `<iframe>` 之外的所有跨源子框架的 `fullscreen`。它可以通过提供以下 HTTP 响应标头来定义权限策略来实现此目的：

```http
Permissions-Policy: fullscreen=(self)
```

然后在 `<iframe>` 元素上包含一个 {{HTMLElement('iframe','allow','#属性')}} 属性：

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

iframe 属性可以选择性地在某些框架中的启用特性，而不在其他框架中启用特性，即使这些框架包含同源的文档。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)
