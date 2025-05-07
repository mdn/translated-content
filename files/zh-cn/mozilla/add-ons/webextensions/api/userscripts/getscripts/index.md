---
title: userScripts.getScripts()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

返回扩展注册的用户脚本。

## 语法

```js-nolint
const gettingUserScripts = await browser.userScripts.getScripts(
  filter       // 对象
);
```

### 参数

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}。要返回的用户脚本 ID 列表。

### 返回值

如果找到匹配的用户脚本，返回一个包含 {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 对象的数组的 {{JSxRef("Promise")}}。如果没有找到匹配的用户脚本，数组为空。如果请求失败，Promise 将被拒绝并返回错误信息。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
