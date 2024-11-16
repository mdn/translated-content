---
title: 使用权限 API
slug: Web/API/Permissions_API/Using_the_Permissions_API
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{DefaultAPISidebar("Permissions API")}}

本文提供了使用[权限 API](/zh-CN/docs/Web/API/Permissions_API)——它提供了一种用于查询当前上下文的 API 权限授权状态的编程方式——的基本指南。

## 申请权限面临的困境

Web 上的权限是令人厌恶却不得不面对的问题，但对于开发人员来说，处理它们并不是一件有趣的事。

由于历史原因，不同的 API 使用各自不同的方式来处理自己的权限──例如，[Notification API](/zh-CN/docs/Web/API/Notifications_API) 允许显式地检查权限状态和申请权限，然而，[Geolocation API](/zh-CN/docs/Web/API/Geolocation_API) 却不能。

[权限 API](/zh-CN/docs/Web/API/Permissions_API) 提供了一系列工具来让开发者在权限方面实现更好的用户体验。具体来说，开发人员可以使用 {{domxref("Permissions.query()")}} 来检查在当前上下文中使用特定 API 的权限是已授予、已拒绝还是需要通过提示获得特定用户权限。在主线程中查询权限是被[广泛支持](/zh-CN/docs/Web/API/Permissions_API#api.navigator.permissions)的，在 [Worker](/zh-CN/docs/Web/API/Permissions_API#api.workernavigator.permissions) 中也是如此（但有一个明显的例外）。

许多 API 现已启用权限查询，例如 [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API)、[Notifications API](/zh-CN/docs/Web/API/Notifications_API)、[Push API](/zh-CN/docs/Web/API/Push_API) 和 [Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API)。[API 概览](/zh-CN/docs/Web/API/Permissions_API#权限相关的_api)中提供了许多权限启用的 API 列表，你可以在[此处的兼容性表](/zh-CN/docs/Web/API/Permissions_API#api.permissions)中了解浏览器支持情况。

{{domxref("Permissions")}} 还有其他方法可用于专门请求使用 API 的权限和撤销权限，但这些方法已被弃用（非标准且不被广泛支持）。

## 一个简单的例子

在本文中，我们有一个简单的 demo 叫作 Location Finder. 它使用 Geolocation 获取用户的当前位置，并标注在 Google 地图上：

![英国格林菲尔德地图的截图](location-finder-with-permissions-api.png)

你可以[在线运行示例](https://chrisdavidmills.github.io/location-finder-permissions-api/)，或[在 Github 查看源代码](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)。大部分代码都很简单且常见──所以接下来我们会重点关注和权限 API 有关的代码，如果你想学习其他部分，请自行阅读。

### 访问权限 API

浏览器现已包含 {{domxref("Navigator.permissions")}} 属性使开发者可以访问全局的 {{domxref("Permissions")}} 对象。这个对象最终将包含用来查询、申请和撤销权限的方法，尽管，目前只有 {{domxref("Permissions.query()")}}；我们接下来会讨论它。

### 查询权限状态

在我们的例子中，权限功能使用一个函数来处理——`handlePermission()`。它开始于使用 {{domxref("Permissions.query()")}} 查询权限状态。根据 Promise 兑现后返回的 {{domxref("PermissionStatus")}} 对象的 {{domxref("PermissionStatus.state", "state")}} 属性，做出不同的处理：

- `"granted"`
  - : “Enable Geolocation”按钮被隐藏掉了，因为 Geolocation 已经被允许了，不需要这个按钮了。
- `"prompt"`
  - : 隐藏“Enable Geolocation”按钮，因为用户会被（浏览器）引导授权 Geolocation 权限，所以它不需要了。接下来 {{domxref("Geolocation.getCurrentPosition()")}} 函数会运行，它会引导用户授权；如果用户授权了，它会继续执行 `revealPosition()` 函数（会显示地图）；如果用户拒绝了， `positionDenied()` 函数会被执行（这会让“Enable Geolocation”按钮显示出来）。
- `"denied"`
  - : “Enable Geolocation”按钮会显示（这段代码也需要放在这里，以防在页面首次加载时，这个源的权限状态就已经被设置为拒绝了）。

```js
function handlePermission() {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
      report(result.state);
      geoBtn.style.display = "none";
    } else if (result.state === "prompt") {
      report(result.state);
      geoBtn.style.display = "none";
      navigator.geolocation.getCurrentPosition(
        revealPosition,
        positionDenied,
        geoSettings,
      );
    } else if (result.state === "denied") {
      report(result.state);
      geoBtn.style.display = "inline";
    }
    result.addEventListener("change", () => {
      report(result.state);
    });
  });
}

function report(state) {
  console.log(`Permission ${state}`);
}

handlePermission();
```

### 权限描述符

{{domxref("Permissions.query()")}} 方法接受一个 `PermissionDescriptor` 字典作为参数——它包含你感兴趣的 API 的名称。一些 API 有更复杂的 `PermissionDescriptor` 结构，该结构继承自默认的 `PermissionDescriptor`，包含更多额外的信息。例如，`PushPermissionDescriptor` 也包含一个布尔值指定 [`userVisibleOnly`](/zh-CN/docs/Web/API/PushManager/subscribe#参数) 是 `true` 还是 `false`。

### 响应权限状态变化

你会注意到，在上面的代码中，在 {{domxref("PermissionStatus")}} 对象上有一个 `onchange` 事件回调——这让我们可以对感兴趣的 API 的状态变化做出响应。目前，我们只是上报了状态的变化。
