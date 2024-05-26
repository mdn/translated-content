---
title: 权限 API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

**权限 API**（Permissions API）提供一致的编程方式来查询归因于当前上下文的 API 权限的状态。例如，权限 API 可用于确定是否已授予或拒绝访问特定 API 的权限，或者是否需要特定的用户权限。

请注意，此 API 的权限有效地聚合了上下文的所有安全限制，包括在安全上下文中使用 API 的任何要求，[Permissions-Policy](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy) 应用于文档的限制以及用户提示。因此，例如，如果 API 受到权限策略的限制，则返回的权限将被“拒绝”，并且不会提示用户访问。

## 概念和用法

历史上不同的 API 对自己的权限的处理方式不一致——例如，[Notifications API](/zh-CN/docs/Web/API/Notifications_API) 提供了自己的方法来请求权限和检查权限状态，而 [Geolocation API](/zh-CN/docs/Web/API/Geolocation) 没有。权限 API 提供的工具允许开发者在使用权限时实现一致且更好的用户体验。

`permissions` 属性已在标准浏览上下文和 worker 上下文（{{domxref("WorkerNavigator")}} ——因此可以在 worker 内部进行权限检查）中的 {{domxref("Navigator")}} 对象上可用，并返回一个提供对权限 API 功能的访问的 {{domxref("Permissions")}} 对象。

获得此对象后，你可以使用 {{domxref("Permissions.query()")}} 方法返回一个 promise，该 promise 为特定的 API 解析 {{domxref("PermissionStatus")}} 对象。请注意，如果状态为 `prompt`，则用户必须在访问该功能之前确认提示，并且启动此提示的机制将取决于特定的 API——它并未定义为权限 API 的一部分。

### 权限相关的 API

并非所有 API 的权限状态都可以通过权限 API 查询。权限相关的 API 的非详尽列表包括：

- [Background Synchronization API](/zh-CN/docs/Web/API/Background_Synchronization_API)：`background-sync`（应当总是被授予）
- [Geolocation API](/zh-CN/docs/Web/API/Geolocation_API)：`geolocation`
- [Local Font Access API](/zh-CN/docs/Web/API/Local_Font_Access_API)：`local-fonts`
- [Media Capture and Streams API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)：`microphone`、`camera`
- [Notifications API](/zh-CN/docs/Web/API/Notifications_API)：`notifications`
- [Payment Handler API](/zh-CN/docs/Web/API/Payment_Handler_API)：`payment-handler`
- [Push API](/zh-CN/docs/Web/API/Push_API)：`push`
- [Screen Wake Lock API](/zh-CN/docs/Web/API/Screen_Wake_Lock_API)：`screen-wake-lock`
- [Sensor APIs](/zh-CN/docs/Web/API/Sensor_APIs)：`accelerometer`、`gyroscope`、`magnetometer`、`ambient-light-sensor`
- [Storage Access API](/zh-CN/docs/Web/API/Storage_Access_API)：`storage-access`、`top-level-storage-access`
- [Storage API](/zh-CN/docs/Web/API/Storage_API)：`persistent-storage`
- [Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API)：`midi`
- [Window Management API](/zh-CN/docs/Web/API/Window_Management_API)：`window-management`

## 示例

我们创建了一个名为 Location Finder 的简单示例。你可以[实时运行示例](https://chrisdavidmills.github.io/location-finder-permissions-api/)，或[在 GitHub 上查看源代码](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)。

有关其工作原理的更多信息，请阅读我们的文章[使用权限 API](/zh-CN/docs/Web/API/Permissions_API/Using_the_Permissions_API)。

## 接口

- {{domxref("Permissions")}}
  - : 提供核心权限 API 功能，例如查询和撤销权限的方法。
- {{domxref("PermissionStatus")}}
  - : 提供对权限当前状态的访问，以及响应权限状态更改的事件处理器。

### 对其他接口的扩展

- {{domxref("Navigator.permissions")}} 和 {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : 分别用于访问主上下文和 worker 上下文的 {{domxref("Permissions")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用权限 API](/zh-CN/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [使用权限 API 检测用户允许或拒绝摄像头访问的频率](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [隐私、权限和信息安全](/zh-CN/docs/Web/Privacy)
