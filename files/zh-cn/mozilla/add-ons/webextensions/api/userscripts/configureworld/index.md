---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

为扩展配置 `USER_SCRIPT` 执行环境。

对环境配置的更改仅适用于新实例：在重新加载文档之前，配置不会应用于通过执行文档中的用户脚本而初始化的环境。然而，当更新配置时，浏览器可能会撤销某些权限。例如，如果扩展将 `messaging` 设置为 `false`，来自 `USER_SCRIPT` 环境的消息调用可能会失败。

环境的配置会一直保留，直至扩展被更新或通过调用 {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}} 重置了这一配置。

## 语法

```js-nolint
let configuredWorld = browser.userScripts.configureWorld(
  properties       // 对象
);
```

### 参数

- `properties`
  - : {{WebExtAPIRef("userScripts.WorldProperties")}}。`USER_SCRIPT` 环境的配置详情。

    当 `worldId` 被省略或为空字符串时，更新将应用于默认环境和所有没有显式配置的环境。当指定了 `worldId` 时，仅将只配置这一环境。

    当更新默认环境和没有显式配置的环境时，如果省略了属性，则使用 {{WebExtAPIRef("userScripts.WorldProperties")}} 的默认值。

### 返回值

一个 {{JSxRef("Promise")}}，当请求成功时会不带参数地兑现。如果请求失败，则该 promise 将以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
