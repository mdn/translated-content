---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

允许扩展在安装之后，在运行时请求额外的权限。

扩展需要权限来访问更强大的 WebExtension API。它们可以在安装时请求权限，方法是在 [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest.json 键中包含它们需要的权限。在安装时请求权限的主要优点包括：

- 只会询问用户一次（是否授予权限），因此相对而言更少地对用户产生打扰，决定起来也更为简单。
- 扩展可以依赖于它所需的 API 访问权限，因为如果扩展已经在运行中，说明权限已经被用户授予了。

在大多数主流浏览器中，用户可以通过浏览器的扩展管理器查看他们安装的扩展是否请求了高级权限。

使用权限 API，扩展可以在运行时请求额外的权限。这些权限需要在 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json 键中列出。请注意，某些权限不允许在 `optional_permissions` 中使用。这样做的主要优势包括：

- 扩展仅需更少的权限即可运行，直到它真的需要其他权限。
- 扩展可以以一种优雅的方式处理权限拒绝，而不是在安装时向用户提供一个全局的“全有或全无”选择。例如，即使不授予扩展访问位置的权限，你仍然可以从地图扩展中获得很多信息。
- 扩展可能需要[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，但在安装时不知道需要哪些主机权限。例如，主机列表可能是由用户设置的。在这种情况下，在运行时请求更具体范围的主机的权限，可以取代在安装时请求“<all_urls>”的权限的做法。

要使用权限 API，请决定扩展在运行时可以请求哪些权限，并将它们列在 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) 中。之后，你可以请求任何包含在 `optional_permissions` 中的权限。请求只能在用户操作的处理器中进行（例如，点击处理器）。

从 Firefox 84 开始，用户将能够在附加组件管理器中管理已安装扩展的可选权限。使用可选权限的扩展应监听 [browser.permissions.onAdded](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onAdded) 和 [browser.permissions.onRemoved](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved) API 事件，以了解用户何时授予或撤销这些权限。

有关设计运行时权限请求的建议，以最大程度地提高用户授予权限的可能性，请参阅[在运行时请求权限](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/#request_permissions_at_runtime)。

## 类型

- {{WebExtAPIRef("permissions.Permissions")}}
  - : 表示一系列的权限。

## 方法

- {{WebExtAPIRef("permissions.contains()")}}
  - : 发现扩展被授予的权限。
- {{WebExtAPIRef("permissions.getAll()")}}
  - : 获取扩展当前被授予的所有权限。
- {{WebExtAPIRef("permissions.remove()")}}
  - : 放弃一系列的权限。
- {{WebExtAPIRef("permissions.request()")}}
  - : 请求授予一系列的权限。

## 事件处理器

- {{WebExtAPIRef("permissions.onAdded")}}
  - : 当一个新权限被授予时触发。
- {{WebExtAPIRef("permissions.onRemoved")}}
  - : 当一个权限被移除时触发。

## 浏览器兼容性

{{Compat}}

## 参见

- `manifest.json` [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 属性
- `manifest.json` [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) 属性

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.permissions`](https://developer.chrome.google.cn/docs/extensions/reference/api/permissions) API。
