---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

为扩展配置 `USER_SCRIPT` 执行环境。

对世界配置的更改仅适用于新实例：配置不会应用于已初始化的世界，直到文档重新加载。然而，当更新配置时，浏览器可能会撤销某些权限。例如，如果扩展将 `messaging` 设置为 `false`，来自 `USER_SCRIPT` 世界的消息调用可能会失败。

世界配置会一直保留，直到扩展更新或通过 {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}} 重置配置。

## 语法

```js-nolint
let configuredWorld = browser.userScripts.configureWorld(
  properties       // 对象
);
```

### 参数

- `properties`

  - : {{WebExtAPIRef("userScripts.WorldProperties")}}。`USER_SCRIPT` 世界的配置详情。

    当 `worldId` 被省略或为空字符串时，更新将应用于默认世界和所有没有显式配置的世界。当指定了 `worldId` 时，仅配置该世界。

    当更新默认世界和没有显式配置的世界时，如果省略了属性，则使用 {{WebExtAPIRef("userScripts.WorldProperties")}} 的默认值。

### 返回值

如果请求成功，返回一个没有参数的 {{JSxRef("Promise")}}。如果请求失败，Promise 将被拒绝并返回错误信息。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
