---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{SeeCompatTable}}

HTTP {{HTTPHeader("Permissions-Policy")}} 标头的 `bluetooth` 指令控制当前文档是否被允许使用 [Web Bluetooth API](/zh-CN/docs/Web/API/Web_Bluetooth_API)。

具体来说，如果定义的策略不允许使用此特性，则由 {{domxref('Navigator.bluetooth')}} 返回的 {{domxref('Bluetooth')}} 对象的方法将会阻止访问：

- {{DOMxRef("Bluetooth.getAvailability()")}} 将始终以 `false` 的值兑现其返回的 {{jsxref("Promise")}}。
- {{DOMxRef("Bluetooth.getDevices()")}} 将以 `SecurityError` 类型的 {{domxref("DOMException")}} 拒绝其返回的 {{jsxref("Promise")}}。
- {{DOMxRef("Bluetooth.requestDevice()")}} 将以 `SecurityError` 类型的 {{domxref("DOMException")}} 拒绝其返回的 {{jsxref("Promise")}}。

## 语法

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : 允许使用该特性的来源列表。请参阅 [`Permissions-Policy` > 语法](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy#语法)了解更多详细信息。

## 默认策略

`bluetooth` 的默认允许列表为：`self`。

## 示例

### 通用示例

SecureCorp Inc. 希望在所有浏览上下文中禁用 Web Bluetooth API，除了其自身的来源和来源 `https://example.com`。它可以通过发送以下 HTTP 响应标头来定义权限策略：

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### 带有 \<iframe> 元素

FastCorp Inc. 希望为除了特定的 `<iframe>` 的所有跨来源的子框架禁用 `bluetooth`。它可以通过发送以下 HTTP 响应标头来定义权限策略：

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

然后在 `<iframe>` 元素上包含一个 {{HTMLElement('iframe','allow','#属性')}} 属性：

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>` 属性可以有选择地在某些框架中启用特性，而在其他框架中禁用这些特性，即使这些框架包含来自同一来源的文档。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Permissions-Policy")}} 标头
- [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)
