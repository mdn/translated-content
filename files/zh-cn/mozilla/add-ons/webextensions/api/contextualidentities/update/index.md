---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

更新给定 cookie 存储 ID 的场景身份的属性。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let createContext = browser.contextualIdentities.update(
  cookieStoreId,           // 字符串
  details                  // 对象
)
```

### 参数

- `cookieStoreId`
  - : `string`。场景身份的 cookie 存储的 ID。由于每个场景身份都有自己的 cookie 存储，因此这也作为场景身份的标识符。
- `details`

  - : `object`。包含要更改的属性的新值的对象。可以包含以下任意属性：

    - `name` {{optional_inline}}

      - : `string`。身份的新名称。这将显示在浏览器的用户界面中，用户可以在该身份中打开新标签页。它还会显示在属于该身份的标签页的 URL 栏中。

    - `color` {{optional_inline}}

      - : `string`。身份的新颜色。这将用于突出显示属于该身份的标签页。可以提供以下任意值：

        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon` {{optional_inline}}

      - : `string`。身份的新图标。可以提供以下任意值：

        - "fingerprint"
        - "briefcase"
        - "dollar"
        - "cart"
        - "circle"
        - "gift"
        - "vacation"
        - "food"
        - "fruit"
        - "pet"
        - "tree"
        - "chill"
        - "fence"

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在更新身份完成时其会兑现一个描述已更新身份的 {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} 对象。如果无法找到该身份或未启用场景身份特性，则 promise 被拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

此示例将 ID 为“firefox-container-1”的上下文身份更新为具有新名称、新颜色和新图标：

```js
function onUpdated(context) {
  console.log(`新身份的名称：${context.name}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .update("firefox-container-1", {
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onUpdated, onError);
```

{{WebExtExamples}}
