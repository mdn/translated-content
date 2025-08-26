---
title: userScripts.getWorldConfigurations()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getWorldConfigurations
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

返回扩展通过 {{WebExtAPIRef("userScripts.configureWorld()")}} 注册的所有 `USER_SCRIPT` 环境的配置。

## 语法

```js-nolint
const gettingWorldConfigurations = await browser.userScripts.getWorldConfigurations();
```

### 参数

此函数不接受任何参数。

### 返回值

一个 {{JSxRef("Promise")}}，其会以 {{WebExtAPIRef("userScripts.WorldProperties")}} 对象的数组兑现。如果请求失败，则该 promise 将以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
