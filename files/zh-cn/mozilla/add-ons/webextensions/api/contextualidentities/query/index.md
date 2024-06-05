---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

获取有关所有上下文身份的信息，或获取与给定过滤参数匹配的上下文身份的信息。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getContext = browser.contextualIdentities.query(
  details                  // 对象
)
```

### 参数

- `details`

  - : object。一个用于过滤返回的上下文身份的对象。可以包含以下任意属性：

    - `name` {{optional_inline}}
      - : `string`。仅返回具有此名称的上下文身份。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在上下文身份查询完成时其会兑现一个 {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} 对象数组，每个对象描述一个身份。如果未启用上下文身份功能，则 promise 被拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

检索所有上下文身份，并记录它们的名称：

```js
function onGot(contexts) {
  for (const context of contexts) {
    console.log(`名称：${context.name}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities.query({}).then(onGot, onError);
```

检索所有名称为“my-thing”的上下文身份，并记录它们的名称：

```js
function onGot(contexts) {
  for (const context of contexts) {
    console.log(`名称：${context.name}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities
  .query({
    name: "my-thing",
  })
  .then(onGot, onError);
```

{{WebExtExamples}}
