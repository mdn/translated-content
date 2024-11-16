---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

创建一个新的场景身份。创建后，用户将能够创建属于这个场景身份的新标签，就像他们使用内置身份一样。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let createContext = browser.contextualIdentities.create(
  details                  // 对象
)
```

### 参数

- `details`

  - : `object`。包含新场景身份属性的对象。这包含以下属性：

    - `name`

      - : `string`。新标识的名称。这将显示在浏览器的用户界面中，使用户能够打开属于此身份的新标签。它还将在属于此身份的标签的 URL 栏中显示。

    - `color`

      - : `string`。与新身份关联的颜色。这将用于突出显示属于此身份的标签。你可以在此处提供以下任何值：

        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon`

      - : `string`。显示在属于此身份的标签的 URL 栏中的图标名称。你可以在此处提供以下任何值：

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

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个描述新身份的 {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}}。如果场景身份特性未启用，则该 promise 将被拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

此示例创建一个新的场景身份并记录其 cookie 存储 ID：

```js
function onCreated(context) {
  console.log(`新身份的 ID 是：${context.cookieStoreId}。`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .create({
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onCreated, onError);
```

{{WebExtExamples}}
