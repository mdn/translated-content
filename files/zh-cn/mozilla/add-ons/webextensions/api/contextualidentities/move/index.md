---
title: contextualIdentities.move()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/move
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

将一个或多个场景身份移动到场景身份列表中的新位置。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let moveContainers = browser.contextualIdentities.move(
  cookieStoreIds,                  // 字符串或字符串数组
  position                         // 整数
)
```

### 参数

- `cookieStoreIds`
  - : 字符串或字符串数组。要移动的场景身份的 cookie 存储 ID 的有序列表。

- `position`
  - : `integer`。将 `cookieStoreIds` 移动到场景身份列表中的位置。使用基于零的索引；`0` 表示第一个位置。`-1` 表示将项目移动到列表末尾。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在场景身份重新排序完成时其会兑现。如果请求无效或未启用场景身份特性，则 promise 将被拒绝。

## 示例

此示例将第一个身份移动到末尾，然后再移回到开始位置。

```js
let identities = await browser.contextualIdentities.query({});
let firstId = identities[0].cookieStoreId;

// 将第一个身份移动到末尾。
await browser.contextualIdentities.move(firstId, -1);

// 再将身份移回到开始位置。
await browser.contextualIdentities.move(firstId, 0);
```

另一种将第一个身份移动到末尾的方法是将所有其他身份移动到开始位置。

```js
let identities = await browser.contextualIdentities.query({});
let ids = identities.map((identity) => identity.cookieStoreId);
// 创建一个不包含第一个项目的数组：
let otherIds = ids.slice(1);

// 将其它身份移动到开始位置，
// 实际上将第一个身份放在了末尾。
await browser.contextualIdentities.move(otherIds, 0);
```

此示例将“个人”身份移动到“工作”身份之前。此示例假设存在具有这些名称的容器。在自定义或本地化（非英文）Firefox 实例中可能会不存在这些容器。

```js
let identities = await browser.contextualIdentities.query({});

// 找到名称为“个人”的容器的索引和 ID。
let personalIndex = identities.findIndex((ci) => ci.name === "个人");
if (personalIndex === -1) {
  throw new Error("“个人”容器未找到！");
}
let personalId = identities[personalIndex].cookieStoreId;

// 找到名称为“工作”的容器的索引。
let workIndex = identities.findIndex((identity) => identity.name === "工作");
if (workIndex === -1) {
  throw new Error("“工作”容器未找到！");
}

if (personalIndex < workIndex) {
  // 当“个人”身份移动时，所有后续身份向左移动一个位置。为了将“个人”身份放在“工作”身份之前，我们应当减去一个。
  workIndex--;
}
await browser.contextualIdentities.move(personalId, workIndex);
```

## 浏览器兼容性

{{Compat}}
