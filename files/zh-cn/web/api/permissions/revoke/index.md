---
title: "Permissions: revoke() method"
slug: Web/API/Permissions/revoke
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}{{deprecated_header}}

{{domxref("Permissions")}} 接口的 **`revoke()`** 方法可将当前设置的权限还原为默认状态，即通常的 `prompt` 状态。该方法在全局 {{domxref("Permissions")}} 对象 {{domxref("navigator.permissions")}} 上调用。

## 语法

```js-nolint
revoke(descriptor)
```

### 参数

- `descriptor`
  - ：一个基于 `PermissionDescriptor` 字典的对象，用于设置由逗号分隔的键——值对列表组成的操作选项。可用的选项有：
    - `name`
      - ：要查询其权限的 API 的名称。有效值为 `geolocation`、`midi`、`notifications` 和 `push`。
    - `userVisibleOnly`
      - ：（仅限推送，Firefox 不支持--请参阅下面的 [浏览器兼容性](#browser_compatibility) 部分）表示是否要为每条信息显示通知，还是能够发送静默推送通知。默认为 "false"。
    - `sysex` (仅限 MIDI)
      - ：表示是否需要和/或接收系统专用信息。默认为 "false"。

> **备注：** 从 Firefox 44 开始，[Notifications](/zh-CN/docs/Web/API/Notifications_API)和[Push](/zh-CN/docs/Web/API/Push_API)的权限已经合并。如果权限已授予（例如由用户在相关权限对话框中授予），`navigator.permissions.query()` 将为 `notifications` 和 `push` 返回 `true` 。

> **备注：** `persistent-storage` 权限允许使用持久盒（即 [persistent storage](https://storage.spec.whatwg.org/#persistence)）进行存储，如 [Storage API](https://storage.spec.whatwg.org/) 所述。

### 返回值

{{jsxref("Promise")}}会调用其对应处理程序，该处理程序会使用
{{domxref("PermissionStatus")}}对象，指示请求的结果。

### 异常情况

- {{jsxref("TypeError")}}
  - ：以某种方式检索 `PermissionDescriptor` 信息失败，或该权限不存在或当前不支持（如 `midi`，或带有 `userVisibleOnly` 的 `push`）。

## 例子

应用程序可使用此函数请求撤销自己的地理位置 API 权限。

```js
function revokePermission() {
  navigator.permissions.revoke({ name: "geolocation" }).then((result) => {
    report(result.state);
  });
}
```

## 浏览器兼容性

{{Compat}}
