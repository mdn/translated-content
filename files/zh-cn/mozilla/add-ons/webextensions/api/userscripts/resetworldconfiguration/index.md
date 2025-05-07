---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

重置由 {{WebExtAPIRef("userScripts.configureWorld")}} 设置的 `USER_SCRIPT` 世界的配置为 {{WebExtAPIRef("userScripts.WorldProperties")}} 中指定的默认值。当默认世界被重置时，所有未显式配置的世界也会被重置。

对世界配置的更改仅适用于新实例：在重新加载文档之前，配置不会应用于通过执行文档中的用户脚本而初始化的世界。然而，当更新配置时，浏览器可能会撤销某些权限。例如，如果扩展将 `messaging` 设置为 `false`，来自 `USER_SCRIPT` 世界的消息调用可能会失败。

## 语法

```js-nolint
let resettingWorldConfiguration = browser.userScripts.resetWorldConfiguration(
  worldId       // 可选字符串
);
```

### 参数

- `worldId` {{optional_inline}}
  - : `string`。要重置的 `USER_SCRIPT` 世界的 ID。如果省略或为空，则重置默认世界和所有未通过 {{WebExtAPIRef("userScripts.configureWorld")}} 设置配置的世界。

### 返回值

一个 {{JSxRef("Promise")}}，如果世界配置被重置，则该 Promise 会不带参数地兑现。如果请求失败，Promise 会以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
