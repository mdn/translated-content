---
title: action.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/action/isEnabled
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

在浏览器操作被启用时返回 `true`。

> [!NOTE]
> 该 API 在 Manifest V3 或更高中可用。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingIsEnabled = browser.action.isEnabled(
  details // object
)
```

### 参数

- `details`

  - : `object`。可选的包含 `tabId` 或 `windowId` 用于检查的对象。

    - `tabId` {{optional_inline}}
      - : `integer`。指定要检查的标签的 id。
    - `windowId` {{optional_inline}}
      - : `integer`。指定要检查的窗口的 id。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错。
- 若同时未指定 `windowId` 和 `tabId`，则返回全局的启用/禁用状态。

### 返回值

以 `true`（启用）、`false`（禁用）形式兑现插件的浏览器操作状态的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 示例

检查全局的启用状态：

```js
browser.action.isEnabled({}).then((result) => {
  console.log(result);
});
```

检查当前活动标签的启用状态：

```js
async function enabledInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let enabled = await browser.action.isEnabled({
    tabId: tabs[0].id,
  });
  console.log(enabled);
}
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}
