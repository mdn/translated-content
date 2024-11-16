---
title: Permissions：revoke() 方法
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}{{deprecated_header}}

{{domxref("Permissions")}} 接口的 **`revoke()`** 方法可将当前设置的权限还原为默认状态，即通常的 `prompt` 状态。该方法在全局 {{domxref("Permissions")}} 对象 {{domxref("navigator.permissions")}} 上调用。

此方法已从主要权限 API 规范中删除，因为其用例不明确。权限由浏览器管理，当前权限模型不涉及网站开发人员能够强制请求或撤销权限。浏览器已以首选项形式提供此 API，但它不太可能达到标准轨道。有关更多上下文，请参阅[删除 `permissions.revoke()` 的原始讨论](https://github.com/w3c/permissions/issues/46)。

## 语法

```js-nolint
revoke(permissionDescriptor)
```

### 参数

- `permissionDescriptor`

  - : 设置 `revoke` 操作选项的对象。此描述符的可用选项取决于权限类型。所有权限都有一个名称：

    - `name`
      - : 包含要查询其权限的 API 名称的字符串。如果浏览器不支持该权限名称，则返回的 {{jsxref("Promise")}} 将使用 {{jsxref("TypeError")}} 拒绝。

    对于 `push` 权限，你还可以指定：

    - `userVisibleOnly` {{optional_inline}}
      - : （仅推送，Firefox 不支持——请参阅下面的浏览器支持部分）表示你是否要为每条消息显示通知或能够发送静默推送通知。默认值为 `false`。

    对于 `midi` 权限，你还可以指定：

    - `sysex` {{optional_inline}}
      - : 指示是否需要接收系统独有消息。默认值为 `false`。

### 返回值

使用 {{domxref("PermissionStatus")}} 对象调用其兑现处理器以指示请求的结果的 {{jsxref("Promise")}}。

### 异常

- {{jsxref("TypeError")}}
  - : 以某种方式检索 `PermissionDescriptor` 信息失败，或该权限不存在或当前不支持（如 `midi`，或带有 `userVisibleOnly` 的 `push`）。

## 示例

应用程序可使用此函数请求撤销自己的地理位置 API 权限。

```js
function revokePermission() {
  navigator.permissions.revoke({ name: "geolocation" }).then((result) => {
    report(result.state);
  });
}
```

## 规范

{{Compat}}

## 浏览器兼容性

{{Compat}}
