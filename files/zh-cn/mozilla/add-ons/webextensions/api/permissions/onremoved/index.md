---
title: permissions.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

当扩展的部分权限被移除时触发。

## 语法

```js-nolint
browser.permissions.onRemoved.addListener(listener)
browser.permissions.onRemoved.removeListener(listener)
browser.permissions.onRemoved.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当事件发生时调用的函数。该函数接收以下参数：
    - `permissions`
      - : 包含被移除的权限的 {{WebExtAPIRef("permissions.Permissions")}} 对象。

## 浏览器兼容性

{{Compat}}

## 示例

```js
function handleRemoved(permissions) {
  console.log(`被移除的 API 权限：${permissions.permissions}`);
  console.log(`被移除的主机权限：${permissions.origins}`);
}

browser.permissions.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.permissions`](https://developer.chrome.google.cn/docs/extensions/reference/api/permissions) API。
