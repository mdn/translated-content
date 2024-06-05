---
title: browserAction.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

如果浏览器操作是启用的，则返回 `true`。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingIsEnabled = browser.browserAction.isEnabled(
  details // object
)
```

### 参数

- `details`

  - : `object`。一个可选包含 `tabId` 或 `windowId` 以供检查的对象。

    - `tabId` {{optional_inline}}
      - : `integer`。要检查的标签页的 ID。
    - `windowId` {{optional_inline}}
      - : `integer`。要检查的窗口的 ID。

<!---->

- 如果同时提供 `windowId` 和 `tabId`，则函数失败。
- 如果 `windowId` 和 `tabId` 都被省略，则返回全局启用/禁用状态。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，取决于扩展的浏览器操作是否启用，其会兑现 `true` 或 `false`。

## 浏览器兼容性

{{Compat}}

## 示例

检查全局状态：

```js
browser.browserAction.isEnabled({}).then((result) => {
  console.log(result);
});
```

检查当前活动标签页的状态：

```js
async function enabledInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let enabled = await browser.browserAction.isEnabled({
    tabId: tabs[0].id,
  });
  console.log(enabled);
}
```

{{WebExtExamples}}
