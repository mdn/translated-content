---
title: WorkerNavigator：setAppBadge() 方法
slug: Web/API/WorkerNavigator/setAppBadge
l10n:
  sourceCommit: dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{APIRef("Badging API")}}{{securecontext_header}}

{{domxref("WorkerNavigator")}} 接口的 **`setAppBadge()`** 方法在与此应用关联的图标上设置徽章。如果将值传递给该方法，则该值将被设置为徽章的值。否则，徽章将显示为点或平台定义的其他指示器。

## 语法

```js-nolint
setAppBadge()
setAppBadge(contents)
```

### 参数

- `contents` {{optional_inline}}
  - : 一个将用作徽章值的{{jsxref("number", "数值", "", 1)}}。如果 `contents` 为 `0`，则徽章将设置为 `nothing`，表示已清除徽章。

### 返回值

一个兑现 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果文档未完全激活，则抛出该异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果调用被[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)阻止，则抛出该异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 {{domxref('PermissionStatus.state')}} 不是 `granted`，则抛出该异常。

## 示例

在下面的示例中，未读的计数被传递给 `setAppBadge()`。然后徽章应显示 `30`。

```js
const unread = 30;
navigator.setAppBadge(unread);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [应用程序图标的标记](https://developer.chrome.google.cn/docs/capabilities/web-apis/badging-api)
