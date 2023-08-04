---
title: Using the Permissions API
slug: Web/API/Permissions_API/Using_the_Permissions_API
---

{{DefaultAPISidebar("Permissions API")}}{{SeeCompatTable}}

本文提供了使用 W3C Permission API 的基本说明，它提供了一种程序上的方式来查询当前上下文的 API 权限授权状态。

## 申请权限面临的困境

惨淡的事实是，权限在 Web 开发中是令人厌恶却不得不面对的问题，对于开发者而言，处理它毫无乐趣。

由于历史原因，不同的 API 使用各自不同的方式来处理自己的权限 ── 例如，Notification API 允许显式地检查权限状态和申请权限，然而，Geolocation API 却不能（如果用户拒绝了首次权限请求，就会造成我们下面将要看到的问题）。

[Permissions API](/zh-CN/docs/Web/API/Permissions_API) 提供了一系列工具来让开发者在权限方面实现更好的用户体验。例如，它提供了特定的 API 来查询某个权限被授予了还是被拒绝了，以及可以使用 API 来申请特定的权限。

目前来说，该 API 的实现还在早期阶段，所以浏览器支持也是参差不齐：

- 只在 Chrome 44 以上版本及 Firefox 43 以上版本实现了。
- 当下仅支持 {{domxref("Permissions.query()")}} 方法，它用来查询权限。
- Chrome 中目前可以被 Permission API 识别的权限仅有 [Geolocation](/zh-CN/docs/Web/API/Geolocation) 和 Notification，对于 Firefox 来说，还支持 [Push](/zh-CN/docs/Web/API/Push_API) and WebMIDI.

更多特性将逐步实现。

## 一个简单的例子

在本文中，我们有一个简单的 demo 叫作 Location Finder. 它使用 Geolocation 获取用户的当前位置，并标注在 Google 地图上：

![Screenshot showing a map of Greenfield, UK.](location-finder-with-permissions-api.png)

You can [在线运行](https://chrisdavidmills.github.io/location-finder-permissions-api/)，或 [在 Github 查看源码](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages)。大部分代码都很简单且常见 ── 所以接下来我们会重点关注和 Permission API 有关的代码，如果你想学习其他部分，请自行阅读。

### 访问 Permissions API

浏览器现已包含 {{domxref("Navigator.permissions")}} 属性使开发者可以访问全局的 {{domxref("Permissions")}} 对象。这个对象最终将包含用来查询、申请和重置权限的方法，尽管，目前只有 {{domxref("Permissions.query()")}}; 我们接下来会讨论它。

### 查询权限状态

在我们的例子中，权限功能使用一个函数来处理— `handlePermission()`. 它开始于使用 {{domxref("Permissions.query()")}} 查询权限状态。根据 Promise resolve 后返回的 {{domxref("PermissionStatus")}} 对象的 {{domxref("PermissionStatus.state", "state")}} 属性，做出不同的处理：

- `"granted"`
  - : "Enable Geolocation" 按钮被隐藏掉了，因为 Geolocation 已经被允许了，不需要这个按钮了。
- `"prompt"`
  - : 隐藏 "Enable Geolocation" 按钮，因为用户会被（浏览器）引导授权 Geolocation 权限，所以它不需要了。接下来 {{domxref("Geolocation.getCurrentPosition()")}} 函数会运行，它会引导用户授权；如果用户授权了，它会继续执行 `revealPosition()` 函数（会显示地图）；如果用户拒绝了， `positionDenied()` 函数会被执行（这会让 "Enable Geolocation" 按钮显示出来）。
- `"denied"`
  - : "Enable Geolocation" 按钮会被显示（这段代码也需要放在这里，以防在页面首次加载时，这个源的权限状态就已经被设置为拒绝了）。

```js
function handlePermission() {
  navigator.permissions.query({ name: "geolocation" }).then(function (result) {
    if (result.state == "granted") {
      report(result.state);
      geoBtn.style.display = "none";
    } else if (result.state == "prompt") {
      report(result.state);
      geoBtn.style.display = "none";
      navigator.geolocation.getCurrentPosition(
        revealPosition,
        positionDenied,
        geoSettings,
      );
    } else if (result.state == "denied") {
      report(result.state);
      geoBtn.style.display = "inline";
    }
    result.onchange = function () {
      report(result.state);
    };
  });
}

function report(state) {
  console.log("Permission " + state);
}

handlePermission();
```

### 权限描述符

{{domxref("Permissions.query()")}} 方法接受一个 `PermissionDescriptor` 字典作为参数 — 它包含你感兴趣的 API 的名称。一些 API 有继承自默认的 `PermissionDescriptor` 的更加复杂的 `PermissionDescriptor`s 以包含更多额外的信息。例如，`PushPermissionDescriptor` 也包含一个比尔值指定 [`userVisibleOnly`](/zh-CN/docs/Web/API/PushManager/subscribe#Parameters) 是 `true` 还是 `false`.

### 重置权限

从 Firefox 47 开始，你可以使用 {{domxref("Permissions.revoke()")}} 方法重置现有权限。它的调用方式和 {{domxref("Permissions.query()")}} 方法几乎一模一样，区别是，当 promise 成功 resolve 时，它会让一个现有的权限恢复默认状态（通常是 `prompt`）。让我们看看 demo 中的代码：

```js
var revokeBtn = document.querySelector('.revoke');

  ...

revokeBtn.onclick = function() {
  revokePermission();
}

  ...

function revokePermission() {
  navigator.permissions.revoke({name:'geolocation'}).then(function(result) {
    report(result.state);
  });
}
```

> **备注：** 自 Firefox 51 开始 `revoke()` 函数被默认关闭了，因为它的设计带来了 [Web Applications Security Working Group](https://www.w3.org/2011/webappsec/) 中提到的问题。可以通过将设置项 `dom.permissions.revoke.enable` 置为 `true` 来重新开启它。

### 响应权限状态变化

你会注意到，在上面的代码中，在 {{domxref("PermissionStatus")}} 对象上有一个 `onchange` 事件回调 — 这让我们可以对感兴趣的 API 的状态变化做出响应。目前，我们只是上报了状态的变化。

## 总结和展望未来

目前，较之我们已有的，这个 API 并没有提供太多额外内容。如果在浏览器询问时，我们选择了从不分享我们的位置，那么不使用浏览器菜单选项的话，我们将无法返回权限的初始状态（询问）：

- **Firefox**: _工具 > 页面信息 > 权限 > 访问你的位置_。选择“总是询问”。
- **Chrome**: _汉堡菜单 > 设置 > 显示高级设置。在隐私部分，点击“内容设置”。在出现的对话框中，找到“位置”部分，选择“当网站试图访问时询问”...最后，点击“管理特例”_，移除你对特定网站的授权。

但是，未来浏览器会提供 `request()` 方法，他让我们可以在任何时候以编程的方式来请求权限。这非常值得期待尽快被实现。
