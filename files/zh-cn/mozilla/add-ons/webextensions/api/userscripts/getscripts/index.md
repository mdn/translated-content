---
title: userScripts.getScripts()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getScripts
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

返回扩展注册的用户脚本。

## 语法

```js-nolint
const gettingUserScripts = await browser.userScripts.getScripts(
  filter       // 对象
);
```

### 参数

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}。要返回的用户脚本的 ID 列表。

### 返回值

一个会兑现为 {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 数组的 {{JSxRef("Promise")}} 对象。如果没有找到匹配的用户脚本，则兑现的数组为空。如果请求失败，则该 promise 将以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
