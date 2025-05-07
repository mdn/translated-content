---
title: userScripts.getWorldConfigurations()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getWorldConfigurations
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

返回扩展通过 {{WebExtAPIRef("userScripts.configureWorld()")}} 注册的所有 `USER_SCRIPT` 世界配置。

## 语法

```js-nolint
const gettingWorldConfigurations = await browser.userScripts.getWorldConfigurations();
```

### 参数

此函数不接受任何参数。

### 返回值

一个 {{JSxRef("Promise")}}，其解析值为 {{WebExtAPIRef("userScripts.WorldProperties")}} 对象的数组。如果请求失败，Promise 将以错误消息被拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
