---
title: tabGroups.get
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

返回有关标签组的详细信息。

## 语法

```js-nolint
let tabGroupDetails = await browser.tabGroups.get(
    groupId                // 整型
);
```

### 参数

- `groupId`
  - : `integer`。要返回详细信息的标签组 ID。

## 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其将兑现为 {{WebExtAPIRef("tabGroups.TabGroup")}} 对象。如果请求失败，则该 promise 将以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
