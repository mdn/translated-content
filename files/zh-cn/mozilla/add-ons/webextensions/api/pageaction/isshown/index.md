---
title: pageAction.isShown()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/isShown
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

如果页面操作在指定的标签页中正在显示则返回 `true`。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingIsShown = browser.pageAction.isShown(
  details // 对象
)
```

### 参数

- `details`
  - : `object`。包含要检查的 `tabId` 的对象。
    - `tabId`
      - : `integer`。要检查的标签页的 ID。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，如果在指定的标签页中拓展的页面操作正在显示，则兑现为 `true`，否则兑现为 `false`。

## 浏览器兼容性

{{Compat}}

## 示例

检查当前活动标签页的页面操作的状态。

```js
async function shownInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let shown = await browser.pageAction.isShown({
    tabId: tabs[0].id,
  });
  console.log(shown);
}
```

{{WebExtExamples}}
