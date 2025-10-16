---
title: 权限 API
slug: Web/API/Permissions_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

**权限 API** 提供了一种一致的编程方式来查询当前上下文（例如网页或 worker）的 API 权限状态。例如，它可用于确定访问特定功能或 API 的权限是否已被授予、被拒绝或需要特定用户权限。

## 概念和用法

历史上不同的 API 对自己的权限的处理方式不一致——例如，[Notifications API](/zh-CN/docs/Web/API/Notifications_API) 提供了自己的方法来请求权限和检查权限状态，而 [Geolocation API](/zh-CN/docs/Web/API/Geolocation) 没有。权限 API 提供的工具允许开发者在使用权限时实现一致的用户体验。

此 API 的权限有效地汇总了上下文的所有安全限制，包括在安全上下文中使用 API 的任何要求、应用于文档的 [Permissions-Policy](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy) 限制、用户交互要求和用户提示。因此，例如，如果 API 受到权限策略的限制，则返回的权限将会为 `denied`，并且不会提示用户访问。

`permissions` 属性已在 {{domxref("Navigator")}} 对象上可用，在标准浏览上下文和 worker 上下文中均可用（{{domxref("WorkerNavigator")}}——因此可在 worker 内进行权限检查），并返回 {{domxref("Permissions")}} 对象，该对象提供对权限 API 功能的访问。

一旦你有了这个对象，你就可以使用 {{domxref("Permissions.query()")}} 方法返回一个通过 {{domxref("PermissionStatus")}} 兑现特定 API 的 promise。

### 请求权限

如果权限状态为 `prompt`，则用户必须确认提示以授予对该特性的访问权限。

触发此提示的机制将取决于特定 API——它未定义为权限 API 的一部分。通常，触发器是调用方法来访问或打开该特性的代码，或者注册随后将访问该特性的通知的代码。

请注意，并非所有功能都需要提示。权限可能由 `Permission Policy` 授予，由{{glossary("transient activation", "瞬态激活")}}隐式授予，或通过其他机制授予。

### 撤销权限

权限撤销不由 API 管理。更具体地说，{{domxref("Permissions.revoke()")}} 方法曾被提出，但此后已从实施该方法的浏览器中删除。

用户可以使用浏览器设置手动删除特定网站的权限：

- **Firefox**：_菜单 > 设置 > 隐私和安全 > 权限_（然后选择感兴趣的权限的**设置**按钮）。
- **Chrome**：_菜单 > 设置 > 显示高级设置_。在*隐私*部分中，单击*内容设置*。在出现的对话框中，找到*位置*部分并选择*当网站尝试... 时询问*。最后，单击*管理例外*并删除你授予你感兴趣的网站的权限。

### 权限相关的 API

并非所有 API 的权限状态都可以通过权限 API 查询。权限相关的 API 的非详尽列表包括：

- [Background Synchronization API](/zh-CN/docs/Web/API/Background_Synchronization_API)：`background-sync`（应当总是被授予）
- [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API#安全考虑)：`clipboard-read`、`clipboard-write`
- [Compute Pressure API](/zh-CN/docs/Web/API/Compute_Pressure_API)：`compute-pressure`
- [Geolocation API](/zh-CN/docs/Web/API/Geolocation_API#security_considerations)：`geolocation`
- [Local Font Access API](/zh-CN/docs/Web/API/Local_Font_Access_API)：`local-fonts`
- [Media Capture and Streams API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)：`microphone`、`camera`
- [Notifications API](/zh-CN/docs/Web/API/Notifications_API)：`notifications`
- [Payment Handler API](/zh-CN/docs/Web/API/Payment_Handler_API)：`payment-handler`
- [Push API](/zh-CN/docs/Web/API/Push_API)：`push`
- [Screen Wake Lock API](/zh-CN/docs/Web/API/Screen_Wake_Lock_API)：`screen-wake-lock`
- [Sensor APIs](/zh-CN/docs/Web/API/Sensor_APIs)：`accelerometer`、`gyroscope`、`magnetometer`、`ambient-light-sensor`
- [Storage Access API](/zh-CN/docs/Web/API/Storage_Access_API)：`storage-access`、`top-level-storage-access`
- [Storage API](/zh-CN/docs/Web/API/Storage_API)：`persistent-storage`
- [Web Bluetooth API](/zh-CN/docs/Web/API/Web_Bluetooth_API)：`bluetooth`
- [Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API)：`midi`
- [Window Management API](/zh-CN/docs/Web/API/Window_Management_API)：`window-management`

## 接口

- {{domxref("Permissions")}}
  - : 提供核心权限 API 功能，例如查询和撤销权限的方法。
- {{domxref("PermissionStatus")}}
  - : 提供对权限当前状态的访问，以及响应权限状态更改的事件处理器。

### 对其他接口的扩展

- {{domxref("Navigator.permissions")}} 和 {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : 分别用于访问主上下文和 worker 上下文的 {{domxref("Permissions")}} 对象。

## 示例

我们创建了一个名为 Location Finder 的示例。你可以[实时运行示例](https://chrisdavidmills.github.io/location-finder-permissions-api/)、[在 GitHub 上查看源代码](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)，或者在我们的文章[使用权限 API](/zh-CN/docs/Web/API/Permissions_API/Using_the_Permissions_API)中阅读有关其工作原理的更多信息。

[`Permissions.query()` 示例](/zh-CN/docs/Web/API/Permissions/query#测试对不同权限的支持)也展示了在当前浏览器上测试大多数权限并记录结果的代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用权限 API](/zh-CN/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [使用权限 API 检测用户允许或拒绝摄像头访问的频率](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [隐私、权限和信息安全](/zh-CN/docs/Web/Privacy)
