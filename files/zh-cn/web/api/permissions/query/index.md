---
title: Permissions：query() 方法
slug: Web/API/Permissions/query
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

{{domxref("Permissions")}} 接口的 **`query()`** 方法会返回全局作用域中用户权限的状态。

用户权限名称在每个功能的各自规范中定义。不同浏览器版本支持的权限在 [`Permissions` 接口的兼容性数据](/zh-CN/docs/Web/API/Permissions#浏览器兼容性)中列出（另请参阅 [Firefox 值](https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10)、[Chromium 值](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl)和 [WebKit 值](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl)的相关源代码）。

每个权限所控制的 API 在[权限 API](/zh-CN/docs/Web/API/Permissions_API) 概述主题中的[权限相关的 API](/zh-CN/docs/Web/API/Permissions_API#权限相关的_api) 中列出。

## 语法

```js-nolint
query(permissionDescriptor)
```

### 参数

- `permissionDescriptor`

  - : 设置 `query` 操作选项的对象。此描述符的可用选项取决于权限类型。所有权限都有一个名称：

    - `name`
      - : 包含要查询其权限的 API 名称的字符串，例如 `camera`、`bluetooth`、`camera`、`geolocation`（有关更完整的列表，请参阅 [`Permissions`](/zh-CN/docs/Web/API/Permissions#浏览器兼容性)）。如果浏览器不支持权限名称，则返回的 {{jsxref("Promise")}} 将使用 {{jsxref("TypeError")}} 拒绝。

    对于 `push` 权限，你还可以指定：

    - `userVisibleOnly` {{optional_inline}}
      - : （仅推送，Firefox 不支持——请参阅下面的浏览器支持部分）表示你是否要为每条消息显示通知或能够发送静默推送通知。默认值为 `false`。

    对于 `midi` 权限，你还可以指定：

    - `sysex` {{optional_inline}}
      - : 指示是否需要接收系统独有消息。默认值为 `false`。

### 返回值

一个兑现为 {{domxref("PermissionStatus")}} 对象的 {{jsxref("Promise")}}。

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
