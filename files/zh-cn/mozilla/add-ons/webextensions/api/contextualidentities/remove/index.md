---
title: contextualIdentities.remove()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

移除给定 cookie store ID 的上下文身份。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removeContext = browser.contextualIdentities.remove(
  cookieStoreId                  // 字符串
)
```

### 参数

- `cookieStoreId`
  - : `string`。上下文身份的 cookie store 的 ID。由于每个上下文身份都有自己的 cookie store，因此这也作为上下文身份的标识符。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在上下文身份删除完成时其会兑现一个描述已删除身份的 {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} 对象。如果无法找到该身份或未启用上下文身份功能，则 promise 被拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

此示例尝试移除 ID 为“firefox-container-1”的上下文身份：

```js
function onRemoved(context) {
  if (!context) {
    console.error("上下文未找到");
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
