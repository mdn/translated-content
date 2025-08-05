---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

重置由 {{WebExtAPIRef("userScripts.configureWorld")}} 设置的 `USER_SCRIPT` 环境的配置为 {{WebExtAPIRef("userScripts.WorldProperties")}} 中指定的默认值。当默认环境被重置时，所有未显式配置的环境也会被重置。

对环境配置的更改仅适用于新实例：在重新加载文档之前，配置不会应用于通过执行文档中的用户脚本而初始化的环境。然而，当更新配置时，浏览器可能会撤销某些权限。例如，如果扩展将 `messaging` 设置为 `false`，`USER_SCRIPT` 环境中的消息调用可能会失败。

## 语法

```js-nolint
let resettingWorldConfiguration = browser.userScripts.resetWorldConfiguration(
  worldId       // 可选字符串
);
```

### 参数

- `worldId` {{optional_inline}}
  - : `string`。要重置的 `USER_SCRIPT` 环境的 ID。如果省略或为空，则重置默认环境和所有未通过 {{WebExtAPIRef("userScripts.configureWorld")}} 设置配置的环境。

### 返回值

一个 {{JSxRef("Promise")}}，如果环境配置被重置，则其会不带参数地兑现。如果请求失败，promise 会以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
