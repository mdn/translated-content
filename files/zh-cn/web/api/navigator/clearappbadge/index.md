---
title: Navigator：clearAppBadge() 方法
slug: Web/API/Navigator/clearAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

{{domxref("Navigator")}} 接口的 **`clearAppBadge()`** 方法通过将当前应用程序图标设置为 `nothing` 来清除当前应用程序图标上的徽章。`nothing` 表示当前没有设置徽章，并且徽章的状态为*已清除*。

## 语法

```js-nolint
clearAppBadge()
```

### 参数

无。

### 返回值

一个兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果文档未完全激活，则抛出该异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果调用被[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)阻止，则抛出该异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 {{domxref('PermissionStatus.state')}} 不是 `granted`，则抛出该异常。

## 示例

读取应用程序中的所有消息后，调用 `clearAppBadge()` 方法以清除徽章并删除通知。

```js
navigator.clearAppBadge();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [应用程序图标的标记](https://developer.chrome.google.cn/docs/capabilities/web-apis/badging-api)
