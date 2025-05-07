---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

重置由 {{WebExtAPIRef("userScripts.configureWorld")}} 设置的 `USER_SCRIPT` 世界的配置为 {{WebExtAPIRef("userScripts.WorldProperties")}} 中指定的默认值。当默认世界被重置时，所有未显式配置的世界也会被重置。

对世界配置的更改仅适用于该世界的新实例：配置不会应用于已通过用户脚本在文档中初始化的世界，直到文档重新加载。然而，当配置更新时，浏览器可能会撤销某些权限。例如，当 `messaging` 被重置为 `false` 时，来自 `USER_SCRIPT` 世界的消息调用可能会失败。

## 语法

```js-nolint
let resettingWorldConfiguration = browser.userScripts.resetWorldConfiguration(
  worldId       // 可选字符串
);
```

### 参数

- `worldId` {{optional_inline}}
  - : `string` 要重置的 `USER_SCRIPT` 世界的 ID。如果省略或为空，则重置默认世界和所有未通过 {{WebExtAPIRef("userScripts.configureWorld")}} 设置配置的世界。

### 返回值

一个 {{JSxRef("Promise")}}，如果世界配置被重置，则该 Promise 会被 fulfilled 且无参数。如果请求失败，Promise 会被 rejected 并带有错误消息。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
