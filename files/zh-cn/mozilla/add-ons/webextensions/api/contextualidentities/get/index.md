---
title: contextualIdentities.get()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/get
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

获取给定其 cookie 存储 ID 的上下文身份的信息。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getContext = browser.contextualIdentities.get(
  cookieStoreId                  // 字符串
)
```

### 参数

- `cookieStoreId`
  - : `string`。这个上下文身份的 cookie 存储 ID。因为上下文身份都有自己的 cookie 存储，所以这充当上下文身份本身的标识符。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个描述该身份的 {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}}。如果找不到身份或上下文身份功能未启用，则该 promise 将被拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

此示例尝试检索 ID 为“firefox-container-1”的上下文身份：

```js
function onGot(context) {
  if (!context) {
    console.error("上下文未找到");
  } else {
    console.log(`名字：${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.get("firefox-container-1").then(onGot, onError);
```

{{WebExtExamples}}
