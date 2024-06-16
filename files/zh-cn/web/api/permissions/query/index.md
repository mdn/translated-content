---
title: Permissions：query() 方法
slug: Web/API/Permissions/query
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

{{domxref("Permissions")}} 接口的 **`query()`** 方法会返回全局作用域中用户权限的状态。

## 语法

```js-nolint
query(permissionDescriptor)
```

### 参数

- `permissionDescriptor`

  - : 一个为 `query` 操作设置选项的对象，由一个以逗号分隔的键——值对列表组成。可用的选项有：

    - `name`
      - : 要查询权限的 API 名称。每个浏览器支持不同的值集。Firefox 的值在[这里](https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10)，Chromium 的值在[这里](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl)，WebKit 的值在[这里](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl)。
    - `userVisibleOnly`
      - : （仅推送，不被 Firefox 所支持——请参阅下面的“浏览器兼容性”部分）表示是否希望为每条消息显示通知或发送静默推送通知。默认为 `false`。
    - `sysex`（仅限 MIDI）
      - : 表示是否需要接收系统专有信息。默认为 `false`。

> **备注：** 从 Firefox 44 开始，[Notifications](/zh-CN/docs/Web/API/Notifications_API) 和 [Push](/zh-CN/docs/Web/API/Push_API) 的权限已经合并。如果权限已授予（例如由用户在相关权限对话框中授予），`navigator.permissions.query()` 将为 `notifications` 和 `push` 返回 `true`。

> **备注：** `persistent-storage`权限允许根据 [Storage API](https://storage.spec.whatwg.org/) 使用持久盒（即[持久存储](https://storage.spec.whatwg.org/#persistence)）来进行存储。

### 返回值

一个会兑现为 {{domxref("PermissionStatus")}} 对象的 {{jsxref("Promise")}}。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果在浏览上下文中调用了 `query()` 方法，而其关联文档尚未完全激活，则抛出此异常。
- {{jsxref("TypeError")}}
  - : 如果检索 `PermissionDescriptor` 信息以某种方式失败，或者权限不存在或用户代理不支持该权限，则抛出此异常。

## 示例

### 根据地理位置权限显示新闻

此示例显示了在授予 `geolocation` 权限的情况下，如何显示与当前位置相关的新闻，以及在其他情况下如何提示用户授予访问位置信息的权限。

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // 如果权限被拒绝，就什么都不做。
});
```

### 测试对不同权限的支持

本例显示了查询每个权限的结果。

代码使用了 `navigator.permissions.query()` 来查询每个权限，记录权限状态或浏览器不支持该权限。请注意，`query()` 是在 `try...catch` 代码块中调用的，因为如果不支持权限，相关的 `Promise` 就会被拒绝。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 320px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
// 权限数组
const permissions = [
  "accelerometer",
  "accessibility-events",
  "ambient-light-sensor",
  "background-sync",
  "camera",
  "clipboard-read",
  "clipboard-write",
  "geolocation",
  "gyroscope",
  "local-fonts",
  "magnetometer",
  "microphone",
  "midi",
  "notifications",
  "payment-handler",
  "persistent-storage",
  "push",
  "screen-wake-lock",
  "storage-access",
  "top-level-storage-access",
  "window-management",
];

processPermissions();

// 遍历权限并将结果记录下来
async function processPermissions() {
  for (const permission of permissions) {
    const result = await getPermission(permission);
    log(result);
  }
}

// 在 try...catch 块中查询单个权限并返回结果
async function getPermission(permission) {
  try {
    const result = await navigator.permissions.query({ name: permission });
    return `${permission}：${result.state}`;
  } catch (error) {
    return `${permission}（不支持）`;
  }
}
```

运行代码的日志如下所示：

{{EmbedLiveSample('测试对不同权限的支持',"100%", "370px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
