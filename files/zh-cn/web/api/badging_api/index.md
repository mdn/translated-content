---
title: Badging API
slug: Web/API/Badging_API
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("Badging API")}}{{securecontext_header}}{{AvailableInWorkers}}

**Badging API** 为 Web 开发人员提供了一种在文档或应用程序上设置徽章的方法，用以充当状态已更改的通知，而不显示更分散注意力的通知。一个常见的用例是具有消息传递功能的应用程序，在应用程序图标上显示徽章以表明新消息已到达。

## 概念和用法

Web 开发人员经常更新文档图标或标题以指示状态。Badging API 提供了一种更优雅的方式来显示状态，它提供了一种对用户代理有意义的方法，因此可以与 UI 其余部分相匹配的方式显示。

### 徽章类型

徽章有两种类型：

- 文档徽章（document badge），通常显示在页面图标附近或页面图标上的浏览器选项卡中。
- 应用程序徽章（app badge），与已安装的 Web 应用程序的图标相关联。这些可能会显示在扩展坞、工具架或主屏幕的应用程序图标上，具体取决于所使用的设备。

### 徽章状态

徽章可以具有三个可能值之一，这些值是在内部设置的：

- `nothing`
  - : 表示当前未设置徽章。若徽章被应用程序清除或被用户代理重置，徽章可能会处于此状态。
- `flag`
  - : 表示已设置徽章，但没有具体数据可显示。如果应用程序已设置徽章，但未将任何值传递给该方法，则徽章将处于此状态。
- 一个整数
  - : 设置徽章时传递的值。该值永远不会是 `0`，设置徽章时传递值 `0` 将导致用户代理通过将其设置为 `nothing` 来清除徽章。

### 设置徽章

使用 `setAppBadge()` 方法设置徽章（对于已安装的应用程序）。如果没有参数传递给这些方法，则徽章值为 flag。用户代理将显示其通知标志，例如图标上的彩色圆圈。

这些方法还可以传递一个参数 `contents`，该参数应该是一个数字。然后，这将显示为徽章的一部分。用户代理可能会以某种方式更改此值。例如，如果你传递一个非常大的数字（例如 4000），用户代理可能会在徽章中将其显示为 99+。用户代理也可以忽略此数据并替代地显示标记。

### 清除徽章

使用 `clearAppBadge()` 方法清除徽章。这些不带任何参数并将徽章设置为值 `nothing`。此外，将 `0` 值传递给 `setAppBadge()` 会将徽章设置为 `nothing` 并清除徽章。

## 接口

无。

### Navigator 接口的扩展

- {{domxref("Navigator.setAppBadge()")}}
  - : 在与此应用程序关联的图标上设置徽章。
- {{domxref("Navigator.clearAppBadge()")}}
  - : 清除与此应用程序关联的图标上的徽章。

### WorkerNavigator 接口的扩展

- {{domxref("WorkerNavigator.setAppBadge()")}}
  - : 在与此应用程序关联的图标上设置徽章。
- {{domxref("WorkerNavigator.clearAppBadge()")}}
  - : 清除与此应用程序关联的图标上的徽章。

## 示例

要在当前应用程序上设置值为 12 的通知徽章：

```js
navigator.setAppBadge(12);
```

要清除当前应用程序上的通知标志：

```js
navigator.clearAppBadge();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [应用程序图标标记](https://developer.chrome.google.cn/docs/capabilities/web-apis/badging-api)
- [Badging API Explainer](https://github.com/w3c/badging/blob/main/explainer.md)
