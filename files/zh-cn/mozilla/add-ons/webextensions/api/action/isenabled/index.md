---
title: action.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/action/isEnabled
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

如果浏览器操作已启用，则返回 `true`。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingIsEnabled = browser.action.isEnabled(
  details // 对象
)
```

### 参数

- `details`

  - : `object`。可选的包含要检查的 `tabId` 或 `windowId` 的对象。

    - `tabId` {{optional_inline}}
      - : `integer`，指定要检查的标签页的 id。
    - `windowId` {{optional_inline}}
      - : `integer`，指定要检查的窗口的 id。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错。
- 若同时未指定 `windowId` 和 `tabId`，则返回全局的启用/禁用状态。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，如果浏览器操作已启用，则兑现 `true`，否则兑现 `false`。

## 示例

检查全局的启用状态：

```js
browser.action.isEnabled({}).then((result) => {
  console.log(result);
});
```

检查当前活动标签页的启用状态：

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
