---
title: contextualIdentities.remove()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

移除给定 cookie 存储 ID 的场景身份。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removeContext = browser.contextualIdentities.remove(
  cookieStoreId                  // 字符串
)
```

### 参数

- `cookieStoreId`
  - : `string`。场景身份的 cookie 存储 的 ID。由于每个场景身份都有自己的 cookie 存储，因此这也作为场景身份的标识符。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在场景身份删除完成时其会兑现一个描述已删除身份的 {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} 对象。如果无法找到该身份或未启用场景身份特性，则 promise 将被拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

此示例尝试移除 ID 为“firefox-container-1”的场景身份：

```js
function onRemoved(context) {
  if (!context) {
    console.error("场景未找到");
  } else {
    console.log(`已删除身份：${context.cookieStoreId}.`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .remove("firefox-container-1")
  .then(onRemoved, onError);
```

{{WebExtExamples}}
